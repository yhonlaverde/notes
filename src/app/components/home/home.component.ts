import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listNote:any;
  listRecoverNote:any
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.listNote = localStorage.getItem('listNote');
  }
  newNote(): void {
    this.router.navigate(['/note']);
  }

  deleteNote(id: number): void {
    this.listRecoverNote.splice(id,1);
    this.listRecoverNote = this.listRecoverNote.filter((objeto: { id: number; }) => objeto.id !== id);
    localStorage.setItem('listNote', JSON.stringify(this.listRecoverNote));
    window.location.reload()
  }
}
