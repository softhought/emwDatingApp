import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput, Avatar, Button, Card, Title, Paragraph, Divider, Surface, TouchableRipple, HelperText , Snackbar, ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


import WelcomeImage from '../assets/login_bg.png'
import registrationService from '../services/registration.service';
import { ScrollView } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get("window")


const LoginScreen = () => {
  const navigation = useNavigation();

  const [visibleSnackBar, setVisibleSnackBar] = React.useState(false);


  const [username, setUsername] = React.useState("");
  const [userNameErrorVisible, setUserNameErrorVisible] = React.useState(false);
  const [userNameError, setUserNameError] = React.useState("");

  const [password, setPassword] = React.useState("");
  const [passwordErrorVisible, setPasswordErrorVisible] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState("");

  const [isLoginLoaderEnable, setIsLoginLoaderEnable] = React.useState(false)



  const checkLogin = async () => {



    if(username.trim() ==""){
      setUserNameErrorVisible(true)
      setUserNameError("Username is required")
    }

    else if(password.trim() ==""){
      setPasswordErrorVisible(true)
      setPasswordError("Password is required")
    }
    else{

      setIsLoginLoaderEnable(true)
      const data = {
        user_name: username,
        password: password,
      };
  
  
      const response = registrationService.checkLogin(data).then(async (resdata) => {
        const logindata = resdata;
  
        if(resdata.body.result.length > 0) {
          const userdata = resdata.body.result;
  
          if (userdata[0] != null && userdata[0].user_id > 0) {

            try {
  
                const userStoreData = {
                    user_id: userdata.user_id,
                    user_name: userdata.user_name,
                    first_name: userdata.first_name,
                    gender: userdata.gender
                }
                const jsonValue = JSON.stringify(userStoreData)
                await AsyncStorage.removeItem('accountuserinfo');
                await AsyncStorage.setItem('accountuserinfo', jsonValue)
                await AsyncStorage.setItem('nextstep', "dashboard")

                navigation.navigate("BottomNav")
  
            } catch (e) {
                // saving error
              //  console.log("Login catch error ", e)
            }
        }
        else{
            //console.log("test 03333",userdata[0])
        }
  
  
        }
        else{
          setVisibleSnackBar(true)
        }
        setIsLoginLoaderEnable(false)
        
       })
    }





  };



  const onChangeUserName = (username) => {
    setUserNameError("")
    setUserNameErrorVisible(false)
    setUsername(username)
  };


  const onChangePassword = (password) => {
    setPasswordError("")
    setPasswordErrorVisible(false)
    setPassword(password)
  };

  const onDismissSnackBar = () => setVisibleSnackBar(false);

  return (
    
    <View style={{ flex: 1 }}>
      <View style={{
        flex: 1, justifyContent: 'center',
        alignItems: 'center', backgroundColor: '#FF2D70'
      }}>
        <Image source={WelcomeImage} style={login_styles.logo} />

      </View>
      <View style={{ flex: 1, backgroundColor: '#FF2D70',   padding: 10 }}>
        <Card borderRadius={90} mode="contained" style={{ backgroundColor: 'transparent' }} >
          {/* <Card.Title title="Getting Started" variant="bodyMedium" /> */}
          <Card.Content>
            <Text variant="bodyMedium" style={{ fontSize: 20, color: '#FFF', marginBottom: 10, fontWeight: 'bold' }} >Getting Started</Text>
            <View style={login_styles.inputContainer}>
              <TextInput
                label="Username"
                mode="flat"
                value={username}
                onChangeText={onChangeUserName}
                
                left={<TextInput.Icon icon="account-outline" iconColor='#FF4C85' />}
                style={login_styles.input}
              />
              {
                userNameErrorVisible ? <><HelperText type="error" visible={userNameErrorVisible} style={{color:'white',fontSize:14}}>
                {userNameError}
              </HelperText></> : ''
              }
              
            </View>
            <View style={login_styles.inputContainer}>
              <TextInput
                label="Password"
                mode="flat"
                value={password}
                onChangeText={onChangePassword}
                left={<TextInput.Icon icon="lock-outline" iconColor='#FF4C85' />}
                secureTextEntry
                style={login_styles.input}
              />
              {
                passwordErrorVisible ? <>
                <HelperText type="error" visible={passwordErrorVisible} style={{color:'white',fontSize:14}}>
                {passwordError}
              </HelperText>
                </> : ''
              }
              
            </View>

          </Card.Content>
          <Card.Actions >

            {
              !isLoginLoaderEnable ? <>
              <TouchableRipple
              onPress={checkLogin}
              rippleColor="rgba(0, 0, 0, .2)"
            >
              <Button icon="chevron-right" buttonColor="#fff" textColor='#323232' mode="contained" contentStyle={login_styles.flexReverse} >Sign In</Button>
            </TouchableRipple>
            </> : <>
            <ActivityIndicator size={40} animating={true} color="white" />
            </>
            }
            

            

          </Card.Actions>
        </Card>





        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={login_styles.share_btn}>


            <TouchableRipple
              onPress={() => console.log('Pressed')}
              rippleColor="rgba(0, 0, 0, .32)"
            >
              <Button
                icon="facebook"
                onPress={() => {
                  console.log('clicked');
                }}
                style={{backgroundColor:'#FFF'}}
                textColor="grey"
              />
            </TouchableRipple>

          </View>
          <View style={login_styles.share_btn}>
            <TouchableRipple rippleColor="rgba(0, 0, 0, .32)">
              <Button
                icon="google"
                onPress={() => {
                  console.log('clicked');
                }}
                style={{backgroundColor:'#FFF'}}
                textColor="grey"
              />
            </TouchableRipple>

          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ margin: 8, fontSize: 16 }}>
            <Text style={{ color: '#fff' }}>Don't have an account ?</Text>
            <Text style={{ color: '#fff', fontWeight: 'bold', marginLeft: 4, marginBottom: 8 }} onPress={() => navigation.navigate("Signup")}> Register </Text>
          </Text>
        </View>



        <View style={{
                    flex: 1,
                    justifyContent: 'space-between',
                  
                }}>
                    <Snackbar
                       style={{
                        backgroundColor:'#4C4C4C'
                    }}
                        visible={visibleSnackBar}
                        onDismiss={onDismissSnackBar}
                        action={{
                            label: 'OK',
                            onPress: () => {
                                setVisibleSnackBar(!visibleSnackBar)
                            },
                        }}>
                        Username or password is not valid
                    </Snackbar>
                </View>


      </View>
    </View>
    

  )
}

export default LoginScreen



const login_styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  },
  logo: {
    maxWidth: width,
    maxHeight: '45%',
    marginTop:300
    
  },
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexReverse: {
    flexDirection: 'row-reverse',
  },
  inputContainer: {
    borderRadius: 6,
    // height: 55,
    // overflow: 'hidden',
    marginBottom: 16,

  
    
  },
  input: {
    borderRadius: 6,
    height: 57,
    overflow: 'hidden',
    backgroundColor:'#ECECEC'
  


  },
  share_btn: {
    // width: 40,
    // height: 40,

    // backgroundColor: '#FFF',
    margin: 4,
    borderRadius: 12,
    alignItems: 'center'


  },
});