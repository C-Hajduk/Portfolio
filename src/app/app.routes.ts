import { Routes } from '@angular/router';
import { MainContent } from './main-content/main-content';
import { LegalNotice } from './imprint/legal-notice/legal-notice';

export const routes: Routes = [
    {path: '', component: MainContent},
    {path: 'legalnotice', component: LegalNotice}
];
