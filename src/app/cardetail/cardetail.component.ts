import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { ActivatedRoute } from '@angular/router';
import { CarApiService } from '../car-api.service';
declare var $: any;

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  selectedDate:any
  carDetails:any;
  cardDetail_Data :any
  ngOnInit(): void {



    this.router.queryParams.subscribe(params=>
      this.carDetails = params.Car)

    this.detialList_api.GetCarDetailRead(this.carDetails).subscribe((data:any)=>{
      this.cardDetail_Data=data;
    })




  }
  Vehicle:boolean=false;
  Reviews:boolean=false;
  FeatureSpecification:boolean=true;

  title = 'CarDetail';
  carForm:any=FormGroup;
  pickUpLocation:string='';
  dropOfLocation:string='';
  pickUpDate:string='';
  dropOfdate:string='';
  SaveUp25Percenttorentalon3daysLable:string='';
  SaveUp50Percenttorentalon6daysLable:string='';
  childSeat:boolean=false;
  additionalDriver:boolean=false;
  gpsIntegeration:boolean=false;
  twentydollarPerDay:string='';
  fiftyDollarTotal:string='';
  thirtyDollarPerDay:string='';


  images:any[]=[
    {'car':"../../../assets/bigPicture.jpg"},
  {'car':"../../../assets/backCar.jpg"},
 {'car':"../../../assets/frontInterior.jpg"},
{'car':"../../../assets/seatOfCar.jpg"},
{'car':"../../../assets/interiorCar.jpg"},
];
passVehicle(){
  this.Vehicle=true;
  this.Reviews=false;
  this.FeatureSpecification=false;
}
passReviews(){
this.Vehicle=false;
  this.Reviews=true;
  this.FeatureSpecification=false;

}
passFeatureSpecification(){
this.Vehicle=false;
this.Reviews=false;
this.FeatureSpecification=true;
}

  constructor(private detialList_api : CarApiService,private router: ActivatedRoute ){
}






}
