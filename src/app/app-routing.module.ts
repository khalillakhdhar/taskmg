import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { EquipeComponent } from './equipe/equipe.component';

const routes: Routes = [
  {path: '', component:TasksComponent},
  {path: 'team',component:EquipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
