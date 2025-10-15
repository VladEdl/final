import '../scss/style.scss'


import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

// Імпортуємо стилі Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Ініціалізуємо Swiper для нашого блоку .team-slider
const swiper = new Swiper('.team-slider', {
  modules: [Pagination], // Підключаємо модуль для точок
  loop: true, // Робимо слайдер безкінечним

  // Налаштовуємо точки
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Робимо їх клікабельними
},
});