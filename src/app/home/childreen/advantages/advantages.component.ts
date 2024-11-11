import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent {
  @ViewChild('section2') section!: ElementRef;
  advantages = [
    {
      title: 'advantages.titleOne',
      description: 'advantages.descriptionOne',
      icon: 'note-2'
    },
    {
      title: 'advantages.titleTwo',
      description: 'advantages.descriptionTwo',
      icon: 'element-plus'
    },
    {
      title: 'advantages.titleThree',
      description: 'advantages.descriptionThree',
      icon: 'star'
    },
    {
      title: 'advantages.titleFour',
      description: 'advantages.descriptionFour',
      icon: 'security-user'
    },
    {
      title: 'advantages.titleFive',
      description: 'advantages.descriptionFive',
      icon: 'money-tick'
    },
  ]
  constructor() { }
}
