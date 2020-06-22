import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Organization} from '../../../models/organizations';
import {OrganizationsService} from '../../../services/organizations/organizations.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-organizations-page',
  templateUrl: './organizations-page.component.html',
  styleUrls: ['./organizations-page.component.scss']
})

export class OrganizationsPageComponent implements OnInit, OnDestroy {

  organizations$: Observable<Organization[]>;
  data: Organization[];
  sub: Subscription;
  isData = false;

  constructor(private organizationsService: OrganizationsService) { }

  ngOnInit(): void {
    this.organizations$ = this.organizationsService.getAll();
    this.sub = this.organizations$.subscribe(res => {
      this.data = res;
      this.isData = true;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
