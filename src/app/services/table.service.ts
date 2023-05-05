import { Injectable } from '@angular/core';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})

export class TableService {
  books:Book[]=[
    {
    id:1,
    title:"To Kill a Mockingbird",
    author:"Harper Lee",
    genre:"Bildungsroman, Historical Fiction",
    description:"This Pulitzer Prize-winning novel is a classic of modern American literature",
    publicationYear:1960
  },
  {
    id:2,
    title:"1984",
    author:"George Orwell",
    genre:"Dystopian Fiction, Political Fiction",
    description:"This dystopian novel is set in a totalitarian future society and is considered a classic of modern literature.",
    publicationYear:1949
  },
  {
    id:3,
    title:"The Catcher in the Rye",
    author:"J.D. Salinger",
    genre:"Bildungsroman, Coming-of-Age Fiction",
    description:"This novel is a coming-of-age story that explores themes such as teenage angst, alienation, and identity.",
    publicationYear:1951
  },
  {
    id:4,
    title:"Pride and Prejudice",
    author:"Jane Austen",
    genre:"Romance",
    description:"This classic novel is a romantic comedy of manners set in 19th-century England.",
    publicationYear:1813
  },
  {
    id:5,
    title:"The Great Gatsby",
    author:"F. Scott Fitzgerald",
    genre:"Tragedy, Romance",
    description:"This novel is set in the Roaring Twenties and explores themes such as wealth, love, and the American Dream.",
    publicationYear:1925
  }
];
  
  constructor() { }

  getAllBooks():Book[]{
    return this.books;
  }

  updateBook(book:Book){
    let bookToUpdate=this.books.find(x=>x.id==book.id);
    bookToUpdate=book;
  }

}
