import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SumDirective } from './sum.directive';
import { TestComponent } from './test.component';
import { ShowDirective } from './show.directive';

@NgModule({
  declarations: [TestComponent, SumDirective, ShowDirective],
  exports: [TestComponent, SumDirective, ShowDirective],
  imports: [CommonModule],
})
export class TestModule {}
