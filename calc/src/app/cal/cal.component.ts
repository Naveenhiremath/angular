import { Component } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent {
public num1:number;
public num2:number;
public result:number;

add(){
  this.result=this.num1 + this.num2;
  return this.result;
}
sub(){
  this.result=this.num1 - this.num2;
}

mul(){
  this.result=this.num1 * this.num2;
}

div(){
  this.result=(this.num1)/(this.num2);
}

}
