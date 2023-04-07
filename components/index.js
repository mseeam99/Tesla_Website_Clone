import React from "react";
import { StyleSheet, Text, View, ImageBackground, Dimensions } from "react-native";
import MyButtons from "./buttons";

const { width, height } = Dimensions.get("window");

const CarItem= () => {
  return (
    <View style = {styles.container}>
        <View style={styles.car_container}>
            <ImageBackground 
                source={require('./ModelY.jpeg')} 
                style={styles.image}
            />
                <View style={styles.titles}>
                    <Text style={styles.title}>{'Model Y'}</Text>
                    <Text style={styles.tagline}>{'View Inventory'}</Text>
                </View>
                <View style={styles.button_container}>
                    <MyButtons
                    type="primary"
                    content="Custom Order"
                    onPress={() => {
                        console.warn("CUSTOM ORDER IS PRESSED !");
                    }}
                    />
                    <MyButtons
                    type="secondary"
                    content="View Inventory"
                    onPress={() => {
                        console.warn("VIEW INVENTORY IS PRESSED !");
                    }}
                    />
                </View>
        </View>
        <View style={styles.car_container}>
            <ImageBackground 
                source={require('./Model3.jpeg')} 
                style={styles.image}
            />
                <View style={styles.titles}>
                    <Text style={styles.title}>{'Model 3'}</Text>
                    <Text style={styles.tagline}>{'Leasing starting at $349/mo'}</Text>
                </View>
                <View style={styles.button_container}>
                    <MyButtons
                    type="primary"
                    content="Custom Order"
                    onPress={() => {
                        console.warn("CUSTOM ORDER IS PRESSED !");
                    }}
                    />
                    <MyButtons
                    type="secondary"
                    content="View Inventory"
                    onPress={() => {
                        console.warn("VIEW INVENTORY IS PRESSED !");
                    }}
                    />
                </View>
        </View>
        <View style={styles.car_container}>
            <ImageBackground 
                source={require('./ModelS.jpeg')} 
                style={styles.image}
            />
                <View style={styles.titles}>
                    <Text style={styles.title}>{'View Inventory'}</Text>
                    <Text style={styles.tagline}>{'View Inventory'}</Text>
                </View>
                <View style={styles.button_container}>
                    <MyButtons
                    type="primary"
                    content="Custom Order"
                    onPress={() => {
                        console.warn("CUSTOM ORDER IS PRESSED !");
                    }}
                    />
                    <MyButtons
                    type="secondary"
                    content="View Inventory"
                    onPress={() => {
                        console.warn("VIEW INVENTORY IS PRESSED !");
                    }}
                    />
                </View>
        </View>
        <View style={styles.car_container}>
            <ImageBackground 
                source={require('./ModelX.jpeg')} 
                style={styles.image}
            />
                <View style={styles.titles}>
                    <Text style={styles.title}>{'Model X'}</Text>
                    <Text style={styles.tagline}>{'View Inventory'}</Text>
                </View>
                <View style={styles.button_container}>
                    <MyButtons
                    type="primary"
                    content="Custom Order"
                    onPress={() => {
                        console.warn("CUSTOM ORDER IS PRESSED !");
                    }}
                    />
                    <MyButtons
                    type="secondary"
                    content="View Inventory"
                    onPress={() => {
                        console.warn("VIEW INVENTORY IS PRESSED !");
                    }}
                    />
                </View>
        </View>
        <View style={styles.car_container}>
            <ImageBackground 
                source={require('./SolarPanels.jpeg')} 
                style={styles.image}
            />
                <View style={styles.titles}>
                    <Text style={styles.title}>{'Solar Panels'}</Text>
                    <Text style={styles.tagline}>{'Lowest Cost Solar Panels in America'}</Text>
                </View>
                <View style={styles.button_container}>
                    <MyButtons
                    type="primary"
                    content="Custom Order"
                    onPress={() => {
                        console.warn("CUSTOM ORDER IS PRESSED !");
                    }}
                    />
                    <MyButtons
                    type="secondary"
                    content="View Inventory"
                    onPress={() => {
                        console.warn("VIEW INVENTORY IS PRESSED !");
                    }}
                    />
                </View>
        </View>
        <View style={styles.car_container}>
            <ImageBackground 
                source={require('./SolarRoof.jpeg')} 
                style={styles.image}
            />
                <View style={styles.titles}>
                    <Text style={styles.title}>{'Solar Roof'}</Text>
                    <Text style={styles.tagline}>{''}</Text>
                </View>
                <View style={styles.button_container}>
                    <MyButtons
                    type="primary"
                    content="Custom Order"
                    onPress={() => {
                        console.warn("CUSTOM ORDER IS PRESSED !");
                    }}
                    />
                    <MyButtons
                    type="secondary"
                    content="View Inventory"
                    onPress={() => {
                        console.warn("VIEW INVENTORY IS PRESSED !");
                    }}
                    />
                </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    car_container: {
      width:width,
      height:height,
    },
    titles: {
      marginTop: '30%',
      width: '100%',
      alignItems: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: '500',
    },
    tagline: {
      fontSize: 16,
      color: '#5c5e62',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      position: 'absolute',
    },
    button_container: {
      position: 'absolute',
      bottom: 50,
      width: '100%',
    },
});

export default CarItem;
