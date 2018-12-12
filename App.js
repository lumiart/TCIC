/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,TouchableHighlight,Modal,Button, Image, ScrollView, Switch, Alert} from 'react-native';
import { ColorPicker } from 'react-native-color-picker'


export default class App extends Component {

 constructor(){
 
   super();
 
   this.state ={
    showMe : false,cor: '#FFF',
    r : 0, g : 0, b : 0, value:0,
    switch1 :  false, uri1 : false,
    switch2 :  false, uri2 : false,
    switch3 :  false, uri3 : false,
    switch4 :  false, uri4 : false,
    switch5 :  false, uri5 : false,
    switch6 :  false, uri6 : false,
    switch7 :  false, uri7 : false,
    switch8 :  false, uri8 : false,
    switch9 :  false, uri9 : false,
    switch10 :  false, uri10 : false,
    switch11 :  false, uri11 : false,
    switch12 :  false, uri12 : false,
    switch13 :  false, uri13 : false,
    switch14 :  false, uri14 : false,
    switch15 :  false, uri15 : false,
    switch16 :  false, uri16 : false,
    switch17 :  false, uri17 : false,
    switch18 :  false, uri18 : false
   }
 }

 hexToRGB = (hex) => {
  var red, blue, green;
   hex = hex.replace('#','');
    red = parseInt(hex.substring(0,2), 16);
    green = parseInt(hex.substring(2,4), 16);
    blue = parseInt(hex.substring(4,6), 16);
      this.setState({
        r: red,
        g: green,
        b : blue
      });
 }

color = () => {
            const g = this.state.g;
            fetch('http://192.168.0.8:8080/digital/write/12/1/'+g);
            const r = this.state.r;
            fetch('http://192.168.0.8:8080/digital/write/13/1/'+r);
            const b = this.state.b;
            fetch('http://192.168.0.8:8080/digital/write/14/1/'+b);
}

  LDR = (value) => {
    this.setState({ switch11: !this.state.switch11
         })
        if(this.state.switch11){
            this.setState({ uri11: true
         });
            fetch('http://192.168.0.8:8080/digital/write/14/0');
        }else{
            this.setState({ uri11: false
         });
  }
}

 switchOne = (value) => {
        this.setState({ switch1: !this.state.switch1
         })
        if(this.state.switch1){
            this.setState({ uri1: true
         });
            fetch('http://192.168.0.8:8080/digital/write/14/0');
            fetch('http://192.168.0.8:8080/digital/write/12/0');
            fetch('http://192.168.0.8:8080/digital/write/13/0');
        }else{
            this.setState({ uri1: false
         });
            this.color();

                  }
    }
     switchTwo = (value) => {
        this.setState({ switch2: !this.state.switch2
         })
        if(this.state.switch2){
            this.setState({ uri2: true
         });
            fetch('http://192.168.0.8:8080/digital/write/34/1');
        }else{
            this.setState({ uri2: false
         });
            fetch('http://192.168.0.8:8080/digital/write/34/0');

                  }
    }
     switchTree = (value) => {
        this.setState({ switch3: !this.state.switch3
         })
        if(this.state.switch3){
            this.setState({ uri3: true
         });
            fetch('http://192.168.0.8:8080/digital/write/25/1');
        }else{
            this.setState({ uri3: false
         });
            fetch('http://192.168.0.8:8080/digital/write/25/0');
                  }
    }
         banheiro = (value) => {
        this.setState({ switch4: !this.state.switch4
         })
        if(this.state.switch4){
            this.setState({ uri4: true
         });
            fetch('http://192.168.0.8:8080/digital/write/34/1');

        }else{
            this.setState({ uri4: false
         });
            fetch('http://192.168.0.8:8080/digital/write/34/0');

                  }
    }
         corredor = (value) => {
        this.setState({ switch5: !this.state.switch5
         })
        if(this.state.switch5){
            this.setState({ uri5: true
         });
            fetch('http://192.168.0.8:8080/digital/write/2/1');

        }else{
            this.setState({ uri5: false
         });
            fetch('http://192.168.0.8:8080/digital/write/2/0');

                  }
    }


 switchOne1 = (value) => {
        this.setState({ switch6: !this.state.switch6
         })
        if(this.state.switch6){
            this.setState({ uri6: true
         });
            fetch('http://192.168.2.100:8080/digital/write/14/0');
        }else{
            this.setState({ uri6: false
         });
            this.color();

                  }
    }
     switchTwo1 = (value) => {
        this.setState({ switch7: !this.state.switch7
         })
        if(this.state.switch7){
            this.setState({ uri7: true
         });
            fetch('http://192.168.2.100:8080/digital/write/14/0');
        }else{
            this.setState({ uri7: false
         });
            this.color();

                  }
    }
     switchTree1 = (value) => {
        this.setState({ switch8: !this.state.switch8
         })
        if(this.state.switch8){
            this.setState({ uri8: true
         });
            fetch('http://192.168.2.100:8080/digital/write/14/0');
        }else{
            this.setState({ uri8: false
         });

                  }
    }
         banheiro1 = (value) => {
        this.setState({ switch10: !this.state.switch10
         })
        if(this.state.switch10){
            this.setState({ uri10: true
         });
            fetch('http://192.168.2.100:8080/digital/write/14/0');

        }else{
            this.setState({ uri10: false
         });

                  }
    }
         corredor1 = (value) => {
        this.setState({ switch9: !this.state.switch9
         })
        if(this.state.switch9){
            this.setState({ uri9: true
         });
            fetch('http://192.168.2.100:8080/digital/write/14/0');

        }else{
            this.setState({ uri9: false
         });

                  }
    }

    switchOne2 = (value) => {
        this.setState({ switch12: !this.state.switch12
         })
        if(this.state.switch12){
            this.setState({ uri12: true
         });
            fetch('http://192.168.2.100:8080/digital/write/14/0');
        }else{
            this.setState({ uri12: false
         });
            this.color();

                  }
    }
     switchTwo2 = (value) => {
        this.setState({ switch13: !this.state.switch13
         })
        if(this.state.switch13){
            this.setState({ uri13: true
         });
            fetch('http://192.168.2.100:8080/digital/write/14/0');
        }else{
            this.setState({ uri13: false
         });
            this.color();

                  }
    }
     switchTree2 = (value) => {
        this.setState({ switch14: !this.state.switch14
         })
        if(this.state.switch14){
            this.setState({ uri14: true
         });
            fetch('http://192.168.2.100:8080/digital/write/14/0');
        }else{
            this.setState({ uri14: false
         });

                  }
    }
         banheiro2 = (value) => {
        this.setState({ switch15: !this.state.switch15
         })
        if(this.state.switch15){
            this.setState({ uri15: true
         });
            fetch('http://192.168.2.100:8080/digital/write/14/0');

        }else{
            this.setState({ uri15: false
         });

                  }
    }
             corredor2 = (value) => {
        this.setState({ switch16: !this.state.switch16
         })
        if(this.state.switch16){
            this.setState({ uri16: true
         });
            fetch('http://192.168.2.100:8080/digital/write/14/0');

        }else{
            this.setState({ uri16: false
         });

                  }
    }

  render() {
    var icon = this.state.uri1 ? require('./app/assets/imgs/lampoff.png') : require('./app/assets/imgs/lampon.png');
    var icon2 = this.state.uri2 ? require('./app/assets/imgs/lampoff.png') : require('./app/assets/imgs/lampon.png');
    var icon3 = this.state.uri3 ? require('./app/assets/imgs/lampoff.png') : require('./app/assets/imgs/lampon.png');
    var icon4 = this.state.uri4 ? require('./app/assets/imgs/lampoff.png') : require('./app/assets/imgs/lampon.png');
    var icon5 = this.state.uri5 ? require('./app/assets/imgs/lampoff.png') : require('./app/assets/imgs/lampon.png');
    var icon6 = this.state.uri6 ? require('./app/assets/imgs/lampoff.png') : require('./app/assets/imgs/lampon.png');
    var icon7 = this.state.uri7 ? require('./app/assets/imgs/lampoff.png') : require('./app/assets/imgs/lampon.png');
    var icon8 = this.state.uri8 ? require('./app/assets/imgs/lampoff.png') : require('./app/assets/imgs/lampon.png');
    var icon9 = this.state.uri9 ? require('./app/assets/imgs/lampoff.png') : require('./app/assets/imgs/lampon.png');
    var icon10 = this.state.uri10 ? require('./app/assets/imgs/lampoff.png') : require('./app/assets/imgs/lampon.png');
    var icon11 = this.state.uri11 ? require('./app/assets/imgs/sensorloff.png') : require('./app/assets/imgs/sensorlon.png');
    var icon12 = this.state.uri12 ? require('./app/assets/imgs/lampoff.png') : require('./app/assets/imgs/lampon.png');
    var icon13 = this.state.uri13 ? require('./app/assets/imgs/lampoff.png') : require('./app/assets/imgs/lampon.png');
    var icon14 = this.state.uri14 ? require('./app/assets/imgs/lampoff.png') : require('./app/assets/imgs/lampon.png');
    var icon15 = this.state.uri15 ? require('./app/assets/imgs/lampoff.png') : require('./app/assets/imgs/lampon.png');
    var icon16 = this.state.uri16 ? require('./app/assets/imgs/sensorloff.png') : require('./app/assets/imgs/sensorlon.png');
    return (
      <View style={styles.container} >
          <View style={styles.logo}>
          <Image
              source={require('./app/assets/imgs/myhome2.png')}
              style={{flex: 1, width: null, height: null,resizeMode: 'cover'}}/>
          </View>
        <View style={styles.andares}>  
          <View style={[styles.andar, styles.andar1]}>
               <TouchableOpacity>
               <Text style={ styles.buttom}>1° Andar</Text>
               </TouchableOpacity>
               <ScrollView>
               <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon}
              style={styles.image}/>
              <Text style={styles.texto}>Sala</Text>
              <Switch
          onValueChange={(value) => this.switchOne(value)}
          style={{align: 'flex-end', marginLeft: 130}}
          value={this.state.switch1} />
          <TouchableOpacity onPress={() => {this.setState({showMe:true});}}>
          <Image
              source={require('./app/assets/imgs/color-wheel.png')}
              style={{align: 'flex-end', marginLeft: 10}}/>
          </TouchableOpacity>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon2}
              style={styles.image}/>
              <Text style={styles.texto}>Cozinha</Text>
              <Switch
          onValueChange={(value) => this.switchTwo(value)}
          style={{align: 'flex-end', marginLeft: 90}}
          value={this.state.switch2} />
      
              </TouchableOpacity>

              <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon3}
              style={styles.image}/>
              <Text style={styles.texto}>Garagem</Text>
              <Switch
          onValueChange={(value) => this.switchTree(value)}
          style={{align: 'flex-end', marginLeft: 80}}
          value={this.state.switch3} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon4}
              style={styles.image}/>
              <Text style={styles.texto}>Banheiro</Text>
              <Switch
          onValueChange={(value) => this.banheiro(value)}
          style={{align: 'flex-end', marginLeft: 80}}
          value={this.state.switch4} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon5}
              style={styles.image}/>
              <Text style={styles.texto}>Corredor</Text>
              <Switch
          onValueChange={(value) => this.corredor(value)}
          style={{align: 'flex-end', marginLeft: 80}}
          value={this.state.switch5} />
          </TouchableOpacity>
              </ScrollView> 
          </View>



          <View style={[styles.andar,styles.andar2]}>
            <TouchableOpacity>
               <Text style={ styles.buttom}>2° Andar</Text>
               </TouchableOpacity>
               <ScrollView>
               <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon6}
              style={styles.image}/>
              <Text style={styles.texto}>Quarto 1</Text>
              <Switch
          onValueChange={(value) => this.switchOne1(value)}
          style={{align: 'flex-end', marginLeft: 80}}
          value={this.state.switch6} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon7}
              style={styles.image}/>
              <Text style={styles.texto}>Quarto 2</Text>
              <Switch
          onValueChange={(value) => this.switchTwo1(value)}
          style={{align: 'flex-end', marginLeft: 80}}
          value={this.state.switch7} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon8}
              style={styles.image}/>
              <Text style={styles.texto}>Quarto 3</Text>
              <Switch
          onValueChange={(value) => this.switchTree1(value)}
          style={{align: 'flex-end', marginLeft: 80}}
          value={this.state.switch8} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon9}
              style={styles.image}/>
              <Text style={styles.texto}>Corredor</Text>
              <Switch
          onValueChange={(value) => this.corredor1(value)}
          style={{align: 'flex-end', marginLeft: 80}}
          value={this.state.switch9} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon10}
              style={styles.image}/>
              <Text style={styles.texto}>Banheiro</Text>
              <Switch
          onValueChange={(value) => this.banheiro1(value)}
          style={{align: 'flex-end', marginLeft: 80}}
          value={this.state.switch10} />
          </TouchableOpacity>          
          <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon11}
              style={styles.image}/>
              <Text style={styles.texto}>Sensor LDR</Text>
              <Switch
          onValueChange={(value) => this.LDR(value)}
          style={{align: 'flex-end', marginLeft: 50}}
          value={this.state.switch11} />
          </TouchableOpacity>
            </ScrollView>    
          </View>




          <View style={[styles.andar,styles.jardim]}>
             <TouchableOpacity>
               <Text style={ styles.buttom}>Jardim</Text>
               </TouchableOpacity>
               <ScrollView>
            <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon6}
              style={styles.image}/>
              <Text style={styles.texto}>Sensor LDR</Text>
              <Switch
          onValueChange={(value) => this.switchOne2(value)}
          style={{align: 'flex-end', marginLeft: 50}}
          value={this.state.switch6} />
          </TouchableOpacity>   
            <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon2}
              style={styles.image}/>
              <Text style={styles.texto}>Luz externa1</Text>
              <Switch
          onValueChange={(value) => this.switchTwo2(value)}
          style={{align: 'flex-end', marginLeft: 40}}
          value={this.state.switch2} />
          
              </TouchableOpacity>

              <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon3}
              style={styles.image}/>
              <Text style={styles.texto}>Luz externa2</Text>
              <Switch
          onValueChange={(value) => this.switchTree2(value)}
          style={{align: 'flex-end', marginLeft: 40}}
          value={this.state.switch3} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon4}
              style={styles.image}/>
              <Text style={styles.texto}>Luz externa3</Text>
              <Switch
          onValueChange={(value) => this.banheiro2(value)}
          style={{align: 'flex-end', marginLeft: 40}}
          value={this.state.switch4} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icons}>
               <Image 
              source={icon5}
              style={styles.image}/>
              <Text style={styles.texto}>Luz externa4</Text>
              <Switch
          onValueChange={(value) => this.corredor2(value)}
          style={{align: 'flex-end', marginLeft: 40}}
          value={this.state.switch5} />
          </TouchableOpacity>
              </ScrollView> 

          </View>
        </View>



        <Modal visible={this.state.showMe} onRquestClose={() => console.warn("closing")}>
      <View style={{flex: 1, padding: 15, backgroundColor: '#212021'}}>
    <Button onPress={() => {this.setState({showMe:false, switch1:false}), this.hexToRGB(this.state.cor);}} style={{color: 'white'}} title="Clique aqui para fechar"></Button>
    <ColorPicker
      oldColor={this.state.cor}
      onColorSelected={color => {this.setState({cor:color});}}
      style={{flex: 1}}
    />
    </View>
    </Modal>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  icons:{
  paddingTop:8,  
  paddingLeft: 8,
  flex: 1,
  flexDirection: 'row',
  },

  image: {
    width: 24,
    height: 24
  },

  texto: {
    fontFamily: "Open Sans",
    fontSize:24,
    marginLeft: 10
  },

  logo: {
    flex: 2,
  },

  andares: {
    flex: 8,
    backgroundColor: '#FFF'
  },

  andar: {
    flex: 1
  },

  andar1: {
   padding: 10,
   borderWidth: 5,
   borderColor: '#ED8C03'
  },

    andar2: {
   padding: 10,
   borderWidth: 5,
   borderColor: '#ED8C03'  
  },

    jardim: {
   padding: 10,
   borderWidth: 5,
   borderColor: '#ED8C03'
  },

   buttom: {
    color: "#ED8C03",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "System"
   }
 });

