import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  showFiller = false;
  funcionalidades: any[] = []
  ngOnInit(): void {
  this.funcionalidades = [
    {
      name: 'Ingresar Usuario'
    },
    {
      name: 'Consultar Clientes'
    },
    {
      name: 'Generar Reporte Diario'
    },
    {
      name: 'Ingresar Pago por Cliente'
    },
    {
      name: 'Reporte Utilidad Mensual'
    }
  ];
  }

  datosMenu=[{
    'titulo':'GOOGLE',
    'icon':'fas fa-clock',
    'url':'https://www.google.com/'
   },
   {
     'titulo':'bootstrap',
     'icon':'fas fa-clock',
     'url':'https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp'
    }];

}
