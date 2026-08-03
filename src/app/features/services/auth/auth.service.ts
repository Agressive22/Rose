import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

   private loggedIn = new BehaviorSubject<boolean>(
    !!localStorage.getItem("token")
  );

  isLoggedIn = this.loggedIn.asObservable();

  login(data: any) {
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
    this.loggedIn.next(true);
  }


  logOut(){
    localStorage.removeItem("token");
    this.loggedIn.next(false);
  }


}
