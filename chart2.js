var pieChart = new Chart(document.getElementById('pieChart'), {
     type: 'pie',
     data: {
         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
         datasets: [{
             data: [1000, 1200, 1600, 2100, 1800, 1500, 2500, 2600, 2690, 1950, 2300, 2900],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.7)',
                 'rgba(54, 162, 235, 0.7)',
                 'rgba(255, 206, 86, 0.7)',
                 'rgba(75, 192, 192, 0.7)',
                 'rgba(153, 102, 255, 0.7)',
                 'rgba(255, 159, 64, 0.7)'
             ],
             borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         responsive: true
     }
 });