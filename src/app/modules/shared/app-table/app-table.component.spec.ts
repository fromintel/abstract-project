import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { AppTableComponent } from './app-table.component';
import { PreloaderComponent} from '../../../components/preloader/preloader.component';

describe('AppTableComponent', () => {
  let component: AppTableComponent;
  let fixture: ComponentFixture<AppTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppTableComponent,
        MockComponent( PreloaderComponent ),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
