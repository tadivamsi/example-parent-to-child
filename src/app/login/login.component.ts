import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestingService } from '../testing.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private rtr:Router , private testings:TestingService) { }

  ngOnInit(): void {
  
  }
  login()
  {
    this.rtr.navigate(['Admin'])
    localStorage.setItem('admin', 'vamsi')
    sessionStorage.setItem('name','krishna')
    // alert(document.cookie);
  }

}
