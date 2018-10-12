import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})



export class QuizPageComponent implements OnInit {
  onSubmit(formData) {

    var quiz1Value = formData.checkGroup.quiz1Form.value;

    if (formData.checkGroup.quiz1Form.value)
    console.log(quiz1Value) 

  }
  
  
  questions: any;
  constructor(private router: Router, private http: HttpClient) {
    this.http.get('/api/quizpage/1').subscribe(data => { this.questions = data ;});
    
  }
  

  ngOnInit() {
  }

}
