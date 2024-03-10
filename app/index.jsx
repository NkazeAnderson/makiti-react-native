import { View, Text, Image } from 'react-native'
import React from 'react'
import {Inter_400Regular, Inter_600SemiBold, Inter_800ExtraBold, useFonts} from "@expo-google-fonts/inter"
import product from  "../assets/product.png"
import left_chevron from  "../assets/left-chevron.png"
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {StatusBar} from "expo-status-bar"
const index = () => {
    let [fontsLoaded] = useFonts({ Inter_400Regular, Inter_600SemiBold,Inter_800ExtraBold })
    if (!fontsLoaded) {
        return <View style={{flex:1, justifyContent: 'center'}}>
                    <Text style={{textAlign:'center'}}>Loading Fonts</Text>
                </View>
    }
    return (
      
      <SafeAreaView style={{ display: "flex", flex: 1 }}>
          
          <View style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#EDB346",
              justifyContent: "space-between",
              paddingHorizontal: 15,
              alignItems: "center"
 }}>
              <View style = {{display: 'flex', flexDirection: "row", alignItems: "center"}}>
                  
              <Image source={left_chevron} style={{ width: 20, height: 20 }} />
              <View style={{marginLeft: 10}}>
                      <Text style={{
                          fontFamily: "Inter_800ExtraBold",
                          color: "white", fontSize: 28
                      }}>Nutella</Text>
              </View>
              </View>
              <View style={{
                  position: "relative",
                  right: 0,
                  borderRadius: 99,
                  top: 25, zIndex: 1000
              }}>
                    <Image style={{borderRadius: 999}}  source={product} />
                </View>
          </View>

          
          <Text style={{
              fontFamily: "Inter_400Regular",
              textAlign: "center",
              paddingVertical: 10,
          }}>NUTELLA 1KG</Text>
          <Text style={{
              fontFamily: "Inter_600SemiBold",
              textAlign: "center", paddingVertical: 30,
              marginBottom: 40,
              fontSize: 20
          }}>Code bar: 4008400401829</Text>
          <View style={{backgroundColor: "#EDB346", padding: 10}}>
              <Text style={{ fontFamily: "Inter_600SemiBold", color: "white" }}>Description: <Text style={{ fontFamily: "Inter_400Regular"}}>
               Sugar, Palm Oil, Hazelnuts (13%), Skimmed Milk Powder (8.7%), Fat-Reduced Cocoa (7.4%), Emulsifier: Lecithins (Soya), Vanillin.
Nutella® est sur les tables du petit-déjeuner de millions de personnes dans le monde depuis plus de 50 ans, offrant de bons moments pour commencer la journée. Une tranche de pain avec du Nutella® a un goût délicieux. Grâce à notre recette unique et inimitable, Nutella® est devenu la pâte à tartiner aux noisettes et au cacao la plus populaire et emblématique du monde.
              </Text></Text>
              
          </View>
          <Stack.Screen
              options={{
                  headerShown: false
              }}
          
          />
          <StatusBar style='auto' backgroundColor='#EDB346' />
    </SafeAreaView>
  )
}

export default index