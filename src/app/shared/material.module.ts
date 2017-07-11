/**
 * Import all of the Angular Material components that you will use in your application.
 */
import { NgModule } from '@angular/core';
import {
    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule
} from '@angular/material';

const materialModules: any[] = [
    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule
];

@NgModule({
    imports: materialModules,
    exports: materialModules
})

export class MaterialModule { }
