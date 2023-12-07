// Navbar ===========================================================
document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.getElementById('navbarHamburger');
	const navbarLinks = document.getElementById('navbarLinks');

	hamburger.addEventListener('click', function () {
		navbarLinks.classList.toggle('show');
	});
});

// Gráficos =========================================================
// Gráfico 01
var options = {
	series: [16976, 8101, 1356],
	chart: {
		type: 'donut',
		height: '100%',
	},
	labels: ['Ensino Fundamental ', 'Mercado', 'Jogos'],
	title: {
		text: 'Porcentagem Alunos Capacitados por Eixo - Total ',
		align: 'left',
		style: {
			fontSize: '20px',
			color: '#000',
			fontFamily: 'Roboto',
		},
	},
};

var chart = new ApexCharts(document.querySelector('#chart1'), options);
chart.render();

// Gráfico 02
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
		type: 'area',
		height: '100%', // Ajuste conforme necessário
		width: '100%',
	},
	series: [
		{
			name: 'Mercado',
			data: [580, 3402, 4119],
		},
		{
			name: 'Fundamental',
			data: [1999, 7658, 7319],
		},
		{
			name: 'Jogos',
			data: [538, 408, 410],
		},
	],
	tooltip: {
		style: {
			fontSize: '14px',
			fontFamily: 'Roboto',
		},
	},
	dataLabels: {
		enabled: true,
		style: {
			fontSize: '14px',
			fontFamily: 'Roboto',
			fontWeight: 500,
		},
		formatter: function (val, opts) {
			return opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex];
		},
	},
	xaxis: {
		categories: [2021, 2022, 2023],
		labels: {
			style: {
				colors: '#000',
				fontSize: '14px',
				fontFamily: 'Roboto',
				fontWeight: 700,
			},
		},
	},
	title: {
		text: 'Alunos Capacitados por Eixo - Anual',
		align: 'left',
		style: {
			fontSize: '20px',
			color: '#000',
			fontFamily: 'Roboto',
		},
	},

	yaxis: {
		labels: {
			style: {
				colors: '#000',
				fontSize: '14px',
				fontFamily: 'Roboto',
				fontWeight: 700,
			},
		},
	},
};
var chart = new ApexCharts(document.querySelector('#chart2'), options);
chart.render();

// Filtros ===========================================================
// function exibirMes() {
// 	var eixoSelect = document.getElementById('eixoSelect');
// 	var mesSelect = document.getElementById('mesSelect');

// 	if (eixoSelect.value !== '' && eixoSelect.value !== 'Selecione o Eixo') {
// 		mesSelect.style.display = 'block';
// 		eixo = eixoSelect.value;
// 	} else {
// 		mesSelect.style.display = 'none';
// 	}
// 	numeros_eixo_mes_ano(eixo, mes, ano);
// 	console.log(eixo, mes, ano);
// }

// function exibirAno() {
// 	var mesSelect = document.getElementById('mesSelect');
// 	var anoSelect = document.getElementById('anoSelect');

// 	if (mesSelect.value !== '' && mesSelect.value !== 'Selecione o Tipo') {
// 		anoSelect.style.display = 'block';
// 		mes = mesSelect.value;
// 	} else {
// 		anoSelect.style.display = 'none';
// 	}
// 	numeros_eixo_mes_ano(eixo, mes, ano);
// 	console.log(eixo, mes, ano);
// }

// function armazenarEscolhas() {
// 	var anoSelect = document.getElementById('anoSelect');
// 	ano = anoSelect.value;
// 	numeros_eixo_mes_ano(eixo, mes, ano);
// 	console.log(eixo, mes, ano);
// }
