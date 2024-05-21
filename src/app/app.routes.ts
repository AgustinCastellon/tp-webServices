import { Routes } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { PageaComponent } from './components/pagea/pagea.component';
import { PagebComponent } from './components/pageb/pageb.component';
import { PagecComponent } from './components/pagec/pagec.component';

export const routes: Routes = [
    {
        path: 'page1',
        component: Page1Component
    },
    {
        path: 'pagea',
        component: PageaComponent
    },
    {
        path: 'pageb',
        component: PagebComponent
    },
    {
        path: 'pagec',
        component: PagecComponent
    },
];
