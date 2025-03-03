// Create a function that takes an array of card numbers and checks if the sum of their value exceeds 21 
// or is equal to 21. 

//Values of the cards are as follows:
// 2-10 are their value.
// J-K (face cards) count as 10.
// Aces count as 1 or 11 - if counting an Ace as 11 would bring the total over 21, count it as 1.

// If the count is exactly 21 return 'Blackjack!'

/**
 *
 * @param {Array} cards mixed array of numbers and strings 
 *
 * @returns {boolean | string} true if sum exceeds 21, false if sum is under or equal to 21, 'Blackjack!' if sum is exactly 21
 */
module.exports = (cards) => {
    let total = 0;
    let acesCount = 0
  for (let i = 0; i < cards.length; i++) {
     if (typeof cards[i] === "string") {
        if (cards[i] === "A") {
            acesCount++;
            total += 11;
            
            } else {
            total += 10;
         }
        } else {
        total += cards[i];
        }
    }
while (total > 21 && acesCount > 0) {
    total -= 10;
    acesCount--;
    }

  if (total === 21) {
    return "Blackjack!";
    } else if (total > 21) {
    return true
    } else {
    return false 
    }
  };
