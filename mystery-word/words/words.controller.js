"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordsController = void 0;
const common_1 = require("@nestjs/common");
const words_service_1 = require("./services/words/words.service");
let WordsController = class WordsController {
    constructor(wordsService) {
        this.wordsService = wordsService;
    }
    getDailyData() {
        return {
            success: true,
            dailyWord: this.wordsService.getDailyWord(),
            ransom: this.wordsService.getDailyRansom()
        };
    }
    validateWord(word) {
        return {
            success: true,
            testWord: word,
            isTestWordValid: this.wordsService.isValidWord(word),
        };
    }
    randomRansom(seed) {
        let seedAsNum;
        if (seed && typeof seed === 'string' && seed.length > 0) {
            seedAsNum = +seed;
        }
        else {
            seedAsNum = (Math.random() * 1000000) + 1;
        }
        return {
            success: true,
            ransom: this.wordsService.generateRansom(seedAsNum),
        };
    }
};
__decorate([
    (0, common_1.Get)('/daily'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WordsController.prototype, "getDailyData", null);
__decorate([
    (0, common_1.Get)('/validate/:word'),
    __param(0, (0, common_1.Param)('word')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WordsController.prototype, "validateWord", null);
__decorate([
    (0, common_1.Get)('/ransom/:seed'),
    __param(0, (0, common_1.Param)('seed')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WordsController.prototype, "randomRansom", null);
WordsController = __decorate([
    (0, common_1.Controller)('/words'),
    __metadata("design:paramtypes", [words_service_1.WordsService])
], WordsController);
exports.WordsController = WordsController;
//# sourceMappingURL=words.controller.js.map