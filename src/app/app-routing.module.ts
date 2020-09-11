import { OldDiaryS5OtherComponent } from './old-diary-s5-other/old-diary-s5-other.component';
import { OldDiaryS4TreatedComponent } from './old-diary-s4-treated/old-diary-s4-treated.component';
import { OldDiaryS3StrengthComponent } from './old-diary-s3-strength/old-diary-s3-strength.component';
import { OldDiaryS2WhereComponent } from './old-diary-s2-where/old-diary-s2-where.component';
import { OldDiaryS1TimeComponent } from './old-diary-s1-time/old-diary-s1-time.component';
import { DiaryinfoendComponent } from './diaryinfoend/diaryinfoend.component';
import { DiaryS13OtherComponent } from './diary-s13-other/diary-s13-other.component';
import { DiaryS12WeatherComponent } from './diary-s12-weather/diary-s12-weather.component';
import { DiaryS11ComplaintsComponent } from './diary-s11-complaints/diary-s11-complaints.component';
import { DiaryS10DonebeforeComponent } from './diary-s10-donebefore/diary-s10-donebefore.component';
import { DiaryS9BetterComponent } from './diary-s9-better/diary-s9-better.component';
import { DiaryS8TreatedComponent } from './diary-s8-treated/diary-s8-treated.component';
import { DiaryS7FactorsComponent } from './diary-s7-factors/diary-s7-factors.component';
import { DiaryS6RadiateComponent } from './diary-s6-radiate/diary-s6-radiate.component';
import { DiaryS5ActivitiesComponent } from './diary-s5-activities/diary-s5-activities.component';
import { DiaryS4StrengthComponent } from './diary-s4-strength/diary-s4-strength.component';
import { DiaryS3WhereComponent } from './diary-s3-where/diary-s3-where.component';
import { DiaryS2TimeComponent } from './diary-s2-time/diary-s2-time.component';
import { DiaryinfostartComponent } from './diaryinfostart/diaryinfostart.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DiaryoldoverviewComponent } from './diaryoldoverview/diaryoldoverview.component';
import { DiarychoiceComponent } from './diarychoice/diarychoice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaryS1NameComponent } from './diary-s1-name/diary-s1-name.component';



// Hier werden die Routen festgelegt um auf die entsprechenden Seiten zu navigieren
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  //{ path: '**', redirectTo: 'home'},
  { path: 'diarychoice', component: DiarychoiceComponent},
  { path: 'diaryoldoverview', component: DiaryoldoverviewComponent},
  { path: 'diaryinfostart', component: DiaryinfostartComponent},
  { path: 'diary_s1_name', component: DiaryS1NameComponent},
  { path: 'diary_s2_time', component: DiaryS2TimeComponent},
  { path: 'diary_s3_where', component: DiaryS3WhereComponent},
  { path: 'diary_s4_strength', component: DiaryS4StrengthComponent},
  { path: 'diary_s5_activities', component: DiaryS5ActivitiesComponent},
  { path: 'diary_s6_radiate', component: DiaryS6RadiateComponent},
  { path: 'diary_s7_factors', component: DiaryS7FactorsComponent},
  { path: 'diary_s8_treated', component: DiaryS8TreatedComponent},
  { path: 'diary_s9_better', component: DiaryS9BetterComponent},
  { path: 'diary_s10_donebefore', component: DiaryS10DonebeforeComponent},
  { path: 'diary_s11_complaints', component: DiaryS11ComplaintsComponent},
  { path: 'diary_s12_weather', component: DiaryS12WeatherComponent},
  { path: 'diary_s13_other', component: DiaryS13OtherComponent},
  { path: 'diaryinfoend', component: DiaryinfoendComponent},
  { path: 'old_diary_s1_time', component: OldDiaryS1TimeComponent},
  { path: 'old_diary_s2_where', component: OldDiaryS2WhereComponent},
  { path: 'old_diary_s3_strength', component: OldDiaryS3StrengthComponent},
  { path: 'old_diary_s4_treated', component: OldDiaryS4TreatedComponent},
  { path: 'old_diary_s5_other', component: OldDiaryS5OtherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
