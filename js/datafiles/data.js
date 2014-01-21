$(document).ready(function(){
	var s = window.location.href;
	var txt;
	var maleColor = "rgba(119, 152, 191, 0.8)";
	var femaleColor = "rgba(223, 83, 83, 0.8)";
	
	//find the url parameters
	var index = s.lastIndexOf("?");
	var topic = s.substring(index + 7, s.length);
	

	switch(topic)
	{

	case "satisfaction":
	  $('#container').highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Masturbation level based on satisfaction with own sexlife'
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
		    txt = "<h3>What does this tell us?</h3>";
		    txt += "<p>Not only do men masturbate more. They also seem to use it as a substitute for sex with their partner, ie. the more satisfied they are with their own sexlife, the less they tend to masturbate. For women there doesn't seem to be any correlation between how satisfied they are with their sexlife and how much they masturbate. This is one of the few stats with a clear difference between men and women.</p>";
		    txt += "<h3>Data quality</h3>";
		    txt += "<h4>Men</h4>";
		    txt += "<p>Sample size men: 1358</p>";
		    txt += "Regression function: y = -1,5375x + 13,642";
		    txt += "<p>R<sup>2</sup>: 0,73147</p>";


		    txt += "<h4>Women</h4>";
		    txt += "<p>Sample size women: 1310</p>";
		    txt += "Regression function: y = -0,0191x + 3,1187";
		    txt += "<p>R<sup>2</sup>: 0,0034</p>";
    $("#details").append(txt);
	break;



	case "relationshiplength":
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
	    txt = "<h3>What does this tell us?</h3>";
	    txt += "<p>The longer the relationship, the less masturbation. Men and women are surprisingly parrallel when it comes to the decline rate in masturbation, though men are approximately 50% higher in actual numbers. There is, however, a risk that the real cause of the trend is not the length of the relationship, but the age of the respondant, ie. the older you are, the less you masturbate. </p>";
	    txt += "<h3>Data quality</h3>";
	    txt += "<h4>Men</h4>";
	    txt += "<p>Sample size men: 1468 </p>";
	    txt += "Regression function: -0,917ln(x) + 8,5603";
	    txt += "<p>R<sup>2</sup>: 0,93222</p>";


	    txt += "<h4>Women</h4>";
	    txt += "<p>Sample size women: 1390</p>";
	    txt += "Regression function: y = -0,927ln(x) + 4,3206";
	    txt += "<p>R<sup>2</sup>: 0,3499</p>";
    $("#details").append(txt);
	break;
	


	case "age": 
		$('#container').highcharts({
		            chart: {
		                type: 'scatter',
		                zoomType: 'xy'
		            },
		            title: {
		                text: 'Masturbation level based on age'
		            },
		            subtitle: {
		                text: 'Source: Så liggar Sverige'
		            },
		            xAxis: {
		                title: {
		                    enabled: true,
		                    text: 'Age in years'
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
		    
		            }, {
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
		    txt = "<h3>What does this tell us?</h3>";
		    txt += "<p>blabla</p>";
		    txt += "<h3>Data quality</h3>";
		    txt += "<h4>Men</h4>";
		    txt += "<p>Sample size men: 1449</p>";
		    txt += "Regression function: y = -0,1939x + 17,282";
		    txt += "<p>R<sup>2</sup>: 0,99423</p>";

		    txt += "<h4>Women</h4>";
		    txt += "<p>Sample size women: 1424</p>";
		    txt += "Regression function: y = -0,0681x + 5,9709";
		    txt += "<p>R<sup>2</sup>: 0,98823</p>";
    $("#details").append(txt);
	break;



    case "sexpartners":

        $('#container').highcharts({
                chart: {
                    type: 'scatter',
                    zoomType: 'xy'
                },
                title: {
                    text: 'Masturbation level based on amount of sexpartners'
                },
                subtitle: {
                    text: 'Source: Så liggar Sverige'
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
                    showLastLabel: true
                },
                yAxis: {
                    title: {
                        text: 'Avg. masturbations per month',                        
                    },
                    min: 0

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
                    data: [
                              [1,1.25],
                              [2,1.93],
                              [3,2.18],
                              [4,2.41],
                              [5,1.78],
                              [6,3.85],
                              [7,2.48],
                              [8,1.54],
                              [9,2.59],
                              [10,2.10],
                              [11,5.82],
                              [12,2.88],
                              [13,3.30],
                              [14,2.25],
                              [15,2.91],
                              [16,2.25],
                              [17,3.78],
                              [18,13.00],
                              [19,0.86],
                              [20,4.02],
                              [21,0.00],
                              [22,2.89],
                              [24,1.00],
                              [25,4.16],
                              [26,17.00],
                              [27,1.00],
                              [29,5.50],
                              [30,6.21],
                              [32,1.50],
                              [33,5.00],
                              [34,7.00],
                              [35,5.86],
                              [37,8.00],
                              [40,5.53],
                              [42,2.00],
                              [45,0.00],
                              [47,0.00],
                              [48,2.00],
                              [50,7.27],
                              [75,6.69],
                              [101,8.79]
                        ]        
                }, {
                    name: 'Male',
                    color: maleColor,
                    data: [
                              [1,5.63],
                              [2,8.37],
                              [3,9.09],
                              [4,7.95],
                              [5,6.84],
                              [6,8.23],
                              [7,9.27],
                              [8,7.98],
                              [9,11.07],
                              [10,7.58],
                              [11,10.08],
                              [12,7.09],
                              [13,8.47],
                              [14,4.18],
                              [15,7.35],
                              [16,7.33],
                              [17,13.83],
                              [18,7.25],
                              [19,13.40],
                              [20,6.76],
                              [21,17.00],
                              [22,4.50],
                              [23,7.14],
                              [24,4.43],
                              [25,6.90],
                              [26,13.40],
                              [27,17.50],
                              [28,10.50],
                              [29,5.00],
                              [30,7.13],
                              [31,0.00],
                              [32,10.00],
                              [33,4.75],
                              [34,0.00],
                              [35,13.93],
                              [36,16.50],
                              [37,6.00],
                              [38,0.00],
                              [40,13.21],
                              [42,7.67],
                              [43,0.00],
                              [44,15.00],
                              [45,7.00],
                              [47,10.40],
                              [48,0.00],
                              [50,9.86],
                              [75,10.02],
                              [101,12.77]
                            ]
                },
                {
                    type: 'line',
                    name: 'Male regression line',
                    color: maleColor,
                    data: [],
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
                    data: [],
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
            txt = "<h3>What does this tell us?</h3>";
            txt += "<p>Kick it, Kicke</p>";
            txt += "<h3>Data quality</h3>";
            txt += "<p>Some outliers removed from the dataset.</p>"
            txt += "<h4>Men</h4>";
            txt += "<p>Sample size men: 1382 </p>";
            txt += "<h4>Women</h4>";
            txt += "<p>Sample size women: 1379</p>";

            $("#details").append(txt);
    break;


    case "religion":
            $('#container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Masturbation based on faith'
            },
            subtitle: {
                text: 'Source: Så liggar Sverige'
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

/*

MALE
y = -3,968ln(x) + 12,17
R² = 0,97777


FEMALE
y = 0,7031ln(x) + 2,2767
R² = 0,4373



*/

            txt = "<h3>What does this tell us?</h3>";
            txt += "<p>Kelly kills this one</p>";
            
            txt += "<h3>Data quality</h3>";
            txt += "<h4>Men</h4>";
            txt += "<p>Sample size men: </p>";

            txt += "<h4>Women</h4>";
            txt += "<p>Sample size women: </p>";
            $("#details").append(txt);
    
    break;

    case "health":
            $('#container').highcharts({
                chart: {
                    type: 'scatter',
                    zoomType: 'xy'
                },
                title: {
                    text: 'Masturbation level based on health'
                },
                subtitle: {
                    text: 'Source: Så liggar Sverige'
                },
                xAxis: {
                    title: {
                        enabled: true,
                        text: 'Health level 1-3 (the higher the number, the better health)'
                    },
                    type: 'logarithmic',
                    minorTickInterval: 0.1,
                    startOnTick: false,
                    endOnTick: false,
                    allowDecimals: false,
                    showLastLabel: true
                },
                yAxis: {
                    title: {
                        text: 'Avg. masturbations per month'
                    },
                    allowDecimals: false
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
                    data: [[1,2.9],[2,3.27],[3,2.73]]
        
                }, {
                    name: 'Male',
                    color: maleColor,
                    data: [[1, 12.31],[2,9.04],[3,8.05]]
                },


            {
                type: 'line',
                name: 'Male regression line',
                color: maleColor,
                data: [[1,12.17],[2,9.419591988],[3,7.810706439]],
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
                data: [[1,2.2767],[2,2.764051783],[3,3.0491343]],
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
                txt = "<h3>What does this tell us?</h3>";
                txt += "<p>It's about sexual healing. People who feel bad are more likely to masturbate than people who feel good. </p>";
                txt += "<h3>Data quality</h3>";
                txt += "<p>Deleted Prolonged Illness and Lasting damage/disability</p>";
                txt += "<h4>Men</h4>";
                txt += "<p>Sample size men: 1384</p>";
                txt += "Regression function: ";
                txt += "<p>R<sup>2</sup>: </p>";


                txt += "<h4>Women</h4>";
                txt += "<p>Sample size women: 1375</p>";
                txt += "Regression function: ";
                txt += "<p>R<sup>2</sup>: </p>";
        $("#details").append(txt);
    break;



	default:
	  //code to be executed if n is different from case 1 and 2
	  console.log("switch --> default");
	}

	
});
