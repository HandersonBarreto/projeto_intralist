// resources/static/js/list-project.js

// API_BASE_URL virá do api.js que será carregado antes.

let currentPage = 0;
let totalPages = 0;
const pageSize = 6; // Quantidade de projetos por página

// Função para mostrar o toast (copiada de outros arquivos, idealmente em utils.js)
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
        case 'success': toastHeader.classList.add('bg-success', 'text-white'); break;
        case 'danger': toastHeader.classList.add('bg-danger', 'text-white'); break;
        case 'warning': toastHeader.classList.add('bg-warning', 'text-dark'); break;
        case 'info': toastHeader.classList.add('bg-info', 'text-white'); break;
        default: toastHeader.classList.add('bg-primary', 'text-white');
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
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample, { delay: 3000 });
        toastBootstrap.show();
    } else {
        console.error("Bootstrap Toast não está disponível.");
        alert(`Feedback: ${mensagem}`);
    }
}

// Carrega os projetos quando a página é carregada
document.addEventListener("DOMContentLoaded", () => {
    loadProjetos();

    // Configura os event listeners para filtros e busca
    document.getElementById("searchProjeto").addEventListener("input", () => {
        currentPage = 0; // Reinicia para a primeira página ao pesquisar
        loadProjetos();
    });

    document.getElementById("filtroStatus").addEventListener("change", () => {
        currentPage = 0; // Reinicia para a primeira página ao mudar o status
        loadProjetos();
    });

    document.getElementById("filtroOrdenacao").addEventListener("change", () => {
        currentPage = 0; // Reinicia para a primeira página ao mudar a ordenação
        loadProjetos();
    });
});

async function loadProjetos() {
    const container = document.getElementById("projetosContainer");
    container.innerHTML = `
        <div class="col-12 text-center my-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
            <p class="mt-2">Carregando projetos...</p>
        </div>`;

    const searchValue = document.getElementById("searchProjeto").value.trim();
    const statusValue = document.getElementById("filtroStatus").value;
    const ordenacaoValue = document.getElementById("filtroOrdenacao").value;

    // A URL da API para buscar projetos
    let url = `${API_BASE_URL}/projetos?page=${currentPage}&size=${pageSize}`;

    const params = new URLSearchParams();
    if (searchValue) params.append("nome", searchValue); // Ajustar para 'nome' no backend
    if (statusValue) params.append("statusProjeto", statusValue);

    if (ordenacaoValue) {
        const [campo, direcao] = ordenacaoValue.split(',');
        params.append("sort", `${campo},${direcao}`);
    }

    if (params.toString()) url += `&${params.toString()}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();

        totalPages = data.totalPages;
        renderProjetos(data.content);
        updatePagination(data);

    } catch (error) {
        console.error("Erro ao carregar projetos:", error);
        mostrarToast(`Erro ao carregar projetos: ${error.message}`, 'danger');
        container.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger" role="alert">
                    <i class="fas fa-exclamation-triangle me-2"></i>
                    Erro ao carregar projetos: ${error.message}
                </div>
            </div>`;
    }
}

function renderProjetos(projetos) {
    const container = document.getElementById("projetosContainer");

    if (projetos.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5 empty-state">
                <i class="fas fa-folder-open fa-3x text-muted mb-3"></i>
                <h5 class="text-muted">Nenhum projeto encontrado</h5>
                <p class="text-muted">Tente ajustar seus filtros de busca</p>
            </div>`;
        return;
    }

    container.innerHTML = "";

    projetos.forEach(projeto => {
        const card = `
            <div class="col-md-6 col-lg-4 mb-4"> <div class="card shadow-sm h-100">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <h5 class="card-title">${projeto.nome}</h5>
                            <span class="badge bg-${getStatusColor(projeto.statusProjeto)} badge-status">
                                ${formatStatus(projeto.statusProjeto)}
                            </span>
                        </div>
                        <p class="card-text text-muted small mb-2 project-meta">
                            <i class="fas fa-calendar-alt me-1"></i>
                            ${formatDate(projeto.dataInicio)} - ${formatDate(projeto.fimPrevisto)}
                        </p>
                        <p class="card-text project-desc">
                            ${projeto.descricao || 'Sem descrição'}
                        </p>
                        ${(projeto.descricao && projeto.descricao.length > 100) ? '<button class="btn btn-link p-0 toggle-desc">Ver mais</button>' : ''}

                        <div class="mt-auto d-flex justify-content-between pt-3 border-top">
                            <div class="d-flex gap-2">
                                <button type="button" class="btn btn-sm btn-info btn-action" onclick="abrirProjeto(${projeto.id})">
                                    <i class="fas fa-eye me-1"></i> Detalhes
                                </button>
                                <button type="button" class="btn btn-sm btn-warning btn-action" onclick="editarProjeto(${projeto.id})">
                                    <i class="fas fa-edit me-1"></i> Editar
                                </button>
                                <button type="button" class="btn btn-sm btn-danger btn-action" onclick="deletarProjeto(${projeto.id})">
                                    <i class="fas fa-trash-alt me-1"></i> Excluir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        container.innerHTML += card;
    });

    // Configura o toggle da descrição para os novos botões
    document.querySelectorAll(".toggle-desc").forEach(button => {
        button.addEventListener("click", function() {
            const descElement = this.previousElementSibling;
            if (descElement.style.webkitLineClamp === "3") { // Se estiver truncado (3 linhas)
                descElement.style.webkitLineClamp = "unset"; // Mostra tudo
                descElement.style.whiteSpace = "normal";
                this.textContent = "Ver menos";
            } else {
                descElement.style.webkitLineClamp = "3"; // Trunca novamente
                descElement.style.whiteSpace = "normal"; // Mantenha normal para truncamento de várias linhas
                this.textContent = "Ver mais";
            }
        });
    });
}

function updatePagination(data) {
    const pagination = document.getElementById("paginationContainer");
    pagination.innerHTML = "";

    if (data.totalPages > 1) {
        // Botão "Primeiro"
        pagination.innerHTML += `
            <li class="page-item ${data.first ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="changePage(0)">Primeiro</a>
            </li>`;
        // Botão "Anterior"
        pagination.innerHTML += `
            <li class="page-item ${data.first ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Anterior</a>
            </li>`;

        // Números das páginas
        const startPage = Math.max(0, currentPage - 2);
        const endPage = Math.min(data.totalPages - 1, currentPage + 2);

        for (let i = startPage; i <= endPage; i++) {
            pagination.innerHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i + 1}</a>
            </li>`;
        }

        // Botão "Próximo"
        pagination.innerHTML += `
            <li class="page-item ${data.last ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Próximo</a>
            </li>`;
        // Botão "Último"
        pagination.innerHTML += `
            <li class="page-item ${data.last ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="changePage(${data.totalPages - 1})">Último</a>
            </li>`;
    }
}

function changePage(page) {
    if (page >= 0 && page < totalPages) {
        currentPage = page;
        loadProjetos();
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola para o topo da página
    }
}

// Funções de navegação e ação
function abrirProjeto(id) {
    window.location.href = `open.html?id=${id}`; // O link que leva para a página de detalhes
}

function editarProjeto(id) {
    window.location.href = `register.html?id=${id}`; // O link que leva para o formulário de edição
}

async function deletarProjeto(id) {
    if (confirm("Tem certeza que deseja excluir este projeto?")) {
        try {
            const response = await fetch(`${API_BASE_URL}/projetos/${id}`, { method: 'DELETE' });
            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                const errorMessage = errorData && errorData.message ? errorData.message : 'Erro desconhecido ao excluir projeto.';
                throw new Error(errorMessage);
            }
            mostrarToast('Projeto excluído com sucesso!', 'success');
            // Recarrega a lista de projetos após a exclusão
            currentPage = 0; // Volta para a primeira página
            loadProjetos();
        } catch (error) {
            console.error("Erro ao excluir projeto:", error);
            mostrarToast(`Erro ao excluir projeto: ${error.message}`, 'danger');
        }
    }
}

// Funções auxiliares de formatação
function getStatusColor(status) {
    const colors = {
        'NAO_INICIADA': 'secondary',
        'EM_ANDAMENTO': 'primary',
        'CONCLUIDO': 'success',
        'CANCELADO': 'danger',
        'PENDENTE_APROVACAO': 'warning',
        'REVISAO': 'info',
        'SUSPENSO': 'dark'
    };
    return colors[status] || 'secondary';
}

function formatStatus(status) {
    const names = {
        'NAO_INICIADA': 'Não Iniciada',
        'EM_ANDAMENTO': 'Em Andamento',
        'CONCLUIDO': 'Concluído',
        'CANCELADO': 'Cancelado',
        'PENDENTE_APROVACAO': 'Pendente',
        'REVISAO': 'Revisão',
        'SUSPENSO': 'Suspenso'
    };
    return names[status] || status;
}

function formatDate(dateString) {
    if (!dateString) return '-';
    // Se dateString estiver no formato 'YYYY-MM-DD' e não tiver informações de fuso horário,
    // o construtor Date() pode interpretá-lo como UTC meia-noite,
    // o que pode causar um dia de diferença dependendo do fuso horário local.
    // Uma forma mais segura é:
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day); // month - 1 porque meses são 0-indexed no JS
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}