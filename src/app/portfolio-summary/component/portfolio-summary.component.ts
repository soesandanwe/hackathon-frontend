import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-summary',
  templateUrl: './portfolio-summary.component.html',
  styleUrls: ['./portfolio-summary.component.css']
})
export class PortfolioSummaryComponent implements OnInit {
  currentTab: string = 'positions';
  constructor() { }

  ngOnInit(): void {
  }

  addTrade(): void {
    // Logic to add a trade
  }

  openTab(tabName: string): void {
    this.currentTab = tabName;
  }

}
