/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race: Gnoll and Sahuagin
	Effect:		This script adds the Gnoll and Sahuagin race from the Tome of Monstrous Races by /u/revlid on /r/UnearthedArcana (https://redd.it/7uzdvb)
				This homebrew was created by revlid and is available here: http://homebrewery.naturalcrit.com/share/S1x4kCFv-
	Code by:	/u/sea__ (edits by /u/safety-orange)
	Date:		2018-02-12 (sheet v12.999)
*/

var iFileName = "Tome of Monstrous Races: Gnoll & Sahuagin [revlid's work.js";
RequiredSheetVersion(13);

SourceList.V["ToMR"] = {
	name : "/u/revlid's Tome of Monstrous Races",
	abbreviation : "ToMR",
	group : "Reddit/r/UnearthedArcana",
	url : "http://homebrewery.naturalcrit.com/share/S1x4kCFv-",
	date : "2018/02/03"
};

RaceList["gnoll-cult"] = {
	regExpSearch : /^(?=.*gnoll)(?=.*cult).*$/i,
	name : "Cult Gnoll",
	sortname : "Gnoll, Cult",
	source : ["ToMR", 8],
	plural : "Cult Gnolls",
	size : 3,
	speed : { 
		walk : { spd : 30, enc : 20 } 
	},
	languageProfs : ["Common", "Abyssal"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : ["ToMR", 9],
		damage : [1, 6, "piercing"]
	},
	weaponsAdd : ["Bite"],
	vision : [["Darkvision", 60]],
	age : " rarely live longer than 30 years, but mature to adulthood in their first few years, and show no signs of age until a sudden collapse in their last year of life.",
	height : " normally stand between 7 and 8 feet tall, even in their characteristic hunched posture.",
	weight : " weigh around 300 pounds.",
	savetxt : { immune : ["disease"] },
	skills : ["Intimidation"],
	scores : [1, 0, 2, 0, 0, 0],
	features : {
		"carrion eater" : {
			name : "Carrion Eater",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : ""
		},
		"rampage" : {
			name : "Rampage",
			minlevel : 1,
			action : ["bonus action",""],
			tooltip : ""
		}
	},
	trait : "Cult Gnoll (+1 Strength, +2 Constitution)\nBite: I can bite for 1d6 piercing damage instead of using unarmed strikes.\nCarrion Eater: Once per long rest, I can feed on a corpse during a short rest. At the end of the rest, I regain HP equal to the consumed creature's HD + my Constitution modifier.\nRampage: As a bonus action when I reduce a creature to 0 HP with a melee attack on my turn, I can move up to half my speed and make a bite attack."
};

RaceList["gnoll-spotted"] = {
	regExpSearch : /^(?=.*gnoll)(?=.*spotted).*$/i,
	name : "Spotted Gnoll",
	sortname : "Gnoll, Spotted",
	source : ["ToMR", 8],
	plural : "Spotted Gnolls",
	size : 3,
	speed : { 
		walk : { spd : 30, enc : 20 } 
	},
	languageProfs : ["Common", "Abyssal"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : ["ToMR", 9],
		damage : [1, 6, "piercing"]
	},
	weaponsAdd : ["Bite"],
	vision : [["Darkvision", 60]],
	age : " rarely live longer than 30 years, but mature to adulthood in their first few years, and show no signs of age until a sudden collapse in their last year of life.",
	height : " normally stand between 7 and 8 feet tall, even in their characteristic hunched posture.",
	weight : " weigh around 300 pounds.",
	savetxt : { immune : ["disease"] },
	skills : ["Intimidation", "Deception"],
	scores : [0, 0, 2, 0, 0, 1],
	spellcastingAbility : 6,
	features : {
		"carrion eater" : {
			name : "Carrion Eater",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : ""
		},
		"butchers lure" : {
			name : "Butcher's Lure",
			minlevel : 1,
			action : ["action",""],
			spellcastingBonus : {
				name : "Butcher's Lure",
				spells : ["minor illusion"],
				selection : ["minor illusion"]
			}
		}
	},
	trait : "Spotted Gnoll (+2 Constitution, +1 Charisma)\nBite: I can bite for 1d6 piercing damage instead of using unarmed strikes.\nCarrion Eater: Once per long rest, I can feed on a corpse during a short rest. At the end of the rest, I regain HP equal to the consumed creature's HD + my Constitution modifier.\nButcher's Lure: I know the Minor Illusion cantrip and can cast it without components. I can only use it to create illusory sounds, but others have disadvantage on checks to determine they are illusions. Charisma is my spellcasting ability for this.\nTrickster. You have proficiency in the Deception skill, and know one extra language of your choice."
};

RaceList["gnoll-tearer"] = {
	regExpSearch : /^(?=.*gnoll)(?=.*tearer).*$/i,
	name : "Tearer Gnoll",
	sortname : "Gnoll, Tearer",
	source : ["ToMR", 8],
	plural : "Gnolls",
	size : 3,
	speed : { 
		walk : { spd : 30, enc : 20 } 
	},
	languageProfs : ["Common", "Abyssal"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : ["ToMR", 9],
		damage : [1, 6, "piercing"]
	},
	weaponsAdd : ["Bite"],
	vision : [["Darkvision", 60]],
	age : " rarely live longer than 30 years, but mature to adulthood in their first few years, and show no signs of age until a sudden collapse in their last year of life.",
	height : " normally stand between 7 and 8 feet tall, even in their characteristic hunched posture.",
	weight : " weigh around 300 pounds.",
	savetxt : { immune : ["disease"] },
	skills : ["Intimidation"],
	improvements : "Tearer Gnoll: +1 Dexterity, +2 Constitution;",
	scores : [0, 1, 2, 0, 0, 0],
	features : {
		"carrion eater" : {
			name : "Carrion Eater",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : ""
		}
	},
	trait : "Tearer Gnoll (+1 Dexterity, +2 Constitution)\nSnapping Jaws: I can bite for 1d6 piercing damage instead of using unarmed strikes. This bite attack is treated as a finesse weapon and as a light weapon for the purpose of two-weapon fighting.\nChaser: Your base walking speed increases to 35 feet.\nCarrion Eater: Once per long rest, I can feed on a corpse during a short rest. At the end of the rest, I regain HP equal to the consumed creature's HD + my Constitution modifier."
};
RaceList["sahuagin-deepchild"] = {
	regExpSearch : /^(?=.*sahuagin)(?=.deepchild).*$/i,
	name : "Deepchild Sahuagin",
	sortname : "Sahuagin, Deepchild",
	source : ["ToMR", 27],
	plural : "Deepchild Sahuagin",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Aquan"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : ["ToMR", 27],
		damage : [1, 6, "piercing"]
	},
	weaponsAdd : ["Bite"],
	vision : [["Darkvision", 120]],
	age : " age at the same rate as elves, but consider longevity an ill omen; the purpose of life to fulfil one's destiny, so an aged sahuagin must be dissolute, despised by the gods, or possessed of a strange fate indeed.",
	height : " range from 6 to well over 7 feet tall (5'9\" + 2d10\")",
	weight : " weigh around 200 lb (120 + 2d10 \xD7 2d6 lb)",
	scores : [2, 0, 0, 1, 0, 0],
	features : {
		"red frenzy" : {
			name : "Red Frenzy",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		}
	},
	trait : "Deepchild Sahuagin (+2 Strength, +1 Consitution OR +1 Wisdom) Bite: I am proficient with my flesh-shredding bite, a simple melee weapon that deals 1d6 piercing damage." + (typePF ? "\n" : " ") + "Red Frenzy: When I take the Attack action on my turn, I can bite a creature as a bonus action. On a hit, I gain advantage on my bite attack rolls against that creature for 1 minute, or until it is reduced to 0 hit points. I cannot willingly move away from that creature during this time. I must complete a short before I use this feature again." + (typePF ? "\n" : " ") + "Hold Breath: I can hold my breath for up to 15 minutes at a time." + (typePF ? "\n" : " ") + "Natural Armor: I have an AC of 13 + Dexterity modifier + shield." + (typePF ? "\n" : " ") + "Hungry Jaws: As a bonus action, once per short rest, I can make a special bite attack and if it hits I gain temporary HP equal to my Con modifier (min 1)."
};
