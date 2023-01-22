import { Injectable } from '@angular/core';
import { SignInData } from './model/signinData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser =new SignInData('voss-solutions@mail.com', 'supersecretpassword');
  isAuthenticated = false;

  constructor() { }

  authenticate(signInData: SignInData): boolean {
  if(this.checkCredentials(signInData)){
    this.isAuthenticated =true;
    return true;
  }
  this.isAuthenticated = false;
  return false;
  }

  private checkCredentials(signInData: SignInData): boolean{
    return this.checkUsername(signInData.getUsername()) && this.checkPassword(signInData.getPassword());
     
  }
    private checkUsername(username: string) : boolean {
      return username === this.mockedUser.getUsername();
    }

    private checkPassword(password: string) : boolean {
      return password === this.mockedUser.getPassword();
    }
 
}
