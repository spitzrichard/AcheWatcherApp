import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DiaryoldoverviewComponent } from './diaryoldoverview/diaryoldoverview.component';
import { DiarychoiceComponent } from './diarychoice/diarychoice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Hier werden die Routen festgelegt um auf die entsprechenden Seiten zu navigieren
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  //{ path: '**', redirectTo: 'home'},
  { path: 'diarychoice', component: DiarychoiceComponent},
  { path: 'diaryoldoverview', component: DiaryoldoverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
