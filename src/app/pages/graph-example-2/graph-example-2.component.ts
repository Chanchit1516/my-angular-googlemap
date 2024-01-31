import { Component } from '@angular/core';

@Component({
  selector: 'app-graph-example-2',
  templateUrl: './graph-example-2.component.html',
  styleUrl: './graph-example-2.component.scss'
})
export class GraphExample2Component {

  constructor() {

  }

  ngOnInit() {

  }

  displayMap() {
    const input = document.getElementById('embed-map') as HTMLInputElement | null;
    debugger
    let myContainer = <HTMLElement>document.getElementById('map-display');

    var stringMap = [input?.value.slice(0, 7), " style='width:100% !important'", input?.value.slice(7)].join('');
    myContainer.innerHTML = stringMap;
  }
}
