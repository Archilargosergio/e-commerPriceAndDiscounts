const coupons = [
    "BATMAN" = 25,
    "CAPTAINAMERICA" = 40,
    "IRONMAN" = 30,
    "VISION" = 15,
    "WOLVRINE" = 20,
];
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
    const finalText = boxText.innerText;

    if (!coupons.includes(textCouponsCustomer)){
        return alert("This coupons doesn't exist");
    }
    else if (textCouponsCustomer === coupons[0]){
       const batmanPrice = formulePrice(textCouponsCustomer, coupons[0]);
       const priceSaveMoney = formuleSaveMoney(textPriceCustomer, batmanPrice);
       return finalText += "The Final price is " + batmanPrice + " USD" + "<br /> BATMAN Coupon applied " + "<br /> save " + priceSaveMoney + " USD";
    }

}