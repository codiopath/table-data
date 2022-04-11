var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Earnings in Rs.',
            data: [10000, 15000, 21000, 20000, 33000, 22000, 25000, 29000, 24500, 40000, 23000, 29000],
            backgroundColor: [
                'rgba(85,85,85, 1)'

            ],
            borderColor: 'rgb(242, 99, 93, 1)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});