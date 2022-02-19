import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarApiService } from '../car-api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild('update') showUpdateBtn!:ElementRef<any>
  @ViewChild('submit') showSubmitBtn!:ElementRef<any>


  constructor(
    private obj:CarApiService,
    private formbuilder:FormBuilder


  ) { }


  enableInput=true;
  VehicleFormControl:any=FormGroup
  Record:any;
  ngOnInit(): void {

  this.obj.getVehicleList().subscribe((data:any)=>{
    this.Record=data;

})

this.VehicleFormControl=this.formbuilder.group({
  vMake:['',{
    validators:[Validators.required]
  }],
  vModel:['',{
    validators:[Validators.required]
  }],
  vStockStatus:['',{
    validators:[Validators.required]
  }],
  vYear:['',{
    validators:[Validators.required]
  }],
  vMileage:['',{
    validators:[Validators.required]
  }],
  vVIN:['',{
    validators:[Validators.required]
  }],
  vVersion:['',{
    validators:[Validators.required]
  }],
  vFuelType:['',{
    validators:[Validators.required]
  }],
  vEngineCM3:['',{
    validators:[Validators.required]
  }],
  vHorsePower:['',{
    validators:[Validators.required]
  }],
  vTransmission:['',{
    validators:[Validators.required]
  }],
  vDoors:['',{
    validators:[Validators.required]
  }],
  vCondition:['',{
    validators:[Validators.required]
  }],
  vDrive:['',{
    validators:[Validators.required]
  }],
  vSeat:['',{
    validators:[Validators.required]
  }],
  vColor:['',{
    validators:[Validators.required]
  }],
  vInteriorColor:['',{
    validators:[Validators.required]
  }],
  vPriceType:['',{
    validators:[Validators.required]
  }],
  vWarranty:['',{
    validators:[Validators.required]
  }]

})
  }

  populateForm(Object:any)
  {
    this.VehicleFormControl.patchValue({
      'vMake' : Object.vMake,
      'vModel' : Object.vModel,
      'vStockStatus' : Object.vStockStatus,
      'vYear' : Object.vYear,
      'vMileage' : Object.vMileage,
      'vVIN' : Object.vVIN,
      'vVersion' : Object.vVersion,
      'vFuelType' : Object.vFuelType,
      'vEngineCM3' : Object.vEngineCM3,
      'vHorsePower' : Object.vHorsePower,
      'vTransmission' : Object.vTransmission,
      'vDoors' : Object.vDoors,
      'vCondition' : Object.vCondition,
      'vDrive' : Object.vDrive,
      'vSeat' : Object.vSeat,
      'vColor' : Object.vColor,
      'vInteriorColor' : Object.vInteriorColor,
      'vPriceType' : Object.vPriceType,
      'vWarranty' : Object.vWarranty
    })
  }

  detail(id:any)
  {
    this.enableInput=true
    this.showSubmitBtn.nativeElement.style.display='none'
    this.showUpdateBtn.nativeElement.style.display='none'
    let specificData = this.Record.filter((res:any)=>
    {
      return res.vID.toString().match(id)
    })
    console.log(specificData[0])
    this.populateForm(specificData[0])
    }
    tempId:any
    EditOpen(id:any)
    {
      this.tempId=id
      this.showUpdateBtn.nativeElement.style.display=''
      this.showSubmitBtn.nativeElement.style.display='none'
      let specificData = this.Record.filter((res:any)=>
      {
        return res.vID.toString().match(id)
      })
      this.enableInput=false
      this.populateForm(specificData[0])

    }

    updat(values:any)
    {

      values.value.vID=this.tempId;
      values.value.vCreatedBy="Admin"
      console.log(values.value)
      this.obj.SaveVehicleDetail(values.value).subscribe((res:any)=>{
        console.log(res)
        window.location.reload()
      })


    }

    AddNewVehicle()
    {
      this.VehicleFormControl.reset();
      this.enableInput=false
      this.showUpdateBtn.nativeElement.style.display='none'
      this.showSubmitBtn.nativeElement.style.display=''
    }
    submitVehicle(values:any)
    {
      values.value.vID=0;
      values.value.vCreatedBy="Admin"
      console.log(values.value)
      this.obj.SaveVehicleDetail(values.value).subscribe((res:any)=>{
        console.log(res)
        window.location.reload()
      })
    }

}
