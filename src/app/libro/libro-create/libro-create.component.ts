import { LibroService } from './../libro.service';
import { Component } from '@angular/core';
import { Libro } from '../libro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-create',
  templateUrl: './libro-create.component.html',
  styleUrls: ['./libro-create.component.css']
})
export class LibroCreateComponent {
  libroPerInsert: Libro = new Libro();

  constructor(private libroService: LibroService, private router: Router) { }

  inserisciNuovo(libroInput: Libro): void {
    this.libroService.create(libroInput).subscribe({ next: libro => this.libroPerInsert = libro, complete: () => this.router.navigate(["libro/list"]) });
  }
}
