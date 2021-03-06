import { ProductService } from './service/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ProductsComponent } from './components/products/products.component';
@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        ProductsComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent},
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'products', component: ProductsComponent},
            { path: 'toys', component: ProductsComponent},
            { path: 'sport', component: ProductsComponent},
            { path: 'sports/electricbike-Allegro', component: ProductsComponent},
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        ProductService
    ]
})
export class AppModuleShared {
}
