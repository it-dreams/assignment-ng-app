import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HomeModule } from './components/pages/home/home.module';
import { CategoriesModule } from './components/pages/categories/categories.module';
import { TimerModule } from './components/pages/timer/timer.module';
import { Timer2Module } from './components/pages/timer2/timer2.module';
import { StudentsModule } from './components/pages/students/students.module';
import { DynamicClickModule } from './components/pages/dynamic-click/dynamic-click.module';
import { PageNotFoundModule } from './components/pages/page-not-found/page-not-found.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ButtonComponent } from './components/core/button/button.component';
import { ImageComponent } from './components/core/image/image.component';
import { InputComponent } from './components/core/input/input.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { RatingComponent } from './components/pages/categories/rating/rating.component';
import { TimerComponent } from './components/pages/timer/timer.component';
import { CountDownComponent } from './components/pages/timer/count-down/count-down.component';
import { TimerControlComponent } from './components/pages/timer/timer-control/timer-control.component';
import { Timer2Component } from './components/pages/timer2/timer2.component';
import { CountDownTimerComponent } from './components/pages/timer2/count-down-timer/count-down-timer.component';
import { TimerControllerComponent } from './components/pages/timer2/timer-controller/timer-controller.component';
import { StudentsComponent } from './components/pages/students/students.component';
import { DynamicClickComponent } from './components/pages/dynamic-click/dynamic-click.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

// Custom Pipe
import { SubstringPipe } from './pipe/substring.pipe';
import { DiscountPipe } from './pipe/discount.pipe';

// Services 
import { Timer2Service } from './services/timer2.service';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home',
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'category', 
    loadChildren: () => import('./components/pages/categories/categories.module').then(m => m.CategoriesModule)   
  },
  { 
    path: 'timer1', 
    loadChildren: () => import('./components/pages/timer/timer.module').then(m => m.TimerModule) 
  },
  { 
    path: 'timer2', 
    loadChildren: () => import('./components/pages/timer2/timer2.module').then(m => m.Timer2Module) 
  },
  { 
    path: 'students', 
    loadChildren: () => import('./components/pages/students/students.module').then(m => m.StudentsModule) 
  },
  { 
    path: 'dynamicClick', 
    loadChildren: () => import('./components/pages/dynamic-click/dynamic-click.module').then(m => m.DynamicClickModule) 
  },
  { 
    path: '**', 
    loadChildren: () => import('./components/pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) 
  },
 ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ImageComponent,
    InputComponent,
    // HomeComponent,
    // CategoriesComponent,
    // RatingComponent,
    // TimerComponent,
    // CountDownComponent,
    // TimerControlComponent,
    // Timer2Component,
    // CountDownTimerComponent,
    // TimerControllerComponent,
    // StudentsComponent,
    // DynamicClickComponent,
    // PageNotFoundComponent,
    SubstringPipe, // Custom pipe
    DiscountPipe // Custom pipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
    FormsModule,
    ScrollingModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    HomeModule,
    CategoriesModule,
    TimerModule,
    Timer2Module,
    StudentsModule,
    DynamicClickModule,
    PageNotFoundModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [Timer2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

