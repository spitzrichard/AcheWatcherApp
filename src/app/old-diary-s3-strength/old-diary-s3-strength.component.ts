import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-old-diary-s3-strength',
  templateUrl: './old-diary-s3-strength.component.html',
  styleUrls: ['./old-diary-s3-strength.component.css']
})
export class OldDiaryS3StrengthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: member-ordering
  lastpainvalue = 50;
   // tslint:disable-next-line: member-ordering
   slidervalue = 0;
   // tslint:disable-next-line: typedef
   updateSetting(event) {
     this.slidervalue = event.value;
   }
}
