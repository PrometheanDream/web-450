import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})


export class QuizPageComponent implements OnInit {

  
  constructor(private router: Router) {}
    

  ngOnInit() {
  }

}
