$(document).ready(function () {

        $('#container').highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Masturbation level based on length of current relationship'
            },
            subtitle: {
                text: 'Source: Så liggar Sverige'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Length of relationship in years'
                },
                startOnTick: false,
                endOnTick: false,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Avg. masturbations per month'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: 00,
                y: 30,
                floating: true,
                backgroundColor: '#ffffff',
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: 'Satisfaction level {point.x}, {point.y} masturbations'
                    }
                }
            },
            series: [{
                name: 'Female',
                color: 'rgba(223, 83, 83, .5)',
                data: [
                      [0.01,4.23],
                      [0.05,11.75],
                      [0.17,10.33],
                      [0.50,1.83],
                      [1.00,2.82],
                      [3.00,3.59],
                      [7.00,2.49],
                      [15.00,1.53]
                    ]
    
            }, {
                name: 'Male',
                color: 'rgba(119, 152, 191, .5)',
                data: [
                          [0.01,12.43],
                          [0.05,10.71],
                          [0.17,11.10],
                          [0.50,9.16],
                          [1.00,9.02],
                          [3.00,8.00],
                          [7.00,6.94],
                          [15.00,5.10]
                        ]
            },
            ]
        });
    var s = "<h3>What does this tell us?</h3>";
    s += "<p></p>";
    s += "<h3>Data quality</h3>";
    s += "<h4>Men</h4>";
    s += "<p>Sample size men: </p>";
    s += "Regression function: ";
    s += "<p>R<sup>2</sup>: </p>";


    s += "<h4>Women</h4>";
    s += "<p>Sample size women: 1310</p>";
    s += "Regression function: y = -0,0191x + 3,1187";
    s += "<p>R<sup>2</sup>: 0,0034</p>";



    $("#details").append(s);

    });
    
