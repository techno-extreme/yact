import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-gallery [datasource]=images></app-gallery>
  `,
})
export class AppComponent {
  images;

  constructor() {
    this.images = [
      {'url': 'http://your_image1_url'},
      {'url': 'http://your_image1_url'}
    ];
  }
}
