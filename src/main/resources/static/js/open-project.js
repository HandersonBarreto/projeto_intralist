// resources/static/js/open-project.js

// API_BASE_URL virá do api.js que será carregado antes.

// Variáveis para os inputs de data do projeto
let projetoDataCriacaoInput;
let projetoDataInicioInput;
let projetoFimPrevistoInput;
let projetoFimRealInput;
let currentProjetoId = null;

document.addEventListener("DOMContentLoaded", () => {
    // Obter o ID do projeto da URL
    const params = new URLSearchParams(window.location.search);
    const idFromUrl = params.get("id"); // Nomeei diferente para clareza

    // Atribuir o ID lido da URL à variável GLOBAL
    currentProjetoId = idFromUrl;

// Obter referências aos elementos DOM dos campos de data do projeto
    projetoDataCriacaoInput = document.getElementById('inputDataCriacao');
    projetoDataInicioInput = document.getElementById('inputDataInicio');
    projetoFimPrevistoInput = document.getElementById('inputFimPrevisto');
    projetoFimRealInput = document.getElementById('inputFimReal');

    if (currentProjetoId) { // Usar a variável global aqui
        carregarProjeto(currentProjetoId);
    } else {
        mostrarToast("ID do projeto não encontrado na URL. Redirecionando...", "danger");
        setTimeout(() => {
            window.location.href = "list.html"; // Redireciona para a lista de projetos
        }, 2000);
    }

    // Adicionar listeners para validação de datas do PROJETO
    projetoDataCriacaoInput.addEventListener('change', validarDatasProjeto);
    projetoDataInicioInput.addEventListener('change', validarDatasProjeto);
    projetoFimPrevistoInput.addEventListener('change', validarDatasProjeto);
    projetoFimRealInput.addEventListener('change', validarDatasProjeto);

    // Configurar o evento de submit do formulário
    document.getElementById("projetoForm").addEventListener("submit", async function(e) {
        e.preventDefault();

        const form = this;

        // Validar as datas do projeto
        if (!validarDatasProjeto()) {
            mostrarToast('Corrija as datas do projeto antes de salvar.', 'danger');
            return;
        }

        // Valida os campos obrigatórios do projeto
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            mostrarToast('Preencha todos os campos obrigatórios do projeto.', 'danger');
            return;
        }
        form.classList.remove('was-validated');

        // Chama a função de atualização, passando o ID GLOBAL
        atualizarProjeto(currentProjetoId);
    });
});

/**
 * Formata uma string de data para o formato 'YYYY-MM-DD' para inputs de tipo 'date'.
 * @param {string} dataString A data em formato ISO (ex: '2023-10-26T10:00:00Z').
 * @returns {string} A data formatada (ex: '2023-10-26').
 */
function formatarDataParaInput(dataString) {
    if (!dataString) return '';
    const data = new Date(dataString);
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}

/**
 * Carrega os dados de um projeto específico da API e preenche o formulário.
 * @param {number} id O ID do projeto a ser carregado.
 */
async function carregarProjeto(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/projetos/${id}`);
        if (!response.ok) {
            throw new Error(`Projeto não encontrado: ${response.status} - ${response.statusText}`);
        }
        const projeto = await response.json();

        // Preencher o formulário com os dados do projeto
        document.getElementById("projetoId").value = projeto.id;
        document.getElementById("inputNome").value = projeto.nome || '';
        projetoDataCriacaoInput.value = formatarDataParaInput(projeto.dataCriacao);
        projetoDataInicioInput.value = formatarDataParaInput(projeto.dataInicio);
        projetoFimPrevistoInput.value = formatarDataParaInput(projeto.dataFimPrevisto);
        projetoFimRealInput.value = formatarDataParaInput(projeto.dataFimReal); // Preencher Fim Real
        document.getElementById("inputRisco").value = projeto.risco || '';
        document.getElementById("inputStatusProjeto").value = projeto.statusProjeto || '';
        document.getElementById("inputMeta").value = projeto.meta || '';
        document.getElementById("inputDescricao").value = projeto.descricao || '';

        // Renderizar atividades/tarefas
        renderizarAtividades(projeto.tarefas); // Assumindo que a API retorna 'tarefas'

        // Após carregar os dados, validar para exibir feedback inicial
        validarDatasProjeto();

    } catch (error) {
        console.error("Erro ao carregar projeto:", error);
        mostrarToast("Erro ao carregar projeto: " + error.message, "danger");
        setTimeout(() => {
            window.location.href = "list.html"; // Redireciona em caso de erro grave
        }, 2000);
    }
}

/**
 * Renderiza as atividades/tarefas na tabela.
 * @param {Array} atividades A lista de atividades/tarefas do projeto.
 */
function renderizarAtividades(atividades) {
    const tabelaAtividades = document.getElementById("tabelaAtividades");
    tabelaAtividades.innerHTML = ""; // Limpar tabela

    if (atividades && atividades.length > 0) {
        atividades.forEach((atividade, index) => {
            const linha = document.createElement("tr");

            // Determinar o HTML da coluna de Ações
            let acoesHtml = '';
            if (atividade.statusTarefa === 'CONCLUIDO') {
                acoesHtml = `<span class="text-success"><i class="fas fa-check-circle"></i> Concluído</span>`;
            } else if (atividade.statusTarefa === 'CANCELADO') {
                 acoesHtml = `<span class="text-danger"><i class="fas fa-times-circle"></i> Cancelado</span>`;
            }
            else {
                // Adicione um atributo data-tarefa-id para identificar a tarefa ao clicar
                acoesHtml = `<button type="button" class="btn btn-sm btn-outline-success concluir-tarefa-btn" data-tarefa-id="${atividade.id}">
                               <i class="fas fa-check"></i> Concluir
                             </button>`;
            }

            linha.innerHTML = `
                <td>${index + 1}</td>
                <td>${atividade.nome || ''}</td>
                <td>${atividade.descricao || ''}</td>
                <td>${atividade.statusTarefa || ''}</td>
                <td>${formatarDataParaInput(atividade.dataInicio)}</td>
                <td>${formatarDataParaInput(atividade.fimPrevisto)}</td>
                <td>${acoesHtml}</td> `;
            tabelaAtividades.appendChild(linha);
        });

        // Adicionar listeners para os botões 'Concluir' APÓS a tabela ser renderizada
        document.querySelectorAll('.concluir-tarefa-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const tarefaId = event.currentTarget.dataset.tarefaId;
                if (confirm('Tem certeza que deseja marcar esta tarefa como concluída?')) {
                    concluirTarefa(tarefaId);
                }
            });
        });

    } else {
        tabelaAtividades.innerHTML = `
            <tr><td colspan="7" class="text-center text-muted">Nenhuma atividade cadastrada para este projeto.</td></tr> `;
    }
}

/**
 * Atualiza os dados do projeto na API.
 * @param {number} id O ID do projeto a ser atualizado.
 */
async function atualizarProjeto(id) {
    const projetoAtualizado = {
        id: parseInt(id), // Garantir que o ID está no objeto para o PUT
        nome: document.getElementById("inputNome").value,
        dataCriacao: new Date(projetoDataCriacaoInput.value).toISOString(),
        dataInicio: new Date(projetoDataInicioInput.value).toISOString(),
        fimPrevisto: document.getElementById("inputFimPrevisto").value, //
        fimReal: document.getElementById("inputFimReal").value ? new Date(document.getElementById("inputFimReal").value).toISOString() : null, //
        risco: document.getElementById("inputRisco").value,
        statusProjeto: document.getElementById("inputStatusProjeto").value,
        meta: document.getElementById("inputMeta").value,
        descricao: document.getElementById("inputDescricao").value
        // Tarefas não são atualizadas aqui; apenas os dados do projeto
    };

    // Validação extra: Se statusProjeto for CONCLUIDO, fimReal deve ser preenchido
    if (projetoAtualizado.statusProjeto === 'CONCLUIDO' && !projetoAtualizado.fimReal) {
        // Você pode optar por preencher automaticamente ou exibir um erro
        // Por consistência, vamos exibir um erro e exigir que o usuário preencha.
        mostrarToast('Se o status do projeto for "Concluído", a Data Fim Real é obrigatória.', 'danger');
        document.getElementById("inputFimReal").classList.add('is-invalid'); // Marca o campo
        return;
    } else {
        document.getElementById("inputFimReal").classList.remove('is-invalid');
    }
    // Se o status NÃO for CONCLUIDO, o fimReal deve ser null
    if (projetoAtualizado.statusProjeto !== 'CONCLUIDO') {
        projetoAtualizado.fimReal = null;
    }


    try {
        const response = await fetch(`${API_BASE_URL}/projetos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(projetoAtualizado)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            const errorMessage = errorData && errorData.message ? errorData.message : 'Erro desconhecido ao atualizar projeto.';
            throw new Error(errorMessage);
        }

        const data = await response.json();
        mostrarToast("Projeto atualizado com sucesso!", "success");
        setTimeout(() => {
            window.location.href = "list.html";
        }, 2000);

    } catch (error) {
        console.error("Erro ao atualizar projeto:", error);
        mostrarToast("Erro ao atualizar projeto: " + error.message, "danger");
    }
}

/**
 * Valida as datas do projeto principal.
 * @returns {boolean} True se todas as datas forem válidas, False caso contrário.
 */
function validarDatasProjeto() {
    let isValid = true;

    // Resetar estados de validação
    projetoDataCriacaoInput.classList.remove('is-invalid');
    projetoDataInicioInput.classList.remove('is-invalid');
    projetoFimPrevistoInput.classList.remove('is-invalid');
    projetoFimRealInput.classList.remove('is-invalid');

    const dataCriacao = new Date(projetoDataCriacaoInput.value);
    const dataInicio = new Date(projetoDataInicioInput.value);
    const fimPrevisto = new Date(projetoFimPrevistoInput.value);
    const fimReal = projetoFimRealInput.value ? new Date(projetoFimRealInput.value) : null;
    const statusProjeto = document.getElementById('inputStatusProjeto').value; // Obter o status para validação


    // Validação 1: Data de Início não pode ser anterior à Data de Criação
    if (dataInicio < dataCriacao) {
        projetoDataInicioInput.classList.add('is-invalid');
        projetoDataInicioInput.nextElementSibling.textContent = 'A data de início não pode ser anterior à data de criação.';
        isValid = false;
    }

    // Validação 2: Data de Fim Previsto não pode ser anterior à Data de Início
    if (fimPrevisto < dataInicio) {
        projetoFimPrevistoInput.classList.add('is-invalid');
        projetoFimPrevistoInput.nextElementSibling.textContent = 'A data de fim previsto não pode ser anterior à data de início.';
        isValid = false;
    }

    // Validação 3: Data de Fim Real (se preenchida) não pode ser anterior à Data de Início
    if (fimReal && fimReal < dataInicio) {
        projetoFimRealInput.classList.add('is-invalid');
        projetoFimRealInput.nextElementSibling.textContent = 'A data de fim real não pode ser anterior à data de início.';
        isValid = false;
    }

    // Validação 4: Se Status Projeto é CONCLUIDO, Data Fim Real é obrigatória
    if (statusProjeto === 'CONCLUIDO' && !projetoFimRealInput.value) {
        projetoFimRealInput.classList.add('is-invalid');
        // O nextElementSibling do input pode ser o feedback, se configurado corretamente no HTML
        projetoFimRealInput.nextElementSibling.textContent = 'Se o projeto está Concluído, a data de fim real é obrigatória.';
        isValid = false;
    }

    return isValid;
}

async function concluirTarefa(tarefaId) {
    try {
        // Primeiro, buscar os detalhes da tarefa para garantir que temos todos os dados
        // e que podemos atualizar apenas o status e a data de fim real.
        const responseTarefa = await fetch(`${API_BASE_URL}/tarefas/${tarefaId}`);
        if (!responseTarefa.ok) {
            throw new Error(`Tarefa não encontrada: ${responseTarefa.status} - ${responseTarefa.statusText}`);
        }
        const tarefaOriginal = await responseTarefa.json();

        // Verificar se a tarefa já está concluída ou cancelada
        if (tarefaOriginal.statusTarefa === 'CONCLUIDO') {
            mostrarToast('Esta tarefa já está concluída.', 'info');
            return;
        }
        if (tarefaOriginal.statusTarefa === 'CANCELADO') {
            mostrarToast('Esta tarefa foi cancelada e não pode ser marcada como concluída.', 'danger');
            return;
        }

        // Preparar os dados para atualização: status para CONCLUIDO e fimReal para data atual
        const tarefaAtualizada = {
            ...tarefaOriginal, // Copia todos os dados da tarefa original
            statusTarefa: 'CONCLUIDO',
            fimReal: new Date().toISOString() // Define a data/hora atual como fim real
        };

        const response = await fetch(`${API_BASE_URL}/tarefas/${tarefaId}`, {
            method: "PUT", // Usar PUT para atualizar a tarefa
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(tarefaAtualizada)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            const errorMessage = errorData && errorData.message ? errorData.message : 'Erro desconhecido ao concluir tarefa.';
            throw new Error(errorMessage);
        }

        mostrarToast("Tarefa marcada como concluída com sucesso!", "success");

        // Recarregar os detalhes do projeto para atualizar a tabela de atividades
        // Pega o ID do projeto do campo oculto no formulário principal
        const projetoId = document.getElementById('projetoId').value;
        if (projetoId) {
            carregarProjeto(projetoId); // Recarrega tudo para refletir a mudança
        } else {
            // Se por algum motivo não tiver o projetoId, pode recarregar a lista ou a página.
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }

    } catch (error) {
        console.error("Erro ao concluir tarefa:", error);
        mostrarToast("Erro ao concluir tarefa: " + error.message, "danger");
    }
}

function voltarParaListagem() {
    window.location.href = "list.html";
}

// Função para mostrar o toast de feedback (copiada do register-project.js)
// IDEALMENTE: Mover mostrarToast para um arquivo de utilitários como resources/static/js/utils.js
// E importá-lo ou garantir que esteja disponível globalmente.
function mostrarToast(mensagem, tipo = 'success') {
    const toastLiveExample = document.getElementById('liveToast');
    if (!toastLiveExample) {
        console.error("Elemento Toast com ID 'liveToast' não encontrado no DOM!");
        alert(`Feedback: ${mensagem}`);
        return;
    }

    const toastBody = toastLiveExample.querySelector('.toast-body');
    const toastHeader = toastLiveExample.querySelector('.toast-header');

    toastHeader.className = 'toast-header';

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