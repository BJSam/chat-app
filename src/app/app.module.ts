import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import {  MainChatComponent } from './main-chat/main-chat.component';
import { RecentContactsComponent } from './recent-contacts/recent-contacts.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    MainChatComponent,
    RecentContactsComponent,
    AddressBookComponent,
    ProfileInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
