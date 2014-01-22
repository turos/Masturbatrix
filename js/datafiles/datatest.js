$(document).ready(function(){
	var maleColor = "rgba(119, 152, 191, 1)";
	var femaleColor = "rgba(223, 83, 83, 1)";
	var txt;
	
	$('#container').highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                backgroundColor: 'rgba(255,255,255,0.0005)'
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

});