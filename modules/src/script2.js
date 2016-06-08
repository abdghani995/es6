

import testMod from './myModule';
import { add,subtract  } from './math';
import * as mathModule from './math.js';
import divide from './math.js';


testMod('Neat');
console.log(add(2,4));
console.log(subtract(4,2));
console.log(mathModule.add(6,9));
console.log(divide(6,2));
console.log(mathModule)

