const HashMap = require('./hashmap')

main = () => {
    const lotr = new HashMap();
    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;
    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandalf");
    lotr.set("Human", "Aragorn");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "Treebeard");
    console.log("MAIAR", lotr.get("Maiar"));
    console.log("HOBBIT", lotr.get("Hobbit"));
    console.log(lotr._hashTable[2]);
    return lotr;

}

console.log(main());

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log("MAP1", map1.get(str1));
    console.log("MAP2", map2.get(str3));
}

WhatDoesThisDo();

function removeDuplicates(str) {
    let map = new Map();
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        map.set(str[i]);
        }
    for (let key of map.keys()) {
        newStr += key;
        }
     return newStr;
    }

console.log(removeDuplicates('google all that you can think of'));

function palindrome(str){
    const palHash = new HashMap();
    let total = 0;
    for(let i=0; i<str.length; i++){
        let character = str[i];
        try{
            let value = palHash.get(character);
            value++;
            palHash.set(character, value);
        }
        catch (error){
            palHash.set(character, 1);
        }
    }
    for(let i=0; i<str.length; i++){
        let check = palHash.get(str[i]);
        if(check ===1){
            total++;
        }
    }
    if(total > 1){
         return false;
    }
    return true;
  }

  console.log(palindrome('aceracr'));

  function anagramGroup(arr){
    let charHash = new HashMap;
    let results = [];
    for(const word of arr) {
      let charSorted = word.split('').sort().join('');
      try{
        let group = charHash.get(charSorted);
        group.push(word);
      } 
      catch (error){
        results.push(charSorted);
        charHash.set(charSorted, [word]);
      }
    }
    let newArray = results.map(group =>{
      return charHash.get(group);
    });
    return newArray;
  }
  console.log(anagramGroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));