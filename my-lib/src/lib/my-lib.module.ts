import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MyLibComponent } from './my-lib.component';
import { MyLibRoutingModule } from './my-lib.routing.module';
import { CreateNoteComponent } from './components/createNote/create-note.component';


@NgModule({
  declarations:[MyLibComponent, CreateNoteComponent],
  imports: [
  CommonModule,
  ReactiveFormsModule,
  MyLibRoutingModule,
  ],
})
export class MyLibModule {}
