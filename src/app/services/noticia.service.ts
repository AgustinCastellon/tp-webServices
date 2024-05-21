import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) {


   }

   getNoticias():Observable<any>{
    
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '021a3e3696mshd2005fc39f79f85p18d58cjsn81e67f614f61',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      })
    }
    return this.http.get('https://livescore6.p.rapidapi.com/news/v2/list', httpOptions)
}
getNoticia(id:string):Observable<any>{
  const httpOptions ={
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '021a3e3696mshd2005fc39f79f85p18d58cjsn81e67f614f61',
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }),
    params: {
      id: id
    }
  }
  
  return this.http.get('https://livescore6.p.rapidapi.com/news/v2/detail', httpOptions)
}
}
