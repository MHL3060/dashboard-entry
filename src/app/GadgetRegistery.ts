import {GadgetFactory} from 'ngx-dynamic-dashboard';
import {NewsGadgetComponent} from './gadgets/news/news-gadget.component';

export function GadgetRegistry(): () => void {
  return () => {
    GadgetFactory.setComponentType('NewsGadgetComponent', NewsGadgetComponent);
  };
}
