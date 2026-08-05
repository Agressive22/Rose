import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  showLogIn = signal(false);
  isLogged = signal(false)

  private http = inject(HttpClient);




  login(data: any) {
    this.isLogged.set(true)
    return this.http.post(
      'https://flower.elevateegy.com/api/v1/auth/signin',
      data
    );

  }
  signUp(data:any){
    return this.http.post('https://flower.elevateegy.com/api/v1/auth/signup',data)
  }
    saveToken(token:string){
    localStorage.setItem("token", token);
  }


  logOut(){
    localStorage.removeItem("token");
    this.isLogged.set(false)

  }


}
