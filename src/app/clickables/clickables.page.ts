import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as data from '../../assets/data/data.json';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
//import { CheckboxChangeEventDetail } from '@ionic/core';



@Component({
  selector: 'app-clickables',
  templateUrl: './clickables.page.html',
  styleUrls: ['./clickables.page.scss'],
})


export class ClickablesPage implements OnInit {
  private consciousness: Array<any>;
  //checked = [];

  constructor(private http: HttpClient, private router: Router) { 
  this.getJSON().subscribe(data => {
    this.consciousness = data['consciousness'];
    console.log(data);
  });
   
  }

public getJSON(): Observable<any> {
    return this.http.get("assets/data/data.json")
}

addCheckbox(event:any, a : String) { 
       if(event.detail.checked) {  
       DataService.p1.push(a);
  } else{
    var index = DataService.p1.indexOf(a)
    if (index >= 0)
    DataService.p1.splice(index, 1)
  }
}
getCheckedBoxes() {
    console.log(DataService.p1)
  this.router.navigate(['/biblicalentity']);
}
 
//Removes checkbox from array when you uncheck it ........DOESNT WORK

ngOnInit() {
}
}

/*/
doAlert(event:any,a:string) {
  if (event.checked){
    DataService.p1.push(a)
  }
  else{
   var i = DataService.p1.indexOf(a)
   if (i)
    DataService.p1.slice(i,1)
  }
  
}
/*/