var maxArea = function(height) {
    let low = 0;
    let high = height.length-1;
    let area = 0;

    while(low < high && low<(height.length-1)){
        let lowVal = height[low];
        let highVal = height[high];
        let y=Math.min(highVal,lowVal);
        let x=high-low;
        area=Math.max(area, x*y);
        if(lowVal<=highVal){
            low++;
            continue;
        }

        high--;
    }

    return area;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

console.log(maxArea([1,1]));

console.log(maxArea([4,3,2,1,4]));

