document.addEventListener('DOMContentLoaded', () => {
    fetchSummaryMetrics();
});

async function fetchSummaryMetrics() {
    try {
        const projectsByStatusResponse = await fetch(`${API_BASE_URL}/api/dashboard/projects-by-status`);
        const projectsByStatusData = await projectsByStatusResponse.json();
        console.log("Projetos por Status (Dados Brutos):", projectsByStatusData);

        const tasksByStatusResponse = await fetch(`${API_BASE_URL}/api/dashboard/tasks-by-status`);
        const tasksByStatusData = await tasksByStatusResponse.json();
        console.log("Tarefas por Status (Dados Brutos):", tasksByStatusData);

        updateSummaryCards(projectsByStatusData, tasksByStatusData);

    } catch (error) {
        console.error('Erro ao buscar métricas do dashboard:', error);
    }
}

function updateSummaryCards(projectsData, tasksData) {
    let totalProjects = 0;
    let projectsInProgress = 0;
    let completedProjects = 0;

    projectsData.forEach(item => {
        totalProjects += item.count;
        if (item.status === 'EM_ANDAMENTO') {
            projectsInProgress = item.count;
        } else if (item.status === 'CONCLUIDO') {
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
        if (item.status === 'EM_PROGRESSO') {
            tasksInProgress = item.count;
        } else if (item.status === 'CONCLUIDO') {
            completedTasks = item.count;
        }
    });

    document.getElementById('totalTasks').textContent = totalTasks;
    document.getElementById('tasksInProgress').textContent = tasksInProgress;
    document.getElementById('completedTasks').textContent = completedTasks;
}