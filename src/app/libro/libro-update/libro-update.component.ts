import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-update',
  templateUrl: './libro-update.component.html',
  styleUrls: ['./libro-update.component.css']
})
export class LibroUpdateComponent implements OnInit{
  libroPerInsert: Libro = new Libro();
  libroPerUpdate: Libro;
  id : number;
  dataToString:string="";

  constructor(private libroService: LibroService, private router: Router,private route: ActivatedRoute) {
    this.libroPerUpdate=new Libro();
    this.id= this.route.snapshot.paramMap.get("id") as unknown as number;
  }

  ngOnInit(): void {
    ;
    this.libroService.findById(this.id).subscribe({next:libro => {this.libroPerUpdate.id=libro.id;
      this.libroPerUpdate.titolo=libro.titolo;
      this.libroPerUpdate.pagine=libro.pagine;
      this.libroPerUpdate.autore=libro.autore;
      this.libroPerUpdate.dataPubblicazione=libro.dataPubblicazione;
      this.libroPerUpdate.premiato=libro.premiato}});

    this.dataToString=this.libroPerUpdate.dataPubblicazione?.toISOString().split("T")[0] as string;
  }

  aggiorna(): void {
    this.libroPerUpdate.dataPubblicazione=new Date(this.dataToString);
    this.libroService.update(this.libroPerUpdate).subscribe({complete: () => this.router.navigate(["libro/list"]) });
  }
}
