import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostosComponent } from './components/costos/costos.component';
import { AutosComponent } from './components/autos/autos.component';
const routes: Routes = [
  {path:'costos',component:CostosComponent,},
    {path:'autos',component:AutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
