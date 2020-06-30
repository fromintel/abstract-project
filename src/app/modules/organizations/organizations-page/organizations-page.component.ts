import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Organization} from '../../../models/organizations';
import {OrganizationsService} from '../../../services/organizations/organizations.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-organizations-page',
  templateUrl: './organizations-page.component.html',
  styleUrls: ['./organizations-page.component.scss']
})

export class OrganizationsPageComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  data: Organization[];
  isDataLoaded = false;

  constructor(private organizationsService: OrganizationsService) { }

  ngOnInit(): void {
    this.organizationsService.getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.data = res;
        this.isDataLoaded = true;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
