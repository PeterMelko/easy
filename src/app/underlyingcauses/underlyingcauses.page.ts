import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-underlyingcauses',
  templateUrl: './underlyingcauses.page.html',
  styleUrls: ['./underlyingcauses.page.scss'],
})
export class UnderlyingcausesPage implements OnInit {
  private underlyingCauses: Array<any>;
  
  
  constructor(private http: HttpClient, private router: Router) { 
    this.getJSON().subscribe(data => {
      this.underlyingCauses = data['underlyingCauses'];
    });
  }
public getJSON(): Observable<any> {
    return this.http.get("assets/data/data.json")
}
  ngOnInit() {
  }
  addCheckbox(event:any, a : String) { 
    if(event.detail.checked) {  
    DataService.p4.push(a);
    } else{
    var index = DataService.p4.indexOf(a)
    if (index >= 0)
    DataService.p4.splice(index, 1)
}
}
  
  getCheckedBoxes() {
     console.log(DataService.p4)
   this.router.navigate(['/when']);
  }
}
