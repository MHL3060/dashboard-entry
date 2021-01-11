import {ChangeDetectorRef, Component} from '@angular/core';
import {NewsService} from './service';
import {GadgetBase, GadgetInstanceService, GadgetPropertyService} from 'ngx-dynamic-dashboard';
import {OptionsService} from 'ngx-dynamic-dashboard';

@Component({
    moduleId: module.id,
    selector: 'app-news-gadget',
    templateUrl: './view.html',
    styleUrls: ['../_common/styles-gadget.css']
})
export class NewsGadgetComponent extends GadgetBase {

    // runtime document subscription
    news: any;
    resource: string;

    gadgetHasOperationControls = false;
    constructor(
                protected _gadgetInstanceService: GadgetInstanceService,
                protected _propertyService: GadgetPropertyService,
                protected _changeDetectionRef: ChangeDetectorRef,
                protected _newsService: NewsService,
                protected _optionsService: OptionsService
                ) {
        super(
            _gadgetInstanceService,
            _propertyService,
            _changeDetectionRef,
            _optionsService);
    }

    public preRun(): void {
        this.updateData(null);
        this.run();
    }

    public run() {
        this.news = [];
        this.initializeRunState(true);
        this.updateData(null);
    }

    public stop() {
        this.setStopState(false);
    }

    public updateData(data: any[]) {

        this._newsService.get().subscribe(news => {
                this.news = news;
            },
            error => this.handleError(error));
    }

    public updateProperties(updatedProperties: any) {

        /**
         * todo
         *  A similar operation exists on the procmman-config-service
         *  whenever the property page form is saved, the in memory board model
         *  is updated as well as the gadget instance properties
         *  which is what the code below does. This can be eliminated with code added to the
         *  config service or the property page service.
         *
         * **/

        const updatedPropsObject = JSON.parse(updatedProperties);

        this.propertyPages.forEach((propertyPage) => {


            for (let x = 0; x < propertyPage.properties.length; x++) {

                for (const prop in updatedPropsObject) {
                    if (updatedPropsObject.hasOwnProperty(prop)) {
                        if (prop === propertyPage.properties[x].key) {
                            propertyPage.properties[x].value = updatedPropsObject[prop];
                        }

                    }
                }
            }
        });

        this.title = updatedPropsObject.title;
        this.setEndPoint(updatedPropsObject.endpoint);
        this.updateData(null);
    }
}
