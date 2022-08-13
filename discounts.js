function finalPrice (price, discount){
    const finalDiscouunt = 100 - discount;
    const priceWithDiscount = (price * finalDiscouunt) / 100;

    return priceWithDiscount;
}