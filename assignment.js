// 

// Working on Problem-1 : kilometerToMeter Function
function kilometerToMeter(kilometer){
  var meter = kilometer * 1000;
  return meter;
}
var kilo20 = kilometerToMeter(5);



// Working on Problem-2 : budgetCalculator Function
function budgetCalculator(watch, mobile, laptop,){
  itemWatch = watch * 50;
  itemMobile = mobile * 100;
  itemLaptop = laptop * 500;
  total = itemWatch + itemMobile + itemLaptop;
  return total;
}
var addAll = budgetCalculator(1, 1, 1);



// Working on Problem-3 : hotelCost Function
function hotelCost(perDay){
  var stayDays = 0;

if(perDay <= 10){
  stayDays = perDay * 100;
}
else if(perDay <= 20){
  var firstPart = 10 * 100;
  var remaining = perDay - 10;
  var secondPart = remaining * 80;
  stayDays = firstPart + secondPart;
}
else{
  var firstPart = 10 * 100;
  var secondPart = 10 * 80;
  var remaining = perDay - 20;
  var thirdpart = remaining * 50;
  stayDays = firstPart + secondPart + thirdpart;
}
return stayDays;
}
var totalCost = hotelCost(32);




// Working on Problem-4 : megaFriend Function
function megaFriend([a, b, c, xyz]){
  var megaName = arguments[0];
  for( var i = 0; i < arguments.length; i++){
    if (arguments[i].length > megaName.length){
      megaName = arguments[i];
    }
  }
  return megaName;
}
var result = megaFriend("abir", "mukul", "badal", "ImranKhan");



