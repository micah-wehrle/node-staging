export declare class WordsService {
    private allWordRegex;
    private dailyWordDatabase;
    isValidWord(word: string): boolean;
    getDailyWord(): string;
    getDailyRansom(): string;
    private getDayIndex;
    generateRansom(seed: number): string;
}
