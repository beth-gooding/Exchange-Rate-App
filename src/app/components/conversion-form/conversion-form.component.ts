import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-conversion-form',
  templateUrl: './conversion-form.component.html',
  styleUrls: ['./conversion-form.component.css']
})
export class ConversionFormComponent implements OnInit {
  @Output() requestParams: EventEmitter<any> = new EventEmitter();
  amountToConvert:number;
  baseCurrency:string;
  targetCurrency:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    let base:string = this.baseCurrency;
    let target:string = this.targetCurrency;
    let amount:string = String(this.amountToConvert);
    let urlPieces:string[] = [base, target, amount];

    this.requestParams.emit(urlPieces);
  }

}
