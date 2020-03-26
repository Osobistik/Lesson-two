import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: "", component: ListComponent },
  {path: "view/:id", component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}