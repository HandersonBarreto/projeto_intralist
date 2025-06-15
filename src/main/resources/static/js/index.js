// resources/static/js/index.js

// API_BASE_URL virá do api.js que será carregado antes.

document.addEventListener('DOMContentLoaded', () => {
    fetchSummaryMetrics();
});

async function fetchSummaryMetrics() {
    try {
        // Fetch para Projetos por Status
        const projectsByStatusResponse = await fetch(`${API_BASE_URL}/api/dashboard/projects-by-status`);
        const projectsByStatusData = await projectsByStatusResponse.json();
        console.log("Projetos por Status (Dados Brutos):", projectsByStatusData); // DEBUG

        // Fetch para Tarefas por Status
        const tasksByStatusResponse = await fetch(`${API_BASE_URL}/api/dashboard/tasks-by-status`);
        const tasksByStatusData = await tasksByStatusResponse.json();
        console.log("Tarefas por Status (Dados Brutos):", tasksByStatusData); // DEBUG

        updateSummaryCards(projectsByStatusData, tasksByStatusData);

    } catch (error) {
        console.error('Erro ao buscar métricas do dashboard:', error);
        // ... (exibição de erro nos cards) ...
    }
}

function updateSummaryCards(projectsData, tasksData) {
    let totalProjects = 0;
    let projectsInProgress = 0;
    let completedProjects = 0;

    projectsData.forEach(item => {
        totalProjects += item.count;
        if (item.status === 'EM_ANDAMENTO') { // VERIFIQUE ESTE NOME DO ENUM
            projectsInProgress = item.count;
        } else if (item.status === 'CONCLUIDO') { // VERIFIQUE ESTE NOME DO ENUM
            completedProjects = item.count;
        }
    });

    document.getElementById('totalProjects').textContent = totalProjects;
    document.getElementById('projectsInProgress').textContent = projectsInProgress;
    document.getElementById('completedProjects').textContent = completedProjects;

    let totalTasks = 0;
    let tasksInProgress = 0;
    let completedTasks = 0;

    tasksData.forEach(item => {
        totalTasks += item.count;
        if (item.status === 'EM_PROGRESSO') { // VERIFIQUE ESTE NOME DO ENUM (StatusTarefa.EM_PROGRESSO)
            tasksInProgress = item.count;
        } else if (item.status === 'CONCLUIDO') { // VERIFIQUE ESTE NOME DO ENUM
            completedTasks = item.count;
        }
    });

    document.getElementById('totalTasks').textContent = totalTasks;
    document.getElementById('tasksInProgress').textContent = tasksInProgress;
    document.getElementById('completedTasks').textContent = completedTasks;
}