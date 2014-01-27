$(document).ready(function(){
	var maleColor = "rgba(119, 152, 191, 1)";
	var femaleColor = "rgba(223, 83, 83, 1)";
	var txt;
    var chartBackgroundColor = 'rgba(255,255,255,0.005)';
    

    
    //ONLY LOAD THE NECESSARY DATA
    $(function() {
        function loadData(topic) {
            

            switch(topic)
            {

                case "thinking":
                    $('#container_thinking').highcharts({
                            chart: {
                                type: 'column'
                            },
                            title: {
                                text: 'Masturbation based on how often you think about sex'
                            },
                            subtitle: {
                                text: 'Source: Så ligger Sverige'
                            },
                            xAxis: {
                                categories: [
                                    'Several times per hour',
                                    'Several times a day',
                                    'Several times per week',
                                    'Couple of times per week',
                                    'Couple of times per month',
                                    'Couple of times per year',
                                    'Never'              
                                ]
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: 'Average masturbations per month'
                                }
                            },
                            tooltip: {
                                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                    '<td style="padding:0"><b>{point.y:.1f} masturbations per month</b></td></tr>',
                                footerFormat: '</table>',
                                shared: true,
                                useHTML: true
                            },
                            plotOptions: {
                                column: {
                                    pointPadding: 0.2,
                                    borderWidth: 0
                                }
                            },
                            series: [{
                                name: 'Men',
                                color: maleColor,
                                data:   [18.64,11.68, 7.21, 3.87, 2.28, 0.96, 7.41]
                            }, 
                            {
                                name: 'Male error',
                                type: 'errorbar',
                                color: 'black',
                                lineWidth: 2,
                                data: [
                                          [16.55,20.73],
                                          [11.18,12.18],
                                          [6.79,7.63],
                                          [3.48,4.27],
                                          [1.82,2.73],
                                          [0.58,1.33],
                                          [3.32,11.51]
                                        ],
                                tooltip: {
                                    pointFormat: '(error range: {point.low}-{point.high})<br/>'
                                }
                            },
                            {
                                name: 'Women',
                                color: femaleColor,
                                data:   [16.92, 7.60, 3.41, 2.05,0.99, 0.23, 0.34]
                            },
                            {
                                name: 'Female error',
                                type: 'errorbar',
                                color: 'black',
                                lineWidth: 2,
                                data: [
                                      [11.99,21.85],
                                      [6.91,8.29],
                                      [3.17,3.64],
                                      [1.83,2.28],
                                      [0.88,1.10],
                                      [0.16,0.30],
                                      [0.23,0.46]

                                ],
                                tooltip: {
                                            pointFormat: '(error range: {point.low}-{point.high})<br/>'
                                        }
                                    }, 
                            ]
                        });

                break;

                case "health":
                    $('#container_health').highcharts({
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: 'Masturbation based on health'
                        },
                        subtitle: {
                            text: 'Source: Så ligger Sverige'
                        },
                        xAxis: {
                            categories: [
                                'Good',
                                'Neither good or bad' ,
                                'Bad',
                                'Prolonged Illness',
                                'Lasting damage'                    
                            ]
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'Average masturbations per month'
                            }
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y:.1f} masturbations per month</b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0.2,
                                borderWidth: 0
                            }
                        },
                        series: [{
                            name: 'Men',
                            color: maleColor,
                            data: [8.05,9.04,12.31,6.8,7.12]
                
                        }, 
                        {
                            name: 'Male error',
                            type: 'errorbar',
                            color: 'black',
                            lineWidth: 2,
                            data: [
                                      [7.71,8.4],
                                      [8.47,9.61],
                                      [10.11,14.51],
                                      [5.53,8.07],
                                      [5.19,9.04]
                                    ],
                            tooltip: {
                                pointFormat: '(error range: {point.low}-{point.high})<br/>'
                            }
                        },
                        {
                            name: 'Women',
                            color: femaleColor,
                            data: [2.73,3.27,2.9,2.46,2.81]
                        },
                        {
                            name: 'Female error',
                            type: 'errorbar',
                            color: 'black',
                            lineWidth: 2,
                            data: [
                                      [2.54,2.91],
                                      [2.93,3.61],
                                      [2.17,3.63],
                                      [1.9,3.03],
                                      [2.07,3.56]
                            ],
                            tooltip: {
                                        pointFormat: '(error range: {point.low}-{point.high})<br/>'
                                    }
                                }, 
                        ]
                    });
                    break;


                case "satisfaction":
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
                                text: 'Source: Så ligger Sverige'
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
                    
                            },
                            {
                                name: 'Female error',
                                type: 'errorbar',
                                color: femaleColor,
                                lineWidth: 2,
                                data: [
                                          [1,2.60,3.34],
                                          [2,3.27,4.27],
                                          [3,2.07,2.67],
                                          [4,2.62,3.14],
                                          [5,2.83,3.81]
                                        ],
                                tooltip: {
                                    pointFormat: '(error range: {point.low}-{point.high})<br/>'
                                }
                            }, 
                            {                
                                name: 'Male',
                                color: maleColor,
                                data: [[1, 13.85], [2, 9.31],[3, 7.72],[4,6.91],[5,7.36]]
                            },
                            {
                                name: 'Male error',
                                type: 'errorbar',
                                color: maleColor,
                                lineWidth: 2,
                                data: [
                                          [1,12.61,15.09],
                                          [2,8.64,9.98],
                                          [3,7.16,8.27],
                                          [4,6.50,7.31],
                                          [5,6.52,8.21]
                                        ],
                                tooltip: {
                                    pointFormat: '(error range: {point.low}-{point.high})<br/>'
                                }
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

                break;


                case "age":
                    $('#container_age').highcharts({
                    chart: {
                        type: 'scatter',
                        zoomType: 'xy',
                        backgroundColor: '#E9B07C'
                    },
                    title: {
                        text: 'Masturbation level based on age'
                    },
                    subtitle: {
                        text: 'Source: Så ligger Sverige'
                    },
                    xAxis: {
                        title: {
                            enabled: true,
                            text: 'Age in years'
                        },
                        startOnTick: false,
                        endOnTick: false,
                        showLastLabel: true,
                        lineColor: '#000000'

                    },
                    yAxis: {
                        title: {
                            text: 'Avg. masturbations per month'
                        },
                        gridLineColor: '#F09C48'
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
                                pointFormat: 'Age {point.x}, {point.y} masturbations'
                            }
                        }
                    },
                    series: [{
                        name: 'Female',
                        color: 'rgba(223, 83, 83, .5)',
                        data: [
                              [21,4.48],
                              [35,3.78],
                              [55,2.02],
                              [75,0.95]
                            ]            
                    },
                    {
                        name: 'Female error',
                        type: 'errorbar',
                        color: femaleColor,
                        lineWidth: 2,
                        data: [
                              [21,3.93,5.03],
                              [35,3.48,4.08],
                              [55,1.84,2.19],
                              [75,0.74,1.16]
                            ],
                        tooltip: {
                            pointFormat: '(error range: {point.low}-{point.high})<br/>'
                        }
                    }, 

                    {
                        name: 'Male',
                        color: 'rgba(119, 152, 191, .5)',
                        data: [
                              [21,13.16],
                              [35,10.80],
                              [55,6.14],
                              [75,2.96]
                            ]
                    },
                    {
                        name: 'Male error',
                        type: 'errorbar',
                        color: maleColor,
                        lineWidth: 2,
                        data: [
                                  [21,12.17,14.15],
                                  [35,10.30,11.29],
                                  [55,5.79,6.50],
                                  [75,2.46,3.45]
                                ],
                        tooltip: {
                            pointFormat: '(error range: {point.low}-{point.high})<br/>'
                        }
                    },
                    {
                        type: 'line',
                        name: 'Male regression line',
                        data: [[21,13.21],[75,2.74]],
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
                        color: "rgba(223, 83, 83, 1)",
                        data: [[21,4.54],[75,0.86]],
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
                break;



                case "relationship":
                        $('#container_relationship').highcharts({
                                chart: {
                                    type: 'scatter',
                                    zoomType: 'xy',
                                    backgroundColor: chartBackgroundColor
                                },
                                title: {
                                    text: 'Masturbation level based on length of current relationship'
                                },
                                subtitle: {
                                    text: 'Source: Så ligger Sverige'
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

                break;



                case "occupation":
                    $('#container_occupation').highcharts({
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: 'Masturbation based on occupation'
                        },
                        subtitle: {
                            text: 'Source: Så ligger Sverige'
                        },
                        xAxis: {
                            categories: [
                                'Employed',
                                'Entrepreneur' ,
                                'Working from home',
                                'Looking for job' ,
                                'Retired',
                                'Student'                   
                            ]
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'Average masturbations per month'
                            }
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y:.1f} masturbations per month</b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0.2,
                                borderWidth: 0
                            }
                        },
                        series: [{
                            name: 'Men',
                            color: maleColor,
                            data: [8.35, 9.23, 12.6, 10.15, 3.87, 13.36]
                
                        }, 
                        {
                            name: 'Male error',
                            type: 'errorbar',
                            color: 'black',
                            lineWidth: 2,
                            data: [
                                      [7.99,8.71],
                                      [8.11, 10.36],
                                      [9.09,16.11],
                                      [9.04, 11.26],
                                      [3.39, 4.34],
                                      [12.34, 14.38]
                                    ],
                            tooltip: {
                                pointFormat: '(error range: {point.low}-{point.high})<br/>'
                            }
                        },
                        {
                            name: 'Women',
                            color: femaleColor,
                            data: [2.83, 2.79, 1.65, 4.32, 1.31, 4.32]
                        },
                        {
                            name: 'Female error',
                            type: 'errorbar',
                            color: 'black',
                            lineWidth: 2,
                            data: [
                                      [2.61, 3.05],
                                      [2.57, 3.31],
                                      [1.26, 2.03],
                                      [3.59, 5.05],
                                      [1.1, 1.51],
                                      [3.8, 4.83]
                            ],
                            tooltip: {
                                        pointFormat: '(error range: {point.low}-{point.high})<br/>'
                                    }
                                }, 
                        ]
                    });

                break;





                case "religion":
                    $('#container_religion').highcharts({
                            chart: {
                                type: 'column'
                            },
                            title: {
                                text: 'Masturbation based on faith'
                            },
                            subtitle: {
                                text: 'Source: Så ligger Sverige'
                            },
                            xAxis: {
                                categories: [
                                    'Faith in another religion than Christianity or Islam',
                                    'Christian' ,
                                    'Not religious',
                                    'Muslim'                    
                                ]
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: 'Average masturbations per month'
                                }
                            },
                            tooltip: {
                                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                    '<td style="padding:0"><b>{point.y:.1f} masturbations per month</b></td></tr>',
                                footerFormat: '</table>',
                                shared: true,
                                useHTML: true
                            },
                            plotOptions: {
                                column: {
                                    pointPadding: 0.2,
                                    borderWidth: 0
                                }
                            },
                            series: [{
                                name: 'Men',
                                color: maleColor,
                                data: [11.24,6.76,  8.19 ,7.71]
                    
                            }, 
                            {
                                name: 'Male error',
                                type: 'errorbar',
                                color: 'black',
                                lineWidth: 2,
                                data: [
                                          [9.35,13.14],
                                          [6.18,7.35],
                                          [7.88,8.51],
                                          [5.56,9.85]
                                        ],
                                tooltip: {
                                    pointFormat: '(error range: {point.low}-{point.high})<br/>'
                                }
                            },
                            {
                                name: 'Women',
                                color: femaleColor,
                                data: [1.74,2.15, 3.01,5.65]
                            },
                            {
                                name: 'Female error',
                                type: 'errorbar',
                                color: 'black',
                                lineWidth: 2,
                                data: [
                                          [1.30,2.19],
                                          [1.86,2.44],
                                          [2.82,3.19],
                                          [2.62,8.67]
                                ],
                                tooltip: {
                                            pointFormat: '(error range: {point.low}-{point.high})<br/>'
                                        }
                                    }, 
                            ]
                        });

                break;



                case "sexpartners":
                    $('#container_sexpartners').highcharts({
                            chart: {
                                type: 'scatter',
                                zoomType: 'xy',
                                backgroundColor: chartBackgroundColor
                            },            
                            title: {
                                text: 'Masturbation level based on amount of sexpartners',                
                            },
                            subtitle: {
                                text: 'Source: Så ligger Sverige'
                            },
                            xAxis: {
                                title: {
                                    enabled: true,
                                    text: 'Amount of sexpartners'
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
                                data: [
                                          [5,2.12],
                                          [15,3.61],
                                          [25,5.05],
                                          [35,6.15],
                                          [45,5.18],
                                          [75,6.69],
                                          [100,8.79]
                                        ]
                    
                            },
                            {
                                name: 'Female error',
                                type: 'errorbar',
                                color: femaleColor,
                                lineWidth: 2,
                                data: [
                                          [5,1.97,2.27],
                                          [15,3.20,4.02],
                                          [25,4.04,6.06],
                                          [35,5.10,7.20],
                                          [45,2.26,8.09],
                                          [75,5.23,8.15],
                                          [100,5.19,12.38]
                                        ],
                                tooltip: {
                                    pointFormat: '(error range: {point.low}-{point.high})<br/>'
                                }
                            }, 
                            {                
                                name: 'Male',
                                color: maleColor,
                                data: [
                                          [5,7.80],
                                          [15,7.48],
                                          [25,7.77],
                                          [35,12.24],
                                          [45,9.19],
                                          [75,10.02],
                                          [100,12.77]
                                        ]
                            },
                            {
                                name: 'Male error',
                                type: 'errorbar',
                                color: maleColor,
                                lineWidth: 2,
                                data: [
                                          [5,7.46,8.14],
                                          [15,6.86,8.10],
                                          [25,6.73,8.81],
                                          [35,10.23,14.24],
                                          [45,7.47,10.91],
                                          [75,8.33,11.71],
                                          [100,10.18,15.36]
                                        ],
                                tooltip: {
                                    pointFormat: '(error range: {point.low}-{point.high})<br/>'
                                }
                            },
                            {
                                type: 'line',
                                name: 'Male regression line',
                                color: maleColor,
                                data: [[5,7.784],[100,12.373]],
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
                                data: [[5,3.123],[100,8.757]],
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
                break;



                default:
                    console.log("hitting default in switch");
                break;

            }
        }


        window.loadData=loadData;
    });




    


    ////////////////////////////////////////////
    //                                        // 
    //      AMOUNT OF SEXPARTERS              //
    //                                        //
    ////////////////////////////////////////////









//final closing
});







