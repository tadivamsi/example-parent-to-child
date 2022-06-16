import { Component, OnInit } from '@angular/core';
import { Observable,  } from 'rxjs';
import { __values } from 'tslib';



@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor()
 { }

  ngOnInit(): void {
//   let promise= new Promise((data)=>{
//    console.log("promise is working ");
//    data('successfull testing')
//     });

//  promise.then(value=>{
//   console.log(value)
//  })
let vam= new Observable ((data)=>{
data.next("working")
data.next("testing project")
data.next("observer")
});
vam.subscribe(value=>{
  console.log(value)
})
  }
}