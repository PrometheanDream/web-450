import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})



export class QuizPageComponent implements OnInit {
   
// resultsData: String;
  onSubmit(value: any) {
    console.log(value)
    
    

   // *not working* this.router.navigate(routerLink='/singleresultpage1', this.resultsData)
  }
  
  
  questions: any;
  constructor(private router: Router, private http: HttpClient) {
    this.http.get('/api/quizpage/1').subscribe(data => { this.questions = data ;});
    
  }
  

  ngOnInit() {
  }

}
