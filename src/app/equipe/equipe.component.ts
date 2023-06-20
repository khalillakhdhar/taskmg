import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent {
  user=new User();
  userList:any=[];
  addUsers()
  {
    this.userList.push(this.user);
    this.user=new User();
    console.log("ajouté", this.userList)
  }

}
