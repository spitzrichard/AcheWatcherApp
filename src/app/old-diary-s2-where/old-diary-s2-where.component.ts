import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-old-diary-s2-where',
  templateUrl: './old-diary-s2-where.component.html',
  styleUrls: ['./old-diary-s2-where.component.css']
})
export class OldDiaryS2WhereComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = 'Angular';
  pointSize = 10;
  element: Element;
  root: Element;
  ctx;
  canvas;
  savecoords = new Array();



  // tslint:disable-next-line: max-line-length
  // ----------------------------------- Funktion um die Punkte auf dem Bild darzustellen oben mit pointsize kann die grösse eingestellt werden
  // tslint:disable-next-line: typedef
  getPosition(event) {
    this.element = ( this.root as Element);
    this.canvas = ( document.getElementById('canvas') as HTMLCanvasElement);
    this.ctx = this.canvas.getContext('2d');
    // tslint:disable-next-line: one-variable-per-declaration
    let curleft = 0, curtop = 0;

    curleft += event.offsetX;
    curtop += event.offsetY;

    this.drawCoordinates(curleft, curtop);
  }


  // tslint:disable-next-line: typedef
  drawCoordinates(x, y) {

    const grd = this.ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, 'red');
    this.ctx.fillStyle = grd; // Red color






    this.ctx.beginPath();
    this.ctx.arc(Number(x), Number(y), this.pointSize, 0, Math.PI * 2, true);
    this.ctx.fill();



    // tslint:disable-next-line: prefer-const

    // tslint:disable-next-line: no-unused-expression
    /*hier wird xy in das array gepusht um die koordinaten zu speichern*/
    this.savecoords.push(x, y);

    // tslint:disable-next-line: no-console
    //console.info(this.savecoords);
  }




// ---------------------------------------------------Ende der Funktion für die Punkte------------------------------------
/*Funktion für das löschen der Punkte und löschen des Arrays*/
// tslint:disable-next-line: typedef
clearpoints() {
  const context = this.canvas.getContext('2d');
  context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  if(this.savecoords.length >= 1){
    this.savecoords.splice(0);
  }

}

}
