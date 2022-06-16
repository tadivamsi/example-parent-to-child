import { Component, EventEmitter, OnInit ,ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // @Output() eve=new EventEmitter();
  // message="hello this is child compoment"
  // msg: any;
  // passtoparent()
  // {
  //   this.eve.emit(this.message)
  // }
  // updatemsg(e:any){
  //   this.message=e.target.value
  // }
@ViewChild('para')p:any
@ViewChildren('heading') h:any
test()
{
 console.log( this.p.nativeElement.innerText);
for(let ele of this.h){
  console.log( ele.nativeElement.innerText);
}
}
  constructor() { }

  ngOnInit(): void {
  }

}
