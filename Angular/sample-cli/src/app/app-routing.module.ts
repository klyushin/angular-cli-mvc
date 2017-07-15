import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/HomeComponent/home.component'
import { Page1Component } from './Components/Page1/page1.component';
import { UserComponent } from "./Components/UserComponent/user.component";

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'user', component: UserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
