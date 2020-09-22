import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaComponent } from './resta/resta.component';
import { SumaComponent } from './suma/suma.component';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { DivisionComponent } from './division/division.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Suma', component: SumaComponent },
  { path: 'Resta', component: RestaComponent },
  { path: 'Multiplicacion', component: MultiplicacionComponent },
  { path: 'Division', component: DivisionComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot([{ path: '', component: HomeComponent }])],
  exports: [RouterModule],
  

})
export class AppRoutingModule { }
