import { Component } from '@angular/core';
import { Tache } from './tache';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
tache=new Tache(); // initialize
listTache:any=[];
addTache()
{
  this.listTache.push(this.tache);
  console.log("ajouté",this.listTache);
  this.tache=new Tache();}

}
