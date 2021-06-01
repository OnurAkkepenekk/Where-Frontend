import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/loginModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:LoginModel;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getInfos("");
    //email nasıl alınmalı?
  }
  getInfos(email:string){
    this.userService.getByMail(email);
  }
}
