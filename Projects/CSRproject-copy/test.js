new Chart(document.getElementById("chartjs-6"),
{"type":"bubble",
  "data":{
  "datasets":[{
      "label":"First Dataset",
      "data":[{"x":20,"y":30,"r":15}],
      "backgroundColor":"rgb(255, 99, 132)"
            },
            {
              "label":"Second Dataset",
              "data":[{"x":1,"y":30,"r":15}],
              "backgroundColor":"rgb(255, 99, 132)"
            }
            ]
          },
          options: {
               legend: {
                   display: false,
                 },
                 scales: {
                   yAxes: [{
                     scaleLabel: {
                       display: true,
                       labelString: 'CSR Score'
                     }
                   }],
                   xAxes: [{
                     scaleLabel: {
                       display: true,
                       labelString: 'Company Name (Alphabetical)'
                     }
                   }]
                 }
               }
});
