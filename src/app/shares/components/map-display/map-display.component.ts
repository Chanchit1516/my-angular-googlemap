import { Component, Input, ViewChild } from '@angular/core';
import { GoogleMap, MapDirectionsService } from '@angular/google-maps';
import { debounceTime, map } from 'rxjs';
import { PLACE_SEARCH_RESULT } from '../../../models/google-map-model';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrl: './map-display.component.scss'
})
export class MapDisplayComponent {
  @ViewChild('map', { static: true })
  map!: GoogleMap;

  @Input() from: PLACE_SEARCH_RESULT | undefined;
  @Input() to: PLACE_SEARCH_RESULT | undefined;

  zoom: any = 15
  directionsResult: google.maps.DirectionsResult | undefined;
  markerPosition: google.maps.LatLng | undefined;
  mapUrl: any = "";

  constructor(private directionService: MapDirectionsService) {

  }

  ngOnInit() {

  }

  ngOnChanges() {
    const fromLocation = this.from;
    const toLocation = this.to;


    if (fromLocation && toLocation) {
      this.getDirection(fromLocation, toLocation)
    }
    else if (fromLocation?.location) {
      this.goLocation(fromLocation?.location);
    }
    else if (toLocation?.location) {
      this.goLocation(toLocation?.location);
    }
  }

  goLocation(location: google.maps.LatLng) {
    this.markerPosition = location
    this.map.panTo(location);
    this.zoom = 15;
    this.directionsResult = undefined;

    this.mapUrl = this.getGoogleMapsUrl(location.lat(), location.lng());
  }

  getDirection(from: PLACE_SEARCH_RESULT, to: PLACE_SEARCH_RESULT) {
    const request: google.maps.DirectionsRequest = {
      origin: from.location ?? "",
      destination: to.location ?? "",
      travelMode: google.maps.TravelMode.DRIVING
    }

    this.directionService.route(request).pipe(
      map(res => res.result)
    ).subscribe((result) => {
      this.directionsResult = result;
      this.markerPosition = undefined;
      if (from.name && to.name) {
        this.mapUrl = this.getGoogleMapsDirectionsUrl(from.name, to.name);
      }
    });
  }


  getGoogleMapsDirectionsUrl(origin: string, destination: string): string {
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
  }

  getGoogleMapsUrl(latitude: number, longitude: number): string {
    return `https://www.google.com/maps?q=${latitude},${longitude}`;
  }
}
