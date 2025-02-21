import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LicenseService {
  errorMessage: string;

  constructor(private http: HttpClient) {}

  // If API returns something malicious, how do I sanitize for that?
  getLicenseById(id: number): Observable<any> {
    return this.http.get(`${environment.apiURL}/${id}`).pipe(
      catchError((error: any): Observable<any> => {
        this.errorMessage = error.message;
        console.error(`There was an error! ${this.errorMessage}`); // Probably don't want to display this in the console with the full request URL. Also the XHR error is fully displayed in the console.

        // after handling error, return a new observable
        // that doesn't emit any values and completes
        return of();
      })
    );
  }

  // Same issues as above
  // How to protect against malicious injections?
  updateLicense(
    id: number,
    customerName: string,
    customerMailAddress: string,
    licenseType: string,
    validUntil: string
  ): Observable<any> {
    return this.http
      .put(
        `${environment.apiURL}/${id}`,
        {
          customerName: customerName,
          customerMailAddress: customerMailAddress,
          licenseType: licenseType,
          validUntil: validUntil,
        },
        { observe: 'response' }
      )
      .pipe(
        catchError((error: any): Observable<any> => {
          this.errorMessage = error.message;
          console.error(`There was an error! ${this.errorMessage}`);
          return of();
        })
      );
  }

  // Same issues as above
  // Also I should cache this data and from tableComponent ask for the cached data first instead of repeating the call every time I go back to a page. Need to keep in mind possible updates then as well though.
  searchLicenceForAll(pageNumber: number): Observable<any> {
    return this.http
      .post(`${environment.apiURL}/search`, {
        search: [
          {
            field: '',
            operator: '',
            value: '',
          },
        ],
        pageNumber: pageNumber,
        pageSize: 10,
      })
      .pipe(
        catchError((error: any): Observable<any> => {
          this.errorMessage = error.message;
          console.error(`There was an error! ${this.errorMessage}`);
          return of();
        })
      );
  }
}
