"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpServer = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const fs_1 = require("fs");
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
class HttpServer {
    constructor(port = 3000) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.setupMiddleware();
        this.setupRoutes();
        this.ensureTranscriptDir();
    }
    setupMiddleware() {
        // Security headers
        this.app.use((0, helmet_1.default)());
        // Rate limiting
        const limiter = (0, express_rate_limit_1.default)({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100, // Limit each IP to 100 requests per windowMs
            standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
            legacyHeaders: false, // Disable the `X-RateLimit-*` headers
            message: 'Too many requests from this IP, please try again after 15 minutes'
        });
        this.app.use(limiter);
    }
    ensureTranscriptDir() {
        const path = (0, path_1.join)(process.cwd(), 'transcripts');
        if (!(0, fs_1.existsSync)(path)) {
            (0, fs_1.mkdirSync)(path, { recursive: true });
        }
    }
    setupRoutes() {
        // Serve static files from 'transcripts' directory
        this.app.use('/transcripts', express_1.default.static((0, path_1.join)(process.cwd(), 'transcripts')));
        this.app.get('/', (req, res) => {
            res.send('Project Zomboid Bot Transcript Server Running.');
        });
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`HTTP Server listening on port ${this.port}`);
            console.log(`Transcripts available at http://localhost:${this.port}/transcripts/`);
        });
    }
}
exports.HttpServer = HttpServer;
//# sourceMappingURL=httpServer.js.map