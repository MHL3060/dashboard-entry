import {NewsGadgetComponent} from './news/news-gadget.component';
import {NewsService} from './news/service';
import {DynamicFormModule, ErrorHandlerModule, GadgetSharedModule} from 'ngx-dynamic-dashboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    GadgetSharedModule,
    DynamicFormModule,
    ErrorHandlerModule
  ],
    declarations: [
        NewsGadgetComponent
    ],
    providers: [
      NewsService
    ],

    exports: [
        NewsGadgetComponent
    ]
})
export class GadgetModule {
}
