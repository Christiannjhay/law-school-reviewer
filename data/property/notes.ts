import type { PropertyTopicId } from "@/data/property/types";

/**
 * Study notes condensed from Rabuya, Pre-Bar Reviewer in Civil Law (2021 ed.),
 * Book II – Property, printed pp. 156–240. Blockquotes render as callouts.
 */
export const PROPERTY_NOTES: Record<PropertyTopicId, string> = {
  classification: `
## Concept of property
**Property** consists of things capable of satisfying human wants and susceptible of appropriation.

**Requisites:** (1) utility, (2) individuality and substance (a separate, autonomous existence), and (3) susceptibility of appropriation.

## Four kinds of immovables
| Kind | Meaning | Art. 415 |
|---|---|---|
| **By nature** | Cannot be moved by their essence: lands, roads, mines, quarries, slag dumps | Pars. 1, 8 |
| **By incorporation** | Attached so as to be an integral part: buildings, constructions, trees, plants, growing fruits, fixtures | Pars. 1, 2, 3 |
| **By destination** | Essentially movable, but partake of the immovable's nature because of purpose | Pars. 4, 5, 6, 7, 9 |
| **By analogy** | Contracts for public works, servitudes, other real rights over immovables | Par. 10 |

## Article 415, paragraph by paragraph
**Par. 1: lands, buildings, roads, constructions adhered to the soil**
- Lands and roads are always immovable.
- A building permanently attached is always immovable, whether or not the land and building have the same owner, and whether built by the owner, a usufructuary or a lessee (*Lopez v. Orosa*; *Ladera v. Hodges*).
- Merely superimposed, or sold for immediate demolition, means movable (*Bautista v. Supnad*). Once demolished it is no longer immovable (*Bicerra v. Teneza*).
- A building by itself may be mortgaged apart from the land (*Prudential Bank v. Panis*).
- **Estoppel:** parties who treat a building as movable are estopped between themselves (*Navarro v. Pineda*; *Tumalad v. Vicencio*). This does not bind strangers (*Evangelista v. Alto Surety*). The Register of Deeds still cannot refuse to register the chattel mortgage, since the duty is ministerial (*Standard Oil v. Jaramillo*).
- Constructions must be permanently attached, not provisional.

**Par. 2: trees, plants and growing fruits, while attached**
- Cut or uprooted, they become movable, unless they form an integral part of the land, as timber does.
- Growing fruits may be treated as personal property for sale, attachment and execution, and chattel mortgage (Art. 416(2); *Sibal v. Valdez*).

**Pars. 3 and 4: fixtures vs. ornaments**
| | Par. 3 (fixtures) | Par. 4 (ornaments, statues, reliefs) |
|---|---|---|
| Kind | By incorporation | By destination |
| Separation | Not possible without breaking or deterioration | Possible |
| Who attaches | Immaterial | Must be the **owner** of the immovable |

**Par. 5: machinery, receptacles, instruments, implements**
Requisites: (1) destined for the industry or work in the tenement and essential and principal to it (*Mindanao Bus*); (2) the industry is carried on in a building, on land or even on waters; (3) placed by the **owner** of the tenement, unless a tenant acts as the owner's agent (*Davao Sawmill v. Castillo*).

- Machinery can be replevied if the parties treated it as personal property, by estoppel (*Serg's Products v. PCI Leasing*; *Makati Leasing v. Wearever*).
- Undersea cables may be "machinery" under par. 5 (*Capitol Wireless*).

**Par. 6: animal houses, pigeon-houses, beehives, fish ponds.** Permanently placed by the owner of the land. If permanently attached to the soil, they fall under par. 1 or 3 instead.

**Par. 7:** fertilizer actually used on a piece of land.

**Par. 8:** mines, quarries, slag dumps while the matter forms part of the bed; waters running or stagnant.

**Par. 9: docks and structures which, though floating, are intended to remain at a fixed place** on a river, lake or coast. Example: a boathouse tied to the shore and used as a residence.

**Par. 10: contracts for public works, servitudes and other real rights over immovables.** A real right over an immovable (a registered real estate mortgage) is real property; over a movable, personal. A personal right is always personal property, except contracts for public works.

## Real property tax
The **Local Government Code** prevails over the Civil Code in deciding what is subject to real property tax (*MERALCO v. City Assessor*; *Provincial Assessor of Agusan del Sur v. Filipinas Palm Oil*). MERALCO's transformers, posts, transmission lines, insulators and meters, and undersea cables (*Capitol Wireless*), may be taxable "machinery".

## Movable property (Arts. 416–417)
- **416(1):** movables susceptible of appropriation not in Art. 415, including an interest in a business and the business itself.
- **416(2):** real property considered personalty by special law, such as growing fruits.
- **416(3):** forces of nature brought under control by science, such as gas and electricity (*US v. Tambunting*; *US v. Carlos*).
- **416(4):** things transportable without impairing the real property to which they are fixed, such as vessels.
- **417(1):** obligations and actions over movables or demandable sums. A mortgage loan is real by analogy.
- **417(2):** shares of stock, even if the entity owns real estate. Golf club membership shares are personal property, protected by due process (*Valley Golf*).

## Consumable vs. fungible (Art. 418)
| | Consumable / non-consumable | Fungible / non-fungible |
|---|---|---|
| Test | Can it be used without being consumed? | Can it be replaced by another of the same kind? |
| Basis | **Nature** of the thing | **Intention** of the parties |

> **Memory aid:** Consumable is nature; fungible is intention.
`,
  "public-private": `
## Classification by ownership (Art. 419)
Property is of **public dominion** or of **private ownership** (*Republic v. Alejandre*).

Private ownership covers: patrimonial property of the State (Arts. 421–422), patrimonial property of LGUs (Art. 424), and property of private individuals (Art. 425).

## Property of public dominion
**Three kinds:** (1) for public use, open to the indefinite public (*Villarico v. Sarmiento*); (2) for some public service, usable only by those authorized; (3) for developing national wealth.

Mere **intention** to devote the property to these uses is enough. Actual use is not required (*Manila Lodge*).

**Examples**
- "Ports" include airports and seaports (*MIAA v. CA*; *MCIAA v. Lapu-Lapu*).
- Foreshore lands and reclaimed foreshore or submerged areas. Reclamation alone does not make them patrimonial; a law or proclamation must classify them (*Chavez v. PEA*).
- All waters, rivers and natural beds, natural lakes, creeks.
- Road right of way for national highways (*Hi-Lon Manufacturing*).
- Military reservations (*Navy Officers' Village*); DPWH water works devoted to public use.

**Characteristics:**
- Outside the commerce of man; sale or encumbrance is void.
- Cannot be leased or be the subject of contracts.
- Not subject to private appropriation or acquisitive prescription.
- Not subject to levy, auction or execution.
- Cannot be burdened by a voluntary easement.

## Alienable and disposable lands
- Public lands: agricultural, forest or timber, mineral, national parks. **Only agricultural lands** may be alienated (Art. XII, Sec. 2, 1987 Constitution).
- Lands of the public domain, even if declared alienable and disposable, remain public dominion and cannot be acquired by prescription until converted (*Malabanan*; *Dumo v. Republic*).
- **Conversion to patrimonial:** (1) an express declaration, by law or by Presidential Proclamation where authorized by law, that the land is no longer for public service or national wealth; or (2) actual alienation and disposition by the State.

## Section 14, PD 1529
| | Par. 1 | Par. 2 |
|---|---|---|
| Basis | Possession and occupation | Acquisitive prescription |
| Law | PD 1529 and Public Land Act | PD 1529 and Civil Code |
| Land | Agricultural A&D land of the public domain (not yet patrimonial) | Patrimonial |
| Period | Since **June 12, 1945** or earlier | **10 years** (good faith, just title) or **30 years** |
| Timing | A&D at least at filing of application | Patrimonial at the **start** of the period |

Par. 1 also requires open, continuous, exclusive and notorious possession under a bona fide claim of ownership. This is judicial confirmation of imperfect title, Sec. 48(b) of the Public Land Act.

## Patrimonial property of the State
All State property not under Art. 420, owned in a private capacity. It is patrimonial "by nature or use" (Art. 421) or "by conversion" (Art. 422; *Republic v. Alejandre*).

It **may be acquired by prescription** (Art. 1113; *Malabanan*). Conversion needs (1) abandonment or non-use and (2) an affirmative executive or legislative act (*Laurel v. Garcia*).

## Property of LGUs (Art. 424)
- **Public dominion:** those listed in par. 1 of Art. 424 (provincial roads, city and municipal streets, squares, fountains, public waters, promenades, public works) **and** those not listed but devoted to governmental purposes such as local administration, education and health.
- These cannot be alienated, registered under PD 1529, acquired by prescription, leased or sold, attached or executed upon, or burdened by voluntary easements (*Alolino v. Flores*).
- **Patrimonial:** those not listed and devoted to proprietary purposes.
- **Congress:** has absolute control over public property; patrimonial property cannot be taken without due process and just compensation (*Province of Zamboanga del Norte v. City of Zamboanga*).
`,
  ownership: `
## Rights included
(1) To enjoy: fruits (*jus fruendi*), possess (*jus possidendi*), use (*jus utendi*), consume or abuse (*jus abutendi*). (2) To dispose. (3) To recover. (4) To exclude. (5) To enclose or fence. (6) To compensation in eminent domain. (7) To the surface, sub-surface and space above. (8) To hidden treasure. (9) Of accession. (Arts. 428–440)

## Limits on enjoyment
- **Abuse of right** is the basic limit.
- **Right to fence** (Art. 430), subject to legal limits (*Aneco Realty*).
- **Self-help** (Art. 429): reasonable force to repel an actual or threatened invasion, only **at the time** of dispossession. Once possession is lost, go to court (*German Management*).
- **State of necessity** (Art. 432): the owner cannot stop interference needed to avert imminent danger where the threatened damage is much greater than the owner's. The owner may demand indemnity from the person benefited.

**Requisites of state of necessity:** (1) grave peril, actual or imminent; (2) interference is necessary; (3) threatened damage is much greater; (4) not caused by the actor's intentional provocation (*People v. Rebutado*).

## Actions to recover
No possession may be acquired by force or intimidation while a possessor objects. Go to court (Art. 536).

| Action | Issue | When | Jurisdiction |
|---|---|---|---|
| **Accion interdictal** (forcible entry, unlawful detainer) | Physical possession (*de facto*) | Within 1 year | Always MTC |
| **Accion publiciana** | Better right of possession (*de jure*) | After 1 year, or grounds outside Rule 70 | By assessed value |
| **Accion reinvindicatoria** | Ownership and possession based on it | Registered owner's action does not prescribe | By assessed value |

**Forcible entry vs. unlawful detainer** (*Acaylar v. Harayo*)
| | Forcible entry | Unlawful detainer |
|---|---|---|
| Prior physical possession by plaintiff | Must be proved | Not needed |
| Defendant's possession | Unlawful from the start | Lawful at first, later illegal |
| Demand to vacate | Not needed | **Jurisdictional**; 1 year runs from last demand |

**Reinvindicatoria requisites (Art. 434):** (1) the **identity** of the land (location, area, boundaries), and (2) the plaintiff's **title**, relying on its own strength and not the weakness of the defendant's (*VSD Realty*).

**Collateral attack:** a defense of ownership in FE, UD or publiciana is not a collateral attack on the title, since ownership is resolved only to settle possession. In reinvindicatoria the court may rule definitively on title (*Heirs of Cullado v. Gutierrez*).

> **Check this:** Pre-Bar pp. 169–170 gives the MTC ceiling as an assessed value of P20,000, or P50,000 in Metro Manila. That is the 2021 book's figure. R.A. No. 11576 (not discussed in the book) later raised these thresholds, so confirm the current amount.

## Surface, sub-surface and airspace (Art. 437)
The owner has rights to the surface, what lies beneath, and the airspace up to a reasonable height.

**Limits:** servitudes, special laws, ordinances, aerial navigation, rights of third persons, contracts (*Republic v. CA*; *Ayala Corp.*).

Land cannot be half-agricultural and half-mineral (*Republic v. CA*). An owner barred from digging deep wells by an easement gets full compensation for the land (*NPC v. Ibrahim*).

## Hidden treasure (Arts. 438–439)
**Definition:** a hidden, unknown deposit of money, jewelry or other precious objects, whose lawful ownership does not appear.

| Finder | Result |
|---|---|
| Owner of the land | All to the owner |
| Trespasser | All to the landowner |
| Stranger, not a trespasser, finding **by chance** | ½ finder, ½ landowner |

Deliberate search needs a permit: National Heritage Commission for treasures of cultural and historical value; otherwise DENR.
`,
  accession: `
## Basic concept
**Accession** (Art. 440) is the owner's right to everything produced by the thing or inseparably attached to it.

- **Discreta:** to what the thing produces (fruits).
- **Continua:** to what attaches to it. For immovables, *industrial* (building, planting, sowing) or *natural* (alluvion, avulsion, change of river course, islands). For movables, adjunction, commixtion or confusion, specification.

## Fruits (accession discreta)
Fruits belong to the owner (Art. 441). **Exceptions:** usufruct; lease of rural land; antichresis; possessor in good faith (before legal interruption); fruits naturally falling on adjacent land (Art. 681).

| Kind | Examples |
|---|---|
| **Natural** | Spontaneous products; young and products of animals |
| **Industrial** | Produced through cultivation or labor |
| **Civil** | Rents, price of leases, annuities; bank interest |

- *Partus sequitur ventrem:* the young belong to the owner of the mother (*US v. Caballero*).
- Rent belongs to whoever owned the lot when it accrued (*PNB v. Marañon*).
- **Art. 443:** whoever receives the fruits pays the production, gathering and preservation expenses of the one who incurred them, **good or bad faith**. This applies only once fruits are harvested.

## Industrial accession at a glance
| Article | Situation | Result |
|---|---|---|
| **447** | LO builds with OM's materials | Both GF or both BF: LO keeps, pays value. LO GF, OM BF: OM loses materials, pays damages. LO BF, OM GF: OM takes value plus damages, or removes in any event plus damages |
| **448** | BPS on another's land, both GF | LO chooses: appropriate, or sell land / rent |
| **449–452** | BPS BF, LO GF | LO: keep without indemnity, demolish, or force sale, all plus damages |
| **453** | Both BF | Treated as both GF, so Art. 448 |
| **454** | BPS GF, LO BF | Art. 447: BPS gets value of materials and labor plus damages, or removes in any event plus damages |
| **455** | BPS on LO's land with OM's materials | See below |

> **Memory aid:** LO = landowner, OM = owner of materials, BPS = builder, planter or sower. LO is in bad faith when the work was done with knowledge and no opposition (Art. 453).

## Article 448 in detail
**Good-faith builder:** believes they own the land, or has a claim of title (*Rosales v. Castelitort*). **Expanded:** builds knowing they are not the owner but with the owner's consent (*Macasaet v. Macasaet*), though not consent from a complete stranger (*Padilla v. Malicsi*).

**Art. 448 does NOT apply to:**
- Vendee a retro: Arts. 1606, 1616 (*Narvaez v. Alciso*)
- Lessee: Art. 1678 (*Parilla v. Pilar*). Useful improvements: lessor pays ½ of value or lessee may remove, even with damage. Ornaments: full value, or remove if no damage
- Usufructuary: Arts. 579–580 (*Moralidad v. Pernes*)
- Condominium unit owner: Condominium Act and master deed (*Leviste*)
- Builder-co-owner, generally, except where the house overlaps another's land after partition (*Del Campo v. Abesia*; *Ignao v. IAC*)

**It DOES apply** where the owner-builder loses the land for unpaid taxes (*Pecson v. CA*), and to the builder's successor (*Tecnogas*).

**Landowner's options** (the right is older, and accessory follows principal; *Depra v. Dumlao*):
1. **Appropriate** after paying necessary and useful expenses (and luxury expenses in a proper case). Indemnity is **current market value at the time of election** (*Pecson*; *Tuatis*). Until paid, the builder may **retain**, without paying rent (*Filipinas Colleges*; *Nuguid v. CA*).
2. **Sell the land** to the builder or planter, or collect rent from the sower. The price is the prevailing market value at election (*Vda. de Roxas*). If the land is considerably worth more than the building, the builder cannot be forced to buy and pays reasonable rent instead.

The landowner **cannot simply order removal**: the option is preclusive (*Torbela*; *Arangote*).

**If the builder refuses to pay for the land:** the LO does not automatically own the improvement. LO may (1) appropriate, (2) make a voluntary lease, (3) demand demolition (*Ignacio v. Hilario*), or (4) seek sale at public auction, paying the land's value first (*Bernardo v. Bataclan*).

## Builder in bad faith (Arts. 449–452)
Knew they were not the owner, and LO did not know. LO may:
1. Appropriate without indemnity, plus damages (also pending fruits)
2. Demand demolition, plus damages
3. Compel payment of the land price, **even if considerably more** than the building, plus damages

The BPS may recover only **necessary expenses of preserving the land**, with **no right of retention** (*Aquino v. Aguilar*).

## Article 455: three parties
- **OM in bad faith:** loses materials and pays damages. BPS in good faith may claim reasonable compensation for labor from LO.
- **OM in good faith:** must be paid. BPS is primarily liable; LO is subsidiarily liable only if (1) BPS is insolvent and (2) LO appropriates.

## Natural accession
**Alluvium (Art. 457).** Requisites: (1) gradual and imperceptible; (2) exclusively the action of waters; (3) adjacent to the bank.
- Acquired *ipso jure*, but the accretion to registered land is **not automatically registered** and may be acquired by prescription (*Reynante v. CA*).
- Drying up of a river is not accretion (*Republic v. Santos*).
- With human intervention it is public domain (*Vda. de Nazareno*).

**Avulsion (Art. 459).** Requisites: along banks; by force of current alone; sudden and abrupt; identifiable portion. The owner retains ownership but must **remove within 2 years**. Uprooted trees: **claim within 6 months** (Art. 460). Without evidence of suddenness, gradual change is presumed (*C.N. Hodges v. Garcia*).

**Change of river course (Art. 461).** The abandoned bed belongs *ipso facto* to owners of lands occupied by the new course, in proportion to area lost. Adjoining owners of the old bed may buy it. Prove the old course, the new course and natural change (*Galang v. Reyes*). It still applies if the government deliberately caused the change (*Baes v. CA*). It does **not** apply if a river just dries up: the bed stays with the State (*Celestial v. Cachopero*).

**Islands**
- Art. 463: current divides and isolates land: the owner keeps it.
- Art. 464: on seas, lakes, navigable or floatable rivers: the State, as patrimonial.
- Art. 465: non-navigable rivers: owners of the nearest margin; if in the middle, divided longitudinally in halves.

## Accession with movables
**Adjunction:** inseparable union, each keeping its nature.
- Good faith: owner of the principal acquires the accessory and pays its value. If the accessory is much more precious, its owner may demand separation.
- Bad faith by accessory owner: loses it and pays damages.
- Bad faith by principal owner: accessory owner may take its value plus damages, or separate plus damages (not for paintings or writings).

**Commixtion (solids) or confusion (liquids).** Co-ownership arises if by chance, by the will of both, or by one owner in good faith. One owner in bad faith loses the thing and pays damages.

**Specification:** a new form given to another's material.
- Worker in good faith appropriates, paying for the material. If the material is more precious, its owner may take the new thing and pay for the work, or demand indemnity.
- Worker in bad faith: the owner takes it free, or demands value plus damages. Exception: if the work is worth considerably more for artistic or scientific reasons, the owner cannot appropriate it.
`,
  quieting: `
## Quieting of title
**Definition:** a remedy to remove a cloud on title to real property from an instrument, record, claim, encumbrance or proceeding that is apparently valid but is in truth invalid, ineffective, voidable or unenforceable, and may prejudice the title.

**Nature:** *quasi in rem*, so it binds only the parties. **Jurisdiction** depends on assessed value (*Salvador v. Patricia*).

**Two indispensable requisites:**
1. The plaintiff has a **legal or equitable title** to or interest in the property. Legal means registered ownership; equitable means beneficial ownership. Acquisitive prescription gives equitable title (*Residents of Lower Atab*).
2. The cloud is shown to be **in fact invalid or inoperative** despite its prima facie validity.

**Cloud on title:** (1) instrument, record, claim, encumbrance or proceeding; (2) apparently valid; (3) in truth invalid; (4) prejudicial to the title. A mere verbal claim generally is not a cloud, unless factually based, as with acquisitive prescription (*Tandog v. Macapagal*).

Raising the invalidity of a title here is **not a collateral attack** (*Filipinas Eslon*).

**Prescription**
| Plaintiff | Period |
|---|---|
| In possession | **Imprescriptible** (*Syjuco v. Bonifacio*) |
| Not in possession | **30 years**, a real action (*Republic v. Mangotara*) |

## Ruinous buildings and falling trees
- **Buildings (Art. 482):** the owner must demolish or repair. If not, authorities may demolish at the owner's expense. Damage from total or partial collapse through lack of necessary repairs: the proprietor is liable (Art. 2190).
- **Trees (Art. 483):** the owner must fell and remove a large tree threatening to fall, or authorities may do so at the owner's expense.
- Art. 2191(3): liability for falling trees unless by *force majeure*. Under Art. 483, the owner is liable **even if the fall is fortuitous**, having already been negligent.
`,
  "co-ownership": `
## Basic principles
**Co-ownership** is common dominion by two or more persons over a spiritual part of a thing not physically divided (*Vagilidad*).

**Requisites:** (1) plurality of subjects; (2) unity of or material indivision; (3) recognition of ideal shares (*Sanchez v. CA*).

**Sources:** law, contract (gratuitous or onerous; *Logrosa v. Azares*), succession (Art. 1078), occupation (including treasure found by a stranger). Merely building a house on another's land does not create co-ownership; Arts. 448–454 govern (*Victoria v. Pidlaoan*).

**Consequences**
- Owner of the whole and of an abstract portion. A co-owner may use the entire property and **cannot be ejected** (*Anzures v. Ventanilla*).
- Use must (1) be for the intended purpose, (2) not injure others' interests, and (3) not prevent others' use (Art. 486). If they agreed to lease, co-owners can demand rent from the one occupying (*De Guia v. CA*).
- A co-owner cannot point to a definite portion, except where undisturbed occupation amounts to partial partition (*Vda. de Cabrera*).
- Shares are presumed **equal**. Benefits and charges follow interests; **a contrary stipulation is void** (Art. 485).

## Consent requirements
| Act | Consent | Notes |
|---|---|---|
| **Ejectment** (Art. 487): all recovery actions | Any one | Must benefit all. A win benefits all; a loss does not bind the unimpleaded. If for self alone, others are indispensable parties (*Baloloy v. Hular*) |
| **Preservation** (Art. 488–489) | Any one, at will | Others must contribute, or waive an equivalent part of their interest if not prejudicial |
| **Improvement or embellishment** (Art. 489) | Majority | Controlling interest, not headcount (Art. 492) |
| **Administration** (Art. 492) | Majority | Does not affect essence or substance |
| **Alteration** (Art. 491) | **All** | Includes disposition or encumbrance (*Cruz v. Catapang*). Go to court if consent is unreasonably withheld |

Unauthorized alteration is illegal: the erring co-owner must undo it at their expense, plus damages.

**Redemption by one co-owner:** does not end co-ownership. The redeeming co-owner gets reimbursement and a lien (*Adille v. CA*; *Cabales v. CA*). A purchase **after** the redemption period is a repurchase, and the buyer becomes exclusive owner (*Tan v. CA*).

## Ideal share
- A co-owner has absolute ownership of the ideal share and may alienate, assign or mortgage it, except personal rights (Art. 493). No one may be forced to sell it (*Arambulo v. Nolasco*).
- **Sale of the whole or of a concrete portion without consent is not void.** It is valid as to the seller's share; the buyer steps into the seller's shoes, subject to partition (*Torres v. Lapinid*; *Bailon-Casilao*).

> **Remember:** a suit against such a buyer is for partition, not nullity.

## Legal redemption (Art. 1620)
**Requisites:** (1) co-ownership; (2) sale of a co-owner's right to a stranger; (3) before partition; (4) exercised within **30 days** from written notice by the vendor; (5) buyer reimbursed.

- Written notice is mandatory, with no set form: a copy of the deed, summons or sheriff's certificate works (*Bayan v. Bayan*).
- Notice must come from the **vendor**, not the buyer (*Butte v. Manuel Uy*).
- It is a right of redemption, **not pre-emption** (*Reyes v. Concepcion*).

## Extinguishment
**Causes:** merger, prescription, destruction or loss, partition.

**Prescription needs repudiation.** Requisites: (1) unequivocal acts amounting to ouster; (2) made known to the others; (3) clear and convincing evidence; (4) open, continuous, exclusive and notorious possession for the required period (*Vda. de Figuracion*).
- Title solely in one co-owner's name is repudiation (*Pangan v. CA*), unless they allowed the other to build without objection.
- Tax declarations and payment alone are **not** (*Heirs of Reyes*).

**Partition**
- Any co-owner may demand it at any time. The action is imprescriptible and not barred by laches (Art. 494). A dismissal with prejudice under Rule 17 cannot defeat it (*Quintos v. Nicolas*).
- Once a co-owner claims exclusive ownership, the issue becomes ownership, and prescription may run (*Delima v. CA*): **30 years** acquisitive, or **10 years** for reconveyance on implied trust from issuance of title.

**When partition is not allowed**
| Ground | Limit |
|---|---|
| Agreement to keep undivided | Up to **10 years**, void beyond that; may be extended by new agreement |
| Prohibition by donor or testator | Up to **20 years** |
| By law | E.g., family home, absent compelling reason (*Patricio v. Dario*) |
| Would make the thing unserviceable | Art. 495 |
| Essentially indivisible, no agreement | Allot to one who indemnifies, or sell and distribute (Art. 498) |
`,
  waters: `
## Public dominion
All waters in their natural beds are public dominion, whether or not on private land, including ground waters (Art. XII, Sec. 2, Constitution; Water Code, Arts. 3, 5, 6).

## Appropriation
Exclusively granted and regulated by the State through the **National Water Resources Board (NWRB)**, which also modifies, suspends, cancels or revokes permits (*City of Batangas v. Philippine Shell*).

## When no water permit is needed
1. Waters on private land, used by the owner for **domestic** purposes only.
2. Natural bodies of water used for: hand-carried receptacles; bathing or washing; watering or dipping domestic or farm animals; navigation; transporting logs and objects by floatation (Art. 14).
`,
  possession: `
## Concept
**Possession** is the holding of a thing or the enjoyment of a right (Art. 523). **Requisites:** occupancy or taking, and intent to possess (*animus possidendi*) (*Yu v. Pacleb*).

**Kinds**
- **In one's own name or another's** (Art. 524): rights of possession may be exercised through agents (*Santos v. Manalili*).
- **Concept of owner or holder:** a holder acknowledges a superior right in another. Possession as owner raises disputable presumptions of ownership and just title, and may ripen by prescription (Arts. 433, 540, 541).
- **Good faith or bad faith:** good faith means unaware of a flaw in one's title (Art. 526). It is presumed and lasts until facts show awareness. A possessor by tolerance is not in good faith; neither is a mere holder such as a tenant, agent or usufructuary (*Parilla v. Pilar*).

## Effects: fruits and expenses
| | Good faith | Bad faith |
|---|---|---|
| **Fruits received** | Keeps those received before legal interruption (Art. 544) | Reimburses all received and those that could have been received (Art. 549) |
| **Pending fruits** | Shares net harvest and cultivation expenses by time (Art. 545). Owner may let possessor finish in lieu of expenses; if refused, possessor loses indemnity | Loses them, no indemnity except necessary expenses of preservation |
| **Production, gathering, preservation** | Recovers | Recovers (Art. 443) |
| **Necessary expenses** | Refund **with retention** | Refund, **no retention** |
| **Useful expenses** | Refund with retention: owner pays expenses or increase in value. May remove if no damage and owner does not appropriate | **Nothing**: no refund, no removal |
| **Luxury expenses** | No refund. May remove if no injury and owner does not pay. If owner keeps: **amount spent** | No refund. May remove if no injury and owner does not pay. If owner keeps: **value when owner enters** |

## Acquiring possession
1. **Material occupation:** corporeal things, including *brevi manu* and *constitutum possessorium*
2. **Exercise of a right**
3. **Subjecting to the action of one's will:** including *simbolica* and *longa manu*
4. **Proper acts and legal formalities:** donation, succession, execution and registration of public instruments

**Constructive possession** (*Ramos v. Director of Lands*). Requisites: actual possession of a part; claim over the whole; remainder not adversely possessed; reasonable area.

**Not acquired through:** force or intimidation while a possessor objects; tolerated acts; clandestine acts without the possessor's knowledge (Arts. 536–537).

**Conflict in possession de facto (Art. 538):** present possessor, then the longer possessor, then the one with title, then judicial deposit.

## Losing possession (Art. 555)
1. **Abandonment:** *spes recuperandi* gone and *animus revertendi* given up (*US v. Rey*)
2. **Assignment**
3. **Destruction or loss**
4. **Possession of another:** over 1 year loses *de facto* only; *de jure* is lost after 10 years

## Movables: Article 559
Possession of a movable acquired in **good faith** in the **concept of owner** is **equivalent to title**.

**Exceptions:** the owner has **lost** it or been **unlawfully deprived** of it, and may recover from the finder, thief, robber or even a good-faith third person, **without reimbursement**. If the buyer acquired it in good faith at a **public sale**, the owner must reimburse the price.

- "Unlawful deprivation" includes abuse of confidence (*Aznar v. Yapdiangco*).
- It does **not** cover a buyer who fails to pay and resells to a good-faith possessor (*EDCA Publishing v. Santos*).

## Animals
| Kind | Rule |
|---|---|
| **Wild** | Possessed only while under control |
| **Domesticated or tamed** | Possession continues while they retain the habit of returning; owner has **20 days** from occupation by another to reclaim |
| **Domestic** | Rules on personal property |
`,
  usufruct: `
## Concept
**Usufruct** is the right to enjoy another's property temporarily, including *jus utendi* and *jus fruendi*, while the owner keeps *jus disponendi* (*Moralidad v. Pernes*).

**Object:** corporeal things or rights that are not strictly personal, not intransmissible, and have independent existence. A servitude cannot be the object.

**Characteristics:** a real right over another's property (*jus in re aliena*), real or personal; temporary; generally requires preserving form and substance, except where the title or law says otherwise or for things that deteriorate or are consumed.

**Classification**
- **By creation:** legal (parents over minor children's property, Art. 226 FC), voluntary (acts *inter vivos* or will), mixed (prescription).
- **By subject:** proper (non-consumable), improper (consumable, or non-consumable that gradually deteriorates).

## Rights of the usufructuary
- May lease the object; the owner must respect it while the usufruct lasts (*NHA v. CA*).
- **Woodland:** may cut as the owner did or by local custom. **Fruit trees:** gather fruits, no cutting; may use dead trunks and accidentally uprooted trees, replacing them.
- **Action to recover property:** may bring it, and require authority and proof from the owner.
- **Fruits:** pending at the **start** go to the usufructuary with no refund. Pending at the **end** go to the owner, who reimburses ordinary cultivation expenses (Art. 567).
- **Improvements:** no reimbursement. May remove if no damage, or set them off against damage caused (Arts. 579–580).
- **Alienating the right:** allowed without the owner's consent, but contracts end with the usufruct. The usufructuary stays liable for the transferee's fault (Arts. 572, 590).

**Cannot alienate:** (1) parents' legal usufruct; (2) a usufruct given in consideration of the person, for life; (3) enjoyment through *caucion juratoria*.

**The owner may** alienate, mortgage, impose a voluntary easement, and make improvements, but not to the usufructuary's prejudice (Arts. 689, 595).

## Obligations at the start
**Inventory and security** (Art. 583). Failure prevents enjoyment but does **not** end the usufruct: the owner may administer or demand safeguards (Art. 586). Compliance retroacts to constitution (Art. 588).

**Exempt from security:** donor reserving usufruct; parents' legal usufruct, except on second marriage or when the property's market value or the child's annual income exceeds P50,000 (Art. 225 FC).

**May be relieved:** when no one is injured; *caucion juratoria*, a sworn promise for furniture, a dwelling house, or tools needed for a vocation (Art. 587).

## Obligations during the usufruct
- Diligence of a good father of a family (Art. 589)
- Ordinary repairs (Art. 592)
- Annual charges and taxes on the **fruits** (Art. 596). Taxes on the **capital** are the owner's; if advanced, recoverable with retention (Arts. 597, 612)
- Suit expenses (Art. 602)
- Notify the owner of prejudicial acts by third persons, or be liable for damages (Art. 601)

**Repairs**
| | Ordinary | Extraordinary |
|---|---|---|
| Test | Wear and tear from natural use **and** indispensable | Otherwise |
| Who pays | Usufructuary | Owner |
| Urgent and owner fails after notice | N/A | Usufructuary may do it, then claim the **increase in value** with retention |

## At the end
Return the thing. Retention until paid for advanced capital taxes and the increase from extraordinary repairs (Art. 612).

## Extinguishment (Art. 603)
Death of the usufructuary (unless a contrary intent appears); expiration or resolutory condition; merger; renunciation; total loss; termination of the constituting person's right; prescription.

- **Third person's age (Art. 606):** subsists for the years specified even if that person dies early, unless granted only in consideration of that person's existence.
- **Bad use does not extinguish** it (Art. 610).
`,
  easement: `
## Concept
A **real right** on another's corporeal immovable, by which the owner must refrain from or allow something for the benefit of another person or tenement (Arts. 613–614).

**Characteristics:** inseparable from the estate; limited use, no possession; only over an immovable (in the ordinary sense); over another's property, so merger extinguishes it; **indivisible** even if estates are divided (Art. 618).

## Kinds
| Basis | Types |
|---|---|
| **Recipient** | Real or praedial (dominant and servient estates); personal |
| **Source** | Legal or compulsory; voluntary |
| **Exercise** | **Continuous** (incessant, no human act: drainage, light and view); **discontinuous** (at intervals, by human act: right of way) |
| **Signs** | **Apparent** (external signs: road, window); **non-apparent** (not building higher) |
| **Duty** | **Positive** (allow something: right of way); **negative** (refrain: *altius non tollendi*) |

## Acquisition
- **Title:** all easements (law, will, donation, contract).
- **Prescription:** only those **continuous and apparent**, in **10 years**. Right of way can never be acquired by prescription (*Bogo-Medellin*; *Alolino v. Flores*).
- **Counting:** positive, from the day exercise began. Negative, from a **notarized prohibition** to the servient owner.

**Light and view:** a window in **one's own wall** is negative, so count from the notarial prohibition. A window in the **neighbor's wall** is positive, so count from opening.

**Article 624: apparent sign.** Requisites: (1) apparent sign between two estates; (2) both owned by one person at the time; (3) sign established by that owner; (4) ownership later divided; (5) nothing contrary in the deed and the sign not removed before execution. The sign acts as a **title**, an exception to the negative-easement rule (*Garcia v. Santos*; *Amor v. Tolentino*).

**Proof:** a missing title may be cured by a deed of recognition or final judgment (Art. 623).

## Rights and obligations
**Servient owner:** keeps ownership and may use the area without affecting the easement (Art. 630), but may not enclose it or obstruct passage (*Reyes v. Valentin*).

**Dominant owner:** has rights necessary for use. Works must be (1) necessary, (2) at the dominant owner's expense, (3) without altering or burdening more, (4) after notice, (5) at the most convenient time and manner (Art. 627). Violations impair the easement (*Goldcrest v. Cypress Gardens*).

## Extinguishment
Merger; non-use for **10 years**; impossibility of use; expiration; fulfillment of condition; renunciation; redemption; annulment of title; termination of grantor's right; abandonment of servient estate; eminent domain.

**Counting non-use:** discontinuous, from last use. Continuous, from a contrary act.

## Legal easements
**Drainage of waters (Art. 637).** The lower estate receives what flows naturally. The higher estate may not increase the burden.

**Public use (Water Code, Art. 51).** Zones along banks and shores:
| Area | Zone |
|---|---|
| Urban | **3 meters** |
| Agricultural | **20 meters** |
| Forest | **40 meters** |

**Aqueduct (Arts. 642–646).** Prove you can dispose of the water and that it is sufficient, use the most convenient and least onerous route, and pay indemnity. It is treated as continuous and apparent, so it may be acquired by prescription.

**Compulsory right of way (Arts. 649–650).** Requisites:
1. Surrounded, with no **adequate** outlet
2. Proper indemnity
3. Isolation not due to the owner's own acts
4. At the point **least prejudicial**, and where consistent, the shortest

- **Adequacy, not convenience,** is the test (*Reyes v. Ramos*; *Dichoso v. Marcos*).
- **Least prejudice beats shortest distance** (*Quimen v. CA*; *Williams v. Zerda*). It refers to the servient estate's suffering.
- A buyer who knew the land was isolated may still demand it (*Williams v. Zerda*). Self-made isolation may not (*Francisco v. IAC*).
- **Who may claim:** owner or holder of a real right; usufructuary yes, mere lessee no.
- An adequate new outlet extinguishes only legal, not voluntary, easements (*Unisource v. Chung*).

**Light and view.** *Jus luminum*: small windows of up to 30 sq. cm at the ceiling joists. *Servidumbre prospectus*: regular windows. It goes with *altius non tollendi*.
| Situation | Distance |
|---|---|
| Direct view, general rule | **2 meters** from the boundary |
| Oblique view | **60 centimeters** |
| Servient owner building where the easement exists | **3 meters** from the line |

**Drainage of buildings (Art. 676).** The right to divert rainwater from one's roof. Requisites: yard surrounded by houses with no outlet through the house; outlet where egress is easiest; least damage; indemnity.

**Distances for planting (Art. 679).** Ordinance, or else **2 meters** for tall trees and **50 cm** for shrubs.
- **Branches:** demand cutting, then go to court if ignored.
- **Roots:** cut them yourself (Art. 680).

**Lateral and subjacent support (Arts. 684–685).** No excavation may deprive adjacent land or a building of sufficient support. Contrary stipulations are void. Annotation is not needed (*Castro v. Monsod*).

## Voluntary easement
Only the servient owner may create it. A naked owner may do so without the usufructuary's consent (Art. 689). Co-owned property needs **all** co-owners (Art. 691).
`,
  nuisance: `
## Concept (Art. 694)
Any act, omission, establishment, business, condition of property or other thing that:
1. Injures or endangers health or safety
2. Annoys or offends the senses
3. Shocks, defies or disregards decency or morality
4. Obstructs free passage of a public highway, street or body of water
5. Hinders or impairs the use of property

A house on a vacant barrio road is a nuisance per se (*Alolino v. Flores*). The maxim is *sic utere tuo ut alienum non laedas*.

## Kinds
**By effect**
- **Public:** a community or considerable number of persons, even if unequally
- **Private:** rights of one or a few
- **Mixed:** both

**By summary abatement**
| | Per se | Per accidens |
|---|---|---|
| Nature | Nuisance at all times, a direct menace to health or safety | Depends on circumstances, a question of fact |
| Abatement | **Summary**, under the law of necessity | **Only after hearing** |

**Attractive nuisance:** one who keeps dangerous instrumentalities likely to attract children, and fails to use ordinary care, is liable to an injured child of tender years, even a technical trespasser (*Hidalgo Enterprises v. Balandan*).

## Remedies
Abatement (judicial or summary); civil action for damages; criminal prosecution for public nuisance.

- Only a nuisance per se may be summarily abated; an ordinance cannot abate anything else without judicial proceedings (*Rana v. Wong*; *Lucena Grand Central*).
- LGUs generally cannot declare a thing a nuisance unless it is per se (*Aquino v. Municipality of Malay*). The Ermita-Malate ordinance was struck down (*City of Manila v. Laguio*).
- Mayors may still close illegally built establishments lacking permits (*Aquino*).

**Who may abate:** the city or municipal health officer (Art. 700), not a Punong Barangay (*Cruz v. Pandacan Hiker's Club*).

**Private person, public nuisance specially injurious to them, per se (Art. 704):** (1) demand on the owner or possessor; (2) rejected; (3) approved by the district health officer and done with local police; (4) value of destruction does not exceed **P3,000**.
`,
  modes: `
## Seven modes (Art. 712)
> **OLDTIPS (from the book):** **O**ccupation, **L**aw, **D**onation, **T**radition, **I**ntellectual creation, **P**rescription, **S**uccession.

- **Original** (independent of a third person's right): occupation, acquisitive prescription, law, intellectual creation.
- **Derivative:** succession, donation, tradition.

## Law
Provisions directly vesting ownership. Examples: fruits falling on adjacent land (Art. 681); a seller who later acquires title, which passes to the buyer (Art. 1434).

## Tradition
**Mode vs. title:** title is the legal basis; mode is the means that actually transfers. **Contracts only create title; delivery transfers ownership** (*San Lorenzo Development v. CA*).

**Requisites:** (1) right pre-exists in the grantor; (2) just cause (e.g., sale); (3) intent to grant and acquire; (4) capacity; (5) outward act. Without the **intention** to deliver, there is no tradition.

**Kinds**
| Kind | How |
|---|---|
| **Real** | Thing placed in the grantee's control |
| **Constructive** | Represented by signs or acts |
| **Quasi-tradition** | Transfer of rights by exercise with the grantor's acquiescence |

**Forms of constructive delivery**
| Form | How |
|---|---|
| *Simbolica* | Keys for movables; **public instrument** for immovables |
| *Longa manu* | Pointing out things within sight |
| *Brevi manu* | Grantee already holds; declaration that they now hold as owner |
| *Constitutum possessorium* | Transferor keeps possession under another capacity, such as lessee |

A public instrument is not delivery if it shows otherwise, or if a third person actually possesses: fiction yields to reality (*Addison v. Felix*).

## Acquisitive prescription
**Possession** must be in the concept of owner, public, peaceful, uninterrupted and adverse (Art. 1118).

| Thing | Ordinary (good faith, just title) | Extraordinary |
|---|---|---|
| **Movable** | **4 years** | **8 years** |
| **Immovable** | **10 years** | **30 years** |

Just title must be proved, never presumed (Art. 1131).

**When it does not run**
- **Registered land** (Sec. 47, PD 1529), though the owner may lose recovery through **laches** (*Heirs of Nieto*).
- **Public dominion.** Patrimonial land may be prescribed (*Malabanan*).
- **Express trusts**, unless (1) unequivocal repudiation amounting to ouster, (2) made known, (3) clear and conclusive evidence (*Buan Vda. de Esconde*).
- **Between** spouses; parents and children during minority or insanity; guardian and ward (Art. 1109).

## Occupation
Seizure of corporeal things with no owner, with intent to acquire. **Requisites:** (1) *res nullius*; (2) appropriable; (3) actual possession or control; (4) intent and capacity.

- **Hunting and fishing:** regulated by special laws; not endangered species.
- **Bees:** owner may pursue onto another's land, indemnifying damage. If not pursued, or pursuit ceases for **2 consecutive days**, the landowner may occupy (Art. 716).
- **Tamed animals:** **20 days** to reclaim, or they become *res nullius*.
- **Hidden treasure:** see Ownership.

**Lost movables (Arts. 719–720)**
1. Return to the owner if known, or **deposit immediately with the mayor** if not. Keeping it may be theft.
2. Mayor announces for **2 consecutive weeks**.
3. After **6 months** with no owner, it goes to the finder, who reimburses publication costs.
4. If the owner appears, the finder gets **1/10** as reward.

## Intellectual creation
Ownership arises **from creation**, even before publication, copyright or patent (Arts. 721–722). The exclusive right covers the first publication only, unless protected by IP law.

**Letters (Art. 723):** the addressee owns the physical letter. The writer owns the ideas and copyright, and consent is needed to publish.
`,
  donation: `
## Concept
An act of liberality disposing of a thing or right gratuitously to another who accepts (Art. 725).

**Requisites:** (1) reduction of the donor's patrimony; (2) increase in the donee's; (3) *animus donandi*, presumed from giving without consideration. A mere intent to donate is not a donation.

Donation is itself a **mode**, so it needs no tradition (*Liguez v. Lopez*).

## Inter vivos vs. mortis causa
**Test:** did the donor intend to transfer ownership on execution? (*Reyes v. Mosqueda*)

| | Inter vivos | Mortis causa |
|---|---|---|
| Effect | During donor's lifetime | Only upon death |
| Revocability | Generally irrevocable | Revocable at will |
| Form | Arts. 748–749 | Formalities of **wills**; needs probate (*Bascara v. Javier*) |
| Donee dies first | Not affected | Void |

## Kinds of inter vivos
| Kind | Meaning | Law |
|---|---|---|
| **Simple or pure** | Pure liberality | Donations |
| **Remuneratory** | Past services, not a demandable debt | Donations |
| **Conditional or modal** | Future services or burdens worth less than the gift | Contracts for onerous part; donations for excess |
| **Onerous** | Reciprocal obligation worth equal or more | **Contracts** |

| Point | Simple or remuneratory | Onerous |
|---|---|---|
| Form | Arts. 748–749 | Any form (Art. 1356) |
| Impossible condition | Treated as not imposed; donation stands (Art. 727) | Donation is void (Art. 1183) |

## Perfection and capacity
Perfection makes the donee absolute owner and generally makes the donation irrevocable. **Acceptance must be during the donor's lifetime.** Death of either before perfection makes the offer ineffective.

**Donor:** capacity to contract and dispose, not specifically prohibited, judged **at the time of donation**. **Future property cannot be donated:** the donor must own the thing then (*nemo dat quod non habet*). Double donation is not legally possible. **Donee:** juridical capacity suffices.

**Prohibited donations**
1. Those guilty of adultery or concubinage at the time; **no prior conviction needed**, as guilt is shown by preponderance in the civil action
2. Those guilty of the same offense, in consideration of it; **prior conviction needed**
3. Public officers, spouses, descendants, ascendants, by reason of office
4. Those incapacitated to succeed by will
5. Spouses during marriage, except moderate gifts on family rejoicing
6. Persons living together as spouses without a valid marriage

## Formalities
| Property | Form |
|---|---|
| **Personal, up to P5,000** | Oral with **simultaneous delivery**, or in writing |
| **Personal, over P5,000** | Donation and acceptance **in writing**, or void |
| **Real, any value** | Donation and acceptance in a **public instrument**, or void |

**Separate acceptance (real property):** the donor must be notified in authentic form, and both instruments must state it. If the donor actually knew of the acceptance, the donation stands despite non-compliance (*Pajarillo v. IAC*). With no evidence of acceptance, the rule is strict (*Republic v. Silim*).

Registration is needed only to bind third persons (*Shopper's Paradise*).

## Limits on amount
1. **Inofficious:** cannot give more than by will. Excess is reducible, but takes effect during the donor's lifetime (Art. 752).
2. **Support:** must reserve enough for self and dependents at acceptance, or reducible to that extent (Art. 750).

## Revocation
| Ground | Key rule | Prescription |
|---|---|---|
| **Appearance of child** (Art. 760) | Donor had no child, then one appears. Reduce to the extent of the provisional legitime | **4 years** from appearance |
| **Non-fulfillment of charge** (Art. 764) | Obligations imposed by the donor | **10 years** from the time to comply |
| **Ingratitude** (Art. 765) | Offense against person, honor or property of donor or family; imputing a crime; undue refusal of support | **1 year** from knowledge and possibility to sue |
| **Inofficious** (Art. 771) | Based on net estate at death; only those with a right to legitime may sue | **10 years** (Art. 1144) |

**Unfinished conditions:** with no period fixed, Art. 1197 normally applies, but not after more than a reasonable time has passed (*Central Philippine University*; *Secretary of Education v. Heirs of Dulay*).

**Automatic revocation clauses are valid.** A court ruling is needed only if the other party challenges it (*De Luna v. Abrigo*; *Roman Catholic Archbishop v. CA*).
`,
};
