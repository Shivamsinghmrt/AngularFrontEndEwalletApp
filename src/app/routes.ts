import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import {UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

export const appRoutes:Routes=
[
    {path:'register',component:RegisterComponent},
    {path:'welcome',component:WelcomeComponent },
    {path:'userdashboard',component:UserdashboardComponent,canActivate:[AuthGuard]},
    {path:'login',component:LoginComponent},
    {path:'**',redirectTo:'welcome',pathMatch:'full'}
    
    ];