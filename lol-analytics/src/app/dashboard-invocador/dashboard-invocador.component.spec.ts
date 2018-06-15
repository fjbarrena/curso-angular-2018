import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInvocadorComponent } from './dashboard-invocador.component';

describe('DashboardInvocadorComponent', () => {
  let component: DashboardInvocadorComponent;
  let fixture: ComponentFixture<DashboardInvocadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInvocadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInvocadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
