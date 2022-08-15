import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoService {

  constructor() { }

  data: Array<object> = [
    {
      name: "Data Prestamos",
      logo: "logo-data-prestamos.png",
      backgroundImage: "P.png"
    }
  ];
}
