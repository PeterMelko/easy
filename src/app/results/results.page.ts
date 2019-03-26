import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  p1 : String;
  p2 : String;
  p3 : String;
  p4 : String;
  p5 : String;
  p6 : String;
  p7 : String;
  p8 : String;
  p9 : String;
  p10 : String;
  p11 : String;
  p12 : String;

  constructor() { 
    this.p1 = DataService.p1.join();
    this.p2 = DataService.p2.join();
    this.p3 = DataService.p3.join();
    this.p4 = DataService.p4.join();
    this.p5 = DataService.p5.join();
    this.p6 = DataService.p6.join();
    this.p7 = DataService.p7.join();
    this.p8 = DataService.p8.join();
    this.p9 = DataService.p9.join();
    this.p10 = DataService.p10.join();
    this.p11 = DataService.p11.join();
    this.p12 = DataService.p12.join();

  }

  ngOnInit() {
  }

}
