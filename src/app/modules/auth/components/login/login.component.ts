import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../classes/base.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  errors:any[] = [];
  constructor(private router: Router) {
    super();
  }

  ngOnInit() {

  }
  submit(event:any, username:any, password:any){
    this.errors = [];
    if(!username.value){
      this.errors.push('Please enter username');
    }
    if(!password.value){
      this.errors.push('Please enter password');
    }
    if(this.errors.length === 0){
      this.router.navigate(['/app', 'table'])
    }

  }

}
