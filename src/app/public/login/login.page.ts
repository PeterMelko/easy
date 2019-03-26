import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DashboardPage } from 'src/app/members/dashboard/dashboard.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private authService: AuthenticationService,
     public formBuilder: FormBuilder,
     public ReactiveFormsModule: ReactiveFormsModule,
      private router: Router,
      public navCtrl: NavController )
     {this.loginForm = this.formBuilder.group({
      email: new FormControl(),
      password: new FormControl(),
    }); }
 
  ngOnInit() {
    
  } 
  
 
  login(value){
    this.authService.login(value)
    .then(res => {
      console.log(res);
      this.router.navigate(['/dashboard']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }
 
}