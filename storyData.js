const storyData = {
    "mainMenu": {
        id: "mainMenu",
        text: "A Terrifying Ghost Story...",
        imageName: "images/1.png",
        choices: [
            {text: "Begin", destinationID: "start"},
            {text: "Credits", destinationID: "credits"},
            {text: "shortcut", destinationID: "inPresent"}
        ]
    },
    "mainMenu2": {
        id: "mainMenu2",
        text: "How about another... \nTerrifying Ghost Story...",
        imageName: "images/1.png",
        choices: [
            {text: "Begin Again", destinationID: "start"},
            {text: "Credits", destinationID: "credits"},
            
        ]
    },
    "credits": {
        id: "credits",
        text: "By Arthur Hickman and Jesse Sheehan",
        imageName: "images/Ghost3.jpeg",
        choices: [
            {text: "Back", destinationID: "mainMenu"},
            
        ]
    },
    "start": {
        id: "start",
        text: "Suddenly... I'm awake. Floating above the ground...",
        imageName: "images/2.png",
        choices: [
            {text: "I must be a ghost.", destinationID: "aGhost"},
            {text: "I can fly!", destinationID: "firstFlying"}
        ]
    },
    "aGhost": {
        id: "aGhost",
        text: "A ghost!? Yes... Or in other words,",
        imageName: "images/3.png",
        choices: [
            {text: "I'm dead.", destinationID: "dead"}
        ]
    },
    "firstFlying": {
        id: "firstFlying",
        text: "I'm the first flying human in human history!",
        imageName: "images/4.png",
        choices: [
            {text: "I've got to tell the newspaper!", destinationID: "newspaper"},
            {text: "Wait, why can I see through my hand? Could I be a...", destinationID: "aGhost"}
        ]
    },
    "newspaper": {
        id: "newspaper",
        text: "I reach to call my contacts at the paper, but my hand passes through my phone. Does this mean what I think it means?",
        imageName: "images/5.png",
        choices: [
            {text: "I must be...", destinationID: "aGhost"}
        ]
    },
    "dead": {
        id: "dead",
        text: "Oh wow. My mind flashes with memories of my final moments.",
        imageName: "images/6.png",
        choices: [
            {text: "I remember feeling hot... and dry... mate.", destinationID: "austrailia"}
        ]
    },
    "austrailia": {
        id: "austrailia",
        text: "Was... Was I in Austrailia? But... why was I there?",
        imageName: "images/7.png",
        choices: [
            {text: "It was a vacation - I always wanted to see the outback.", destinationID: "trip"},
            {text: "There was a contest involving cereal boxes. I won a free trip to Sydney!", destinationID: "trip"},
            {text: "I never even wanted to be on this trip.", destinationID: "work"}
        ]
    },
    "trip": {
        id: "trip",
        text: "Of course! My trip down under... But what was I actually doing there?",
        imageName: "images/8.png",
        choices: [
            {text: "I was watching TV in my hotel room. It was too hot outside!", destinationID: "hotel"},
            {text: "I was on an excursion. Foolish, for a city guy like me.", destinationID: "excursion"},
            {text: "Work. Even when I was on vacation, I was always working.", destinationID: "work"}
        ]
    },
    "work": {
        id: "work",
        text: "Work always did control my life...",
        imageName: "images/9.png",
        choices: [
            {text: "I was quite the working stiff", destinationID: "timeOffice"}
        ]
    },
    "hotel": {
        id: "hotel",
        text: "So I'm actually just safe in my hotel room? Maybe I'm not dead.",
        imageName: "images/17.png",
        choices: [
            {text: "I knew I wasn't dead! What kind of self-respecting universe would let ME die?", destinationID: "dream"},
            {text: "I'm a floating translucent spirit. I'm obviously dead.", destinationID: "misremember"}
        ]
    },
    "misremember": {
        id: "misremember",
        text: "I must have misremembered. What's the last thing I REALLY rememember seeing?",
        imageName: "images/10_15.png",
        choices: [
            {text: "A big round eye.", destinationID: "bird"},
            {text: "A beak, a crown of bone, and blackness", destinationID: "bird"}
        ]
    }, 
    "excursion": {
        id: "excursion",
        text: "I should have followed my natural inclination to stay indoors. But I didn't. And I died. What's the last thing I remember seeing?",
        imageName: "images/10_15.png",
        choices: [
            {text: "I dunno, some sand, some shrubs...I remember calling a taxi back to my hotel...", destinationID: "wait"},
            {text: "A big, round eye.", destinationID: "bird"},
            {text: "A beak, a crown of bone, and then... black...", destinationID: "bird"}
        ]
    },
    "timeOffice": {
        id: "timeOffice",
        text: "They say that at the end of one's life, nobody ever wished they spent more time at the office.",
        imageName: "images/12.png",
        choices: [
            {text: "That's so true.", destinationID: "stepAway"},
            {text: "Actually, I do wish spent more time at the office.", destinationID: "cubicle"}
        ]
    },
    "stepAway": {
        id: "stepAway",
        text: "Glad I was able to step away for a bit and enjoy my trip. But what was I doing?",
        imageName: "images/11.png",
        choices: [
        {text: "I was watching TV in my hotel room. It was too hot outside!", destinationID: "hotel"},
        {text: "I was on an excursion. Foolish, for a city guy like me.", destinationID: "excursion"},
        ]
    },
    //MISSING IMAGE as of 10/27
    "cubicle": {
        id: "cubicle",
        text: "In a sudden flash, I'm transported to my cubicle. I've been rewarded!",
        imageName: "images/Ghost3.jpeg",
        choices: [
            {text: "This is just where I wanted to be! Perhaps it's morally good to work?", destinationID: "officeParadise"}
        ]
    },
    //MISSING IMAGE as of 10/27

    "officeParadise": {
        id: "officeParadise",
        text: "I'm in a true paradise, and I'll never have to leave here!",
        imageName: "images/Ghost3.jpeg",
        choices: [
            {text: "I'VE FOUND PEEEEEAAAAAACE!", destinationID: "officePeace"},
        ]
    }, 
    //MISSING IMAGE as of 10/27
    "officePeace": {
        id: "officePeace",
        text: "GAME OVER - GHOST HAS FOUND UNUSUAL BRAND OF PEACE",
        imageName: "images/Ghost3.jpeg",
        choices: [
            {text: "PLAY AGAIN", destinationID: "mainMenu2"},
        ]
    }, 
    "dream": {
        id: "dream",
        text: "I wake up with a start! What a horrible nightmare!",
        imageName: "images/18_rev.png",
        choices: [
            {text: "Check my hands for signs of ghostism.", destinationID: "humanAgain"}
        ]
    },
    "humanAgain": {
        id: "humanAgain",
        text: "What a relief. A solid, human hand. Not even a little bit see-throug.h",
        imageName: "images/19_rev.png",
        choices: [
            {text: "Look out the window to appreciate life's beauty.", destinationID: "bomb"},
        ]
    }, 
    "bomb": {
        id: "bomb",
        text: "Uh oh.",
        imageName: "images/20_rev.png",
        choices: [
            {text: "Dang.", destinationID: "blownAway"},
        ]
    }, 

    "blownAway": {
        id: "blownAway",
        text: "",
        imageName: "images/21.png",
        choices: [
            {text: "Well... what now?", destinationID: "void"},
        ]
    }, 
    "wait": {
        id: "wait",
        text: "And then I remember being inside for a while...",
        imageName: "images/16.png",
        choices: [
            {text: "Wait...", destinationID: "hotel"}
        ]
    },
    "bird": {
        id: "bird",
        text: "Ahh, that bird. That horrible bird!!",
        imageName: "images/14.png",
        choices: [
            {text: "I remember! I remember everything!", destinationID: "inPresent"}
        ]
    },
    "inPresent": {
        id: "inPresent",
        text: "Now that I've regained my memories, I'm back in the present day. Yet here's that bird in front of me, silent and motionless...",
        imageName: "images/22.png",
        choices: [
            {text: "I must attack it. I will have my revenge!", destinationID: "attackBird"},
            {text: "I place a forgiving kiss on its beak. Its suffering is now over, as is my own.", destinationID: "tasteBird"},
            {text: "I'll wait for the beast to move. Maybe it's only pretending to be taxidermied...", destinationID: "waitForBird"}
        ]
    },
    "attackBird": {
        id: "attackBird",
        text: "The bird falls over, stiff as a board. Some stuffing comes out of a hole in its neck.",
        imageName: "images/24.png",
        choices: [
            {text: "Keep going! It has more suffering to do!", destinationID: "attackBird2"},
            {text: "What am I doing? This is pointless...", destinationID: "nothingLeft"}
        ]
    },
    "tasteBird": {
        id: "tasteBird",
        text: "Eugh... it tastes really bad.",
        imageName: "images/25.png",
        choices: [
            {text: "I was trying to be nice, but this is the thanks I get? I attack the evil-tasting bird!", destinationID: "attackBird"},
            {text: "Inspite of its foul, fowl taste, I will be the bigger human... or the only human, and forgive it for tasting to so bad", destinationID: "nothingLeft"}
        ]
    },
    "waitForBird": {
        id: "waitForBird",
        text: "I see through your elaborate, cotton-stuffed ruse, vile creature!",
        imageName: "images/23.png",
        choices: [
            {text: "You cannot fool me - I'll wait!", destinationID: "waitForBird2"},
        ]
    },
    //NEED VARIATIONS OF THESE
    "waitForBird2": {
        id: "waitForBird2",
        text: "...Hm... It still hasn't moved an inch...",
        imageName: "images/23.png",
        choices: [
            {text: "Give it another minute", destinationID: "waiting1"},
            {text: "Actually, I think it's really dead", destinationID: "enoughWaiting"},
        ]
    },
   //NEED VARIATIONS OF THESE
    "waiting1": {
        id: "waiting1",
        text: "Hmm...",
        imageName: "images/23.png",
        choices: [
            {text: "I'll wait longer", destinationID: "waiting2"}
        ]
    },
    //NEED VARIATIONS OF THESE
    "waiting2": {
        id: "waiting2",
        text: "*sigh* ... hmm hm hmmm...",
        imageName: "images/23.png",
        choices: [
            {text: "...", destinationID: "waiting3"}
        ]
    },
    //NEED VARIATIONS OF THESE
    "waiting3": {
        id: "waiting3",
        text: "Okay I think it's really dead.",
        imageName: "images/23.png",
        choices: [
            {text: "Finally!", destinationID: "enoughWaiting"}
        ]
    },
    //NEED VARIATIONS OF THESE
    "enoughWaiting": {
        id: "enoughWaiting",
        text: "Right then... now what to do about this avian beast?",
        imageName: "images/22.png",
        choices: [
            {text: "I must attack it! I still crave revenge.", destinationID: "attackBird"},
            {text: "I give it a forgiving kiss on the beak. Its suffering is over, as is my own", destinationID: "tasteBird"}
        ]
    },
    //MISSING IMAGE
    "nothingLeft": {
        id: "nothingLeft",
        text: "There's nothing left for me in this attic. What now?",
        imageName: "images/17.png",
        choices: [
            {text: "If I wait long enough, maybe something will happen", destinationID: "nothingHappens"},
            {text: "I leave", destinationID: "leaveAttic"}
        ]
    },
    "attackBird2": {
        id: "attackBird2",
        text: "I pound its stupid beak into the stupid floor, grinding it down to nothing but cotton, feathers, and dust.",
        imageName: "images/26.png",
        choices: [
            {text: "Surely, this was my unfinished business. Surely I'll be free now.", destinationID: "reconstitutes"}
        ]
    },
    "reconstitutes": {
        id: "reconstitutes",
        text: "No... before my eyes, the wretched beast reconstitutes itself!",
        imageName: "images/27.png",
        choices: [
            {text: "Run!", destinationID: "run"},
            {text: "I must stand my ground", destinationID: "futile"}
        ]
    },
    "run": {
        id: "run",
        text: "I try to flee, but it's too fast - fueled by pure hellfire!",
        imageName: "images/28.png",
        choices: [
            {text: "I can't keep running much further!", destinationID: "futile"}
        ]
    },
    "futile": {
        id: "futile",
        text: "My efforts are futile! The monster pecks and pecks at my poor head!",
        imageName: "images/29.png",
        choices: [
            {text: "I accept this second death... and whatever comes next...", destinationID: "ectoplasmic"},
            {text: "Thrash around and really draw it out.", destinationID: "thrash"},
            {text: "OK, actually, I've had enough of this bit. Time to move on.", destinationID: "nothingLeft"}
        ]
    },
    "thrash": {
        id: "thrash",
        text: "Success - it takes a really long time. But eventually the bird does kill me. I'd like to say it's equally unpleasant for both of us, but the bird doesn't seem to mind.",
        imageName: "images/31.png",
        choices: [
            {text: "I've died a second time. A death... within a death.", destinationID: "ectoplasmic"}
        ]
    },
    "ectoplasmic": {
        id: "ectoplasmic",
        text: "My ghostly form has been bashed into an ectoplasmic putty.",
        imageName: "images/30.png",
        choices: [
            {text: "I'm quite repulsive.", destinationID: "void"}
        ]
    },
    "void": {
        id: "void",
        text: "I find myself falling through a great void, with no company, but my own thoughts and memories. After a long time, even those escape me...",
        imageName: "images/33.png",
        choices: [
            {text: "Who am I?", destinationID: "notmatter"},
            {text: "Where am I?", destinationID: "notmatter"},
            {text: "What was the meaning of all this?", destinationID: "notmatter"},
            {text: "Was I good?", destinationID: "notmatter"},
            {text: "Was I bad?", destinationID: "notmatter"},
            {text: "Was I normal?", destinationID: "notmatter"},
            {text: "Where will I go?", destinationID: "notmatter"},
            {text: "Will I ever find love?", destinationID: "notmatter"},
        ]
    },
    "notmatter": {
        id: "blankness",
        text: "I guess it doesn't matter anymore.",
        imageName: "images/32.png",
        choices: [
            {text: "...", destinationID: "blankness"},
        ]
    },
    "blankness": {
        id: "blankness",
        text: "Before I'm subsumed by a calming blankness, I wonder if I'll wake up somewhere new, where perhaps, I could make new choices...",
        imageName: "images/34.png",
        choices: [
            {text: "Probably not, but it's a nice thought.", destinationID: "mainMenu2"},
        ]
    },

    "nothingHappens": {
        id: "nothingHappens",
        text: "Hm. Nothing is happening. Occasionally a rat or spider scamper around, but it doesn't really change my situation.",
        imageName: "images/17.png",
        choices: [
            {text: "I guess I'll just leave.", destinationID: "leaveAttic"},
        ]
    },
    "leaveAttic": {
        id: "leaveAttic",
        text: "I descend upon the attic ladder and drift down. A veil of dust obscures the upstairs hallway. Man, this place really...",
        imageName: "images/36.png",
        choices: [
            {text: "....has a lot of character", destinationID: "hallway"},
            {text: "...sucks!", destinationID: "hallway"},
        ]
    },
    "hallway": {
        id: "hallway",
        text: "The house reeks of rotting taxidermy. Or I'm sure it would if I could still smell.",
        imageName: "images/37.png",
        choices: [
            {text: "I guess I never realized ghosts can't smell.", destinationID: "oldMan"},
        ]
    },
    "oldMan": {
        id: "oldMan",
        text: "I continue my descent, down the stairs, where an old man sits in an easy chair. I should...",
        imageName: "images/38.png",
        choices: [
            {text: "Say hello.", destinationID: "sayHello"},
            {text: "Scare him!", destinationID: "scareHim"},
            {text: "Leave him be.", destinationID: "leaveHim"},
        ]
    },
    "sayHello": {
        id: "sayHello",
        text: "Well... here it goes.",
        imageName: "images/39.png",
        choices: [
            {text: "Hello", destinationID: "hunterAwakens"},
            {text: "Oi there, Mate!", destinationID: "hunterAwakens"},
        ]
    },
    "leaveHim": {
        id: "leaveHim",
        text: "As I sneak away, I knock over an urn. It smashes on the floor, releasing a cloud of ash, awakening the old man.",
        imageName: "images/43.png",
        choices: [
            {text: "They ashes...", destinationID: "ashes"},
        ]
    },
    "scareHim": {
        id: "scareHim",
        text: "Hehehe. *deep inhale*",
        imageName: "images/39.png",
        choices: [
            {text: "Boo!", destinationID: "hunterAwakens"},
            {text: "OooOoOoOoOo!", destinationID: "hunterAwakens"},
        ]
    },
    "hunterAwakens": {
        id: "hunterAwakens",
        text: "The old hunter awakens with a terrified spasm, accidentally firing the gun towards my ghostly head.",
        imageName: "images/40.png",
        choices: [
            {text: "Dodge left", destinationID: "hitBullet"}, 
            {text: "Stay still, hope he misses", destinationID: "closeCall"}, 
            {text: "Dodge right", destinationID: "closeCall"},
        ]
    }, 
    "hitBullet": {
        id: "hitBullet",
        text: "I'm blown into a shower of milky white ectoplasm...",
        imageName: "images/41.png",
        choices: [
            {text: "Not again...", destinationID: "void"},
            {text: "Oh well, that's life. Or is that death?", destinationID: "void"}
        ]
    }, 
    "closeCall": {
        id: "closeCall",
        text: "Phew, that was a close one. The shot hits an urn to my left, kicking up a thick cloud of ash.",
        imageName: "images/42.png",
        choices: [
            {text: "Wait a minute. These ashes...", destinationID: "ashes"},
        ]
    }, 
    "ashes": {
        id: "ashes",
        text: "They're mine. They produce a pleasant tingle as they float through me.",
        imageName: "images/44.png",
        choices: [
            {text: "This is weird. Did not see this coming.", destinationID: "sadMan"},
            {text: "It tickles! teehee!", destinationID: "sadMan"}
        ]
    }, 
    "sadMan": {
        id: "sadMan",
        text: "As the ash settles around me, the old man falls to his knees and attemps to scoop up the ashes with his hands.",
        imageName: "images/45.png",
        choices: [
            {text: "Yuck.", destinationID: "scoop"},
        ]
    }, 
    "scoop": {
        id: "scoop",
        text: "He cries out 'My child, my poor child... I avenged you, I killed that bastard bird, I really did!'",
        imageName: "images/Ghost3.jpeg",
        choices: [
            {text: "F-father?", destinationID: "cane"},
        ]
    }, 
    "cane": {
        id: "cane",
        text: "My old man grabs his cane and hobbles about the house searching for a new contain, but to avail. He returns to my pile, empty-handed.",
        imageName: "images/Ghost3.jpeg",
        choices: [
            {text: "I'm not picky, just some tupperware is fine.", destinationID: "dustpan"},
        ]
    }, 
    "dustpan": {
        id: "dustpan",
        text: "He stares at my remnants for a long time until, finally, he sighs and sweeps me into a dust pan and tosses me into the trash.",
        imageName: "images/Ghost3.jpeg",
        choices: [
            {text: "Sheesh, I don't even get a proper burial?", destinationID: "trashOut"}
        ]
    }, 
    "trashOut": {
        id: "trashOut",
        text: "Wait - a proper burial! I think that's my unfinished bus-- uh oh, he's taking out the trash, and it appears my ghostly form is tied to the ashes!",
        imageName: "images/Ghost3.jpeg",
        choices: [
            {text: "Off to the dump, go I.", destinationID: "garbageTruck"},
            {text: "Perhaps I'll haunt him from afar...", destinationID: "garbageTruck"}
        ]
    }, 
    "garbageTruck": {
        id: "garbageTruck",
        text: "The next morning, the garbage truck whisks me away, delivering me to, what I can only image, is an eternity of waste.",
        imageName: "images/Ghost3.jpeg",
        choices: [
            {text: "Good thing ghosts can't smell.", destinationID: "burial"},
        ]
    }, 
    "burial": {
        id: "burial",
        text: "The garbage truck unloads me amongst hundeds of other trash bags. Soon, my ashes are beneathing hundreds of pounds of garbage.",
        imageName: "images/Ghost3.jpeg",
        choices: [
            {text: "I guess.. it's kind of like being buried?", destinationID: "poof"},
        ]
    }, 
    "poof": {
        id: "poof",
        text: "*poof*",
        imageName: "images/Ghost3.jpeg",
        choices: [
            {text: "...", destinationID: "last"},
        ]
    }, 
    "last": {
            id: "last",
            text: "GAME OVER - GHOST HAS FOUND PEACE WITH A PROPER BURIAL. \nUNFINISHED BUSINESS: RESOLVED",
            imageName: "images/Ghost3.jpeg",
            choices: [
                {text: "PLAY AGAIN", destinationID: "mainMenu2"},
            ]
        }, 
};