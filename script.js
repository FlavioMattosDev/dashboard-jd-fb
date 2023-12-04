function exibirMes() {
	var eixoSelect = document.getElementById('eixoSelect');
	var mesSelect = document.getElementById('mesSelect');

	if (eixoSelect.value !== '' && eixoSelect.value !== 'Selecione o Eixo') {
		mesSelect.style.display = 'block';
		eixo = eixoSelect.value;
	} else {
		mesSelect.style.display = 'none';
	}
	numeros_eixo_mes_ano(eixo, mes, ano);
	console.log(eixo, mes, ano);
}

function exibirAno() {
	var mesSelect = document.getElementById('mesSelect');
	var anoSelect = document.getElementById('anoSelect');

	if (mesSelect.value !== '' && mesSelect.value !== 'Selecione o Tipo') {
		anoSelect.style.display = 'block';
		mes = mesSelect.value;
	} else {
		anoSelect.style.display = 'none';
	}
	numeros_eixo_mes_ano(eixo, mes, ano);
	console.log(eixo, mes, ano);
}

function armazenarEscolhas() {
	var anoSelect = document.getElementById('anoSelect');
	ano = anoSelect.value;
	numeros_eixo_mes_ano(eixo, mes, ano);
	console.log(eixo, mes, ano);
}

//================================================================
document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.getElementById('navbarHamburger');
	const navbarLinks = document.getElementById('navbarLinks');

	hamburger.addEventListener('click', function () {
		navbarLinks.classList.toggle('show');
	});
});

// Gráficos
var options = {
	chart: {
		type: 'bar',
	},
	series: [
		{
			name: 'sales',
			data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
		},
	],
	xaxis: {
		categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
	},
};

var chart = new ApexCharts(document.querySelector('#chart'), options);

chart.render();

var options = {
	chart: {
		type: 'bar',
	},
	series: [
		{
			name: 'sales',
			data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
		},
	],
	xaxis: {
		categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
	},
};

var chart = new ApexCharts(document.querySelector('#chart2'), options);

chart.render();
