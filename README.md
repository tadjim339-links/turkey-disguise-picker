# turkey-disguise-picker

Tiny zero-dependency helper for the "disguise a turkey" school project: tell it how many minutes you have and which paper and craft supplies are in the house, and it lists the character disguises that fit, quickest first.

The data file holds seven character disguises with an effort estimate and a supply list (Minion, the Grinch, Elsa, a Minecraft character, Batman, Sonic and Spider-Man), taken from the character ranking at disguiseaturkeyideas.com.

## Use

```bash
node index.js 30
# Minion (15 min): yellow, blue, grey, black strap
# The Grinch (25 min): green, red, cotton ball
# Batman (30 min): black, yellow scrap
# ...

node index.js 40 black "yellow scrap"
# Batman (30 min): black, yellow scrap
```

As a module:

```js
const { pick } = require("./index");
pick({ minutes: 20 });                    // quick ones only
pick({ minutes: 40, have: ["red", "white", "black marker"] });
```

Run the tests with `npm test`.

## More ideas

If your character is not in this list, the [turkey disguise ideas and printable outlines](https://disguiseaturkeyideas.com/?utm_source=github&utm_medium=readme) have 80 or so more, and the site also has a coloring-page generator for any costume you can type.

Characters are shown only as costume ideas; this project is not connected with their owners.

License: MIT
