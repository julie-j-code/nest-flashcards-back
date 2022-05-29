import { Controller, Get, Post, Body } from '@nestjs/common';

import { Card } from 'src/interfaces/card.interface';
import { CardsService } from './cards/cards.service';
import { SaveAnswersDto } from './dto/save-answers.dto';

@Controller('cards')
export class CardsController {
    constructor(private cardsService:CardsService) { }
    
    @Get()
    async getCards(): Promise<Card[]> {
        const cards = await this.cardsService.getCards();
        return cards;
    }

    @Post()
    async saveAnswers(@Body() saveAnswersDto: SaveAnswersDto) {
        const result = await this.cardsService.saveAnswers(saveAnswersDto);
        console.log('saveAnswers result', result);
        return result;
    }
}