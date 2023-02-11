import { WordsService } from './services/words/words.service';
export declare class WordsController {
    private wordsService;
    constructor(wordsService: WordsService);
    getDailyData(): {
        success: boolean;
        dailyWord: string;
        ransom: string;
    };
    validateWord(word: string): {
        success: boolean;
        testWord: string;
        isTestWordValid: boolean;
    };
    randomRansom(seed: string): {
        success: boolean;
        ransom: string;
    };
}
