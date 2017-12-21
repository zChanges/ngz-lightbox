import {
  Component,
  OnInit,
  ElementRef,
  HostListener,
  Inject,
  Renderer,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { LightboxService } from './../lightbox.service';

@Component({
  selector: 'lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements AfterViewInit, OnDestroy {
  imgSrc = '';
  constructor(
    private _elemRef: ElementRef,
    @Inject(DOCUMENT) private _documentRef: any,
    private _rendererRef: Renderer,
    private _LightboxService: LightboxService
  ) {}

  getImgScr(src: string) {
      const imgDom = this._elemRef.nativeElement.querySelector('img');
      this._rendererRef.setElementAttribute(imgDom, 'src', src);
      console.log(this.imgSrc);
  }

  @HostListener('window:resize')
  onResize() {
    this._sizeOverlay();
  }

  ngAfterViewInit() {
    this._rendererRef.setElementStyle(
      this._documentRef.body,
      'overflow',
      'hidden'
    );
    this._sizeOverlay();
  }

  destroyLayer($event) {
    this._LightboxService.destroyEmit();
  }

  _sizeOverlay() {
    const width = this._getOverlayWidth() - this._getOverlayWidth() / 4;
    const height = this._getOverlayHeight() - this._getOverlayHeight() / 9;
    const imgDom = this._elemRef.nativeElement.querySelector('img');
    this._rendererRef.setElementStyle(imgDom, 'width', `${width}px`);
    this._rendererRef.setElementStyle(imgDom, 'height', `${height}px`);
  }

  private _getOverlayWidth(): number {
    return Math.max(
      this._documentRef.body.scrollWidth,
      this._documentRef.body.offsetWidth,
      this._documentRef.documentElement.clientWidth,
      this._documentRef.documentElement.scrollWidth,
      this._documentRef.documentElement.offsetWidth
    );
  }

  private _getOverlayHeight(): number {
    return Math.max(
      this._documentRef.body.scrollHeight,
      this._documentRef.body.offsetHeight,
      this._documentRef.documentElement.clientHeight,
      this._documentRef.documentElement.scrollHeight,
      this._documentRef.documentElement.offsetHeight
    );
  }

  ngOnDestroy() {
    this._rendererRef.setElementStyle(
      this._documentRef.body,
      'overflow',
      'auto'
    );
  }
}
