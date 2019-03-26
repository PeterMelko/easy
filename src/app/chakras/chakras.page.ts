import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-chakras',
  templateUrl: './chakras.page.html',
  styleUrls: ['./chakras.page.scss'],
})
export class ChakrasPage implements OnInit {
  private chakras: Array<any>;
  
  
  constructor(private http: HttpClient, private router: Router) { 
    this.getJSON().subscribe(data => {
      this.chakras = data['chakras'];
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get("assets/data/data.json")
}
  ngOnInit() {
  }
  addCheckbox(event:any, a : String) { 
    if(event.detail.checked) {  
    DataService.p7.push(a);
    } else{
    var index = DataService.p7.indexOf(a)
    if (index >= 0)
    DataService.p7.splice(index, 1)
    }
  }
  
  getCheckedBoxes() {
     console.log(DataService.p7)
   this.router.navigate(['/meridians']);
  }
}

