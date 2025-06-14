let dataTableInitialized = false; // Flag para controlar a inicialização do DataTables

document.addEventListener('DOMContentLoaded', function () {
    // Carregar os funcionários e inicializar o DataTables após todos os dados serem buscados.

    carregarTodosFuncionariosEInicializarTabela();
});

// Ajustar a função para buscar todos os funcionários recursivamente e então inicializar o DataTables
async function carregarTodosFuncionariosEInicializarTabela() {
    let allFuncionarios = [];
    let page = 0;
    let lastPage = false;

    // Função para mostrar o toast (reutilizado de register-project.js)
    // IDEALMENTE: Mover mostrarToast para um arquivo de utilitários como resources/static/js/utils.js
    // E importá-lo ou garantir que esteja disponível globalmente. Por agora, está duplicado.
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

    try {
        do {
            const url = `${API_BASE_URL}/funcionarios?page=${page}&size=50`; // Aumentei o size para menos requisições
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);

            const data = await response.json();
            allFuncionarios = allFuncionarios.concat(data.content);
            lastPage = data.last;
            page++;
        } while (!lastPage);

        const tabelaBody = document.getElementById('funcionarioTabela');
        tabelaBody.innerHTML = ''; // Limpa antes de preencher

        allFuncionarios.forEach(funcionario => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${funcionario.id}</td>
                <td>${funcionario.nome}</td>
                <td>${funcionario.cpf}</td>
                <td>${funcionario.email}</td>
                <td>${funcionario.telefone}</td>
                <td>${funcionario.cargo}</td>
                <td>${funcionario.descricao}</td>
                <td>${funcionario.statusFuncionario}</td>
                <td>
                    <a href="#" class="editar-funcionario text-primary me-2" data-id="${funcionario.id}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </a>
                    <a href="#" class="deletar-funcionario text-danger" data-id="${funcionario.id}">
                        <i class="fa-regular fa-trash-can"></i>
                    </a>
                </td>
            `;
            tabelaBody.appendChild(row);
        });

        // Inicializar o DataTables somente depois que todos os dados foram carregados
        if (dataTableInitialized) {
             $('#listaFuncionario').DataTable().destroy(); // Destrói instância anterior, se houver
        }
        $('#listaFuncionario').DataTable({
            language: { url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json' },
            // Adicionar opções do DataTables para personalização
            paging: true,      // Habilita paginação
            searching: true,   // Habilita busca
            ordering: true,    // Habilita ordenação
            info: true,        // Exibe "Mostrando X de Y registros"
            // Se precisar de rolagem horizontal para muitas colunas:
            // scrollX: true
        });
        dataTableInitialized = true; // Marca que o DataTables foi inicializado

    } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
        mostrarToast('Erro ao carregar funcionários: ' + error.message, 'danger');
    }
}


// Gerenciamento de eventos de click para edição e exclusão
$(document).on("click", ".editar-funcionario", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    // O caminho deve ser relativo ao 'list.html' que está em 'templates/employee/'
    // Para 'register.html' que está em 'templates/employee/'
    window.location.href = `register.html?id=${id}`;
});

$(document).on("click", ".deletar-funcionario", function (event) {
    event.preventDefault();
    let id = $(this).data("id");

    if (confirm("Tem certeza que deseja excluir este funcionário?")) {
        fetch(`${API_BASE_URL}/funcionarios/${id}`, { method: "DELETE" })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw new Error(err.message || 'Erro ao excluir funcionário.') });
                }
                mostrarToast("Funcionário excluído com sucesso!", "success");
                // Recarrega a tabela. Destruir e recarregar é a forma mais simples.
                // Se a tabela é grande, considere remover a linha específica.
                $('#listaFuncionario').DataTable().clear().destroy();
                carregarTodosFuncionariosEInicializarTabela();
            })
            .catch(error => {
                console.error("Erro ao excluir funcionário:", error);
                mostrarToast("Erro ao excluir funcionário: " + error.message, "danger");
            });
    }
});