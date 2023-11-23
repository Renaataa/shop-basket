import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PlacingOrder = (props) => {
    return (
        <>
            <Text style={{fontWeight: '500', marginTop: 20}}>Оформление заказа</Text>
            <View style={styles.orderInfo}>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Image style={styles.image} source={require('C:/Users/renat/Desktop/Prog/Lessons/GitHub/shop-basket/assets/delivery.png')}/>
                    <Text>Выберите тип доставки</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.button}>Курьером</TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Image style={styles.image} source={require('C:/Users/renat/Desktop/Prog/Lessons/GitHub/shop-basket/assets/clock.png')}/>
                    <Text>Выберите время и дату доставки</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.button}>12:00 05.09.2022</TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Image style={styles.image} source={require('C:/Users/renat/Desktop/Prog/Lessons/GitHub/shop-basket/assets/payment.png')}/>
                    <Text>Выберите способ оплаты</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.button}>Банковская карта</TouchableOpacity>
                </View>
                
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text>{props.productsAmount} товара</Text>
                        <Text>Доставка</Text>
                        <Text>Начислим баллы</Text>
                    </View>
                    <View style={{flexDirection: 'column', marginLeft: 60}}>
                        <Text style={{color: '#EE7100'}}>{props.totalPrice} p.</Text>
                        <Text style={{color: '#EE7100'}}>Бесплатно</Text>
                        <Text style={{color: '#EE7100'}}>0</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    orderInfo: {
      alignContent: 'flex-start',
      width: '90%',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      marginTop: 5,
      paddingTop: 5,
      paddingRight: 20,
      paddingLeft: 20,
      paddingBottom: 20,
      shadowColor: "#000000",
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: {
        height: 2,
        width: 3
      }
    },
    btnContainer:{
        flex: 1,
        alignItems: 'flex-start'
    },
    button: {
        height: '100%',
        paddingHorizontal: 20,
        paddingTop: 5,
        backgroundColor: '#EE7100',
        color: 'white',
        borderRadius: '200px',
        marginTop: 8,
    },
    image: {
        justifyContent: 'flex-end',
        width: 20,
        height: 20,
        marginRight: 8
    }
})

export default PlacingOrder;