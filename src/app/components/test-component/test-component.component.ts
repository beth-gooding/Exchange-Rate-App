import { Component, OnInit } from '@angular/core';
import { ExRate } from '../../models/ExRate';
import { ExchangeRateAPIService } from '../../services/exchange-rate-api.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  exRates:ExRate;

  constructor(private exRateService:ExchangeRateAPIService) { }

  ngOnInit(): void {
    this.exRateService.getExchangeRate().subscribe(exRates => {
      this.exRates = exRates;
      console.log(this.exRates)
    });

  }

}
