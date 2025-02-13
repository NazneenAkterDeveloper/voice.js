 let memberList = [
    "Sauda",
    "Muhammad",
    "Opu",
    "Nazneen",
 ];
 
 function gratings (memberName){

   //  console.log(`Welcome ${memberName}`);

    let utterance = new SpeechSynthesisUtterance(`Welcome ${memberName}`);
speechSynthesis.speak(utterance);
 }

 for (let i = 0; i < memberList.length; i++){
    gratings(memberList[i]);
 }

 