import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentsModule } from './components/main-components.module';
import { StockPageComponent } from './pages/stock-page/stock-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StockPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
