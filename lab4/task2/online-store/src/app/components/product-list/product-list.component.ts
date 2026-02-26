import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

// @Component({
//   selector: 'app-product-list',
//   standalone: true,
//   imports: [ProductCardComponent],
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 17 Pro 256GB оранжевый',
    description: 'Флагманский смартфон Apple с мощным процессором и профессиональной камерой нового поколения.',
    price: 846000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=preview-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=preview-large'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
  },
  {
    id: 2,
    name: 'Italy Exclusive 192909 золото, фианит',
    description: 'Элегантное золотое украшение с фианитом. Премиальное качество и изысканный дизайн.',
    price: 531929,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h77/h64/85726062313502.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h77/h64/85726062313502.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/italy-exclusive-192909-ves-10-76-g-zoloto-fianit-118352672/?c=750000000'
  },
  {
    id: 3,
    name: 'Tunga NordWay 2 195/65 R15 91Q',
    description: 'Зимняя шипованная шина для безопасного вождения в сложных погодных условиях.',
    price: 24700,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p47/pae/72815504.bin?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p47/pae/72815504.bin?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/tunga-nordway-2-195-65-r15-91q-s-shipami-12714714/?c=750000000'
  },
  {
    id: 4,
    name: 'Apple AirPods Pro 2nd Gen',
    description: 'Беспроводные наушники с активным шумоподавлением и пространственным звуком.',
    price: 103194,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
  },
  {
    id: 5,
    name: 'Sony PlayStation 5 Slim',
    description: 'Игровая приставка нового поколения с невероятной графикой и скоростью загрузки.',
    price: 301812,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
  },
  {
    id: 6,
    name: 'Meta Quest 3 512GB',
    description: 'Современные VR-очки для полного погружения в виртуальную реальность.',
    price: 289899,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h00/h89/84023738925086.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h00/h89/84023738925086.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/meta-quest-3-512-gb-113525753/?c=750000000'
  },
  {
    id: 7,
    name: 'Dyson Airwrap HS05 Long',
    description: 'Многофункциональный стайлер для укладки волос с дорожным чехлом.',
    price: 150000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hd6/82992821239838.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/he7/hd6/82992821239838.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/dyson-airwrap-hs05-long-s-dorozhnym-chehlom-i-rascheskami-stailer-sinii-mednyi-112707564/?c=750000000'
  },
  {
    id: 8,
    name: 'Mary Kay Journey+Bamboo 50 мл',
    description: 'Женский парфюм с лёгким цветочным ароматом.',
    price: 60000,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p2e/p7e/24915751.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p2e/p7e/24915751.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/mary-kay-journey-bamboo-duhi-parfum-50-ml-dlja-zhenschin-134728268/?c=750000000'
  },
  {
    id: 9,
    name: 'ArtLine AirGlow фен-выпрямитель',
    description: 'Стайлер 2 в 1 для быстрой и аккуратной укладки волос.',
    price: 65000,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/pcc/112585228.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p00/pcc/112585228.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/artline-airglow-fen-vyprjamitel-2-v-1-utjuzhok-144707469/?c=750000000'
  },
  {
    id: 10,
    name: 'Giorgio Armani Because It’s You 100 мл',
    description: 'Парфюмерная вода для женщин с насыщенным фруктово-цветочным ароматом.',
    price: 55995,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p71/pfb/77018861.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p71/pfb/77018861.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/giorgio-armani-because-it-s-you-parfjumernaja-voda-edp-100-ml-dlja-zhenschin-100011889/?c=750000000'
  },
  {
    id: 11,
    name: 'Huggies 5, 84 шт',
    description: 'Подгузники-трусики с высокой впитываемостью и мягкой посадкой.',
    price: 13360,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p05/p7d/71845682.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p05/p7d/71845682.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/podguzniki-trusiki-huggies-5-84-sht-143473282/?c=750000000'
  },
  {
    id: 12,
    name: 'Kotex Ultra Night Duo 14 шт',
    description: 'Ночные прокладки с повышенной защитой и комфортом.',
    price: 1521,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p78/pf0/25958573.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p78/pf0/25958573.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/kotex-prokladki-ultra-night-duo-14-sht-100931591/?c=750000000'
  },
  {
    id: 13,
    name: 'ТераФлю 325 мг 10 шт',
    description: 'Средство для облегчения симптомов простуды и гриппа.',
    price: 2200,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/hcf/87293798088734.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc9/hcf/87293798088734.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/teraflju-sashe-325-mg-10-sht-124283396/?c=750000000'
  },
  {
    id: 14,
    name: 'Виферон 150000 МЕ 10 шт',
    description: 'Иммуномодулирующее средство для поддержки организма.',
    price: 3299,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h71/hc9/80974463041566.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h71/hc9/80974463041566.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/viferon-suppozitorii-150000-me-10-sht-101095688/?c=750000000'
  },
  {
    id: 15,
    name: 'Носки TAPEDESIGN 37-43',
    description: 'Спортивные носки с повышенной фиксацией и комфортом.',
    price: 370,
    rating: 4.4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hf4/85192431697950.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hfb/hf4/85192431697950.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/noski-tapedesign-tdw-00-1-para-belyi-37-43-116227948/?c=750000000'
  },
  {
    id: 16,
    name: 'Картина BLESS HOUSE Айдана 40x50',
    description: 'Холст на подрамнике с современным дизайном.',
    price: 6999,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p5a/p55/105061669.jpeg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p5a/p55/105061669.jpeg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/bless-house-aidana-holst-na-podramnike-40x50-sm-156939098/?c=750000000'
  },
  {
    id: 17,
    name: 'Попсокет 002 розовый',
    description: 'Холст на подрамнике с современным дизайном.',
    price: 6999,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/p6d/47574716.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pfd/p6d/47574716.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/popsoket-002-rozovyi-122283935/?c=750000000'
  }
];

}