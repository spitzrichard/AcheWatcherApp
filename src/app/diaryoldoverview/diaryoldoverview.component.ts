import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-diaryoldoverview',
  templateUrl: './diaryoldoverview.component.html',
  styleUrls: ['./diaryoldoverview.component.css']
})

export class DiaryoldoverviewComponent implements OnInit {

  displayedColumns = ['eintrag', 'datum', 'uhrzeit'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  // tslint:disable-next-line: typedef
  highlight(element: Element) {
    element.highlighted = !element.highlighted;
  }

  constructor() {
  }

  ngOnInit(): void {
}
}

export interface Element {
  eintrag: string;
  datum: string;
  uhrzeit: string;

  highlighted?: boolean;
  hovered?: boolean;

}

const ELEMENT_DATA: Element[] = [
  { eintrag: 'Bandscheibe', datum: '12.08.2020', uhrzeit: '12:45' },
  { eintrag: 'Steissbein', datum: '12.08.2020', uhrzeit: '15:51' },
  { eintrag: 'Schultern', datum: '17.08.2020', uhrzeit: '18:34' }

];
