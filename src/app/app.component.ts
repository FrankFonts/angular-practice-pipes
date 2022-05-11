import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  payeeName!: string;
  date!: string; // use !: for initialiser with property not declared
  amount!: number;
  height!: number;
  miles!: number;

  car = {
    make: 'Toyota',
    model: 'Yaris',
    year: 2010,
  };

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }

  onNameChange(value: string) {
    this.payeeName = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }
}
