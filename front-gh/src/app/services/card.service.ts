import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/observable';
import { Card } from '../model/card';

@Injectable()
export class CardService {

  private backOffice = environment.back_office;
  private cardsApi = 'api/cards';

  constructor(
    private http: HttpClient
  ) {}

  listCards(page = 1, itemsPerPage = 10): Observable<Card> {
    return this.http.get<Card>(this.backOffice + this.cardsApi + `?page=${page}&limit=${itemsPerPage}`);
  }

  getCard(id): Observable<Card> {
    return this.http.get<Card>(this.backOffice + this.cardsApi + `/${id}`);
  }

  saveCard(card: Card): Observable<any> {
    return this.http.post<Card>(this.backOffice + this.cardsApi, card);
  }

}
