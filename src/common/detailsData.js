export function getBanners(data) {
    let res = [];
    data.topImages.forEach(val => {
        res.push({
            title: val,
            image: val,
            link: val
        })
    })
    return res;
}

export function getItemInfo(data) {
    return new ItemInfo(data)
}

export function getShopInfo(data) {
    return new ShopInfo(data)
}

export function getCartInfo(data) {
    return new CartInfo(data)
}

class ItemInfo{
    constructor({title, lowPrice, lowNowPrice, cFav, extra}){
        this.title = title;
        this.lowPrice = lowPrice;
        this.lowNowPrice = lowNowPrice;
        this.cFav = cFav;
        this.sales = extra.sales;
    }
}
class ShopInfo{
    constructor({name, shopLogo, cFans, score, cSells, cGoods, shopLabels}){
        this.name = name;
        this.shopLogo = shopLogo;
        this.cFans = cFans;
        this.score = score;
        this.cSells = cSells;
        this.cGoods = cGoods;
        this.shopLabels = shopLabels;
    }
}
class CartInfo{
    constructor({lowNowPrice, title, extra, desc}){
        this.lowNowPrice = lowNowPrice;
        this.title = title;
        this.extra = extra;
        this.desc = desc;
    }
}
