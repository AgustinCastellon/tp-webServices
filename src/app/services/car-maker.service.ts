import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarMakerService {

  constructor(private http: HttpClient) { 

  }

  getCars():Observable<any>{
    const httpOptions={
    headers: new HttpHeaders ({
      'X-RapidAPI-Key': '021a3e3696mshd2005fc39f79f85p18d58cjsn81e67f614f61',
      'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
    })
  }
    return this.http.get('https://car-specs.p.rapidapi.com/v2/cars/makes', httpOptions)
  }

  getModelsByID(id:number):Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders ({
        'X-RapidAPI-Key': '021a3e3696mshd2005fc39f79f85p18d58cjsn81e67f614f61',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      })
    }
    return this.http.get('https://car-specs.p.rapidapi.com/v2/cars/makes/'+ id +'/models', httpOptions)
  }

}
