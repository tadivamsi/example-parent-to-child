import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestingService } from '../testing.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor( private  testings:TestingService, private  router:Router) { }
testlist:any;
  ngOnInit(): void {
    this.testings.getmethod().subscribe(data=>{
      this.testlist=data;
      console.log(this.testlist)

    })
 }

  logout()
  {
    this.router.navigate(['Logout'])
    localStorage.clear()
    sessionStorage.clear()

  }
  
}
