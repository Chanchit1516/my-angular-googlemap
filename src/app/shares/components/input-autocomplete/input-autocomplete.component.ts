import { outputAst } from '@angular/compiler';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PLACE_SEARCH_RESULT } from '../../../models/google-map-model';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrl: './input-autocomplete.component.scss',
})
export class InputAutocompleteComponent {
  @ViewChild('inputField') inputField!: ElementRef

  @Input() placeholder = "";

  @Output() placeChanged = new EventEmitter<PLACE_SEARCH_RESULT>();


  autocomplete: google.maps.places.Autocomplete | undefined;


  constructor(private cdr: ChangeDetectorRef){

  }

  ngOnInit(){

  }

  ngAfterViewInit(){
    const options = {
      fields: ["formatted_address", "geometry", "name"],
    };
    this.autocomplete = new google.maps.places.Autocomplete(
      this.inputField.nativeElement,
      options
    );

    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete?.getPlace();
      const result: PLACE_SEARCH_RESULT = {
        location: place?.geometry?.location,
        name: place?.name
      }
      console.log(result)
      this.placeChanged.emit(result);
    })
  }

  onBlurMethod(){
    setTimeout(function(){
      console.log("On Blue")
    },500);
  }
}
