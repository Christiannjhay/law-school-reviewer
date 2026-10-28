# CrimPro Reviewer · Rules 115–126

A mobile- and iPad-friendly Next.js reviewer for Rules 115–126 of the Revised Rules of Criminal Procedure, built from
*Criminal Procedure Reviewer: Rules 115–126* (based on Salvador, *Criminal Procedure*, 2019, and A.M. No. 15-06-10-SC).

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Review modes

| Route | Mode |
|---|---|
| `/rules/[115-126]` | Full study notes with mnemonic callouts and table of contents |
| `/cram` | Every mnemonic and period on one page |
| `/compare` | Distinction tables with cover mode |
| `/flashcards` | Flip cards with Leitner spaced-repetition boxes |
| `/quiz` | Multiple choice with explanations |
| `/true-false` | True or False |
| `/identification` | Type-the-answer (lenient checking) |
| `/mnemonics` | Recall, enumerate (typed, auto-checked) and browse |
| `/cases` | Case-doctrine matching quiz and searchable digest list |
| `/periods` | Periods & numbers drill and table |
| `/essays` | Bar-style situational problems with model answers and self-grading |
| `/exam` | Timed mixed mock exam with per-rule breakdown |
| `/review` | Retake only what you missed |
| `/search`, `/progress` | Global search; stats, streak and exam history |

Content lives in `data/` (one file per question bank). Progress is stored in the browser's localStorage, per device.
