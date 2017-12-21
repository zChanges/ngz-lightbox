# NgzLightbox

点击图片放大

## Example
```html
<span NgzLightbox   [innerHtml]='html'></span>
<br/>
<img  NgzLightbox src="https://unsplash.it/600.jpg?image=251" style="width:100px;">

<img NgzLightbox [src]='url' style='width:50px;border:1px solid #ddd'/>

```

```typescript
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
      <img  NgzLightbox src="http://v4.faqrobot.net/upload/web/3000000/20171219/28311513650888121.png" style="width:200px;"  >
      `
    );
    this.url = 'https://unsplash.it/600.jpg?image=251';
  }
}
```