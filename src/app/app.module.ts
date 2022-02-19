import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './headerCompment/header/header.component';
import { HomeComponent } from './headerCompment/home/home.component';
import { CardetailComponent } from './cardetail/cardetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { InventoryListComponent } from './invertryCompoment/inventory-list/inventory-list.component';
import { InventoryGridComponent } from './invertryCompoment/inventory-grid/inventory-grid.component';
import { DealerListComponent } from './invertryCompoment/dealer-list/dealer-list.component';
import { DealerInfoComponent } from './invertryCompoment/dealer-info/dealer-info.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    HomeComponent,
    CardetailComponent,
    FooterComponent,
    InventoryListComponent,
    InventoryGridComponent,
    DealerListComponent,
    DealerInfoComponent,
    BlogPostComponent,
    AboutComponent,
    ContentComponent,
    LoginComponent,
    AdminDashboardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule


  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
