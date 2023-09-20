import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MyLibComponent } from './my-lib.component';
import { MyLibRoutingModule } from './my-lib.routing.module';
import { CreateNoteModule } from './components/createNote/create-note.module';


@NgModule({
  declarations:[MyLibComponent],
  imports: [
  CommonModule,
  ReactiveFormsModule,
  MyLibRoutingModule,
  CreateNoteModule
  ],
})
export class MyLibModule {}
