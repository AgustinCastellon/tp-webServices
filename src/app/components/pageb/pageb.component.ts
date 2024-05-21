import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarMakerService } from '../../services/car-maker.service';

@Component({
  selector: 'app-pageb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pageb.component.html',
  styleUrl: './pageb.component.css'
})
export class PagebComponent {

  marcas:Array<any>= [];
  models:any
  modelID:number = 0;
  constructor(private carMaker: CarMakerService){

  }
  obtenerMarcas(){
    this.carMaker.getCars().subscribe(
      data => {
        this.marcas = data
      },
      error => {
        console.log(error);
      }
    )
  }
  obtenerModel(index:any){
    this.modelID = this.marcas[index].id;
    this.carMaker.getModelsByID(this.modelID).subscribe(
      data =>{
        this.models = data
      },
      error => {
        console.log(error);
      }
    )
  }
}
