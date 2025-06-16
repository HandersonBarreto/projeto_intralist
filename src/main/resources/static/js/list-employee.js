let dataTable; // Variável global para DataTables

document.addEventListener('DOMContentLoaded', function () {
    carregarTodosFuncionariosEInicializarTabela();
});

// Função para exibir Toast de feedback
function mostrarToast(mensagem, tipo = 'success') {
    const toastLiveExample = document.getElementById('liveToast');
    if (!toastLiveExample) {
        alert(`Feedback: ${mensagem}`);
        return;
    }
    const toastBody = toastLiveExample.querySelector('.toast-body');
    const toastHeader = toastLiveExample.querySelector('.toast-header');
    toastHeader.className = 'toast-header';

    switch (tipo) {
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
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample, { delay: 3000 });
    toastBootstrap.show();
}

// Função principal que carrega funcionários e popula a tabela
async function carregarTodosFuncionariosEInicializarTabela() {
    let allFuncionarios = [];
    let page = 0;
    let lastPage = false;

    try {
        do {
            const url = `${API_BASE_URL}/funcionarios?page=${page}&size=50`;
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);

            const data = await response.json();
            allFuncionarios = allFuncionarios.concat(data.content);
            lastPage = data.last;
            page++;
        } while (!lastPage);

        const dataSet = allFuncionarios.map(funcionario => ([
            funcionario.id,
            funcionario.nome,
            funcionario.cpf,
            funcionario.email,
            funcionario.telefone,
            funcionario.cargo,
            funcionario.descricao,
            funcionario.statusFuncionario,
            `
            <a href="#" class="editar-funcionario text-primary me-2" data-id="${funcionario.id}">
                <i class="fa-solid fa-pen-to-square"></i>
            </a>
            <a href="#" class="deletar-funcionario text-danger" data-id="${funcionario.id}">
                <i class="fa-regular fa-trash-can"></i>
            </a>
            `
        ]));

        if (dataTable) {
            dataTable.clear().rows.add(dataSet).draw();
        } else {
            dataTable = $('#listaFuncionario').DataTable({
                data: dataSet,
                columns: [
                    { title: "ID" },
                    { title: "Nome" },
                    { title: "CPF" },
                    { title: "Email" },
                    { title: "Telefone" },
                    { title: "Cargo" },
                    { title: "Descrição" },
                    { title: "Status" },
                    { title: "Ações", orderable: false, searchable: false }
                ],
                language: { url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json' },
                paging: true,
                searching: true,
                ordering: true,
                info: true,
                responsive: true
            });
        }

    } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
        mostrarToast('Erro ao carregar funcionários: ' + error.message, 'danger');
    }
}

// Evento para editar funcionário
$(document).on("click", ".editar-funcionario", function (event) {
    event.preventDefault();
    const id = $(this).data("id");
    window.location.href = `register.html?id=${id}`;
});

// Evento para deletar funcionário
$(document).on("click", ".deletar-funcionario", function (event) {
    event.preventDefault();
    const id = $(this).data("id");
    const row = $(this).closest('tr');

    if (confirm("Tem certeza que deseja excluir este funcionário?")) {
        const icon = $(this).find('i');
        const originalIconClass = icon.attr('class');
        icon.removeClass().addClass('fas fa-spinner fa-spin text-muted');

        fetch(`${API_BASE_URL}/funcionarios/${id}`, { method: "DELETE" })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => {
                        throw new Error(err.message || 'Erro ao excluir funcionário.');
                    });
                }

                mostrarToast("Funcionário excluído com sucesso!", "success");

                // Remove a linha diretamente do DataTable
                if (dataTable) {
                    dataTable.row(row).remove().draw();
                }
            })
            .catch(error => {
                console.error("Erro ao excluir funcionário:", error);
                mostrarToast("Erro ao excluir funcionário: " + error.message, "danger");
            })
            .finally(() => {
                icon.removeClass().addClass(originalIconClass);
            });
    }
});
