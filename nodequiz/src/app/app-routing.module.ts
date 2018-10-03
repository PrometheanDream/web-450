import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { LoginGuard } from './login-guard'
import { AppComponent } from './app.component';
import { UserLogInComponent } from './user-log-in/user-log-in.component'
import { QuizPageComponent } from './quiz-page/quiz-page.component'


const appRoutes: Routes = [
  { path: '', component: UserLogInComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'quizpage', component: QuizPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { useHash: true, enableTracing : true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

