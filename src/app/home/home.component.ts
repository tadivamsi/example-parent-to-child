import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() d1:any;
  @Input() d2:any;
  constructor() { }

  ngOnInit(): void {
  }
// data="this is child to parent "
// passtoparent()
// {
//   return this.data;
// }
// data()
// {
//   return"This is a testing from child to parent"
// }
// }

}

