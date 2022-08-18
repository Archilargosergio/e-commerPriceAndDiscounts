const coupons = [];
    coupons["batman"] = 25;
    coupons["captainamerica"] = 40;
    coupons["ironman"] = 30;
    coupons["vision"] = 15;
    coupons["wolverine"] = 20;

function formulePrice (price, discount){
    const finalDiscouunt = 100 - discount;
    const priceWithDiscount = (price * finalDiscouunt) / 100;

    return priceWithDiscount;
}

function formuleSaveMoney (regularPrice, discountPrice){
    const saveMoney = regularPrice - discountPrice;

    return saveMoney;
}
function finalPrice(){
    const boxPrice = document.getElementById("priceText");
    const textPriceCustomer = boxPrice.value;

    const boxCoupons = document.getElementById("couponsText");
    const textCouponsCustomer = boxCoupons.value;

    const boxText = document.getElementById("finalPrice");


    // const finalCoupons = coupons.push();

    // if (textCouponsCustomer === "batman"){
    //     let batmanPrice = formulePrice(textCouponsCustomer, coupons["batman"]);
    //     let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
    //    return finalText = "The Final price is " + batmanPrice + " USD" + "<br /> BATMAN Coupon applied " + "<br /> save " + priceSaveMoney + " USD";
    // }
    // else if (textCouponsCustomer === "captainamerica"){
    //     let captainPrice = formulePrice(textCouponsCustomer, coupons["captainamerica"]);
    //     let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
    //    return finalText = "The Final price is " + captainPrice + " USD" + "<br /> CAPTAINAMERICA Coupon applied " + "<br /> save " + priceSaveMoney + " USD";
    // }
    // else if (textCouponsCustomer === "ironman"){
    //     let ironmanPrice = formulePrice(textCouponsCustomer, coupons["ironman"]);
    //     let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
    //    return finalText = "The Final price is " + ironmanPrice + " USD" + "<br /> IRONMAN Coupon applied " + "<br /> save " + priceSaveMoney + " USD";
    // }
    // else if (textCouponsCustomer === "vision"){
    //     let visionPrice = formulePrice(textCouponsCustomer, coupons["vision"]);
    //     let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
    //    return finalText = "The Final price is " + visionPrice + " USD" + "<br /> VISION Coupon applied " + "<br /> save " + priceSaveMoney + " USD";
    // }
    // else if (textCouponsCustomer === "wolverine"){
    //     let wolverinePrice = formulePrice(textCouponsCustomer, coupons["wolverine"]);
    //     let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
    //    return finalText = "The Final price is " + wolverinePrice + " USD" + "<br /> WOLVERINE Coupon applied " + "<br /> save " + priceSaveMoney + " USD";
    // }
    
    let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
  switch (textPriceCustomer) {
    case "batman":
        let batmanPrice = formulePrice(textCouponsCustomer, coupons["batman"]);
        alert ("The Final price is " + batmanPrice + " USD" + " BATMAN Coupon applied " + " save " + priceSaveMoney + " USD");
        break;
        case "captainamerica":
            let captainPrice = formulePrice(textCouponsCustomer, coupons["captainamerica"]);
            // let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
             finalText = "The Final price is " + captainPrice + " USD" + "<br /> CAPTAINAMERICA Coupon applied " + "<br /> save " + priceSaveMoney + " USD";
           break;
           case "ironman":
            let ironmanPrice = formulePrice(textCouponsCustomer, coupons["ironman"]);
            // let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
            finalText = "The Final price is " + ironmanPrice + " USD" + "<br /> IRONMAN Coupon applied " + "<br /> save " + priceSaveMoney + " USD";
           break;
           case "vision":
            let visionPrice = formulePrice(textCouponsCustomer, coupons["vision"]);
            // let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
             finalText = "The Final price is " + visionPrice + " USD" + "<br /> VISION Coupon applied " + "<br /> save " + priceSaveMoney + " USD";
           break;
           case "wolverine":
            let wolverinePrice = formulePrice(textCouponsCustomer, coupons["wolverine"]);
            // let priceSaveMoney = formuleSaveMoney(textPriceCustomer);
            finalText = "The Final price is " + wolverinePrice + " USD" + "<br /> WOLVERINE Coupon applied " + "<br /> save " + priceSaveMoney + " USD";
           break;
  }

}