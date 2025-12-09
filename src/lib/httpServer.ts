import express from 'express';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

export class HttpServer {
    private app: express.Application;
    private port: number;

    constructor(port: number = 3000) {
        this.app = express();
        this.port = port;
        this.setupMiddleware();
        this.setupRoutes();
        this.ensureTranscriptDir();
    }

    private setupMiddleware() {
        // Trust the first proxy (Nginx)
        this.app.set('trust proxy', 1);

        // Security headers
        this.app.use(helmet());

        // Rate limiting
        const limiter = rateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100, // Limit each IP to 100 requests per windowMs
            standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
            legacyHeaders: false, // Disable the `X-RateLimit-*` headers
            message: 'Too many requests from this IP, please try again after 15 minutes'
        });

        this.app.use(limiter);
    }

    private ensureTranscriptDir() {
        const path = join(process.cwd(), 'transcripts');
        if (!existsSync(path)) {
            mkdirSync(path, { recursive: true });
        }
    }

    private setupRoutes() {
        // Serve static files from 'transcripts' directory
        this.app.use('/transcripts', express.static(join(process.cwd(), 'transcripts')));

        this.app.get('/', (req, res) => {
            res.send('Project Zomboid Bot Transcript Server Running.');
        });
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log(`HTTP Server listening on port ${this.port}`);
            console.log(`Transcripts available at http://localhost:${this.port}/transcripts/`);
        });
    }
}
