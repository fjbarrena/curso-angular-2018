import { Component, OnInit } from '@angular/core';
import { MyLoggerService } from '../my-logger.service';

@Component({
  selector: 'app-made-with-love',
  templateUrl: './made-with-love.component.html',
  styleUrls: ['./made-with-love.component.css']
})
export class MadeWithLoveComponent implements OnInit {
  public name: string;

  constructor(private readonly logger: MyLoggerService) {
    this.name = '';
  }

  ngOnInit() {
    this.name = 'Paco';
    this.logger.escribir('He cambiado el nombre a Paco');
  }

}
