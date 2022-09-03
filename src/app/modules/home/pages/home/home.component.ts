import { GeneralInfoService } from 'src/app/shared/services/general-info.service';
import { Component, OnInit } from '@angular/core';
import { GeneralInfoService } from 'src/app/shared/services/general-info.service';

interface Country {
  name: string;
  fee: number;
  totalDebt: number;
  state: string;
}

const COUNTRIES: Country[] = [
  {
    name: 'Camilo Velez',
    fee: 1200000,
    totalDebt: 17075200,
    state: "Activo"
  },
  {
    name: 'Luis Messi',
    fee: 2515611,
    totalDebt: 9976140,
    state: "Activo"
  },
  {
    name: 'Alberto Linero',
    fee: 231232,
    totalDebt: 9629091,
    state: "Activo"
  },
  {
    name: 'JH de la Cruz',
    fee: 232131,
    totalDebt: 9596960,
    state: "Activo"
  }
];

interface Country {
  name: string;
  fee: number;
  totalDebt: number;
  state: string;
}

const COUNTRIES: Country[] = [
  {
    name: 'Camilo Velez',
    fee: 1200000,
    totalDebt: 17075200,
    state: "Activo"
  },
  {
    name: 'Luis Messi',
    fee: 2515611,
    totalDebt: 9976140,
    state: "Activo"
  },
  {
    name: 'Alberto Linero',
    fee: 231232,
    totalDebt: 9629091,
    state: "Activo"
  },
  {
    name: 'JH de la Cruz',
    fee: 232131,
    totalDebt: 9596960,
    state: "Activo"
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private generalInfoService: GeneralInfoService) { }


  ngOnInit(): void {

  }

  public isCollapsed = false;

  countries = COUNTRIES;
}
