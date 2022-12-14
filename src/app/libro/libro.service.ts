import { Libro } from './libro';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private LIBRO_MOCK:Libro[]=[
    {
    id:1,
    titolo:"libro1",
    pagine:300,
    autore:"autore1",
    dataPubblicazione:new Date("2000-01-01"),
    premiato:true
    },
    {
    id:2,
    titolo:"libro2",
    pagine:300,
    autore:"autore2",
    dataPubblicazione:new Date("2001-01-01"),
    premiato:false
    },
    {
    id:3,
    titolo:"libro3",
    pagine:300,
    autore:"autore3",
    dataPubblicazione:new Date("2002-01-01"),
    premiato:true
    },
    {
    id:4,
    titolo:"libro4",
    pagine:500,
    autore:"autore4",
    dataPubblicazione:new Date("2003-01-01"),
    premiato:false
    }
  ];

  listaId:number[]=this.LIBRO_MOCK.map(a => a.id!);

  getAllLibri():Observable<Libro[]>{
    return of(this.LIBRO_MOCK);
  }

  create(libroInput:Libro):Observable<Libro>{
    libroInput.id=Math.max.apply(null,this.listaId)+1;
    this.LIBRO_MOCK.push(libroInput)
    return of(libroInput);
  }

  findById(idInput:number):Observable<Libro>{
    let libro = this.LIBRO_MOCK.find(libro => libro.id == idInput) as Libro;
    return of({
      id:libro?.id,
      titolo:libro?.titolo,
      pagine:libro?.pagine,
      autore:libro?.autore,
      dataPubblicazione:libro?.dataPubblicazione,
      premiato:libro.premiato
    });
  }

  delete(idInput:number):Observable<boolean>{
    let libro = this.LIBRO_MOCK.find(libro => libro.id == idInput);
    for (let i=0 ; i<this.LIBRO_MOCK.length ; i++) {
      if (idInput === this.LIBRO_MOCK[i].id) {
        this.LIBRO_MOCK.splice(i,1);
        return of(true);
      }
    }
    return of(false);
  }

  update(libroInput:Libro):Observable<Libro>{
    let libro = this.LIBRO_MOCK.find(libro => libro.id == libroInput.id) as Libro;
    libro.id=libroInput.id;
    libro.titolo=libroInput.titolo;
    libro.pagine=libroInput.pagine;
    libro.autore=libroInput.autore;
    libro.dataPubblicazione=libroInput.dataPubblicazione;
    libro.premiato=libroInput.premiato;

    return of(libro);
  }

  constructor() { }
}
