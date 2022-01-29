import { Component } from '@angular/core';
import { TransferenciaService } from 'src/services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank-angular';

  constructor(private service: TransferenciaService) {}
}
