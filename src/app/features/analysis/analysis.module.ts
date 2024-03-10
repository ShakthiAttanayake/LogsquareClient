import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartComponent } from './widgets/bar-chart/bar-chart.component';
import { RouterModule } from '@angular/router';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { MultipleYaxisChartComponent } from './widgets/multiple-yaxis-chart/multiple-yaxis-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDividerModule} from '@angular/material/divider'
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [
    BarChartComponent,
    MultipleYaxisChartComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgApexchartsModule,
    AnalysisRoutingModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule
  ],
  
})
export class AnalysisModule { }
