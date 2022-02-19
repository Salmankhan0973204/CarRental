import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CardetailComponent } from './cardetail/cardetail.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './headerCompment/home/home.component';
import { DealerInfoComponent } from './invertryCompoment/dealer-info/dealer-info.component';
import { InventoryGridComponent } from './invertryCompoment/inventory-grid/inventory-grid.component';
import { InventoryListComponent } from './invertryCompoment/inventory-list/inventory-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [


  {
    path:'CarDetail',component:CardetailComponent},
    {
    path:'', component:HomeComponent
  },
  {path:'DealerInfo',component:DealerInfoComponent},
  {path:'Grid',component:InventoryGridComponent},
  {path:'InventoryList',component:InventoryListComponent},
  {path:'about',component:AboutComponent , pathMatch: 'full'},
  {path:'content',component:ContentComponent},
  {path:'blogPost', component:BlogPostComponent},
  {path:'login' , component:LoginComponent},
  {path:'admin-dashboard' , component:AdminDashboardComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
