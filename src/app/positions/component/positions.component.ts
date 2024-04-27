import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    { transactionRef: 1, instrumentId: 'Item 1', instrumentName:"Testing", instrumentValue:100, instrumentType:"Bond" },
    { transactionRef: 1, instrumentId: 'Item 1', instrumentName:"Testing", instrumentValue:100, instrumentType:"Bond" },
    // Add more items as needed
  ];

  pageSize = 5;
  currentPage = 1;

  sort(property: string) {
    // Logic to sort items by property
  }

  pageChanged(event: any) {
    this.currentPage = event;
  }

}
