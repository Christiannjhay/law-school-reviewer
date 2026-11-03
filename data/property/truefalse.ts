import type { PropertyTF, PropertyTopicId } from "@/data/property/types";

type Raw = [PropertyTopicId, string, boolean, string, string];

const PB = (p: string) => `Pre-Bar ${p}`;

/** True or False items from Pre-Bar pp. 156–240, plus actual T/F items in QUAMTO. */
const RAW: Raw[] = [
  ["possession", "Possession of a movable property is lost when the location of the said movable is unknown to the owner.", false, "Art. 556: possession is not lost while the thing remains under the possessor's control, even if its whereabouts are momentarily unknown.", "QUAMTO p. 101, 2017 Bar"],
  ["donation", "A person can dispose of his corpse through an act inter vivos.", false, "Before death there is no corpse to dispose of. It is done through an act mortis causa.", "QUAMTO pp. 111–112, 2009 Bar"],

  ["classification", "A building permanently attached to land is immovable even if the builder is only a lessee.", true, "Immaterial who built it (Ladera v. Hodges).", PB("p. 157")],
  ["classification", "A house sold for immediate demolition is treated as movable.", true, "Bautista v. Supnad.", PB("p. 157")],
  ["classification", "A building cannot be mortgaged apart from the land.", false, "It may be mortgaged by itself (Prudential Bank v. Panis).", PB("p. 157")],
  ["classification", "Under Art. 415(3), it does not matter who attached the object to the immovable.", true, "It is par. 4 that requires the owner.", PB("p. 158")],
  ["classification", "Machinery essential to an industry cannot be replevied, even if the parties treated it as personal.", false, "Estoppel allows replevin (Serg's Products; Makati Leasing).", PB("pp. 158–159")],
  ["classification", "Undersea communication cables may be treated as machinery under Art. 415(5).", true, "Capitol Wireless.", PB("p. 158")],
  ["classification", "A registered real estate mortgage is real property by analogy.", true, "MBTC v. Alejo; Art. 415(10).", PB("p. 159")],
  ["classification", "Shares of stock are immovable if the corporation owns real estate.", false, "Art. 417(2): they are movable.", PB("p. 160")],
  ["classification", "Electricity is personal property.", true, "Art. 416(3).", PB("p. 160")],

  ["public-private", "Actual use is required before property becomes public dominion.", false, "Intention to devote it to such use is enough.", PB("p. 162")],
  ["public-private", "'Ports' in Art. 420 includes airports.", true, "MIAA v. CA.", PB("p. 162")],
  ["public-private", "A declaration that public land is alienable and disposable makes it open to acquisitive prescription.", false, "It remains public dominion until converted (Malabanan).", PB("p. 163")],
  ["public-private", "Patrimonial property of the State may be acquired by prescription.", true, "Art. 1113.", PB("p. 166")],
  ["public-private", "Only agricultural lands of the public domain may be alienated.", true, "Art. XII, Sec. 2.", PB("p. 163")],
  ["public-private", "Congress has absolute control over patrimonial property of LGUs.", false, "Only over property held in a public capacity.", PB("p. 167")],

  ["ownership", "An owner may use self-help after possession has been lost for a week.", false, "Only at the time of actual or threatened dispossession.", PB("p. 168")],
  ["ownership", "Under state of necessity, the owner may demand indemnity from the person benefited.", true, "Art. 432.", PB("p. 168")],
  ["ownership", "Demand to vacate is jurisdictional in forcible entry.", false, "Only in unlawful detainer.", PB("p. 169")],
  ["ownership", "A defense of ownership in accion publiciana is a collateral attack on the plaintiff's title.", false, "Ownership is resolved only for possession (Heirs of Cullado).", PB("p. 170")],
  ["ownership", "A registered owner's action to recover property does not prescribe.", true, "Aledro-Runa.", PB("p. 170")],
  ["ownership", "A trespasser who finds hidden treasure by chance gets one-half.", false, "It all goes to the landowner.", PB("p. 171")],

  ["accession", "Bank interest is a civil fruit.", true, "Republic v. Holy Trinity Realty.", PB("p. 173")],
  ["accession", "The young of animals of different owners belong to the owner of the male.", false, "Partus sequitur ventrem.", PB("p. 173")],
  ["accession", "Art. 443 expenses are owed only to good-faith persons.", false, "Whether good or bad faith.", PB("p. 173")],
  ["accession", "One who builds with the landowner's consent may be treated as a builder in good faith.", true, "Macasaet v. Macasaet.", PB("p. 174")],
  ["accession", "Art. 448 applies to a vendee a retro.", false, "Arts. 1606, 1616 apply.", PB("pp. 174–175")],
  ["accession", "Art. 448 applies to a condominium unit owner's improvements.", false, "Condominium Act and master deed apply.", PB("p. 175")],
  ["accession", "A landowner under Art. 448 may immediately order demolition.", false, "Only after choosing to sell and the builder fails to pay.", PB("p. 176")],
  ["accession", "A good-faith builder cannot be made to pay rent during retention.", true, "Nuguid v. CA.", PB("pp. 176–177")],
  ["accession", "A builder in bad faith has a right of retention.", false, "No retention (Aquino v. Aguilar).", PB("p. 178")],
  ["accession", "If both landowner and builder are in bad faith, Art. 448 applies.", true, "Art. 453.", PB("p. 178")],
  ["accession", "Accretion to registered land is automatically registered.", false, "It may even be acquired by prescription (Reynante).", PB("p. 180")],
  ["accession", "Land formed with human intervention still qualifies as alluvion.", false, "It must be exclusively the work of nature.", PB("p. 180")],
  ["accession", "Art. 461 applies even if the government deliberately changed the river's course.", true, "Baes v. CA.", PB("p. 181")],
  ["accession", "Islands formed on navigable rivers belong to the State as patrimonial property.", true, "Art. 464.", PB("p. 181")],

  ["quieting", "An action to quiet title requires the plaintiff to be in possession.", false, "Art. 477: possession is not needed.", PB("p. 185")],
  ["quieting", "A judgment in an action to quiet title binds the whole world.", false, "It is quasi in rem, binding the parties only.", PB("pp. 183–184")],
  ["quieting", "Quieting of title is imprescriptible if the plaintiff is in possession.", true, "Syjuco v. Bonifacio.", PB("p. 185")],
  ["quieting", "A plaintiff not in possession has 30 years to file.", true, "Republic v. Mangotara.", PB("p. 185")],
  ["quieting", "Under Art. 483, the owner is liable for a falling tree even if a typhoon caused the fall.", true, "The owner is already negligent.", PB("p. 186")],

  ["co-ownership", "A co-owner may be ejected by the others.", false, "Anzures v. Ventanilla.", PB("p. 187")],
  ["co-ownership", "A co-owner who redeems the whole property becomes sole owner.", false, "Redemption is not a mode of ending co-ownership.", PB("pp. 189, 193")],
  ["co-ownership", "Any co-owner may file ejectment without joining the others.", true, "Art. 487.", PB("p. 188")],
  ["co-ownership", "An adverse judgment in ejectment binds unimpleaded co-owners.", false, "It does not prejudice them.", PB("p. 189")],
  ["co-ownership", "Majority means a majority of co-owners by headcount.", false, "It means the controlling interest.", PB("p. 189")],
  ["co-ownership", "A co-owner has a pre-emptive right.", false, "Only redemption (Reyes v. Concepcion).", PB("p. 193")],
  ["co-ownership", "Notice of sale for legal redemption may come from the buyer.", false, "Must come from the vendor.", PB("pp. 192–193")],
  ["co-ownership", "A co-owner's right to demand partition may be lost by laches while co-ownership is recognized.", false, "It is imprescriptible.", PB("p. 195")],
  ["co-ownership", "Building a house on another's land without agreement creates co-ownership.", false, "Victoria v. Pidlaoan: Arts. 448–454 apply.", PB("p. 188")],

  ["waters", "Waters on private land are private property.", false, "All waters are public dominion.", PB("pp. 196–197")],
  ["waters", "Hand-carried appropriation of water needs no permit.", true, "Water Code, Art. 14.", PB("p. 197")],

  ["possession", "A possessor by tolerance is in good faith.", false, "Resuena v. CA.", PB("p. 198")],
  ["possession", "A possessor in bad faith can recover necessary expenses.", true, "But without retention.", PB("p. 200")],
  ["possession", "A possessor in bad faith can remove useful improvements.", false, "No refund or removal.", PB("p. 200")],
  ["possession", "Both good and bad faith possessors may remove ornaments if no injury results.", true, "Arts. 548–549.", PB("p. 200")],
  ["possession", "Acts merely tolerated do not affect possession.", true, "Art. 537.", PB("p. 201")],
  ["possession", "'Unlawful deprivation' under Art. 559 is limited to theft or robbery.", false, "Includes abuse of confidence.", PB("p. 203")],

  ["usufruct", "A usufructuary may lease the thing without the owner's consent.", true, "NHA v. CA; Art. 572.", PB("p. 205")],
  ["usufruct", "A usufructuary may be reimbursed for useful improvements.", false, "Removal or set-off only.", PB("p. 206")],
  ["usufruct", "Owner may mortgage property in usufruct.", true, "Hemedes v. CA.", PB("p. 205")],
  ["usufruct", "A usufruct can be constituted over a servitude.", false, "A servitude has no independent existence.", PB("p. 204")],
  ["usufruct", "Extraordinary repairs are for the usufructuary's account.", false, "For the owner's account.", PB("p. 209")],
  ["usufruct", "A usufruct until a third person reaches a certain age generally continues even if that person dies earlier.", true, "Art. 606.", PB("p. 210")],

  ["easement", "An easement can be established over one's own property.", false, "It is enjoyed over another's property.", PB("p. 211")],
  ["easement", "Failure to annotate an easement extinguishes it.", false, "QUAMTO 2001 Bar: not a ground under Art. 631.", "QUAMTO pp. 108–109, 2001 Bar"],
  ["easement", "All easements may be acquired by title.", true, "Arts. 620, 622.", PB("p. 213")],
  ["easement", "Art. 624 allows acquiring light and view without a notarial prohibition.", true, "Garcia v. Santos.", PB("p. 215")],
  ["easement", "Non-use of a discontinuous easement counts from a contrary act.", false, "From last use. Contrary act applies to continuous ones.", PB("p. 216")],
  ["easement", "A buyer who knew the land was landlocked may still demand a right of way.", true, "Williams v. Zerda.", PB("pp. 218–219")],
  ["easement", "An adequate new outlet extinguishes voluntary easements.", false, "Only legal ones.", PB("p. 219")],
  ["easement", "A neighbor may cut encroaching branches on their own.", false, "Must demand, then go to court.", PB("p. 221")],
  ["easement", "A stipulation allowing excavation that removes lateral support is void.", true, "Art. 685.", PB("pp. 221–222")],
  ["easement", "Voluntary easement on co-owned land needs unanimity.", true, "Art. 691.", PB("p. 222")],

  ["nuisance", "An LGU may generally declare any thing a nuisance by ordinance.", false, "Only a nuisance per se.", PB("p. 224")],
  ["nuisance", "A child trespasser cannot recover under the attractive nuisance doctrine.", false, "Technical trespass is no bar.", PB("p. 223")],
  ["nuisance", "A house on a vacant barrio road is a nuisance per se.", true, "Alolino v. Flores.", PB("p. 222")],
  ["nuisance", "A Punong Barangay may determine summary abatement.", false, "Cruz v. Pandacan Hiker's Club.", PB("p. 224")],

  ["modes", "A contract of sale alone transfers ownership.", false, "Delivery does.", PB("pp. 225–226")],
  ["modes", "Execution of a public instrument is always delivery of real property.", false, "Not if a third person possesses (Addison v. Felix).", PB("p. 227")],
  ["modes", "Just title for prescription is presumed.", false, "Must be proved (Art. 1131).", PB("p. 228")],
  ["modes", "Prescription does not run between spouses.", true, "Art. 1109.", PB("p. 229")],
  ["modes", "A registered owner may lose the right to recover possession by laches.", true, "Heirs of Nieto.", PB("p. 228")],
  ["modes", "An owner who stops pursuing a swarm for two consecutive days is deemed to abandon it.", true, "Art. 716.", PB("p. 230")],
  ["modes", "Authors own their works only after registering a copyright.", false, "From creation.", PB("p. 232")],

  ["donation", "Mere declaration of intent to donate is a donation.", false, "It must be carried out.", PB("p. 233")],
  ["donation", "A donation may comprehend future property.", false, "Art. 751.", PB("pp. 235–236")],
  ["donation", "Registration is necessary for validity of a real property donation between the parties.", false, "Only to bind third persons.", PB("pp. 237–238")],
  ["donation", "An impossible condition in a simple donation voids it.", false, "Treated as not imposed.", PB("p. 235")],
  ["donation", "A notation defect may be excused if the donor actually knew of the acceptance.", true, "Pajarillo v. IAC.", PB("p. 237")],
  ["donation", "Acceptance may be made after the donor's death.", false, "During the donor's lifetime.", PB("p. 235")],
  ["donation", "An automatic revocation clause in a donation is valid.", true, "De Luna v. Abrigo.", PB("p. 240")],
  ["donation", "An action to reduce an inofficious donation may be brought by anyone with interest.", false, "Only those entitled to legitime, and their heirs or successors.", PB("p. 239")],
];

export const PROPERTY_TF: PropertyTF[] = RAW.map(([topic, s, answer, explain, source], i) => ({
  id: `prop-tf-${i + 1}`,
  topic,
  s,
  answer,
  explain,
  source,
}));
