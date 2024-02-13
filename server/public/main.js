const ctx = document.getElementById("myChart").getContext("2d");

const labels = [
    "2014",
    "2014",
    "2014",
    "2014",
    "2014",
    "2014",
    "2014",
    "2014",
    "2014",
    "2014"
];
const data = {
    labels,
    datasets: [{
        data: [211, 326, 165, 354, 420, 211, 326, 165, 354, 420],
        label: "Plagiarism Report",
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }],
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        scales:{
            y:{
                ticks:{
                    callback: function(value) {
                        return '$' + value + 'm';
                    }
                    
            }
        }
    },
},
};

const myChart = new Chart(ctx, config);