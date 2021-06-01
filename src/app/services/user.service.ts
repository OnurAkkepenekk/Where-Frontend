import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://localhost:44380/api/user/';

  constructor(private httpClient: HttpClient) {}

  getByMail(email:string){
    return this.httpClient.get<SingleResponseModel<UserModel>>(
      this.apiUrl + 'getbyuserinfosbymail?email='+email
    );
  }
}
