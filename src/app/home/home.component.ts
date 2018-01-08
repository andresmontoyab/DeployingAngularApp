import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Score of Bitches ';
  bitches = [
    { name : 'Alvarez', score: '100%'},
    { name : 'AgainAlvarez', score: '150%'},
    { name : 'AlvarezIsTheMostBitch', score: '200%'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
