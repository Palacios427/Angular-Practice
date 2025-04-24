import { Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"", component:LoginComponent},
    {path:'**', component:NotFoundComponentComponent}, 
];
