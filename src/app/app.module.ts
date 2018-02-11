import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { DashboardFriendsComponent } from './dashboard-friends/dashboard-friends.component';
import { NewFriendComponent } from './new-friend/new-friend.component';
import { FeaturesMenuComponent } from './features-menu/features-menu.component';
import { DescriptionJdrComponent } from './description-jdr/description-jdr.component';
import { DashboardUserInfosComponent } from './dashboard-user-infos/dashboard-user-infos.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    LoginComponent,
    DashboardFriendsComponent,
    NewFriendComponent,
    FeaturesMenuComponent,
    DescriptionJdrComponent,
    DashboardUserInfosComponent,
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, routes, HttpModule, MatSnackBarModule,BrowserAnimationsModule
  ],
  providers: [ WebService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
