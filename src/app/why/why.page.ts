import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-why',
  templateUrl: './why.page.html',
  styleUrls: ['./why.page.scss'],
})
export class WhyPage implements OnInit {
  private why: Array<any>;

  
  constructor(private http: HttpClient, private router: Router) { 
    this.getJSON().subscribe(data => {
      this.why = data['why'];
    });
  }
public getJSON(): Observable<any> {
    return this.http.get("assets/data/data.json")
}
  ngOnInit() {
  }

  addCheckbox(event:any, a : String) { 
    if(event.detail.checked) {  
    DataService.p9.push(a);
    } else{
    var index = DataService.p9.indexOf(a)
    if (index >= 0)
    DataService.p9.splice(index, 1)
    }
  }
  
  getCheckedBoxes() {
     console.log(DataService.p9)
   this.router.navigate(['/reason']);
  }

}
