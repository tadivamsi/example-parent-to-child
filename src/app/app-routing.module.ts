import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [{path:'',component:LoginComponent},
  {path:'Admin',component:AdminComponent},
  {path:'promise', component:PromiseComponent},
  {path:"Logout",component:LoginComponent},
   {path:"home", component:HomeComponent},
   {path:"child",component:ChildComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
