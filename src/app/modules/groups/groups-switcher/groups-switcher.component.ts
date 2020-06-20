import { Component, OnInit } from '@angular/core';
import { AppStore } from 'src/app/store/app-store';


@Component({
  selector: 'app-groups-switcher',
  templateUrl: './groups-switcher.component.html',
  styleUrls: ['./groups-switcher.component.scss']
})
export class GroupsSwitcherComponent implements OnInit {

  constructor() { }

  groupsName:string = 'All Groups';
  
  groups = AppStore.storeEntity.groups;

  showCurrentGroup(event: MouseEvent){
    this.groupsName = (<HTMLElement>event.target).innerText;
  }

  ngOnInit() {

  }

}
