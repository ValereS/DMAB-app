import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Adherent, Adherents } from '../../../shared/dto/adherent';

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  private stubUser = './../../../../assets/stub/json/adherent.json';
  private requestHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  constructor(private http: HttpClient) {}

  getAdherents(): Observable<Adherents> {
    console.log('##login## getting adherent for :');
    return this.http
      .get<Adherents>(this.stubUser, { headers: this.requestHeaders })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
