import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicClickComponent } from './dynamic-click.component';

describe('DynamicClickComponent', () => {
  let component: DynamicClickComponent;
  let fixture: ComponentFixture<DynamicClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
