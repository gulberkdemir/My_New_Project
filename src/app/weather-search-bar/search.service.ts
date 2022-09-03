import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // @ts-ignore
  searchResult = new Subject<string>();

  constructor() { }
}
