// dashboard.js

document.addEventListener('DOMContentLoaded', () => { // INÍCIO DO ÚNICO DOMContentLoaded GLOBAL

    const API_BASE_URL = 'http://localhost:8080/api/dashboard';

    // --- Funções Auxiliares ---
    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return date.toLocaleString('pt-BR', { month: 'short' });
    }

    // --- Funções de Fetch e Renderização de Gráficos ---

    // Função para buscar dados e renderizar o gráfico de Projetos por Status
    async function fetchProjectsByStatus() {
        try {
            const response = await fetch(`${API_BASE_URL}/projects-by-status`);
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
            const data = await response.json();

            const chartData = data.map(item => ({
                name: item.status.replace(/_/g, ' '),
                y: item.count
            }));

            Highcharts.chart('projectsByStatusChart', {
                chart: { type: 'bar', style: { fontFamily: 'Segoe UI, sans-serif' } },
                title: { text: null },
                xAxis: { type: 'category', labels: { rotation: -45, style: { fontSize: '10px' } } },
                yAxis: { min: 0, title: { text: 'Número de Projetos' }, allowDecimals: false },
                legend: { enabled: false },
                tooltip: { pointFormat: '{series.name}: <b>{point.y}</b>' },
                series: [{ name: 'Projetos', colorByPoint: true, data: chartData, dataLabels: { enabled: true, format: '{point.y}' } }]
            });

        } catch (error) {
            console.error('Erro ao buscar dados de projetos por status:', error);
            document.getElementById('projectsByStatusChart').innerText = 'Não foi possível carregar o gráfico. Verifique a API e o console do navegador para mais detalhes.';
        }
    }

    // Função para buscar dados e renderizar o gráfico de Tarefas por Status
    async function fetchTasksByStatus() {
        try {
            const response = await fetch(`${API_BASE_URL}/tasks-by-status`);
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
            const data = await response.json();

            const chartData = data.map(item => ({
                name: item.status.replace(/_/g, ' '),
                y: item.count
            }));

            Highcharts.chart('tasksByStatusChart', {
                chart: { type: 'pie', style: { fontFamily: 'Segoe UI, sans-serif' } },
                title: { text: null },
                tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b> ({point.y})' },
                plotOptions: {
                    pie: {
                        allowPointSelect: true, cursor: 'pointer',
                        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.1f} %', distance: -50, style: { color: 'white' } },
                        showInLegend: true
                    }
                },
                series: [{ name: 'Tarefas', colorByPoint: true, data: chartData }]
            });

        } catch (error) {
            console.error('Erro ao buscar dados de projetos por status:', error);
            document.getElementById('tasksByStatusChart').innerText = 'Não foi possível carregar o gráfico. Verifique a API e o console do navegador para mais detalhes.';
        }
    }

    // Função para buscar dados e renderizar o gráfico de Projetos por Status por Mês
    async function fetchProjectsByStatusAndMonth(year) {
        try {
            const response = await fetch(`${API_BASE_URL}/projects-by-status-and-month?year=${year}`);
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
            const data = await response.json();

            if (data.length === 0) {
                document.getElementById('projectsByStatusAndMonthChart').innerHTML = `<p style="text-align: center; margin-top: 50px;">Nenhum dado de projeto por status encontrado para o ano ${year}.</p>`;
                return;
            }

            const categories = Array.from({ length: 12 }, (_, i) => getMonthName(i + 1));
            const statusMap = new Map();

            data.forEach(item => {
                const statusName = item.status.replace(/_/g, ' ');
                if (!statusMap.has(statusName)) {
                    statusMap.set(statusName, new Array(12).fill(0));
                }
                statusMap.get(statusName)[item.month - 1] = item.count;
            });

            const series = Array.from(statusMap.entries()).map(([statusName, counts]) => ({
                name: statusName,
                data: counts
            }));

            Highcharts.chart('projectsByStatusAndMonthChart', {
                chart: { type: 'line', style: { fontFamily: 'Segoe UI, sans-serif' } },
                title: { text: null },
                xAxis: { categories: categories, title: { text: 'Mês' } },
                yAxis: { title: { text: 'Número de Projetos' }, allowDecimals: false },
                tooltip: { shared: true, valueSuffix: ' projetos' },
                plotOptions: { line: { dataLabels: { enabled: false }, enableMouseTracking: true } },
                series: series
            });

        } catch (error) {
            console.error('Erro ao buscar dados de projetos por status por mês:', error);
            document.getElementById('projectsByStatusAndMonthChart').innerHTML = `<p style="text-align: center; margin-top: 50px;">Não foi possível carregar o gráfico. Verifique a API e o console do navegador.</p>`;
        }
    }

    // Função para buscar dados e renderizar o gráfico de Tarefas por Status por Mês
    async function fetchTasksByStatusAndMonth(year) {
        try {
            const response = await fetch(`${API_BASE_URL}/tasks-by-status-and-month?year=${year}`);
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
            const data = await response.json();

            if (data.length === 0) {
                document.getElementById('tasksByStatusAndMonthChart').innerHTML = `<p style="text-align: center; margin-top: 50px;">Nenhum dado de tarefa por status encontrado para o ano ${year}.</p>`;
                return;
            }

            const categories = Array.from({ length: 12 }, (_, i) => getMonthName(i + 1));
            const statusMap = new Map();

            data.forEach(item => {
                const statusName = item.status.replace(/_/g, ' ');
                if (!statusMap.has(statusName)) {
                    statusMap.set(statusName, new Array(12).fill(0));
                }
                statusMap.get(statusName)[item.month - 1] = item.count;
            });

            const series = Array.from(statusMap.entries()).map(([statusName, counts]) => ({
                name: statusName,
                data: counts
            }));

            Highcharts.chart('tasksByStatusAndMonthChart', {
                chart: { type: 'line', style: { fontFamily: 'Segoe UI, sans-serif' } },
                title: { text: null },
                xAxis: { categories: categories, title: { text: 'Mês' } },
                yAxis: { title: { text: 'Número de Tarefas' }, allowDecimals: false },
                tooltip: { shared: true, valueSuffix: ' tarefas' },
                plotOptions: { line: { dataLabels: { enabled: false }, enableMouseTracking: true } },
                series: series
            });

        } catch (error) {
            console.error('Erro ao buscar dados de tarefas por status por mês:', error);
            document.getElementById('tasksByStatusAndMonthChart').innerHTML = `<p style="text-align: center; margin-top: 50px;">Não foi possível carregar o gráfico. Verifique a API e o console do navegador.</p>`;
        }
    }

    // Função para popular o select de ano e adicionar o listener de mudança
    function populateYearSelect() {
        const selectYear = document.getElementById('selectYear');
        const currentYear = new Date().getFullYear();
        for (let year = currentYear - 3; year <= currentYear + 1; year++) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            if (year === currentYear) {
                option.selected = true;
            }
            selectYear.appendChild(option);
        }

        selectYear.addEventListener('change', () => {
            const selectedYear = parseInt(selectYear.value);
            loadAllCharts(selectedYear);
        });
    }

    // Função principal para carregar todos os gráficos
    function loadAllCharts(year) {
        fetchProjectsByStatus();
        fetchTasksByStatus();
        fetchProjectsByStatusAndMonth(year);
        fetchTasksByStatusAndMonth(year);
    }

    // --- INÍCIO DA EXECUÇÃO REAL
    populateYearSelect();
    const initialYear = parseInt(document.getElementById('selectYear').value);
    loadAllCharts(initialYear);

});