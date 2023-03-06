import { FinanceService } from './../../services/finance.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Pipes } from 'app/shared/utils/pipes.pipe';
import { chartOptions } from './chart-config';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  // Table
  columns = ['Dia', 'Data', 'Valor', 'Variação em relação a D-1', 'Variação em relaçào a primeira data']
  dataSource = [];

  // Chart
  chartData = [];
  stock: string = 'KLBN3';

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = chartOptions;

  updateFlag = false;

  pipes = new Pipes();

  constructor(private financeService: FinanceService) { }

  ngOnInit(): void {
    this.listStock();
  }

  handleUpdate() {
    this.chartOptions.series[0] = {
      type: 'line',
      data: this.chartData
    }

    this.updateFlag = true;
  }

  async listStock(): Promise<void> {
    const resp = await this.financeService.findStock(this.stock);

    const prices = resp.chart.result[0].indicators.quote[0].open.slice(-30);
    const timestamps = resp.chart.result[0].timestamp.slice(-30);

    const dataSource = [];
    const chartSeries = [];

    await new Promise((resolve, reject) => {
      for (let i = 0; i < timestamps.length; i++) {
        const date = new Date(timestamps[i] * 1000);

        dataSource.push({
          'Dia': i + 1,
          'Data': `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()}`,
          'Valor': this.pipes.toCurrency(prices[i]),
          'Variação em relação a D-1': isNaN(parseFloat(((prices[i] - prices[i - 1]) / prices[i - 1] * 100).toFixed(2))) ? '-' : parseFloat(((prices[i] - prices[i - 1]) / prices[i - 1] * 100).toFixed(2)) + '%',
          'Variação em relaçào a primeira data': parseFloat(((prices[i] - prices[0]) / prices[0] * 100).toFixed(2)) + '%'
        })

        chartSeries.push([
          `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()}`,
          prices[i],
        ])

        resolve(dataSource);
      }
    })

    this.dataSource = dataSource;
    this.chartData = chartSeries;

    this.handleUpdate();
  }


}
