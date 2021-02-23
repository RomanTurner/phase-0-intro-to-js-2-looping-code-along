// Code your solutions in this file

function countDown(countdown) {
  while (countdown >= 0) {
    console.log(countdown--);
  }
};



function writeCards(guest, event) {
    const newArr = [];
    for (let i = 0; i < guest.length; i++){
       newArr.push(`Thank you, ${guest[i]}, for the wonderful ${event} gift!`)
    }
    return newArr;
};


