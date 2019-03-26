import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.page.html',
  styleUrls: ['./reason.page.scss'],
})
export class ReasonPage implements OnInit {
  private reason: Array<any>;
  
  
  constructor(private http: HttpClient, private router: Router) { 
    this.getJSON().subscribe(data => {
      this.reason = data['reason'];
    });
  }
public getJSON(): Observable<any> {
    return this.http.get("assets/data/data.json")
}
  ngOnInit() {
  }
  addCheckbox(event:any, a : String) { 
    if(event.detail.checked) {  
    DataService.p10.push(a);
} else{
 var index = DataService.p10.indexOf(a)
 if (index >= 0)
 DataService.p10.splice(index, 1)
}
}
  
  getCheckedBoxes() {
     console.log(DataService.p10)
   this.router.navigate(['/symptoms']);
  }

}
