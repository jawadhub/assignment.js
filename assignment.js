// https://github.com/jawadhub/assignment.js/blob/main/assignment.js

// Working on Problem-1 : kilometerToMeter Function
function kilometerToMeter(kilometer){
  if(kilometer < 0){
    return "You can't entered negative distance."
  }

  else{
    var meter = kilometer * 1000;
    return meter;
  }
}




// Working on Problem-2 : budgetCalculator Function
function budgetCalculator(watch, mobile, laptop,){
if(watch <0 || mobile < 0 || laptop <0){
  return "You can't entered negative amount."
  }

else{
    itemWatch = watch * 50;
    itemMobile = mobile * 100;
    itemLaptop = laptop * 500;
    total = itemWatch + itemMobile + itemLaptop;
    return total;
  }
}




function hotelCost(perDay){
  var stayDays = 0;

    if(perDay < 0 ){
      return "You can't entered negative days"
    }

    else if(perDay <= 10){
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




