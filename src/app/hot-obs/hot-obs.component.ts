import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-hot-obs',
  templateUrl: './hot-obs.component.html',
  styleUrls: ['./hot-obs.component.css']
})
export class HotObsComponent implements OnInit {

  @Input() observable : Observable<any>;

  subscription1 : Subscription;
  subscription2 : Subscription;

  connection1 : number;
  connection2 : number;

  values1 : number [] = [];
  values2 : number [] = [];

  isError1 : boolean = false;
  isError2 : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  subscribeHotBtn1(){
    this.connection1 = Date.now();
    this.subscription1 = this.observable.subscribe((val) => {
      console.log("Inside Data Subscription1 - "+ val);
      this.values1.push(val);
    }, (error :{message: string}) =>{
      console.log('Error occcured - ' + error.message);
      this.isError1 = true;
    },
    () => {
      console.log('Subscription Completed ');
    });
  }

  subscribeHotBtn2(){
    this.connection2 = Date.now();
    this.subscription2 = this.observable.subscribe((val) => {
      console.log("Inside Data Subscription2 - "+ val);
      this.values2.push(val);
    }, (error :{message: string}) =>{
      console.log('Error occcured - ' + error.message);
      this.isError2 = true;
    },
    () => {
      console.log('Subscription Completed ');
    });
  }

}
