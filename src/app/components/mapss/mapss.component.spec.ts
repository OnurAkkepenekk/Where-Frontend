import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapssComponent } from './mapss.component';

describe('MapssComponent', () => {
  let component: MapssComponent;
  let fixture: ComponentFixture<MapssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
