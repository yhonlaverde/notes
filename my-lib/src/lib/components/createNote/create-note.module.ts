import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateNoteComponent } from './create-note.component';


@NgModule({
  declarations:[CreateNoteComponent],
  imports: [
  CommonModule,
  ReactiveFormsModule,
  ],
  exports:
    [CreateNoteComponent]
  
})
export class CreateNoteModule {}
