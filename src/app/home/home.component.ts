import { Component, OnInit, HostListener } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  // tslint:disable-next-line: typedef
  openDialog() {
    this.dialog.open(Dialog);
  }
  // Screengröße in Variable hinterlegt für die CSS

    ngOnInit(): void {

    }


}
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dialog-view',
  templateUrl: 'dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class Dialog {}
