import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaNgBootstrapComponent } from './fecha-ng-bootstrap.component';

describe('FechaNgBootstrapComponent', () => {
  let component: FechaNgBootstrapComponent;
  let fixture: ComponentFixture<FechaNgBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaNgBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaNgBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
