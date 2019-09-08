    // Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading'; 

    // Components
import { FooterComponent } from '../shared/footer/footer.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { TopnavbarComponent } from '../shared/topnavbar/topnavbar.component';
import { DashboardComponent } from './dashboard.component';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';
import { Form5Component } from '../form5/form5.component'; 
import { PatienttableComponent } from '../patienttable/patienttable.component';
import { ChiefcomplainComponent } from '../chiefcomplain/chiefcomplain.component';
import { IllnessComponent } from '../illness/illness.component';
import { HistoryComponent } from '../history/history.component';

    // Services
import { HttpErrorInterceptor } from '../services/httpErrorInterceptor';
import { PatientService } from '../services/patient.service';
import { TestComponent } from '../test/test.component';
import { AccordionComponent } from '../accordion/accordion.component';

const AppRoutes: Routes = [
  { path : '', component : DashboardComponent },
  { path : 'first', component : FirstComponent },
  { path : 'second', component : SecondComponent },
  { path : 'form5', component : Form5Component },
  { path : 'patienttable', component : PatienttableComponent },
  { path : 'complain/:id', component : ChiefcomplainComponent },
  { path : 'illness', component : IllnessComponent },
  { path : 'history', component : HistoryComponent },
  { path : 'accordion', component : AccordionComponent },
  { path : 'test', component : TestComponent },
  { path : '**', redirectTo :'', pathMatch : 'full'}
];


@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    TopnavbarComponent,
    DashboardComponent,
    FirstComponent,
    SecondComponent,
    Form5Component,
    PatienttableComponent,
    ChiefcomplainComponent,
    IllnessComponent,
    HistoryComponent,
    TestComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(AppRoutes),
    NgxLoadingModule.forRoot({}),
    BsDatepickerModule.forRoot(),
  ],
  providers :[
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    PatientService
  ]
})
export class DashboardModule { }
