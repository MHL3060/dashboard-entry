import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AddGadgetModule,
  ConfigurationModule,
  DynamicFormModule,
  ErrorHandlerModule,
  GridModule,
  MenuModule,
  NgxAdfModule,
  RuntimeService
} from 'ngx-dynamic-dashboard';
import {GadgetSharedModule} from './gadgets/_common/gadget-shared.module';
import {OptionsService} from 'ngx-dynamic-dashboard/dashboard/configuration/tab-options/service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GadgetSharedModule,
    NgxAdfModule,
    MenuModule,
    GridModule,
    DynamicFormModule,
    ErrorHandlerModule,
    ConfigurationModule,
    AddGadgetModule
  ],
  providers: [
    RuntimeService,
    OptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
