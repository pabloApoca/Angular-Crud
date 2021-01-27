import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Crud Users';
  msg:string = '';

  employees = [
    {name: 'Pablo', position: 'Manager', email: "pablo@gmail.com"},
    {name: 'Alan', position: 'Designer', email: "alan@gmail.com"},
    {name: 'Cristian', position: 'Developer', email: "cristian@gmail.com"}
  ];

  model:any = {};
  model2:any = {}
  hideUpdate: boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg = "Empleado Agregado."
  }

  deleteEmployee(i):void{
    var answer = confirm('¿Estas serguro de querer eliminarlo?');
    if(answer){
      this.employees.splice(i, 1);
      this.msg = "Empleado Eliminado."
    }
  }

  myValue;
  editEmployee(i):void{
    this.hideUpdate = false;
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
        this.msg = "Empleado Actualizado."
        this.model2 = {};
        this.hideUpdate = true;

      }
    }
    console.log(this.model2);
  }

  closeAlert(){
    this.msg = '';
  }
}
