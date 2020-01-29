// Little Red Riding Hood.


const littleRed = {
    color: 'Red',
    pluralNouns: ['apples', 'hands', 'ears', 'eyes'],
    adjective: 'ugly',
    exclamation: 'Woooah!!!',
    sillyWord: 'PooPoo',
    verbs: ['went', 'play', 'hear']

}



console.log(`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
basket of ${littleRed.pluralNouns[0]} for her grandmother. Suddenly, she met a big 
${littleRed.adjective} wolf.

"${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.sillyWord}?"

"I'm going to my grandmother's house," she said. Then the wolf 
${littleRed.verbs[0]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${littleRed.pluralNouns[1]} you have."

"The better to ${littleRed.verbs[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${littleRed.pluralNouns[2]}" you have."

The wolf said, "The better to ${littleRed.verbs[2]} you with."

And then she said, "What big ${littleRed.pluralNouns[3]} you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother`)




// Snow White


const snowWhite = {
    pluralNoun: ['stories', 'dwarfs'], 
    number: 25, 
    adjective: ['wonderful', 'kind', 'incredible'],
    noun: ['castle', 'forest', 'world', 'hand', 'apple'],
    color: 'white',
    partOfTheBody: 'mouth',
    adverb: 'happily'
}

console.log(`One of the most popular fairy ${snowWhite.pluralNoun[0]} of all time is Snow White and the 
${snowWhite.number} ${snowWhite.pluralNoun[1]}.

Snow White is a princess whose ${snowWhite.adjective[0]} beauty threatens her stepmother, 
the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
and hide in a nearby ${snowWhite.noun[1]}.

Once there, she is discovered by ${snowWhite.adjective[1]} animals who guide her to the 
${snowWhite.adjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noun[3]} on her 
${snowWhite.partOfTheBody}, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`)



// Version 2 littleRed

littleRed.pluralNouns[0] = "oranges"
littleRed.pluralNouns[1] = "heads"
littleRed.pluralNouns[2] = "teeths"
littleRed.pluralNouns[3] = "checkbones"


littleRed.exclamation = "Bobobo !!!"
littleRed.color = "green"
littleRed.adjective = "sumptuous"
littleRed.sillyWord = "ugly cow"

littleRed.verbs[0] = "go" 
littleRed.verbs[1] = "bump"
littleRed.verbs[2] = "swallow"

console.log(`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
basket of ${littleRed.pluralNouns[0]} for her grandmother. Suddenly, she met a big 
${littleRed.adjective} wolf.

"${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.sillyWord}?"

"I'm going to my grandmother's house," she said. Then the wolf 
${littleRed.verbs[0]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${littleRed.pluralNouns[1]} you have."

"The better to ${littleRed.verbs[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${littleRed.pluralNouns[2]}" you have."

The wolf said, "The better to ${littleRed.verbs[2]} you with."

And then she said, "What big ${littleRed.pluralNouns[3]} you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother`)


// Version 2 snowWhite

snowWhite.pluralNoun[0] = "books"
snowWhite.pluralNoun[1] = "humans"
snowWhite.adjective[0]  = 'ugly'
snowWhite.adjective[1]  = 'stupid'
snowWhite.adjective[2]  = 'mean'
snowWhite.noun[0] = 'spaceship'
snowWhite.noun[1] = 'gallaxy'
snowWhite.noun[2] = 'face'
snowWhite.noun[3] = 'football'
snowWhite.noun[4] = 'strawberry'
snowWhite.color = 'orange'
snowWhite.number = 63
snowWhite.partOfTheBody = 'belly'
snowWhite.adverb = 'never'


console.log(`One of the most popular fairy ${snowWhite.pluralNoun[0]} of all time is Snow White and the 
${snowWhite.number} ${snowWhite.pluralNoun[1]}.

Snow White is a princess whose ${snowWhite.adjective[0]} beauty threatens her stepmother, 
the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
and hide in a nearby ${snowWhite.noun[1]}.

Once there, she is discovered by ${snowWhite.adjective[1]} animals who guide her to the 
${snowWhite.adjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noun[3]} on her 
${snowWhite.partOfTheBody}, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`)
