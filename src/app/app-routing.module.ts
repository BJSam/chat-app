import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookComponent } from './address-book/address-book.component';
import { MainChatComponent } from './main-chat/main-chat.component';
import { RecentContactsComponent } from './recent-contacts/recent-contacts.component';

const routes: Routes = [
  { path: '', redirectTo: 'r', pathMatch: 'full' },
  {
    path: 'r',
    component: RecentContactsComponent
  },
  {
    path: 'ab',
    component: AddressBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
