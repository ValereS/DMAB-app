import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../../../shared/dto/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private stubUser = './../../../../assets/stub/json/user.json';
  private requestHeaders = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  );

  constructor(
    private http: HttpClient
  ) { }

  getUser(username: string, pwd: string): Observable<User> {
    const body = { 'nickname': username, 'motDePasse': pwd };
    console.log("##login## getting login for :", username);
    return this.http.get<User>(this.stubUser, {headers: this.requestHeaders})
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
