import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Notes {
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
  note  = '';
  listNoteSave: any
  noteContent: [] = []
  private notes: Notes[] = [];
  constructor(private router: Router) {
    const savedData = localStorage.getItem('listNote');
    if (savedData) {
      this.notes = JSON.parse(savedData);
    }
  }
  saveNote() {
    
      const ids = Math.floor((Math.random() * 100) + 1);
      const newData: Notes = { id: ids, notes: this.note };
     
      this.notes.push(newData);
      localStorage.setItem('listNote', JSON.stringify(this.notes));
      alert('Añadistes Correctamente la nota')
      this.returnHome()
    
   
  }

  returnHome(): void {
    this.router.navigate(['/home']);
  }
}
