import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphExample1Component } from './graph-example-1.component';

describe('GraphExample1Component', () => {
  let component: GraphExample1Component;
  let fixture: ComponentFixture<GraphExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphExample1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
