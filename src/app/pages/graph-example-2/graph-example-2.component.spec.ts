import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphExample2Component } from './graph-example-2.component';

describe('GraphExample2Component', () => {
  let component: GraphExample2Component;
  let fixture: ComponentFixture<GraphExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphExample2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
