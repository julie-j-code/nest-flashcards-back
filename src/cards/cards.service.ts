import { Injectable } from '@nestjs/common';
import { Card } from 'src/interfaces/card.interface';
import { Answer } from 'src/interfaces/answer.interface';

@Injectable()
export class CardsService {
    answers: Answer[] = [];
    cards = [
        {id: 1, question: 'What is the language of the web?', answer: 'JavaScript'},
        {id: 2, question: 'What is the the coolest job?', answer: 'Programmer'},
        {id: 3, question: 'What is an interface?', answer: 'A contract'},
        {id: 4, question: 'Is push() mutating an array?', answer: 'Unfortunatly yes'},
    ];

    selectCardsUserFailedToAnswer() {
        // the first time, send all cards as user didn't have a chance to answer right nor wrong
        if (this.answers.length === 0) return this.cards;
        const cardsUserFailedToAnswer = this.answers.filter(c => c.isRight === false);
        return cardsUserFailedToAnswer.map(c => c.card);
    }

    getCards():Promise<Card[]> {
        return new Promise(resolve => {
            resolve(this.selectCardsUserFailedToAnswer());
        });
    }

    saveAnswers(answers): Promise<{ msg: string, date: string }> {
        return new Promise(resolve => {
            this.answers = answers;
            resolve({ msg: 'answers saved', date: new Date().toISOString() })
        });
    }
}