import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hot-cold-demo';
  
  coldObservable : Observable<number>;
  hotObservable : Observable<any>;

  ngOnInit(){
    this.coldObservable = new Observable( observer =>{
      let count : number = 0;
      setInterval(() => {
        
        if(count > 7 ){
          observer.error("Error:: cannot process 7");
        }
        observer.next(count);
        count++;
      }, 1000);
      
      setTimeout(() => {
        observer.complete();
      }, 10000);
    });

    this.hotObservable = new Observable( observer =>{
      let count : number = 0;
      setInterval(() => {
        
        if(count > 7 ){
          observer.error("Error:: cannot process 7");
        }
        observer.next(count);
        count++;
      }, 1000);
      
      setTimeout(() => {
        observer.complete();
      }, 10000);
    }).pipe(share());
  }

}
