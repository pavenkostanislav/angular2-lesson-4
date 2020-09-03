import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgforComponent } from './ngfor.component';



@NgModule({
  declarations: [NgforComponent],
  exports: [NgforComponent],
  imports: [
    CommonModule
  ]
})
export class NgforModule { }
