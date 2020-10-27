import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import sortByOrder from './modules/sortByOrder'
import sortByType from './modules/sortByType'
import catalogPagination from './modules/catalogPagination'
import popups from './modules/popups'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        rating: 9,
        img: '1.png',
        title: 'Чизбургер-пицца',
        price: 395,
        type: 'Острые'
      },
      {
        id: 2,
        rating: 7,
        img: '2.png',
        title: 'Сырная',
        price: 450,
        type: 'vegetarian'
      },
      {
        id: 3,
        rating: 8,
        img: '3.png',
        title: 'Креветки по-азиатски',
        price: 290,
        type: 'grill'
      },
      {
        id: 4,
        rating: 10,
        img: '4.png',
        title: 'Сырный цыпленок',
        price: 385,
        type: 'meat'
      },
      {
        id: 5,
        rating: 10,
        img: '5.jpeg',
        title: 'Пепперони Фреш с томатами',
        price: 245,
        type: 'spicy'
      },
      {
        id: 6,
        rating: 10,
        img: '6.jpg',
        title: 'Ветчина и сыр',
        price: 295,
        type: 'spicy'
      },
      {
        id: 7,
        rating: 10,
        img: '7.jpg',
        title: 'Кисло-сладкий цыпленок',
        price: 295,
        type: 'spicy'
      },
      {
        id: 8,
        rating: 10,
        img: '8.jpeg',
        title: 'Ветчина и грибы',
        price: 325,
        type: 'spicy'
      },
      {
        id: 9,
        rating: 10,
        img: '9.jpg',
        title: 'Четыре сезона',
        price: 375,
        type: 'spicy'
      },
      {
        id: 10,
        rating: 10,
        img: '10.jpeg',
        title: 'Аррива',
        price: 375,
        type: 'grill'
      },
      {
        id: 11,
        rating: 10,
        img: '11.jpg',
        title: 'Мексиканская ',
        price: 425,
        type: 'grill'
      },
      {
        id: 12,
        rating: 10,
        img: '12.jpg',
        title: 'Гавайская',
        price: 375,
        type: 'grill'
      },
      {
        id: 13,
        rating: 10,
        img: '13.jpeg',
        title: 'Додо',
        price: 425,
        type: 'grill'
      },
      {
        id: 14,
        rating: 10,
        img: '14.jpg',
        title: 'Четыре сыра',
        price: 425,
        type: 'grill'
      },
      {
        id: 15,
        rating: 10,
        img: '15.jpg',
        title: 'Мясная',
        price: 425,
        type: 'vegetarian'
      },
      {
        id: 16,
        rating: 10,
        img: '16.jpg',
        title: 'Цыпленок ранч',
        price: 425,
        type: 'vegetarian'
      },
      {
        id: 17,
        rating: 10,
        img: '17.jpg',
        title: 'Цыпленок барбекю',
        price: 425,
        type: 'vegetarian'
      },

      {
        id: 18,
        rating: 10,
        img: '18.jpeg',
        title: 'Дон Бекон',
        price: 425,
        type: 'vegetarian'
      },
      {
        id: 19,
        rating: 10,
        img: '19.jpg',
        title: 'Двойная пепперони',
        price: 425,
        type: 'vegetarian'
      },
      {
        id: 20,
        rating: 10,
        img: '20.jpg',
        title: 'Супермясная',
        price: 465,
        type: 'meat'
      },
      {
        id: 21,
        rating: 10,
        img: '21.jpeg',
        title: 'Овощи и грибы',
        price: 375,
        type: 'meat'
      },

      {
        id: 22,
        rating: 10,
        img: '22.jpeg',
        title: 'Маргарита',
        price: 375,
        type: 'meat'
      },
      {
        id: 23,
        rating: 10,
        img: '23.jpg',
        title: 'Пицца-пирог',
        price: 375,
        type: 'meat'
      },
    ],
  },
  getters: {
    products: state => state.products,
  },
  mutations: {
    
  },
  actions: {
    
  },

  modules: {
    cart, sortByOrder, sortByType, catalogPagination, popups
  },
})