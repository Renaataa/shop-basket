import { View, Image, Text, StyleSheet, Pressable } from "react-native";

const Item = (props) => {
  return (
      <Pressable 
        style={styles.item(props.item.choosen)} 
        onLongPress={()=>{
          props.updateProduct(props.idx, 'choosen', !props.item.choosen)
        }}
      >
        <Image style={styles.image} source={props.item.imageSource}/>
        <View style={styles.itemText}>
          <Text style={{fontWeight: 'bold'}}>{props.item.name}</Text>
          <Text style={{flexWrap: 'wrap'}}>{props.item.description}</Text>
          <Text style={{color: '#EE7100', fontSize: 20, fontWeight: '500'}}>{props.item.price} p.</Text>
        </View>

        {
          props.pressedBuy ?
            <Text style={{color: '#EE7100', fontSize: 20, marginLeft: 20}}>X{props.item.amount}</Text>         
          :
            <Pressable style={styles.button}>
              <Pressable 
                style={{
                  borderRadius: 20,
                  color: '#EE7100' 
                }}
                onPress={()=>{props.item.amount>0 ? props.updateProduct(props.idx, 'amount', props.item.amount-1) : ''}}
              >
                <Text
                style={{
                    paddingBottom: 9,
                    fontSize: 25,
                    color: '#FFF'
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Text
              style={{
                  paddingBottom: 2,
                  fontSize: 15,
                  color: '#FFF'
                }}
              >
                {props.item.amount}
              </Text>
              <Pressable 
                color={'#EE7100'} 
                onPress={()=>{props.updateProduct(props.idx, 'amount', props.item.amount+1)}}
              >
                <Text
                style={{
                    paddingBottom: 9,
                    fontSize: 20,
                    color: '#FFF'
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
        }
      </Pressable>
  );
}

const styles = StyleSheet.create({
    image:{
      width: 50,
      height: 100
    },
    item: ifChoosen => ({
      flexDirection: 'row',
      width: '90%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: '20px',
      borderColor: ifChoosen ? "green" : "", 
      borderWidth: ifChoosen ? 5 : 0,
      shadowColor: "#000000",
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: {
        height: 2,
        width: 3
      }
    }),
    itemText:{
      flexDirection: 'column',
      alignContent: 'flex-start',
      paddingLeft: 20,
      width: '60%'
    },
    button: {
      flexDirection: 'row',
      width: '20%',
      height: 23,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingTop: 1,
      borderRadius: '20px',
      backgroundColor: '#EE7100',
    }
});

export default Item;