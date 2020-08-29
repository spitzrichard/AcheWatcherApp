import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-diaryoldoverview',
  templateUrl: './diaryoldoverview.component.html',
  styleUrls: ['./diaryoldoverview.component.css']
})

export class DiaryoldoverviewComponent implements OnInit {

  displayedColumns = ['eintrag', 'datum', 'uhrzeit', 'auswahl'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(false, []);
  // tslint:disable-next-line: typedef
  highlight(element: Element) {
    element.highlighted = !element.highlighted;
  }
/*
  // tslint:disable-next-line: typedef
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
*/
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // tslint:disable-next-line: typedef
  /*
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
*/
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
