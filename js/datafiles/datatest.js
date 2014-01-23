$(document).ready(function(){
	var maleColor = "rgba(119, 152, 191, 1)";
	var femaleColor = "rgba(223, 83, 83, 1)";
	var txt;
    var chartBackgroundColor = 'rgba(255,255,255,0.005)';
	

    ////////////////////////////////////////////
    //                                        // 
    //      SATISFACTION WITH OWN SEXLIFE     //
    //                                        //
    ////////////////////////////////////////////

	$('#container_satisfaction').highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                backgroundColor: chartBackgroundColor
            },            
            title: {
                text: 'Masturbation level based on satisfaction with own sexlife',                
            },
            subtitle: {
                text: 'Source: Så liggar Sverige'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Satisfaction level 1-5 (the higher number, the more satisfied)'
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
                color: femaleColor,
                data: [[1,2.96],[2,3.77],[3,2.37],[4,2.88],[5,3.32]]
    
            }, {
                name: 'Male',
                color: maleColor,
                data: [[1, 13.85], [2, 9.31],[3, 7.72],[4,6.91],[5,7.36]]
            },
            {
                type: 'line',
                name: 'Male regression line',
                color: maleColor,
                data: [[1,12.11],[5,5.96]],
                marker: {
                    enabled: false
                },
                states: {
                    hover: {
                        lineWidth: 0
                    }
                },
                enableMouseTracking: false
            },
            {
                type: 'line',
                name: 'Female regression line',
                color: femaleColor,
                data: [[1,3.1],[5,3.02]],
                marker: {
                    enabled: false
                },
                states: {
                    hover: {
                        lineWidth: 0
                    }
                },
                enableMouseTracking: false
            }]
        });

		    txt = "<p>Not only do men masturbate more. They also seem to use it as a substitute for sex with their partner, ie. the more satisfied they are with their own sexlife, the less they tend to masturbate. For women there doesn't seem to be any correlation between how satisfied they are with their sexlife and how much they masturbate. This is one of the few stats with a clear difference between men and women.</p>";
		    txt += "<h3>Data quality</h3>";
		    txt += "<h4>Men</h4>";
		    txt += "<p>Sample size men: 1358</p>";
		    txt += "Regression function: y = -1,5375x + 13,642";
		    txt += "<p>R<sup>2</sup>: 0,73147</p>";


		    txt += "<h4>Women</h4>";
		    txt += "<p>Sample size women: 1310</p>";
		    txt += "Regression function: y = -0,0191x + 3,1187";
		    txt += "<p>R<sup>2</sup>: 0,0034</p>";
    //$("#details").append(txt);


    ////////////////////////////////////////////
    //                                        // 
    //      LENGTH OF RELATIONSHIP            //
    //                                        //
    ////////////////////////////////////////////

    $("#container_relationship").highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                                backgroundColor: chartBackgroundColor
            },
            title: {
                text: 'Masturbation level based on length of current relationship'
            },
            subtitle: {
                text: 'Source: Så liggar Sverige'
            },
            xAxis: {
                type: 'logarithmic',
                minorTickInterval: 0.1,
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
                        pointFormat: 'Length of relationship in years {point.x}, {point.y} masturbations'
                    }
                }
            },
            series: [{
                name: 'Female',
                color: femaleColor,
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
    
            }, 

    {
                name: 'Female error',
                type: 'errorbar',
                color: femaleColor,
                lineWidth: 2,
                data: [
                      [0.01, 3.83,4.63],
                      [0.05, 7.01,16.49],
                      [0.17, 7.54,13.13],
                      [0.5, 1.31,2.36],
                      [1.00, 2.11,3.53],
                      [3.00, 2.98,4.19],
                      [7.00, 2.25,2.74],
                      [15.00, 1.39,1.67]
                    ],
                tooltip: {
                    pointFormat: '(error range: {point.low}-{point.high})<br/>'
                }
            },
            {
                name: 'Male',
                color: maleColor,
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
            {
            name: 'Male error',
            type: 'errorbar',
            color: maleColor,
            lineWidth: 2,
            data: [
                      [0.01,11.81,13.04],
                      [0.05,7.53,13.90],
                      [0.17,7.07,15.13],
                      [0.5,5.77,12.54],
                      [1.0,7.18,10.85],
                      [3.00,7.18,8.82],
                      [7.00,6.34,7.55],
                      [15.00,4.79,5.41]
                ],
            tooltip: {
                pointFormat: '(error range: {point.low}-{point.high})<br/>'
            }
        },
            {
                type: 'line',
                name: 'Male regression line',
                color: maleColor,
                data: [[0.01,12.783],[15,6.08]],
                marker: {
                    enabled: false
                },
                states: {
                    hover: {
                        lineWidth: 0
                    }
                },
                enableMouseTracking: false
            },
            {
                type: 'line',
                name: 'Female regression line',
                color: femaleColor,
                data: [[0.01,8.59],[15,1.81]],
                marker: {
                    enabled: false
                },
                states: {
                    hover: {
                        lineWidth: 0
                    }
                },
                enableMouseTracking: false
            }
            
            ]

    });
});