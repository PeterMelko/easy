import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-failsafes',
  templateUrl: './failsafes.page.html',
  styleUrls: ['./failsafes.page.scss'],
})
export class FailsafesPage implements OnInit {
  private failSafes: Array<any>;

  
  constructor(private http: HttpClient, private router: Router) { 
    this.getJSON().subscribe(data => {
      this.failSafes = data['failSafes'];
    });
  }
public getJSON(): Observable<any> {
    return this.http.get("assets/data/data.json")
}
  ngOnInit() {
  }

  addCheckbox(event:any, a : String) { 
    if(event.detail.checked) {  
    DataService.p12.push(a);
} else{
 var index = DataService.p12.indexOf(a)
 if (index >= 0)
 DataService.p12.splice(index, 1)
}
}
  
  getCheckedBoxes() {
     console.log(DataService.p12)
   this.router.navigate(['/results']);
  }

}
