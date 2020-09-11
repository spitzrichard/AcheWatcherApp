import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary-s5-activities',
  templateUrl: './diary-s5-activities.component.html',
  styleUrls: ['./diary-s5-activities.component.css']
})
export class DiaryS5ActivitiesComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
