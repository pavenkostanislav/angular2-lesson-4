import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgswitchComponent } from './ngswitch.component';

@NgModule({
  declarations: [NgswitchComponent],
  exports: [NgswitchComponent],
  imports: [CommonModule],
})
export class NgswitchModule {}
