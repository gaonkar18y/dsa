

const degperHr = 30;
const degPerMin =  6;

function calculateAngle(hrs, mins){

    if(hrs>23 || mins> 60){
        throw new Error("Invalid input");
    }

    let hrsDegree = hrs* degperHr;
    let minsDegree = mins* degPerMin;

    if( (hrs<=6 && mins<=30) || (hrs>6 && mins>30)){
        return Math.abs(minsDegree-hrsDegree);
    }

    if(mins>30){
        minsDegree=(60-mins)* degPerMin;
    }

    if(hrs>6){
        hrsDegree=(12-hrs)* degPerMin;
    }

    const angle = minsDegree + hrsDegree;

    if(angle>180){
        return 360-angle;
    }

    return angle;

}

console.log(calculateAngle(2,0));
console.log(calculateAngle(2,50));
console.log(calculateAngle(2,40));
console.log(calculateAngle(2,35));
console.log(calculateAngle(0,30));