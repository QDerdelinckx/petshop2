import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { breedModel } from '../_models/breedModel';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  private _context$: BehaviorSubject<breedModel[]>;

  get context$(): Observable<breedModel[]>{
    return this._context$.asObservable();
  }

  constructor(private httpClient: HttpClient) { 
    this._context$ = new BehaviorSubject<breedModel[]>([]);
  }

  refresh():void {
    this.httpClient.get<breedModel[]>(environment.apiEndPoint + '/breed')
    .subscribe(x => this._context$.next(x));
  }

  insert(model: breedModel): Observable<breedModel> {
    return this.httpClient
      .post<breedModel>(environment.apiEndPoint + '/Breed', model)
      .pipe(finalize(() => this.refresh()));
  }

  delete(id: number): Observable<void>{
    return this.httpClient
    .delete<void>(environment.apiEndPoint + "/Breed/" + id)
    .pipe(finalize(() => this.refresh()));
  }

}
