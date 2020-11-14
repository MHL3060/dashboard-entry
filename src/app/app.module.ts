import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BoardModule} from 'ngx-dynamic-dashboard';
import {GadgetModule} from './gadgets/gadget.module';
import {GadgetRegistry} from './GadgetRegistery';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GadgetModule,
    BrowserModule,
    AppRoutingModule,
    BoardModule
  ],
  providers: [
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
