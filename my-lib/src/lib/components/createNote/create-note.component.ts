import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Data {
  id: number;
  notes: string;
  // Otras propiedades aquí
}
@Component({
  selector: 'lib-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})

export class CreateNoteComponent {
  note :any;
  listNoteSave: any
  noteContent: [] = []
  private data: Data[] = [];
  constructor(private router: Router) {
    const savedData = localStorage.getItem('listNote');
    if (savedData) {
      this.data = JSON.parse(savedData);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  saveNote() {
    const ids = Math.floor((Math.random() * 100) + 1);
    const nuevoDato: Data = { id: ids, notes: this.note }; // Puedes crear datos personalizados aquí
   
    this.data.push(nuevoDato);
    localStorage.setItem('listNote', JSON.stringify(this.data));
    console.log(this.data)
    alert('Añadistes Correctamente la nota')

    this.returnHome()
  }

  returnHome(): void {
    this.router.navigate(['/home']);
  }
}
