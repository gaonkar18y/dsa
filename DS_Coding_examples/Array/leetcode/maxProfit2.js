var maxProfit = function(prices) {
    let l=0;
    let profit=0;
    let buy, sell;

    while(l<prices.length-1){
        
        while(l<prices.length && prices[l+1] <= prices[l]) l++;
        buy = prices[l];

        while(l<prices.length && prices[l+1] > prices[l]) l++;
        sell = prices[l];

        profit+=sell-buy;
    }

    
    return profit;
};



//[3,2,6,5,0,3]
//[2,1,2,1,0,0,1]


console.log(maxProfit([3,3,5,0,0,3,1,4]));

//console.log(maxProfit([3,2,6,5,0,3]));

//console.log(maxProfit([7,6,4,3,1]));