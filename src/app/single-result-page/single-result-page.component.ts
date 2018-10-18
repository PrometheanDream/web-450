import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-single-result-page',
  templateUrl: './single-result-page.component.html',
  styleUrls: ['./single-result-page.component.css']
})
export class SingleResultPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
