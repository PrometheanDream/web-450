import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';


@Component({

  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.css']
})



export class PresentationPageComponent implements OnInit {
  presentation1;
  presentation2;
  presentation3;

  

  constructor(private router: Router) {
    this.presentation1 = [
      {slide: 'assets/powerpoints/Presentation_1/Slide1.png'},
      {slide: 'assets/powerpoints/Presentation_1/Slide2.png'},
      {slide: 'assets/powerpoints/Presentation_1/Slide3.png'},
      {slide: 'assets/powerpoints/Presentation_1/Slide4.png'},
      {slide: 'assets/powerpoints/Presentation_1/Slide5.png'},
      {slide: 'assets/powerpoints/Presentation_1/Slide6.png'},
      {slide: 'assets/powerpoints/Presentation_1/Slide7.png'},
      {slide: 'assets/powerpoints/Presentation_1/Slide8.png'},
      {slide: 'assets/powerpoints/Presentation_1/Slide9.png'},
      {slide: 'assets/powerpoints/Presentation_1/Slide10.png'},
      {slide: 'assets/powerpoints/Presentation_1/Slide11.png'},
      {slide: 'assets/powerpoints/Presentation_1/Slide12.png'}
  ],

    this.presentation2 = [
      {slide: 'assets/powerpoints/Presentation_2/Slide1.png'},
      {slide: 'assets/powerpoints/Presentation_2/Slide2.png'},
      {slide: 'assets/powerpoints/Presentation_2/Slide3.png'},
      {slide: 'assets/powerpoints/Presentation_2/Slide4.png'},
      {slide: 'assets/powerpoints/Presentation_2/Slide5.png'},
      {slide: 'assets/powerpoints/Presentation_2/Slide6.png'},
      {slide: 'assets/powerpoints/Presentation_2/Slide7.png'},
      {slide: 'assets/powerpoints/Presentation_2/Slide8.png'},
      {slide: 'assets/powerpoints/Presentation_2/Slide9.png'},
      {slide: 'assets/powerpoints/Presentation_2/Slide10.png'}
  ],

  this.presentation3 = [
    {slide: 'assets/powerpoints/Presentation_3/Slide1.png'},
    {slide: 'assets/powerpoints/Presentation_3/Slide2.png'},
    {slide: 'assets/powerpoints/Presentation_3/Slide3.png'},
    {slide: 'assets/powerpoints/Presentation_3/Slide4.png'},
    {slide: 'assets/powerpoints/Presentation_3/Slide5.png'},
    {slide: 'assets/powerpoints/Presentation_3/Slide6.png'},
    {slide: 'assets/powerpoints/Presentation_3/Slide7.png'},
    {slide: 'assets/powerpoints/Presentation_3/Slide8.png'},
    {slide: 'assets/powerpoints/Presentation_3/Slide9.png'},
    {slide: 'assets/powerpoints/Presentation_3/Slide10.png'}

  ]


   }

  ngOnInit() {
  }

}
