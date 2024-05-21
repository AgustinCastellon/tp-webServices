import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  texto:string="";
  source:string="";
  target:string="";
  textoTraducido:string="";

  constructor(private translateService: TranslateService){
  }

  obtenerLenguajes(){
    this.translateService.getLanguajes().subscribe(
      results => {
        console.log(results);
      },
      error => {
        console.log(error);
      }
    )
  }
  
  traducirTexto(){
    this.translateService.translateText(this.source, this.target, this.texto).subscribe(
      results => {
        console.log(results);
        this.textoTraducido = results.data.translations[0].translatedText
      },
      error => {
        console.log(error);
      }
    )
  }

}
