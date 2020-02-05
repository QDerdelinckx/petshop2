import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimalModel } from '../_models/animalModel';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private _context$: BehaviorSubject<AnimalModel[]>;

  get context$(): Observable<AnimalModel[]> {
    return this._context$.asObservable();
  } 

  constructor(private httpClient: HttpClient) { 
    this._context$ = new BehaviorSubject<AnimalModel[]>([]);
  }

  refresh():void {
    this.httpClient.get<AnimalModel[]>(environment.apiEndPoint + '/animal')
      .subscribe(x => this._context$.next(x));
  }

  delete(name): Observable<void>{
    return this.httpClient
      .delete<void>(environment.apiEndPoint + '/animal/' + name)
      .pipe(finalize(() => this.refresh()));
  }

  insert(model: AnimalModel): Observable<AnimalModel> {
    return this.httpClient
      .post<AnimalModel>(environment.apiEndPoint + '/animal', model)
      .pipe(finalize(() => this.refresh()));
  }
}
