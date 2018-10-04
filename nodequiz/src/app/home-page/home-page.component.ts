import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  
  quizzes: any;
  constructor(private http: HttpClient) {
        this.http.get('/api/quizpage').subscribe(data => { this.quizzes = data ;});
        
   }

  ngOnInit() {
  }

}
