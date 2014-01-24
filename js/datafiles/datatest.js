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




    ////////////////////////////////////////////
    //                                        // 
    //      YOUR HEALTH                       //
    //                                        //
    ////////////////////////////////////////////





    ////////////////////////////////////////////
    //                                        // 
    //      YOUR AGE                          //
    //                                        //
    ////////////////////////////////////////////


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
  


    ////////////////////////////////////////////
    //                                        // 
    //      AMOUNT OF SEXPARTERS              //
    //                                        //
    ////////////////////////////////////////////

$('#container_sexpartners').highcharts({
                chart: {
                    type: 'scatter',
                    zoomType: 'xy'
                },
                title: {
                    text: 'Masturbation level based on amount of sexpartners'
                },
                subtitle: {
                    text: 'Source: Så ligger Sverige'
                },
                xAxis: {

                    type: 'logarithmic',
                    minorTickInterval: 0.1,
                    title: {
                        enabled: true,
                        text: 'Amount of sexpartners'
                    },
                    startOnTick: false,
                    endOnTick: false,
                    showLastLabel: true,
                    min: 1
                },
                yAxis: {

                    title: {
                        text: 'Avg. masturbations per month',                        
                    },
                    min: 0,
                    max: 30

                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: 0,
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
                            pointFormat: 'Amount of sexpartners {point.x}, {point.y} masturbations'
                        }
                    }
                },
                series: [{
                    name: 'Female',
                    color: femaleColor,
                    lineWidth: 1,
                    data: [
                              [1,1.25170068],
                              [2,1.932038835],
                              [3,2.182608696],
                              [4,2.406593407],
                              [5,1.781512605],
                              [6,3.847826087],
                              [7,2.47761194],
                              [8,1.538461538],
                              [9,2.586206897],
                              [10,2.097222222],
                              [11,5.823529412],
                              [12,2.87804878],
                              [13,3.3],
                              [14,2.25],
                              [15,2.913793103],
                              [16,2.25],
                              [17,3.777777778],
                              [18,13],
                              [19,0.857142857],
                              [20,4.016666667],
                              [21,0],
                              [22,2.888888889],
                              [23,18],
                              [24,1],
                              [25,4.161290323],
                              [26,17],
                              [27,1],
                              [29,5.5],
                              [30,6.214285714],
                              [31,30],
                              [32,1.5],
                              [33,5],
                              [34,7],
                              [35,5.857142857],
                              [37,8],
                              [40,5.529411765],
                              [42,2],
                              [45,0],
                              [47,0],
                              [48,2],
                              [50,7.272727273],
                              [75,6.692307692],
                              [101,8.785714286]
                            ]
       
                }, 
                {
                        name: 'Female error',
                        type: 'errorbar',
                        color: femaleColor,
                        lineWidth: 1,
                        data: [
                                  [1,1.047881453,1.455519908],
                                  [2,1.561764797,2.302312872],
                                  [3,1.82395492,2.541262471],
                                  [4,1.916631861,2.896554953],
                                  [5,1.485323104,2.077702106],
                                  [6,2.97949343,4.716158744],
                                  [7,1.815033554,3.140190326],
                                  [8,1.247308415,1.829614662],
                                  [9,1.817438959,3.354974834],
                                  [10,1.649823249,2.544621196],
                                  [11,4.499711681,7.147347143],
                                  [12,2.256030494,3.500067067],
                                  [13,2.058629789,4.541370211],
                                  [14,1.640825353,2.859174647],
                                  [15,2.250376514,3.577209693],
                                  [16,1.510490027,2.989509973],
                                  [17,2.552752933,5.002802623],
                                  [18,7.68754085,18.31245915],
                                  [19,0.431986395,1.28229932],
                                  [20,2.986162026,5.047171308],
                                  [21,0,0],
                                  [22,1.627452862,4.150324916],
                                  [23,18,18],
                                  [24,0.292893219,1.707106781],
                                  [25,2.968093535,5.35448711],
                                  [26,8.193436791,25.80656321],
                                  [27,0.528595479,1.471404521],
                                  [29,2.318019485,8.681980515],
                                  [30,4.010186366,8.418385062],
                                  [31,30,30],
                                  [32,1.146446609,1.853553391],
                                  [33,0.917517095,9.082482905],
                                  [34,4.878679656,9.121320344],
                                  [35,4.295951714,7.418334],
                                  [37,8,8],
                                  [40,4.21114078,6.847682749],
                                  [42,1.057190958,2.942809042],
                                  [45,0,0],
                                  [47,0,0],
                                  [48,2,2],
                                  [50,2.908918736,11.63653581],
                                  [75,5.233028841,8.151586544],
                                  [101,5.19266747,12.3787611]
                                ],
                        tooltip: {
                            pointFormat: '(error range: {point.low}-{point.high})<br/>'
                        }
                    }, 


                {
                    name: 'Male',
                    color: maleColor,
                    data: [
                              [1,5.626760563],
                              [2,8.371900826],
                              [3,9.09009009],
                              [4,7.949494949],
                              [5,6.837606838],
                              [6,8.23255814],
                              [7,9.269230769],
                              [8,7.979166667],
                              [9,11.06666667],
                              [10,7.577981651],
                              [11,10.08333333],
                              [12,7.090909091],
                              [13,8.470588235],
                              [14,4.176470588],
                              [15,7.35],
                              [16,7.333333333],
                              [17,13.83333333],
                              [18,7.25],
                              [19,13.4],
                              [20,6.755102041],
                              [21,17],
                              [22,4.5],
                              [23,7.142857143],
                              [24,4.428571429],
                              [25,6.902439024],
                              [26,13.4],
                              [27,17.5],
                              [28,10.5],
                              [29,5],
                              [30,7.125],
                              [32,10],
                              [33,4.75],
                              [35,13.92857143],
                              [36,16.5],
                              [37,6],
                              [38,0],
                              [40,13.21052632],
                              [41,20],
                              [42,7.666666667],
                              [43,0],
                              [44,15],
                              [45,7],
                              [47,10.4],
                              [48,0],
                              [50,9.857142857],
                              [75,10.02173913],
                              [101,12.76923077]
                            ]
                },
                {
                    name: 'Male error',
                    type: 'errorbar',
                    color: maleColor,
                    lineWidth: 2,
                    data: [
                              [1,4.850347136,6.40317399],
                              [2,7.456510762,9.287290891],
                              [3,7.949352482,10.2308277],
                              [4,7.051541428,8.847448471],
                              [5,6.06885511,7.606358565],
                              [6,7.105709629,9.35940665],
                              [7,7.522061591,11.01639995],
                              [8,6.62853359,9.329799743],
                              [9,8.699327169,13.43400616],
                              [10,6.632066617,8.523896686],
                              [11,7.535299414,12.63136725],
                              [12,5.968171687,8.213646494],
                              [13,6.918454651,10.02272182],
                              [14,2.811472409,5.541468767],
                              [15,6.084907777,8.615092223],
                              [16,3.871905668,10.794761],
                              [17,6.907469301,20.75919737],
                              [18,5.398058451,9.101941549],
                              [19,4.930761545,21.86923845],
                              [20,5.585398906,7.924805176],
                              [21,3.119558124,30.88044188],
                              [22,2.222391605,6.777608395],
                              [23,2.360113624,11.92560066],
                              [24,1.228717204,7.628425653],
                              [25,5.780061121,8.024816927],
                              [26,7.99185799,18.80814201],
                              [27,7.794975528,27.20502447],
                              [28,3.782485579,17.21751442],
                              [29,5,5],
                              [30,5.355714525,8.894285475],
                              [32,10,10],
                              [33,2.969024144,6.530975856],
                              [35,10.70166875,17.1554741],
                              [36,6.954058454,26.04594155],
                              [37,6,6],
                              [38,0,0],
                              [40,9.829317901,16.59173473],
                              [41,20,20],
                              [42,4.457882427,10.87545091],
                              [43,0,0],
                              [44,15,15],
                              [45,4.878679656,9.121320344],
                              [47,5.940403606,14.85959639],
                              [48,0,0],
                              [50,7.166049676,12.54823604],
                              [75,8.332932119,11.71054614],
                              [101,10.1772131,15.36124844]
                            ]
                    ,
                    tooltip: {
                        pointFormat: '(error range: {point.low}-{point.high})<br/>'
                    }
                },
                {
                    type: 'line',
                    name: 'Male regression line',
                    color: maleColor,
                    lineWidth: 5,
                    data: [[1,8.167],[101,11.027]],
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
                    lineWidth: 5,
                    data: [[1,3.417],[101,20.012]],
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
   


    ////////////////////////////////////////////
    //                                        // 
    //      RELIGION                          //
    //                                        //
    ////////////////////////////////////////////

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
                data: [11.24390244,6.763948498,  8.192813322 ,7.705882353]
    
            }, {
                name: 'Women',
                color: femaleColor,
                data: [1.741935484,2.149560117,  3.005252101,5.647058824]
    
            }
            ]
        });

});



