import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  peersUrl =
  environment.apiServer.peersUrl; 
  constructor(private http:HttpClient) { }
  GetPrivacy() {
    return this.http.get(
      this.peersUrl + 'GetPolicy/policy'
    );
  }
  GetTerms() {
    return this.http.get(
      this.peersUrl + 'GetTermsAndConditions'
    );
  }
  GetAboutApp() {
    return this.http.get(
      this.peersUrl + 'GetAboutApp/about'
    );
  }
  GetContactDetails() {
    return this.http.get(
      this.peersUrl + 'GetContactDetails'
    );
  }
}
