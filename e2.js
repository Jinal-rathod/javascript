
let char=[1,4,6,9,10,23,16,8]
 let max = char[0]
    for (let i=0; i<char.length; i++) {
   if (char[i]>max) {
       max=char[i]
   }
    }
    console.log(max)