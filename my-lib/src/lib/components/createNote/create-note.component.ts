import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'lib-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent {
  note!: string;

  constructor(private router: Router) {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  saveNote(): void {
    const listNote = [];
    const idNote = Math.random() * 100;
    listNote.push({ id: idNote.toFixed(), note: this.note });

    localStorage.setItem('listNotes', JSON.stringify(listNote));
  }

  returnHome(): void {
    this.router.navigate(['/home']);
  }
}
