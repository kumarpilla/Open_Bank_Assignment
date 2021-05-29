import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  value = 100000;
  monthlyExpenses = 10000;
  constructor() { }

  ngOnInit(): void {
  }

}
