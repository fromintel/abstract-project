import { Component, OnInit } from '@angular/core';
import { AppStore } from 'src/app/store/app-store';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { GroupsShareService } from 'src/app/services/groups/groupsShare.service';


@Component({
  selector: 'app-groups-switcher',
  templateUrl: './groups-switcher.component.html',
  styleUrls: ['./groups-switcher.component.scss']
})
export class GroupsSwitcherComponent implements OnInit {

  constructor(private GroupsService : GroupsService, private GroupsShare : GroupsShareService) { }

  groupsName:string = 'All Groups';
  
  groups = AppStore.storeEntity.groups;

  showCurrentGroupName(event: MouseEvent){
    this.groupsName = (<HTMLElement>event.target).innerText;
  }

  getGroup(group, event: MouseEvent){
    this.showCurrentGroupName(event);
    this.GroupsService.getById(group.id).subscribe(group => this.GroupsShare.selectedGroups(group));
  }

  getAllGroups(event: MouseEvent){
    this.showCurrentGroupName(event);
    this.GroupsService.getAll().subscribe(group => this.GroupsShare.selectedGroups(group));
  }

  ngOnInit() {

  }

}
