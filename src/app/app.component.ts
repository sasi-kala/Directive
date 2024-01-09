import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Directive';
  colorFlag : Boolean = true;
  getColor(){
    return this.colorFlag;
  }
  // colorFlag1 : Boolean = false;
  // getColor1(){
  //   return this.colorFlag1;
  // }
}
