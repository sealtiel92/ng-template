import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { baseUrl } from '../config'
 
@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }
 
    login(username: string, password: string) {
        return this.http.post(baseUrl+'/user/login', 
        JSON.stringify({ 
            email: username, 
            password: password 
        }))
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let user = response.json();
            if (user && user.tokenLogin) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user.tokenLogin));
            }
        });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        return this.http.get(baseUrl+'/user/logout').map((response: Response) => response.json());
    }
}