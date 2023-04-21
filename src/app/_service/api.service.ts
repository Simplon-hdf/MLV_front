import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiBaseUrl;
   }
   
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

   createUser(user: any){
    return this.httpClient.post(this.apiUrl + "/auth/signup/jeune",user, this.httpOptions)
   }
}
