import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/register/register.component';
import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Home',
        component : HomeComponent
    },
    {
        path : '',
        redirectTo : '/home',
        pathMatch : 'full'
    },
    {
        path : 'register',
        title: 'Register',
        component : RegisterComponent
    }
    ,
    {
        path : 'login',
        title: 'Login',
        component : LoginComponent
    },
    {
        path : 'auth',
        redirectTo : '/home',
        pathMatch : 'full'
    },
];
