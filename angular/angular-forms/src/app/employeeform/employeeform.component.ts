import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrl: './employeeform.component.css'
})
export class EmployeeformComponent {
e1=new Employee("hitesh",110,'IT');
submit= false;
onSubmit(){
  this.submit=true;
}
}
