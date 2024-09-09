/*
 * 1. Sipariş bilgilerini object içersinde saklayınız.
 * 2. Her siparişinizin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız.(KDV oranı %18 )
 * 3. Tüm siparişlerin(KDV dahil) toplam ödenecek ücreti hesaplayınız.
 * 
 * sipariş id: 101
 * sipariş tarihi: 31.12.2022
 * ödeme şekli: kredi kartı
 * kargo adresi: Yahya Kemal Mah. Kocaeli, İzmit
 * satın alınan ürünler:
 *    ürün id: 5
 *    ürün başlığı: Iphone 13
 *    ürün URL: https://www.apple.com/
 *    ürün fiyatı: 22000
 * 
 *    ürün id: 6
 *    ürün başlığı: Iphone 13 Pro
 *    ürün URL: https://www.apple.com/
 *    ürünün fiyatı: 25000
 * 
 * müşteri:
 *    müşteri id: 12
 * satıcı:
 *    firma id:34
 *    firma ismi: Apple Türkiye
 * 
 * sipariş id: 102
 * sipariş tarihi: 31.12.2022
 * ödeme şekil: kredi kartı
 * kargo adresi: Yahya Kemal Mah. Kocaeli, İzmit
 * satın alınan ürünler:
 * 
 *    ürün id: 6
 *    ürün başlığı: Iphone 13 Pro
 *    ürün URL: https://www.apple.com/
 *    ürün fiyatı: 25000
 * 
 * müşteri:
 *    müşteri id: 12
 * satıcı:
 * firma id: 34
 * firma adı: Apple Türkiye
 *
*/
const delivery = [
    {
        deliveryId: 101,
        deliveryDate: "31.12.2022",
        paymentMethod: "credit card",
        deliveryAddress: {
            street: "Yahya Kemal Mah.",
            city: "Kocaeli",
            district: "İzmit",
        },
    },

    {
        deliveryId: 102,
        deliveryDate: "31.12.2022",
        paymentMethod: "credit card",
        deliveryAddress: {
            street: "Yahya Kemal Mah.",
            city: "Kocaeli",
            district: "İzmit",
        },
    }
];


const products = [
    {
        productId: 5,
        productTitle: "Iphone 13",
        productUrl: "https://www.apple.com/",
        productPrice: 22000,

    },
    {
        productId: 6,
        productTitle: "Iphone 13 Pro",
        productUrl: "https:///www.apple.com/",
        productPrice: 25000,
    }
]