import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
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

// Services 
import { Timer2Service } from './services/timer2.service';
import { CoreModule } from './components/core/core-module.module';

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
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    CategoriesModule,
    TimerModule,
    Timer2Module,
    StudentsModule,
    DynamicClickModule,
    PageNotFoundModule,
    CoreModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [Timer2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

