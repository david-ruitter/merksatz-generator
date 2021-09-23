import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class WordService {

    baseUrl: string = "http://localhost:5000";

    constructor(private readonly http: HttpClient) { }

    getRandomWords(locale: string, startLetter: string): Observable<string[]> {
        startLetter = startLetter.toLowerCase();
        locale = locale.toLowerCase();

        const url: string = `${this.baseUrl}/${locale}/${startLetter}`;
        return this.http.get<string[]>(url);
    }
}