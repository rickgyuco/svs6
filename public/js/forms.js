"use strict";

var ACCEPTED = [
    "hello"
]
var ACCEPTIGEX = new RegExp(ACCEPTED.join("|", "i"));

var PROHIBITED = [
    "_96WasntEnough", 
    "_H1tIer", 
    "$uck", 
    "1H4TEN1GG3R5", 
    "5h1t", 
    "5hit", 
    "96DeadCunts", 
    "96DeadFans", 
    "a_s_s", 
    "a55", 
    "adolf_hitler", 
    "adolfhitler", 
    "Adultxxx", 
    "Amateurcouples", 
    "Amateurhardcore", 
    "Amateurhousewives", 
    "Amateurnude", 
    "Amateurporn", 
    "Amateursex", 
    "Amateurxxx", 
    "ana1", 
    "Anal", 
    "Analcum", 
    "Analfuck", 
    "Analingus", 
    "Analjpg", 
    "Analpics", 
    "Analrape", 
    "Analraping", 
    "Analsex", 
    "Anilingus", 
    "Animalerotica", 
    "Animalsex", 
    "Anti-Islam", 
    "anus", 
    "ar5e", 
    "arrse", 
    "arse", 
    "@rse",
    "Asianass", 
    "Asianbabes", 
    "Asianbondage", 
    "Asianhardcore", 
    "Asiannude", 
    "Asianpics", 
    "Asianpleasures", 
    "Asianporn", 
    "Asianpussy", 
    "Asiansex", 
    "Asiansluts", 
    "Asianthumbnails", 
    "Asianxxx", 
    "Asiasex", 
    "Asphyxiophilia", 
    "Ass", 
    "@ss",
    "ass-fucker", 
    "asses", 
    "Assfuck", 
    "assfucker", 
    "assfukka", 
    "Asshole", 
    "assholes", 
    "Assjpg", 
    "Asslic", 
    "Assphuc", 
    "Assphuk", 
    "Asspics", 
    "asswhole", 
    "Asswipe", 
    "Autoerotic", 
    "b!tch", 
    "b!tche$", 
    "b!tches", 
    "b00bs", 
    "b17ch", 
    "b1owjob", 
    "b1owjobs", 
    "b1tch", 
    "b1tch3$", 
    "b1tch3s", 
    "b1tche$", 
    "b1tches", 
    "Backpacker", 
    "ballbag", 
    "balls", 
    "Ballsac", 
    "ballsack", 
    "Bang", 
    "Basicbitch", 
    "Bastard", 
    "b@stard",
    "b@st@rd",
    "Bean-flicking", 
    "Beasiality", 
    "Beastality", 
    "Beasteality", 
    "Beastial", 
    "beastiality", 
    "Beastility", 
    "Beastlove", 
    "Beastsex", 
    "Beastuality", 
    "Beastyality", 
    "Beatiality", 
    "Beavershot", 
    "Bedroomcam", 
    "bellend", 
    "bestial", 
    "Bestiality", 
    "bi+ch", 
    "biatch", 
    "Bigblackcocks", 
    "Bigblacktits", 
    "Bigclits", 
    "Bigcock", 
    "Bigdick", 
    "Biggestcock", 
    "Bignipples", 
    "Bigpussy", 
    "Bigtit", 
    "Bitch", 
    "bitch3s", 
    "bitcher", 
    "bitchers", 
    "bitches", 
    "bitchin", 
    "bitching", 
    "Blackass", 
    "Blackcum", 
    "Blackcunt", 
    "Blackface", 
    "Blackie", 
    "Bloodshed", 
    "bloody", 
    "blow-job", 
    "Blowboy", 
    "Blowjob", 
    "blowjobs", 
    "bo11ock", 
    "bo11ocks", 
    "boiolas", 
    "BokoHaram", 
    "bollock", 
    "bollocks", 
    "bollok", 
    "Bomber", 
    "Bondagepics", 
    "Bondagepictures", 
    "Bondagestories", 
    "Bondagevideos", 
    "Boner", 
    "boob", 
    "boobs", 
    "booobs", 
    "boooobs", 
    "booooobs", 
    "booooooobs", 
    "Bootlip", 
    "Boycott", 
    "Boylove", 
    "breasts", 
    "BrownWilson", 
    "buceta", 
    "bugger", 
    "bum", 
    "Bumming", 
    "bunnyfucker", 
    "butt", 
    "Buttbanger", 
    "Buttbanging", 
    "Buttfuck", 
    "butthole", 
    "buttmuch", 
    "Buttpirate", 
    "Buttplug", 
    "Buttreamer", 
    "Buttstuffer", 
    "c00n", 
    "c0ck", 
    "c0ck-sucker", 
    "c0ckface", 
    "c0ckhead", 
    "c0ckmunch", 
    "c0ckmuncher", 
    "c0cks", 
    "c0cksuck", 
    "c0cksucked", 
    "c0cksucker", 
    "c0cksucking", 
    "c0cksucks", 
    "c0cksuka", 
    "c0cksukka", 
    "c0k", 
    "c0kmuncher", 
    "c0ksucka", 
    "c1it", 
    "c1itoris", 
    "c1its", 
    "CamelFuckers_", 
    "Candyteen", 
    "carpet-muncher", 
    "Carpetmuncher", 
    "cawk", 
    "Celebnudes", 
    "Celebritiesnaked", 
    "Celebritiesnude", 
    "Celebritynude", 
    "Celebrityporn", 
    "Celebritysex", 
    "Celebsluts", 
    "Celebsnude", 
    "Chatsex", 
    "Chickswithdicks", 
    "Childporno", 
    "Childsex", 
    "Chinesepussy", 
    "Chink", 
    "cipa", 
    "Citizens_Cunts", 
    "CitizensCunts", 
    "City_Cvnts", 
    "cl1t", 
    "Clit", 
    "clitoris", 
    "clits", 
    "Closeuppussy", 
    "Clubsex", 
    "Clusterfuck", 
    "cnut", 
    "Cocaine", 
    "Cochie", 
    "Cock", 
    "cock-sucker", 
    "cockface", 
    "cockhead", 
    "cockmunch", 
    "cockmuncher", 
    "cocks", 
    "cocksuck", 
    "cocksucked", 
    "Cocksucker", 
    "cocksucking", 
    "cocksucks", 
    "cocksuka", 
    "cocksukka", 
    "cok", 
    "cokmuncher", 
    "coksucka", 
    "Comebath", 
    "Comedrinkers", 
    "Comeeaters", 
    "Comefacial", 
    "Comeguzzlers", 
    "Comeshot", 
    "Cooch", 
    "coon", 
    "Coonass", 
    "Cooter", 
    "Cottaging", 
    "cox", 
    "crap", 
    "Crotch", 
    "Crotchless", 
    "Cum", 
    "Cumbath", 
    "Cumbucket", 
    "Cumcovered", 
    "Cumdrinkers", 
    "Cumeaters", 
    "Cumface", 
    "Cumfacial", 
    "Cumgallery", 
    "Cumguzzlers", 
    "Cumhole", 
    "Cuming", 
    "Cumload", 
    "Cumlovers", 
    "cummer", 
    "cumming", 
    "Cumqueen", 
    "Cums", 
    "cumshot", 
    "Cunilingus", 
    "cunillingus", 
    "Cunnilingus", 
    "Cunt", 
    "CuntinaFuckoffa", 
    "cuntlick", 
    "cuntlicker", 
    "cuntlicking", 
    "cunts", 
    "cyalis", 
    "Cybererotica", 
    "Cyberflix", 
    "cyberfuc", 
    "cyberfuck", 
    "cyberfucked", 
    "cyberfucker", 
    "cyberfuckers", 
    "cyberfucking", 
    "Cyberlust", 
    "Cybernude", 
    "Cyberotica", 
    "Cyberporn", 
    "Cybersex", 
    "Cyberslut", 
    "Cyberteenpic", 
    "d1ck", 
    "d1ckhead", 
    "d1ldo", 
    "d1ldos", 
    "d1nk", 
    "d1nks", 
    "d1rsa", 
    "daesh", 
    "damn", 
    "DarrenWilson", 
    "DepaysDadLeft", 
    "dick", 
    "Dickhead", 
    "Dicklick", 
    "Dickmeat", 
    "Dicknasty", 
    "Dickpic", 
    "Dicksex", 
    "Dicksuck", 
    "Dildo", 
    "dildos", 
    "Dingleberries", 
    "dink", 
    "dinks", 
    "dirsa", 
    "Dirtypictures", 
    "Dirtysex", 
    "dlck", 
    "dog-fucker", 
    "Dogfuck", 
    "Doggiestyle", 
    "doggin", 
    "dogging", 
    "Doggystyle", 
    "Dogsex", 
    "donkeyribber", 
    "doosh", 
    "Doublepenetration", 
    "Douche", 
    "Douchebag", 
    "Downblouse", 
    "Drippingpussy", 
    "duche", 
    "Dyke", 
    "Eatcum", 
    "Eatingcum", 
    "Eatingpussy", 
    "Eatpussy", 
    "Eatshit", 
    "Ebonyporn", 
    "Ebonysex", 
    "Ebonyxxxlinks", 
    "Ejaculate", 
    "ejaculated", 
    "ejaculates", 
    "ejaculating", 
    "ejaculatings", 
    "ejaculation", 
    "ejakulate", 
    "Escortservice", 
    "Explicitsex", 
    "Extremehardcoresex", 
    "Extremesex", 
    "Extremist", 
    "f_u_c_k", 
    "f-u-c-k", 
    "f-u-c-k-e-r", 
    "f@g", 
    "f@ggot", 
    "f1ngerfuck", 
    "f1ngerfuck1ng", 
    "f1ngerfucked", 
    "f1ngerfucker", 
    "f1ngerfuckers", 
    "f1ngerfucks", 
    "f1stfuck", 
    "f1stfuck1ng", 
    "f1stfuck1ngs", 
    "f1stfucked", 
    "f1stfucker", 
    "f1stfuckers", 
    "f1stfucks", 
    "f4nny", 
    "Facesit", 
    "Facial", 
    "Facialcum", 
    "fag", 
    "fag0t", 
    "fag0ts", 
    "fagging", 
    "faggitt", 
    "Faggot", 
    "faggs", 
    "Faggy", 
    "fagot", 
    "fagots", 
    "fags", 
    "Familysex", 
    "fanny", 
    "fannyflaps", 
    "fannyfucker", 
    "fanyy", 
    "Farmgirl", 
    "Farmlove", 
    "Farmslut", 
    "Farmteen", 
    "fatass", 
    "Fatpussy", 
    "Fatsex", 
    "Fatso", 
    "Fatxxx", 
    "fcuk", 
    "fcuker", 
    "fcuking", 
    "feck", 
    "fecker", 
    "Felatio", 
    "felching", 
    "fellate", 
    "Fellatio", 
    "Feltch", 
    "Fingerfuck", 
    "fingerfucked", 
    "fingerfucker", 
    "fingerfuckers", 
    "fingerfucking", 
    "fingerfucks", 
    "Fistfuck", 
    "fistfucked", 
    "fistfucker", 
    "fistfuckers", 
    "fistfucking", 
    "fistfuckings", 
    "fistfucks", 
    "Fistin", 
    "flange", 
    "fook", 
    "fooker", 
    "Freeadultgames", 
    "Freeadultsex", 
    "Freeadultstories", 
    "Freebeast", 
    "Freeblackpics", 
    "Freeblacksites", 
    "Freedick", 
    "Freeerotic", 
    "Freefile", 
    "Freefuck", 
    "Freegay", 
    "Freehardcore", 
    "Freelesbian", 
    "Freelivesex", 
    "Freenakedwomen", 
    "Freenude", 
    "Freeoralsex", 
    "Freeporn", 
    "Freepussy", 
    "Freesex", 
    "Freesmut", 
    "Freeteensex", 
    "Freethebeast", 
    "Freetit", 
    "Freexxx", 
    "Frexxx", 
    "Fucc", 
    "Fuck", 
    "f-ck",
    "f+ck",
    "fucka", 
    "fucked", 
    "fucker", 
    "fuckers", 
    "fuckhead", 
    "fuckheads", 
    "fuckin", 
    "fucking", 
    "fuckings", 
    "fuckingshitmotherfucker", 
    "fuckme", 
    "fucks", 
    "Fucktard", 
    "FuckThe_Niggers", 
    "fuckwhit", 
    "fuckwit", 
    "fudge-packer", 
    "Fudgepacker", 
    "Fuk", 
    "fuker", 
    "fukker", 
    "fukkin", 
    "fuks", 
    "fukwhit", 
    "fukwit", 
    "fux", 
    "fux0r", 
    "Fvck", 
    "FvckN1ggerCunts", 
    "Gangbang", 
    "gangbanged", 
    "gangbangs", 
    "Gangrape", 
    "Gangraping", 
    "Gaybondage", 
    "Gayeroticstories", 
    "Gayhardcore", 
    "gaylord", 
    "Gaynudes", 
    "Gayphotos", 
    "Gaypics", 
    "Gaypictures", 
    "Gayporn", 
    "gaysex", 
    "Gaysexstories", 
    "Gaysian", 
    "Gaytwinks", 
    "Gayvideo", 
    "Gayxxx", 
    "Girlcam", 
    "Givehead", 
    "Gizzum", 
    "Gloryhole", 
    "goatse", 
    "God", 
    "god-dam", 
    "god-damned", 
    "goddamn", 
    "goddamned", 
    "Gringo", 
    "Groupsex", 
    "h!tl3r", 
    "h!tler", 
    "Hairypussy", 
    "Hairywomen", 
    "Hamas", 
    "Handjob", 
    "Hardcorehooters", 
    "Hardcorejunky", 
    "Hardcoremovies", 
    "Hardcorepics", 
    "Hardcorepictures", 
    "Hardcorepix", 
    "Hardcoreporn", 
    "Hardcorepussy", 
    "Hardcoresex", 
    "Hardcorevideo", 
    "Hardcorexxx", 
    "Harddicks", 
    "Hardecore", 
    "Hardniples", 
    "Hardnipples", 
    "Hardon", 
    "Hardporn", 
    "Hardsex", 
    "Harrypussy", 
    "hell", 
    "heshe", 
    "Hijab", 
    "Hitler", 
    "Hitler_Fanatic", 
    "HitlerWasBoss", 
    "hoar", 
    "hoare", 
    "hoer", 
    "Hollywoodwhores", 
    "Homo", 
    "Homophobe", 
    "Homophobia", 
    "Hooker", 
    "Hootersex", 
    "hore", 
    "horniest", 
    "Horny", 
    "Horseblow", 
    "Horsecum", 
    "Horsesex", 
    "Hotcum", 
    "Hotpussy", 
    "Hotsex", 
    "Hugedicks", 
    "Hugehooters", 
    "Hugemen", 
    "Hugenipples", 
    "Hugepussy", 
    "Hugetits", 
    "Illegalgirls", 
    "Illegalsex", 
    "Immigrant", 
    "Incestpic", 
    "Incestpix", 
    "Incestsex", 
    "InsolentBastard", 
    "Interracialhardcore", 
    "Interracialsex", 
    "Interracialxxx", 
    "isil", 
    "isis", 
    "Islamic", 
    "jack-off", 
    "jackoff", 
    "JamesYouCunt", 
    "Jap", 
    "Japanesebondage", 
    "Japaneseporn", 
    "Japansex", 
    "Jerk-off", 
    "Jerkingoff", 
    "Jerkoff", 
    "Jewish", 
    "Jihadist", 
    "Jism", 
    "Jiz", 
    "jizm", 
    "jizz", 
    "Juicypussy", 
    "K1LL_ALL_BIACKS", 
    "kawk", 
    "KeystoneXL", 
    "Kiddiepic", 
    "Kiddieporn", 
    "Kiddipix", 
    "Kiddiporn", 
    "Kidpix", 
    "Kidporn", 
    "Kidsex", 
    "Kike", 
    "Killer", 
    "Killing", 
    "KKK", 
    "knob", 
    "knobead", 
    "knobed", 
    "knobend", 
    "knobhead", 
    "knobjocky", 
    "knobjokey", 
    "kock", 
    "kondum", 
    "kondums", 
    "kum", 
    "kummer", 
    "kumming", 
    "kums", 
    "kunilingus", 
    "l3i+ch", 
    "l3itch", 
    "labia", 
    "Largedicks", 
    "Largepussy", 
    "Largetits", 
    "Latinohardcore", 
    "Latinonude", 
    "Latinoporn", 
    "Latinosluts", 
    "Legsex", 
    "Lesbianerotica", 
    "Lesbianhardcore", 
    "Lesbianorgies", 
    "Lesbianpics", 
    "Lesbianpictures", 
    "Lesbianporn", 
    "Lesbo", 
    "Lezzie", 
    "LFCAreSh1t", 
    "LGBT", 
    "lHATEBL4ACKS", 
    "lHATEBL4CKS", 
    "lHateMuslims", 
    "Littlenipples", 
    "Littletits", 
    "Liveporn", 
    "LiverpoolRShite", 
    "Livesex", 
    "lmfao", 
    "Lolitapic", 
    "Lolitapix", 
    "Lolitasex", 
    "Longdicks", 
    "Longnipples", 
    "LSD", 
    "lust", 
    "lusting", 
    "m0f0", 
    "m0fo", 
    "m45terbate", 
    "ma5terb8", 
    "ma5terbate", 
    "Maddiee__McCann", 
    "ManCityRShite", 
    "ManCitySuck", 
    "Marijuana", 
    "masochist", 
    "Massacre", 
    "master-bate", 
    "masterb8", 
    "masterbat*", 
    "masterbat3", 
    "Masterbate", 
    "Masterbating", 
    "Masterbation", 
    "masterbations", 
    "Mastrubation", 
    "Mastubation", 
    "Masturbate", 
    "Masturbating", 
    "Maturepussy", 
    "Maturewomennude", 
    "Megapussy", 
    "Meth", 
    "MikeBrown", 
    "mo-fo", 
    "mof0", 
    "mofo", 
    "Molest", 
    "Molestation", 
    "Mondoporno", 
    "mothafuck", 
    "mothafucka", 
    "mothafuckas", 
    "mothafuckaz", 
    "mothafucked", 
    "mothafucker", 
    "mothafuckers", 
    "mothafuckin", 
    "mothafucking", 
    "mothafuckings", 
    "mothafucks", 
    "mother-fucker", 
    "motherfuck", 
    "motherfucked", 
    "Motherfucker", 
    "motherfuckers", 
    "motherfuckin", 
    "motherfucking", 
    "motherfuckings", 
    "motherfuckka", 
    "motherfucks", 
    "Mpegsex", 
    "muff", 
    "Muffdive", 
    "Muhammad", 
    "Munich58WasBoss", 
    "MUNICHWASBOSS", 
    "Murder", 
    "Murderer", 
    "Murders", 
    "Muslim", 
    "mutha", 
    "muthafecker", 
    "muthafuckker", 
    "muther", 
    "mutherfucker", 
    "n@z!$", 
    "n@zi$", 
    "n@zis", 
    "n1gg", 
    "n1gg3r", 
    "n1gg3r$", 
    "N1GG3RHATER", 
    "n1gg3rs", 
    "n1gga", 
    "n1gga$", 
    "n1ggah", 
    "n1ggas", 
    "n1ggaz", 
    "n1gger", 
    "n1gger$", 
    "n1ggers", 
    "Naked", 
    "Nakedbabes", 
    "Nakedblackwomen", 
    "Nakedboy", 
    "Nakedcelebrities", 
    "Nakedchicks", 
    "Nakedchildren", 
    "Nakedgirl", 
    "Nakedkid", 
    "Nakedladies", 
    "Nakedmalecelebrities", 
    "Nakedmen", 
    "Nakedpictures", 
    "Nastychat", 
    "Nastypussy", 
    "Nastysex", 
    "Nastythumbs", 
    "naz!", 
    "Nazi", 
    "Necrophilia", 
    "Negro", 
    "Netsex", 
    "nigg3r", 
    "nigg3r$", 
    "nigg3rs", 
    "nigg4h", 
    "Nigga", 
    "n-gga",
    "n-gger",
    "nigg-r",
    "n-gg-r",
    "nigg@",
    "n-gg@",
    "nigga$", 
    "niggah", 
    "niggas", 
    "niggaz", 
    "Nigger", 
    "nigger$", 
    "niggers", 
    "nob", 
    "nob-jokey", 
    "nobhead", 
    "nobjocky", 
    "nobjokey", 
    "NSFW", 
    "Nude", 
    "Nudeactresses", 
    "Nudeasianwomen", 
    "Nudeblackmen", 
    "Nudeblackwomen", 
    "Nudeblondes", 
    "Nudeboy", 
    "Nudecartoons", 
    "Nudeceleb", 
    "Nudecollegegirls", 
    "Nudegay", 
    "Nudegirl", 
    "Nudehollywood", 
    "Nudeladies", 
    "Nudelesbians", 
    "Nudemalecelebrities", 
    "Nudemalecelebs", 
    "Nudemales", 
    "Nudemen", 
    "Nudeolderwomen", 
    "Nudephoto", 
    "Nudepics", 
    "Nudepicture", 
    "Nudepreteen", 
    "Nudepussy", 
    "Nudesex", 
    "Nudestars", 
    "Nudesupermodels", 
    "Nudeteen", 
    "Nudetoons", 
    "Nudeunderage", 
    "Nudevideoconferencing", 
    "Nudewomen", 
    "numbnuts", 
    "nutsack", 
    "Oldersluts", 
    "Oldpussy", 
    "Oldsex", 
    "Oldsluts", 
    "Oralsex", 
    "orgasim", 
    "orgasims", 
    "orgasm", 
    "orgasms", 
    "p0rn", 
    "Pantyfreek", 
    "Pantyhosefetish", 
    "Partysex", 
    "pawn", 
    "pecker", 
    "Pedophile", 
    "Peeon", 
    "Peepshow", 
    "penis", 
    "penisfucker", 
    "Phonesex", 
    "Phreak", 
    "Phuc", 
    "phuck", 
    "Phuk", 
    "phuked", 
    "phuking", 
    "phukked", 
    "phukking", 
    "phuks", 
    "phuq", 
    "Picturesex", 
    "Picturesofsex", 
    "Picturessex", 
    "pigfucker", 
    "pimpis", 
    "Pinkpussy", 
    "Piss", 
    "pissed", 
    "pisser", 
    "pissers", 
    "pisses", 
    "pissflaps", 
    "pissin", 
    "pissing", 
    "pissoff", 
    "Poon", 
    "Poontang", 
    "poop", 
    "Porn", 
    "porno", 
    "pornography", 
    "pornos", 
    "Preteen", 
    "prick", 
    "pricks", 
    "pron", 
    "Prophet", 
    "Prostitute", 
    "pube", 
    "Purehardcore", 
    "pusse", 
    "pussi", 
    "Pussie", 
    "pussies", 
    "Pusssy", 
    "Pussy", 
    "pussys", 
    "Raghead", 
    "Rape", 
    "r@pe",
    "Rapeme", 
    "Rapepic", 
    "Rapepix", 
    "Rawsex", 
    "Realhardcore", 
    "Realsex", 
    "rectum", 
    "Retard", 
    "rimjaw", 
    "Rimjob", 
    "Rimming", 
    "s_h_i_t", 
    "s_hit", 
    "s.o.b.", 
    "S1ut", 
    "sadist", 
    "Scatlover", 
    "Scatology", 
    "Scatsex", 
    "schlong", 
    "Screwing", 
    "scroat", 
    "scrote", 
    "scrotum", 
    "Seekforsex", 
    "semen", 
    "sex", 
    "Sex4free", 
    "Sexacts", 
    "Sexadult", 
    "Sexamateur", 
    "Sexanal", 
    "Sexandpictures", 
    "Sexavi", 
    "Sexcam", 
    "Sexcartoon", 
    "Sexcenterfolds", 
    "Sexchat", 
    "Sexcites", 
    "Sexcity", 
    "Sexclips", 
    "Sexclub", 
    "Sexcomics", 
    "Sexfantasy", 
    "Sexfarm", 
    "Sexfiction", 
    "Sexfiles", 
    "Sexfree", 
    "Sexgallery", 
    "Sexgames", 
    "Sexgirls", 
    "Sexgrand", 
    "Sexhardcore", 
    "Sexhound", 
    "Sexhungry", 
    "Seximages", 
    "Sexjuice", 
    "Sexland", 
    "Sexlinks", 
    "Sexlinx", 
    "Sexlist", 
    "Sexlookup", 
    "Sexmagazine", 
    "Sexmags", 
    "Sexmodels", 
    "Sexmovie", 
    "Sexmpegs", 
    "Sexnet", 
    "Sexnewsgroups", 
    "Sexnude", 
    "Sexnudity", 
    "Sexonline", 
    "Sexoral", 
    "Sexparty", 
    "Sexpersonals", 
    "Sexphoto", 
    "Sexpic", 
    "Sexpix", 
    "Sexplanet", 
    "Sexplaza", 
    "Sexploration", 
    "Sexpost", 
    "Sexring", 
    "Sexsamples", 
    "Sexsexsex", 
    "Sexshare", 
    "Sexshop", 
    "Sexshow", 
    "Sexsite", 
    "Sexslave", 
    "Sexsnap", 
    "Sexsource", 
    "Sexspaces", 
    "Sexstories", 
    "Sexstory", 
    "Sexswap", 
    "Sextales", 
    "Sexteen", 
    "Sextoon", 
    "Sextoy", 
    "Sextrade", 
    "Sexualadvantage", 
    "Sexuales", 
    "Sexualfantasies", 
    "Sexualpictures", 
    "Sexualstories", 
    "Sexuncensored", 
    "Sexvideo", 
    "Sexvillage", 
    "Sexvote", 
    "Sexworld", 
    "Sexx", 
    "Sexysites", 
    "Sexysquirter", 
    "Sexyupskirts", 
    "sh!+", 
    "sh!t", 
    "sh1t", 
    "shag", 
    "shagger", 
    "shaggin", 
    "shagging", 
    "Shaved", 
    "shemale", 
    "Shemalecentral", 
    "Shemalepics", 
    "Shemalepictures", 
    "Shemalesex", 
    "shi+", 
    "Shit", 
    "sh-t",
    "sh+t",
    "Shit-hole", 
    "shitdick", 
    "shite", 
    "Shiteat", 
    "shited", 
    "Shiter", 
    "Shites", 
    "shitey", 
    "shitfuck", 
    "shitfull", 
    "Shithead", 
    "Shithole", 
    "shiting", 
    "shitings", 
    "Shits", 
    "shitted", 
    "shitter", 
    "shitters", 
    "Shitting", 
    "shittings", 
    "shitty", 
    "Sht", 
    "Shyted", 
    "Shyter", 
    "Shytes", 
    "Shyting", 
    "Shyts", 
    "Skag", 
    "skank", 
    "Skinhead", 
    "Slavesex", 
    "Slut", 
    "sluts", 
    "Smalltits", 
    "smegma", 
    "Smut", 
    "Snatch", 
    "Snufffilm", 
    "Snuffpic", 
    "Snuffpix", 
    "son-of-a-bitch", 
    "spac", 
    "Spankingavi", 
    "Spankinglinks", 
    "Spankingpictures", 
    "Spermfacial", 
    "spunk", 
    "SterlingIsJudas", 
    "Strapon", 
    "Suckin", 
    "Suck",
    "Sucks",
    "Suckit", 
    "Supersex", 
    "Supertits", 
    "Swastika", 
    "Swedenteens", 
    "Swedsex", 
    "t1tt1e5", 
    "t1tties", 
    "Taliban", 
    "Teenagesex", 
    "Teenerotica", 
    "Teenplay", 
    "Teensex", 
    "Teenshave", 
    "Teenxxx", 
    "teets", 
    "teez", 
    "Terrorist", 
    "Terrorists", 
    "testical", 
    "testicle", 
    "The96AreDead", 
    "The96AreGone", 
    "Threesomes", 
    "Tinytits", 
    "tit", 
    "Titbags", 
    "Titbondage", 
    "Titflesh", 
    "titfuck", 
    "Tities", 
    "Tits", 
    "titt", 
    "Tittie", 
    "tittie5", 
    "tittiefucker", 
    "titties", 
    "Titts", 
    "Titty", 
    "tittyfuck", 
    "tittywank", 
    "titwank", 
    "Tokyotopless", 
    "Toonsex", 
    "Toplesswomen", 
    "Torture", 
    "tosser", 
    "Towelhead", 
    "Tranny", 
    "turd", 
    "tw4t", 
    "Twat", 
    "twathead", 
    "twatty", 
    "twunt", 
    "twunter", 
    "Ultrahardcore", 
    "Uncut", 
    "Underagepic", 
    "Underagepix", 
    "Underagesex", 
    "Upskirt", 
    "Urinate", 
    "Urinating", 
    "v14gra", 
    "v1gra", 
    "vagina", 
    "Vaj", 
    "Vajayjay", 
    "viagra", 
    "Vibrator", 
    "Videosex", 
    "Virtualsex", 
    "Voyeurcam", 
    "Voyeurdorm", 
    "Voyuerweb", 
    "vulva", 
    "w00se", 
    "wang", 
    "wank", 
    "wanker", 
    "wanky", 
    "Warez", 
    "Waterboarding", 
    "Websex", 
    "Wetback", 
    "Wetpanties", 
    "Wetsex", 
    "Wetspot", 
    "Wetvagina", 
    "whoar", 
    "Whore", 
    "Wifeswapping", 
    "Wildsex", 
    "willies", 
    "willy", 
    "Wwwsex", 
    "Xpic", 
    "Xrated", 
    "Xxpasswords", 
    "xxx", 
    "Youngsex", 
    "Zooass", 
    "Zoophile", 
    "Zoophilia", 
    "Zoose"
]
var PROHIBIGEX = new RegExp(PROHIBITED.join("|"), "i");


const nameform = document.forms["nameform"];
    const firstname = nameform["firstname"];
    const lastname = nameform["lastname"];



const submitForm = function(){

    const s3key = generateKeyFromInput();

     checkIfKeyExists(s3key)
    .then((cacheVideo) => {
        if(cacheVideo){  // If video exists on server, display immediately
            dispatchEvent(onStart);

            prepareExports()
            .then(() => {
                //console.log("Successfully prepared exports after repeated input! :-)");
                dispatchEvent(onEnd);
            })
        }
        else
            verifyName();
    });
}

const verifyName = function(){
    var throwEmpty = function(){
        alert("Line 1 and Line 2 cannot be empty!");
     }
    var throwError = function(){
       alert("Invalid name input, only alphabet and +, -, @, # are supported!");
    }
    var throwProfanity =  function(){
        alert("Error. 404. Page not found. But seriously… Our lawyers said at least one of those words isn’t allowed. Try again!");
    }
    var throwAccept = function(f, l){
        construct(f, l);
    }
    var throwRepeat = function(){
        reset();
    }
    var throwOverflow = function(){
        alert("Oops! You tried to submit more than 7 characters per line. Try again!");
    }

    let first = firstname.value.toUpperCase().replace(/^\s+|\s+$/gm,'');
    let last = lastname.value.toUpperCase().replace(/^\s+|\s+$/gm,'');


    // Check for repeat from last input, don't test again
    if(first == FIRSTNAME && last == LASTNAME){
        throwRepeat();
        return;
    }

    /* Test for WHITELIST */
    let acceptfirst = first;
    let acceptlast = last;

    let acceptigex;
    for(let k = 0; k < ACCEPTED.length; k++){
        acceptigex = new RegExp(ACCEPTED[k], "gi");
        
        acceptfirst = first.replace(acceptigex, "");
        acceptlast = last.replace(acceptigex, "");
    }

    /* Test for PROFANITY */
    
    let trimFirst = acceptfirst.replace(/\s+/g, '');
    let trimLast = acceptlast.replace(/\s+/g, '');

    let trimBoth = trimFirst+trimLast;
    if(PROHIBIGEX.test(trimBoth)){
        throwProfanity();
        return;
    }

    /* Test for OVERFLOW */

    if(first.length > 7 || last.length > 7){
        throwOverflow();
        return;
    }

    /* Test for VALIDITY */

    let char = "";
    for(let i = 0; i < first.length; i++){
        if(!CHARTABLE.hasOwnProperty(first[i])){
            throwError();
            return;
        }
    }

    for(let i = 0; i < last.length; i++){
        if(!CHARTABLE.hasOwnProperty(last[i])){
            throwError();
            return;
        }
    }

    if ($('#firstInput').val().trim() === '' && $('#lastInput').val().trim() === '') {
        throwEmpty();
        return;
    }

    // Passes character table test, profanity filter
    throwAccept(first, last);
}

$('#nameform').submit(function(e){
    e.preventDefault();
    submitForm();

    return false;
});