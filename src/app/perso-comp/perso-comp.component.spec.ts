import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoCompComponent } from './perso-comp.component';

describe('PersoCompComponent', () => {
  let component: PersoCompComponent;
  let fixture: ComponentFixture<PersoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
