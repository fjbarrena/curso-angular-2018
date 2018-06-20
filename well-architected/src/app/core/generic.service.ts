import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export class GenericService<T> {

  constructor(private readonly httpcli: HttpClient,
              private readonly endpoint: string) { }

  public getAll(): Observable<T[]> {
    return this.httpcli.get<T[]>(this.composeUrl());
  }

  public getOne(id: any): Observable<T> {
    return this.httpcli.get<T>(this.composeUrl() + '/' + id);
  }

  private composeUrl(): string {
    return environment.baseEndpointUrl + '/' + this.endpoint;
  }
}
