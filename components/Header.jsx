import { View, Image, Text, StyleSheet, Pressable } from 'react-native';

const Header = (props) => {

  /*
  function deleteItem(idx){
    const newArray = [...props.items] 
    newArray.splice(idx, 1)
    props.setItems(newArray)
  }


  onPress={()=>{
            props.items.forEach((item, idx)=>{
              if(item.choosen) deleteItem(idx)
            })
          }}>
  */

  return (
    <View style={styles.header}>
      <View style={styles.topSubHeader}>
        <Image style={styles.image} source={require('C:/Users/renat/Desktop/Prog/Lessons/GitHub/shop-basket/assets/delivery.png')}/>
        <View style={styles.headerText}>
          <Text style={{...styles.text, color: '#EE7100'}}>Доставка курьером</Text>
          <Text style={styles.text}>ул. Миклухо-Маклая, 55, Москва</Text>
        </View>
      </View>

      <View style={styles.bottomSubHeader}>
        <Pressable onPress={()=>{console.log('back')}}>
          <Image style={{width: 19, height: 15}} source={require('C:/Users/renat/Desktop/Prog/Lessons/GitHub/shop-basket/assets/arrowBack.png')}/>
        </Pressable>          
        <Text style={{...styles.text, fontWeight: 649}}>Корзина</Text>
        <Pressable onPress={()=>props.delProduct()}>        
          <Image style={styles.image} source={require('C:/Users/renat/Desktop/Prog/Lessons/GitHub/shop-basket/assets/delete.png')}/>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'column',
      width: '80%',
      height: '10%',
      justifyContent: 'space-around'
    },
    topSubHeader:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    bottomSubHeader:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    headerText:{
      flexDirection: 'column', 
      alignItems:'center',
      width: '90%'
    },
    text:{
      fontStyle: 'normal',
      fontWeight: 350,
      lineHeight: '140%',
      fontSize: 15
    },
    image:{
      width: 20,
      height: 20,
    }
})

export default Header;