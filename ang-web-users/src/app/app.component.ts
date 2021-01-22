import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Crud Users';

  employees = [
    {name: 'Pablo', position: 'Mnager'},
    {name: 'Alan', position: 'Designer'},
    {name: 'Cristian', position: 'Developer'}
  ];

  model:any = {

  }

  addEmployee():void{

  }

  deleteEmployee():void{

  }

  editEmployee():void{

  }

  updateEmployee():void{

  }
}
