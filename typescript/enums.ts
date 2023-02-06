//worst choice
/* const front=0
const middle=1
const backbencher=2
 */

//better choice
/* enum seatChoice {
  //if we dont like start with Zero (0)
  FRONT = 100,
  MIDDLE = 200,
  BACKBENCHER = 10000000,
}
const seat = seatChoice.FRONT;
 */


//if dont like to index  start with number or string only u canchange index differently
enum seatChoice {
    //if we dont like start with Zero (0)
    FRONT = "Gagan",
    MIDDLE = 200,
    BACKBENCHER ,
  }
  const seat = seatChoice.FRONT;