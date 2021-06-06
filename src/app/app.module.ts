import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NaviComponent } from './components/navi/navi.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PlacedetailComponent } from './components/placedetail/placedetail.component';
import { PlacesComponent } from './components/places/places.component';
import { AgmCoreModule } from '@agm/core';
import { MapssComponent } from './components/mapss/mapss.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NaviComponent,
    MainpageComponent,
    ProfileComponent,
    PlacedetailComponent,
    PlacesComponent,
    MapssComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDTCEh0bNedipTgclzfqVBtEBPGquVmAI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
