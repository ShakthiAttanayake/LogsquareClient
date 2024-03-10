import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './widgets/bar-chart/bar-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 
 
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule { }