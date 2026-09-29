function firstWord(s) {
  // your code here
	const cleanStr = s.trim();

	if(cleanStr === "") {
		return cleanStr;
	}

	return cleanStr.split(' ')[0];
}

// let str = "";
// 	s = s.trim();
// 	for(let i = 0; i < s.length; i++) {
// 		let  ch = s[i];
// 		if(ch == " ") {
// 			return str;
// 		}
// 		else {
// 			str += ch;
// 		}		
// 	}
// 	return str;

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));





