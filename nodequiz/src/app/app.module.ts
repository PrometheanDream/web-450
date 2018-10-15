import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { UserLogInComponent } from './user-log-in/user-log-in.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { HttpClientModule }    from '@angular/common/http';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { MatRadioModule } from '@angular/material/radio';
import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SingleResultPageComponent } from './single-result-page/single-result-page.component'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CumulativeResultsPageComponent } from './cumulative-results-page/cumulative-results-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLogInComponent,
    BaseLayoutComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    PageNotFoundComponent,
    QuizPageComponent,
    PresentationPageComponent,
    SingleResultPageComponent,
    CumulativeResultsPageComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    MatRadioModule,
    CarouselModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
