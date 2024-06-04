var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [{
            label: 'Entrada por mês',
            data: [1000, 1200, 1600, 2100, 1800, 1500, 2500, 2600, 2690, 1950, 2300, 2900],
            backgroundColor: [
                'rgb(105, 105, 114)'

            ],
            borderColor: 'rgb(0, 0, 0)',

            borderWidth: 0.8
        }]
    },
    options: {
        responsive: true
    }
});