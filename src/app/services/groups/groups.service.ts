import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppStore } from '../../store/app-store';
import { delay } from 'rxjs/operators';
import { Group } from '../../models/group';

@Injectable()
export class GroupsService {

  public getAll(): Observable<Group[]> {
    return of<Group[]>(AppStore.storeEntity.groups).pipe(delay(800));
  }

  public getById(id: string): Observable<Group> {
    const group = AppStore.storeEntity.groups.find((g: Group) => g.id === id);
    return of<Group>(group).pipe(delay(500));
  }
}
