import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { RegisterComponent } from './modules/register/register.component';
import { LoginComponent } from './modules/login/login.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/signup/jeune', component: RegisterComponent },
  { path: 'auth/login', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
