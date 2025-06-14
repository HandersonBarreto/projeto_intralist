// resources/static/js/register-employee.js

// O API_BASE_URL virá do api.js que será carregado antes.
// const API_BASE_URL = 'http://localhost:8080'; // Remova ou comente esta linha, pois já virá do api.js

// Objeto para armazenar o departamento selecionado.
let departamentoSelecionado = null;

document.addEventListener('DOMContentLoaded', function () {
    // Carrega os departamentos disponíveis (apenas para fins de log, a busca é dinâmica).
    carregarDepartamentos();

    // Verifica se é uma edição.
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
        // Carrega os dados do funcionário para edição.
        fetch(`${API_BASE_URL}/funcionarios/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Funcionário não encontrado ou erro na API.');
                }
                return response.json();
            })
            .then(async data => {
                document.getElementById('funcionarioId').value = data.id;
                document.getElementById('inputNome').value = data.nome;
                document.getElementById('inputCPF').value = data.cpf;
                document.getElementById('inputDescricao').value = data.descricao;
                document.getElementById('inputEmail').value = data.email;
                document.getElementById('inputCargo').value = data.cargo;
                document.getElementById('inputTelefone').value = data.telefone;
                document.getElementById('inputStatusFuncionario').value = data.statusFuncionario;
                // O departamentoId é definido aqui, mas o nome é buscado abaixo
                document.getElementById('inputDepartamentoId').value = data.departamentoId;

                // Carrega o nome do departamento para exibir na edição.
                if (data.departamentoId) {
                    try {
                        const deptoResponse = await fetch(`${API_BASE_URL}/departamentos/${data.departamentoId}`);
                        if (deptoResponse.ok) {
                            const deptoData = await deptoResponse.json();
                            departamentoSelecionado = deptoData; // Armazena o objeto completo
                            atualizarDepartamentoSelecionado();
                        } else {
                            console.error('Erro ao carregar departamento para edição: ', deptoResponse.status);
                            mostrarToast(`Erro ao carregar departamento: ${deptoResponse.statusText}`, 'danger');
                        }
                    } catch (error) {
                        console.error('Erro ao carregar departamento para edição:', error);
                        mostrarToast('Erro ao carregar departamento.', 'danger');
                    }
                }


                // Altera o texto do botão para "Atualizar".
                document.getElementById('liveToastBtn').textContent = 'Atualizar';
            })
            .catch(error => {
                console.error('Erro ao carregar funcionário:', error);
                mostrarToast('Erro ao carregar funcionário para edição: ' + error.message, 'danger');
            });
    }

    // Configura máscaras para CPF e Telefone.
    document.getElementById('inputCPF').addEventListener('input', function() {
        aplicarMascaraCPF(this);
    });

    document.getElementById('inputTelefone').addEventListener('input', function() {
        aplicarMascaraTelefone(this);
    });

    // Configura o envio do formulário.
    document.getElementById('funcionarioForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o recarregamento padrão da página
        enviarFormulario();
    });

    // Garante que se o departamento já estiver selecionado na edição, ele é exibido
    if (departamentoSelecionado) {
        atualizarDepartamentoSelecionado();
    }
}); // Fim do DOMContentLoaded

// Função para carregar departamentos (apenas para fins de log, a busca é dinâmica).
async function carregarDepartamentos() {
    try {
        const response = await fetch(`${API_BASE_URL}/departamentos`);
        if (!response.ok) {
            throw new Error('Erro ao carregar departamentos.');
        }
        const departamentos = await response.json();
        console.log('Departamentos carregados:', departamentos);
    } catch (error) {
        console.error('Erro ao carregar departamentos:', error);
        mostrarToast('Erro ao carregar departamentos iniciais.', 'danger');
    }
}

// Função para aplicar debounce na busca.
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Configura busca incremental para departamentos.
document.getElementById('buscaDepartamento').addEventListener('input', debounce(async (e) => {
    const termo = e.target.value.trim();
    const resultadosContainer = document.getElementById('resultadosDepartamentos');

    // Sempre limpa os resultados anteriores antes de uma nova busca
    resultadosContainer.innerHTML = '';
    resultadosContainer.style.display = 'none';

    if (termo.length < 2) { // Só busca se o termo tiver 2 ou mais caracteres
        return;
    }

    try {
        // Ajuste a URL da API para o endpoint de busca real de departamentos
        // O seu backend tem um endpoint de busca por nome com paginação?
        // Vou assumir que sim, algo como /departamentos/search?nome=...&size=...
        const response = await fetch(`${API_BASE_URL}/departamentos/search?nome=${encodeURIComponent(termo)}&size=5`);

        if (!response.ok) {
            // Se a busca retornar 404, pode significar que o endpoint de busca não existe
            // Ou que não há resultados.
            // É importante tratar erros específicos da API aqui se houver.
            if (response.status === 404) {
                resultadosContainer.innerHTML = '<div class="result-item">Nenhum departamento encontrado.</div>';
            } else {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            }
        }

        const data = await response.json(); // Se for uma Page<Departamento>, vai ter content[]

        if (data.content && data.content.length > 0) { // Se a resposta for uma Page, verifique data.content
            data.content.forEach(depto => {
                const div = document.createElement('div');
                div.className = 'result-item';
                div.dataset.id = depto.id;
                div.innerHTML = `${depto.nome} <span class="text-muted small">(${depto.localizacao || ''})</span>`; // Exibe localização também

                div.addEventListener('click', () => {
                    departamentoSelecionado = depto; // Guarda o objeto depto completo
                    atualizarDepartamentoSelecionado();
                    e.target.value = ''; // Limpa o campo de busca
                    resultadosContainer.style.display = 'none';
                });

                resultadosContainer.appendChild(div);
            });
            resultadosContainer.style.display = 'block';
        } else {
            resultadosContainer.innerHTML = '<div class="result-item">Nenhum departamento encontrado.</div>';
            resultadosContainer.style.display = 'block';
        }
    } catch (error) {
        console.error('Erro ao buscar departamentos:', error);
        resultadosContainer.innerHTML = '<div class="result-item text-danger">Erro ao buscar departamentos.</div>';
        resultadosContainer.style.display = 'block';
    }
}, 300)); // Debounce de 300ms

// Atualiza o departamento selecionado na UI.
function atualizarDepartamentoSelecionado() {
    const container = document.getElementById('departamentoSelecionado');
    container.innerHTML = ''; // Limpa antes de adicionar

    if (departamentoSelecionado) {
        const div = document.createElement('div');
        div.className = 'selected-item';
        div.innerHTML = `
            ${departamentoSelecionado.nome}
            <button type="button" class="remove-btn" data-id="${departamentoSelecionado.id}">&times;</button>
        `;

        div.querySelector('.remove-btn').addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que o clique se propague e feche a busca
            departamentoSelecionado = null; // Remove o departamento selecionado
            atualizarDepartamentoSelecionado(); // Atualiza a UI (limpa o item selecionado)
            document.getElementById('inputDepartamentoId').value = ''; // Limpa o ID oculto
            document.getElementById('buscaDepartamento').value = ''; // Opcional: limpa a busca de departamento
        });

        container.appendChild(div);
        document.getElementById('inputDepartamentoId').value = departamentoSelecionado.id;
        document.getElementById('buscaDepartamento').value = ''; // Limpa o campo de busca depois de selecionar
        document.getElementById('buscaDepartamento').style.display = 'none'; // Oculta o campo de busca após seleção
    } else {
        // Se não há departamento selecionado, garante que o campo de busca esteja visível
        document.getElementById('buscaDepartamento').style.display = 'block';
    }
}

// Fecha os resultados ao clicar fora.
document.addEventListener('click', (e) => {
    // Verifica se o clique não foi dentro do container de busca ou dos resultados
    if (!e.target.closest('.search-container') && document.getElementById('resultadosDepartamentos')) {
        document.getElementById('resultadosDepartamentos').style.display = 'none';
    }
});

// Função para enviar o formulário.
async function enviarFormulario() {
    const id = document.getElementById('funcionarioId').value;
    const form = document.getElementById('funcionarioForm');

    // Validação básica do formulário antes de enviar
    if (!form.checkValidity()) {
        form.classList.add('was-validated'); // Adiciona a classe de validação do Bootstrap
        mostrarToast('Preencha todos os campos obrigatórios.', 'danger');
        return;
    }
    form.classList.remove('was-validated');

    // Validação do departamento.
    if (!departamentoSelecionado || !departamentoSelecionado.id) {
        mostrarToast('Selecione um departamento válido.', 'danger');
        return;
    }

    // Criar o objeto funcionário a partir dos dados do formulário
    const funcionario = {
        id: id ? parseInt(id) : null, // Inclui o ID se for edição
        nome: document.getElementById('inputNome').value,
        fotoUrl: "https://randomuser.me/api/portraits/men/1.jpg", // Valor padrão. Considere um campo para upload.
        cpf: document.getElementById('inputCPF').value,
        descricao: document.getElementById('inputDescricao').value,
        email: document.getElementById('inputEmail').value,
        cargo: document.getElementById('inputCargo').value,
        telefone: document.getElementById('inputTelefone').value,
        statusFuncionario: document.getElementById('inputStatusFuncionario').value,
        departamentoId: departamentoSelecionado.id, // Pega o ID do objeto selecionado
        password: "$2a$10$r8RaL.YIfeXYDVyGDN7ua.OZ/bnmgsgu70qan..9RfcGd40ZUf8la" // Senha padrão ou de um campo
    };

    const url = funcionario.id ? `${API_BASE_URL}/funcionarios/${funcionario.id}` : `${API_BASE_URL}/funcionarios`;
    const method = funcionario.id ? 'PUT' : 'POST';

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(funcionario)
        });

        if (!response.ok) {
            // Tenta ler a mensagem de erro do corpo da resposta da API
            const errorData = await response.json().catch(() => null); // Tenta parsear JSON, se falhar, retorna null
            const errorMessage = errorData && errorData.message ? errorData.message : 'Erro desconhecido ao salvar funcionário.';
            throw new Error(errorMessage);
        }

        const data = await response.json();
        mostrarToast(funcionario.id ? 'Funcionário atualizado com sucesso!' : 'Funcionário cadastrado com sucesso!', 'success');

        // Opcional: Limpar o formulário após o cadastro bem-sucedido, se não for edição
        if (!funcionario.id) {
            form.reset();
            departamentoSelecionado = null;
            atualizarDepartamentoSelecionado(); // Limpa o departamento selecionado da UI
        }

        // Redireciona para a lista após 2 segundos.
        setTimeout(() => {
            window.location.href = '../employee/list.html';
        }, 2000);

    } catch (error) {
        console.error('Erro:', error);
        mostrarToast('Erro ao salvar funcionário: ' + error.message, 'danger');
    }
}

// Funções auxiliares para aplicar máscaras.
// As máscaras foram simplificadas para remover os pontos/hífens
// ao pegar o valor, pois o backend geralmente espera apenas dígitos.
// No entanto, para exibir, manteremos a máscara.
function aplicarMascaraCPF(campo) {
    let valor = campo.value.replace(/\D/g, ''); // Remove não dígitos
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    campo.value = valor;
}

function aplicarMascaraTelefone(campo) {
    let valor = campo.value.replace(/\D/g, ''); // Remove não dígitos
    if (valor.length > 10) { // Para (XX) XXXXX-XXXX
        valor = valor.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (valor.length > 5) { // Para (XX) XXXX-XXXX
        valor = valor.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (valor.length > 2) { // Para (XX) XXXX
        valor = valor.replace(/^(\d\d)(\d+)/, '($1) $2');
    } else { // Para (XX
        valor = valor.replace(/^(\d*)/, '($1');
    }
    campo.value = valor;
}

// Função para mostrar o toast de feedback.
function mostrarToast(mensagem, tipo = 'success') {
    const toastLiveExample = document.getElementById('liveToast');
    if (!toastLiveExample) {
        console.error("Elemento Toast não encontrado!");
        alert(mensagem); // Fallback para alerta se o toast não existir
        return;
    }

    const toastBody = toastLiveExample.querySelector('.toast-body');
    const toastHeader = toastLiveExample.querySelector('.toast-header');

    // Resetar classes do cabeçalho antes de adicionar novas
    toastHeader.className = 'toast-header';

    // Adicionar a cor de fundo com base no tipo
    switch(tipo) {
        case 'success':
            toastHeader.classList.add('bg-success', 'text-white');
            break;
        case 'danger':
            toastHeader.classList.add('bg-danger', 'text-white');
            break;
        case 'warning':
            toastHeader.classList.add('bg-warning', 'text-dark');
            break;
        case 'info': // Adicionei info para caso queira
            toastHeader.classList.add('bg-info', 'text-white');
            break;
        default:
            toastHeader.classList.add('bg-primary', 'text-white');
    }

    // Atualizar o ícone do toast (Você não tinha um ícone dinâmico, adicionei aqui)
    const toastImg = toastLiveExample.querySelector('.toast-header img');
    if (toastImg) {
        let iconSrc = '';
        if (tipo === 'success') iconSrc = '../../static/img/icons/square-check-solid.svg';
        else if (tipo === 'danger') iconSrc = '../../static/img/icons/xmark-circle-solid.svg'; // Assumindo que você terá um X
        else if (tipo === 'warning') iconSrc = '../../static/img/icons/triangle-exclamation-solid.svg'; // Assumindo um triângulo de exclamação
        else iconSrc = '../../static/img/icons/info-circle-solid.svg'; // Assumindo um ícone de informação

        toastImg.src = iconSrc;
    }

    toastBody.textContent = mensagem;

    // Certifique-se de que o Bootstrap JS está carregado para usar Toast
    if (typeof bootstrap !== 'undefined' && bootstrap.Toast) {
        const toastBootstrap = new bootstrap.Toast(toastLiveExample);
        toastBootstrap.show();
    } else {
        console.error("Bootstrap Toast não está disponível. Verifique a importação do Bootstrap JS.");
        alert(mensagem); // Fallback caso Bootstrap JS não esteja totalmente carregado
    }
}