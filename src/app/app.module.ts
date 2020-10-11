import { MatDatepickerModule} from '@angular/material/datepicker';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DiarychoiceComponent } from './diarychoice/diarychoice.component';
import { DiaryoldoverviewComponent } from './diaryoldoverview/diaryoldoverview.component';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatDialogModule} from '@angular/material/dialog';
import { DiaryinfostartComponent } from './diaryinfostart/diaryinfostart.component';
import { DiaryS1NameComponent } from './diary-s1-name/diary-s1-name.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DiaryS2TimeComponent } from './diary-s2-time/diary-s2-time.component';
import { DiaryS3WhereComponent } from './diary-s3-where/diary-s3-where.component';
import { DiaryS4StrengthComponent } from './diary-s4-strength/diary-s4-strength.component';
import { DiaryS5ActivitiesComponent } from './diary-s5-activities/diary-s5-activities.component';
import { DiaryS6RadiateComponent } from './diary-s6-radiate/diary-s6-radiate.component';
import { DiaryS7FactorsComponent } from './diary-s7-factors/diary-s7-factors.component';
import { DiaryS8TreatedComponent } from './diary-s8-treated/diary-s8-treated.component';
import { DiaryS9BetterComponent } from './diary-s9-better/diary-s9-better.component';
import { DiaryS10DonebeforeComponent } from './diary-s10-donebefore/diary-s10-donebefore.component';
import { DiaryS11ComplaintsComponent } from './diary-s11-complaints/diary-s11-complaints.component';
import { DiaryS12WeatherComponent } from './diary-s12-weather/diary-s12-weather.component';
import { DiaryS13OtherComponent } from './diary-s13-other/diary-s13-other.component';
import { DiaryinfoendComponent } from './diaryinfoend/diaryinfoend.component';
import { OldDiaryS1TimeComponent } from './old-diary-s1-time/old-diary-s1-time.component';
import { OldDiaryS2WhereComponent } from './old-diary-s2-where/old-diary-s2-where.component';
import { OldDiaryS3StrengthComponent } from './old-diary-s3-strength/old-diary-s3-strength.component';
import { OldDiaryS4TreatedComponent } from './old-diary-s4-treated/old-diary-s4-treated.component';
import { OldDiaryS5OtherComponent } from './old-diary-s5-other/old-diary-s5-other.component';

import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';


//import { DBConfig, NgxIndexedDBModule, NgxIndexedDBService} from 'ngx-indexed-db';




//hier muss die Database festgelegt werden
/*
const dbConfig: DBConfig  = {
  name: 'Awa-Db',
  version: 1,
  objectStoresMeta: [{
    store: 'diary',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'diaryname', keypath: 'diaryname', options: { unique: false } },
    ]
  }]
};


*/






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiarychoiceComponent,
    DiaryoldoverviewComponent,
    DiaryinfostartComponent,
    DiaryS1NameComponent,
    DiaryS2TimeComponent,
    DiaryS3WhereComponent,
    DiaryS4StrengthComponent,
    DiaryS5ActivitiesComponent,
    DiaryS6RadiateComponent,
    DiaryS7FactorsComponent,
    DiaryS8TreatedComponent,
    DiaryS9BetterComponent,
    DiaryS10DonebeforeComponent,
    DiaryS11ComplaintsComponent,
    DiaryS12WeatherComponent,
    DiaryS13OtherComponent,
    DiaryinfoendComponent,
    OldDiaryS1TimeComponent,
    OldDiaryS2WhereComponent,
    OldDiaryS3StrengthComponent,
    OldDiaryS4TreatedComponent,
    OldDiaryS5OtherComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    MatCheckboxModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatDialogModule,
    MatProgressBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    NgxMaterialTimepickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSliderModule
    /*,
    NgxIndexedDBService,
    NgxIndexedDBModule.forRoot(dbConfig)*/


  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
