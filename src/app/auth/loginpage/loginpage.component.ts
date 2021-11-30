import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  baseurl=environment.baseurl

  constructor(private fb:FormBuilder,private http:HttpClient) { }

  userform=this.fb.group({
    'username':[null,Validators.required],
    'password':[null,Validators.required]
  })
  ngOnInit(): void {
  }

  getLogin()
  {
    this.http.post(this.baseurl+'login',this.userform.value).subscribe(res=>{
      console.log(res);
      
    })
  }
}
