import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxIndexedDBService, NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';




@Component({
  selector: 'app-diary-s1-name',
  templateUrl: './diary-s1-name.component.html',
  styleUrls: ['./diary-s1-name.component.css']
})
export class DiaryS1NameComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

/*funktion für das wechseln der seite routingf für das click event beim button*/
goToComponentB(): void {


  this.router.navigate(['../diary_s2_time']);
}
}
