import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    TableComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule
  ],
  exports: [
    TableComponent,
    CardComponent
  ]
})

export class GenericComponentsModule { }
