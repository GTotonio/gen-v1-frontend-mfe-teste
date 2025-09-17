import { Routes } from '@angular/router';
import { Mfe } from './mfe/mfe';

export const routes: Routes = [
    { path: '**', component: Mfe }
];
