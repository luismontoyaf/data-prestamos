import { Component, OnInit } from '@angular/core';
import { GeneralInfoService } from 'src/app/shared/services/general-info.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  constructor(private service: GeneralInfoService){

  }

  ngOnInit(): void {
  }


}
