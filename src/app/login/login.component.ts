import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('Is_Login')=='yes')
    {
      this.route.navigateByUrl('/admin-dashboard')
    }

  }
  Login()
  {
    sessionStorage.setItem('Is_Login','yes')
    window.location.reload()
    // this.route.navigate(['/admin-dashboard'])


  }

}

