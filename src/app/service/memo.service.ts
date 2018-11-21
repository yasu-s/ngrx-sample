import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Memo } from '../model';

/**
 * Service
 */
@Injectable({
  providedIn: 'root'
})
export class MemoService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Memo[]>('./assets/data.json');
  }

}
