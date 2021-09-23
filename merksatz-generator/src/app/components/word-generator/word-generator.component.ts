import { Component, Input, OnInit } from '@angular/core';
import { WordService } from './word.service';

@Component({
  selector: 'word-generator',
  templateUrl: './word-generator.component.html',
  styleUrls: ['./word-generator.component.scss']
})
export class WordGeneratorComponent implements OnInit {

  @Input() startLetter: string = '';
  randomWord: string = '';
  randomWords: string[] = [];

  constructor(private readonly wordService: WordService) { }

  async ngOnInit(): Promise<void> {
    this.randomWords = await this.wordService.getRandomWords('en', this.startLetter).toPromise();
    this.setRandomWord();
  }

  setRandomWord(): void {
    this.randomWord = this.randomWords[Math.ceil(Math.random() * this.randomWords.length)];
  }

}
