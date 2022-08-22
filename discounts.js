const coupons = [];
    coupons["BATMAN"] = 50;
    coupons["CAPTAINAMERICA"] = 40;
    coupons["IRONMAN"] = 30;
    coupons["SPIDERMAN"] = 15;
    coupons["DEADPOOL"] = 20;

// const coupons = [
//   "BATMAN",
//   "CAPTAINAMERICA",
//   "IRONMAN",
//   "SPIDERMAN",
//   "DEADPOOL"
// ];
    function formulePrice (price, discount){
    const finalDiscouunt = 100 - discount;
    const priceWithDiscount = (price * finalDiscouunt) / 100;

    return priceWithDiscount;
}

function formuleSaveMoney (price, discountPrice){
    const saveMoney = price - discountPrice;

    return saveMoney;
}
    function finalDiscountPrice(){
  
    const boxPrice = document.getElementById("priceText");
    const textPriceCustomer = boxPrice.value;

    const boxCoupons = document.getElementById("couponsText");
    const textCouponsCustomer = boxCoupons.value;

//     let discount;

//     if (!coupons.includes(textCouponsCustomer)){
//       alert("The " + textCouponsCustomer + " doesn't exist");
//     }
//     else if (textCouponsCustomer === "BATMAN"){
//        discount = 25;
//     } 
//     else if (textCouponsCustomer === "CAPTAINAMERICA"){
//       discount = 40;
//    }
//    else if (textCouponsCustomer === "IRONMAN"){
//     discount = 30;
//  }
//  else if (textCouponsCustomer === "VISION"){
//   discount = 15;
// }
// else if (textCouponsCustomer === "WOLVERINE"){
//   discount = 20;
// }

// const discountPrice = formulePrice (textPriceCustomer, discount);
// const saveMoney = formuleSaveMoney ( textPriceCustomer, discountPrice);

const boxText = document.getElementById("finalPriceText"); 


// return boxText.innerText += "The final price is " + discountPrice + " USD" + " , Coupon applied is " + textCouponsCustomer + " , You save " + saveMoney + " USD";

    // if (!coupons.includes[textCouponsCustomer]){
    //   alert("The " + textCouponsCustomer + " doesn't exist");
    // }
    if (textCouponsCustomer === "BATMAN"){
    const finalPriceDiscount = formulePrice(textPriceCustomer, coupons["BATMAN"]);
    const finalSaveMoney = formuleSaveMoney(textPriceCustomer, finalPriceDiscount);
      return boxText.innerText += "The Final price is " + finalPriceDiscount + " USD," + " BATMAN Coupon applied: " + coupons["BATMAN"] + "% discount, ¡You save " + finalSaveMoney + " USD!";
    }
    else if (textCouponsCustomer === "CAPTAINAMERICA"){
        const finalPriceDiscount = formulePrice(textPriceCustomer, coupons["CAPTAINAMERICA"]);
        const finalSaveMoney = formuleSaveMoney(textPriceCustomer, finalPriceDiscount);
        return boxText.innerText += "The Final price is " + finalPriceDiscount + " USD," + " CAPTAINAMERICA Coupon applied: " + coupons["CAPTAINAMERICA"] + "% discount, ¡You save " + finalSaveMoney + " USD!";
    }
    else if (textCouponsCustomer === "IRONMAN"){
        const finalPriceDiscount = formulePrice(textPriceCustomer, coupons["IRONMAN"]);
        const finalSaveMoney = formuleSaveMoney(textPriceCustomer, finalPriceDiscount);
        return boxText.innerText += "The Final price is " + finalPriceDiscount + " USD," + " IRONMAN Coupon applied: " + coupons["IRONMAN"] + "% discount, ¡You save " + finalSaveMoney + " USD!";
    }
    else if (textCouponsCustomer === "SPIDERMAN"){
        const finalPriceDiscount = formulePrice(textPriceCustomer, coupons["SPIDERMAN"]);
        const finalSaveMoney = formuleSaveMoney(textPriceCustomer, finalPriceDiscount);
        return boxText.innerText += "The Final price is " + finalPriceDiscount + " USD," + " SPIDERMAN Coupon applied: " + coupons["SPIDERMAN"] + "% discount, ¡You save " + finalSaveMoney + " USD!";
    }
    else if (textCouponsCustomer === "DEADPOOL"){
        const finalPriceDiscount = formulePrice(textPriceCustomer, coupons["DEADPOOL"]);
        const finalSaveMoney = formuleSaveMoney(textPriceCustomer, finalPriceDiscount);
        return boxText.innerText += "The Final price is " + finalPriceDiscount + " USD," + " DEADPOOL Coupon applied: " + coupons["DEADPOOL"] + "% discount, ¡You save " + finalSaveMoney + " USD!";
    }

     else {
      alert("The " + textCouponsCustomer + " coupon doesn't exist");
    }
    
//     let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
//   switch (textPriceCustomer) {
//     case "batman":
//         let batmanPrice = formulePrice(textCouponsCustomer, coupons["batman"]);
//         alert ("The Final price is " + batmanPrice + " USD" + " BATMAN Coupon applied " + " save " + priceSaveMoney + " USD");
//         break;
//         case "captainamerica":
//             let captainPrice = formulePrice(textCouponsCustomer, coupons["captainamerica"]);
//             // let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
//              finalText = "The Final price is " + captainPrice + " USD" + "<br /> CAPTAINAMERICA Coupon applied " + "<br /> save " + priceSaveMoney + " USD";
//            break;
//            case "ironman":
//             let ironmanPrice = formulePrice(textCouponsCustomer, coupons["ironman"]);
//             // let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
//             finalText = "The Final price is " + ironmanPrice + " USD" + "<br /> IRONMAN Coupon applied " + "<br /> save " + priceSaveMoney + " USD";
//            break;
//            case "vision":
//             let visionPrice = formulePrice(textCouponsCustomer, coupons["vision"]);
//             // let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
//              finalText = "The Final price is " + visionPrice + " USD" + "<br /> VISION Coupon applied " + "<br /> save " + priceSaveMoney + " USD";
//            break;
//            case "wolverine":
//             let wolverinePrice = formulePrice(textCouponsCustomer, coupons["wolverine"]);
//             // let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
//             finalText = "The Final price is " + wolverinePrice + " USD" + "<br /> WOLVERINE Coupon applied " + "<br /> save " + priceSaveMoney + " USD";
//            break;
//   }

}