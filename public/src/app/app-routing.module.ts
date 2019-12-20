import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListratingsComponent } from './listratings/listratings.component';
import { NewratingComponent } from './newrating/newrating.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "fishers", component: ListComponent},
  {path: "fishers/new", component: CreateComponent},
  {path: "fishers/edit/:id", component: EditComponent},
  {path: "fishers/reviews/:id", component: ListratingsComponent},
  {path: "fishers/new_rating/:id", component: NewratingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
