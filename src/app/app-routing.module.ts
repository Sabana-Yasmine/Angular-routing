import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path : '' , component : HomeComponent
  },
  {
    path : 'home', component : HomeComponent
  },
  {
    path : "about" ,component : AboutComponent
  },
  {
    path :"login" , component : LoginComponent
  },
  {
    path : "navbar" , component : NavbarComponent
  },
  {
    path : "logout" , component : LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
