// Code your solution in this file!
const returnFirstTwoDrivers = function(names){
    return (names.slice(0,2))
}

const returnLastTwoDrivers = function(names){
    return (names.slice(2,4))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    function multiplier(fare) {
        return fare * integer;
    };
    return multiplier; 
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, selectDrivers){
    return selectDrivers(arrayOfDrivers)
   
}