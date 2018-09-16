import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStauts: boolean

  public getLoggedInStatus() {
    return this.loggedInStauts;
  }

  constructor(private http: HttpClient) {
    this.loggedInStauts=false;
  }

  public authentificateUser(name: string, password: string) {
    this.loggedInStauts = true;
    return true;
  }

  private getUserDetails(name: string, password: string) {
    return this.http.post('', {
        name,
        password
      }
    );
  }
}
