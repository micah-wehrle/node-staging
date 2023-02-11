"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const words_module_1 = require("./words/words.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(words_module_1.WordsModule);
    app.enableCors();
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map