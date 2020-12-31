import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostosComponent } from './components/costos/costos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AutosComponent } from './components/autos/autos.component';
import { CostoComponent } from './components/costo/costo.component';
import { FormsModule } from '@angular/forms';
import { IntToTimePipe } from './int-to-time.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CostosComponent,
    NavbarComponent,
    AutosComponent,
    CostoComponent,
    IntToTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
