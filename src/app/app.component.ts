import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
 
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router,
   
  ) {
    this.initializeApp();
  }
 
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
 
      this.authenticationService.authenticationState.subscribe(state => {
        if (state) {
         this.router.navigate(['members', 'dashboard']);
        } else {
          this.router.navigate(['login']);
        }
      });
 
    });
  }
  instructions(){
    this.router.navigate(['/dashboard']);
  }
  consciousness(){
    this.router.navigate(['/clickables']);
  }
  darkentity(){
    this.router.navigate(['/darkentity']);
  }
  biblical(){
    this.router.navigate(['/biblicalentity']);
  }
  underlying(){
    this.router.navigate(['/underlyingcauses']);
  }
  when(){
    this.router.navigate(['/when']);
  }
  bodypart(){
    this.router.navigate(['/body']);
  }
  chakras(){
    this.router.navigate(['/chakras']);
  }
  meridians(){
    this.router.navigate(['/meridians']);
  }
  why(){
  this.router.navigate(['/why']);
  }
  reason(){
    this.router.navigate(['/reason']);
  }
  symptoms(){
    this.router.navigate(['/symptoms']);
  }
  failsafes(){
    this.router.navigate(['/failsafes']);
  }
  results(){
    this.router.navigate(['/results']);
  }
}
