import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-darkentity',
  templateUrl: './darkentity.page.html',
  styleUrls: ['./darkentity.page.scss'],
})
export class DarkentityPage implements OnInit {
  private darkEntity: Array<any>;
  

  constructor(private http: HttpClient, private router: Router) { 
    this.getJSON().subscribe(data => {
      this.darkEntity = data['darkEntity'];
    });
  }
public getJSON(): Observable<any> {
    return this.http.get("assets/data/data.json")
}


  ngOnInit() {
  }


  addCheckbox(event:any, a : String) { 
    if(event.detail.checked) {  
    DataService.p3.push(a);
    } else{
    var index = DataService.p3.indexOf(a)
    if (index >= 0)
    DataService.p3.splice(index, 1)
  }
}
  
  
  
  getCheckedBoxes() {
     console.log(DataService.p3)
   this.router.navigate(['/underlyingcauses']);
  }





}
