import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
private fb = inject(FormBuilder)
constructor(private authService:AuthService){}
loginForm = this.fb.group({
  email:['',[Validators.email , Validators.required]],
  password:['',[Validators.required , Validators.minLength(8)]]

})

signIn(){
this.authService.login(this.loginForm.value).subscribe({
   next: (res: any) => {
    this.authService.saveToken(res.token)

}
})
}
signUp() {

  const data = {
    firstName: "Elevate",
    lastName: "Tech",
    email: "yousef2026test@gmail.com",
    password: "Ahmed@123",
    rePassword: "Ahmed@123",
    phone: "+201010700999",
    gender: "male"
  };

  this.authService.signUp(data).subscribe({

    next: (res: any) => {
      console.log(res);
    },

    error: (err) => {
      console.log(err);
    }

  });

}
logOut(){
  this.authService.logOut();
}

}
