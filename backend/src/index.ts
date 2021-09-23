import express from 'express';
import request from 'request';
import cors from 'cors';

interface Word {
    word: string;
}

const main = async () => {
    const app = express();

    app.use(cors());

    // English words endpoint
    app.get('/en/:startLetter', (req, res) => {
        const url: string =
            `https://www.wordgamedictionary.com/word-lists/words-that-start-with/letter/${req.params.startLetter}/words-that-start-with-${req.params.startLetter}.json`;

        request.get(url, { json: true }, (err, _r, body) => {
            if (err) {
                console.error(err);
            }
            res.send(body.map((w: Word) => w.word));
        });
    });

    const port: number = 5000;
    app.listen(port, () => {
        console.log(`Server is running and listening on port ${port}`)
    })
}

main().catch(err => {
    console.error(err);
});