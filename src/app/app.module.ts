import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './pages/homescreen/homescreen.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieApiServiceService } from './service/movie-api-service.service';
import {ReactiveFormsModule} from '@angular/forms';
import { RatingComponent } from './pages/rating/rating.component';
import { MatIconModule } from '@angular/material/icon';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from './service/auth.service.service';
import {AngularFireModule } from '@angular/fire/compat'
import { enviroment } from 'enviroment/enviroment';
import { AuthenticationService } from './authentication/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    SearchComponent,
    MovieDetailsComponent,
    RatingComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    AngularFireModule.initializeApp(enviroment.Firebase)
    
  ],
  providers: [MovieApiServiceService, AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
