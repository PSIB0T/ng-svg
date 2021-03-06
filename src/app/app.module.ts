import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ControlsComponent } from './controls/controls.component';
import { GraphComponent } from './graph/graph.component';
import { DataviewComponent } from './dataview/dataview.component';
import { StatService } from 'app/stat.service';
import { StatsComponent } from "app/stats/stats.component";
import { BeamComponent } from "app/beam/beam.component";
import { SectionComponent } from "app/section/section.component";
import { HomeComponent } from "app/home/home.component";
import { DimensionComponent } from './dimension/dimension.component';

const appRoutes: Routes = [
  {path: 'stats', component: StatsComponent},
  {path: 'beam', component: BeamComponent},
  {path: 'section', component: SectionComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '/'}
]

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    BeamComponent,
    SectionComponent,
    HomeComponent,
    ControlsComponent,
    GraphComponent,
    DataviewComponent,
    DimensionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true} //for debugging only
    )
  ],
  providers: [StatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
