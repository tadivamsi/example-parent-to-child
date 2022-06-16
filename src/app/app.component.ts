import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 @ViewChild(HomeComponent) home :any

 press()
 {
 this.home.passtoparent()
 }


data="This is parent  to child"
data2="this is testing  proccess"

d1="This is testing project"
d2="this is pratice"
}

