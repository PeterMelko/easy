import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {DataService} from '../data.service';
@Component({
  selector: 'app-biblicalentity',
  templateUrl: './biblicalentity.page.html',
  styleUrls: ['./biblicalentity.page.scss'],
})
export class BiblicalentityPage implements OnInit {
  private biblicalEntity: Array<any>;
  
  
  
  constructor(private http: HttpClient, private router: Router) {
    
    this.getJSON().subscribe(data => {
      this.biblicalEntity = data['biblicalEntity'];
    });
    
   }
   public getJSON(): Observable<any> {
    return this.http.get("assets/data/data.json")
}



addCheckbox(event:any, a : String) { 
  if(event.detail.checked) {  
  DataService.p2.push(a);
  } else{
  var index = DataService.p2.indexOf(a)
  if (index >= 0)
  DataService.p2.splice(index, 1)
    }
  }

getCheckedBoxes() {
   console.log(DataService.p2)
 this.router.navigate(['/darkentity']);
}


  ngOnInit() {
    
  }
}
