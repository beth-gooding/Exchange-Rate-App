import { Component, OnInit } from '@angular/core';
import { ExRate } from '../../../models/ExRate';
import { ExchangeRateAPIService } from '../../../services/exchange-rate-api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  exRates: ExRate[];
  constructor(private exRateService:ExchangeRateAPIService) { }

  ngOnInit(): void {
    this.exRateService.getExchangeRate(['GBP', 'EUR', '1']).subscribe(result => {
      this.exRates = [];
      this.exRates.push(result);
    })
  }

  sendRequest(x:any) {
    this.exRateService.getExchangeRate(x).subscribe(result => {
      this.exRates.push(result);
      console.log(this.exRates);
    })
   
  }

}
