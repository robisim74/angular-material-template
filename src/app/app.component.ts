import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    navItems = [
        { name: 'Home', route: 'home' },
        { name: 'Page', route: 'page' }
    ];

    constructor(public title: Title) { }

    ngOnInit() {
        this.title.setTitle('Angular Material Template');
    }

}
