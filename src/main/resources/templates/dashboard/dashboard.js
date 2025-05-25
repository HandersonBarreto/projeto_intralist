document.addEventListener('DOMContentLoaded', () => {
    // URL base da sua API Spring Boot
    const API_BASE_URL = 'http://localhost:8080/api/dashboard';

    // Função para buscar dados e renderizar o gráfico de Projetos por Status
    async function fetchProjectsByStatus() {
        try {
            const response = await fetch(`${API_BASE_URL}/projects-by-status`);
            if (!response.ok) {
                // Se a resposta não for OK (ex: 404, 500), jogue um erro
                throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            console.log("Dados de Projetos por Status:", data); // Verifique no console do navegador

            // Mapear os dados para o formato que o Highcharts espera (name, y)
            const chartData = data.map(item => ({
                name: item.status, // o status do enum (CANCELADO, CONCLUIDO, etc.)
                y: item.count      // o count (11, 9, 3, etc.)
            }));

            // Renderizar o gráfico Highcharts
            Highcharts.chart('projectsByStatusChart', {
                chart: {
                    type: 'bar' // Pode ser 'column' para barras verticais, 'bar' para barras horizontais
                },
                title: {
                    text: 'Projetos por Status'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b> ({point.y})'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        },
                        showInLegend: true // Mostra a legenda com os nomes dos status
                    }
                },
                series: [{
                    name: 'Projetos', // Nome da série de dados
                    colorByPoint: true,
                    data: chartData
                }]
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
                if (!response.ok) {
                    // Se a resposta não for OK (ex: 404, 500), jogue um erro
                    throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
                }
                const data = await response.json();
                console.log("Dados de Tarefas por Status:", data);

                // Mapear os dados para o formato que o Highcharts espera (name, y)
                const chartData = data.map(item => ({
                    name: item.status,
                    y: item.count
                }));

                // Renderizar o gráfico Highcharts
                Highcharts.chart('tasksByStatusChart', {
                    chart: {
                        type: 'pie' // Pode ser 'column' para barras verticais, 'bar' para barras horizontais
                    },
                    title: {
                        text: 'Tarefas por Status'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b> ({point.y})'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                            },
                            showInLegend: true // Mostra a legenda com os nomes dos status
                        }
                    },
                    series: [{
                        name: 'Tarefas', // Nome da série de dados
                        colorByPoint: true,
                        data: chartData
                    }]
                });

            } catch (error) {
                console.error('Erro ao buscar dados de projetos por status:', error);
                document.getElementById('tasksByStatusChart').innerText = 'Não foi possível carregar o gráfico. Verifique a API e o console do navegador para mais detalhes.';
            }
        }

    // Chamar a função para carregar o gráfico quando a página for carregada
    fetchProjectsByStatus();
    fetchTasksByStatus();
});