import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {

   inventoryGrid_Api= "https://zaynahpharmacy.com/WebApi/api/Car/list"
   url_CarDetail_Read='https://zaynahpharmacy.com/WebApi/api/Car/read/'
   company_url="https://zaynahpharmacy.com/WebApi/api/company/list"

   url_Vehicle_List="https://zaynahpharmacy.com/WebApi/api/Car/list"
   url_Vehicle_Save="https://zaynahpharmacy.com/WebApi/api/Car/save"

  constructor(private http:HttpClient) { }

  Get_InventoryGrid(){
    return this.http.get(this.inventoryGrid_Api)
  }
  GetCarDetailRead(id:any)
  {
    return this.http.get(this.url_CarDetail_Read+id)
  }
  getCompanyList(){
    return this.http.get(this.company_url)
  }
  getVehicleList()
  {
    return this.http.get(this.url_Vehicle_List)
  }

  SaveVehicleDetail(obj:any)
  {
    return this.http.post(this.url_Vehicle_Save,obj)
  }

}
