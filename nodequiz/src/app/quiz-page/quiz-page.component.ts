import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  constructor() {
    this.http.get('/api/quizpage').subscribe(data => { this.rows = data ;});
   }

  ngOnInit() {
  }

}
