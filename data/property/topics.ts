import type { PropertyTopic, PropertyTopicId } from "@/data/property/types";

export const PROPERTY_TOPICS: PropertyTopic[] = [
  { id: "classification", n: 1, title: "Immovable and Movable Property", short: "Immovable/movable", pages: "pp. 156–161", blurb: "Requisites of property, Art. 415 paragraph by paragraph, real property tax, Arts. 416–418." },
  { id: "public-private", n: 2, title: "Public Dominion and Private Ownership", short: "Public/private", pages: "pp. 161–167", blurb: "Public dominion, patrimonial property, conversion, Sec. 14 PD 1529, property of LGUs." },
  { id: "ownership", n: 3, title: "Ownership in General", short: "Ownership", pages: "pp. 167–171", blurb: "Attributes, self-help, state of necessity, recovery actions, airspace, hidden treasure." },
  { id: "accession", n: 4, title: "Accession", short: "Accession", pages: "pp. 172–183", blurb: "Fruits, Arts. 447–455 builder rules, alluvium, avulsion, rivers, islands, movables." },
  { id: "quieting", n: 5, title: "Quieting of Title; Ruinous Buildings and Trees", short: "Quieting", pages: "pp. 183–186", blurb: "Requisites, cloud on title, prescription, liability for ruinous buildings and falling trees." },
  { id: "co-ownership", n: 6, title: "Co-ownership", short: "Co-ownership", pages: "pp. 186–196", blurb: "Ideal shares, consent rules, sale by a co-owner, legal redemption, repudiation, partition." },
  { id: "waters", n: 7, title: "Ownership of Waters", short: "Waters", pages: "pp. 196–197", blurb: "Public dominion, NWRB water permits and when no permit is needed." },
  { id: "possession", n: 8, title: "Possession", short: "Possession", pages: "pp. 197–203", blurb: "Kinds, effects on fruits and expenses, acquisition and loss, Art. 559, animals." },
  { id: "usufruct", n: 9, title: "Usufruct", short: "Usufruct", pages: "pp. 204–211", blurb: "Rights and obligations of the usufructuary, repairs, taxes, caucion juratoria, extinguishment." },
  { id: "easement", n: 10, title: "Easement", short: "Easement", pages: "pp. 211–222", blurb: "Kinds, acquisition, Art. 624, extinguishment, right of way, light and view, lateral support." },
  { id: "nuisance", n: 11, title: "Nuisance", short: "Nuisance", pages: "pp. 222–225", blurb: "Kinds, attractive nuisance, per se vs. per accidens, summary abatement." },
  { id: "modes", n: 12, title: "Modes of Acquiring Ownership", short: "Modes", pages: "pp. 225–232", blurb: "OLDTIPS, law, tradition, acquisitive prescription, occupation, intellectual creation." },
  { id: "donation", n: 13, title: "Donation", short: "Donation", pages: "pp. 232–240", blurb: "Inter vivos vs. mortis causa, kinds, capacity, formalities, reduction and revocation." },
];

export const PROPERTY_TOPIC_MAP = Object.fromEntries(PROPERTY_TOPICS.map((t) => [t.id, t])) as Record<PropertyTopicId, PropertyTopic>;
