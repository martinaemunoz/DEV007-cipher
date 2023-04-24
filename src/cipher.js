const cipher = {
  encode: function(offset_value1,cipherMessage){
    let result = '';
    for (let i = 0; i < cipherMessage.length; i++) {
      const ASCIInum = cipherMessage[i].charCodeAt();
      console.log(ASCIInum);
      if (ASCIInum>=65 && ASCIInum<=90){
        result += String.fromCharCode(((ASCIInum-65 + offset_value1)%26)+65);}
    } return result; 
  },

decode: function(offset_value2, decipherMessage){
  let result = '';
  while (offset_value2 > 26){
    offset_value2 -= 26;
  }
  for (let i = 0; i < decipherMessage.length; i++){
    const ASCIInum = decipherMessage[i].charCodeAt();
    if (ASCIInum>=65 && ASCIInum<=90){
      result += String.fromCharCode(((ASCIInum-65 - offset_value2 + 26)%26)+65);
    }
  } return result;
}
};

export default cipher;
