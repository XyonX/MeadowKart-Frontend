//icons
import logo from "./meadowkart.png";
import wishlist from "./heart.png";
import profile from "./user.png";
import cart from "./shopping-cart.png";
import cart2 from "./shopping-cart-2.png";
import slide1 from "./home_slide_1.webp";
import slide2 from "./home_slide_2.webp";
import slide3 from "./home_slide_3.webp";

import deal from "./deal.png";
import parcel from "./parcel.png";
import saveMoney from "./save-money.png";
import lorry from "./lorry.png";
import support from "./support.png";

import banner3 from "./banner_03.webp";
import banner4 from "./banner_04.webp";

/***Product categry */
import milk from "./milk.jpg";
import honey from "./honey.jpg";
import egg from "./egg.png";
import breakfast from "./breakfast.jpg";
import ghee from "./ghee.png";
import pujaitem from "./pujaitem.png";

import milkPng from "./milk_400.png";
import honeyPng from "./honey_400.png";
import eggPng from "./egg_400.png";
import breakfastPng from "./breakfast_400.png";
import gheePng from "./ghee_400.png";
import pujaitemPng from "./pujaitem_400.png";

/***Products */

import milkProduct from "./a2milk-product.webp";
import eggWhiteProduct from "./white_eggs-product.webp";
import eggBrownProduct from "./eggs-product.webp";
import gheeProduct from "./ghee-product.webp";

/*** New assets */
// Backgrounds
import appDownloadBg from "./bg/app_download_bg.jpg";
import breadcrumbBg from "./bg/breadcrumb_bg.jpg";
import breadcrumbBg02 from "./bg/breadcrumb_bg02.jpg";
import couponBannerBg from "./bg/coupon_banner_bg.jpg";
import discountCountBg from "./bg/discount_count_bg.jpg";
import servicesBg from "./bg/services_bg.jpg";
import shopDiscountBg from "./bg/shop_discount_bg.jpg";

// Icons
import appStore from "./icon/app_store.png";
import dArrow from "./icon/d_arrow.png";
import gPlay from "./icon/g_play.png";

// Images
import activeYear from "./images/active_year.jpg";
import couponCode from "./images/coupon_code.png";
import megamenuBanner from "./images/megamenu_banner.jpg";
import megamenuBanner02 from "./images/megamenu_banner02.jpg";
import paymentCard from "./images/payment_card.png";
import titleShape from "./images/title_shape.png";

// Products
import bestDealProduct01 from "./product/best_deal_product01.png";
import bestDealProduct02 from "./product/best_deal_product02.png";
import bestDealProduct03 from "./product/best_deal_product03.png";
import bestDealProduct04 from "./product/best_deal_product04.png";
import bestDealProduct05 from "./product/best_deal_product05.png";
import cartP01 from "./product/cart_p01.jpg";
import cartP02 from "./product/cart_p02.jpg";
import categoryImg01 from "./product/category_img01.png";
import categoryImg02 from "./product/category_img02.png";
import categoryImg03 from "./product/category_img03.png";
import categoryImg04 from "./product/category_img04.png";
import categoryImg05 from "./product/category_img05.png";
import categoryImg06 from "./product/category_img06.png";
import discountImg01 from "./product/discount_img01.jpg";
import discountImg02 from "./product/discount_img02.jpg";
import discountImg03 from "./product/discount_img03.jpg";
import specialProductsAdd from "./product/special_products_add.jpg";
import spProducts01 from "./product/sp_products01.png";
import spProducts02 from "./product/sp_products02.png";
import spProducts03 from "./product/sp_products03.png";
import spProducts04 from "./product/sp_products04.png";
import spProducts05 from "./product/sp_products05.png";
import spProducts06 from "./product/sp_products06.png";
import spProducts07 from "./product/sp_products07.png";
import spProducts08 from "./product/sp_products08.png";
import spProducts09 from "./product/sp_products09.png";
import sDiscountImg01 from "./product/s_discount_img01.jpg";
import sDiscountImg02 from "./product/s_discount_img02.jpg";

// Slider
import sliderBanner01 from "./slider/slider_banner01.jpg";
import sliderBanner02 from "./slider/slider_banner02.jpg";
import sliderBanner03 from "./slider/slider_banner03.jpg";

export const assets = {
  icons: {
    logo,
    wishlist,
    profile,
    cart,
    cart2,
    slide1,
    slide2,
    slide3,
    deal,
    parcel,
    saveMoney,
    lorry,
    support,
    banner3,
    banner4,
  },
  backgrounds: {
    appDownloadBg,
    breadcrumbBg,
    breadcrumbBg02,
    couponBannerBg,
    discountCountBg,
    servicesBg,
    shopDiscountBg,
  },
  banners: {
    sliderBanner01,
    sliderBanner02,
    sliderBanner03,
  },
  iconsNew: {
    appStore,
    dArrow,
    gPlay,
  },
  images: {
    activeYear,
    couponCode,
    megamenuBanner,
    megamenuBanner02,
    paymentCard,
    titleShape,
  },
  products: {
    cartP01,
    cartP02,
    categoryImg01,
    categoryImg02,
    categoryImg03,
    categoryImg04,
    categoryImg05,
    categoryImg06,
    discountImg01,
    discountImg02,
    discountImg03,
    specialProductsAdd,
    spProducts01,
    spProducts02,
    spProducts03,
    spProducts04,
    spProducts05,
    spProducts06,
    spProducts07,
    spProducts08,
    spProducts09,
    sDiscountImg01,
    sDiscountImg02,
  },
};

export const categories = [
  { name: "Milk", image: milk, png: milkPng },
  { name: "Honey", image: honey, png: honeyPng },
  { name: "Egg", image: egg, png: eggPng },
  { name: "Breakfast", image: breakfast, png: breakfastPng },
  { name: "Ghee", image: ghee, png: gheePng },
  { name: "Puja Item", image: pujaitem, png: pujaitemPng },
];

export const products = [
  {
    id: "p001",
    name: "Farm fresh Desi Cow A2 Milk",
    image: milkProduct,
    featured: true,
    price: 95,
    qty: "1000 ml",
  },
  {
    id: "p002",
    name: "Desi Gir Cow A2 Vedic Ghee",
    image: gheeProduct,
    featured: true,
    price: 1100,
    qty: "500 ml",
  },
  {
    id: "p003",
    name: "White Egg",
    image: eggWhiteProduct,
    featured: true,
    price: 48,
    qty: "6 Pcs box",
  },
  {
    id: "p004",
    name: "Country hen Egg",
    image: eggBrownProduct,
    featured: true,
    price: 90,
    qty: "6 Pcs box",
  },
];

export const bestDeals = [
  bestDealProduct01,
  bestDealProduct02,
  bestDealProduct03,
  bestDealProduct04,
  bestDealProduct05,
];
