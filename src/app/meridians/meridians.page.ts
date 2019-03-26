import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-meridians',
  templateUrl: './meridians.page.html',
  styleUrls: ['./meridians.page.scss'],
})
export class MeridiansPage implements OnInit {
  private meridians: Array<any>;
 
  
  constructor(private http: HttpClient, private router: Router) { 
    this.getJSON().subscribe(data => {
      this.meridians = data['meridians'];
    });
  }
public getJSON(): Observable<any> {
    return this.http.get("assets/data/data.json")
}
  ngOnInit() {
  }

  addCheckbox(event:any, a : String) { 
    if(event.detail.checked) {  
    DataService.p8.push(a);
} else{
 var index = DataService.p8.indexOf(a)
 if (index >= 0)
 DataService.p8.splice(index, 1)
}
}
  
  getCheckedBoxes() {
     console.log(DataService.p8)
   this.router.navigate(['/why']);
  }

}
