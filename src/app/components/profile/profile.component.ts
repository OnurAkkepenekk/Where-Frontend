import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:UserModel;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getInfos("");
    //email nasıl alınmalı?
  }
  getInfos(email:string){
    this.userService.getByMail(email).subscribe(response=>{
      this.user=response.data;
    })
  }
}
