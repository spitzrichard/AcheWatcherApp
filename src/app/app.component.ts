import { Component, OnInit, HostListener } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AcheWatcherApp';
    // hier wird das Icon für den Button Registriert
    constructor(
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer
    ){
      this.matIconRegistry.addSvgIcon(
        'ache-watcher',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/awa-logo192x192.svg')
      );
    }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {

}


// tslint:disable-next-line: typedef


// tslint:disable-next-line: typedef


}

