import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-delete',
  templateUrl: './libro-delete.component.html',
  styleUrls: ['./libro-delete.component.css']
})
export class LibroDeleteComponent implements OnInit{
  selectedLibro: Libro = new Libro();
  id : number = Number(this.route.snapshot.paramMap.get("id"));


  ngOnInit(): void {
    this.libroService.findById(this.id).subscribe(libro => this.selectedLibro=libro);
  }

  onClick():void{
    this.redirect.navigate(["libro/list"]);
  }
  eliminaElemento(idInput:number):void{
    this.libroService.delete(idInput).subscribe(libro => libro=true);
    this.redirect.navigate(["libro/list"]);
  }

  constructor(private libroService : LibroService, private route: ActivatedRoute, private redirect : Router){}

}
