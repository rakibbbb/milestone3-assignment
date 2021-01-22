// https://github.com/rakibbbb/milestone3-assignment

//kilometerToMeter
function kilometerToMeter(distance){
    if(distance > 0){
        var meter = distance * 1000;
        return meter;
    }
    else{
        return "-----Invalid Parameter Input-----"
    }
    
}
/*var result = kilometerToMeter(5);
console.log(result);*/


//budgetCalculator
function budgetCalculator(watchQty, mobileQty, laptopQty){
    if(watchQty > 0){
        var watchPrice = 50 * watchQty;
    }
    else{
        return "----Invalid Quantity----"
    }

    if(mobileQty > 0){
        var mobilePrice = 100 * mobileQty;
    }
    else{
        return "----Invalid Quantity----"
    }
    
    if(laptopQty > 0){
        var laptopPrice = 500 * laptopQty;
    }
    else{
        return "----Invalid Quantity----"
    }
    
    var total = watchPrice + mobilePrice + laptopPrice;
    return total;
}
/*var output = budgetCalculator(10, 20, 4);
console.log(output);*/


//hotelCost
function hotelCost(days){
    if(days > 0){
        if(days <= 10){
            var rent = 100 * days;
            return rent;
        }
        else if(days <= 20){
            var firstSection = 10 * 100;
            var remaining = days - 10;
            var secondSection = 80 * remaining;
            var rent = firstSection + secondSection;
            return rent;
        }
        else{
            var firstSection = 10 * 100;
            var secondSection = 10 * 80;
            var remaining = days - 20;
            var thirdSection = 50 * remaining;
            var rent = firstSection + secondSection + thirdSection;
            return rent;
        }
    }
    else{
        return "-----------Invalid Parameter----------";
    }
}
/*var cost = hotelCost(43);
console.log(cost);*/


//megaFriend
function megaFriend(name){
    var largeName = name[0];
    for(var i = 0; i < name.length; i++){
        if(name[i].length > largeName.length){
            largeName = name[i];
        }
    }
    return largeName;
}
/*var friendsNameList = ["Ema", "Nishy", "Mamun", "Sayem", "jyoti", "Firoj", "Mim", "jaima"];
var result = megaFriend(friendsNameList);
console.log(result);*/