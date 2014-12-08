
//Array containging the words
var ipsumWords =['above', 'above', 'above', 'above', 'above', 'above', 'above', 'adore', 'again', 'agreeing', 'ah', 'ah', 'aidenn', 'air', 'all', 'all', 'all', 'all', 'an', 'an', 'ancient', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'and', 'angels', 'angels', 'angels', 'angels', 'answer', 'aptly', 'art', 'as', 'as', 'as', 'as', 'as', 'ashore', 'at', 'at', 'at', 'at', 'at', 'at', 'at', 'at', 'back', 'back', 'back', 'balm', 'be', 'be', 'be', 'be', 'beak', 'beast', 'beating', 'before', 'before', 'before', 'before', 'before', 'beguiling', 'beguiling', 'being', 'bends', 'betook', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'bird', 'black', 'bleak', 'blessed', 'books', 'bore', 'bore', 'bore', 'borrow', 'bosom', 'both', 'broken', 'burden', 'burden', 'burned', 'burning', 'bust', 'bust', 'bust', 'bust', 'bust', 'bust', 'but', 'but', 'but', 'but', 'but', 'but', 'but', 'by', 'by', 'by', 'by', 'by', 'by', 'by', 'came', 'came', 'came', 'cannot', 'caught', 'censer', 'chamber', 'chamber', 'chamber', 'chamber', 'chamber', 'chamber', 'chamber', 'chamber', 'chamber', 'chamber', 'chamber', 'clasp', 'clasp', 'core', 'countenance', 'craven', 'crest', 'cried', 'croaking', 'curious', 'curtain', 'cushion', 'cushioned', 'dared', 'darkness', 'darkness', 'days', 'december', 'decorum', 'deep', 'demon', 'denser', 'desert', 'desolate', 'devil', 'devil', 'did', 'dirges', 'disaster', 'discourse', 'distant', 'distinctly', 'divining', 'door', 'door', 'door', 'door', 'door', 'door', 'door', 'door', 'door', 'door', 'door', 'door', 'door', 'door', 'doubting', 'doubtless', 'dream', 'dreaming', 'dreaming', 'dreams', 'dreary', 'dying', 'each', 'each', 'eagerly', 'ease', 'ebony', 'echo', 'ember', 'enchanted', 'engaged', 'entrance', 'entrance', 'entreating', 'entreating', 'er', 'er', 'er', 'ever', 'ever', 'evermore', 'evil', 'evil', 'explore', 'explore', 'expressing', 'eyes', 'eyes', 'fact', 'faintly', 'falls', 'fancy', 'fancy', 'fancy', 'fancy', 'fantastic', 'farther', 'fast', 'faster', 'fearing', 'feather', 'felt', 'fiend', 'fiery', 'filled', 'flirt', 'flitting', 'floating', 'floor', 'floor', 'floor', 'floor', 'flown', 'flown', 'flung', 'flutter', 'fluttered', 'followed', 'followed', 'foot', 'for', 'for', 'for', 'for', 'forget', 'forgiveness', 'forgotten', 'form', 'fowl', 'fowl', 'friends', 'from', 'from', 'from', 'from', 'from', 'from', 'from', 'from', 'front', 'gaunt', 'gave', 'gently', 'gently', 'get', 'ghastly', 'ghastly', 'ghost', 'gilead', 'gloated', 'gloating', 'god', 'god', 'grave', 'grew', 'grew', 'grim', 'grim', 'guessing', 'had', 'hath', 'hath', 'hath', 'haunted', 'have', 'have', 'have', 'he', 'he', 'he', 'he', 'he', 'he', 'he', 'head', 'hear', 'heard', 'heard', 'heart', 'heart', 'heart', 'heaven', 'help', 'here', 'here', 'here', 'here', 'hesitating', 'him', 'his', 'his', 'his', 'his', 'his', 'his', 'his', 'home', 'hope', 'hopes', 'horror', 'human', 'if', 'if', 'if', 'if', 'implore', 'implore', 'implore', 'in', 'in', 'in', 'in', 'in', 'in', 'in', 'into', 'into', 'into', 'into', 'into', 'into', 'is', 'is', 'is', 'is', 'is', 'is', 'is', 'is', 'is', 'is', 'is', 'it', 'it', 'it', 'it', 'it', 'its', 'its', 'its', 'just', 'just', 'kind', 'laden', 'lady', 'lamp', 'lamp', 'lamp', 'land', 'late', 'lattice', 'least', 'leave', 'leave', 'leave', 'lenore', 'lenore', 'lenore', 'lenore', 'lenore', 'lenore', 'lenore', 'lenore', 'lent', 'let', 'let', 'lie', 'lies', 'lifted', 'light', 'light', 'light', 'lining', 'lining', 'linking', 'little', 'little', 'living', 'loneliness', 'lonely', 'long', 'longer', 'lord', 'lordly', 'lore', 'lost', 'lost', 'louder', 'madam', 'made', 'maiden', 'maiden', 'maiden', 'many', 'many', 'marvelled', 'master', 'me', 'me', 'me', 'me', 'me', 'me', 'me', 'me', 'me', 'meaning', 'meant', 'melancholy', 'memories', 'merely', 'methought', 'midnight', 'mien', 'minute', 'moment', 'more', 'more', 'more', 'more', 'more', 'more', 'more', 'more', 'morrow', 'morrow', 'mortal', 'much', 'murmured', 'muttered', 'muttered', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'my', 'myself', 'mystery', 'mystery', 'name', 'name', 'name', 'name', 'name', 'nameless', 'napping', 'napping', 'nearly', 'nepenthe', 'nepenthe', 'never', 'never', 'never', 'nevermore', 'nevermore', 'nevermore', 'nevermore', 'nevermore', 'nevermore', 'nevermore', 'nevermore', 'nevermore', 'nevermore', 'nevermore', 'night', 'night', 'nightly', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'nodded', 'not', 'not', 'not', 'nothing', 'nothing', 'nothing', 'nothing', 'nothing', 'nothing', 'nothing', 'now', 'now', 'obeisance', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'of', 'off', 'oh', 'ominous', 'ominous', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'once', 'one', 'one', 'one', 'one', 'only', 'only', 'only', 'only', 'open', 'opened', 'or', 'or', 'or', 'or', 'or', 'or', 'or', 'or', 'other', 'our', 'out', 'out', 'outpour', 'over', 'pallas', 'pallas', 'pallid', 'parting', 'peering', 'perched', 'perched', 'perched', 'perfumed', 'placid', 'plainly', 'plume', 'plutonian', 'plutonian', 'pondered', 'presently', 'press', 'prophet', 'prophet', 'prophet', 'prophet', 'purple', 'quaff', 'quaff', 'quaint', 'quit', 'quoth', 'quoth', 'quoth', 'quoth', 'quoth', 'radiant', 'radiant', 'rapping', 'rapping', 'rapping', 'rare', 'rare', 'raven', 'raven', 'raven', 'raven', 'raven', 'raven', 'raven', 'raven', 'raven', 'raven', 'reclining', 'relevancy', 'remember', 'repeating', 'reply', 'respite', 'respite', 'rustling', 'sad', 'sad', 'said', 'said', 'said', 'said', 'said', 'said', 'said', 'sainted', 'saintly', 'sat', 'sat', 'sat', 'scarce', 'scarcely', 'sculptured', 'seat', 'see', 'seeing', 'seeming', 'sent', 'sent', 'separate', 'seraphim', 'shadow', 'shadow', 'shall', 'shall', 'shall', 'shaven', 'she', 'shore', 'shore', 'shore', 'shorn', 'shrieked', 'shutter', 'sign', 'silence', 'silken', 'sinking', 'sir', 'sitting', 'sitting', 'sitting', 'smiling', 'smiling', 'so', 'so', 'so', 'so', 'so', 'some', 'some', 'some', 'some', 'some', 'something', 'somewhat', 'songs', 'soon', 'sorrow', 'sorrow', 'sorrow', 'sought', 'soul', 'soul', 'soul', 'soul', 'soul', 'soul', 'spoke', 'spoken', 'spoken', 'spoken', 'startled', 'stately', 'stayed', 'stepped', 'stern', 'still', 'still', 'still', 'still', 'still', 'still', 'still', 'stillness', 'stillness', 'stock', 'stood', 'stood', 'stopped', 'store', 'straight', 'streaming', 'stronger', 'such', 'suddenly', 'surcease', 'sure', 'sure', 'surely', 'surely', 'swung', 'syllable', 'take', 'take', 'tapping', 'tapping', 'tapping', 'tapping', 'tapping', 'tell', 'tell', 'tell', 'tell', 'tell', 'tempest', 'tempest', 'tempter', 'terrors', 'than', 'than', 'that', 'that', 'that', 'that', 'that', 'that', 'that', 'that', 'that', 'that', 'that', 'that', 'that', 'that', 'that', 'that', 'that', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'the', 'thee', 'thee', 'thee', 'thee', 'then', 'then', 'then', 'then', 'then', 'then', 'then', 'then', 'there', 'there', 'there', 'there', 'there', 'there', 'there', 'thereat', 'these', 'thing', 'thing', 'thinking', 'this', 'this', 'this', 'this', 'this', 'this', 'this', 'this', 'this', 'this', 'this', 'this', 'this', 'this', 'this', 'this', 'this', 'thou', 'though', 'though', 'thrilled', 'throws', 'thy', 'thy', 'thy', 'thy', 'thy', 'thy', 'thy', 'till', 'till', 'till', 'tinkled', 'tis', 'tis', 'tis', 'to', 'to', 'to', 'to', 'to', 'to', 'token', 'token', 'tossed', 'truly', 'truly', 'tufted', 'turning', 'unbroken', 'unbroken', 'uncertain', 'undaunted', 'ungainly', 'ungainly', 'unhappy', 'unmerciful', 'unseen', 'unto', 'upon', 'upon', 'upon', 'upon', 'upon', 'upstarting', 'us', 'uttered', 'utters', 'vainly', 'velvet', 'velvet', 'velvet', 'violet', 'visitor', 'visitor', 'visitor', 'volume', 'wandering', 'was', 'was', 'was', 'was', 'was', 'was', 'we', 'we', 'weak', 'weary', 'what', 'what', 'what', 'what', 'what', 'wheeled', 'when', 'whether', 'whether', 'while', 'while', 'whispered', 'whispered', 'whom', 'whom', 'whom', 'whom', 'whose', 'whose', 'whose', 'wide', 'will', 'wind', 'window', 'wished', 'with', 'with', 'with', 'with', 'with', 'with', 'with', 'with', 'within', 'within', 'wondering', 'word', 'word', 'word', 'word', 'word', 'word', 'wore', 'wretch', 'wrought', 'yet', 'yet', 'yore', 'yore', 'yore', 'you', 'you', 'you', 'your','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.',',',',',',',',',',',',',',',',',',',',',',',',',',',',',',',',',',',',',',',',',',',','];

//Var containging the length of the paragraph created
var plength;
//Varaibles creating a new p element
var para;                       
var t;        
var paraNum;  
var ipsum;
   
            

//function that returns a new list string with randomized words
function randIt(){
plength = Math.floor((Math.random() * 300) + 100);
list = "";
for (i = 0; i<plength ; i++){
randWord = Math.floor((Math.random() * ipsumWords.length) + 1);
list += ipsumWords[randWord] + ' ';
}
};
//function to turn characters after period to uppercase and add a dot at the end of the string
function fixIt(){
list = list + ".";
list = list.split(/ \. /)
for (f = 0; f<list.length; f++){
	list[f] = list[f].charAt(0).toUpperCase() + list[f].slice(1);
}
list = list.join(". ")
list = list.split(/ \, /)
list = list.join(", ")
list = list.split(/ \./)
list = list.join(".");
}
//function that creates a new html element and appends the string
function buildIt(){
randIt();
fixIt()

paraNum = document.getElementById("nPara").value;
ipsum = document.getElementById("ipsum");
para = document.createElement("P");
t = document.createTextNode(list);
para.appendChild(t);
ipsum.appendChild(para);


};
function displayDiv() {
	ipsum.style.display = "block";

}




function generateIpsum(){
	paraNum = document.getElementById("nPara").value;
	
	if (ipsum){
		ipsum.innerHTML = " ";
		for (x = 0; x<paraNum; x++){
		buildIt();

	}
	}
	else {

	for (x = 0; x<paraNum; x++){
		buildIt();
		displayDiv();

		}

	}


}









