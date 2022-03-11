import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [`./sign-in.component.scss`]
})
export class SignInComponent implements OnInit {


  public signInForm! : FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router){ }

  ngOnInit(): void {
      this.signInForm = this.formBuilder.group({
        username:['',Validators.required],
        passwd:['', Validators.required]
      })
  }

  signIn(){

    this.http.get<any>("http://localhost:3000/signUpUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.signInForm.value.username && a.passwd === this.signInForm.value.passwd
      });
      if (user) {
        alert('Login successfull!');
        this.signInForm.reset();
        //navigate part will be here
        this.router.navigate(['gamePage'])
      }else{
        alert('User not found!');
      }
    },err=>{
      alert('Something went wrong!');
    })

  }

  myImage:string = '/assets/img/background.png';
}

