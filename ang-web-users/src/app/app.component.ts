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

  model:any = {};
  model2:any = {}


  addEmployee():void{
    this.employees.push(this.model);

  }

  deleteEmployee():void{

  }

  myValue;
  editEmployee(i):void{
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee():void{
    let i = this.myValue;
    for(let j = 0 ; j< this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
    console.log(this.model2);
  }
}
