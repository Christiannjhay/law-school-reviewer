import type { PropertyMCQ, PropertyTopicId } from "@/data/property/types";

type Raw = [PropertyTopicId, string, string[], number, string, string];

const PB = (p: string) => `Pre-Bar ${p}`;
const Q = (y: string, p: number) => `QUAMTO p. ${p}, ${y} Bar`;

/** Actual bar MCQs from QUAMTO pp. 76–121, plus items written from Pre-Bar pp. 156–240. */
const RAW: Raw[] = [
  // Actual bar questions, with QUAMTO's keyed answers
  ["public-private", "Which of the following statements is wrong?", ["Patrimonial property of the state, when no longer intended for public use or for public service, shall become property of public dominion.", "All property of the State, which is not of public dominion, is patrimonial property.", "The property of provinces, cities and municipalities is divided into property for public use and patrimonial property.", "Property is either of public dominion or of private ownership."], 0, "It is the reverse: public dominion property no longer intended for public use or service becomes patrimonial (Art. 422).", Q("2012", 78)],
  ["ownership", "O, owner of Lot A, learned that Japanese soldiers may have buried gold at the adjoining vacant Lot B of Sps. X and Y. O excavated in Lot B and unearthed gold and precious stones. How will the treasures be divided?", ["100% to O as finder", "50% to O and 50% to the Sps. X and Y", "50% to O and 50% to the State", "None of the above"], 3, "O did not find the treasure by chance and is a trespasser, so O gets no share (Art. 438).", Q("2010", 80)],
  ["ownership", "An action to recover real property based on ownership, where the object is the recovery of dominion over the property as owner, is:", ["Accion publiciana", "Accion reinvindicatoria", "Accion interdictal", "Quieting of title"], 1, "Reinvindicatoria recovers ownership and possession based on it.", Q("2012", 82)],
  ["quieting", "Which of the following is an indispensable requirement in an action for quieting of title involving real property? The plaintiff must:", ["Be in actual possession of the property", "Be the registered owner of the property", "Have legal or equitable title to the property", "Be the beneficial owner of the property"], 2, "Legal or equitable title is required; possession and registration are not.", Q("2011", 83)],
  ["accession", "A delayed accession is:", ["Formation of an island", "Avulsion", "Alluvium", "Change in the course of the riverbed"], 1, "In avulsion the owner keeps the detached portion for 2 years to remove it (Art. 459).", Q("2014", 84)],
  ["possession", "Which of the following statements is wrong?", ["The possessor in bad faith shall reimburse the fruits received and those which the legitimate possessor could have received.", "The possessor in bad faith has right of reimbursement for necessary expenses and those for the production, gathering and preservation of the fruits.", "The possessor in bad faith is not entitled to a refund of ornamental expenses.", "The possessor in bad faith is entitled to a refund of useful expenses."], 3, "Only a possessor in good faith gets a refund of useful expenses.", Q("2012", 102)],
  ["possession", "Betty entrusted jewelry to her agent Aida to sell on commission. Aida pawned it with Tambunting Pawnshop, which accepted it in good faith. Aida was convicted of estafa. Betty sues the pawnshop to recover. How should the judge rule?", ["For Betty: one unlawfully deprived of a movable may recover it from the person in possession; good faith is inconsequential.", "For Betty, but equity requires reimbursing the pawn value.", "For Tambunting: its good faith takes precedence.", "For Tambunting: lawful acquisition in the ordinary course of business gives it the right."], 0, "Art. 559: unlawful deprivation includes abuse of confidence. Reimbursement applies only to purchase at a public sale.", Q("2013", 102)],
  ["easement", "An easement that can be acquired by prescription:", ["Right of way", "Watering of an animal", "Lateral and subjacent support", "Light and view"], 3, "Only continuous and apparent easements may be acquired by prescription.", Q("2014", 102)],
  ["modes", "X bought land from Y, paying cash, with no document. After 7 years, X's heirs sued Y to execute a deed of absolute sale. Will the action prosper?", ["No, after more than 6 years the action to enforce the verbal agreement has elapsed.", "No, since the sale cannot under the Statute of Frauds be enforced.", "Yes, since X bought the land and paid Y for it.", "Yes, after full payment the action became imprescriptible."], 0, "This is QUAMTO's keyed answer.", Q("2011", 109)],
  ["donation", "Shortly before their children's wedding, the groom's parents donated property in writing to the bride's parents, who accepted. The donation is:", ["An ordinary donation, since it was not given to the bride or groom", "A donation propter nuptias, since it was given with the marriage in mind", "An indirect donation propter nuptias", "A remuneratory donation"], 0, "Donations by reason of marriage must favor one or both future spouses.", Q("2011", 110)],
  ["donation", "When a donor gives donations without reserving sufficient funds for support of self or dependents, the donations are:", ["Rescissible, for economic lesion of more than 25%", "Voidable, for vitiated consent", "Void, as wanton expenditure", "Reducible to the extent they impair the support due"], 3, "Art. 750: reducible only to the extent necessary for support.", Q("2011", 115)],
  ["donation", "The prescriptive period for an action to revoke a donation based on the donee's acts of ingratitude is:", ["5 years from perfection", "1 year (keyed by QUAMTO as from perfection)", "4 years from perfection", "It does not prescribe"], 1, "The period is 1 year. Careful: Pre-Bar p. 239 and Art. 769 count it from the donor's knowledge and possibility of suing, not from perfection as QUAMTO's printed choice says.", Q("2011", 116)],
  ["modes", "An action for reconveyance based on trust prescribes in 10 years from registration or issuance of title. What is the exception?", ["The plaintiff had no notice of the deed or title.", "The title holder concealed the matter.", "Fortuitous circumstances prevented earlier filing.", "The plaintiff is in possession of the property."], 3, "A plaintiff in possession effectively has a suit to quiet title, which is imprescriptible.", Q("2011", 118)],

  // Classification
  ["classification", "Which is NOT a requisite of property?", ["Utility", "Individuality and substance", "Susceptibility of appropriation", "Corporeal existence"], 3, "Requisites: utility, individuality and substance, susceptibility of appropriation.", PB("p. 156")],
  ["classification", "A statue placed by a lessee on the leased land, removable without injury, is:", ["Immovable under par. 3", "Immovable under par. 4", "Movable, because the owner did not place it", "Immovable by nature"], 2, "Par. 4 requires placement by the owner of the immovable.", PB("p. 158")],
  ["classification", "A tenant installs essential machinery on leased land. The lease says nothing about improvements. The machinery is:", ["Immovable under Art. 415(5)", "Movable", "Immovable by analogy", "Immovable only as to third persons"], 1, "It must be placed by the owner, unless the tenant acts as agent (Davao Sawmill).", PB("p. 158")],
  ["classification", "Parties treat a house as personal property in a chattel mortgage. A stranger to the contract claims it is real property. The house is, as to the stranger:", ["Personal, by estoppel", "Immovable", "Personal, because the mortgage is registered", "Personal until foreclosure"], 1, "Estoppel binds only the parties (Evangelista v. Alto Surety).", PB("p. 157")],
  ["classification", "Which law decides whether MERALCO's transformers are subject to real property tax?", ["Civil Code", "Local Government Code", "Chattel Mortgage Law", "Property Registration Decree"], 1, "The special LGC prevails over the Civil Code for real property tax.", PB("p. 159")],
  ["classification", "The classification of movables into fungible and non-fungible is based on:", ["The nature of the thing", "The intention of the parties", "The value of the thing", "Provisions of law"], 1, "Consumability looks to nature; fungibility looks to intention.", PB("p. 161")],
  ["classification", "A boathouse tied to the shore and used as a residence is:", ["Movable, being a vessel", "Immovable under Art. 415(9)", "Immovable by nature", "Immovable by analogy"], 1, "Floating structures intended to remain at a fixed place are immovable by destination.", PB("p. 159")],

  // Public and private
  ["public-private", "To convert A&D land of the public domain into patrimonial property, there must be:", ["A mere declaration by the DENR", "An express declaration by law or authorized Presidential Proclamation, or actual disposition by the State", "30 years of possession", "A tax declaration in the State's name"], 1, "Malabanan: express declaration, or actual alienation and disposition.", PB("pp. 163–164")],
  ["public-private", "Under Sec. 14(1) of PD 1529, possession must be since:", ["June 12, 1945 or earlier", "January 24, 1947", "June 12, 1898", "30 years before filing"], 0, "Par. 1 requires possession since June 12, 1945, or earlier.", PB("p. 164")],
  ["public-private", "Under Sec. 14(2) of PD 1529, when must the land already be patrimonial?", ["At filing of the application", "At the start of the 10-year or 30-year possession", "At decision", "At registration"], 1, "It must be patrimonial at the beginning of the period (Espiritu; Zurbaran).", PB("pp. 164–165")],
  ["public-private", "Which is NOT true of property of public dominion?", ["It cannot be leased.", "It cannot be levied upon.", "It can be burdened by a voluntary easement.", "It cannot be acquired by prescription."], 2, "It cannot be burdened by a voluntary easement (Villarico).", PB("p. 165")],
  ["public-private", "Reclaimed foreshore land becomes patrimonial when:", ["Reclamation is completed", "A law or presidential proclamation officially classifies it", "A private developer possesses it", "A tax declaration issues"], 1, "Chavez v. PEA: reclamation alone does not convert it.", PB("p. 162")],

  // Ownership
  ["ownership", "The doctrine of self-help may be invoked:", ["Any time after losing possession", "Only at the time of actual or threatened dispossession", "Within one year of losing possession", "Only with a court order"], 1, "Once possession is lost, resort to the courts (German Management).", PB("p. 168")],
  ["ownership", "In unlawful detainer, the one-year period runs from:", ["Entry", "The last demand", "Expiry of the contract", "Discovery"], 1, "Mirallosa v. Carmel Development.", PB("p. 169")],
  ["ownership", "A stranger, not a trespasser, discovers hidden treasure by chance on another's land. The treasure goes:", ["All to the finder", "All to the landowner", "½ finder, ½ landowner", "All to the State"], 2, "Art. 438.", PB("p. 171")],
  ["ownership", "In accion reinvindicatoria, the plaintiff must prove:", ["Prior physical possession and demand", "The identity of the land and plaintiff's title", "Better right of possession only", "The weakness of defendant's title"], 1, "Art. 434: identity and title, on the strength of the plaintiff's own title.", PB("pp. 169–170")],

  // Accession
  ["accession", "Under Art. 448, who holds the option?", ["The builder", "The landowner", "The court", "Whoever acted first"], 1, "The landowner's right is older, and the accessory follows the principal (Depra v. Dumlao).", PB("p. 176")],
  ["accession", "A builder in good faith may be compelled to buy the land only if:", ["The land is not considerably more valuable than the building", "The building cost more than P1 million", "The land is unregistered", "The owner proves damage"], 0, "Otherwise the builder pays reasonable rent.", PB("pp. 176–177")],
  ["accession", "A lessee makes useful improvements. Which provision governs?", ["Art. 448", "Art. 449", "Art. 1678", "Art. 546"], 2, "Art. 1678: lessor pays ½ of the value, or lessee may remove.", PB("p. 175")],
  ["accession", "A builder in bad faith is entitled to:", ["Value of the building", "Retention until paid", "Necessary expenses for preserving the land, without retention", "Useful expenses"], 2, "Art. 452; Aquino v. Aguilar.", PB("p. 178")],
  ["accession", "Under Art. 455, the landowner is subsidiarily liable for the good-faith materials owner only if:", ["The builder is insolvent and the landowner appropriates", "The landowner was in bad faith", "The materials exceed the land's value", "The builder is in bad faith"], 0, "Both conditions must concur.", PB("p. 179")],
  ["accession", "The owner of land from which avulsion detached a portion must remove it within:", ["6 months", "1 year", "2 years", "5 years"], 2, "2 years for land; 6 months to claim uprooted trees.", PB("p. 180")],
  ["accession", "A river simply dries up without opening a new bed. The dried bed belongs to:", ["Adjoining riparian owners", "The first occupant", "The State", "Owners on both banks in halves"], 2, "Art. 461 does not apply (Republic v. Santos; Celestial).", PB("p. 181")],
  ["accession", "An island forms in the middle of a non-navigable river. It belongs to:", ["The State", "Owners of both margins, divided longitudinally in halves", "The first occupant", "The owner upstream"], 1, "Art. 465.", PB("p. 181")],
  ["accession", "Mixture of liquids belonging to different owners is:", ["Commixtion", "Confusion", "Adjunction", "Specification"], 1, "Solids: commixtion. Liquids: confusion.", PB("p. 182")],

  // Co-ownership
  ["co-ownership", "A stipulation that co-owners share benefits equally despite unequal interests is:", ["Valid", "Voidable", "Void", "Unenforceable"], 2, "Art. 485.", PB("p. 188")],
  ["co-ownership", "A co-owner sells the entire property without the others' consent. The sale is:", ["Void", "Voidable", "Valid only as to the seller's share", "Valid as to all"], 2, "Art. 493; Torres v. Lapinid.", PB("p. 191")],
  ["co-ownership", "Legal redemption by a co-owner must be exercised within:", ["15 days from written notice", "30 days from written notice by the vendor", "60 days from registration", "1 year from sale"], 1, "Art. 1623; notice must come from the vendor.", PB("p. 192")],
  ["co-ownership", "An agreement to keep co-owned property undivided may last at most:", ["5 years", "10 years", "20 years", "30 years"], 1, "It is void beyond 10 years but may be extended by new agreement.", PB("p. 196")],
  ["co-ownership", "A testator may prohibit partition for up to:", ["10 years", "15 years", "20 years", "25 years"], 2, "Art. 494, par. 3.", PB("p. 196")],
  ["co-ownership", "Which act alone is an effective repudiation by a co-owner?", ["Tax declaration in one's name", "Payment of land taxes", "Title issued solely in one's name", "Possession of the whole"], 2, "Pangan v. CA. Tax acts alone do not suffice.", PB("p. 194")],
  ["co-ownership", "Building a concrete fence on co-owned land requires:", ["No consent", "Majority of controlling interest", "All co-owners", "Court approval"], 1, "Improvement or embellishment: Arts. 489, 492.", PB("p. 189")],

  // Waters
  ["waters", "A water permit is issued by:", ["DENR", "NWRB", "LGU", "DPWH"], 1, "National Water Resources Board.", PB("p. 197")],
  ["waters", "A landowner using water on private land needs no permit only if used for:", ["Irrigation", "Domestic purposes", "Industry", "Any purpose"], 1, "Water Code, Art. 6.", PB("p. 197")],

  // Possession
  ["possession", "Possession de jure of real property is lost after:", ["1 year", "4 years", "10 years", "30 years"], 2, "Art. 555(4): de facto after 1 year, de jure after 10.", PB("p. 202")],
  ["possession", "A possessor in good faith making useful expenses may be paid:", ["Only the amount spent", "Only the market value", "Expenses or the increase in value, at the owner's option", "Nothing"], 2, "Art. 546, with right of retention.", PB("p. 200")],
  ["possession", "A buyer in good faith at a public sale holds a stolen movable. The owner may recover it:", ["Without reimbursement", "Only by reimbursing the price", "Not at all", "After 4 years"], 1, "Art. 559, par. 2.", PB("p. 203")],
  ["possession", "A buyer fails to pay, resells to a good-faith possessor. Can the original seller recover under Art. 559?", ["Yes, unlawful deprivation", "Yes, with reimbursement", "No", "Only with criminal conviction"], 2, "EDCA Publishing v. Santos.", PB("p. 203")],
  ["possession", "An owner of tamed animals may reclaim them within how many days from occupation by another?", ["2", "10", "20", "30"], 2, "Art. 560.", PB("p. 203")],

  // Usufruct
  ["usufruct", "Failure to make an inventory and give security:", ["Extinguishes the usufruct", "Prevents exercise but does not end the usufruct", "Makes the usufruct void", "Has no effect"], 1, "Art. 586.", PB("p. 207")],
  ["usufruct", "Which cannot be alienated by the usufructuary?", ["A usufruct for 10 years", "A usufruct acquired through caucion juratoria", "A usufruct over land", "A usufruct by donation"], 1, "The basis is the usufructuary's need.", PB("p. 207")],
  ["usufruct", "A usufruct is NOT extinguished by:", ["Death of the usufructuary", "Merger", "Bad use of the thing", "Total loss"], 2, "Art. 610.", PB("p. 211")],
  ["usufruct", "Real estate taxes on property in usufruct are paid by:", ["The usufructuary", "The owner", "Both equally", "The lessee"], 1, "Taxes on capital are for the owner's account (Art. 597).", PB("p. 209")],
  ["usufruct", "Fruits pending when a usufruct begins:", ["Belong to the owner", "Belong to the usufructuary, with no refund of expenses", "Are shared", "Belong to the usufructuary, with refund of expenses"], 1, "Art. 567.", PB("p. 206")],

  // Easement
  ["easement", "The test for compulsory right of way is:", ["Convenience", "Adequacy", "Shortest distance", "Value of the land"], 1, "Reyes v. Ramos.", PB("p. 219")],
  ["easement", "If the shortest route is not the least prejudicial, which prevails?", ["Shortest", "Least prejudicial", "The owner's choice", "The court's discretion"], 1, "Quimen v. CA.", PB("p. 219")],
  ["easement", "Prescription for a window in one's own wall runs from:", ["Opening the window", "A notarized prohibition to the neighbor", "Construction of the house", "Registration"], 1, "It is negative (Art. 621).", PB("pp. 213–214")],
  ["easement", "A regular window with a direct view must generally be how far from the boundary?", ["60 cm", "1 m", "2 m", "3 m"], 2, "Art. 670.", PB("p. 220")],
  ["easement", "Who cannot demand a compulsory right of way?", ["Owner", "Usufructuary", "Mere lessee", "Holder of a real right"], 2, "A lessee's action is against the lessor.", PB("p. 219")],
  ["easement", "Agricultural areas have a public-use easement zone of:", ["3 m", "20 m", "40 m", "60 m"], 1, "Water Code, Art. 51.", PB("p. 217")],
  ["easement", "Roots of a neighbor's tree penetrate your land. You may:", ["Cut them yourself", "Only go to court", "Demand and then go to court", "Do nothing"], 0, "Unlike branches, roots may be cut directly (Art. 680).", PB("p. 221")],
  ["easement", "Which easement can never be acquired by prescription?", ["Light and view", "Aqueduct", "Right of way", "Drainage"], 2, "It is discontinuous.", PB("p. 213")],

  // Nuisance
  ["nuisance", "A nuisance per accidens may be abated:", ["Summarily", "Only after hearing", "By ordinance alone", "By any neighbor"], 1, "Rana v. Wong.", PB("p. 223")],
  ["nuisance", "A private person abating a public nuisance must ensure the destruction does not exceed:", ["P1,000", "P3,000", "P5,000", "P10,000"], 1, "Pre-Bar pp. 224–225.", PB("pp. 224–225")],
  ["nuisance", "Who is charged with abating public nuisances?", ["Punong Barangay", "City or Municipal Health Officer", "PNP", "Sangguniang Bayan"], 1, "Art. 700; Cruz v. Pandacan Hiker's Club.", PB("p. 224")],

  // Modes
  ["modes", "Which is a derivative mode?", ["Occupation", "Law", "Donation", "Intellectual creation"], 2, "Derivative: succession, donation, tradition.", PB("p. 225")],
  ["modes", "A transfer by the owner who stays as lessee is:", ["Brevi manu", "Longa manu", "Constitutum possessorium", "Simbolica"], 2, "Transferor continues possessing under another capacity.", PB("p. 227")],
  ["modes", "A lessee buys the leased thing; a declaration makes the lessee owner. This is:", ["Brevi manu", "Longa manu", "Constitutum possessorium", "Simbolica"], 0, "Grantee already holds the thing.", PB("p. 227")],
  ["modes", "Extraordinary prescription for movables takes:", ["4 years", "8 years", "10 years", "30 years"], 1, "Art. 1132.", PB("p. 228")],
  ["modes", "A finder of a lost movable whose owner later appears gets what reward?", ["1/10", "1/5", "1/2", "Nothing"], 0, "Art. 720.", PB("p. 231")],
  ["modes", "Who owns the physical letter sent to you?", ["Sender", "Addressee", "Post office", "Both"], 1, "The writer keeps the ideas and copyright (Art. 723).", PB("p. 232")],

  // Donation
  ["donation", "Donation of real property valued at P1,000 must be in:", ["Writing", "A public instrument", "Oral with delivery", "Any form"], 1, "Art. 749, regardless of value.", PB("p. 237")],
  ["donation", "An oral donation of a P4,000 watch is valid if:", ["Accepted in writing", "Simultaneously delivered", "Notarized", "Never"], 1, "Art. 748.", PB("pp. 236–237")],
  ["donation", "An onerous donation is governed by:", ["Law on donations", "Law on contracts", "Law on succession", "Both donations and wills"], 1, "Art. 733.", PB("p. 235")],
  ["donation", "A donation mortis causa must follow:", ["Art. 748", "Art. 749", "Formalities of wills", "Any form"], 2, "Bascara v. Javier.", PB("pp. 233–234")],
  ["donation", "An action to revoke for appearance of a child prescribes in:", ["1 year", "4 years", "5 years", "10 years"], 1, "Art. 763.", PB("p. 239")],
  ["donation", "An action to revoke for non-compliance with a charge prescribes in:", ["1 year", "4 years", "5 years", "10 years"], 3, "Counted from the time to comply.", PB("pp. 239–240")],
  ["donation", "Adultery as a ground to void a donation under Art. 739(1) requires:", ["A prior conviction", "Preponderance of evidence in the civil action", "Proof beyond reasonable doubt", "An affidavit"], 1, "No prior criminal conviction is needed.", PB("p. 236")],
];

export const PROPERTY_MCQS: PropertyMCQ[] = RAW.map(([topic, q, choices, answer, explain, source], i) => ({
  id: `prop-mcq-${i + 1}`,
  topic,
  q,
  choices,
  answer,
  explain,
  source,
}));
