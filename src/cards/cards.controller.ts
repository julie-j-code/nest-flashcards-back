import { Controller, Get } from '@nestjs/common';
import { Card } from 'src/interfaces/card.interface';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {

    constructor(private cardsService:CardsService){
    }

    @Get()
    async getCards(): Promise<Card[]> {
        const cards = await this.cardsService.getCards();
        return cards;
    }
}
