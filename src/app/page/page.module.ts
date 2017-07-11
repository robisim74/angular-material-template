import { NgModule } from '@angular/core';

import { PageRoutingModule } from './page-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PageComponent } from './page.component';

@NgModule({
    imports: [
        PageRoutingModule,
        SharedModule
    ],
    declarations: [PageComponent]
})
export class PageModule { }
