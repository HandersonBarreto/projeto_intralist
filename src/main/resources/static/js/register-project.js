// resources/static/js/register-project.js

// API_BASE_URL virá do api.js que será carregado antes.

// Variáveis globais (ou "quase globais") para o projeto e suas tarefas
let projetoId = null;
let projetoDataCriacaoInput;
let projetoDataInicioInput;
let projetoFimPrevistoInput;

document.addEventListener('DOMContentLoaded', function() {
    projetoId = document.getElementById('projetoId').value;
    projetoDataCriacaoInput = document.getElementById('inputDataCriacao');
    projetoDataInicioInput = document.getElementById('inputDataInicio');
    projetoFimPrevistoInput = document.getElementById('inputFimPrevisto');

    // Preenche a data de criação do projeto com a data atual
    const hoje = new Date().toISOString().split('T')[0];
    projetoDataCriacaoInput.value = hoje;

    // Adiciona uma tarefa inicial ao carregar a página
    adicionarTarefa(); // <-- Esta chamada é importante para a primeira tarefa

    // Lógica para edição de projeto
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
        projetoId = id; // Define o ID do projeto para edição
        // Altera o título da página
        document.title = "Editar Projeto";
        document.querySelector('h2.mb-4').textContent = "Editar Projeto";

        // Altera o texto do botão de submit
        document.querySelector('.btn-submit').textContent = "Atualizar Projeto";
        document.querySelector('.btn-submit').classList.remove('btn-success');
        document.querySelector('.btn-submit').classList.add('btn-info');

        fetch(`${API_BASE_URL}/projetos/${id}`)
            .then(response => {
                if (!response.ok) throw new Error('Projeto não encontrado ou erro na API.');
                return response.json();
            })
            .then(async data => {
                document.getElementById('projetoId').value = data.id;
                document.getElementById('inputNome').value = data.nome;
                document.getElementById('inputDescricao').value = data.descricao;
                projetoDataCriacaoInput.value = data.dataCriacao ? data.dataCriacao.split('T')[0] : '';
                projetoDataInicioInput.value = data.dataInicio ? data.dataInicio.split('T')[0] : '';
                projetoFimPrevistoInput.value = data.dataFimPrevisto;
                document.getElementById('inputMeta').value = data.meta;
                document.getElementById('inputRisco').value = data.risco;
                document.getElementById('inputStatusProjeto').value = data.statusProjeto;

                // Limpa tarefas existentes para recarregar
                document.getElementById('tarefasContainer').innerHTML = '';

                // Carrega as tarefas do projeto para edição
                if (data.tarefas && data.tarefas.length > 0) {
                    data.tarefas.forEach(tarefa => adicionarTarefa(tarefa));
                } else {
                    adicionarTarefa(); // Adiciona uma tarefa vazia se não houver nenhuma
                }
                // Após carregar os dados, podemos validar para exibir feedback
                validarDatasProjeto();
            })
            .catch(error => {
                console.error('Erro ao carregar projeto para edição:', error);
                mostrarToast('Erro ao carregar projeto para edição: ' + error.message, 'danger');
            });
    }

    // Adicionar listeners para validação de datas do PROJETO
    projetoDataCriacaoInput.addEventListener('change', validarDatasProjeto);
    projetoDataInicioInput.addEventListener('change', validarDatasProjeto);
    projetoFimPrevistoInput.addEventListener('change', validarDatasProjeto);

    // Configura o envio do formulário.
    document.getElementById('projetoForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const form = this;
        // Primeiro, valida as datas do projeto
        if (!validarDatasProjeto()) {
            mostrarToast('Corrija as datas do projeto antes de enviar.', 'danger');
            return;
        }

        // Valida os campos obrigatórios do projeto (validação HTML5)
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            mostrarToast('Preencha todos os campos obrigatórios do projeto.', 'danger');
            return;
        }
        form.classList.remove('was-validated');

        // Coletar e validar dados das tarefas
        const tarefas = [];
        const tarefasElements = document.querySelectorAll('#tarefasContainer .tarefa-item');

        for (const element of tarefasElements) {
            const tarefaNome = element.querySelector('[name="tarefa_nome"]').value;
            const tarefaDescricao = element.querySelector('[name="tarefa_descricao"]').value;
            const tarefaDataCriacaoInput = element.querySelector('[name="tarefa_dataCriacao"]');
            const tarefaDataInicioInput = element.querySelector('[name="tarefa_dataInicio"]');
            const tarefaFimPrevistoInput = element.querySelector('[name="tarefa_fimPrevisto"]');
            const tarefaFimRealInput = element.querySelector('[name="tarefa_fimReal"]');
            const tarefaStatusSelect = element.querySelector('[name="tarefa_status"]'); // Obter o select
            const tarefaStatus = tarefaStatusSelect.value; // Obter o valor do select

            // Validação de campos obrigatórios da tarefa
            if (!tarefaNome || !tarefaDescricao || !tarefaDataCriacaoInput.value || !tarefaDataInicioInput.value || !tarefaFimPrevistoInput.value) {
                mostrarToast('Preencha todos os campos obrigatórios de cada tarefa.', 'danger');
                // Adicione a classe 'is-invalid' para campos inválidos, se desejar
                if (!tarefaNome) element.querySelector('[name="tarefa_nome"]').classList.add('is-invalid');
                // ... repita para outros campos que podem estar vazios e causar falha
                return;
            }
            // Limpa a validação se estava ok (apenas para este loop)
            element.querySelectorAll('input, select').forEach(field => field.classList.remove('is-invalid'));


            // Validação das datas da TAREFA
            // Passar o status real da tarefa para validarDatasTarefa
            if (!validarDatasTarefa(element, tarefaDataCriacaoInput, tarefaDataInicioInput, tarefaFimPrevistoInput, tarefaFimRealInput, tarefaStatus)) {
                mostrarToast('Corrija as datas e/ou status das tarefas antes de enviar.', 'danger'); // Mensagem mais genérica
                return; // Interrompe o envio se alguma tarefa tiver datas inválidas
            }

            tarefas.push({
                nome: tarefaNome,
                descricao: tarefaDescricao,
                dataCriacao: new Date(tarefaDataCriacaoInput.value).toISOString(),
                dataInicio: new Date(tarefaDataInicioInput.value).toISOString(),
                fimPrevisto: tarefaFimPrevistoInput.value,
                fimReal: tarefaFimRealInput.value ? new Date(tarefaFimRealInput.value).toISOString() : null,
                statusTarefa: tarefaStatus
            });
        }

        // Criar objeto projeto
        const isEdit = !!projetoId;

        const projeto = {
            id: isEdit ? parseInt(projetoId) : null,
            nome: document.getElementById('inputNome').value,
            descricao: document.getElementById('inputDescricao').value,
            dataCriacao: new Date(projetoDataCriacaoInput.value).toISOString(),
            dataInicio: new Date(projetoDataInicioInput.value).toISOString(),
            dataFimPrevisto: projetoFimPrevistoInput.value,
            dataFimReal: null, // Será ajustado abaixo
            meta: document.getElementById('inputMeta').value,
            risco: document.getElementById('inputRisco').value,
            statusProjeto: document.getElementById('inputStatusProjeto').value,
            equipeId: 1, // FIXO POR ENQUANTO
            tarefas: tarefas
        };

        // Lógica para dataFimReal do projeto
        if (projeto.statusProjeto === 'CONCLUIDO') {
            // Se o projeto está concluído, a data de fim real pode ser a data atual
            // ou uma data preenchida pelo usuário, se houver um campo para isso.
            // Por enquanto, vamos assumir que não há um campo para "Fim Real do Projeto"
            // e usar a data atual se o status for CONCLUIDO.
            projeto.dataFimReal = new Date().toISOString();
        } else {
            projeto.dataFimReal = null; // Garante que dataFimReal seja null se o projeto não estiver concluído
        }

        const url = isEdit ? `${API_BASE_URL}/projetos/${projeto.id}` : `${API_BASE_URL}/projetos`;
        const method = isEdit ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(projeto)
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                const errorMessage = errorData && errorData.message ? errorData.message : 'Erro desconhecido ao salvar projeto.';
                throw new Error(errorMessage);
            }

            const data = await response.json();
            mostrarToast(isEdit ? 'Projeto atualizado com sucesso!' : 'Projeto cadastrado com sucesso!', 'success');

            if (!isEdit) {
                form.reset();
                document.getElementById('tarefasContainer').innerHTML = '';
                adicionarTarefa(); // Adiciona a primeira tarefa novamente
            }

            setTimeout(() => {
                window.location.href = 'list.html';
            }, 2000);

        } catch (error) {
            console.error('Erro:', error);
            mostrarToast('Erro ao salvar projeto: ' + error.message, 'danger');
        }
    });
}); // Fim do DOMContentLoaded

// Função para adicionar uma tarefa dinâmica ao formulário
function adicionarTarefa(tarefaExistente = null) {
    const container = document.getElementById('tarefasContainer');
    const index = container.children.length;
    const hoje = new Date().toISOString().split('T')[0];

    // Valores padrão para nova tarefa ou valores da tarefa existente
    const nome = tarefaExistente ? tarefaExistente.nome : '';
    const descricao = tarefaExistente ? tarefaExistente.descricao : '';
    const dataCriacao = tarefaExistente && tarefaExistente.dataCriacao ? tarefaExistente.dataCriacao.split('T')[0] : hoje;
    const dataInicio = tarefaExistente && tarefaExistente.dataInicio ? tarefaExistente.dataInicio.split('T')[0] : '';
    const fimPrevisto = tarefaExistente ? tarefaExistente.fimPrevisto : '';
    const statusTarefa = tarefaExistente ? tarefaExistente.statusTarefa : 'NAO_INICIADA';
    const fimReal = tarefaExistente && tarefaExistente.fimReal ? tarefaExistente.fimReal.split('T')[0] : '';

    const tarefaHTML = `
        <div class="tarefa-item border p-3 mb-3" data-index="${index}">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h6 class="mb-0">Tarefa ${index + 1}</h6>
                <button type="button" class="btn btn-sm btn-danger" onclick="this.closest('.tarefa-item').remove()">
                    <i class="fas fa-times"></i> Remover
                </button>
            </div>
            <div class="row g-2">
                <div class="col-md-6">
                    <label class="form-label">Nome</label>
                    <input type="text" class="form-control" name="tarefa_nome" value="${nome}" required>
                    <div class="invalid-feedback">O nome da tarefa é obrigatório.</div>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Descrição</label>
                    <input type="text" class="form-control" name="tarefa_descricao" value="${descricao}" required>
                    <div class="invalid-feedback">A descrição da tarefa é obrigatória.</div>
                </div>
                <div class="col-md-4">
                    <label class="form-label">Data Criação</label>
                    <input type="date" class="form-control" name="tarefa_dataCriacao" value="${dataCriacao}" required>
                    <div class="invalid-feedback">Data de criação da tarefa é obrigatória.</div>
                </div>
                <div class="col-md-4">
                    <label class="form-label">Data Início</label>
                    <input type="date" class="form-control" name="tarefa_dataInicio" value="${dataInicio}" required>
                    <div class="invalid-feedback">Data de início da tarefa é obrigatória.</div>
                </div>
                <div class="col-md-4">
                    <label class="form-label">Fim Previsto</label>
                    <input type="date" class="form-control" name="tarefa_fimPrevisto" value="${fimPrevisto}" required>
                    <div class="invalid-feedback">Data de fim previsto da tarefa é obrigatória.</div>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Status</label>
                    <select class="form-select" name="tarefa_status">
                        <option value="NAO_INICIADA" ${statusTarefa === 'NAO_INICIADA' ? 'selected' : ''}>Não iniciada</option>
                        <option value="EM_ANDAMENTO" ${statusTarefa === 'EM_ANDAMENTO' ? 'selected' : ''}>Em andamento</option>
                        <option value="CONCLUIDO" ${statusTarefa === 'CONCLUIDO' ? 'selected' : ''}>Concluído</option>
                        <option value="CANCELADO" ${statusTarefa === 'CANCELADO' ? 'selected' : ''}>Cancelado</option>
                    </select>
                    <div class="invalid-feedback">Se a data de fim real está preenchida, o status deve ser "Concluído".</div>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Fim Real (Opcional)</label>
                    <input type="date" class="form-control" name="tarefa_fimReal" value="${fimReal}">
                    <div class="invalid-feedback">A data de fim real não pode ser anterior à data de início da tarefa.</div>
                </div>
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', tarefaHTML);

    // Adicionar listeners de validação para as novas datas de tarefa
    const newTaskElement = container.lastElementChild; // Pega o item de tarefa recém-adicionado
    newTaskElement.querySelector('[name="tarefa_dataCriacao"]').addEventListener('change', () => validarDatasTarefa(newTaskElement));
    newTaskElement.querySelector('[name="tarefa_dataInicio"]').addEventListener('change', () => validarDatasTarefa(newTaskElement));
    newTaskElement.querySelector('[name="tarefa_fimPrevisto"]').addEventListener('change', () => validarDatasTarefa(newTaskElement));
    newTaskElement.querySelector('[name="tarefa_fimReal"]').addEventListener('change', () => validarDatasTarefa(newTaskElement));

    // Força uma validação inicial das datas da nova tarefa, especialmente se estiver em modo de edição e as datas forem carregadas
    validarDatasTarefa(newTaskElement);
}

/**
 * Valida as datas do projeto principal.
 */
function validarDatasProjeto() {
    let isValid = true;

    const dataCriacao = new Date(projetoDataCriacaoInput.value);
    const dataInicio = new Date(projetoDataInicioInput.value);
    const fimPrevisto = new Date(projetoFimPrevistoInput.value);

    // Validação 1: Data de Início não pode ser anterior à Data de Criação
    if (dataInicio < dataCriacao) {
        projetoDataInicioInput.classList.add('is-invalid');
        projetoDataInicioInput.nextElementSibling.textContent = 'A data de início não pode ser anterior à data de criação.';
        isValid = false;
    } else {
        projetoDataInicioInput.classList.remove('is-invalid');
    }

    // Validação 2: Data de Fim Previsto não pode ser anterior à Data de Início
    if (fimPrevisto < dataInicio) {
        projetoFimPrevistoInput.classList.add('is-invalid');
        projetoFimPrevistoInput.nextElementSibling.textContent = 'A data de fim previsto não pode ser anterior à data de início.';
        isValid = false;
    } else {
        projetoFimPrevistoInput.classList.remove('is-invalid');
    }

    // Retorna o estado geral de validade
    return isValid;
}

/**
 * Valida as datas de uma tarefa específica.
 */
function validarDatasTarefa(tarefaElement) {
    let isValid = true;

    const tarefaDataCriacaoInput = tarefaElement.querySelector('[name="tarefa_dataCriacao"]');
    const tarefaDataInicioInput = tarefaElement.querySelector('[name="tarefa_dataInicio"]');
    const tarefaFimPrevistoInput = tarefaElement.querySelector('[name="tarefa_fimPrevisto"]');
    const tarefaFimRealInput = tarefaElement.querySelector('[name="tarefa_fimReal"]');
    const tarefaStatusSelect = tarefaElement.querySelector('[name="tarefa_status"]'); // Adicionei para pegar o select
    const tarefaStatus = tarefaStatusSelect.value; // O status da tarefa

    const dataCriacaoTarefa = new Date(tarefaDataCriacaoInput.value);
    const dataInicioTarefa = new Date(tarefaDataInicioInput.value);
    const fimPrevistoTarefa = new Date(tarefaFimPrevistoInput.value);
    const fimRealTarefa = tarefaFimRealInput.value ? new Date(tarefaFimRealInput.value) : null;

    // Datas do projeto para comparação (certifique-se que inputDataCriacao.value não está vazia)
    // Se estiver vazia, significa que o DOMContentLoaded ainda não preencheu, ou estamos em um estado inicial.
    // É bom garantir que essas datas existam antes de comparar.
    const dataCriacaoProjeto = projetoDataCriacaoInput.value ? new Date(projetoDataCriacaoInput.value) : null;
    const dataInicioProjeto = projetoDataInicioInput.value ? new Date(projetoDataInicioInput.value) : null;
    const fimPrevistoProjeto = projetoFimPrevistoInput.value ? new Date(projetoFimPrevistoInput.value) : null;

    // Reinicia os estados de validação para cada campo da tarefa
    tarefaDataCriacaoInput.classList.remove('is-invalid');
    tarefaDataInicioInput.classList.remove('is-invalid');
    tarefaFimPrevistoInput.classList.remove('is-invalid');
    tarefaFimRealInput.classList.remove('is-invalid');
    tarefaStatusSelect.classList.remove('is-invalid'); // Limpar validação do status também


    // Validação 1: Data de Início da Tarefa não pode ser anterior à Data de Criação da Tarefa
    if (dataInicioTarefa < dataCriacaoTarefa) {
        tarefaDataInicioInput.classList.add('is-invalid');
        tarefaDataInicioInput.nextElementSibling.textContent = 'A data de início não pode ser anterior à data de criação da tarefa.';
        isValid = false;
    }

    // Validação 2: Data de Fim Previsto da Tarefa não pode ser anterior à Data de Início da Tarefa
    if (fimPrevistoTarefa < dataInicioTarefa) {
        tarefaFimPrevistoInput.classList.add('is-invalid');
        tarefaFimPrevistoInput.nextElementSibling.textContent = 'A data de fim previsto não pode ser anterior à data de início da tarefa.';
        isValid = false;
    }

    // Validações em relação às datas do projeto
    if (dataCriacaoProjeto && dataInicioProjeto && fimPrevistoProjeto) { // Só valida se as datas do projeto existirem
        // Validação 3: Data de Criação da Tarefa não pode ser anterior à Data de Criação do Projeto
        if (dataCriacaoTarefa < dataCriacaoProjeto) {
            tarefaDataCriacaoInput.classList.add('is-invalid');
            tarefaDataCriacaoInput.nextElementSibling.textContent = 'A data de criação da tarefa não pode ser anterior à do projeto.';
            isValid = false;
        }

        // Validação 4: Data de Início da Tarefa não pode ser anterior à Data de Início do Projeto
        if (dataInicioTarefa < dataInicioProjeto) {
            tarefaDataInicioInput.classList.add('is-invalid');
            tarefaDataInicioInput.nextElementSibling.textContent = 'A data de início da tarefa não pode ser anterior à do projeto.';
            isValid = false;
        }

        // Validação 5: Data de Fim Previsto da Tarefa não pode ser posterior à Data de Fim Previsto do Projeto
        if (fimPrevistoTarefa > fimPrevistoProjeto) {
            tarefaFimPrevistoInput.classList.add('is-invalid');
            tarefaFimPrevistoInput.nextElementSibling.textContent = 'A data de fim previsto da tarefa não pode ser posterior à do projeto.';
            isValid = false;
        }
    }


    // Validação 6: Data de Fim Real da Tarefa (se preenchida) não pode ser anterior à Data de Início da Tarefa
    if (fimRealTarefa && fimRealTarefa < dataInicioTarefa) {
        tarefaFimRealInput.classList.add('is-invalid');
        tarefaFimRealInput.nextElementSibling.textContent = 'A data de fim real não pode ser anterior à data de início da tarefa.';
        isValid = false;
    }

    // Validação 7: Se a data de fim real for preenchida, o status da tarefa deve ser CONCLUIDO
    if (fimRealTarefa && tarefaStatus !== 'CONCLUIDO') {
        tarefaStatusSelect.classList.add('is-invalid'); // Marca o select como inválido
        // A mensagem para o status deve ser exibida no div.invalid-feedback do select.
        // O nextElementSibling do select pode não ser o feedback, então use o seletor.
        const feedbackElement = tarefaElement.querySelector('[name="tarefa_status"] + .invalid-feedback');
        if (feedbackElement) {
            feedbackElement.textContent = 'Se a data de fim real está preenchida, o status deve ser "Concluído".';
        }
        isValid = false;
    }

    // Garante que o feedback de "campo obrigatório" para campos de data não anule o feedback de validação lógica
    // Se a data de criação da tarefa estiver vazia e não for válida, a mensagem de "obrigatório" deve prevalecer
    if (!tarefaDataCriacaoInput.value) { // Se o campo está vazio, significa que a validação 'required' do HTML5 já cuidará.
        tarefaDataCriacaoInput.classList.remove('is-invalid');
        // Apenas para evitar que uma mensagem de validação de data "lógica" sobreponha a de "obrigatório" se o campo estiver vazio.
    }
    if (!tarefaDataInicioInput.value) {
        tarefaDataInicioInput.classList.remove('is-invalid');
    }
    if (!tarefaFimPrevistoInput.value) {
        tarefaFimPrevistoInput.classList.remove('is-invalid');
    }


    return isValid;
}

// Função para mostrar o toast de feedback.
function mostrarToast(mensagem, tipo = 'success') {
    const toastLiveExample = document.getElementById('liveToast');
    if (!toastLiveExample) {
        console.error("Elemento Toast com ID 'liveToast' não encontrado no DOM!");
        // Não é recomendado usar alert() em produção, mas mantém para depuração se o toast sumir
        alert(`Feedback: ${mensagem}`);
        return;
    }

    const toastBody = toastLiveExample.querySelector('.toast-body');
    const toastHeader = toastLiveExample.querySelector('.toast-header');

    // Resetar classes do cabeçalho antes de adicionar novas
    toastHeader.className = 'toast-header'; // Reseta todas as classes do cabeçalho

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
        case 'info':
            toastHeader.classList.add('bg-info', 'text-white');
            break;
        default:
            toastHeader.classList.add('bg-primary', 'text-white');
    }

    // Atualizar o ícone do toast
    const toastImg = toastLiveExample.querySelector('.toast-header img');
    if (toastImg) {
        let iconSrc = '';
        if (tipo === 'success') iconSrc = '../../static/img/icons/square-check-solid.svg';
        else if (tipo === 'danger') iconSrc = '../../static/img/icons/xmark-circle-solid.svg';
        else if (tipo === 'warning') iconSrc = '../../static/img/icons/triangle-exclamation-solid.svg';
        else iconSrc = '../../static/img/icons/info-circle-solid.svg';

        toastImg.src = iconSrc;
    }

    toastBody.textContent = mensagem;

    if (typeof bootstrap !== 'undefined' && bootstrap.Toast) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample, {
            delay: 3000
        });
        toastBootstrap.show();
    } else {
        console.error("Objeto 'bootstrap' ou 'bootstrap.Toast' não está disponível. Verifique a importação do Bootstrap JS.");
        alert(`Feedback: ${mensagem}`);
    }
}