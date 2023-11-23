/*
Верстка по макету - https://www.figma.com/file/QlpfSixiQu7anmqurRuGQw/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%2F-Mobile-app-design-(Community)?node-id=1%3A2&mode=dev
      * При зажатии на продукте - он стает активным, его рамка стает зеленная
        Если был активный и мы зажали еще раз - активность пропадает
      * Сверстать пункт доставка курьером
      * Делать разбивку на компоненты
      * При нажатии на кнопку назад   - пишет в консоль назад
      * При нажатии на кнопку корзина - активный элемен удаляется
      * При нажатии на cтрелочки + -   - увеличивается количество продуктов
      * При нажатии на перейти к оплате - выводит продукты которые есть и их количество
      * ВЫПАДУЮЩИЕ СПИСКИ (Банковская карта, курьеом и т.д) пока не открываются
*/

// border rodius - circle button

import { useState } from 'react';
import { StyleSheet, View, Button} from 'react-native';
import Header from './components/Header';
import ListProducts from './components/ListProducts';
import PlacingOrder from './components/PlacingOrder';

export default function App() {
  const [products, setProducts] = useState([
    {
      imageSource: require('C:/Users/renat/Desktop/Prog/Lessons/GitHub/shop-basket/assets/item1.png'),
      name: 'Мойка RE 130 Plus',
      description: 'Мощная мойка высокого давления (135 бар) повышенной комфортности.',
      price: 49990,
      amount: 0,
      choosen: false
    },
    {
      imageSource: require('C:/Users/renat/Desktop/Prog/Lessons/GitHub/shop-basket/assets/item2.png'),
      name: 'Мотокоса FS 38',
      description: 'Лёгкая мотокоса мощностью 0,65 кВт',
      price: 17990,
      amount: 0,
      choosen: false
    }
  ])

  // const [order,setOrder] = useState({
  //   typeDriver: '',
  //   dateTime: '',
  //   pay: '',
  //   coutProducts: 0,
  //   driver: '',
  //   Marks: 0
  // })

  const [pressedBuy, setPressedBuy] = useState(false)

  function updateProduct(idx, propertyName, value){
    const newArray = [...products] 
    newArray[idx] = {...products[idx], [propertyName]: value}
    setProducts(newArray)
    // Меняется order
  }

  // Желательно, чтобы компонент обрабатывал только свою логику


  return (
    <View style={styles.container}>
      <Header delProduct={()=>setProducts(products.filter(item=>!item.choosen))}/>
      <ListProducts products={products} updateProduct={updateProduct} pressedBuy={pressedBuy}/>
      
      {
        pressedBuy ?
          ''
        :
          <PlacingOrder productsAmount={products.reduce((acc, item)=>acc+item.amount, 0)} totalPrice={products.reduce((acc, item)=>acc+item.price*item.amount, 0)}/>
      }
      
      <View style={styles.button}>
        <Button 
          title={pressedBuy ? 'Оплатить' : 'Перейти к оплате' }
          color={'#EE7100'}
          onPress={()=>setPressedBuy(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  button:{
    marginTop: 30,
    backgroundColor: '#EE7100',
    borderRadius: '30px',
    width: '50%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
