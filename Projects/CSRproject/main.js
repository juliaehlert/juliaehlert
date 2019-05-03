
// var ctx = document.getElementById('myChart');
//
// console.log(ctx);
function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
new Chart(document.getElementById("CSRchart"),
{"type":"bubble",
  "data":
    {"datasets":
      [{"label":"First Dataset",
        "data":[{"x":1,"y":53,"r":6.05},{"x":2,"y":56,"r":11.09}, {"x":3,"y":45,"r":17.79}, {"x":4,"y":49,"r":15.31}, {"x":5,"y":51,"r":9.00}, {"x":6,"y":55,"r":22.92}, {"x":7,"y":51,"r":6.08}, {"x":8,"y":54,"r":16.05},{"x":9,"y":56,"r":10.03},{"x":10,"y":37,"r":24.21},{"x":11,"y":54,"r":9.34}],
        "backgroundColor": function(context)
        {
        var index = context.dataIndex;
        var val = context.dataset.data[index].y;
        var r = map_range(val, 37, 63, 255, 0);
        var g = map_range(val, 37, 63, 0, 255);
        var b = 0;
        return "rgba("+r+", "+g+", "+b+", 0.5)";

  
        }
        }

    ]
      // [{"label": "second dataset",
      // "data": [{"x":2,"y":56,"r":10}],
      // "backgroundColor": "rgb(255, 50, 132)"
      // }]
    }
});




// var myChart = new Chart(ctx, {
//
//   type: 'bubble',
//      data: {
//          labels: ['labels'],
//          datasets: [{
//              label: 'Label 2',
//              data: [{x:'Aetna', y:53, r:15}, {x:'Alphabet', y:56, r: 30}],
//              backgroundColor: [
//                  'rgba(255, 99, 132, 0.2)',
//                  'rgba(54, 162, 235, 0.2)',
//              ],
    //
    // "type": "bubble",
    // "data":
    // {"datasets": [{"label": "First dataset", "data":[{"x":'Aetna', "y":53, "r":15}, {"x":'Alphabet', "y":56, "r": 30}],"backgroundColor":"rgb(255, 99, 132)"}]}});

    // X Value
//     x: ['Aetna',
//     'Alphabet',
//     'Amazon.com',
//     'AmerisourceBergen',
//     'Anthem',
//     'Apple',
//     'Archer Daniels Midland',
//     'AT&T',
//     'Bank of America Corp.',
//     'Berkshire Hathaway',
//     'Boeing',
//     'Cardinal Health',
//     'Chevron',
//     'Citigroup',
//     'Comcast',
//     'Costco',
//     'CVS Health',
//     'Dell Technologies',
//     'DowDuPont',
//     'Express Scripts Holding',
//     'Exxon Mobile',
//     'Fannie Mae',
//     'FedEx',
//     'Ford Motor',
//     'Freddie Mac',
//     'General Electric',
//     'General Motors',
//     'Home Depot',
//     'IBM',
//     'Intel',
//     'Johnson & Johnson',
//     'JPMorgan Chase',
//     'Kroger',
//     'Lowes',
//     'Marathon Petroleum',
//     'McKesson',
//     'MetLife',
//     'Microsoft',
//     'PepsiCo',
//     'Phillips 66',
//     'Procter & Gamble',
//     'State Farm Insurance Cos.',
//     'Target',
//     'UnitedHealth Group',
//     'UPS',
//     'Valero Energy',
//     'Verizon',
//     'Walgreens Boots Alliance',
//     'Walmart',
//     'Wells Fargo',
//     ],
//     // Y Value
//     y: [ 53,
//     56,
//     45,
//     49,
//     51,
//     55,
//     51,
//     54,
//     56,
//     37,
//     54,
//     52,
//     50,
//     58,
//     50,
//     50,
//     57,
//     55,
//     54,
//     51,
//     51,
//     60,
//     52,
//     55,
//     56,
//     56,
//     56,
//     54,
//     58,
//     61,
//     62,
//     56,
//     55,
//     54,
//     46,
//     52,
//     52,
//     63,
//     60,
//     47,
//     57,
//     59,,
//     58,
//     50,
//     56,
//     48,
//     54,
//     52,
//     52,
//     55,
//     ],
//     // Bubble radius in pixels (not scaled).
//     r: [
//     ]
//     }]
//
//     options: options
//
//
//
// });
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//
//



//      ``````````````````WORKING
// new Chart(document.getElementById("CSRchart"),
// {"type":"bubble",
//   "data":
//     {"datasets":
//       [{"label":"First Dataset",
//         "data":[{"x":1,"y":53,"r":15},{"x":2,"y":56,"r":10}],
//         "backgroundColor":["rgb(255, 99, 132)","rgb(100, 50, 90)"]
