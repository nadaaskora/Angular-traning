import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  ContentComponent} from '../content.component';

const routes: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'content/$id', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }