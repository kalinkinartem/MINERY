$(document).ready(function() {
	$('.close-modal').click(function(){
		$('.modal-outer').toggleClass('hidden');
	});
	$('.show-modal').click(function(){
		$('.modal-outer').toggleClass('hidden');
	});
	
	/*модальные в bills*/
	$('.js-close-modal').click(function(){
		$('.js-modal').toggleClass('hidden');
	});
	$('.js-show-modal').click(function(){
		$('.js-modal').toggleClass('hidden');
	});
	
	$('.js-close-modal-second').click(function(){
		$('.js-modal-second').toggleClass('hidden');
	});
	$('.js-show-modal-second').click(function(){
		$('.js-modal-second').toggleClass('hidden');
	});
	
	$('.js-close-modal-third').click(function(){
		$('.js-modal-third').toggleClass('hidden');
	});
	$('.js-show-modal-third').click(function(){
		$('.js-modal-third').toggleClass('hidden');
	});
	
	$('.js-close-modal-fourth').click(function(){
		$('.js-modal-fourth').toggleClass('hidden');
	});
	$('.js-show-modal-fourth').click(function(){
		$('.js-modal-fourth').toggleClass('hidden');
	});
	
	$('.js-close-modal-fifth').click(function(){
		$('.js-modal-fifth').toggleClass('hidden');
	});
	$('.js-show-modal-fifth').click(function(){
		$('.js-modal-fifth').toggleClass('hidden');
	});
	
	
	
	
	
	
	
	
	
	
	
	
	$("#prettyinput input").on('click', function() {
		$('.dropdown').toggleClass('hidden');
	});
	$("#prettyinput input").keyup(function(e){
		$('.dropdown').removeClass('hidden');
        var valueofinput= $(this).val();
        if(e.which==13)
        {
            $('#prettyinput input').before('<span class="asic">' + valueofinput + '</span>');
            $('#prettyinput input').val('');
            $('.dropdown tr').removeClass('hidden');
        } else {
        	if (valueofinput == '') {
        		$('.dropdown tr').removeClass('hidden');	
        	} else {
        		$('.dropdown tr:not([data-id*="'+valueofinput.toLowerCase()+'"])').addClass('hidden');
        		$('.dropdown tr[data-id*="'+valueofinput.toLowerCase()+'"]').removeClass('hidden');
        	}
        }
    });
    
  //  if (miners !== undefined) {
  //  	var q = 0;
  //  	$.each( miners, function( key, value ) {
		// 	if (key == 'obsl') {
		// 		$('.dropdown').append('<div class="list obsl"><div class="title">На обслуживании</div><table class="table"></table></div>');
		// 	}
		// 	if (key == 'other') {
		// 		$('.dropdown').append('<div class="list other"><div class="title">Другие</div><table class="table"></table></div>');		  	
		// 	}
		// 	// array in value
		// 	$.each( value, function( key2, value2 ) {
		// 		// obj in value2
		// 		var checked = '';
		// 		if (value2.selected) {
		// 			checked = 'checked';
		// 			$('#prettyinput input').before('<span class="asic" data-id="'+value2.id+'">' + value2.id + '</span>');
		// 		}
		// 		$('.'+key+' table').append('<tr data-id="'+value2.id.toLowerCase()+'"><td><div class="checkbox"><input data-id="'+value2.id+'" class="checkbox__input" name="m'+q+'" id="m'+q+'" type="checkbox" '+checked+'><label for="m'+q+'"></label></div>'+value2.id+'</td><td>'+value2.type+'</td><td>'+value2.currency+'</td><td>'+value2.performance+'</td><td>'+value2.temperature+'</td><td><div class="temperature"><span class="text">'+value2.fan+'</span><span class="fan-icon"></span></div></td></tr>');
		// 		q = q+1;
		// 	});
			
		// });
  //  }
    
    $(".dropdown .checkbox__input").change(function() {
    	$('#prettyinput input').val('');
    	$('.dropdown tr').removeClass('hidden');
	    if(this.checked) {
	        $('#prettyinput input').before('<span class="asic" data-id="'+$(this).attr('data-id')+'">' + $(this).attr('data-id') + '</span>');
	    } else {
	    	$('.asic[data-id="'+ $(this).attr('data-id')+'"]').remove();
	    }
	});
    $(document).on('click', '.asic', function(){
    	$('.dropdown .checkbox__input[data-id="'+ $(this).attr('data-id')+'"]').prop('checked', false);
        $(this).remove();
        return false;
    });
    
    $('#prettyinput').click(function() { $('#prettyinput input').focus(); });
    
	
	
	
	
	
	
	
	$('input, textarea').on('keyup', function() {
		$(this).parent().find('.count').text($(this).val().length);
	});
		/*Dashboard графики*/
	/*BTC график*/
	if ($('#btc-chart').length) {
		var btcChart = document.getElementById('btc-chart').getContext("2d");
		
		var gradientStroke = btcChart.createLinearGradient(0, 0, 0, btcChart.canvas.height);
		gradientStroke.addColorStop(0, 'rgba(41, 151, 255, 0.1)');
		gradientStroke.addColorStop(1, 'rgba(42, 174, 255, 0)');
		
		var startbtcChart = new Chart(btcChart, {
		    type: 'line',
		    data: {
		        labels: ["test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10"],
		        datasets: [{
		            borderColor: '#2696ff',
		            pointRadius: 0,
		            fill: true,
		            backgroundColor: gradientStroke,
		            borderWidth: 1,	            
		            data: [100, 130, 108, 93, 110, 89, 125, 100, 95, 180]
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
	
		/*ETH график*/
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
	
		/*LTC график*/
		var ltcChart = document.getElementById('ltc-chart').getContext("2d");
		
		var gradientStroke = ltcChart.createLinearGradient(0, 0, 0, ltcChart.canvas.height);
		gradientStroke.addColorStop(0, 'rgba(41, 151, 255, 0.1)');
		gradientStroke.addColorStop(1, 'rgba(42, 174, 255, 0)');
		
		var startltcChart = new Chart(ltcChart, {
		    type: 'line',
		    data: {
		        labels: ["test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10"],
		        datasets: [{
		            borderColor: '#2696ff',
		            pointRadius: 0,
		            fill: true,
		            backgroundColor: gradientStroke,
		            borderWidth: 1,	            
		            data: [100, 130, 108, 93, 110, 89, 125, 100, 30, 180]
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
	
	
		/*Miners графики*/
		/*var myPieChart = document.getElementById('myPieChart').getContext("2d");
		var myDoughnutChart = document.getElementById('myDoughnutChart').getContext("2d");
		var myPieChart = new Chart(ctx,{
		    type: 'pie',
		    data: data,
		    options: options
			});
		
			var myDoughnutChart = new Chart(ctx, {
		    type: 'doughnut',
		    data: data,
		    options: options
			});
			data = {
		    datasets: [{
		        data: [10, 20, 30]
		    }],
		
		    // These labels appear in the legend and in the tooltips when hovering different arcs
		    labels: [
		        'Red',
		        'Yellow',
		        'Blue'
		    ]
		};*/
	}
})


var myDoughnutChart1 = document.getElementById('myDoughnutChart1').getContext("2d");

var startMyDoughnutChart1 = new Chart(myDoughnutChart1, {
    type: 'doughnut',
    data: {
      labels: ["3000 Working", "2500 Ready for sale", "400 Under maintenance", "250 Require configuration", "180 Disabled"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3bce90", "#2696ff","#f87493","#5ae8e2","#f9ef73"],
          data: [3000,2500,400,250,180]
        }
      ]
    },
    options: {
        legend: {
            display: true,
            position: 'left',
            labels: {
	        	boxWidth: 13,
	        }
        },
        
	}
});



var myDoughnutChart2 = document.getElementById('myDoughnutChart2').getContext("2d");

var startMyDoughnutChart2 = new Chart(myDoughnutChart2, {
    type: 'doughnut',
    data: {
      labels: ["12 Overheat", "12 Lowhashrate", "5 Other errors"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3bce90", "#2696ff","#f87493"],
          data: [12,12,5]
        }
      ]
    },
    options: {
        legend: {
            display: true,
            position: 'left',
            labels: {
	        	boxWidth: 13,
	        }
        },
        
	}
});

// сортировка по Модель
$('#model-stateInput').change(function(e) {
	$(this).prop('checked');
	
	const main = document.querySelector('.dev-miners-content');
	const modals = main.querySelectorAll('.modal-info');
	const header = main.querySelector('.row-title');
	
	const row = main.querySelectorAll('.row-miners_item');
	let rowArray = [];
	for (let i = 0 ; i < row.length ; i += 2){
	  rowArray.push(row[i])
	}
	
	let status = $(this).prop('checked');
	if (status){
		rowArray.sort(function(a, b) {
		  return a.querySelector('.model_item').innerText == b.querySelector('.model_item').innerText
		          ? 0
		          : (a.innerHTML > b.innerHTML ? 1 : -1);
		});
	} else {
		rowArray.sort(function(a, b) {
		  return a.querySelector('.model_item').innerText == b.querySelector('.model_item').innerText
		          ? 0
		          : (a.innerHTML < b.innerHTML ? 1 : -1);
		});
	}
	
	
	main.innerHTML = '';
	main.appendChild(header);
	
	for (let i = 0 ; i < rowArray.length ; i++){
		let id = rowArray[i].attributes['data-id'].nodeValue;
		let modal = undefined;
		
		for (let j = 0 ; j < rowArray.length ; j++){
			let modal_id = modals[j].attributes['data-id'].nodeValue;
			if (id === modal_id){
				modal = j
			}
		}
		
		main.appendChild(rowArray[i]);
		main.appendChild(modals[modal]);
	}
})

// сортировка по Пул:Воркер
$('#pool-stateInput').change(function(e) {
	$(this).prop('checked');
	
	const main = document.querySelector('.dev-miners-content');
	const modals = main.querySelectorAll('.modal-info');
	const header = main.querySelector('.row-title');
	
	const row = main.querySelectorAll('.row-miners_item');
	let rowArray = [];
	for (let i = 0 ; i < row.length ; i += 2){
	  rowArray.push(row[i])
	}
	
	let status = $(this).prop('checked');
	if (status){
		rowArray.sort(function(a, b) {
		  return a.querySelector('.pool_item').innerText == b.querySelector('.pool_item').innerText
		          ? 0
		          : (a.innerHTML > b.innerHTML ? 1 : -1);
		});
	} else {
		rowArray.sort(function(a, b) {
		  return a.querySelector('.pool_item').innerText == b.querySelector('.pool_item').innerText
		          ? 0
		          : (a.innerHTML < b.innerHTML ? 1 : -1);
		});
	}
	
	
	main.innerHTML = '';
	main.appendChild(header);
	
	for (let i = 0 ; i < rowArray.length ; i++){
		let id = rowArray[i].attributes['data-id'].nodeValue;
		let modal = undefined;
		
		for (let j = 0 ; j < rowArray.length ; j++){
			let modal_id = modals[j].attributes['data-id'].nodeValue;
			if (id === modal_id){
				modal = j
			}
		}
		
		main.appendChild(rowArray[i]);
		main.appendChild(modals[modal]);
	}
})

// сортировка по Ошибок сегодня
$('#error-stateInput').change(function(e) {
	$(this).prop('checked');
	
	const main = document.querySelector('.dev-miners-content');
	const modals = main.querySelectorAll('.modal-info');
	const header = main.querySelector('.row-title');
	
	const row = main.querySelectorAll('.row-miners_item');
	let rowArray = [];
	for (let i = 0 ; i < row.length ; i += 2){
	  rowArray.push(row[i])
	}
	
	let status = $(this).prop('checked');
	if (status){
		rowArray.sort(function(a, b) {
		  return a.querySelector('.error_item').innerText == b.querySelector('.error_item').innerText
		          ? 0
		          : (a.innerHTML > b.innerHTML ? 1 : -1);
		});
	} else {
		rowArray.sort(function(a, b) {
		  return a.querySelector('.error_item').innerText == b.querySelector('.error_item').innerText
		          ? 0
		          : (a.innerHTML < b.innerHTML ? 1 : -1);
		});
	}
	
	
	main.innerHTML = '';
	main.appendChild(header);
	
	for (let i = 0 ; i < rowArray.length ; i++){
		let id = rowArray[i].attributes['data-id'].nodeValue;
		let modal = undefined;
		
		for (let j = 0 ; j < rowArray.length ; j++){
			let modal_id = modals[j].attributes['data-id'].nodeValue;
			if (id === modal_id){
				modal = j
			}
		}
		
		main.appendChild(rowArray[i]);
		main.appendChild(modals[modal]);
	}
})

// сортировка по Статус и его длительность
$('#status-long-stateInput').change(function(e) {
	$(this).prop('checked');
	
	const main = document.querySelector('.dev-miners-content');
	const modals = main.querySelectorAll('.modal-info');
	const header = main.querySelector('.row-title');
	
	const row = main.querySelectorAll('.row-miners_item');
	let rowArray = [];
	for (let i = 0 ; i < row.length ; i += 2){
	  rowArray.push(row[i])
	}
	
	let status = $(this).prop('checked');
	if (status){
		rowArray.sort(function(a, b) {
		  return a.querySelector('.status').innerText == b.querySelector('.status').innerText
		          ? 0
		          : (a.innerHTML > b.innerHTML ? 1 : -1);
		});
	} else {
		rowArray.sort(function(a, b) {
		  return a.querySelector('.status').innerText == b.querySelector('.status').innerText
		          ? 0
		          : (a.innerHTML < b.innerHTML ? 1 : -1);
		});
	}
	
	
	main.innerHTML = '';
	main.appendChild(header);
	
	for (let i = 0 ; i < rowArray.length ; i++){
		let id = rowArray[i].attributes['data-id'].nodeValue;
		let modal = undefined;
		
		for (let j = 0 ; j < rowArray.length ; j++){
			let modal_id = modals[j].attributes['data-id'].nodeValue;
			if (id === modal_id){
				modal = j
			}
		}
		
		main.appendChild(rowArray[i]);
		main.appendChild(modals[modal]);
	}
})


// if (modal_info.className === 'modal-info hidden'){
// 	e.target.parentElement.style.display = 'none';
// 	modal_info.className = 'modal-info';
// } else {
// 	e.target.parentElement.style.display = 'flex';
// 	modal_info.className = 'modal-info hidden';
// }

/* Всплывашка Mayнеры*/
$(document).ready(function() {
	$('.togl-info').on('click', function(e){
		console.log('click');
		const id = e.target.parentElement.dataset.id;
		const modals = document.querySelectorAll('.modal-info');
		for(let i = 0 ; i < modals.length; i++){
			modals[i].className = `modal-info modal-info_id_${i+1} hidden`;
			document.querySelector(`.row_id_${i+1}`).style.display = 'flex';
		}
		try{
			document.querySelector(`.modal-info_id_${id}`).className = `modal-info modal-info_id_${id}`;
			document.querySelector(`.row_id_${id}`).style.display = 'none';
		
		} catch(err){}
	});	
	
	
	
	
	
	
});

