// sex has been born. your server is no longer a virgin

const Discord = require('discord.js');
const config = require ('./config.json');
const client = new Discord.Client();
let http = require('http');  
const { on } = require('process');

let faster = [
  "\"Let the games begin!\"",             "\"Sweet Jesus!\"",
  "\"Not that!\"",                        "\"At last!\"",
  "\"Land o' Goshen!\"",                  "\"Is that all?\"",
  "\"Cheese it, the cops!\"",             "\"I never dreamed it could be\"",
  "\"If I do, you won't respect me!\"",   "\"Now!\"",
  "\"Open sesame!\"",                     "\"EMR!\"",
  "\"Again!\"",                           "\"Faster!\"",
  "\"Harder!\"",                          "\"Help!\"",
  "\"Fuck me harder!\"",                  "\"Is it in yet?\"",
  "\"You aren't my father!\"",            "\"Doctor, that's not *my* shou\"",
  "\"No, no, do the goldfish!\"",         "\"Holy Batmobile, Batman!\"",
  "\"He's dead, he's dead!\"",            "\"Take me, Robert!\"",
  "\"I'm a Republican!\"",                "\"Put four fingers in!\"",
  "\"What a lover!\"",                    "\"Talk dirty, you pig!\"",
  "\"The ceiling needs painting,\"",      "\"Suck harder!\"",
  "\"The animals will hear!\"",           "\"Not in public!\"",
  "\"I'm a Tory!\"",                      "\"I'm a Democrat!\"",
  "\"Yes! Fuck Mummy harder!\"",          "\"Seize the means of reproduction!\"",
  "\"Harder, Daddy!\"",                   "\"Good Boy!\"",
  "\"Bastards!\"",                        "\"Coom already!\"",
  "\"Hey! You can't park that there!\"",  "\"Is that the best you can do!?!\"",
  "\"You're my little POG champ!\"",      "\"Honey? Where's my supersuit?\"",
  "\"Cum for mommy, my sweet boy!\"",     "\"The power of christ compells you!\""
];

let said = [
        "bellowed",             "yelped",               "croaked",
        "growled",              "panted",               "moaned",
        "grunted",              "laughed",              "warbled",
        "sighed",               "ejaculated",           "choked",
        "stammered",            "wheezed",              "squealed",
        "whimpered",            "salivated",            "tongued",
        "cried",                "screamed",             "yelled",
        "said",
];

let the = "the";

let fadj = [
        "saucy",                "wanton",               "unfortunate",
        "lust-crazed",          "nine-year-old",        "bull-dyke",
        "bisexual",             "gorgeous",             "sweet",
        "nymphomaniacal",       "large-hipped",         "freckled",
        "forty-five year old",  "white-haired",         "large-boned",
        "saintly",              "blind",                "bearded",
        "blue-eyed",            "large tongued",        "friendly",
        "piano playing",        "ear licking",          "doe eyed",
        "sock sniffing",        "lesbian",              "hairy",
        "obese",                "eighteen year old",    "asian",
        "pot-bellied",          "buxxom",               "thicc",
        "legless",              "cutie pie",            "arrogant",
];

let female = [
   "baggage",              "hussy",                "woman",
   "Duchess",              "female impersonator",  "nymphomaniac",
   "virgin",               "leather freak",        "home-coming queen",
   "defrocked nun",        "bisexual budgie",      "cheerleader",
   "office secretary",     "sexual deviate",       "DARPA contract monitor",
   "little matchgirl",     "ceremonial penguin",   "femme fatale",
   "bosses' daughter",     "construction worker",  "sausage abuser",
   "secretary",            "Congressman's page",   "grandmother",
   "penguin",              "German shepherd",      "stewardess",
   "waitress",             "prostitute",           "computer science group",
   "housewife",            "tomboy",               "archduchess",
   "titty streamer",       "maid",                 "goth girl",
   "lardass",              "queen",                "pothead princess"
];

let yeet = "as the"; 

let madjec = [
   "thrashing",            "slurping",             "insatiable",
   "rabid",                "satanic",              "corpulent",
   "nose-grooming",        "tripe-fondling",       "dribbling",
   "spread-eagled",        "orally fixated",       "vile",
   "awesomely endowed",    "handsome",             "mush-brained",
   "tremendously hung",    "three-legged",         "pile-driving",
   "cross-dressing",       "gerbil buggering",     "bung-hole stuffing",
   "sphincter licking",    "hair-pie chewing",     "muff-diving",
   "clam shucking",        "egg-sucking",          "bicycle seat sniffing",
   "window licking",       "panty sniffing",       "blob-like",
];

let male = [
   "rakehell",             "hunchback",            "lecherous lickspittle",
   "archduke",             "midget",               "hired hand",
   "great Dane",           "stallion",             "donkey",
   "electric eel",         "paraplegic pothead",   "dirty old man",
   "faggot butler",        "friar",                "black-power advocate",
   "follicle fetishist",   "handsome priest",      "chicken flicker",
   "homosexual flamingo",  "ex-celibate",          "drug sucker",
   "ex-woman",             "construction worker",  "hair dresser",
   "dentist",              "judge",                "social worker",
   "basileus",             "anti-hero",            "fallen paladin",
   "catholic priest",      "blackguard",           "knight of the realm",
   "binman",               "milkman",              "president",
   "prime minister",       "old-age pensioner",    "conservative candidate",
   "revolutionary",        "vegan",                "paraletic pisshead",
];

let diddled = [
   "diddled",              "devoured",             "fondled",
   "mouthed",              "tongued",              "lashed",
   "tweaked",              "violated",             "defiled",
   "irrigated",            "penetrated",           "ravished",
   "hammered",             "bit",                  "tongue slashed",
   "sucked",               "fucked",               "rubbed",
   "grudge fucked",        "masturbated with",     "slurped",
   "hate fucked",
];

let pronoun1 = [
	"his", "her", "their"
]

let titadj = [
        "alabaster",            "pink-tipped",          "creamy",
        "rosebud",              "moist",                "throbbing",
        "juicy",                "heaving",              "straining",
        "mammoth",              "succulent",            "quivering",
        "rosey",                "globular",             "varicose",
        "jiggling",             "bloody",               "tilted",
        "dribbling",            "oozing",               "firm",
        "pendulous",            "muscular",             "bovine",
        "sagging",
];

let knockers = [
        "globes",               "melons",               "mounds",
        "buds",                 "paps",                 "chubbies",
        "protuberances",        "treasures",            "buns",
        "bung",                 "vestibule",            "armpits",
        "tits",                 "knockers",             "elbows",
        "eyes",                 "hooters",              "jugs",
        "lungs",                "headlights",           "disk drives",
        "bumpers",              "knees",                "fried eggs",
        "buttocks",             "charlies",             "ear lobes",
        "bazooms",              "mammaries",
];

let and = "and";

let thrust = [
        "plunged",              "thrust",               "squeezed",
        "pounded",              "drove",                "eased",
        "slid",                 "hammered",             "squished",
        "crammed",              "slammed",              "reamed",
        "rammed",               "dipped",               "inserted",
        "plugged",              "augured",              "pushed",
        "ripped",               "forced",               "wrenched",
        "Impaled",
];

let pronoun2 = [
	"his", "her", "their"
];

let dongadj = [
        "bursting",             "jutting",              "glistening",
        "Brobdingnagian",       "prodigious",           "purple",
        "searing",              "swollen",              "rigid",
        "rampaging",            "warty",                "steaming",
        "gorged",               "trunklike",            "foaming",
        "spouting",             "swinish",              "prosthetic",
        "blue veined",          "engorged",             "horse like",
        "throbbing",            "humongous",            "hole splitting",
        "serpentine",           "curved",               "steel encased",
        "glass encrusted",      "knobby",               "surgically altered",
        "metal tipped",         "open sored",           "rapidly dwindling",
        "swelling",             "miniscule",            "boney",
        "monsterous",           "pox-marked",           "poxy",
];

let dong = [
   "intruder",             "prong",                "stump",
   "member",               "meat loaf",            "majesty",
   "bowsprit",             "earthmover",           "jackhammer",
   "ramrod",               "cod",                  "jabber",
   "gusher",               "poker",                "engine",
   "brownie",              "joy stick",            "plunger",
   "piston",               "tool",                 "manhood",
   "lollipop",             "kidney prodder",       "candlestick",
   "John Thomas",          "arm",                  "testicles",
   "balls",                "finger",               "foot",
   "tongue",               "dick",                 "one-eyed wonder worm",
   "canyon yodeler",       "middle leg",           "neck wrapper",
   "stick shift",          "dong",                 "Linda Lovelace choker",
   "prick",                "sword",                "cock",
];


let twatadj = [
        "pulsing",              "hungry",               "hymeneal",
        "palpitating",          "gaping",               "slavering",
        "welcoming",            "glutted",              "gobbling",
        "cobwebby",             "ravenous",             "slurping",
        "glistening",           "dripping",             "scabiferous",
        "porous",               "soft-spoken",          "pink",
        "dusty",                "tight",                "odiferous",
        "moist",                "loose",                "scarred",
        "weapon-less",          "banana stuffed",       "tire tracked",
        "mouse nibbled",        "tightly tensed",       "oft traveled",
        "grateful",             "festering",            "poxy",
];

let twat = [
        "swamp.",               "honeypot.",            "jam jar.",
        "butterbox.",           "furburger.",           "cherry pie.",
        "cush.",                "slot.",                "slit.",
        "cockpit.",             "damp.",                "furrow.",
        "sanctum sanctorum.",   "bearded clam.",        "continental divide.",
        "paradise valley.",     "red river valley.",    "slot machine.",
        "quim.",                "palace.",              "ass.",
        "rose bud.",            "throat.",              "eye socket.",
        "tenderness.",          "inner ear.",           "orifice.",
        "appendix scar.",       "wound.",               "navel.",
        "mouth.",               "nose.",                "cunt.",
        "coochie.",             "pussy.",				"bussy."
];


let triggers = [

	"sex", "cum", "fuck", "penis", "vagina", "porn", "hentai"

];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

http.createServer(function (req, res) {   
  res.write('Alive');   
  res.end(); 
}).listen(8080);


client.once('ready', () => {
	console.log('Ready!');
	console.log('Your Bot is now Online.')
	let activities = ['peepee poopoo'],i = 0;
	setInterval(() => client.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:'STREAMING',url:'https://www.youtube.com/watch?v=IOcQD04-0yw'}), 5000)  
});

client.on('message', message => {

	for(var i = 0; i < triggers.length; i++)
	{
		if(message.content.includes(triggers[i]))
		{
			let pronoun10 = pronoun1[getRandomInt(0, pronoun1.length)];
			let sentence = faster[getRandomInt(0, faster.length)] + " " + said[getRandomInt(0, said.length)] + " " + the +
							" " + fadj[getRandomInt(0, fadj.length)] + " " + female[getRandomInt(0, female.length)] +
							" " + yeet + " " + madjec[getRandomInt(0, madjec.length)] + " " + male[getRandomInt(0, male.length)] +
							" " + diddled[getRandomInt(0, diddled.length)] + " " + pronoun10 + " " + titadj[getRandomInt(0, titadj.length)] +
							" " + knockers[getRandomInt(0, knockers.length)] + " " + and + " " + thrust[getRandomInt(0, thrust.length)] +
							" " + pronoun2[getRandomInt(0, pronoun2.length)] + " " + dongadj[getRandomInt(0, dongadj.length)] + 
							" " + dong[getRandomInt(0, dong.length)] + " into " + pronoun10 + " " +
              twatadj[getRandomInt(0,twatadj.length)] + " " + twat[getRandomInt(0, twat.length)];

			message.channel.send(message.author + "```" + sentence + "```");
      break; 
 		}
	}
  
  if(message.content === `${config.prefix}help`)
  {
    message.channel.send( message.author + "I will spout random p*rn mad-libs anytime the following words are mentioned at any point (censored so I don't trip myself!!): ```s3x, c/m, p0rn, h3ntai, f/ck, p3nis and v4gina```  This bot is also trans and enby-friendly, since the use of *they/them* is included in the pool. I also respond to: ```s3x!help, s3x!donate, s3x!whodidthis, s3x!invite and s3x!contribute```" ); 
  }

  if(message.content === `${config.prefix}donate`)
  {
    message.channel.send( message.author + "If you want to actually donate to this cursed cause and bot, you can do so here: ``` paypal.me/thenintoaster ```  "); 
  }

  if(message.content === `${config.prefix}whodidthis`)
  {
    message.channel.send(message.author + "I was created by a dumb Canadian that calls herself as Nikki, her discord tag is `@The NinToaster #1495` Why? F/ck you, that's why. Nah I'm messing with you, this is a port of an almost 20yr old arch package."); 
  }

  if(message.content === `${config.prefix}contribute`)
  {
    message.channel.send(message.author + "Want to contribute new words? Wanna improve this bot? Here's the GitHub page!: ``` https://github.com/The-NinToaster/sex ``` and open an Issue or a Pull Request! My creator will look periodically."); 
  }


  if(message.content === `${config.prefix}invite`)
  {
    message.channel.send(message.author + "To invite me to another server, use this invite! ```https://discord.com/oauth2/authorize?client_id=790587562926407701&scope=bot ```"); 
  }


})

client.login(config.token);
