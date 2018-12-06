$(document).ready(function(){
    
    function responsiveMenu(){
		var toggle = $(".js-toggle");
		var menu = $(".js-menu");
		
		toggle.on("click", function(){
			menu.toggleClass("js-menu-visible");
			
			$(this).toggleClass("js-toggle-close");
		})
	}
	
	responsiveMenu();
	
	function switchCurrency(){
		var switchEl = $(".js-switch-el");
		
		switchEl.on("click", function(){
			var anchor = $(this).data("currency");
			
			switchEl.not(this).each(function() {
				$(this).removeClass("js-switch-el-active");
			});
			$(this).addClass("js-switch-el-active");
			
			$(".js-graph").removeClass("js-graph-visible");;
			$(".js-graph[data-currency='" + anchor +"']").addClass("js-graph-visible");
			
		})
	}
	
	switchCurrency();
	
	function poolConfigSwitch(){
		
		var radioMnry = $(".js-radio-mnry");
		var radioOwn = $(".js-radio-own");
		var config = $(".js-pool-config");
		
		radioMnry.on("click", function(){
			config.addClass("js-pool-config-hidden");
			
		});
		
		radioOwn.on("click", function(){
			config.removeClass("js-pool-config-hidden");
		})
		
	}
	
    poolConfigSwitch();
    
    function changeMind(){
		var changeButton = $(".js-change");
		var note = $(".js-note");
		var approve = $(".js-approve");
		var improve = $(".js-improve");
		
		changeButton.on("click", function(){
			note.toggleClass("js-note-hidden");
			improve.toggleClass("js-improve-visible");
			
			
			var txt = improve.is(':visible') ? 'Подтвердить отказ' : 'Подтвердить согласие';
    		
    		
			approve.text(txt).toggleClass("button--bg-red");;
		})
	}
	
	changeMind();
	
	/*btc chart*/
	var btcChart = document.getElementById('btc-chart').getContext("2d");
	
	var gradientStroke = btcChart.createLinearGradient(0, 0, 0, btcChart.canvas.height);
	gradientStroke.addColorStop(1, '#f4faff');
	gradientStroke.addColorStop(0, '#e2f2ff');
	
	var startBtcChart = new Chart(btcChart, {
	    type: 'line',
	    data: {
	        labels: ["test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10", "test11", "test12", "test13", "test14", "test15", "test16", "test17", "test18", "test19", "test20"],
	        datasets: [{
	            borderColor: '#2696ff',
	            pointRadius: 0,
	            fill: true,
	            backgroundColor: gradientStroke,
	            borderWidth: 1,
	            data: [100, 80, 150, 70, 75, 170, 130, 110, 120, 135, 170, 150, 170, 160, 100, 100, 125, 160, 100, 140]
	        }]
	    },
	    options: {
	        legend: {
	            display: false
	        },
	        scales: {
	            yAxes: [{
	                display: false
	            }],
	            xAxes: [{
	                display: false
	            }]
	        }
	    }
	});
	
	/*eth chart*/
	var ethChart = document.getElementById('eth-chart').getContext("2d");
	
	var gradientStroke = ethChart.createLinearGradient(0, 0, 0, ethChart.canvas.height);
	gradientStroke.addColorStop(1, '#f4faff');
	gradientStroke.addColorStop(0, '#e2f2ff');
	
	var startEthChart = new Chart(ethChart, {
	    type: 'line',
	    data: {
	        labels: ["test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10", "test11", "test12", "test13", "test14", "test15", "test16", "test17", "test18", "test19", "test20"],
	        datasets: [{
	            borderColor: '#2696ff',
	            pointRadius: 0,
	            fill: true,
	            backgroundColor: gradientStroke,
	            borderWidth: 1,
	            data: [100, 150, 100, 80, 120, 70, 125, 100, 75, 170, 140, 150, 120, 135, 170, 100, 100, 160, 130, 140]
	        }]
	    },
	    options: {
	        legend: {
	            display: false
	        },
	        scales: {
	            yAxes: [{
	                display: false
	            }],
	            xAxes: [{
	                display: false
	            }]
	        }
	    }
	});
	
	/*ltc chart*/
	
	var ltcChart = document.getElementById('ltc-chart').getContext("2d");
	
	var gradientStroke = ltcChart.createLinearGradient(0, 0, 0, ltcChart.canvas.height);
	gradientStroke.addColorStop(1, '#f4faff');
	gradientStroke.addColorStop(0, '#e2f2ff');
	
	var startLtcChart = new Chart(ltcChart, {
	    type: 'line',
	    data: {
	        labels: ["test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10", "test11", "test12", "test13", "test14", "test15", "test16", "test17", "test18", "test19", "test20"],
	        datasets: [{
	            borderColor: '#2696ff',
	            pointRadius: 0,
	            fill: true,
	            backgroundColor: gradientStroke,
	            borderWidth: 1,
	            data: [100, 140, 150, 120, 160, 80, 75, 150, 100, 120, 170, 100, 135, 170, 70, 100, 125, 130, 100, 140]
	        }]
	    },
	    options: {
	        legend: {
	            display: false
	        },
	        scales: {
	            yAxes: [{
	                display: false
	            }],
	            xAxes: [{
	                display: false
	            }]
	        }
	    }
	});
	
	
	
	
})






