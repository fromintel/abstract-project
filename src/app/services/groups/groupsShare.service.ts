import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Group } from '../../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupsShareService {

  constructor() { }

  shareGroupSubject = new Subject<Group[]>();

  selectedGroups(group){
    this.shareGroupSubject.next(group);
  }
}
