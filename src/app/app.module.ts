import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AddGadgetModule,
  ConfigurationModule,
  DynamicFormModule,
  ErrorHandlerModule,
  GridModule,
  MenuModule,
  NgxAdfModule, OptionsService,
  RuntimeService
} from 'ngx-dynamic-dashboard';
import {NewsService} from './gadgets/news/service';
import {GadgetModule} from './gadgets/gadget.module';
import {GadgetRegistry} from './GadgetRegistery';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    {
      provide: APP_INITIALIZER,
      useFactory: GadgetRegistry,
      deps: [],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
