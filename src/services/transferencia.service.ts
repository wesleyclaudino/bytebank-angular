import { Transferencia } from './../app/model/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: any[];
  private urlApi = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.urlApi);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.adicionarDataTransferencia(transferencia);
    return this.httpClient.post<Transferencia>(this.urlApi, transferencia);
  }

  private adicionarDataTransferencia(transferencia: any) {
    transferencia.data = new Date();
  }
}
