import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FqaService {
  
  peersUrl =
  environment.apiServer.peersUrl; 
  constructor(private http:HttpClient) { }
  GetFQA() {
    return this.http.get(
      this.peersUrl + 'GetFaqs'
    );
  }
}
