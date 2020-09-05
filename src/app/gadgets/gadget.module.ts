import {NewsGadgetComponent} from './news/news-gadget.component';
import {NewsService} from './news/service';
import {GadgetSharedModule} from 'ngx-dynamic-dashboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        GadgetSharedModule
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
