import { Component } from '@angular/core';

@Component({
  selector: 'lib-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent {
  note: string | undefined;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  saveNote():void{

  }
}
