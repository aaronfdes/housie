import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lockdown-housie';
  numbers: Array<number>;
  calledNumbers: Array<CalledNumber>;
  currentNumber: number;


  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  public newGame() {
    this.currentNumber=null;
    this.initializeNumbers();
    this.shuffleArray();
  }

  public callNumber() {
    this.currentNumber = this.numbers.pop();
    this.calledNumbers[this.currentNumber-1].called=true;
    console.log(this.currentNumber);
  }

  private initializeNumbers() {
    this.numbers = [];
    this.calledNumbers = [];
    for (var i = 1; i <= 90; i++) {
      this.numbers[i - 1] = i;
      this.calledNumbers[i - 1] = new CalledNumber(i, false);
    }
  }

  private shuffleArray() {
    for (let i = this.numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.numbers[i], this.numbers[j]] = [this.numbers[j], this.numbers[i]];
    }
  }

}

class CalledNumber {
  constructor(public number: number, public called: boolean) { }
}
