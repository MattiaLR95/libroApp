import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from './../libro.service';
import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.component.html',
  styleUrls: ['./libro-detail.component.css']
})
export class LibroDetailComponent implements OnInit{
  selectedLibro: Libro = new Libro();
  id : number = Number(this.route.snapshot.paramMap.get("id"));

  ngOnInit(): void {
    this.libroService.findById(this.id).subscribe(libro => this.selectedLibro=libro);
  }

  onClick():void{
    this.redirect.navigate(["libro/list"]);
  }

  constructor(private libroService : LibroService, private route: ActivatedRoute, private redirect : Router){}
}
