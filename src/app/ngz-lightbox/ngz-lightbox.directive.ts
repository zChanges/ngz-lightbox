import {
  Directive,
  HostListener,
  ComponentFactory,
  ComponentFactoryResolver,
  ViewContainerRef,
  ApplicationRef,
  ComponentRef,
  EmbeddedViewRef,
  ElementRef,
  Renderer
} from '@angular/core';
import { LightboxComponent } from './lightbox/lightbox.component';
import { LightboxService } from './lightbox.service';

@Directive({
  selector: '[NgzLightbox]'
})
export class NgzLightboxDirective {
  _compRef: ComponentRef<LightboxComponent>;
  @HostListener('click', ['$event'])
  onHostClick($event) {
    $event.stopPropagation();
    // 在body插入lighbox
    document.body.insertBefore(
      document.createElement(this._lightboxCompFactory.selector),
      document.body.firstChild
    );
    this._compRef = this.appRef.bootstrap(this._lightboxCompFactory);
    const imgDom = $event.target || this.eleRef.nativeElement.querySelector('img') || this.eleRef.nativeElement;
    this._compRef.instance.getImgScr(imgDom.src);
  }

  // tslint:disable-next-line:member-ordering
  _lightboxCompFactory: ComponentFactory<LightboxComponent>;
  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private _lightboxService: LightboxService,
    private eleRef: ElementRef,
    private _rendererRef: Renderer
  ) {
    this._lightboxCompFactory = this.resolver.resolveComponentFactory(
      LightboxComponent
    );
    // 销毁lightbox Modal
    this._lightboxService.listeningDestroy().subscribe(res => {
      if (this._compRef) {
        this._compRef.destroy();
      }
    });
  }
}
