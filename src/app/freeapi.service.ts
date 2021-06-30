import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {
  url ='https://api.postalpincode.in/pincode/110001';
  pin: number;

  constructor(private httpClient: HttpClient) { }
  getcomments(): Observable<any>{
    return this.httpClient.get(this.url);

  }

}
