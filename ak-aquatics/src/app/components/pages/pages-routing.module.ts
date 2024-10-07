import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
