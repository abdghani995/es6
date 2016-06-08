'use strict';

var _myModule = require('./myModule');

var _myModule2 = _interopRequireDefault(_myModule);

var _math = require('./math');

var _math2 = require('./math.js');

var mathModule = _interopRequireWildcard(_math2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _myModule2.default)('Neat');
console.log((0, _math.add)(2, 4));
console.log((0, _math.subtract)(4, 2));
console.log(mathModule.add(6, 9));
console.log((0, mathModule.default)(6, 2));
console.log(mathModule);