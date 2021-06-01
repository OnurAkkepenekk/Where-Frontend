import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  apiUrl = 'https://localhost:44380/api/auth/';

  constructor(private httpClient: HttpClient) {}

  register(user: RegisterModel) {
    return this.httpClient.post<SingleResponseModel<RegisterModel>>(
      this.apiUrl + 'register',
      user
    );
  }
}
