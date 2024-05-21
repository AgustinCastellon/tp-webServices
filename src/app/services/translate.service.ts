import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  constructor(private _http: HttpClient) { }
  public getLanguajes(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': '021a3e3696mshd2005fc39f79f85p18d58cjsn81e67f614f61'
      }),
    }
    return this._http.get("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", httpOptions);
  }
  public translateText(source: string, target: string, text: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': '021a3e3696mshd2005fc39f79f85p18d58cjsn81e67f614f61',
      }),
    }
    const body = new HttpParams()
      .set('q', text)
      .set('target', target)
      .set('source', source);
    return this._http.post("https://google-translate1.p.rapidapi.com/language/translate/v2", body, httpOptions);
  }
}
