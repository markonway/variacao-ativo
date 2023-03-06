import * as Highcharts from 'highcharts';

export const chartOptions: Highcharts.Options = {
  title: {
    text: 'Variação do Ativo'
},

subtitle: {
    text: ''
},

rangeSelector: {
    selected: 1
},

yAxis: {
  title: {
    text: ''
  },
  labels: {
    enabled: false
  },
},

xAxis: {
  labels: {
    enabled: false,
  }
},

series: [{
    name: 'KLBN3',
    data: [],
    type: 'area',
    threshold: null,
    tooltip: {
        valueDecimals: 2
    }
}],
};
