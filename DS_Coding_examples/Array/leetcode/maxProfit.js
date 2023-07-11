var maxProfit = function(prices) {
    let min=prices[0];
    let max=0;
   
    for(let i=1;i<prices.length;i++){
        let dayPrice = prices[i];
        if(dayPrice<min){
            min=dayPrice;
            minIndex=i;
        }else {
            max=Math.max(max, (dayPrice-min))
        }
    }
    return max;
};