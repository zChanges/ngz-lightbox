import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgzLightboxDirective } from './ngz-lightbox.directive';
import { LightboxComponent } from './lightbox/lightbox.component';
import { LightboxService } from './lightbox.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ NgzLightboxDirective, LightboxComponent],
  exports: [ NgzLightboxDirective, LightboxComponent],
  providers: [LightboxService],
  entryComponents: [LightboxComponent]
})
export class NgzLightboxModule {}
