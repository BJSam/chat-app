import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { DefaultScreenComponent } from './default-screen/default-screen.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ChatAreaComponent,
    DefaultScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgScrollbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
