const { parse, getDay } = require('date-fns');
const date = parse('03/05/2026', 'dd/MM/yyyy', new Date());
console.log("3/5/2026 is day", getDay(date));
