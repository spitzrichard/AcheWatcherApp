import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-diary-s4-strength',
  templateUrl: './diary-s4-strength.component.html',
  styleUrls: ['./diary-s4-strength.component.css']
})
export class DiaryS4StrengthComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }


// tslint:disable-next-line: member-ordering

  // tslint:disable-next-line: member-ordering
  slidervalue = 0;
  // tslint:disable-next-line: typedef
  updateSetting(event) {
    this.slidervalue = event.value;
  }

}


