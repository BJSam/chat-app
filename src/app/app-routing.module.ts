import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatAreaComponent } from './chat-area/chat-area.component';
import { DefaultScreenComponent } from './default-screen/default-screen.component';

const routes: Routes = [
  { path: '', component: ChatAreaComponent },
  {path:'chat/:id', component:ChatAreaComponent},
  { path: 'chat',   redirectTo: '', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
