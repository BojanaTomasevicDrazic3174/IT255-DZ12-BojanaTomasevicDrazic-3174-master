import { Routes } from '@angular/router';
import HomeComponent from "./home/home.component";
import RegisterComponent from "./register/register.component";
import LoginComponent from "./login/login.component";
import SobeComponent from "./sobe/sobe.component";
import DodajComponent from "./dodaj/dodaj.component";

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sobe', component: SobeComponent },
  { path: 'dodaj', component: DodajComponent },
];
