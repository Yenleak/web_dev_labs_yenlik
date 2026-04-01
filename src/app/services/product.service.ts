import {Injectable} from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root' })
export class ProductService {
  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Toy' },
    { id: 4, name: 'Smart-watch' },
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 15 Pro',
      description: 'Apple iPhone 15 128GB',
      price: 550000,
      rating: 5,
      image: 'https://i.pinimg.com/736x/20/78/aa/2078aa60db3cb611f884774708b1a3d6.jpg',
      link: 'https://kaspi.kz',
      likes: 0,
      categoryID: 1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Samsung Galaxy S23 256GB',
      price: 529000,
      rating: 5,
      likes: 0,
      categoryID: 1,
      image: 'https://i.pinimg.com/736x/06/fd/a9/06fda996c493a997ece2317d4f8fd4e3.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-109174459/'
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 13',
      description: 'Redmi Note 13 8/256GB',
      price: 169000,
      rating: 4,
      likes: 0,
      categoryID: 1,
      image: 'https://i.pinimg.com/1200x/8b/9c/78/8b9c787674dd37399bcaf340b9a0ed74.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-8-gb-256-gb-114360134/'
    },
    {
      id: 4,
      name: 'Realme C55',
      description: 'Realme C55 8/256GB',
      price: 139000,
      rating: 4,
      likes: 0,
      categoryID: 1,
      image: 'https://i.pinimg.com/736x/90/39/96/903996782c8619cefd04c82d3daea239.jpg',
      link: 'https://kaspi.kz/shop/p/realme-c55-8-gb-256-gb-110930187/'
    },
    {
      id: 5,
      name: 'Tecno Spark 20',
      description: 'Tecno Spark 20 8/256GB',
      price: 119000,
      rating: 4,
      likes: 0,
      categoryID: 1,
      image: 'https://i.pinimg.com/736x/37/49/8a/37498a611eb5c26f16040fc9eb306a64.jpg',
      link: 'https://kaspi.kz/shop/p/tecno-spark-20-8-gb-256-gb-114399683/'
    },
    {
      id: 6,
      name: 'MacBook Air M1',
      description: 'Apple MacBook Air M1 13"',
      price: 499000,
      rating: 5,
      likes: 0,
      categoryID: 2,
      image: 'https://i.pinimg.com/1200x/60/6b/2a/606b2afa85e7c337a34aeaaca01d9e64.jpg',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-m1-13-256gb-100397012/'
    },
    {
      id: 7,
      name: 'HP Pavilion 15',
      description: 'HP Pavilion Ryzen 5',
      price: 389000,
      rating: 4,
      likes: 0,
      categoryID: 2,
      image: 'https://i.pinimg.com/1200x/b0/fa/98/b0fa98b7322f6afc130d85eb38fc2f7e.jpg',
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eh1021ur-101058012/'
    },
    {
      id: 8,
      name: 'Lenovo IdeaPad 3',
      description: 'Lenovo IdeaPad 3 i5',
      price: 329000,
      rating: 4,
      likes: 0,
      categoryID: 2,
      image: 'https://i.pinimg.com/1200x/19/e2/5e/19e25e3dc9ef7af55f9175bc75c6507b.jpg',
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-102878839/'
    },
    {
      id: 9,
      name: 'ASUS VivoBook',
      description: 'ASUS VivoBook 15',
      price: 359000,
      rating: 4,
      likes: 0,
      categoryID: 2,
      image: 'https://i.pinimg.com/736x/7e/36/87/7e3687f38d04984c13b6ac44363ee4c9.jpg',
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504za-110306631/'
    },
    {
      id: 10,
      name: 'Acer Aspire 3',
      description: 'Acer Aspire 3 Ryzen 5',
      price: 299000,
      rating: 4,
      likes: 0,
      categoryID: 2,
      image: 'https://i.pinimg.com/736x/bb/5d/8d/bb5d8d5067210d96e899e6a33118ee38.jpg',
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-a315-24-108418012/'
    },
    {
      id: 11,
      name: 'LEGO City',
      description: 'LEGO City Police Set',
      price: 24900,
      rating: 5,
      likes: 0,
      categoryID: 3,
      image: 'https://i.pinimg.com/736x/cd/0f/d3/cd0fd3240c47af54b12f72ae8f477c03.jpg',
      link: 'https://kaspi.kz/shop/p/lego-city-police-60316-101696506/'
    },
    {
      id: 12,
      name: 'Hot Wheels Track',
      description: 'Hot Wheels Race Track',
      price: 19900,
      rating: 4,
      likes: 0,
      categoryID: 3,
      image: 'https://i.pinimg.com/1200x/03/c4/2f/03c42f3bffa79bf1b6b9b07e4f2d4e4c.jpg',
      link: 'https://kaspi.kz/shop/p/hot-wheels-track-builder-101543060/'
    },
    {
      id: 13,
      name: 'Barbie Doll',
      description: 'Barbie Fashion Doll',
      price: 17900,
      rating: 5,
      likes: 0,
      categoryID: 3,
      image: 'https://i.pinimg.com/1200x/f8/ec/eb/f8ecebd3d8486c91fefa17c12575c17d.jpg',
      link: 'https://kaspi.kz/shop/p/barbie-fashion-doll-100781422/'
    },
    {
      id: 14,
      name: 'RC Car',
      description: 'Remote Control Car',
      price: 29900,
      rating: 4,
      likes: 0,
      categoryID: 3,
      image: 'https://i.pinimg.com/736x/54/56/5d/54565deb7bad9943f5b287fe630b9ae7.jpg',
      link: 'https://kaspi.kz/shop/p/rc-car-4wd-110503847/'
    },
    {
      id: 15,
      name: 'Puzzle 1000',
      description: 'Puzzle 1000 pieces',
      price: 9900,
      rating: 4,
      likes: 0,
      categoryID: 3,
      image: 'https://i.pinimg.com/1200x/da/4b/3e/da4b3eeb437ef7bbf7e45969d5dec42d.jpg',
      link: 'https://kaspi.kz/shop/p/puzzle-1000-pieces-101322334/'
    },
    {
      id: 16,
      name: 'Apple Watch SE',
      description: 'Apple Watch SE 40mm',
      price: 159000,
      rating: 5,
      likes: 0,
      categoryID: 4,
      image: 'https://i.pinimg.com/736x/a7/0d/7b/a70d7b34b7696bb8e3c5c0cde848357a.jpg',
      link: 'https://kaspi.kz/shop/p/apple-watch-se-40mm-100991483/'
    },
    {
      id: 17,
      name: 'Samsung Galaxy Watch 6',
      description: 'Galaxy Watch 6',
      price: 189000,
      rating: 5,
      likes: 0,
      categoryID: 4,
      image: 'https://i.pinimg.com/736x/4f/5b/06/4f5b069edf4944acdf0f7658bbc94c69.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-6-110404295/'
    },
    {
      id: 18,
      name: 'Xiaomi Watch S1',
      description: 'Xiaomi Watch S1',
      price: 109000,
      rating: 4,
      likes: 0,
      categoryID: 4,
      image: 'https://i.pinimg.com/1200x/bd/12/90/bd129062b2aab2179c51e8b6393bc119.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-watch-s1-103876502/'
    },
    {
      id: 19,
      name: 'Amazfit GTR 4',
      description: 'Amazfit GTR 4',
      price: 119000,
      rating: 4,
      likes: 0,
      categoryID: 4,
      image: 'https://i.pinimg.com/1200x/aa/8c/ed/aa8ced3f89d7f8ea1d762fda214c9a18.jpg',
      link: 'https://kaspi.kz/shop/p/amazfit-gtr-4-110242881/'
    },
    {
      id: 20,
      name: 'Huawei Watch Fit',
      description: 'Huawei Watch Fit',
      price: 89000,
      rating: 4,
      likes: 0,
      categoryID: 4,
      image: 'https://i.pinimg.com/736x/cf/f1/e8/cff1e8bec72d5a7e7be09e1ef2bc05b2.jpg',
      link: 'https://kaspi.kz/shop/p/huawei-watch-fit-100787644/'
    }
  ];

  getCategories(){
    return this.categories;
  }
  getProductsByCategory(categoryID:number){
    return this.products.filter(product => product.categoryID === categoryID);
  }

  getAllProducts() {
    return undefined;
  }
}
