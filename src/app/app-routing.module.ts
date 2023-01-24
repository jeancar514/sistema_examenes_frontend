import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:'full'
  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"login",
    component:FormLoginComponent,
  },
  // {
  //   path:"**",
  //   component:HomeComponent,
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
