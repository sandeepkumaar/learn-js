function sliceByValue(inputSet, value) {
 let set = new Set(inputSet); // S:O(n)
 for(const s of set) {
   if(s === value) {
     set.delete(s);
     break;
   };
   set.delete(s);
 };
 return set;

};

var lengthOfLongestSubstring = function(str) {
 let set = new Set();
 let sets =  [];
 for(const item of str) {
   if(set.has(item)) {
     //console.log('has', item);
     sets.push(set);
     //
     let slicedSet = sliceByValue(set, item);
     set = slicedSet.add(item);
     continue
   } 
   //console.log(item);
   set.add(item)
 };
 sets.push(set);
 let arr = sets
   .map(set => set.size)
 return Math.max(...arr);
   

};

console.log(lengthOfLongestSubstring('sandeep'));


