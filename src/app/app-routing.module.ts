import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PlacedetailComponent } from './components/placedetail/placedetail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { PlacesComponent } from './components/places/places.component';
import { MapssComponent } from './components/mapss/mapss.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'mainpage',
    component: MainpageComponent,
    canActivate:[LoginGuard],
  },
  {
    path: 'placedetail',
    component: PlacedetailComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'places',
    component: PlacesComponent,
  },
  {
    path: 'mapss',
    component: MapssComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
