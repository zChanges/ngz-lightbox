import {
  Component,
  OnInit,
  AfterViewInit,
  ApplicationRef,
  ViewEncapsulation
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  url: any;
  html: any;
  constructor(
    private sanitizer: DomSanitizer,
    private appRef: ApplicationRef
  ) { }

  ngOnInit() {
    this.html = this.sanitizer.bypassSecurityTrustHtml(
      `<img  NgzLightbox src="https://unsplash.it/600.jpg?image=251" style="width:200px;" onclick='' >
      <img  NgzLightbox src="https://unsplash.it/600.jpg?image=200" style="width:200px;"  >
      `
    );
    this.url = 'https://unsplash.it/600.jpg?image=251';
  }

}
