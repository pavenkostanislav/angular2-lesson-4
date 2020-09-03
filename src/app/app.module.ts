import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgforModule } from './ngfor/ngfor.module';
import { NgifModule } from './ngif/ngif.module';
import { NgswitchModule } from './ngswitch/ngswitch.module';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgifModule, NgforModule, NgswitchModule, TestModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
