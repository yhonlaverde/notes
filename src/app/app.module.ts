import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NoteComponent } from './components/note/note.component';

// const ROUTES: Routes = [
//   { path: '', component: HomeComponent },
//   {path: 'note', component: NoteComponent},
//   // {
//   //   path: '',
//   //   pathMatch: 'full',
//   //   redirectTo: ''
//   // },
//   // {
//   //   children: [
//   //     {
//   //       path: 'note',
//   //       loadChildren: () =>
//   //         import('my-lib/src/lib/my-lib.module').then((m) => m.MyLibModule),
//   //     },
//   //   ],
//   // },
// ];

@NgModule({
  declarations: [AppComponent, HomeComponent, NoteComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
      AppRoutingModule,
    // RouterModule.forRoot(ROUTES),
    HttpClientModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
