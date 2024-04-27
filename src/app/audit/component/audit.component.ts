import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  items = [
    { id: 1, name: 'Audit 1' },
    { id: 2, name: 'Audit 2' },
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
