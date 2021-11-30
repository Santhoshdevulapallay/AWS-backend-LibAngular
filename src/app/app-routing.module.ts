import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 
  {
    path: "",
    loadChildren: () =>
      import("./auth/loginpage/login-routing.module").then(l => l.LoginRouting)
  },
  {
    path: "home",
    loadChildren: () =>
      import("./homepage/homepage-routing.module").then(m => m.HomeRouting)
  },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
