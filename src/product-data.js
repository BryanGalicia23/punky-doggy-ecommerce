const products = [
  {
    id: 1,
    name: "Cute Bed",
    productType: "Doggy bed",
    price: 239,
    rating: 5,
    image:
      "https://www.habipets.com/wp-content/uploads/2020/06/camaperromedianowoo.png",
    description:
      "Material: Cardboard | Size: 50cm. x 30cm. | Accessories: Included | Warranty: Included",
  },
  {
    id: 2,
    name: "Elegant Bed",
    productType: "Doggy bed",
    price: 335.5,
    rating: 5,
    image: "https://images1.tiendanimal.es/g/32544-IMG00060815.jpg",
    description:
      "Material: Leather | Size: 50cm. x 30cm. x 20cm. | Accessories: Included | Warranty: Included",
  },
  {
    id: 3,
    name: "Elegant Shirt",
    productType: "Doggy clothes",
    price: 120,
    rating: 5,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_933517-MLC46636860847_072021-O.webp",
    description:
      "Material: Cotton | Size: Small | Color: Blue with White | Accessories: No Included | Warranty: Included",
  },
  {
    id: 4,
    name: "Casual Shirt",
    productType: "Doggy clothes",
    price: 129.8,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/41Teyo4Tx5L.jpg",
    description:
      "Material: Cotton | Size: Medium | Color: Red with Black | Accessories: No Included | Warranty: No Included",
  },
  {
    id: 5,
    name: "Discreet Shirt",
    productType: "Doggy clothes",
    price: 199.9,
    rating: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDeIbbX-q23KghD-LXByAWK9bYoiMHKbbzg&usqp=CAU",
    description:
      "Material: Leather | Size: Medium | Color: Black | Accessories: No Included | Warranty: Included",
  },
  {
    id: 6,
    name: "The Mansion",
    productType: "Doggy house",
    price: 1360.9,
    rating: 5,
    image:
      "https://falabella.scene7.com/is/image/Falabella/10057990_1?wid=800&hei=800&qlt=70",
    description:
      "Material: Wood | Size: Large | Color: Pine with Black | Accessories: Included | Warranty: Included",
  },
  {
    id: 7,
    name: "For Single",
    productType: "Doggy House",
    price: 910,
    rating: 4,
    image:
      "https://res.cloudinary.com/walmart-labs/image/upload/w_225,dpr_auto,f_auto,q_auto:good/mg/gm/3pp/asr/022c6363-9127-4254-aae1-6726f2011607.5edc40c3032e21f74040755cf4c5985c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    description:
      "Material: Plastic | Size: Medium | Color: White with Orange | Accessories: Included | Warranty: Included",
  },
  {
    id: 8,
    name: "Tree house",
    productType: "Doggy house",
    price: 2360,
    rating: 5,
    image: "https://images-eu.ssl-images-amazon.com/images/I/41181BiT5TL.jpg",
    description:
      "Material: Wood | Size: Large and Medium| Color: Oak with Black | Accessories: Included | Warranty: Included",
  },
  {
    id: 9,
    name: "Special Bone",
    productType: "Doggy toys",
    price: 116,
    rating: 4,
    image:
      "https://image.dhgate.com/0x0s/f2-albu-g7-M01-3A-D7-rBVaSVvr40GAWndxAAEmcHKY5pM711.jpg/juguetes-para-perros-mascotas-juguetes-para.jpg",
    description:
      "Material: Rope and Plastic | Size: Small | Color: Brown with White | Accessories: Included | Warranty: Included",
  },
  {
    id: 10,
    name: "Best Friend",
    productType: "Others",
    price: 266.6,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/41uAkIxAhaL._SL500_.jpg",
    description:
      "Material: Plastic | Size: Medium | Color: Yellow with Black | Accessories: Included | Warranty: Included",
  },
  {
    id: 11,
    name: "Strange Ball",
    productType: "Doggy toys",
    price: 99,
    rating: 4,
    image:
      "https://ae01.alicdn.com/kf/H8b1bdaaacb9542e9894be16d35495707c/Bola-resistente-para-masticar-para-perros-juguete-giratorio-para-Limpieza-de-dientes-goma-no-t-xica.jpg",
    description:
      "Material: Rubber | Size: Small | Color: Red with White | Accessories: Included | Warranty: Included",
  },
  {
    id: 12,
    name: "Delicious Leg",
    productType: "Doggy toys",
    price: 106,
    rating: 5,
    image:
      "https://image.dhgate.com/0x0s/f2-albu-g8-M00-76-58-rBVaVF0ivXeAPq1RAADRZ64DsUs726.jpg/juguete-animal-dom-stico-del-perro-de-goma.jpg",
    description:
      "Material: Plastic | Size: Small | Color: Brown with White | Accessories: Included | Warranty: Included",
  },
  {
    id: 13,
    name: "Let's for a run",
    productType: "Doggy leash",
    price: 206.5,
    rating: 5,
    image:
      "https://blupet.es/wp-content/uploads/2021/02/arnes-chaleco-para-perros.jpg",
    description:
      "Material: Plastic and Cotton | Size: Small and Medium | Color: Several Colors | Accessories: Included | Warranty: Included",
  },
  {
    id: 14,
    name: "Secure Jacket",
    productType: "Doggy leash",
    price: 199.9,
    rating: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVegGVk43oK72GqSQXr3YcZ-RS4zojAUJ3fzDQD7fMyb9VgMUYxAUDk_Sj-6TlnTNscc&usqp=CAU",
    description:
      "Material: Plastic and Cotton | Size: Large and Medium | Color: Black | Accessories: Included | Warranty: Included",
  },
  {
    id: 15,
    name: "Super Hero",
    productType: "Doggy custome",
    price: 289,
    rating: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsp-crFYKMx1qVK43Cj6qHag3u8rrCDG_ukbid-702NDquWflEQKCQ2uc1j7eCYIawlE&usqp=CAU",
    description:
      "Material: Cotton | Size: Large and Medium | Color: Colorful | Accessories: Included | Warranty: Included",
  },
  {
    id: 16,
    name: "Super ID",
    productType: "Others",
    price: 120,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71W1-M6EqUL._AC_SX522_.jpg",
    description:
      "Material: Plastic | Size: 8cm. x 5cm. | Color: Colorful | Accessories: Included | Warranty: Included",
  },
];

export default products;
