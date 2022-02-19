import { Component, OnInit } from '@angular/core';
import { CarApiService } from 'src/app/car-api.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
vehList2:any
  constructor(private my_obj:CarApiService) { }

  ngOnInit(): void {
    this.my_obj.Get_InventoryGrid().subscribe((data)=>{
      this.vehList2=data
      console.log(data)
    })
  }

}
