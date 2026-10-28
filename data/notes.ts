import type { RuleId } from "@/lib/types";

/**
 * Study notes per rule, restructured from "Criminal Procedure Reviewer:
 * Rules 115–126" (based on Salvador, Criminal Procedure, 2019, and the
 * Revised Guidelines for Continuous Trial, A.M. No. 15-06-10-SC).
 * Blockquotes render as mnemonic callouts.
 */
export const NOTES: Record<RuleId, string> = {
  115: `
## Overview
Section 1 lists **nine rights of the accused** at trial. Most restate Article III, Sections 12, 14 and 17 of the 1987 Constitution.

> **Mnemonic (a)–(i):** "In Its Purest Truth, Every Criminal Can Seek Appeal"

| Letter | Right | Sec. 1 |
|---|---|---|
| **In** | Presumed **In**nocent until proven guilty beyond reasonable doubt | (a) |
| **Its** | **I**nformed of the nature and cause of the accusation | (b) |
| **Purest** | **P**resent and defend in person and by counsel, arraignment to promulgation | (c) |
| **Truth** | **T**estify in his own behalf (cross limited to matters on direct; silence not prejudicial) | (d) |
| **Every** | **E**xempt from being compelled to be a witness against himself | (e) |
| **Criminal** | **C**onfront and cross-examine witnesses | (f) |
| **Can** | **C**ompulsory process for witnesses and evidence | (g) |
| **Seek** | **S**peedy, impartial and public trial | (h) |
| **Appeal** | **A**ppeal in cases and manner allowed by law | (i) |

## (a) Presumption of innocence
- A **constitutional right** (Art. III, Sec. 14[2]), not a mere procedural tool. It is **not overcome by the presumption of regularity**, only by proof beyond reasonable doubt (*People v. Lagmay*).
- **Purpose:** to balance an uneven contest between the lone individual and the State with all its resources (*People v. Berroya*).
- **Onus probandi** is on the State. Proof beyond reasonable doubt means **moral certainty**, not absolute certainty (Rule 133, Sec. 2). It covers (1) every element of the crime, (2) the accused's participation and (3) the identity of the offender.
- The prosecution relies on the **strength of its own evidence**, not the weakness of the defense. If the State fails to discharge its burden, the court must acquit even if the defense is weak.
- ***In dubiis reus est absolvendus:*** all doubts are resolved in favor of the accused.
- **Two-inference rule:** when circumstances allow two inferences, one consistent with innocence and one with guilt, the court must acquit.
- **Equipoise rule:** when the evidence is evenly balanced, the scales tilt to the accused, because the party with the burden of proof loses (*People v. Dimalanta*).

> **Circumstantial evidence suffices — "MPC":** **M**ore than one circumstance; the facts behind the inferences are **P**roven; the **C**ombination produces conviction beyond reasonable doubt, forming an unbroken chain pointing to the accused alone.

## (b) Right to be informed of the nature and cause of the accusation
- Due process requires a formal accusation, notice, and a chance to answer. The accused is presumed to have **no independent knowledge** of the facts, so **every element must be alleged** in the information.
- The information must state the **name of the accused, the designation of the offense, and the acts or omissions** constituting it (Rule 110, Sec. 6).
- A **missing averment** (e.g., the victim's age under RA 7610) is **cured** when the complaint or the prosecutor's resolution containing it is attached to the information and forms part of the record.
- The accused is formally informed at arraignment (Rule 116). In **multiple cases**, the Revised Guidelines allow a **waiver of the reading** of the information, with the express consent of the accused and counsel, after the court explains it in a language he knows.
- The right **not to be convicted of facts not alleged** in the information **cannot be waived**.

### Variance doctrine
- No conviction for an offense not charged or not necessarily included in the charge. A variance is **fatal only if material and prejudicial** to substantial rights.
- Fatal examples: BP 22 with a **different check** (identity and date) proved; RA 3019 Sec. 3(e) with a **different mode** found (*Burgos v. Sandiganbayan*); falsification to evade taxes when the charge was damage to AFPSLAI (*Andaya v. People*).
- Charged with **selling** drugs but **possession** is proved? Conviction for possession stands, because the offense charged necessarily includes the offense proved.

## (c) Right to be present and to counsel
### Right to counsel
- Counsel offsets the imbalance against the State's prosecutorial machinery. Even an intelligent layman may be convicted "not because he is guilty but because he does not know how to establish his innocence" (*People v. Holgado*).
- It means **efficient and truly decisive** legal assistance, not perfunctory representation. Counsel who stays silent during custodial investigation, or a counsel de oficio who never presents evidence, violates the right.
- **Duration:** from custodial investigation (Art. III, Sec. 12) through trial (Sec. 14) and on appeal.
- **Where the Rules provide for counsel:** Rule 112, Sec. 7 (waiver of Art. 125 RPC with counsel); Rule 113, Sec. 14 (counsel may visit the detainee at any hour); Rule 115, Sec. 1(c); Rule 116, Secs. 6–7 (court informs the accused and appoints counsel de oficio); Rule 122, Sec. 13 (clerk asks a confined appellant); Rule 124, Sec. 2 (CA appoints counsel when the appellant is confined, has no counsel de parte, or signed the notice of appeal himself).
- **Self-representation** is allowed upon motion when the court finds the accused can properly protect his rights without counsel.

### Counsel de parte vs. counsel de oficio
- The right to counsel is immutable, but the **choice of counsel de parte is not absolute**. A court may appoint counsel de oficio when counsel de parte is absent, so the trial proceeds under the continuous trial system (*People v. Larrañaga*; *People v. Serzo*). Courts need not wait indefinitely for the accused's pleasure.
- **When the court may restrict the choice:** the accused insists on a lawyer he **cannot afford**; the chosen lawyer is **not a member of the bar**; or the lawyer **declines for a valid reason** (e.g., conflict of interest).
- **Valid waiver of counsel de parte:** (1) not contrary to law, public order, public policy, morals or good customs; (2) not prejudicial to a third person; (3) unequivocal, knowing and intelligent.

### Presence during trial
- The accused has the right to be present **only at his own trial**, not at the trial of a co-accused.
- **Express waiver:** under the stipulations of his bail.

> **When presence is mandatory — "API":** **A**rraignment; **P**romulgation of judgment (except for a light offense, where counsel or a representative suffices, or promulgation in absentia); **I**dentification by prosecution witnesses.

- Exception to the identification rule: the accused **unqualifiedly admits in open court** that he is the person named in the information. A vague admission is not enough (*Carredo v. People*).
- **Implied waiver:** unjustified absence from a trial date he had notice of waives presence **for that date only**.
- **Escapee:** waives presence on **all subsequent dates** until custody is regained. An accused who escapes, jumps bail or flees abroad **loses standing in court** and cannot seek relief until he surrenders.

> **Trial in absentia — "ANU":** the accused was **A**rraigned; he was duly **N**otified; his failure to appear is **U**njustified.

## (d) Right to testify in his own behalf
- If the accused testifies, he may be cross-examined on matters stated on direct or connected with them. He **cannot refuse** questions that incriminate him for the **offense charged**, but **may refuse** those incriminating him for a **different offense** (e.g., estafa in a murder trial) (*People v. Ayson*).
- Evidence the accused willfully suppresses is **disputably presumed adverse** if produced (Rule 131, Sec. 3).

## (e) Right against self-incrimination
| | Ordinary witness | Accused |
|---|---|---|
| Must obey subpoena, take stand, be sworn? | Yes | No. He can refuse to take the stand at all |
| When invoked | Only when an incriminating question is actually asked | At the outset: refuses to testify altogether |
| Effect of silence | — | Not used against him in any manner |

- Covers only **testimonial compulsion**, not mechanical acts. **Not covered:** DNA samples (*Herrera v. Alba*), bodily substances, physical examination for gonorrhea (*US v. Tan Teng*), morphine forced out of the mouth (*US v. Ong Siu Hong*), trying on pants (*People v. Otadora*), pregnancy test (*Villaflor v. Summers*).
- **Covered:** compelling an accused to **write samples of his handwriting**, because writing uses the intellect (*Beltran v. Samson*). Comparing his existing genuine writings is allowed.

> **Mnemonic:** "Body is fair, Brain is spared."

## (f) Right to confrontation and cross-examination
- **Two purposes:** (1) test the witness's testimony through cross-examination; (2) let the judge observe the witness's deportment (*People v. Seneris*).
- A **personal right** that can be waived expressly or impliedly. It requires only an **opportunity** to cross-examine, not actual cross-examination.
- **Cross-examination not completed:**
  - Fault of the party presenting the witness, or of the witness: the **direct testimony is stricken**.
  - Fault of the cross-examiner (repeated absences, five chances missed): the **direct testimony stays** (*Fulgado v. CA*).
  - Death of the witness with no one at fault: the direct testimony is **not automatically stricken**; the court weighs it.

> **Former testimony as an exception — "DOUU + 2S + C":** the witness is **D**eceased, **O**ut of the Philippines or cannot be found with due diligence, **U**navailable, or otherwise **U**nable to testify; the testimony was given in another case with the **S**ame parties and **S**ame subject matter; with **C**hance to cross.

- Conditional examination of witnesses and depositions (Rule 119, Secs. 12, 13, 15) are further exceptions.

## (g) Right to compulsory process
- **Subpoena ad testificandum** compels attendance to testify; **subpoena duces tecum** compels production of books, documents or things (Rule 21).
- A witness who fails to obey without adequate cause may be **arrested on a warrant** and is liable for **contempt**.
- **Bench warrant:** issued directly by a judge to arrest a person who disobeyed a subpoena or failed to appear. Key requisite: the absent party was **duly notified** and **unjustifiably** failed to attend.

## (h) Right to speedy, impartial and public trial
### Speedy trial vs. speedy disposition
Both are **relative and flexible**, violated by vexatious, capricious and oppressive delays, or by unjustified postponements.

| | Speedy trial (Art. III, Sec. 14[2]) | Speedy disposition (Art. III, Sec. 16) |
|---|---|---|
| Scope | Criminal trial | All judicial, quasi-judicial and administrative bodies, before, during and after trial |
| When invoked | Before trial, via motion to dismiss (Rule 119, Sec. 9) | Any time during the pendency of the case |

> **Balancing test — "LRAP" ("Late Reasons Are Prejudicial"):** **L**ength of delay; **R**easons for delay; **A**ssertion or failure to assert the right; **P**rejudice to the accused.

- The Ombudsman's **fact-finding period** counts together with the preliminary investigation if the total is inordinate. *(But see Cagang under Rule 119, which excludes fact-finding.)*

> **Timeline — "3–10–30–30–180"**
> - Detained: raffle and transmittal within **3 days** of filing; arraignment and pre-trial within **10 days** from raffle.
> - Not detained: arraignment and pre-trial within **30 days** from the court acquiring jurisdiction.
> - Trial starts within **30 days** from receipt of the pre-trial order.
> - Trial ends within **180 days**, subject to exclusions. The Revised Guidelines make these periods mandatory.

### Impartial trial
- Every litigant deserves the "**cold neutrality of an impartial judge**."

> **Rule 137, Sec. 1 mandatory disqualification — "PRE-PRE":** **P**ecuniary interest (judge, spouse or child); **R**elated to a party within the 6th degree or to counsel within the 4th; **E**xecutor, administrator, guardian, trustee or counsel; **Pre**siding in a lower court whose ruling is under review.

- Mandatory grounds are waivable only by the **written consent of all parties**, entered in the record. **Voluntary inhibition** is for other just or valid reasons, in the judge's sound discretion.
- Bias must be proved by **clear and convincing evidence** from an **extrajudicial source**. Adverse or erroneous rulings alone are not bias, unless the error is so gross as to imply bad faith (*Webb v. People*).

### Public trial
- A public trial is **not a publicized trial**. The doors are open to a reasonable number of people who observe with decorum.
- **Aquino libel case (1991):** live radio and TV coverage prohibited. Dangers: witnesses get frightened or play to the camera; judges are affected; it is mental harassment of the accused; media intrusion destroys judicial decorum.
- **Estrada plunder case (2001):** live coverage denied; when press freedom clashes with the rights of the accused, the **accused's rights prevail**. On MR, audio-visual recording allowed for **documentary purposes only**, shown publicly only after promulgation.
- **Maguindanao massacre cases:** live broadcast allowed **pro hac vice** because the courtroom could not accommodate the parties. Guidelines: a single fixed wide-angle camera with no panning or zooming; full, continuous coverage with no commercial breaks or voice-overs; no repeat airing until finality; the sub judice rule applies.

## (i) Right to appeal
- Appeal is a **statutory privilege**, not a natural right or part of due process. But once granted by law, denying it violates due process.
- A judgment becomes final after the **15-day** appeal period, when the sentence is served, when appeal is waived in writing, or when the accused applies for probation (Rule 120, Sec. 7).
- **Appeal routes:** MTC → RTC → CA → SC (Rule 122, Sec. 2).
- The accused **loses the right to appeal** if he escapes, jumps bail or flees abroad. The appellate court may dismiss the appeal motu proprio (Rule 124, Sec. 8). After promulgation in absentia, the accused must **surrender within 15 days** to avail of remedies.
`,

  116: `
## Overview
Arraignment is the stage where the accused is formally told the charge and enters a plea. It is an **integral part of due process**, so no valid judgment can rest on an invalid arraignment (*People v. Estomaca*; *Enrile v. People*).

## Sec. 1 – How arraignment is made
- **Where and by whom:** in open court, before the court where the case was filed or assigned, by the **judge or clerk**.

> **How — "FRA":** **F**urnish a copy of the complaint or information (with the list of witnesses); **R**ead it in a language or dialect the accused knows; **A**sk whether he pleads guilty or not guilty.

- Reading in a known language is **mandatory**. Reading in Ilonggo to a Kinaray-a speaker is void (*People v. Alicando*). Arraigning Chinese nationals on an English information is void (*People v. Ong*).
- **Waiver of reading** (Revised Guidelines): allowed in **multiple cases** after personal examination, with the express consent of accused and counsel recorded in the minutes and order, and after the court explains the consequences.
- **No arraignment in absentia.** The accused must be present and personally enter his plea. Failure to record the plea does not void the proceedings.
- **Environmental cases** (A.M. No. 09-6-8-SC, Rule 14): before bail, the accused undertakes that if he fails to appear at arraignment without justification, he waives the reading and authorizes the court to enter a plea of not guilty.
- The **private offended party must appear** for plea bargaining, civil liability and other matters. If absent despite notice, the accused may plead guilty to a lesser included offense with the **trial prosecutor's conformity alone**.

> **Automatic "not guilty" plea — "RCE":**
> - **R**efuses to plead → not guilty entered.
> - **C**onditional plea (e.g., guilty provided a certain penalty is imposed) → not guilty entered, full trial follows.
> - **E**xculpatory evidence presented after a guilty plea (justifying, exempting or mitigating circumstances, Arts. 11–13 RPC, e.g., self-defense) → plea deemed withdrawn; not guilty entered (*People v. Balisacan*).

- **Effect of a guilty plea:** admits all material facts alleged, including attendant circumstances. It suffices for conviction of a **non-capital** offense without further evidence.

### Arraignment schedule
| Situation | Period |
|---|---|
| Detained accused (Rule 116) | Raffle within 3 days of filing; arraign within 10 days from raffle; pre-trial within 10 days after arraignment |
| Detained accused (Revised Guidelines) | Arraignment and pre-trial within 10 calendar days from the court's receipt of the case |
| Not detained (Sec. 1[g]; RA 8493, Sec. 7) | Within 30 days from the court acquiring jurisdiction over the person |
| Quezon City trial courts (A.M. No. 11-6-10-SC) | 7 days (detained) / 20 days (not detained) from receipt |

- **Excluded from the period:** pendency of a motion to quash, a bill of particulars, or another cause for suspension. The date is set in the commitment order (detained) or the order approving bail.

### Prohibited motions before arraignment (Revised Guidelines)
Denied outright **without comment**.

> **Mnemonic:** "Just Pleading Rarely Quashes Bad Suspicious Petitions"

1. **J**udicial determination of probable cause.
2. **P**reliminary investigation sought beyond the 5-day period.
3. **R**einvestigation after the information is filed: without leave, when PI is not required, or when PI was held and the grounds lack merit (credibility, admissibility, innocence).
4. **Q**uash on grounds not in Rule 117, Sec. 3.
5. **B**ill of particulars not conforming to Sec. 9.
6. **S**uspend arraignment on grounds not in Sec. 11.
7. **P**rejudicial question petition when no civil case has been filed.

## Sec. 2 – Plea of guilty to a lesser offense (plea bargaining)
- A **mutually satisfactory disposition** worked out by the accused and the prosecution, subject to court approval.
- **When:** at arraignment, or after arraignment but before trial (withdraw the not-guilty plea first). Ordinarily taken up at pre-trial. Still allowed **after prosecution witnesses testify** when the prosecution's evidence is insufficient for the crime charged (*People v. Mamarion*). **No amendment** of the information is needed.

> **Requisites — "OPeN Court":** consent of the **O**ffended party; consent of the **P**rosecutor; plea to a lesser offense **N**ecessarily included in the charge; **Court** approval.

- Under the Revised Guidelines, the **offended party** (private crimes) or the **arresting officer** (victimless crimes) must be present to consent, plus the public prosecutor. Judgment is rendered immediately.
- Acceptance is **discretionary with the court**, not a right of the accused (*People v. Villarama*).

### Drug cases
- Sec. 23, RA 9165 (banning plea bargaining) was **struck down** as an intrusion on the SC's rule-making power (*Estipona v. Lobrigo*, 2017).
- DOJ Circulars No. 061 (2017) and No. 027 (2018) set acceptable bargains, e.g., Sec. 5 sale → Sec. 11 possession only for **shabu under 5 g or marijuana under 300 g**; Sec. 11 small quantity → Sec. 12 paraphernalia; Sec. 12 → Sec. 15 use.
- The offer must be by **written motion**, and a **drug dependency test** is a condition sine qua non.
- *Beyond the book:* the SC later issued its own framework, A.M. No. 18-03-16-SC, and in *People v. Montierro* (2023) held courts follow it and may overrule a prosecutor's objection based solely on a DOJ circular.

## Sec. 3 – Plea of guilty to a capital offense
- A **capital offense** is one punishable by death under the law at the time of its commission and of the bail application (Rule 114, Sec. 6).

> **Three mandatory duties (People v. Dayot) — "SPA":** (1) **S**earching inquiry into voluntariness and full comprehension of consequences; (2) **P**rosecution must prove guilt and the precise degree of culpability; (3) **A**ccused is asked whether he will present evidence and is allowed to.

- **Rationale:** death is irrevocable, and innocent people have pleaded guilty. The plea is only **secondary evidence**; trial proceeds as if no plea was made. Failure to comply is **grave abuse of discretion**.
- Extends to an accused who pleads guilty upon **re-arraignment**.

> **Searching inquiry guidelines — "Cops Can't Pressure People; Explain, Localize, Narrate":**
> 1. **C**ustody: how he was brought into custody, counsel during custodial and preliminary investigation, conditions of detention (to rule out coercion).
> 2. **C**ounsel: ask defense counsel whether he conferred with and explained the plea to the accused.
> 3. **P**rofile: age, socio-economic status and education, as an index of capacity.
> 4. **P**enalty: the exact length of imprisonment and the certainty of serving it. A mere warning of "death or life" is not enough, and it is not enough that counsel explained it.
> 5. **E**lements of the crime fully explained.
> 6. **L**anguage known to the accused for all questions.
> 7. **N**arrate or re-enact the crime, or supply missing details.

## Sec. 4 – Plea of guilty to a non-capital offense
- Reception of evidence is **discretionary** and only to determine the **penalty**. The plea takes the place of trial.
- The judge is **not bound to convict** if the totality of evidence points to acquittal.
- Under the Revised Guidelines, judgment is rendered immediately.

| | Capital offense (Sec. 3) | Non-capital offense (Sec. 4) |
|---|---|---|
| Searching inquiry | Mandatory | Not required |
| Prosecution evidence | Mandatory: guilt and degree of culpability | Discretionary, only for the penalty |
| Accused's evidence | Must be allowed | May be received for the penalty |

## Sec. 5 – Withdrawal of improvident plea of guilty
- An **improvident plea** is one not knowingly and intelligently made, e.g., without a proper searching inquiry or with no record of the questions and answers.
- May be withdrawn **any time before the judgment of conviction becomes final**. After finality, the court has no discretion to allow it.
- **Effect:** remand for re-arraignment and further proceedings. **Exception:** if the conviction rests on **independent evidence** proving guilt, the improvidence loses significance and the conviction stands (*People v. Derilo*).
- **Remedies to challenge a guilty plea:** (1) motion to withdraw the plea before judgment (discretionary); (2) motion for new trial after judgment (*People v. Domingo*; *People v. Englatera*).

## Secs. 6–8 – Right to counsel at arraignment
> **Four mandatory duties when the accused appears without counsel (People v. Holgado) — "I-A-A-T":** **I**nform him of his right to counsel before arraignment; **A**sk whether he wants counsel; **A**ssign counsel de oficio if he wants one but cannot afford it; give reasonable **T**ime to hire counsel of his choice.

- The judge protects the accused's rights **even against his wishes**. The only arraignment without counsel allowed is a voluntary, knowing and intelligent waiver where the court finds him capable of self-representation.
- **Sec. 7 – Who may be counsel de oficio:** members of the bar in good standing, considering the gravity of the offense and difficulty of issues. Where none are available, **any resident of the province of good repute for probity and ability**.
- Appointing PAO lawyers for President Estrada, who discharged his counsel, was valid (*PAO v. Sandiganbayan*).
- **Sec. 8:** counsel de oficio gets reasonable time to consult before arraignment. Conferring for only a few minutes is **undue haste** (*People v. Bascuguin*).

## Sec. 9 – Bill of particulars
- Filed **before arraignment**. The motion must specify the **defects** and the **details desired**.
- Remedy for a **vague information**, e.g., indefinite time of commission. Failure to file it before arraignment **waives** the defect.

> **Purposes (Enrile v. People) — "K-P-J-L":** **K**now the theory of the government's case; **P**repare the defense and avoid surprise; plead **J**eopardy in a later prosecution; **L**imit the prosecution's evidence.

- It does **not** furnish the accused with the prosecution's evidence.

## Sec. 10 – Production or inspection of material evidence
> **Requisites — "M-M-P-N":** **M**otion showing good cause, with notice; the evidence is **M**aterial; it is in the **P**ossession or control of the prosecution, police or investigating agencies; it is **N**ot privileged.

- The grant is discretionary but must not be unjustifiably withheld (*Cruz v. People*).
- **Refusal to produce:** Rule 29 applies suppletorily (facts deemed established, evidence barred, pleadings stricken, arrest), plus the presumption that suppressed evidence is adverse.

## Sec. 11 – Suspension of arraignment
> **Grounds, upon motion — "IPP" ("Insane, Prejudicial, Petition"):**
> 1. **I**nsanity or unsound mind making the accused unable to understand the charge and plead intelligently. The court orders a mental examination and, if needed, confinement.
> 2. **P**rejudicial question exists.
> 3. **P**etition for review of the prosecutor's resolution pending at the DOJ or the Office of the President. Suspension is capped at **60 days** from filing the petition.

- After the 60 days, the court **must arraign**. An oral motion without proof of filing is insufficient.
- The list was once held non-exclusive (*Solar Team v. How*), but under the Revised Guidelines, motions on other grounds are **prohibited**.

### Present insanity (competency to stand trial)
- **Not a defense**; it only postpones the trial until the accused becomes competent.
- **Two-part test (People v. Estrada, 2000):** (1) Is he coherent enough to give counsel information needed for the defense? (2) Does he have a rational and factual understanding of the proceedings? Ultimately: can he have a fair trial with counsel's help? Answering the judge's questions is **not conclusive**.

### Prejudicial question
- **Elements (Rule 111, Sec. 7):** (1) the **previously instituted civil action** involves an issue similar or intimately related to the criminal issue; and (2) its resolution **determines whether the criminal action may proceed**. The book also cites the older third element: jurisdiction lies in another tribunal.
- None exists where the civil action may **proceed independently** (Arts. 32, 33, 34 and 2176 of the Civil Code; Rule 111, Sec. 3).

## Archiving of cases (Revised Guidelines; A.C. No. 7-A-92)
A criminal case is archived when the accused remains **at large for 6 months** after the warrant is delivered to the peace officer, or when proceedings are suspended indefinitely because:
- the accused is of unsound mind and committed to a mental hospital;
- a valid prejudicial question is invoked (unless the cases are consolidated);
- a higher court has issued a TRO or injunction on an interlocutory matter; or
- the accused jumped bail before arraignment and the bondsman cannot arrest him.

> **Mnemonic:** "6 months AWOL + IPTJ" (**I**nsane, **P**rejudicial, **T**RO, **J**umped bail).
`,

  117: `
## Overview
A motion to quash attacks the complaint or information for **defects apparent on its face**. It is filed **before plea** and **hypothetically admits** the facts alleged. It is the criminal counterpart of a civil motion to dismiss.

## Secs. 1–2 – When and how
- **Time:** any time **before the accused enters his plea** (Sec. 1). Grounds not raised are waived, except those in Sec. 9.
- **Test:** do the facts alleged, if hypothetically admitted, establish the elements of the crime? **Evidence aliunde** (extrinsic matters) is generally not considered. **Exceptions:** grounds the Rules let the accused prove, such as extinction, prescription and double jeopardy. Facts **admitted by the prosecution** may also be considered.
- **Form:** in writing, signed by the accused or counsel, distinctly specifying the factual and legal grounds. An oral motion followed by a written one within the period the judge gave is substantial compliance.
- The court considers **only the grounds stated**, except **lack of jurisdiction over the offense**, which it may consider motu proprio.
- **Only the accused** may move to quash. A judge who quashes motu proprio, even through a "show cause" order, acts as defense counsel and violates due process (*People v. Nitafan*).

## Sec. 3 – The nine grounds
> **Mnemonic:** "Funny Judges Prefer Attorneys Filing Motions Every Late December"

| Letter | Ground | Sec. 3 |
|---|---|---|
| **F**unny | **F**acts charged do not constitute an offense | (a) |
| **J**udges | No **J**urisdiction over the offense | (b) |
| **P**refer | No jurisdiction over the **P**erson of the accused | (c) |
| **A**ttorneys | Officer who filed had no **A**uthority | (d) |
| **F**iling | Does not conform substantially to the prescribed **F**orm | (e) |
| **M**otions | **M**ore than one offense charged (duplicity), unless the law prescribes a single penalty | (f) |
| **E**very | Criminal action or liability **E**xtinguished | (g) |
| **L**ate | Averments constitute a **L**egal excuse or justification | (h) |
| **D**ecember | **D**ouble jeopardy (previously convicted, acquitted, or dismissed without express consent) | (i) |

- **Not grounds to quash:** lack of preliminary investigation, res judicata, a defect in the complaint filed before the fiscal, or the complainant's capacity to sue.

### (a) Facts do not constitute an offense
- Refer to the law defining the offense; check whether every element is alleged. Matters of defense are proved at trial.
- A COMELEC exemption certificate attached to a motion to quash a gun-ban charge is **evidence aliunde** (*Los Baños v. Pedro*). A judicial declaration of nullity of the first marriage does not quash a bigamy information (*People v. Odtuhan*).
- Quashal proper where the RA 3019 Sec. 3(h) information never alleged that the mayor intervened in the awards to his wife's businesses (*Caballero v. Sandiganbayan*).
- The prosecution must first be given a **chance to amend** (Sec. 4). Quashal on this ground **does not bar** a new prosecution.

### (b) No jurisdiction over the offense
- No law gives the court power over the offense. Determined by the **allegations of the information**; may be raised **at any stage, even on appeal**. Irregular exercise of jurisdiction is not a ground.
- **Territorial jurisdiction:** the offense, or one of its essential ingredients, must have occurred within the court's territory. If trial shows it happened elsewhere, the case is dismissed.
- An **amendment cannot confer jurisdiction**, e.g., adding "in relation to office" for the Sandiganbayan (*Antiporda v. Garchitorena*). The **RTC**, not the Sandiganbayan, has exclusive original jurisdiction over RA 9165 cases even for SG 27 officials (*De Lima v. Guerrero*).

### (c) No jurisdiction over the person
- Acquired by **arrest or voluntary appearance**, such as filing a pleading for affirmative relief.
- A motion to quash on this ground, or to quash a warrant, is a **special appearance** and not a submission to jurisdiction (*Miranda v. Tuliao*).
- Raise it at the earliest opportunity. **Posting bail** or seeking relief (e.g., consolidation) before objecting **waives** it (*People v. Go*).
- **Lack of preliminary investigation does not affect jurisdiction.** The court holds the case in abeyance and orders the PI.

### (d) Officer had no authority
- No information may be filed without the **prior written authority or approval** of the provincial or city prosecutor, chief state prosecutor, or the Ombudsman or his deputy (Rule 112, Sec. 4). Mandatory.
- A **jurisdictional defect that cannot be cured**; may be raised even after plea (*People v. Garfin*). Examples: the Special Prosecutor filing without the Ombudsman's authority (*Zaldivar*); a State Prosecutor approved only by the Regional State Prosecutor, who cannot redelegate (*Paqueo*).

### (e) Not in the prescribed form
> **Rule 110, Sec. 6 — "N-D-A-O-D-P":** **N**ame of the accused; **D**esignation of the offense; **A**cts or omissions; name of the **O**ffended party; approximate **D**ate; **P**lace.

- Objections to form must be raised **before plea**, not for the first time on appeal. In rape, the exact date is not an element, so "sometime in 1987" is sufficient (*People v. Almendral*).

### (f) Duplicity
- An information charges **only one offense** (Rule 110, Sec. 13). Failure to object before plea **waives** the defect.
- **Not duplicity:** several informations for one act, each charging one offense, because one act may violate distinct laws (*Loney v. People*; *Soriano v. People*). The only limit is double jeopardy.
- **Exception — complex crimes:** compound crime (single act, two or more grave or less grave felonies); complex crime proper (one offense a necessary means for another) (Art. 48 RPC); special complex crimes such as robbery with homicide or rape with homicide.

### (g) Extinction of criminal action or liability
- Prescription is the usual example. **Not waived** by failure to raise it before plea.
- Check: (1) the prescriptive period; (2) when it starts; (3) when it was interrupted.
- **Starts:** on **discovery** by the offended party, the authorities or their agents (Art. 91 RPC), for public and private crimes alike (*Garcia v. CA*). Brief trips abroad are not "absence from the Philippines."
- **Interrupted** by filing a complaint for preliminary investigation, even with the prosecutor's office (*People v. Olarte*; *Francisco v. CA*). Also applies to special laws (*People v. Pangilinan*) and to SEC investigations. **Ordinances under summary procedure** are interrupted **only by filing in court** (*Zaldivia v. Reyes*; *Jadewell v. Lidua*).
- An information for a **different, unrelated offense** does not interrupt prescription of another (*People v. Abuy*).

### (h) Legal excuse or justification
- Refers to justifying and exempting circumstances (Arts. 11–12 RPC). They must appear **on the face of the information**; otherwise they are defenses for trial.
- A **qualifiedly** privileged communication in libel is **not** a ground to quash; an **absolutely** privileged one alleged in the information **is** (*Danguilan-Vitug v. CA*).

### (i) Double jeopardy — see Sec. 7 below.

## Secs. 4–6 – Court action and effects
> **Three options — "ASD" ("Amend, Sustain, Deny")**

- **Amend (Sec. 4):** if the defect is curable by amendment, the court **must** order it. For "facts do not constitute an offense," the prosecution gets the chance to amend, and the motion is granted only if it fails. Refusing that chance violates the **State's** right to due process (*People v. Andrade*). An amendment cannot confer jurisdiction.
- **Sustain (Sec. 5):** the court may order a new information within a set, extendible period. The order must be in the **same order granting the motion**. A detained accused is not released unless bailed. He is **discharged** if no order is made or no new information is filed in time, unless held on another charge.
- **Deny:** an **interlocutory** order, not appealable and generally not subject to certiorari. Remedy: go to trial and raise the error on appeal. Certiorari only for grave abuse with compelling reasons (*Galzote v. Briones*).

> **Sec. 6 – Bar to another prosecution — "ED is dead":** an order sustaining a motion to quash is **not** a bar, except for grounds (g) **E**xtinction and (i) **D**ouble jeopardy.

> **Art. 89 RPC total extinction — "Dead Souls Are Always Pardoned, Prescribed, Married":**
> 1. **D**eath of the convict (pecuniary penalties only if death occurs before final judgment)
> 2. **S**ervice of sentence
> 3. **A**mnesty
> 4. **A**bsolute pardon
> 5. **P**rescription of the crime
> 6. **P**rescription of the penalty
> 7. **M**arriage of the offended woman (Art. 344)

## Sec. 7 – Former conviction or acquittal; double jeopardy
- Art. III, Sec. 21: no one shall be twice put in jeopardy for the same offense. If an act is punished by both a **law and an ordinance**, conviction or acquittal under either bars the other.

> **Elements — "ATS":** (1) first jeopardy **A**ttached; (2) first jeopardy validly **T**erminated; (3) second jeopardy is for the **S**ame offense.

> **When first jeopardy attaches — "Very Clever Accused Plead Twice":** (1) **V**alid complaint or information; (2) **C**ompetent court; (3) **A**rraignment; (4) valid **P**lea entered; (5) **T**ermination: conviction, acquittal, or dismissal without the express consent of the accused.

- **Same offense:** the second offense is the same, an attempt or frustration of it, or necessarily includes or is included in the first. Under **different statutes**, the test is **identity of offenses**. Under a **law and an ordinance**, the test is **identity of acts** (*People v. Relova*).

> **Dismissal with consent that still bars — "IS":** **I**nsufficiency of evidence (demurrer) or violation of the right to **S**peedy trial. Both operate as acquittals.

- **Acquittal vs. dismissal:** an acquittal is on the merits and is **final and unappealable at any level** (*People v. Velasco*: finality-of-acquittal rule, the "right of repose"). A dismissal for lack of jurisdiction or venue is not an acquittal. A dismissal during preliminary investigation does not trigger jeopardy.

> **Graver offense not barred despite conviction for the lesser (Sec. 7, par. 2) — "SDC":**
> - **S**upervening facts made the offense graver (e.g., the victim later dies; injuries found to need 30 days, not 8) (*People v. Petilla*). A more thorough second medical certificate is not supervening (*People v. Yorac*). If the victim died **before arraignment**, the accused cannot be charged again (*People v. City Court of Manila*).
> - Facts of the graver charge were **D**iscovered only after the plea.
> - The plea to the lesser offense was made without the **C**onsent of the prosecutor and offended party (except Rule 116, Sec. 1[f]) (*People v. Villarama*).

- The accused is **credited** with any sentence already served.

### Other doctrines
- An **appeal by the accused waives double jeopardy** and throws the whole case open for review.
- A CA order to remand and re-raffle is not double jeopardy (*Villalon v. Chan*).
- **Exceptions to double jeopardy:** (1) denial of due process or mistrial; (2) grave abuse of discretion under exceptional circumstances. An acquittal may be assailed only via **Rule 65 certiorari** (*People v. Alejandro*).

## Sec. 8 – Provisional dismissal
> **Requisites (People v. Lacson) — "M-N-O-S":** (1) **M**otion by the prosecution with the accused's express conformity, by the accused, or by both; (2) **N**otice to the offended party; (3) **O**rder granting the motion and dismissing the case provisionally; (4) **S**ervice of the order on the public prosecutor.

- **Express consent** is positive and unequivocal, viva voce or in writing ("No objection," "With my conformity"). **Silence or failure to object is not consent.**
- Notice gives the offended party the chance to raise collusion, unavailable witnesses, flight risk or threats.

> **Time-bar:** penalty of imprisonment **not exceeding 6 years**, or a fine, or both → permanent if not revived within **1 year**; imprisonment of **more than 6 years** → **2 years**.

- Reckoned from **service of the order on the public prosecutor**, or on private counsel if the offended party has one (*Co v. New Prosperity*).
- The time-bar does **not shorten Art. 90 RPC prescription**. It is a special procedural limit; after it lapses, the State is presumed to have abandoned prosecution.
- **Revival:** by refiling the information or filing a new one. A **new PI** is needed only for new witnesses, new accused, an upgraded charge, or an upgraded participation.
- If the requisites are not met, the time-bar does not apply; the case may be revived beyond it, subject to double jeopardy and prescription.
- **A.M. No. 12-11-2-SC** (decongesting jails): provisional dismissal with the detained accused's consent when an essential witness is absent and the trial exceeds 180 days. If his whereabouts are known, it requires two prior postponements and notice warning of dismissal.

### Motion to quash vs. provisional dismissal (Los Baños v. Pedro)
| | Motion to quash | Provisional dismissal |
|---|---|---|
| Who files | Accused only | Prosecution, accused, or both |
| Grounds | Limited to Sec. 3 | Not specified; reasons other than facial defects |
| Form | Sec. 2 requirements | No form requirements |
| When | Before plea | Even during trial, with the required consents |
| Permanence | Stays quashed; refiling depends on prescription and Sec. 6 | Temporary until the time-bar, then permanent |

## Sec. 9 – Waiver of grounds not raised (omnibus motion rule)
Grounds not raised before plea are waived, **except**:

> **Mnemonic:** "No Jeopardy Ever Dies" — **N**o offense charged (a); no **J**urisdiction over the offense (b); **E**xtinction of the action or liability (g); **D**ouble jeopardy (i). These may be raised even after arraignment.
`,

  118: `
## Overview
Pre-trial is **mandatory** in all criminal cases before the Sandiganbayan, RTC, MeTC, MTCC, MTC and MCTC. The judge is an **active participant** who looks for ways to simplify, expedite or avoid trial (*Tiu v. Middleton*). All questions are directed to the judge to avoid hostility between the parties.

## Sec. 1 – When held and what is taken up
- **When:** after arraignment, within **30 days** from the court acquiring jurisdiction over the accused, unless a shorter period applies. Under the Revised Guidelines, pre-trial proceeds **immediately after arraignment**.

> **Matters considered — "Pretty Smart Men Wear Matching Outfits":**
> 1. **P**lea bargaining
> 2. **S**tipulation of facts
> 3. **M**arking of evidence for identification
> 4. **W**aiver of objections to admissibility
> 5. **M**odification of the order of trial (accused admits the charge but sets up a lawful defense)
> 6. **O**ther matters for a fair and expeditious trial of the criminal and civil aspects

- **Plea bargaining at pre-trial:** if the prosecution and offended party agree, the court issues an order on the bargain, receives evidence on the civil aspect, and renders judgment of conviction with civil liability. If it fails, the court proceeds with the rest of pre-trial.

### Negative vs. affirmative defense (Circular No. 38-98, RA 8493)
| | Negative defense | Affirmative defense |
|---|---|---|
| Effect | Prosecution proves guilt beyond reasonable doubt | May modify (reverse) the order of trial |
| Burden | Prosecution | Accused, by clear and convincing evidence |

### Stipulation of facts
- **Purpose:** simplify, abbreviate or dispense with trial by not proving undisputed facts.
- A stipulation admitted by the defense is a **judicial admission**, binding and needing no proof (Rule 129, Sec. 4). It may be contradicted only by showing **palpable mistake** or that **no such admission was made**. It may waive the accused's right to present evidence on those facts (*People v. Hernandez*).
- **Revised Guidelines:** parties must stipulate on the direct and cross of witnesses **without personal knowledge** of the material facts: forensic chemists, medico-legal officers, investigators, auditors, accountants, engineers, custodians, experts (on authenticity, due execution and contents of public documents); corroborative witnesses; and witnesses on civil liability. If full stipulation is impossible, stipulate on the subject of the direct, without prejudice to added questions.

### Marking vs. formal offer of evidence
- Evidence marked at pre-trial but **not formally offered is not evidence** (Rule 132, Sec. 35). Identification and marking happen at pre-trial; the offer happens when a party rests.
- **Revised Guidelines:** the offer, comment or objection, and ruling are **oral**, made the **same day as the last witness**.

> **Admissions the court explores (A.M. No. 03-1-09-SC) — "In The End, Damages Get Counted After Defenses":**
> 1. **I**dentity of the accused
> 2. **T**erritorial jurisdiction
> 3. **E**xpert witnesses' qualifications
> 4. **D**amages amount
> 5. **G**enuineness and due execution of documents
> 6. **C**ause of death or injury
> 7. **A**doption of evidence from the preliminary investigation
> 8. Disclosure of **D**efenses: alibi, insanity, self-defense, exercise of public authority, justifying or exempting circumstances

- The court also defines factual and legal issues, fixes trial dates per a flow chart, requires lists of witnesses to be subpoenaed, and considers modifying the order of trial.

### Discovery and motion to suppress
- Depositions are taken before trial. An accused relying on **alibi** must move to depose his witnesses within the period for pre-trial motions (*People v. Webb*).
- Conditional examination of prosecution witnesses follows **Rule 119, Secs. 12–15**, before the judge where the case is pending, **not Rule 23** (*Vda. de Manguerra v. Risos*).
- A **motion to suppress** evidence obtained in violation of Rule 126, RA 9995 (anti-voyeurism) or RA 4200 (anti-wiretapping) may be filed during pre-trial. Objections unknown during the motion to quash the search warrant may still be raised there (*Malaloan v. CA*).

## Sec. 2 – Pre-trial agreement
> **To bind the accused — "Written + Signed by both":** (1) the agreement or admission is **in writing**; and (2) it is **signed by both the accused and counsel**. Otherwise it cannot be used against the accused.

- **Court approval is not needed** to make it binding; approval only shows the court's supervision (*Bayas v. Sandiganbayan*).
- Once signed, stipulations are judicial admissions. A party **cannot rescind them unilaterally** even if disadvantageous.
- All pre-trial proceedings are recorded and the minutes signed by the parties and counsel.

## Judicial Dispute Resolution and mediation
- **CAM and JDR** (A.M. No. 04-1-12-SC-PhilJA) cover civil liability in summary procedure cases (including BP 22), barangay-certified cases, quasi-offenses, less grave felonies (≤ 6 years) with a private offended party, and estafa, theft and libel. The **JDR judge does not try the case** if settlement fails.
- Under the Revised Guidelines, referral to the Philippine Mediation Center comes **only after arraignment and pre-trial**. Mediation is limited to a **non-extendible 30 calendar days**, then trial proceeds.

> **Civil aspects referred to mediation — "Pay, Property, Honor, Cyber, Negligence, IP":**
> 1. **Pay**ment-extinguishable crimes: BP 22, SSS Law, Pag-IBIG Law
> 2. **Property** crimes of a civil nature: theft (first-level courts), estafa (except Art. 315[2] and [3]), other swindling, other deceits, malicious mischief
> 3. Crimes against **honor**: libel, slander, slander by deed, incriminating innocent persons, intriguing against honor
> 4. **Cyber**libel (RA 10175)
> 5. Criminal **negligence** (Title 14)
> 6. **IP** rights cases

### Affidavit of desistance and offer of compromise
- An **affidavit of desistance** or pardon is **not by itself a ground for dismissal** once the case is in court. It is viewed with suspicion because it is easily obtained by intimidation or money.
- An **offer of compromise is an implied admission of guilt** (Rule 130, Sec. 27), except in quasi-offenses and crimes the law allows to be compromised (e.g., NIRC Sec. 204[B], except cases already filed in court or involving fraud). A plea for forgiveness is analogous. An offer made **months before any criminal proceeding** is not an admission (*San Miguel Corp. v. Kalalo*).

## Sec. 3 – Non-appearance at pre-trial
- If **counsel for the accused or the prosecutor** fails to appear without acceptable excuse, the court may impose **sanctions**.
- The absence of a listed prosecution witness or the private complainant is **not a ground to dismiss**. The accused's presence is **not required unless ordered**; counsel suffices (*People v. Tac-an*).
- **Revised Guidelines:** pre-trial proceeds despite the absence of the accused or private complainant if they were notified and defense counsel and the public prosecutor are present.
- If the court **required** the accused's presence and he fails to appear, his **bail is forfeited**. The bondsman gets **30 days** to produce him (Rule 114, Sec. 21).

## Sec. 4 – Pre-trial order
- Recites the actions taken, the facts stipulated, and the evidence marked. Served on the parties **the same day pre-trial ends**.

> **Effect — "BLC":** it **B**inds the parties, **L**imits the trial to matters not disposed of, and **C**ontrols the course of trial. It may be modified to prevent manifest injustice.

- Issues not in the order may be tried only if **impliedly included** or inferable from those raised (*Licomcen v. Abainza*).
`,

  119: `
## Overview
Rule 119 runs the trial: when it starts, how long it may last, what delays are excused, and the special devices (conditional examination, state witness, consolidation, demurrer, reopening). Most periods were tightened by the **Revised Guidelines for Continuous Trial** (A.M. No. 15-06-10-SC, effective **1 September 2017**).

## Secs. 1–2 – Time to prepare; continuous trial
- After a not-guilty plea, the accused has **at least 15 days** to prepare. Trial starts within **30 days** from receipt of the pre-trial order.
- Trial runs **day to day** as far as practicable, and the entire trial period may not exceed **180 days** from the first day of trial (RA 8493, Sec. 6), unless the SC authorizes otherwise. Shorter periods in special laws or circulars prevail.
- **Priority:** cases are calendared by the date they become ready for trial. Habeas corpus, election, detained-accused, summary procedure and similar cases get preference, tried in the afternoons if needed.

### Periods under the Revised Guidelines
| Case type | Arraignment & pre-trial → trial | Trial | Decision |
|---|---|---|---|
| Regular | 30 days | 180 days (6 months) | 90 days from submission |
| Drug cases | — | Finished within 60 days from filing of information | 15 days from submission |
| Environmental | 30 days | 3 months, then 30 days for memoranda | 60 days from last day for memoranda |
| IP cases | 30 days | 60 days per party (120 total), then 30 days for memoranda | 90 days from submission |
| Referred to mediation | 30 days of mediation | 180 days | 90 days from submission |

- **Motions for postponement are prohibited**, except for **acts of God, force majeure, or physical inability of the witness**. Even then, the movant must finish on the agreed dates and pay a postponement fee.

## Secs. 3–4 – Excluded periods and continuances
> **Sec. 3 excluded delays — "Only Witnesses In Distress Justify Continuance":** (a) **O**ther proceedings concerning the accused; (b) absence of essential **W**itness; (c) **I**ncompetence or physical inability of the accused; (d) **D**ismissal and refiling; (e) **J**oinder with a co-accused; (f) **C**ontinuance with ends-of-justice finding.

> **(a) Other proceedings — "Every Officer eXpects Prompt Inhibition Questions Answered":**
> 1. **E**xamination of the accused's physical or mental condition
> 2. Proceedings on **O**ther criminal charges against him
> 3. E**x**traordinary remedies against interlocutory orders (only if a TRO or injunction issues; Rule 65, Sec. 7)
> 4. **P**re-trial proceedings, not exceeding 30 days
> 5. **I**nhibition orders, change of venue, or transfer (only if the accused filed the venue petition)
> 6. Prejudicial **Q**uestion found
> 7. Matter under **A**dvisement, not exceeding 30 days

- **(b) Essential witness absent or unavailable.** *Absent:* whereabouts unknown or undeterminable by due diligence. *Unavailable:* whereabouts known, but presence cannot be obtained by due diligence. An **essential witness** is one whose testimony covers elements of the crime and is indispensable to conviction.
- **(c)** Mental incompetence or physical inability of the accused to stand trial.
- **(d)** Dismissal on the prosecution's motion and refiling for the same offense: the time between dismissal and refiling.
- **(e)** Joinder with a co-accused over whom the court has no jurisdiction yet, or whose time has not run, with no separate trial granted.
- **(f)** Continuance granted on a finding, **stated in the order**, that the ends of justice outweigh the interest in a speedy trial. Without that finding, the delay is **not excluded** (*People v. Hernandez*).

- **Sec. 4 – Factors for a continuance:** (a) denial would make continuing impossible or cause a miscarriage of justice; (b) the case is so novel, unusual or complex that adequate preparation within the periods is unreasonable.

> **Never a ground for continuance — "CLF":** **C**ongested calendar; **L**ack of diligent preparation by the prosecutor; **F**ailure to obtain available witnesses.

### Other doctrines on delay
- The list in Sec. 3 is **not exclusive**. A judge's illness is no excuse for not deciding on time; he must ask the SC for an extension. Motions to inhibit must be resolved within **2 calendar days**.
- An accused who keeps changing counsel to delay trial may be given a counsel de oficio (*Amion v. Chiongson*). If the accused fails to qualify for PAO, the **IBP local chapter** provides free counsel.
- No violation where the delay came from complexity, reorganizations, and the accused's failure to assert the right (*Alvizo*; *Defensor-Santiago v. Sandiganbayan*).

## Secs. 5–8 – New trial, transitional limits, PAO duties, sanctions
- **Sec. 5:** after an order for new trial, trial starts within **30 days** from notice, extendible to **180 days** if impractical.
- **Sec. 6:** transitional limits after 15 September 1998 (180 → 120 → 80 days). Speedy trial is relative and flexible; balancing factors: "LRAP."
- **Sec. 7 – Public attorney's duties to a detained client** (detained for lack of bail money, a non-bailable charge, or serving sentence): promptly obtain the prisoner's presence for trial, or serve notice on the custodian, who must tell the prisoner of his right to demand trial and relay any demand.

> **Sec. 8 sanctions on counsel or prosecutor — "UFFW":** (1) lets the case be set for trial knowing a necessary witness is **U**navailable, without disclosing it; (2) files a **F**rivolous motion solely for delay; (3) makes a **F**alse material statement to get a continuance; (4) **W**illfully fails to proceed to trial without justification.

- **Penalties:** private counsel, fine up to **₱20,000**; counsel de oficio, public attorney or prosecutor, fine up to **₱5,000**; any of them, suspension from practice before that court up to **30 days**.

## Secs. 9–10 – Remedy for denial of speedy trial; speedy disposition
- **Sec. 9:** if the accused is not brought to trial within the limits, the information may be **dismissed on his motion**. The **accused bears the burden of proof**; the **prosecution bears the burden of going forward** to show excluded time. The dismissal is subject to double jeopardy, so it **operates as an acquittal**.
- **Failure to move for dismissal before trial waives the right.** Objections must be positively asserted; the accused cannot rest in silence and then benefit (*Corpuz v. Sandiganbayan*; *Valencia v. Sandiganbayan*).
- **Sec. 10:** the speedy trial statute and rules do not bar a claim under the Constitution (Art. III, Sec. 14[2]).

### Speedy disposition of cases (Art. III, Sec. 16)
- Applies to all parties in **all judicial, quasi-judicial and administrative proceedings**, before, during and after trial. Broader than Art. VIII, Sec. 15, which covers only the period after submission.
- It needs a **pending case**. The period between provisional dismissal and revival does not count (*People v. Lacson*).
- ***Tatad v. Sandiganbayan:*** a politically motivated, nearly **3-year** delay in preliminary investigation violated due process and speedy disposition. An absent PI can be cured; an undue delay cannot, "for man has not yet invented a device for setting back time."
- Other violations: **5 years** (*Roquero*, administrative); about **6 years** (*Angchangco*); about **15 years** (*People v. Sandiganbayan*, 2016).
- An acquittal for violation of speedy disposition does **not necessarily extinguish civil liability** (*Coscolluela*).

> **Cagang v. Sandiganbayan (2018) — "Different, Initiation, Burdens, Context, Timely":**
> 1. **Different** rights: speedy trial applies to criminal prosecutions in courts; speedy disposition applies before any tribunal once the accused may be prejudiced.
> 2. **Initiation:** a case begins with the filing of the **formal complaint for preliminary investigation**. Fact-finding investigation is **excluded** (abandoning *People v. Sandiganbayan*, 2016).
> 3. **Burden of proof:** within the prescribed periods, the **defense** must prove the right was justifiably invoked. Beyond the periods, the **prosecution** must justify the delay (it followed procedure; complexity and volume made the delay inevitable; no prejudice to the accused).
> 4. **Context:** length of delay is never mechanical. Malicious or politically motivated prosecution, proven, means **automatic dismissal**; waiver or acquiescence bars the claim.
> 5. **Timely:** the right must be raised by appropriate motion once the periods lapse, or it is waived.

## Sec. 11 – Order of trial
1. **Prosecution:** evidence of the charge and, in a proper case, civil liability.
2. **Accused:** defense, and damages from any provisional remedy issued against him.
3. **Rebuttal** (prosecution) and **sur-rebuttal** (defense), unless the court allows more evidence on the main issue.
4. Case **submitted for decision**, unless the court requires oral argument or memoranda.

- **Reverse order of trial:** when the accused admits the act but sets up a lawful defense, the order may be modified. Discretionary, and not proper without a clear admission (*People v. Marcial*).
- Examining a witness (Rule 132): **Direct, Cross, Re-direct, Re-cross**.
- **Judicial Affidavit Rule:** judicial affidavits replace direct testimony, filed at least **5 days** before pre-trial or the hearing. JAR applies where the maximum penalty is **6 years or less**, where the accused agrees, or to the civil aspect in any case.
- **Revised Guidelines:** in first-level courts, testimony consists of sworn statements given to police, affidavits before the prosecutor, or judicial affidavits, subject to added direct and cross. In second-level courts, the Sandiganbayan and the CTA, the same applies to witnesses whose **demeanor is not essential** and to transactional cases provable by documents. Otherwise, testimony is oral.

## Secs. 12–15 – Conditional examination and material witnesses
| | Defense witness (Secs. 12–13) | Prosecution witness (Sec. 15) |
|---|---|---|
| Grounds | Sick or infirm; resides more than **100 km** away with no means to attend; or similar circumstances | Too sick or infirm to appear, or must leave the Philippines with no definite date of return |
| Application | Motion with notice, stating name and residence, substance of testimony, and the ground; supported by the accused's affidavit | Upon satisfactory showing |
| Before whom | A judge; or a bar member designated by the judge; or an inferior court designated by a superior court | **Only the court where the case is pending** |
| Notice | Copy of order served on the prosecutor at least **3 days** before; proceeds even if the prosecutor is absent after notice | Accused notified; his unjustified absence is a waiver |

- Courts construe these exceptions **strictly**. Taking a prosecution witness's deposition before a Philippine consul in Laos was **void** (*Go v. People*). Rule 23 civil depositions do not apply to criminal cases (*Vda. de Manguerra v. Risos*).
- Conditional examination of a defense witness is unnecessary where other witnesses can testify on the same facts (*Jaylo v. Sandiganbayan*).
- **Sec. 14 – Bail for a material witness:** if the court is satisfied, upon proof under oath, that a material witness will not testify when required, it may order him to post bail. If he refuses, he is **committed to prison** until he complies or testifies.

## Sec. 16 – Joint or separate trial
- Accused charged jointly are **tried jointly**. The court may order a separate trial on motion of the prosecutor or any accused, e.g., when a co-accused is abroad and cannot be arrested (*Dacanay v. People*).

## Secs. 17–18 – Discharge of an accused as state witness
- **Procedural requisites:** (1) two or more accused are jointly charged; (2) the prosecution moves **before resting its case**; (3) a hearing where the prosecution presents evidence and the sworn statement of the proposed witness; (4) the accused consents. Resolved within **10 calendar days** after the hearing.

> **Substantive conditions — "No One Can Match Me":**
> 1. **N**ecessity is absolute: he alone has knowledge of the crime. None if his testimony would merely corroborate (*People v. De Atras*).
> 2. **O**nly his testimony is available as direct evidence.
> 3. **C**orroborated substantially in its material points, not all points, and not necessarily by non-accused witnesses (*Jimenez v. People*).
> 4. **M**ost guilty he does not appear to be. Guilt is measured by degree of participation, not the penalty. He need not be the least guilty.
> 5. **M**oral turpitude: he has never been convicted of an offense involving it.

- Evidence in support of the discharge **automatically forms part of the trial**. If the motion is denied, his sworn statement is **inadmissible**.
- Discharge may be granted **even after he testifies**, e.g., when his life is at risk (*Rosales v. CA*). Lack of a formal hearing is not fatal if both sides were heard.
- **Sec. 18 – Effect:** the discharge **operates as an acquittal** and bars future prosecution, **unless he fails or refuses to testify** according to his sworn statement.
- **Improper discharge:** his testimony stays admissible and the acquittal stands, absent a jurisdictional defect.

### Discharge under the Rules vs. Witness Protection Program, RA 6981 (Yu v. RTC Tagaytay)
| | Rule 119, Sec. 17 | RA 6981 |
|---|---|---|
| Granted by | The court | The DOJ |
| How | Motion before the prosecution rests | Compliance with RA 6981; the prosecutor excludes him from the information or moves for his discharge |
| Effect | Acquittal (first jeopardy) | Immunity; he is excluded, not acquitted, so no jeopardy |

## Secs. 19–22 – Substitution, acting prosecutor, exclusion, consolidation
- **Sec. 19 – Mistake in charging the proper offense:** at any time **before judgment**, if the accused cannot be convicted of the offense charged or any included offense, he is not discharged if there is good cause to detain him. The court commits him to answer for the proper offense and dismisses the original case once the proper information is filed. Requires a **new preliminary investigation and a new plea** (*Teehankee v. Madayag*).
- **Sec. 20 – Acting prosecutor:** if a prosecutor is disqualified (Rule 137 grounds) or otherwise unable to act, the judge or prosecutor asks the **Secretary of Justice** to appoint one.
- **Sec. 21 – Exclusion of the public:** the judge may exclude the public **motu proprio** if the evidence is offensive to decency or public morals; or, **on motion of the accused**, exclude everyone except court personnel and counsel.
  - **Child witnesses** (A.M. No. 004-07-SC): the court may exclude everyone without a direct interest, including the press.
  - Witnesses may be excluded so they cannot hear each other (Rule 132, Sec. 15).
  - **The accused can never be excluded** — that would violate his right to confront witnesses.
- **Sec. 22 – Consolidation:** charges founded on the same facts or forming a series of offenses of similar character may be tried jointly at the court's discretion. Each case **keeps its separate character and judgment**, and filing fees are not merged.
  - **Proper:** same act or transaction, same or like issues, substantially the same evidence, the court has jurisdiction, and no undue prejudice. Example: nine estafa-through-falsification cases consolidated in the court with the **lowest docket number** (*Domdom v. Sandiganbayan*).
  - **Improper:** it would expose the accused to unrelated testimony, delay or muddle the case (*Neri v. Sandiganbayan*).
  - **Revised Guidelines:** new related cases are raffled to one court. A later information against another accused on the same incident goes directly to the court with the earlier case, and parties may adopt evidence already presented.

## Sec. 23 – Demurrer to evidence
- Filed **after the prosecution rests**. Claims the evidence is insufficient to prove (1) the commission of the crime and (2) the precise degree of the accused's participation. **Premature** while the prosecution is still presenting evidence.
- The court may also dismiss **on its own initiative** after hearing the prosecution.

| | With leave of court | Without leave of court |
|---|---|---|
| If denied | Accused may still present evidence | Accused **waives** his right to present evidence; case decided on the prosecution's evidence |
| If granted | Acquittal | Acquittal |

| Step | Rule 119, Sec. 23 | Revised Guidelines |
|---|---|---|
| Motion for leave | 5 days after the prosecution rests (non-extendible); opposition 5 days | Oral motion, resolved orally |
| Demurrer after leave granted | 10 days from notice; opposition 10 days | 10 calendar days; comment 10 calendar days |
| Resolution | — | 30 calendar days |

- If leave is denied, the accused presents his evidence on the dates already set. The motion for leave follows Rule 15 (notice and hearing); the demurrer itself does not.

### Remedies
- **Grant = acquittal**, not appealable because of double jeopardy. Reviewable only by **Rule 65 certiorari** for grave abuse of discretion.
- **Denial** of leave or of the demurrer is **not reviewable by appeal or certiorari before judgment**. Remedy: go to trial and appeal any conviction. **Exception:** certiorari lies for grave abuse, e.g., refusing to weigh the evidence or findings unsupported by the record (*Macapagal-Arroyo v. People*, 2016, where the demurrer was granted on certiorari).

### Civil aspect
- The court **cannot deny** the demurrer on the criminal aspect and **grant** it on the civil aspect. Evidence sufficient for guilt beyond reasonable doubt necessarily satisfies preponderance.
- If the demurrer is granted, the civil aspect generally **continues**. The accused may still present evidence on civil liability, unless the court declares the act or omission did not exist. Adjudicating civil liability in the same order that grants the demurrer **violates due process** (*Salazar v. People*).
- Acquittal does **not** extinguish civil liability when: (a) based on reasonable doubt; (b) the court declares the liability only civil; or (c) the civil liability does not arise from the crime. Extinguished only if the act or omission is found **not to exist**.

## Sec. 24 – Reopening
> **Requisites (Cabarles v. Maceda) — "Before, Motion, Hearing, Prevents, 30":**
> 1. **Before** finality of the judgment of conviction (after both sides rest, and even after promulgation)
> 2. Motu proprio or on **motion**
> 3. **Hearing** conducted first. Without a hearing, the order is void, and participating afterwards is not a waiver
> 4. To **prevent** a miscarriage of justice
> 5. Additional evidence completed within **30 days** from the order
`,

  120: `
## Overview
A judgment is the court's adjudication of whether the accused is guilty or not guilty, with the penalty and civil liability if any. Its validity turns on **form (Sec. 1), contents (Sec. 2), and a proper promulgation (Sec. 6)**.

## Sec. 1 – Definition and form
> **Requirements — "Write Officially, Personally, Sign, State Facts & Law":**
> 1. In **writing**
> 2. In the **official** language (Filipino or English)
> 3. **Personally** and directly prepared by the judge
> 4. **Signed** by the judge
> 5. **States** clearly and distinctly the **facts and the law** on which it is based (Art. VIII, Sec. 14)

- **Purpose:** to tell the parties the reasons so they can appeal intelligently, and to ensure the judge used legal reasoning rather than ipse dixit.
- A decision that does not conform is **void and legally inexistent** (*Velarde v. SJS*). The requirement applies only to **decisions on the merits**, not interlocutory orders.

> **Essential parts (Velarde) — "Can Facts Ignore Real Dispositions?":** statement of the **C**ase; statement of **F**acts; **I**ssues or assignment of errors; **R**uling on each issue; **D**ispositive portion.

### Periods to decide
| Court or case | Period from submission |
|---|---|
| Supreme Court | 24 months |
| Lower collegiate courts | 12 months |
| Other lower courts | 3 months (Constitution); 90 days (Revised Guidelines) |
| Drug cases | 15 days |
| Environmental cases | 60 days from last day to file memoranda |
| IP cases | 90 days |
| Summary procedure | 30 days from termination of hearing |

- Missing transcripts are not a reason to defer submission if the judge heard the witnesses. A **successor judge** orders complete transcripts within **30 calendar days** of assuming office.

## Sec. 2 – Contents
> **Judgment of conviction — "QPPC" ("Qualify, Participate, Penalize, Compensate"):**
> 1. **Q**ualification of the offense, with aggravating and mitigating circumstances
> 2. **P**articipation: principal, accomplice, or accessory
> 3. **P**enalty imposed
> 4. **C**ivil liability or damages, unless a separate civil action was reserved or waived

- **Judgment of acquittal** must state whether the prosecution's evidence **absolutely failed** to prove guilt, or merely failed to prove it **beyond reasonable doubt**. In either case, it must determine whether the act or omission giving rise to civil liability did not exist.

| Kind of acquittal | Civil liability ex delicto |
|---|---|
| Accused is not the author of the act; evidence absolutely failed | None, except from an independent civil action or another source of obligation |
| Reasonable doubt | May still be imposed on preponderance of evidence |

- **Illegal sentence:** if the conviction is proper but the penalty excessive, the remedy is **habeas corpus** (*Barredo v. Vinarao*).
- **RA 7309** compensation for those unjustly accused, convicted and imprisoned, then acquitted: claim with the **DOJ Board of Claims** within **6 months** from release, at no more than **₱1,000 per month** of detention.

## Secs. 3–5 – Multiple offenses and variance
- **Sec. 3:** if two or more offenses are charged in one information and the accused **fails to object before trial**, he may be convicted of as many as are charged and proved, with separate findings and a penalty for each.
- **Sec. 4 – Variance rule:** when the offense charged includes or is included in the offense proved, the accused is convicted of the **lesser** of the two: the offense proved if it is included in the charge, or the offense charged if it is included in the offense proved.
- **Sec. 5 – Inclusion test:** the charge **necessarily includes** the offense proved when some essential elements of the charge, as alleged, constitute the offense proved. The charge is **necessarily included in** the offense proved when its essential ingredients form part of the offense proved.
- **Examples:**
  - Intentional falsification charged → conviction for **reckless imprudence resulting in falsification** (*Sevilla v. People*).
  - Rape by carnal knowledge charged, rape by sexual assault proved → no conviction for sexual assault (the modes are distinct), but conviction for **acts of lasciviousness** (*People v. Pareja*).
  - Illegal manufacture of firearms charged → conviction for **illegal possession**, since manufacture includes possession.

## Sec. 6 – Promulgation of judgment
- **How:** by reading the judgment in the presence of the accused and any judge of the court. The **whole decision** must be read, not just the dispositive portion (*Dizon v. Lopez*). The accused's **personal presence is mandatory**.
- **Exceptions:**
  - **Light offense:** in the presence of counsel or a representative.
  - **Judge absent** or outside the province or city: by the **clerk of court**.
  - **Accused detained in another province or city:** by the **executive judge of the RTC** there, on request.
- **Notice:** to the accused personally or through his bondsman or warden, and counsel. If tried in absentia after jumping bail or escaping, notice goes to his **last known address**.
- **Schedule (Revised Guidelines):** the promulgation date is announced in open court and set not more than **90 calendar days** from submission.
- **Bail pending appeal:** the promulgating court may accept the notice of appeal and approve bail. If the conviction changed the offense from **non-bailable to bailable**, only the **appellate court** may resolve bail.

### Promulgation in absentia
- Allowed when the accused fails to appear despite notice, so that jumping bail cannot subvert the process.

> **Elements — "Record + Serve":** (1) the judgment is **recorded** in the criminal docket; and (2) a copy is **served** on the accused at his last known address, or on counsel. If he is at large, recording is the notice (*Estrada v. People*; *Pascua v. CA*).

- **Effect if convicted and absence unjustified:** he **loses his remedies** (motion for new trial or reconsideration, and appeal), and the court orders his arrest. His absence is presumed unjustified.

> **To regain remedies — "Surrender + Motion within 15":** within **15 days** from promulgation, he must (1) **surrender** and (2) file a **motion for leave** stating the reasons for his absence. If justified, he may avail of the remedies within 15 days from notice.

- **Surrender** means physical, voluntary submission to the court. Filing a notice of appeal through counsel is **not** surrender (*Villena v. People*; *Salvador v. Chua*). Without a motion for leave, an MR should not be entertained.

## Sec. 7 – Modification of judgment; finality
- **Only the accused** may move to modify or set aside a judgment of conviction, before it becomes final or before appeal is perfected.

> **A judgment becomes final (except when death is imposed) — "LSWP" ("Lapse, Service, Waiver, Probation"):**
> 1. **L**apse of the 15-day appeal period
> 2. **S**ervice of sentence, partial or total (e.g., starting to serve on the day of promulgation)
> 3. **W**aiver of the right to appeal in writing
> 4. **P**robation applied for, which waives appeal (Probation Law, Sec. 4)

- Once final, the trial court **loses jurisdiction** to alter it.

## Secs. 8–9 – Entry of judgment; immutability; probation
- **Entry (Rule 36):** the date of finality is the date of entry. The record holds the dispositive part with the clerk's certificate of finality.
- **Immutability:** a final judgment cannot be modified in any respect, even to correct errors of fact or law, by any court. Execution is a ministerial duty.

> **Exceptions to immutability — "CNVS":** **C**lerical errors; **N**unc pro tunc entries causing no prejudice; **V**oid judgments; **S**upervening circumstances making execution unjust or inequitable.

- The SC has also corrected a penalty that did not conform to law despite finality (*Rigor v. Superintendent*), and set aside an entry of judgment where the accused had no lawyer (*Delgado v. CA*).
- **Sec. 9:** Rule 120 does not affect laws on suspension of sentence, probation or parole.
`,

  121: `
## Overview
These are the trial court's **own remedies** against a **judgment of conviction**, available **before it becomes final**. Both are initiated by the accused, or by the court motu proprio **only with the accused's consent**.

## Sec. 1 – When and by whom
- **Time:** any time before the judgment of conviction becomes final, i.e., within **15 days** from promulgation or notice of the final order. Missing the period makes the decision final.
- **Who:** the accused, or the court with the accused's consent. A motion **not initiated by the accused** should be denied outright (*Potot v. People*).
- **Why consent is needed:** to protect the accused from defending himself anew against graver offenses or penalties the prosecution or court overlooked. Even a manifest substantial error after valid promulgation can be corrected only with his consent (*People v. Astudillo*).

## Secs. 2–3 – Grounds
| | New trial (Sec. 2) | Reconsideration (Sec. 3) |
|---|---|---|
| Grounds | (a) Errors of law or irregularities **during trial** prejudicial to the accused's substantial rights; (b) **Newly discovered evidence** | Errors of law or fact **in the judgment** |
| Further proceedings? | Yes; the case is reopened | No; the court re-examines its findings and conclusions |

> **New trial grounds — "E-N":** **E**rrors during trial, **N**ew evidence. An error found in the **judgment itself** is a ground for **reconsideration**, not new trial (*People v. Enriquez*).

### Newly discovered evidence: the Berry Rule (Berry v. State of Georgia, 1851)
> **Mnemonic — "After Reasonable Material Change":**
> 1. Discovered **After** trial
> 2. Could not have been discovered and produced at trial with **Reasonable** diligence
> 3. **Material**, not merely cumulative, corroborative or impeaching
> 4. Would probably **Change** the judgment if admitted

- The movant has the burden. The test has a **temporal** aspect (when it was discovered) and a **predictive** aspect (when it could have been discovered) (*Custodio v. Sandiganbayan*).
- The evidence must have **existed during trial** but been unknown. Payments made after judgment are not newly discovered (*Baylosis v. People*). Vouchers the accused's own office prepared could have been found with diligence (*Cabarlo v. People*).

### Recantation
- Viewed with **disfavor**: easily obtained by intimidation or money, unreliable, and likely to be repudiated. Otherwise litigation would never end (*People v. Suan*).
- **Exception:** a new trial may be granted when the recanting witness's testimony was the **only evidence** supporting the conviction (*US v. Dacir*; *People v. Bocar*).

## Secs. 4–5 – Form, notice and hearing
> **Form — "W-G-A-N":** in **W**riting; stating the **G**rounds; if based on newly discovered evidence, supported by **A**ffidavits of the witnesses or authenticated copies of documents; **N**otice to the prosecutor.

- The motion must be **set for hearing** (Rule 15). Without a notice of hearing, it is a **mere scrap of paper** that does not toll the appeal period (*Casalla v. People*).
- **Fresh period rule:** after denial of the motion, the accused has a **fresh 15 days** to appeal (*Neypes v. CA*, applied to criminal cases in *Yu v. Tatad*).
- **Sec. 5:** questions of fact may be heard by affidavits or otherwise.

### Conformity of the public prosecutor
- On the **criminal aspect**, an MR of a dismissal or acquittal may be filed only by the **public prosecutor**, and an appeal only by the **State through the OSG**.
- The **private complainant** may move for reconsideration or appeal only on the **civil aspect**, without the prosecutor's conformity. If denied, he may appeal, or file certiorari or mandamus for grave abuse (*Mobilia Products v. People*).
- An MR of an **acquittal** is allowed only for grave abuse amounting to lack of jurisdiction, as a step toward certiorari.

## Sec. 6 – Effects of granting the motion
| Ground | Effect on proceedings and evidence |
|---|---|
| Errors of law or irregularities | Proceedings and evidence affected are **set aside and taken anew**; additional evidence may be allowed |
| Newly discovered evidence | Evidence already adduced **stands**; the new evidence is taken and considered with it |
| In all cases | The original judgment is **vacated** and a new one is rendered |

- The **mere grant vacates** the original judgment, whatever the result of the new trial. The case returns to its status before judgment.
- A grant of new trial is **not an acquittal**. The case is tried **de novo** (*Obugan v. People*).
`,

  122: `
## Overview
**Any party** may appeal a judgment or final order **unless the accused would be placed in double jeopardy** (Sec. 1). An appeal in a criminal case **throws the whole case open for review**, including errors not assigned. Appeal is a statutory privilege, so the rules on its manner and periods are applied strictly.

## Sec. 1 – Who may appeal
### The prosecution
- **General rule:** it **cannot appeal an acquittal**, which is immediately final. Nor can it appeal to seek a **heavier penalty** (*People v. Ursua*).

> **It may appeal a dismissal when all three concur — "C-N-L":** (1) the dismissal was on the accused's motion or with his express **C**onsent; (2) it is **N**ot an acquittal or a ruling on the merits; (3) the question is purely **L**egal, so a reversal means remand for trial (*People v. Obsania*).

- Only the **OSG** may represent the People on the criminal aspect before the CA and SC.

### The offended party
- May appeal **only the civil aspect**, even after an acquittal.
- May file **Rule 65 certiorari in his own name**, not the People's, without the OSG (*People v. CA*, 2015).
- **Assailing an acquittal:** only by Rule 65 certiorari for grave abuse of discretion or denial of due process. That is not double jeopardy, because a **void judgment creates no jeopardy**.

## Secs. 2–3 – Where and how to appeal
| Decision of | Appeal to | Mode |
|---|---|---|
| MeTC, MTCC, MTC, MCTC | RTC | Notice of appeal filed with the trial court (Sec. 3[a]) |
| RTC, original jurisdiction | CA | Notice of appeal (questions of fact or mixed) |
| RTC, appellate jurisdiction | CA | Petition for review, Rule 42 |
| RTC imposing reclusion perpetua or life imprisonment, or a lesser penalty for offenses from the same occurrence | CA | Notice of appeal (Sec. 3[c]) |
| RTC imposing death | CA | Automatic review, no notice needed (Sec. 3[d]); death is barred by RA 9346 |
| RTC, pure questions of law | SC | Rule 45 |
| CA, penalty other than death, RP or life | SC | Petition for review on certiorari, Rule 45 (questions of law) |
| CA imposing RP or life, or a lesser penalty for offenses from the same occurrence | SC | Notice of appeal filed with the CA (Rule 124, Sec. 13[c]) |
| CA finding death warranted | SC | CA renders judgment, withholds entry, and certifies the case to the SC |

- Using a petition for review instead of a notice of appeal is a **wrong mode** and is dismissible. The modes are **not interchangeable** (*Yalong v. People*).
- ***People v. Mateo* (2004):** death, reclusion perpetua and life imprisonment cases now pass through **intermediate review by the CA** before reaching the SC.

> **Notice of appeal contents — "P-J-C-D":** the **P**arties; the **J**udgment or part appealed from; the **C**ourt appealed to; material **D**ates showing timeliness.

- The appeal is **perfected as to the appellant on timely filing**. The court loses jurisdiction once **all parties'** appeal periods expire.
- An order **disallowing** a notice of appeal is not appealable; the remedy is **Rule 65**.

### Petition periods
| Petition | Period | Extension |
|---|---|---|
| Rule 42 (to CA) | 15 days from notice or denial of MNT/MR | 15 days only, on motion with full payment of fees |
| Rule 45 (to SC) | 15 days from notice or denial of MNT/MR | 30 days only, for justifiable reasons |

- A Rule 45 petition requires **₱500 deposit** for costs, proof of service, certified true copies, and a certification against forum shopping. Non-compliance is ground for dismissal. **Grant of parole does not moot an appeal** (*People v. Abesamis*).
- **E-filing (Efficient Use of Paper Rule):** soft copies in PDF are due within **24 hours** by email, or simultaneously by CD. The filing date is the date of the **hard copy**.

## Secs. 4–5 – Service and waiver of notice
- Service is **personal**; if that fails, by registered mail or substituted service (Rule 13). If those fail, by delivery to the clerk of court.
- **Failure to serve** the notice of appeal is **not fatal** if the notice was filed on time (*Moll v. Buban*). The appellee may waive notice, and the appellate court may entertain the appeal in the interest of justice.

## Sec. 6 – When to appeal
- Within **15 days** from promulgation of the judgment or notice of the final order. Perfection within the period is **mandatory and jurisdictional**; failure makes the judgment final.
- **Reckoning:** for the accused, from **promulgation**. For a private offended party appealing the civil aspect, from **receipt** of the judgment. In the CA and SC, "promulgation" is filing the signed decision with the clerk, so the parties need not be present.
- The rule says the period is **suspended** by an MNT/MR. Under the **fresh period rule**, the accused instead gets a **fresh 15 days** from notice of denial (*Neypes*, applied in *Yu v. Tatad* and *Rodriguez v. People*).

## Secs. 7–10 – Records and transcripts
- **Sec. 7 – Transcripts:** if the **accused** appeals, the **whole** transcript is prepared. If the **People** appeal, only the **portions the court specifies** on motion. In death cases, the reporter files within **30 days** from promulgation, extendible only by the SC. The reporter files the original plus **four** copies.
- **Sec. 8:** the clerk transmits the complete record and notice of appeal within **5 days** from filing of the notice. The original and three transcript copies follow without undue delay; one copy stays below.
- **Sec. 9 – Appeal to the RTC:** record transmitted within **5 days** of perfection; parties notified; **memoranda within 15 days** of the notice. The RTC decides on the **entire record** and is not limited to assigned errors. **Failure to file a memorandum is not a ground to dismiss** a criminal appeal (*Sanico v. People*).
- **Sec. 10 – Death penalty:** records go to the CA for automatic review within **20 days but not earlier than 15 days** from promulgation or denial of MNT/MR. The transcript follows within **10 days** of filing. A **death case appeal cannot be withdrawn**; an RP or life appeal can.

## Sec. 11 – Effect of appeal
> **Mnemonic — "One-Civil-Stay"**

- **(a) One appeals:** an appeal by one or more accused does **not affect those who did not appeal**, except insofar as the appellate judgment is **favorable and applicable** to them. A non-appellant cannot be made to pay exemplary damages added on appeal (*People v. Gandia*). A co-accused who **withdrew** his appeal benefits from the appellant's acquittal when their convictions are **inextricably linked** (*People v. Rodriguez*).
- **(b) Civil aspect:** the offended party's appeal of the civil aspect does not affect the criminal aspect. Civil indemnity may be increased only if that does not require a graver conviction or penalty (*Heirs of Rillorta v. Firme*).
- **(c) Stay:** execution is stayed **only as to the appealing party**. A co-accused who did not appeal gets no stay; his period keeps running (*Lubrica v. People*).

## Sec. 12 – Withdrawal of appeal
| Court | Withdrawal allowed | Effect |
|---|---|---|
| Trial court (RTC or first-level) | Even after perfection, **before the records are forwarded** to the appellate court | Judgment becomes final |
| RTC as appellate court (from first-level courts) | In its discretion, on motion **before it renders judgment** on appeal | Judgment of the court of origin becomes final; case remanded for execution |

## Sec. 13 – Counsel de oficio on appeal
- The trial court clerk must ask a **confined appellant** whether he wants the RTC, CA or SC to appoint counsel de oficio. The clerk transmits a certificate of compliance with the record.
- If an accused withdraws his appeal **solely because of poverty**, the court must assign counsel de oficio instead (*People v. Rio*).
`,

  123: `
## Overview
> **Uniform procedure:** the MeTC, MTC and MCTC follow the **same procedure as the RTC**.

> **Two exceptions — "Particular or Summary":**
> 1. Where a **particular** provision applies only to one of the courts.
> 2. Criminal cases governed by the Revised Rule on **Summary** Procedure.

### Related points elsewhere in the reviewer
- Appeal from first-level courts goes to the **RTC** by **notice of appeal** filed with the trial court (Rule 122, Sec. 3[a]).
- In an appeal to the RTC, memoranda are due within **15 days**; the RTC decides on the **entire record**; failure to file a memorandum is not a ground to dismiss (Rule 122, Sec. 9; *Sanico v. People*).
- Summary procedure cases: decision within **30 days** from termination of hearing (Rule 120 periods).
- **Ordinances under summary procedure:** prescription is interrupted **only by filing in court** (*Zaldivia v. Reyes*; *Jadewell v. Lidua*).
- **Theft in first-level courts**, BP 22 and other summary procedure cases may have their civil aspect referred to mediation (Rule 118).
- Under the Revised Guidelines, in **first-level courts**, testimony consists of sworn statements given to police, affidavits before the prosecutor, or judicial affidavits, subject to added direct and cross (Rule 119).
`,

  124: `
## Overview
Rule 124 governs criminal appeals in the CA: counsel, briefs, dismissal, the CA's powers, certification to the SC, new trial and reconsideration. The **title of the case stays as in the court of origin**; the parties become **appellant and appellee** (Sec. 1).

## Sec. 2 – Counsel de oficio
> **As a matter of course — "CNS":** the CA clerk designates counsel de oficio if the record shows the accused is **C**onfined in prison, has **N**o counsel de parte on appeal, or **S**igned the notice of appeal himself.

- **By request:** an appellant **not confined** may get counsel de oficio by requesting it within **10 days** from receipt of the notice to file brief and establishing his right to it.

## Secs. 3–7 – Briefs
> **Periods — "30–30–20":**

| Brief | Period |
|---|---|
| Appellant's brief | **30 days** from notice that the evidence is attached to the record |
| Appellee's brief | **30 days** from receipt of the appellant's brief |
| Reply brief | **20 days** from receipt of the appellee's brief, covering only matters not in the appellant's brief |

- **Copies:** the Rule says **7 copies plus 2** served on the other side. Under the Efficient Use of Paper Rule (A.M. No. 11-9-4-SC), it is **one original plus two copies** with annexes. Annexes the other party already has need not be served again.
- Failure to serve two adverse parties through excusable oversight is **not a ground for dismissal**; the court orders service (*Go v. Chaves*).
- **Sec. 5 – Extensions** are allowed only for good and sufficient cause, and only if the motion is filed **before the period expires**.
- **Sec. 6 – Form:** printed, encoded or typewritten, double-spaced, on **legal-size paper (330 mm × 216 mm)**.
- **Sec. 7 – Contents:** as in Rule 44, Secs. 13–14, with a **certified true copy of the decision** appended to the appellant's brief.

> **Appellant's brief (Rule 44, Sec. 13) — "Some Attorneys Seem So Insecure About Real Arguments":**
> 1. **S**ubject index with digest of arguments and table of cases and statutes
> 2. **A**ssignment of errors
> 3. **S**tatement of the Case
> 4. **S**tatement of Facts
> 5. **I**ssues
> 6. **A**rgument
> 7. **R**elief
> 8. **A**ppendix: copy of the judgment appealed from

- **Appellee's brief (Rule 44, Sec. 14):** subject index; Statement of Facts (accepting the appellant's) or Counter-Statement of Facts; Argument.

## Sec. 8 – Dismissal of appeal
| Ground | Notes |
|---|---|
| Failure to file the appellant's brief on time | On the appellee's motion or motu proprio, with notice to the appellant. **Not if the appellant has counsel de oficio** |
| Abandonment: appellant escapes, jumps bail or flees abroad while the appeal is pending | He **loses standing in court** until he surrenders. The CA may still take the appeal to prevent a miscarriage of justice |

- This rule extends to the SC through Rule 125, Sec. 1 (*People v. Taruc*). The accused need not appear at the promulgation of the CA decision.

## Secs. 9–12 – Disposition and the CA's powers
- **Sec. 9:** appeals of **detained** accused get precedence. The accused need not be present at the hearing of the appeal.
- **Sec. 10:** no reversal or modification except for **substantial error** that injuriously affected the appellant's substantial rights. Strong presumption that the trial court's discretion was soundly exercised.

> **Sec. 11 – Scope of judgment — "RAM + Penalty + Remand + Dismiss":** the CA may **R**everse, **A**ffirm or **M**odify; increase or reduce the **penalty**; **remand** to the RTC for new trial or retrial; or **dismiss** the case.

- By appealing, the accused waives double jeopardy, so the CA may **impose a higher penalty** (*People v. Mirandilla*).
- The CA may order a new trial for reasons **beyond Rule 121**, e.g., documents released only after conviction showing the accused was an undercover agent (*Jose v. CA*).
- **Sec. 12 – Power to receive evidence:** the CA may try cases, receive evidence and conduct new trials. Hearings must be continuous and finished within **3 months**, unless the Chief Justice extends.

## Sec. 13 – Certification or appeal to the Supreme Court
| CA finding | What the CA does | Route to the SC |
|---|---|---|
| Death should be imposed | Renders judgment, **withholds entry**, and certifies the entire record | Automatic review. Lesser penalties from the same occurrence are included if appealed |
| Reclusion perpetua, life imprisonment, or a lesser penalty | Renders and enters judgment | **Notice of appeal** filed with the CA |

### Sandiganbayan (2018 Revised Internal Rules)
- **Original** jurisdiction → SC by **notice of appeal**.
- **Appellate** jurisdiction → SC by **Rule 45** petition.
- **Death imposed** → records forwarded for automatic review within **5 days after the 15th day** from promulgation or denial of MNT/MR.
- **Civil cases** → Rule 45.

## Secs. 14–15 – New trial in the CA
- **Ground:** only **newly discovered evidence** material to the defense. The motion follows Rule 121, Sec. 4.
- **When:** after perfection of the appeal and **before the CA judgment of conviction becomes final**, which is 15 days from service. A motion filed after denial of a prohibited second MR is late; a **second MR does not stop finality** (*Dinglasan v. CA*).
- **Sec. 15 – Where conducted:** the CA may receive the evidence itself (Sec. 12) or refer reception to the court of origin. Either way, it **keeps jurisdiction**, including over bail (*People v. Fitzgerald*).

## Secs. 16–18 – Reconsideration, mittimus, applicable civil rules
- **Sec. 16 – Motion for reconsideration:** within **15 days** from notice, served on the adverse party and stating its grounds. The **mittimus is stayed** while it is pending. **No second MR** is allowed.
- **Mittimus** is the commitment order after conviction, the criminal counterpart of execution. Transferring a prisoner to the Bureau of Corrections while his MR is pending is **premature** (*Obugan v. People*).
- **Sec. 17:** after entry of judgment, the record and a certified copy of the judgment are **remanded** to the court of origin.
- **Sec. 18:** civil **Rules 42, 44–46 and 48–56** apply to criminal cases where consistent. The list is **exclusive**, so **Rule 41** (civil appeals) and **Rule 47** (annulment of judgment) do **not** apply in criminal cases (*Llamas v. CA*; *People v. Bitanga*).
`,

  125: `
## Sec. 1 – Uniform procedure
- Unless the Constitution or law provides otherwise, SC procedure in original and appealed cases is the **same as in the CA**. For example, Rule 124, Sec. 8 (dismissal when the appellant escapes or jumps bail) applies in the SC (*People v. Taruc*).

## Sec. 2 – Review of CA decisions
- Review of CA decisions in criminal cases follows the **same procedure as civil cases (Rule 45)**.

## Sec. 3 – Equally divided Court
- If the SC en banc is **equally divided**, or the necessary majority cannot be had on whether to acquit, the case is **deliberated again**. If still no decision, the **conviction is reversed and the accused acquitted**.

> **Mnemonic:** "Tie goes to the accused."

## Cases the SC en banc acts on (A.M. No. 10-4-20-SC, Rule 2, Sec. 3)
> **Mnemonic:** "Laws, Envoys, Commissions, Discipline, Doctrine, Divisions, Impact, Policy"

1. **Laws:** constitutionality of a treaty, law, executive order, ordinance or regulation; novel questions of law
2. **Envoys:** cases affecting ambassadors, public ministers and consuls
3. **Commissions:** decisions of the COMELEC and COA
4. **Discipline:**
   - dismissal of judges or court personnel, disbarment, suspension **over 1 year**, or a fine **over ₱40,000**
   - reinstatement of a judge or lawyer, or lifting of a suspension
   - discipline of SC justices or presiding and associate justices of the appellate courts
5. **Doctrine:** modifying or reversing a doctrine of the en banc or a division
6. **Divisions:** conflicting division decisions; three votes not obtained in a division; cases referred by at least three division members
7. **Impact:** division cases with huge financial impact on businesses or affecting a community's welfare, and other cases the Court deems important
8. **Policy:** administrative supervision of all courts and their personnel
`,

  126: `
## Overview
Rule 126 implements **Art. III, Sec. 2**: no search warrant shall issue except on **probable cause personally determined by the judge** after examining the complainant and witnesses under oath, **particularly describing** the place to be searched and the things to be seized. A warrant is **not a license for a fishing expedition**; nothing is left to the officer's discretion.

## Sec. 1 – Definition and nature
> **Definition — "Written, People, Judge, Officer, Property":** an order in **writing**, issued in the name of the **People** of the Philippines, signed by a **judge**, directed to a peace **officer**, commanding him to search for personal **property** described in it and bring it before the court.

- A **special criminal process**, not a criminal action and not a civil process. Like a writ of discovery issued under the State's **police power**, in a pending case or in anticipation of one (*UNILAB v. Isip*; *Malaloan v. CA*).
- **Venue is not jurisdictional** in search warrant proceedings (*Pilipinas Shell v. Romars*).
- The **People are an indispensable party**, and the OSG generally assails adverse orders. A private complainant (e.g., one complaining to the NBI or BFAD) may participate to defend the warrant and oppose a motion to quash (*20th Century Fox*; *UNILAB*).
- **Search warrant proceedings vs. preliminary investigation:** independent. A court's finding that no offense exists is only for issuing or quashing the warrant and **does not bind the prosecutor** (*Solid Triangle v. Sheriff*).

## Sec. 2 – Where to apply
| Situation | Court |
|---|---|
| Criminal action already filed | **Only the court where it is pending.** Another court only for extreme, compelling, proven reasons (*Malaloan*) |
| No criminal action, general rule | Any court within whose territorial jurisdiction the crime was committed |
| No criminal action, compelling reasons stated in the application (e.g., transitory or continuing offenses) | Any court in the **judicial region** where the crime was committed (if the place is known), or where the warrant will be enforced |

- The **statement of compelling reasons is mandatory**; without it, the application is insufficient. But the defect is **waived if not raised in the first motion to quash** (omnibus motion rule; *Pilipinas Shell*).

> **Special criminal cases (Manila and QC RTCs) — "HIDE":** **H**einous crimes, **I**llegal gambling, dangerous **D**rugs, illegal possession of firearms and **E**xplosives.

- Under A.M. No. 99-10-09-SC and A.M. No. 03-8-02-SC, the **Executive and Vice-Executive Judges** of the Manila and Quezon City RTCs may issue warrants **enforceable nationwide**. Applicants: PNP, NBI, PAOC-TF, REACT-TF, and later PDEA and the Bureau of Customs. **Compelling reason is presumed** (*Laud v. People*).

## Sec. 3 – Property that may be seized
> **Mnemonic — "SFM" ("Subject, Fruits, Means"):** (1) **S**ubject of the offense; (2) **F**ruits: stolen or embezzled property and other proceeds or fruits of the offense; (3) **M**eans: used or intended to be used to commit the offense.

- "**Personal property**" refers to **mobility**: anything transportable, including **human remains**, which are the corpus delicti (*Laud v. People*).
- Printers, scanners, manuals and documents are not subject, fruits or means of illegal telephone connections under PD 401, so they cannot be seized (*PLDT v. Razon*). Items outside Sec. 3 must be **returned**.

## Secs. 4–6 – Requisites for issuing a search warrant
> **Mnemonic — "Please Only Personally Examine Particulars":**
> 1. **P**robable cause
> 2. In connection with **O**ne specific offense
> 3. **P**ersonally determined by the judge
> 4. After **E**xamination, in writing and under oath, through searching questions and answers, of the complainant and witnesses on facts personally known to them, with their sworn statements attached
> 5. **P**articularly describing the place to be searched and the things to be seized, which may be anywhere in the Philippines

- If any requisite is missing, the aggrieved party may **move to quash**.

### (1) Probable cause
- Facts that would lead a reasonably discreet and prudent person to believe an offense was committed and that the **objects sought are in the place to be searched**.
- Must be shown by the **best evidence obtainable**, especially for a negative ingredient such as the **absence of a license** (*PICOP v. Asuncion*). Generalizations are not enough.
- **Hearsay tips** from informants may be used if **personally followed up and validated** (*Columbia Pictures v. CA*).

### (2) One specific offense
- Prevents **scatter-shot warrants** (*Stonehill v. Diokno*). A warrant for "violation of the Securities Regulation Code and estafa" was **void**, because the SRC has many distinct offenses and estafa has several modes (*People v. Pastrana*, 2018).
- **Valid:** a warrant for "violation of RA 6425" when the body specifies possession (*Olaes*); one warrant for shabu, marijuana and paraphernalia, since they are offenses of the **same class** (*Dichoso*); "PD 1866" covering firearms and explosives (*Prudente v. Dayrit*).
- **Several counts of one offense** are fine: pirated videotapes (*Columbia*); six counts of murder (*Laud*).

### (3)–(4) Personal examination by the judge
- The power to issue is **exclusively the judge's**. The examination must be **probing and exhaustive**, not a rehash of affidavits (*Nala v. Barroso*).
- **Test of an affidavit's sufficiency:** could **perjury** be charged on it (*Alvarez v. CFI*)?
- Failure to attach depositions is **not fatal** if the record shows the testimony presented (*People v. Tee*).

### (5) Particular description
- **Place:** sufficient if the officer can, with reasonable effort, identify it and distinguish it from others (*People v. Tee*).
- **Things:** sufficient when the description is as specific as circumstances allow, states a conclusion of fact (not of law), or is limited to things directly related to the offense (*Bache v. Ruiz*).
- **Valid:** "undetermined amount of marijuana" or shabu and paraphernalia (*Dichoso*; *Tee*). A wrong first name with an alias and address that identify the person is a valid **descriptio personae**; what is prohibited is a warrant against an **unnamed party** (*Nala v. Barroso*).
- **Void general warrant:** "documents, papers and other records of the CPP/NPA/NDF ... subversive books" (*Nolasco v. Paño*).

### Cybercrime warrants (A.M. No. 17-11-03-SC, 2018)
- **Venue:** for RA 10175 Secs. 4–5 offenses, designated cybercrime courts of the place where any element occurred, where the computer system is, or where damage occurred. The cybercrime courts of **QC, Manila, Makati, Pasig, Cebu, Iloilo, Davao and Cagayan de Oro** may issue warrants enforceable nationwide and abroad. For Sec. 6 crimes (RPC and special-law crimes committed through ICT): **regular RTCs**.
- The judge personally examines the applicant and witnesses, as in Rule 126.
- **Effectivity:** up to **10 days** from issuance, **extendible once by up to 10 days** for justifiable reasons. Compare Rule 126: valid 10 days, then void.
- Service abroad goes through the **DOJ Office of Cybercrime**.
- *Types (beyond the book's text):* Warrant to Disclose Computer Data, Warrant to Intercept Computer Data, Warrant to Search, Seize and Examine Computer Data, and Warrant to Examine Computer Data.

## Secs. 7–11 – Executing the warrant
### Sec. 7 – Knock and announce
- Officers must announce their presence, identify themselves, show and explain the warrant in a language the occupants understand. They may **break** any outer or inner door or window **only if refused admittance** after notice of their purpose and authority, or to free themselves or anyone aiding them when unlawfully detained inside (*People v. Huang*). "Breaking" includes lifting a latch, turning a knob, or pushing open a closed door.

> **Unannounced entry allowed — "RKPD":** (1) **R**efusal to open on demand; (2) occupants already **K**now the officers' identity and authority; (3) honest belief of imminent **P**eril to life or limb; (4) occupants, aware of someone outside, act in a way suggesting escape or **D**estruction of evidence (*People v. Salanguit*).

- The list is **not exclusive**. Reasonable suspicion that knocking would be dangerous or futile suffices (*Richards v. Wisconsin*).

### Sec. 8 – Witnesses to the search
> **Order of hierarchy — "Occupant → Family → Two Neighbors":** (1) the **lawful occupant**; (2) any **member of his family**; (3) only in their absence, **two witnesses** of sufficient age and discretion residing in the same locality.

- **Mandatory**; police cannot substitute witnesses of their choice (*People v. Go*). A **security guard** is not a lawful occupant or family member.
- An occupant **handcuffed to a chair in another room** did not witness the search (*People v. Go*). Calling witnesses in **after entering** is irregular (*People v. Ortiz*). Using a court bailiff and barangay security officer after the wife and maid refused was **valid** (*Sony v. Right Future*).

### Secs. 9–11 – Time, validity, receipt
- **Sec. 9 – Time:** in the **daytime**, unless the affidavit asserts the property is on the person or in the place to be searched, in which case the warrant may direct service **at any time of day or night**.
- **Sec. 10 – Validity:** **10 days** from its date, then void. **No territorial limit** on enforcement, as long as it is implemented at the premises described (*Malaloan*).
- **Sec. 11 – Receipt:** a detailed receipt goes to the **lawful occupant** in whose presence the search was made. If he is absent, the receipt is left at the place in the presence of **two witnesses** of sufficient age and discretion residing in the locality. Giving the receipt to a **barangay tanod while the occupant is present** violates the rule (*People v. Del Castillo*).

## Sec. 12 – Delivery, inventory and return
- **(a)** The officer must **forthwith deliver** the seized property to the **issuing judge** with a **true inventory verified under oath**. This keeps the items in **custodia legis** and prevents substitution. Sending specimens straight to the NBI first violates the rule (*People v. Gesmundo*).
- **(b)** **Ten days after issuance**, the judge ascertains whether a return was made. If not, he summons the officer to explain. If made, he checks compliance with Sec. 11 (receipt) and requires delivery of the property.
- **(c)** The return is logged by the custodian of the **search warrant log book**.
- A violation is **contempt of court**.
- **The judge's three duties (Santos v. Pryce Gases):** ensure (1) a detailed **receipt** was issued, (2) the property was **delivered**, and (3) a verified true **inventory** was submitted.

### Chain of custody in drug cases (RA 9165, Sec. 21)
> **Original Sec. 21 witnesses — "AMDE":** the **A**ccused (or representative or counsel), a **M**edia representative, a **D**OJ representative, and an **E**lected public official, who sign the inventory.

- The apprehending team must **immediately after seizure** physically inventory and photograph the items in their presence.
- Items go to the **PDEA forensic laboratory within 24 hours**. The certification issues within **24 hours** of receipt. After the case is filed, the court conducts an **ocular inspection within 72 hours**, and destruction follows within **24 hours**.
- **Doctrine (People v. Punzalan):** strict compliance is not required. What matters is preserving the **integrity and evidentiary value** of the seized items. Non-compliance goes to **weight, not admissibility**.
- *Beyond the book:* **RA 10640 (2014)** changed the witnesses to an **elected public official plus a representative of the National Prosecution Service or the media**, and allows inventory at the nearest police station. Later cases, e.g., *People v. Lim* (2018), require the prosecution to **explain and justify any deviation**.

## Warrantless searches
- A warrantless search **still requires probable cause, except plain view**. Whether a search is reasonable is a **judicial question**, judged by its purpose, presence of probable cause, manner, place and the character of the articles seized.

> **Recognized exceptions — "Smart Police Expect Consent; Stop Moving And Comply":** **S**earch incident to lawful arrest; **P**lain view; **E**xigent circumstances; **C**onsented search; **S**top and frisk; **M**oving vehicle; **A**irport, seaport and public transport; **C**ustoms searches.

| Exception | Key rules |
|---|---|
| **Search incident to lawful arrest** (Sec. 13) | A **valid arrest comes first**; the process cannot be reversed. A search substantially contemporaneous with the arrest may precede it if probable cause to arrest existed at the outset. Scope: the person and the **area within immediate control**. Purposes: officer safety and preventing destruction of evidence (*Valeroso*; *People v. Calantiao*). An illegal arrest makes the search illegal — fruit of the poisonous tree |
| **Plain view** | Requisites: (a) **prior valid intrusion**; (b) **inadvertent** discovery; (c) incriminating nature **immediately apparent** from instant sensory perception; (d) seizure only, no further search. Not presumed; the State must prove it. Shabu inside a matchbox is not immediately apparent (*Sanchez v. People*) |
| **Exigent or emergency circumstances** | No opportunity to secure a warrant, e.g., during a coup when the courts were closed (*People v. De Gracia*) |
| **Consented search** | Consent must be **unequivocal, specific, intelligently given and free of duress**, proven by **clear and convincing evidence**. Factors: age, location, objection or passivity, education, coercive procedures, belief that nothing would be found, nature of questioning, environment, vulnerable state (*Caballes*; *Luz v. People*) |
| **Stop and frisk** (Terry search) | Needs a **genuine reason** from the officer's experience, not mere suspicion or a hunch; probable cause is not required. Limited to a **pat-down of outer clothing for weapons**. The search precedes any arrest. Valid: *Manalili* (reddish eyes, swaying, in a drug haven); *Solayao* (drunk, companions fled). Invalid: *Sanchez* (merely left a drug pusher's house); *Cogaed* (the jeepney driver, not the officer, judged him suspicious) |
| **Moving vehicle** | Mobility makes a warrant impracticable. An **extensive search** still needs **probable cause before it begins** (*People v. Mariacos*) |
| **Airport, seaport and public transport** | Reduced expectation of privacy; RA 6235, Sec. 9 makes ticket holders subject to search (*People v. Johnson*; *People v. Canton*). *Saluday v. People* (2018) allows routine inspection of **bus passengers** at terminals and in transit, if least intrusive, non-discriminatory, for public safety, and with safeguards against planting evidence. **Does not apply to private cars or taxis** |
| **Customs searches** | Standard exception, not discussed in the book's text |

## Sec. 14 – Motion to quash a search warrant or suppress evidence
| Situation | Where to file |
|---|---|
| A criminal action has been instituted | Only the court where the action is pending |
| No criminal action yet | The issuing court |
| Issuing court did not resolve, then a case is filed elsewhere | The court trying the criminal case |

- The court trying the case should rule on the warrant's validity so it can appreciate the evidence independently (*People v. Bans*; *SEC v. Mendoza*).
- **Who may file:** not only parties to the application, since a search warrant proceeding is **not an adversarial action** (*SEC v. Mendoza*).
- **Grounds may be extrinsic**, e.g., the place searched or items seized are not those described, or there is no probable cause.
- **Alternative, not cumulative.** A motion to quash and a motion to suppress are alternative remedies, to prevent forum shopping. The motion to quash is governed by the **omnibus motion rule**. A new issue may be raised later only if it (1) was **not available or existent** when the motion to quash was filed, or (2) involves **jurisdiction over the subject matter** (*Pilipinas Shell*).

### Search warrant vs. warrant of arrest
| | Search warrant (Rule 126) | Warrant of arrest (Rule 113) |
|---|---|---|
| Object | Personal property: subject, fruits or means of the offense | A person, so he may answer for an offense |
| Probable cause | Items are connected to the crime and will be found in the place to be searched | An offense was committed and the person probably committed it |
| Judge's examination | Personal examination of the complainant and witnesses required | No personal examination needed; independent evaluation of the record within 10 days |
| Time of service | Daytime, unless the warrant directs otherwise | Any time of day or night |
| Validity | 10 days from its date | Until served |
| Pending case | Not required; may issue before a case is filed | Presupposes a pending criminal case |
`,
};
