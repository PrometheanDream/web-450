import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})



export class QuizPageComponent implements OnInit {
// variable List

quiz: any;  

// resultsData: String;
  onSubmit(formData) {
    console.log(formData)
    
  if (formData) {
    console.log(formData.value)
  }  

   // *not working* this.router.navigate(routerLink='/singleresultpage1', this.resultsData)
  }
  
  constructor(private router: Router, private http: HttpClient) {
    this.http.get('/api/quizpage1').subscribe(data => { this.quiz = data ;console.log(this.quiz)});

    
  }
  

  ngOnInit() {
  }

}
