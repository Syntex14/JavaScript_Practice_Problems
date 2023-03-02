/* Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments. 

function tellFortune(numOfChildren, partnerName, geoLocation, jobTitle) {
    alert(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numOfChildren} kids.`);
} 

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number. */

function calcSupply(AgeOfUser, amountOfSnackDay, callback) {
    const calcDifferenceAge = 77 - AgeOfUser; // used 77 as constant max age
    const totalDays = calcDifferenceAge * 365; // used 365 days as a contant max year
    let result = Math.round(amountOfSnackDay * totalDays); 

    callback(result);
}

calcSupply(28, 2, result => { 
  alert(`You will need ${result} snacks to last you until the ripe old age of 77`);
});

calcSupply(42, 2, result => { 
    alert(`You will need ${result} snacks to last you until the ripe old age of 77`);
  });
  
calcSupply(61, 3.2, result => { 
    alert(`You will need ${result} snacks to last you until the ripe old age of 77`);
  });
    
