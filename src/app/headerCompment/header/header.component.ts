import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { computeSegEndResizable } from '@fullcalendar/angular';
import { CarApiService } from 'src/app/car-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private my_company:CarApiService
    ,
  private route:Router) { }
  myCompanyData:any
  loginbtn='';
  logoutbtn='none';

  ngOnInit(): void {
    if(sessionStorage.getItem('Is_Login')=='yes')
    {
      this.loginbtn='none'
      this.logoutbtn=''
    }
this.my_company.getCompanyList().subscribe((data)=>{
this.myCompanyData=data
console.log(this.myCompanyData)
})
  }

  reloadHomePage() {
    window.location.href=""
   }
   logout()
   {
     sessionStorage.clear()
     this.route.navigate(['/login'])
     setTimeout(() => {
       window.location.reload()
     }, 1);
   }

}
