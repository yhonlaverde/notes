import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

// const ROUTES: Routes = [
//   {path: '', component: HomeComponent},
//   {path: 'note', loadChildren: () => import('my-lib').then((m) =>m.MyLibModule)},
//   // {
//   //   path: '',
//   //   pathMatch: 'full',
//   //   redirectTo: 'note'
//   // },
//   // {
   
//   //   children:[{
//   //     path:'note',
//   //     loadChildren: () => import('my-lib').then((m) => m.MyLibModule)
//   //   }]
//   // }
// ]

@NgModule({
  declarations: [AppComponent,HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(ROUTES,{
    //   initialNavigation: 'enabledBlocking',
    //   paramsInheritanceStrategy: 'always',
    // }),
    HttpClientModule,
    
  ],
  providers: [],
  exports: [
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
