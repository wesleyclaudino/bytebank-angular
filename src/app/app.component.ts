import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank-angular';
  transferencias: any[] = [];

  transferir($event: any) {
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push(transferencia);
  }
}
