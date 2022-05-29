import { Controller, Get, Post, Body } from '@nestjs/common';
import { CardsService } from './cards.service';
import { Card } from 'src/interfaces/card.interface';
import { SaveAnswersDto } from './../dto/save-answers.dto';
import { FlagDto } from './../dto/flag.dto';

@Controller('cards')
export class CardsController {
    constructor(private cardsService: CardsService) { }
    
    @Get()
    async getCards(): Promise<Card[]> {
        const cards = await this.cardsService.getCards();
        return cards;
    }

    @Post('reset')
    async resetGame(@Body() flag: FlagDto) {
        if (flag.reset) {
            const result = await this.cardsService.resetGame();
            return result;            
        } else {
            return { msg: 'we did nothing, justing saying', date: new Date().toISOString() };
        }
    }
    
    @Post()
    async saveAnswers(@Body() saveAnswersDto: SaveAnswersDto) {
        const result = await this.cardsService.saveAnswers(saveAnswersDto);
        console.log('saveAnswers result', result);
        return result;
    }

}