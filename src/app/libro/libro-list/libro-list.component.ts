import { LibroService } from './../libro.service';
import { Libro } from './../libro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {
  ngOnInit(): void {
    this.libroService.getAllLibri().subscribe(libriItem => this.listaLibri = libriItem);
  }
  listaLibri: Libro[] = [];

  constructor(private libroService: LibroService) { };
}
