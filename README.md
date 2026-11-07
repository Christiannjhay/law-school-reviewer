# Law School Reviewer

A mobile- and iPad-friendly Next.js reviewer. Pick a subject on the homepage:

- **Criminal Procedure** (`/crimpro`): Rules 115–126, built from *Criminal Procedure Reviewer: Rules 115–126* (based on Salvador, *Criminal Procedure*, 2019, and A.M. No. 15-06-10-SC).
- **Property** (`/property`): study notes from Rabuya, *Pre-Bar Reviewer in Civil Law* (2021), pp. 156–240; mock board problems with provided answers from *QUAMTO Civil Law* (UST Golden Notes 2026), pp. 76–121; plus MCQ and True or False.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Criminal Procedure review modes

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

## Property review modes

| Route | Mode |
|---|---|
| `/property/notes/[id]` | Study notes by topic, with page references |
| `/property/mock-board` | Essay problems, with random mock sets and self-grading |
| `/property/mcq` | Multiple choice |
| `/property/true-false` | True or False |
| `/property/codal` | Codal drill on Arts. 414–773 of the Civil Code: separate MCQ and True or False banks, not mixed with the sets above |

Content lives in `data/` (one file per question bank), with Property under `data/property/`. Progress is stored in the browser's localStorage, per device.
