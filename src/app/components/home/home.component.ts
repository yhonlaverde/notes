import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listNote: any;
  listRecoverNote: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.listNote = localStorage.getItem('listNote');
    console.log(this.listRecoverNote);
    if (this.listNote) {
      this.listRecoverNote = JSON.parse(this.listNote);
    } else {
      console.log(
        'No se encontraron datos almacenados bajo la clave "listNote".'
      );
      localStorage.removeItem('listNote');
    }
  }
  newNote(): void {
    this.router.navigate(['/note']);
  }

  deleteNote(id: number): void {
    this.listRecoverNote = this.listRecoverNote.filter(
      (myNote: { id: number }) => myNote.id !== id
    );
    localStorage.setItem('listNote', JSON.stringify(this.listRecoverNote));
    window.location.reload();
  }
}
