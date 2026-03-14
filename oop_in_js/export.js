// JavaScript में export keyword का use किसी variable, function, या class को एक module से बाहर भेजने के लिए किया जाता है ताकि दूसरे files/modules उसे import करके use कर सकें।

// ✅ सरल शब्दों में:
// export का मतलब होता है — "इसको बाहर भेज दो ताकि कोई और file इसको use कर सके।"

// 🔹 क्यों ज़रूरी है?
// JavaScript में बड़े प्रोजेक्ट्स को छोटे-छोटे हिस्सों (modules/files) में बाँटा जाता है। ताकि code reusable, readable और manageable रहे।

// 🔸 Syntax: दो तरीकों से export किया जाता है:
// 1. Named Export – (एक file से कई चीज़ें export कर सकते हो)

// // 📁 math.js
// export const add = (a, b) => a + b;
// export const sub = (a, b) => a - b;
// Import करने के लिए:

// js
// Copy
// Edit
// // 📁 app.js
// import { add, sub } from './math.js';

// console.log(add(2, 3)); // 5
// 2. Default Export – (एक file से सिर्फ एक default export हो सकता है)
// js
// Copy
// Edit
// // 📁 message.js
// export default function greet(name) {
//   console.log(`Hello, ${name}`);
// }
// Import करने के लिए:

// js
// Copy
// Edit
// // 📁 app.js
// import greet from './message.js';

// greet("Dheeraj"); // Hello, Dheeraj
// ⚠️ Note: Default export के लिए curly braces नहीं लगते।

// 🔁 Named vs Default Summary:

// Feature	Named Export	Default Export
// Export Syntax	export const a = 10;	export default a;
// Import Syntax	import { a } from '...'	import a from '...'
// कितने बार Export हो सकता है?	Multiple per file	Only one per file
// ✅ Interview Line:
// "export JavaScript modules में code को reusable बनाने के लिए use होता है। Named export से हम एक file से कई चीज़ें export कर सकते हैं, और default export से एक main item को export किया जाता है।"