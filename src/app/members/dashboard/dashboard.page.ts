import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core'; 
import { ClickablesPage } from '../../clickables/clickables.page';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 
  constructor(private authService: AuthenticationService, private router: Router) { }
 
  ngOnInit() {
  }
  clickables(){
    this.router.navigate(['/instructions']);
    }
  /*logout() {
    this.authService.logout();
  } */
  
 // clickable(){
   // this.navCtrl.navigateRoot('/clickables');
  //}
}
