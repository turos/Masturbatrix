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
    
            }, {
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
		    var s = "<h3>What does this tell us?</h3>";
		    s += "<p>blabla</p>";
		    s += "<h3>Data quality</h3>";
		    s += "<h4>Men</h4>";
		    s += "<p>Sample size men: 1449</p>";
		    s += "Regression function: y = -0,1939x + 17,282";
		    s += "<p>R<sup>2</sup>: 0,99423</p>";



		    s += "<h4>Women</h4>";
		    s += "<p>Sample size women: 1424</p>";
		    s += "Regression function: y = -0,0681x + 5,9709";
		    s += "<p>R<sup>2</sup>: 0,98823</p>";




    $("#details").append(s);
	break;
	default:
	  //code to be executed if n is different from case 1 and 2
	  console.log("switch --> default");
	}

	
});
