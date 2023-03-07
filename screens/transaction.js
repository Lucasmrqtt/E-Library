import React, { Component } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import *as Permissions from "expo-permissions"
import { BarCodeScanner } from "expo-barcode-scanner";


export default class Transaction extends Component{
  constructor(){
    super()
    this.state={
      domState:'normal',
      hasCameraPermissions:null,
      scanned:false,
      scannedData:""
    }
  }

  getCameraPermission=async(domState)=>{
    const{status}=await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPermissions:status == 'granted',
      domState:domState,
      scanned:false
    })
  }

  handleBarcodeScanner=async({type, data})=>{
    this.setState({
      scannedData:data,
      domState:'normal',
      scanned:true,
    })
  }

  render(){
    const{
      domState, hasCameraPermissions, scanned, scannedData
    }=this.state

    if (domState=='scanner') {
      return(
        <BarCodeScanner onBarCodeScanned={scanned?undefined:this.handleBarcodeScanner} style={StyleSheet.absoluteFillObject}/>
      )
    }
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
          {hasCameraPermissions? scannedData:'solicitar camera ao usuário'}
        </Text>
        <TouchableOpacity style={styles.button} onPress={()=> this.getCameraPermission('scanner')}>
          <Text style={styles.buttonText}>
            Digitalizar 
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 15
  },
  button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15
  },
  buttonText: {
    fontSize: 15,
    color: "#FFFFFF"
  }
})