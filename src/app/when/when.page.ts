import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-when',
  templateUrl: './when.page.html',
  styleUrls: ['./when.page.scss'],
})
export class WhenPage implements OnInit {
  private when: Array<any>;
  

  constructor(private http: HttpClient, private router: Router) { 
    this.getJSON().subscribe(data => {
      this.when = data['when'];
    });
  }
public getJSON(): Observable<any> {
    return this.http.get("assets/data/data.json")
}
  ngOnInit() {
  }


  addCheckbox(event:any, a : String) { 
    if(event.detail.checked) {  
    DataService.p5.push(a);
    } else{
    var index = DataService.p5.indexOf(a)
    if (index >= 0)
    DataService.p5.splice(index, 1)
    }
  }
  
  getCheckedBoxes() {
     console.log(DataService.p5)
   this.router.navigate(['/body']);
  }
}
