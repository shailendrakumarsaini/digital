import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxLoadingModule } from 'ngx-loading';
// import { AngularFireModule } from "@angular/fire";
// import { AngularFireStorageModule } from "@angular/fire/storage";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConfigService } from './shared/config.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { ForgotService } from './services/forgot.service';
import { ChangepasswordService } from './services/changepassword.service';
import { AuthGurad } from './shared/routeGuards/auth.guard';
import { LoginGuard } from './shared/routeGuards/login.guard';
import { HttpErrorInterceptor } from './services/httpErrorInterceptor';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


const AppRoutes: Routes = 
  [
    { path : 'login', component : LoginComponent, canActivate :[LoginGuard] },
    { path : 'register', component : RegisterComponent, canActivate :[LoginGuard] },
    { path : 'forgot', component : ForgotpasswordComponent, canActivate :[LoginGuard] },
    { path : 'changepassword/:id', component : ChangepasswordComponent, canActivate :[LoginGuard]  },
    { path : 'dashboard', loadChildren : './dashboard/dashboard.module#DashboardModule', canActivate : [AuthGurad]},
    { path : '**', component : LoginComponent, canActivate :[LoginGuard]}
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChangepasswordComponent,
    ForgotpasswordComponent,
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,HttpClientModule,
    RouterModule.forRoot(AppRoutes,{ preloadingStrategy : PreloadAllModules }),
    // AngularFireModule.initializeApp({ 
    //   apiKey: "AIzaSyD0odymXr_m3OPJNtHYFH2cHeftpmfZu4U",
    //   authDomain: "digitalapp-49c9e.firebaseapp.com",
    //   databaseURL: "https://digitalapp-49c9e.firebaseio.com",
    //   projectId: "digitalapp-49c9e",
    //   storageBucket: "digitalapp-49c9e.appspot.com",
    //   messagingSenderId: "937297135346"
    // }),
    // AngularFireStorageModule,
    BsDatepickerModule.forRoot(),
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    ConfigService,
    LoginService,
    RegisterService,
    ForgotService,
    ChangepasswordService,
    AuthGurad,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
