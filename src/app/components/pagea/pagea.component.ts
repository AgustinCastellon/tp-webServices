import { Component } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-pagea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagea.component.html',
  styleUrl: './pagea.component.css'
})
export class PageaComponent {
  sanitizedContent: SafeHtml = '';
  noticias:Array<any>= [];
  noticia:any = {};
  constructor(private noticiaService : NoticiaService, private sanitizer: DomSanitizer) {
    
   }

   obtenerNoticias(){
    this.noticiaService.getNoticias().subscribe(
      data => {
      this.noticias = data.homepageArticles[0].articles
    },
  error => {
    console.log(error);
  }
  )}

  obtenerNoticia(n:any){
    const noticiaID = this.noticias[n].id;
    this.noticiaService.getNoticia(noticiaID).subscribe(
      data =>{
        this.noticia = data;
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.noticia.article.body[0].data.content);
      },
      error => {
        console.log(error);
      }
    )
  }

}
