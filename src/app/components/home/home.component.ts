import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  longText: any;
  listaRecuperada:any
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.longText = localStorage.getItem('listNote');

    // Si hay datos almacenados bajo esa clave, conviértelos de nuevo a un array
    if (this.longText) {
      this.listaRecuperada = JSON.parse(this.longText);
      console.log('Lista recuperada:', this.listaRecuperada);
    } else {
      console.log(
        'No se encontraron datos almacenados bajo la clave "listNote".'
      );
    }
    console.log(this.longText);
  }
  newNote(): void {
    this.router.navigate(['/note']);
  }

  deleteNote(id: number): void {
    this.listaRecuperada.splice(id,1);
  }
}
