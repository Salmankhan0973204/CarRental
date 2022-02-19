import { Component, OnInit } from '@angular/core';
import { CarApiService } from 'src/app/car-api.service';

@Component({
  selector: 'app-inventory-grid',
  templateUrl: './inventory-grid.component.html',
  styleUrls: ['./inventory-grid.component.css']
})
export class InventoryGridComponent implements OnInit {

   inventoryGrid_Data :any

  constructor( private api:CarApiService) { }

  ngOnInit(): void {
    this.api.Get_InventoryGrid().subscribe((data)=>{
      this.inventoryGrid_Data = data
      console.log('----------', this.inventoryGrid_Data)
    })

  }



}
