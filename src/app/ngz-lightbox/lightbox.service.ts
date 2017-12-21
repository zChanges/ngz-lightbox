import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class LightboxService {
  destroysubject = new Subject<any>();
  imgScrSubject = new Subject<any>();
  constructor() {}

  destroyEmit () {
    this.destroysubject.next(true);
  }

  listeningDestroy() {
    return this.destroysubject.asObservable();
  }

  imgSrcEmit(src) {
    this.imgScrSubject.next(src);
  }

  listeningImgSrc() {
    return this.imgScrSubject.asObservable();
  }
}
