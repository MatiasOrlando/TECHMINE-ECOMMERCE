const products = [
  {
    id: 0,
    title: "VIDEO GEFORCE GT 210 1GB ARKTEK DDR3 LP",
    stock: 5,
    price: 6227,
    oldprice: 9880,
    image: "/images/gforcegt210.jpg",
  },
  {
    id: 1,
    title: "VIDEO GEFORCE GT 730 2GB GIGABYTE DDR3",
    stock: 7,
    price: 8800,
    oldprice: 11880,
    image: "/images/gforcegt730.jpg",
  },
  {
    id: 2,
    title: "VIDEO GEFORCE GT 1030 MSI 2GB LOCK DDR4",
    stock: 4,
    price: 22060,
    oldprice: 25880,
    image: "/images/gforcegt1030.jpg",
  },
  {
    id: 3,
    title: "VIDEO RADEON RX 550 4GB PWRD DRAGON",
    stock: 3,
    price: 31990,
    oldprice: 35880,
    image: "/images/radeonrx550.jpg",
  },
  {
    id: 4,
    title: "VIDEO RADEON RX 6500 XT 4GB ASUS DX O4G",
    stock: 6,
    price: 61000,
    oldprice: 65990,
    image: "/images/radeonrx6500.jpg",
  },
  {
    id: 5,
    title: "VIDEO GEFORCE GTX 1660 TI 6GB ROCKET OC",
    stock: 5,
    price: 71730,
    oldprice: 76000,
    image: "/images/gforcegtx1660.jpg",
  },
  {
    id: 6,
    title: "VIDEO RADEON RX 7000 XT 4GB  GAMING OC",
    stock: 2,
    price: 54990,
    oldprice: 58890,
    image: "/images/radeonrx7000.jpg",
  },
  {
    id: 7,
    title: "VIDEO RADEON RX 580 8GB  RED DEVIL BULK ",
    stock: 8,
    price: 97990,
    oldprice: 105500,
    image: "/images/radeonrx580.jpg",
  },
];

export const dataBase = new Promise((resolve, reject) => {
  let promise = true;

  setTimeout(() => {
    if (promise) {
      resolve(products);
    } else {
      reject("Request failed");
    }
  }, 2000);
});
