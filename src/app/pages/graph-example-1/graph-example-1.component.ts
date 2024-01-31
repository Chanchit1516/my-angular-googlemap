import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { PLACE_SEARCH_RESULT } from '../../models/google-map-model';

@Component({
  selector: 'app-graph-example-1',
  templateUrl: './graph-example-1.component.html',
  styleUrl: './graph-example-1.component.scss',
})
export class GraphExample1Component {
  
  fromValue: PLACE_SEARCH_RESULT | undefined;
  toValue: PLACE_SEARCH_RESULT | undefined;

  ngOnInit() {
  }

  constructor(
  ) {

  }

  ngAfterViewInit() {
      
  }


}
