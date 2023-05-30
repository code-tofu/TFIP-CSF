import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit,OnDestroy {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authSvc: AuthService
  ) {}

  loginForm!: FormGroup;
  masteruser: string = 'admin';
  masterpw: string = 'admin';
  authObs!: Observable<HttpResponse<Object>>;
  authSub!: Subscription;

  //authetication status should be on the root component since the child components will all be created and destroyed
  isAuth: boolean = false;

  ngOnInit(): void {
    this.loginForm = this.createLogin();
  }

  createLogin(): FormGroup {
    return this.fb.group({
      username: this.fb.control<string>('', Validators.required),
      password: this.fb.control<string>('', Validators.required),
    });
  }

  authUser() {
    this.authObs = this.authSvc.authUser(this.loginForm.value as Credential);
    this.authSub = this.authObs.subscribe(
        //everything dependend on the observable needs to be executed in the observable callback due to async
        (resp) => {
        console.log("httpStatus:",resp.status);
        if (resp.status === 200) {
          this.isAuth = true;
          console.log('user logged in');
          this.router.navigate(['/main']);
        }},
        //if http throws an error this will be executed instead
        (err) => {
          console.log("httpStatus:",err.status);
          console.log('incorrect username/password');
          this.router.navigate(['/loginerror']);
        },
        ()=> {console.log("auth status:",this.isAuth);}
    );
  }

  ngOnDestroy():void {
    this.authSub.unsubscribe();
    console.info("unsubscribed");
  }
}
