import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { NgzLightboxModule } from './../ngz-lightbox/ngz-lightbox.module';

@NgModule({
  imports: [
    CommonModule,
    NgzLightboxModule
  ],
  declarations: [ExampleComponent],
  exports: [ExampleComponent]
})
export class ExampleModule { }
