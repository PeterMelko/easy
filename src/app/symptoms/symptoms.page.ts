import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.page.html',
  styleUrls: ['./symptoms.page.scss'],
})
export class SymptomsPage implements OnInit {
  private symptoms: Array<any>;
 
  
  constructor(private http: HttpClient, private router: Router) {
    this.getJSON().subscribe(data => {
      this.symptoms = data['symptoms'];
    });
   }
public getJSON(): Observable<any> {
    return this.http.get("assets/data/data.json")
}
  ngOnInit() {
  }

  addCheckbox(event:any, a : String) { 
    if(event.detail.checked) {  
    DataService.p11.push(a);
    } else{
    var index = DataService.p11.indexOf(a)
    if (index >= 0)
    DataService.p11.splice(index, 1)
}
}
  
  getCheckedBoxes() {
     console.log(DataService.p11)
   this.router.navigate(['/failsafes']);
  }

}
