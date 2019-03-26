import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.page.html',
  styleUrls: ['./body.page.scss'],
})
export class BodyPage implements OnInit {
  private body: Array<any>;
 

  
  constructor(private http: HttpClient, private router: Router) { 
    this.getJSON().subscribe(data => {
      this.body = data['body'];
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get("assets/data/data.json")
}
  ngOnInit() {
  }

  addCheckbox(event:any, a : String) { 
    if(event.detail.checked) {  
    DataService.p6.push(a);
    } else{
    var index = DataService.p6.indexOf(a)
    if (index >= 0)
    DataService.p6.splice(index, 1)
    }
  }
  
  getCheckedBoxes() {
     console.log(DataService.p6)
   this.router.navigate(['/chakras']);
  }
}


