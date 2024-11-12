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
      this.peersUrl + 'api/Common/GetPolicy/policy'
    );
  }
  GetTerms() {
    return this.http.get(
      this.peersUrl + 'api/Common/GetTermsAndConditions'
    );
  }
  GetAboutApp() {
    return this.http.get(
      this.peersUrl + 'api/Common/GetAboutApp/about'
    );
  }
  GetContactDetails() {
    return this.http.get(
      this.peersUrl + 'api/Common/GetContactDetails'
    );
  }
}
