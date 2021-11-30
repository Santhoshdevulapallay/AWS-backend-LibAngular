import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookStoreComponent } from '../book-store/book-store.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomepageComponent } from './homepage.component';


const routes: Routes = [
    
    {path:'',component: HomepageComponent,children:[
        {
        path:'bookstore',component:BookStoreComponent
        },
        {
        path:'dashboard',component:DashboardComponent
        }
        ]
    },
]    
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouting {}
