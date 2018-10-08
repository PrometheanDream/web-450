import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { LoginGuard } from './login-guard'
import { AppComponent } from './app.component';
import { UserLogInComponent } from './user-log-in/user-log-in.component'
import { QuizPageComponent } from './quiz-page/quiz-page.component'
import { PresentationPageComponent } from './presentation-page/presentation-page.component'


const appRoutes: Routes = [
  { path: '', component: UserLogInComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: 'quizpage', component: QuizPageComponent },
  { path: 'quizpage/1', component: QuizPageComponent }, //routes to specific urls when /1 is added to the routerLink
  { path: 'quizpage/2', component: QuizPageComponent },
  { path: 'quizpage/3', component: QuizPageComponent },
  { path: 'presentation', component: PresentationPageComponent },
  { path: 'presentation/1', component: PresentationPageComponent },
  { path: 'presentation/2', component: PresentationPageComponent },
  { path: 'presentation/3', component: PresentationPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { useHash: true, enableTracing : true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

