import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Crud Users';

  employees = [
    {name: 'Pablo', position: 'Manager', email: "pablo@gmail.com"},
    {name: 'Alan', position: 'Designer', email: "alan@gmail.com"},
    {name: 'Cristian', position: 'Developer', email: "cristian@gmail.com"}
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
