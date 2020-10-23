import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {  ContentComponent} from '../content.component';
import {ListComponent } from '../list/list.component';
import { ItemComponent} from '../item/item.component';

const routes: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'content/list', component: ListComponent },
  { path: 'content/item', component: ItemComponent },
  { path: 'content/$id', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }