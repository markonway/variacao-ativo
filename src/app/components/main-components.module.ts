import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StockComponent } from './stock/stock.component';
import { GenericComponentsModule } from './_generics/generic-components.module';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    StockComponent,
  ],
  exports: [
    StockComponent,
  ],
  imports: [
    HttpClientModule,
    HighchartsChartModule,
    GenericComponentsModule
  ]
})

export class MainComponentsModule { }
