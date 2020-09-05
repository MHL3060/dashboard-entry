import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AddGadgetModule,
  ConfigurationModule,
  DynamicFormModule,
  ErrorHandlerModule, GadgetSharedModule,
  GridModule,
  MenuModule,
  NgxAdfModule, OptionsService,
  RuntimeService
} from 'ngx-dynamic-dashboard';
import {NewsService} from './gadgets/news/service';
import {GadgetModule} from './gadgets/gadget.module';

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
    AddGadgetModule,
    GadgetModule

  ],
  providers: [
    RuntimeService,
    NewsService,
    OptionsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
