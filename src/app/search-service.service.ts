
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class SearchServiceService {
  constructor(private http: HttpClient) { }

  getSearchResult(data: string) {
    return this.http.get("https://api.unsplash.com/search/photos?query=" + data + "&client_id=sbBsGrbZ5dCT1jmiVOXRh5aulWC20_qfWM-s2L5mJ-U");
  }
}

