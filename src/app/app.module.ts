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
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoriesComponent },
  { path: 'timer1', component: TimerComponent },
  { path: 'timer2', component: Timer2Component },
  { path: 'students', component: StudentsComponent },
  { path: 'dynamicClick', component: DynamicClickComponent },
  { path: '**', component: PageNotFoundComponent },
 ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ImageComponent,
    InputComponent,
    HomeComponent,
    CategoriesComponent,
    RatingComponent,
    TimerComponent,
    CountDownComponent,
    TimerControlComponent,
    Timer2Component,
    CountDownTimerComponent,
    TimerControllerComponent,
    StudentsComponent,
    DynamicClickComponent,
    PageNotFoundComponent,
    SubstringPipe, // Custom pipe
    DiscountPipe // Custom pipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ScrollingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [Timer2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

