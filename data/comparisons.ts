import type { Comparison } from "@/lib/types";

export const COMPARISONS: Comparison[] = [
  {
    id: "cmp-1", rule: 115, title: "Ordinary witness vs. accused (self-incrimination)",
    headers: ["", "Ordinary witness", "Accused"],
    rows: [
      ["Must obey subpoena, take stand, be sworn?", "Yes", "No; may refuse to take the stand at all"],
      ["When invoked", "Only when an incriminating question is actually asked", "At the outset: refuses to testify altogether"],
      ["Effect of silence", "—", "Not used against him in any manner"],
    ],
  },
  {
    id: "cmp-2", rule: 115, title: "Speedy trial vs. speedy disposition",
    headers: ["", "Speedy trial (Art. III, Sec. 14[2])", "Speedy disposition (Art. III, Sec. 16)"],
    rows: [
      ["Scope", "Criminal trial", "All judicial, quasi-judicial and administrative bodies, before, during and after trial"],
      ["When invoked", "Before trial, via motion to dismiss (Rule 119, Sec. 9)", "Any time during the pendency of the case"],
    ],
  },
  {
    id: "cmp-3", rule: 115, title: "Cross-examination not completed",
    headers: ["Cause", "Effect on direct testimony"],
    rows: [
      ["Fault of the party presenting the witness, or of the witness", "Stricken"],
      ["Fault of the cross-examiner", "Stays (Fulgado v. CA)"],
      ["Death of the witness, no one at fault", "Not automatically stricken; the court weighs it"],
    ],
  },
  {
    id: "cmp-4", rule: 116, title: "Plea of guilty: capital vs. non-capital offense",
    headers: ["", "Capital offense (Sec. 3)", "Non-capital offense (Sec. 4)"],
    rows: [
      ["Searching inquiry", "Mandatory", "Not required"],
      ["Prosecution evidence", "Mandatory: guilt and degree of culpability", "Discretionary, only for the penalty"],
      ["Accused's evidence", "Must be allowed", "May be received for the penalty"],
    ],
  },
  {
    id: "cmp-5", rule: 116, title: "Arraignment schedules",
    headers: ["Situation", "Period"],
    rows: [
      ["Detained (Rule 116)", "Raffle within 3 days; arraign within 10 days from raffle; pre-trial within 10 days after arraignment"],
      ["Detained (Revised Guidelines)", "Arraignment and pre-trial within 10 calendar days from receipt of the case"],
      ["Not detained", "Within 30 days from acquiring jurisdiction over the person"],
      ["Quezon City trial courts", "7 days (detained) / 20 days (not detained)"],
    ],
  },
  {
    id: "cmp-6", rule: 117, title: "Motion to quash vs. provisional dismissal",
    headers: ["", "Motion to quash", "Provisional dismissal"],
    rows: [
      ["Who files", "Accused only", "Prosecution, accused, or both"],
      ["Grounds", "Limited to Sec. 3", "Not specified; reasons other than facial defects"],
      ["Form", "Sec. 2 requirements", "No form requirements"],
      ["When", "Before plea", "Even during trial, with the required consents"],
      ["Permanence", "Stays quashed; refiling depends on prescription and Sec. 6", "Temporary until the time-bar, then permanent"],
    ],
  },
  {
    id: "cmp-7", rule: 117, title: "Provisional dismissal time-bar",
    headers: ["Penalty", "Permanent if not revived within"],
    rows: [
      ["Imprisonment not exceeding 6 years, or a fine, or both", "1 year"],
      ["Imprisonment of more than 6 years", "2 years"],
    ],
  },
  {
    id: "cmp-8", rule: 117, title: "Acquittal vs. dismissal",
    headers: ["", "Acquittal", "Dismissal"],
    rows: [
      ["Basis", "On the merits", "Not on the merits (e.g., jurisdiction, venue)"],
      ["Appealable?", "No; final at any level (People v. Velasco)", "Prosecution may appeal if C-N-L concur"],
      ["Double jeopardy", "Bars second prosecution", "Bars only if without express consent, or if based on insufficiency of evidence or speedy trial"],
    ],
  },
  {
    id: "cmp-9", rule: 118, title: "Negative vs. affirmative defense",
    headers: ["", "Negative defense", "Affirmative defense"],
    rows: [
      ["Effect", "Prosecution proves guilt beyond reasonable doubt", "May modify (reverse) the order of trial"],
      ["Burden", "Prosecution", "Accused, by clear and convincing evidence"],
    ],
  },
  {
    id: "cmp-10", rule: 119, title: "Periods under the Revised Guidelines",
    headers: ["Case type", "Arraignment & pre-trial → trial", "Trial", "Decision"],
    rows: [
      ["Regular", "30 days", "180 days", "90 days from submission"],
      ["Drug cases", "—", "Within 60 days from filing of information", "15 days from submission"],
      ["Environmental", "30 days", "3 months, then 30 days for memoranda", "60 days from last day for memoranda"],
      ["IP cases", "30 days", "60 days per party (120 total), then 30 days for memoranda", "90 days from submission"],
      ["Referred to mediation", "30 days of mediation", "180 days", "90 days from submission"],
    ],
  },
  {
    id: "cmp-11", rule: 119, title: "Conditional examination: defense vs. prosecution witness",
    headers: ["", "Defense witness (Secs. 12–13)", "Prosecution witness (Sec. 15)"],
    rows: [
      ["Grounds", "Sick or infirm; resides more than 100 km away with no means; similar circumstances", "Too sick or infirm; or must leave the Philippines with no definite date of return"],
      ["Application", "Motion with notice, stating name, residence, substance, ground; with accused's affidavit", "Upon satisfactory showing"],
      ["Before whom", "A judge; a bar member designated by the judge; or an inferior court designated by a superior court", "Only the court where the case is pending"],
      ["Notice", "Served on prosecutor at least 3 days before; proceeds if prosecutor absent after notice", "Accused notified; unjustified absence is waiver"],
    ],
  },
  {
    id: "cmp-12", rule: 119, title: "State witness: Rule 119 vs. RA 6981",
    headers: ["", "Rule 119, Sec. 17", "RA 6981"],
    rows: [
      ["Granted by", "The court", "The DOJ"],
      ["How", "Motion before the prosecution rests", "Compliance with RA 6981; prosecutor excludes him from the information or moves for discharge"],
      ["Effect", "Acquittal (first jeopardy)", "Immunity; excluded, not acquitted, so no jeopardy"],
    ],
  },
  {
    id: "cmp-13", rule: 119, title: "Demurrer: with leave vs. without leave",
    headers: ["", "With leave of court", "Without leave of court"],
    rows: [
      ["If denied", "Accused may still present evidence", "Accused waives right to present evidence; decided on prosecution's evidence"],
      ["If granted", "Acquittal", "Acquittal"],
    ],
  },
  {
    id: "cmp-14", rule: 119, title: "Demurrer periods: Rule 119 vs. Revised Guidelines",
    headers: ["Step", "Rule 119, Sec. 23", "Revised Guidelines"],
    rows: [
      ["Motion for leave", "5 days after prosecution rests (non-extendible); opposition 5 days", "Oral motion, resolved orally"],
      ["Demurrer after leave granted", "10 days from notice; opposition 10 days", "10 calendar days; comment 10 calendar days"],
      ["Resolution", "—", "30 calendar days"],
    ],
  },
  {
    id: "cmp-15", rule: 120, title: "Periods to decide",
    headers: ["Court or case", "Period from submission"],
    rows: [
      ["Supreme Court", "24 months"],
      ["Lower collegiate courts", "12 months"],
      ["Other lower courts", "3 months (Constitution); 90 days (Revised Guidelines)"],
      ["Drug cases", "15 days"],
      ["Environmental cases", "60 days from last day to file memoranda"],
      ["IP cases", "90 days"],
      ["Summary procedure", "30 days from termination of hearing"],
    ],
  },
  {
    id: "cmp-16", rule: 120, title: "Kinds of acquittal and civil liability",
    headers: ["Kind of acquittal", "Civil liability ex delicto"],
    rows: [
      ["Accused not the author; evidence absolutely failed", "None, except from an independent civil action or another source of obligation"],
      ["Reasonable doubt", "May still be imposed on preponderance of evidence"],
    ],
  },
  {
    id: "cmp-17", rule: 121, title: "New trial vs. reconsideration",
    headers: ["", "New trial (Sec. 2)", "Reconsideration (Sec. 3)"],
    rows: [
      ["Grounds", "(a) Errors of law or irregularities during trial; (b) Newly discovered evidence", "Errors of law or fact in the judgment"],
      ["Further proceedings?", "Yes; the case is reopened", "No; the court re-examines findings and conclusions"],
    ],
  },
  {
    id: "cmp-18", rule: 121, title: "Effects of granting new trial",
    headers: ["Ground", "Effect"],
    rows: [
      ["Errors of law or irregularities", "Proceedings and evidence affected set aside and taken anew; additional evidence may be allowed"],
      ["Newly discovered evidence", "Evidence already adduced stands; new evidence considered with it"],
      ["In all cases", "Original judgment vacated; new one rendered"],
    ],
  },
  {
    id: "cmp-19", rule: 122, title: "Where and how to appeal",
    headers: ["Decision of", "Appeal to", "Mode"],
    rows: [
      ["MeTC, MTCC, MTC, MCTC", "RTC", "Notice of appeal with the trial court"],
      ["RTC, original jurisdiction", "CA", "Notice of appeal"],
      ["RTC, appellate jurisdiction", "CA", "Petition for review, Rule 42"],
      ["RTC imposing RP or life (or lesser from same occurrence)", "CA", "Notice of appeal"],
      ["RTC imposing death", "CA", "Automatic review (death barred by RA 9346)"],
      ["RTC, pure questions of law", "SC", "Rule 45"],
      ["CA, penalty other than death, RP or life", "SC", "Rule 45 petition"],
      ["CA imposing RP or life", "SC", "Notice of appeal filed with the CA"],
      ["CA finding death warranted", "SC", "CA renders judgment, withholds entry, certifies"],
    ],
  },
  {
    id: "cmp-20", rule: 122, title: "Rule 42 vs. Rule 45 petition periods",
    headers: ["Petition", "Period", "Extension"],
    rows: [
      ["Rule 42 (to CA)", "15 days from notice or denial of MNT/MR", "15 days only, on motion with full payment of fees"],
      ["Rule 45 (to SC)", "15 days from notice or denial of MNT/MR", "30 days only, for justifiable reasons"],
    ],
  },
  {
    id: "cmp-21", rule: 122, title: "Withdrawal of appeal",
    headers: ["Court", "Withdrawal allowed", "Effect"],
    rows: [
      ["Trial court (RTC or first-level)", "Even after perfection, before records are forwarded", "Judgment becomes final"],
      ["RTC as appellate court", "In its discretion, on motion before it renders judgment on appeal", "Judgment of the court of origin becomes final; remanded for execution"],
    ],
  },
  {
    id: "cmp-22", rule: 124, title: "Brief periods in the CA",
    headers: ["Brief", "Period"],
    rows: [
      ["Appellant's brief", "30 days from notice that the evidence is attached to the record"],
      ["Appellee's brief", "30 days from receipt of the appellant's brief"],
      ["Reply brief", "20 days from receipt of the appellee's brief"],
    ],
  },
  {
    id: "cmp-23", rule: 124, title: "CA findings and route to the SC",
    headers: ["CA finding", "What the CA does", "Route to the SC"],
    rows: [
      ["Death should be imposed", "Renders judgment, withholds entry, certifies the entire record", "Automatic review"],
      ["RP, life, or lesser penalty", "Renders and enters judgment", "Notice of appeal filed with the CA"],
    ],
  },
  {
    id: "cmp-24", rule: 126, title: "Where to apply for a search warrant",
    headers: ["Situation", "Court"],
    rows: [
      ["Criminal action already filed", "Only the court where it is pending (others only for extreme, compelling, proven reasons)"],
      ["No criminal action, general rule", "Any court within whose territorial jurisdiction the crime was committed"],
      ["No criminal action, compelling reasons stated", "Any court in the judicial region where the crime was committed, or where the warrant will be enforced"],
    ],
  },
  {
    id: "cmp-25", rule: 126, title: "Where to file a motion to quash a search warrant",
    headers: ["Situation", "Court"],
    rows: [
      ["A criminal action has been instituted", "Only the court where the action is pending"],
      ["No criminal action yet", "The issuing court"],
      ["Issuing court did not resolve, then a case is filed elsewhere", "The court trying the criminal case"],
    ],
  },
  {
    id: "cmp-26", rule: 126, title: "Search warrant vs. warrant of arrest",
    headers: ["", "Search warrant (Rule 126)", "Warrant of arrest (Rule 113)"],
    rows: [
      ["Object", "Personal property: subject, fruits or means", "A person, to answer for an offense"],
      ["Probable cause", "Items connected to the crime will be found in the place", "An offense was committed and the person probably committed it"],
      ["Judge's examination", "Personal examination of complainant and witnesses required", "Independent evaluation of the record within 10 days"],
      ["Time of service", "Daytime, unless the warrant directs otherwise", "Any time of day or night"],
      ["Validity", "10 days from its date", "Until served"],
      ["Pending case", "Not required", "Presupposes a pending criminal case"],
    ],
  },
  {
    id: "cmp-27", rule: 126, title: "Rule 126 warrant vs. cybercrime warrant",
    headers: ["", "Rule 126 search warrant", "Cybercrime warrant (A.M. No. 17-11-03-SC)"],
    rows: [
      ["Validity", "10 days, then void", "Up to 10 days, extendible once by up to 10 days"],
      ["Venue", "Rule 126, Sec. 2", "Designated cybercrime courts (Secs. 4–5); regular RTCs (Sec. 6 crimes)"],
      ["Service abroad", "—", "Through the DOJ Office of Cybercrime"],
    ],
  },
];
