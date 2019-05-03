var topRange = 74;
// var ctx = document.getElementById('myChart');
//
// console.log(ctx);
function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
new Chart(document.getElementById("CSRchart"),
{"type":"bubble",
  "data":{
  "datasets": [{
    "label":"Aetna",
    "data":[{"x":1,"y":53,"r":6.05}],
    "backgroundColor": function(context)
    {
    var index = context.dataIndex;
    var val = context.dataset.data[index].y;
    var r = map_range(val, 37, topRange, 255, 0);
    var g = map_range(val, 37, topRange, 0, 255);
    var b = 0;
    return "rgba("+r+", "+g+", "+b+", 0.5)";
    }
  },
  { "label":"Alphabet",
      "data":[{"x":2,"y":56,"r":11.09}],
      "backgroundColor": function(context)
      {
      var index = context.dataIndex;
      var val = context.dataset.data[index].y;
      var r = map_range(val, 37,topRange, 255, 0);
      var g = map_range(val, 37,topRange, 0, 255);
      var b = 0;
      return "rgba("+r+", "+g+", "+b+", 0.5)";
      }
    },
    { "label":"Amazon",
        "data":[{"x":3,"y":45,"r":17.79}],
        "backgroundColor": function(context)
        {
        var index = context.dataIndex;
        var val = context.dataset.data[index].y;
        var r = map_range(val, 37,topRange, 255, 0);
        var g = map_range(val, 37,topRange, 0, 255);
        var b = 0;
        return "rgba("+r+", "+g+", "+b+", 0.5)";
        }
      },
      { "label":"AmerisourceBergen",
          "data":[{"x":4,"y":49,"r":15.31}],
          "backgroundColor": function(context)
          {
          var index = context.dataIndex;
          var val = context.dataset.data[index].y;
          var r = map_range(val, 37,topRange, 255, 0);
          var g = map_range(val, 37,topRange, 0, 255);
          var b = 0;
          return "rgba("+r+", "+g+", "+b+", 0.5)";
          }
        },
        { "label":"Anthem",
            "data":[{"x":5,"y":51,"r":9.00}],
            "backgroundColor": function(context)
            {
            var index = context.dataIndex;
            var val = context.dataset.data[index].y;
            var r = map_range(val, 37,topRange, 255, 0);
            var g = map_range(val, 37,topRange, 0, 255);
            var b = 0;
            return "rgba("+r+", "+g+", "+b+", 0.5)";
            }
          },
          { "label":"Apple",
              "data":[{"x":6,"y":55,"r":22.92}],
              "backgroundColor": function(context)
              {
              var index = context.dataIndex;
              var val = context.dataset.data[index].y;
              var r = map_range(val, 37,topRange, 255, 0);
              var g = map_range(val, 37,topRange, 0, 255);
              var b = 0;
              return "rgba("+r+", "+g+", "+b+", 0.5)";
              }
            },
            { "label":"Archer Daniels Midland",
                "data":[ {"x":7,"y":51,"r":6.08}],
                "backgroundColor": function(context)
                {
                var index = context.dataIndex;
                var val = context.dataset.data[index].y;
                var r = map_range(val, 37,topRange, 255, 0);
                var g = map_range(val, 37,topRange, 0, 255);
                var b = 0;
                return "rgba("+r+", "+g+", "+b+", 0.5)";
                }
              },
              { "label":"AT&T",
                  "data":[{"x":8,"y":54,"r":16.05}],
                  "backgroundColor": function(context)
                  {
                  var index = context.dataIndex;
                  var val = context.dataset.data[index].y;
                  var r = map_range(val, 37,topRange, 255, 0);
                  var g = map_range(val, 37,topRange, 0, 255);
                  var b = 0;
                  return "rgba("+r+", "+g+", "+b+", 0.5)";
                  }
                },
                { "label":"Bank of America Corp.",
                    "data":[{"x":9,"y":56,"r":10.03}],
                    "backgroundColor": function(context)
                    {
                    var index = context.dataIndex;
                    var val = context.dataset.data[index].y;
                    var r = map_range(val, 37,topRange, 255, 0);
                    var g = map_range(val, 37,topRange, 0, 255);
                    var b = 0;
                    return "rgba("+r+", "+g+", "+b+", 0.5)";
                    }
                  },
                  { "label":"Berkshire Hathaway",
                      "data":[{"x":10,"y":37,"r":24.21}],
                      "backgroundColor": function(context)
                      {
                      var index = context.dataIndex;
                      var val = context.dataset.data[index].y;
                      var r = map_range(val, 37,topRange, 255, 0);
                      var g = map_range(val, 37,topRange, 0, 255);
                      var b = 0;
                      return "rgba("+r+", "+g+", "+b+", 0.5)";
                      }
                    },
                    { "label":"Boeing",
                        "data":[ {"x":11,"y":54,"r":9.34}],
                        "backgroundColor": function(context)
                        {
                        var index = context.dataIndex;
                        var val = context.dataset.data[index].y;
                        var r = map_range(val, 37,topRange, 255, 0);
                        var g = map_range(val, 37,topRange, 0, 255);
                        var b = 0;
                        return "rgba("+r+", "+g+", "+b+", 0.5)";
                        }
                      },
                      { "label":"Cardinal Health",
                          "data":[{"x":12,"y":52,"r":13.00}],
                          "backgroundColor": function(context)
                          {
                          var index = context.dataIndex;
                          var val = context.dataset.data[index].y;
                          var r = map_range(val, 37,topRange, 255, 0);
                          var g = map_range(val, 37,topRange, 0, 255);
                          var b = 0;
                          return "rgba("+r+", "+g+", "+b+", 0.5)";
                          }
                        },
            { "label":"Chevron",
                "data":[{"x":13,"y":50,"r":13.45}],
                "backgroundColor": function(context)
                {
                var index = context.dataIndex;
                var val = context.dataset.data[index].y;
                var r = map_range(val, 37,topRange, 255, 0);
                var g = map_range(val, 37,topRange, 0, 255);
                var b = 0;
                return "rgba("+r+", "+g+", "+b+", 0.5)";
                }
              },
              { "label":"Citigroup",
                  "data":[{"x":14,"y":58,"r":8.80}],
                  "backgroundColor": function(context)
                  {
                  var index = context.dataIndex;
                  var val = context.dataset.data[index].y;
                  var r = map_range(val, 37,topRange, 255, 0);
                  var g = map_range(val, 37,topRange, 0, 255);
                  var b = 0;
                  return "rgba("+r+", "+g+", "+b+", 0.5)";
                  }
                },
                { "label":"Comcast",
                    "data":[{"x":15,"y":50,"r":8.45}],
                    "backgroundColor": function(context)
                    {
                    var index = context.dataIndex;
                    var val = context.dataset.data[index].y;
                    var r = map_range(val, 37,topRange, 255, 0);
                    var g = map_range(val, 37,topRange, 0, 255);
                    var b = 0;
                    return "rgba("+r+", "+g+", "+b+", 0.5)";
                    }
                  },
                  { "label":"Costco",
                      "data":[{"x":16,"y":50,"r":12.90}],
                      "backgroundColor": function(context)
                      {
                      var index = context.dataIndex;
                      var val = context.dataset.data[index].y;
                      var r = map_range(val, 37,topRange, 255, 0);
                      var g = map_range(val, 37,topRange, 0, 255);
                      var b = 0;
                      return "rgba("+r+", "+g+", "+b+", 0.5)";
                      }
                    },
                    { "label":"CVS Health",
                        "data":[{"x":17,"y":57,"r":18.48}],
                        "backgroundColor": function(context)
                        {
                        var index = context.dataIndex;
                        var val = context.dataset.data[index].y;
                        var r = map_range(val, 37,topRange, 255, 0);
                        var g = map_range(val, 37,topRange, 0, 255);
                        var b = 0;
                        return "rgba("+r+", "+g+", "+b+", 0.5)";
                        }
                      },
                      { "label":"Dell Technologies",
                          "data":[{"x":18,"y":55,"r":7.87}],
                          "backgroundColor": function(context)
                          {
                          var index = context.dataIndex;
                          var val = context.dataset.data[index].y;
                          var r = map_range(val, 37,topRange, 255, 0);
                          var g = map_range(val, 37,topRange, 0, 255);
                          var b = 0;
                          return "rgba("+r+", "+g+", "+b+", 0.5)";
                          }
                        },
                        { "label":"DowDuPont",
                            "data":[{"x":19,"y":54,"r":6.27}],
                            "backgroundColor": function(context)
                            {
                            var index = context.dataIndex;
                            var val = context.dataset.data[index].y;
                            var r = map_range(val, 37,topRange, 255, 0);
                            var g = map_range(val, 37,topRange, 0, 255);
                            var b = 0;
                            return "rgba("+r+", "+g+", "+b+", 0.5)";
                            }
                          },
                          { "label":"Express Scripts Holding",
                              "data":[{"x":20,"y":51,"r":10.01}],
                              "backgroundColor": function(context)
                              {
                              var index = context.dataIndex;
                              var val = context.dataset.data[index].y;
                              var r = map_range(val, 37,topRange, 255, 0);
                              var g = map_range(val, 37,topRange, 0, 255);
                              var b = 0;
                              return "rgba("+r+", "+g+", "+b+", 0.5)";
                              }
                            },
                            { "label":"Exxon Mobile",
                                "data":[{"x":21,"y":51,"r":24.44}],
                                "backgroundColor": function(context)
                                {
                                var index = context.dataIndex;
                                var val = context.dataset.data[index].y;
                                var r = map_range(val, 37,topRange, 255, 0);
                                var g = map_range(val, 37,topRange, 0, 255);
                                var b = 0;
                                return "rgba("+r+", "+g+", "+b+", 0.5)";
                                }
                              },
                              { "label":"Fannie Mae",
                                  "data":[{"x":22,"y":60,"r":11.24}],
                                  "backgroundColor": function(context)
                                  {
                                  var index = context.dataIndex;
                                  var val = context.dataset.data[index].y;
                                  var r = map_range(val, 37,topRange, 255, 0);
                                  var g = map_range(val, 37,topRange, 0, 255);
                                  var b = 0;
                                  return "rgba("+r+", "+g+", "+b+", 0.5)";
                                  }
                                },
                        { "label":"FedEx",
                            "data":[{"x":23,"y":52,"r":6.03}],
                            "backgroundColor": function(context)
                            {
                            var index = context.dataIndex;
                            var val = context.dataset.data[index].y;
                            var r = map_range(val, 37,topRange, 255, 0);
                            var g = map_range(val, 37,topRange, 0, 255);
                            var b = 0;
                            return "rgba("+r+", "+g+", "+b+", 0.5)";
                            }
                          },
                  { "label":"Ford Motor",
                      "data":[{"x":24,"y":55,"r":15.68}],
                      "backgroundColor": function(context)
                      {
                      var index = context.dataIndex;
                      var val = context.dataset.data[index].y;
                      var r = map_range(val, 37,topRange, 255, 0);
                      var g = map_range(val, 37,topRange, 0, 255);
                      var b = 0;
                      return "rgba("+r+", "+g+", "+b+", 0.5)";
                      }
                    },
                    { "label":"Freddie Mac",
                        "data":[{"x":25,"y":56,"r":7.47}],
                        "backgroundColor": function(context)
                        {
                        var index = context.dataIndex;
                        var val = context.dataset.data[index].y;
                        var r = map_range(val, 37,topRange, 255, 0);
                        var g = map_range(val, 37,topRange, 0, 255);
                        var b = 0;
                        return "rgba("+r+", "+g+", "+b+", 0.5)";
                        }
                      },
                      { "label":"General Electric",
                          "data":[{"x":26,"y":56,"r":12.23}],
                          "backgroundColor": function(context)
                          {
                          var index = context.dataIndex;
                          var val = context.dataset.data[index].y;
                          var r = map_range(val, 37,topRange, 255, 0);
                          var g = map_range(val, 37,topRange, 0, 255);
                          var b = 0;
                          return "rgba("+r+", "+g+", "+b+", 0.5)";
                          }
                        },
                        { "label":"General Motors",
                            "data":[{"x":27,"y":56,"r":15.73}],
                            "backgroundColor": function(context)
                            {
                            var index = context.dataIndex;
                            var val = context.dataset.data[index].y;
                            var r = map_range(val, 37,topRange, 255, 0);
                            var g = map_range(val, 37,topRange, 0, 255);
                            var b = 0;
                            return "rgba("+r+", "+g+", "+b+", 0.5)";
                            }
                          },
                          { "label":"Home Depot",
                              "data":[ {"x":28,"y":54,"r":10.09}],
                              "backgroundColor": function(context)
                              {
                              var index = context.dataIndex;
                              var val = context.dataset.data[index].y;
                              var r = map_range(val, 37,topRange, 255, 0);
                              var g = map_range(val, 37,topRange, 0, 255);
                              var b = 0;
                              return "rgba("+r+", "+g+", "+b+", 0.5)";
                              }
                            },
                            { "label":"IBM",
                                "data":[{"x":29,"y":58,"r":7.91}],
                                "backgroundColor": function(context)
                                {
                                var index = context.dataIndex;
                                var val = context.dataset.data[index].y;
                                var r = map_range(val, 37,topRange, 255, 0);
                                var g = map_range(val, 37,topRange, 0, 255);
                                var b = 0;
                                return "rgba("+r+", "+g+", "+b+", 0.5)";
                                }
                              },
                              { "label":"Intel",
                                  "data":[{"x":30,"y":61,"r":6.28}],
                                  "backgroundColor": function(context)
                                  {
                                  var index = context.dataIndex;
                                  var val = context.dataset.data[index].y;
                                  var r = map_range(val, 37,topRange, 255, 0);
                                  var g = map_range(val, 37,topRange, 0, 255);
                                  var b = 0;
                                  return "rgba("+r+", "+g+", "+b+", 0.5)";
                                  }
                                },
                              { "label":"Johnson & Johnson",
                                  "data":[ {"x":31,"y":62,"r":7.65}],
                                  "backgroundColor": function(context)
                                  {
                                  var index = context.dataIndex;
                                  var val = context.dataset.data[index].y;
                                  var r = map_range(val, 37,topRange, 255, 0);
                                  var g = map_range(val, 37,topRange, 0, 255);
                                  var b = 0;
                                  return "rgba("+r+", "+g+", "+b+", 0.5)";
                                  }
                                },
                              { "label":"JPMorgan Chase",
                                  "data":[ {"x":32,"y":56,"r":11.39}],
                                  "backgroundColor": function(context)
                                  {
                                  var index = context.dataIndex;
                                  var val = context.dataset.data[index].y;
                                  var r = map_range(val, 37,topRange, 255, 0);
                                  var g = map_range(val, 37,topRange, 0, 255);
                                  var b = 0;
                                  return "rgba("+r+", "+g+", "+b+", 0.5)";
                                  }
                                },
                              { "label":"Kroger",
                                  "data":[{"x":33,"y":55,"r":12.27}],
                                  "backgroundColor": function(context)
                                  {
                                  var index = context.dataIndex;
                                  var val = context.dataset.data[index].y;
                                  var r = map_range(val, 37,topRange, 255, 0);
                                  var g = map_range(val, 37,topRange, 0, 255);
                                  var b = 0;
                                  return "rgba("+r+", "+g+", "+b+", 0.5)";
                                  }
                                },
                                { "label":"Lowe's",
                                    "data":[{"x":34,"y":54,"r":6.86}],
                                    "backgroundColor": function(context)
                                    {
                                    var index = context.dataIndex;
                                    var val = context.dataset.data[index].y;
                                    var r = map_range(val, 37,topRange, 255, 0);
                                    var g = map_range(val, 37,topRange, 0, 255);
                                    var b = 0;
                                    return "rgba("+r+", "+g+", "+b+", 0.5)";
                                    }
                                  },
                                  { "label":"Marathon Petroleum",
                                      "data":[{"x":35,"y":46,"r":6.76}],
                                      "backgroundColor": function(context)
                                      {
                                      var index = context.dataIndex;
                                      var val = context.dataset.data[index].y;
                                      var r = map_range(val, 37,topRange, 255, 0);
                                      var g = map_range(val, 37,topRange, 0, 255);
                                      var b = 0;
                                      return "rgba("+r+", "+g+", "+b+", 0.5)";
                                      }
                                    },
                                    { "label":"McKesson",
                                        "data":[{"x":36,"y":52,"r":19.85}],
                                        "backgroundColor": function(context)
                                        {
                                        var index = context.dataIndex;
                                        var val = context.dataset.data[index].y;
                                        var r = map_range(val, 37,topRange, 255, 0);
                                        var g = map_range(val, 37,topRange, 0, 255);
                                        var b = 0;
                                        return "rgba("+r+", "+g+", "+b+", 0.5)";
                                        }
                                      },
                                      { "label":"MetLife",
                                          "data":[{"x":37,"y":52,"r":6.62}],
                                          "backgroundColor": function(context)
                                          {
                                          var index = context.dataIndex;
                                          var val = context.dataset.data[index].y;
                                          var r = map_range(val, 37,topRange, 255, 0);
                                          var g = map_range(val, 37,topRange, 0, 255);
                                          var b = 0;
                                          return "rgba("+r+", "+g+", "+b+", 0.5)";
                                          }
                                        },
                                        { "label":"Microsoft",
                                            "data":[{"x":38,"y":63,"r":9.00}],
                                            "backgroundColor": function(context)
                                            {
                                            var index = context.dataIndex;
                                            var val = context.dataset.data[index].y;
                                            var r = map_range(val, 37,topRange, 255, 0);
                                            var g = map_range(val, 37,topRange, 0, 255);
                                            var b = 0;
                                            return "rgba("+r+", "+g+", "+b+", 0.5)";
                                            }
                                          },
                  { "label":"PepsiCo",
                      "data":[{"x":39,"y":60,"r":6.35}],
                      "backgroundColor": function(context)
                      {
                      var index = context.dataIndex;
                      var val = context.dataset.data[index].y;
                      var r = map_range(val, 37,topRange, 255, 0);
                      var g = map_range(val, 37,topRange, 0, 255);
                      var b = 0;
                      return "rgba("+r+", "+g+", "+b+", 0.5)";
                      }
                    },
                    { "label":"Phillips 66",
                        "data":[{"x":40,"y":47,"r":9.16}],
                        "backgroundColor": function(context)
                        {
                        var index = context.dataIndex;
                        var val = context.dataset.data[index].y;
                        var r = map_range(val, 37,topRange, 255, 0);
                        var g = map_range(val, 37,topRange, 0, 255);
                        var b = 0;
                        return "rgba("+r+", "+g+", "+b+", 0.5)";
                        }
                      },
                      { "label":"Procter & Gamble",
                          "data":[{"x":41,"y":57,"r":6.62}],
                          "backgroundColor": function(context)
                          {
                          var index = context.dataIndex;
                          var val = context.dataset.data[index].y;
                          var r = map_range(val, 37,topRange, 255, 0);
                          var g = map_range(val, 37,topRange, 0, 255);
                          var b = 0;
                          return "rgba("+r+", "+g+", "+b+", 0.5)";
                          }
                        },
                        { "label":"State Farm Insurance",
                            "data":[{"x":42,"y":59,"r":7.83}],
                            "backgroundColor": function(context)
                            {
                            var index = context.dataIndex;
                            var val = context.dataset.data[index].y;
                            var r = map_range(val, 37,topRange, 255, 0);
                            var g = map_range(val, 37,topRange, 0, 255);
                            var b = 0;
                            return "rgba("+r+", "+g+", "+b+", 0.5)";
                            }
                          },
                          { "label":"Target",
                              "data":[ {"x":43,"y":58,"r":7.19}],
                              "backgroundColor": function(context)
                              {
                              var index = context.dataIndex;
                              var val = context.dataset.data[index].y;
                              var r = map_range(val, 37,topRange, 255, 0);
                              var g = map_range(val, 37,topRange, 0, 255);
                              var b = 0;
                              return "rgba("+r+", "+g+", "+b+", 0.5)";
                              }
                            },
                            { "label":"UnitedHealth Group",
                                "data":[{"x":44,"y":50,"r":20.12}],
                                "backgroundColor": function(context)
                                {
                                var index = context.dataIndex;
                                var val = context.dataset.data[index].y;
                                var r = map_range(val, 37,topRange, 255, 0);
                                var g = map_range(val, 37,topRange, 0, 255);
                                var b = 0;
                                return "rgba("+r+", "+g+", "+b+", 0.5)";
                                }
                              },
                              { "label":"UPS",
                                  "data":[{"x":45,"y":56,"r":6.59}],
                                  "backgroundColor": function(context)
                                  {
                                  var index = context.dataIndex;
                                  var val = context.dataset.data[index].y;
                                  var r = map_range(val, 37,topRange, 255, 0);
                                  var g = map_range(val, 37,topRange, 0, 255);
                                  var b = 0;
                                  return "rgba("+r+", "+g+", "+b+", 0.5)";
                                  }
                                },
                                { "label":"Valero Energy",
                                    "data":[{"x":46,"y":48,"r":8.84}],
                                    "backgroundColor": function(context)
                                    {
                                    var index = context.dataIndex;
                                    var val = context.dataset.data[index].y;
                                    var r = map_range(val, 37,topRange, 255, 0);
                                    var g = map_range(val, 37,topRange, 0, 255);
                                    var b = 0;
                                    return "rgba("+r+", "+g+", "+b+", 0.5)";
                                    }
                                  },
                                  { "label":"Verizon",
                                      "data":[{"x":47,"y":54,"r":12.60}],
                                      "backgroundColor": function(context)
                                      {
                                      var index = context.dataIndex;
                                      var val = context.dataset.data[index].y;
                                      var r = map_range(val, 37,topRange, 255, 0);
                                      var g = map_range(val, 37,topRange, 0, 255);
                                      var b = 0;
                                      return "rgba("+r+", "+g+", "+b+", 0.5)";
                                      }
                                    },
                                    { "label":"Walgreens Boots Alliance",
                                        "data":[{"x":48,"y":52,"r":11.82}],
                                        "backgroundColor": function(context)
                                        {
                                        var index = context.dataIndex;
                                        var val = context.dataset.data[index].y;
                                        var r = map_range(val, 37,topRange, 255, 0);
                                        var g = map_range(val, 37,topRange, 0, 255);
                                        var b = 0;
                                        return "rgba("+r+", "+g+", "+b+", 0.5)";
                                        }
                                      },
                                      { "label":"Walmart",
                                          "data":[{"x":49,"y":52,"r":50.03}],
                                          "backgroundColor": function(context)
                                          {
                                          var index = context.dataIndex;
                                          var val = context.dataset.data[index].y;
                                          var r = map_range(val, 37,topRange, 255, 0);
                                          var g = map_range(val, 37,topRange, 0, 255);
                                          var b = 0;
                                          return "rgba("+r+", "+g+", "+b+", 0.5)";
                                          }
                                        },
                                        { "label":"Wells Fargo",
                                            "data":[{"x":50,"y":55,"r":9.77}],
                                            "backgroundColor": function(context)
                                            {
                                            var index = context.dataIndex;
                                            var val = context.dataset.data[index].y;
                                            var r = map_range(val, 37,topRange, 255, 0);
                                            var g = map_range(val, 37,topRange, 0, 255);
                                            var b = 0;
                                            return "rgba("+r+", "+g+", "+b+", 0.5)";
                                            }
                                          },





    ]
  },
  options: {
       legend: {
           display: false,
         },
         tooltips: {
           callbacks:
           {
             label:

             function(tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].label;


                    return label;
                }

           }
         },
         scales: {
           yAxes: [{
             scaleLabel: {
               display: true,
               labelString: 'CSR Score'
             }
           }],
           xAxes: [
             {ticks: {
               callback:
               function(value, index, values) {
                        return '';
                   }

               }},
               {
             scaleLabel: {
               display: true,
               labelString: 'Company Name (Alphabetical)'
             }
           },

        ]
         }
       }
});

    // x - company name alphabetical y- CSR Score r - revenue / 10000

      //   {"x":3,"y":45,"r":17.79},
      //   {"x":4,"y":49,"r":15.31},
      //   {"x":5,"y":51,"r":9.00},
      //   {"x":6,"y":55,"r":22.92},
      //   {"x":7,"y":51,"r":6.08},
      //   {"x":8,"y":54,"r":16.05},
      //   {"x":9,"y":56,"r":10.03},
      //   {"x":10,"y":37,"r":24.21},
      //   {"x":11,"y":54,"r":9.34},
      //   {"x":12,"y":52,"r":13.00},
      //   {"x":13,"y":50,"r":13.45},
      //   {"x":14,"y":58,"r":8.80},
      //   {"x":15,"y":50,"r":8.45},
      //   {"x":16,"y":50,"r":12.90},
      //   {"x":17,"y":57,"r":18.48},
      //   {"x":18,"y":55,"r":7.87},
      //   {"x":19,"y":54,"r":6.27},
      //   {"x":20,"y":51,"r":10.01},
      //   {"x":21,"y":51,"r":24.44},
      //   {"x":22,"y":60,"r":11.24},
      //   {"x":23,"y":52,"r":6.03},
      //   {"x":24,"y":55,"r":15.68},
      //   {"x":25,"y":56,"r":7.47},
      //   {"x":26,"y":56,"r":12.23},
      //   {"x":27,"y":56,"r":15.73},
      //   {"x":28,"y":54,"r":10.09},
      //   {"x":29,"y":58,"r":7.91},
      //   {"x":30,"y":61,"r":6.28},
      //   {"x":31,"y":62,"r":7.65},
      //   {"x":32,"y":56,"r":11.39},
      //   {"x":33,"y":55,"r":12.27},
      //   {"x":34,"y":54,"r":6.86},
      //   {"x":35,"y":46,"r":6.76},
      //   {"x":36,"y":52,"r":19.85},
      //   {"x":37,"y":52,"r":6.62},
      //   {"x":38,"y":63,"r":9.00},
      //   {"x":39,"y":60,"r":6.35},
      //   {"x":40,"y":47,"r":9.16},
      //   {"x":41,"y":57,"r":6.62},
      //   {"x":42,"y":59,"r":7.83},
      //   {"x":43,"y":58,"r":7.19},
      //   {"x":44,"y":50,"r":20.12},
      //   {"x":45,"y":56,"r":6.59},
      //   {"x":46,"y":48,"r":8.84},
      //   {"x":47,"y":54,"r":12.60},
      //   {"x":48,"y":52,"r":11.82},
      //   {"x":49,"y":52,"r":50.03},
      //   {"x":50,"y":55,"r":9.77},
      //
      //
      // ],
      //
      //   "backgroundColor": function(context)
      //   {
      //   var index = context.dataIndex;
      //   var val = context.dataset.data[index].y;
      //   var r = map_range(val, 37,topRange, 255, 0);
      //   var g = map_range(val, 37,topRange, 0, 255);
      //   var b = 0;
      //   return "rgba("+r+", "+g+", "+b+", 0.5)";
      //
      //
      //   }
      //   }

//     ]
//
//     }
//
//
// });




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
//    topRange,
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
