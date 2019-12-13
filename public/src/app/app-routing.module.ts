import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListratingsComponent } from './listratings/listratings.component';
import { NewratingComponent } from './newrating/newrating.component';


const routes: Routes = [
  {path: "products", component: ListComponent},
  {path: "products/new", component: CreateComponent},
  {path: "products/edit/:id", component: EditComponent},
  {path: "products/reviews/:id", component: ListratingsComponent},
  {path: "products/new_rating/:id", component: NewratingComponent},
  {path: "", pathMatch:"full", redirectTo: '/products'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
