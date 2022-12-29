import React, { useState } from 'react'
import { Appbar, Text, RadioButton, Button, ProgressBar, MD3Colors, TextInput, HelperText , IconButton, Surface} from 'react-native-paper'
import ImagePicker from 'react-native-image-crop-picker';
import { Image, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';



const ImagePreference = () => {
    const navigation = useNavigation();
    const [image1,setImage1] = useState(null);
    const [isImage1Selected,setIsImage1Selected] = useState(false);

    const [image2,setImage2] = useState(null);
    const [isImage2Selected,setIsImage2Selected] = useState(false);

    const [image3,setImage3] = useState(null);
    const [isImage3Selected,setIsImage3Selected] = useState(false);

    const chooseImage = (from) => {
        console.log("from",from)
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
           
            const imagePath = image.path;
            if(imagePath!=null && from == "IMAGE1") {
                setImage1(imagePath)
                setIsImage1Selected(true)
            }
            else if(imagePath!=null && from == "IMAGE2") {
                setImage2(imagePath)
                setIsImage2Selected(true)
            }
            else if(imagePath!=null && from == "IMAGE3") {
                setImage3(imagePath)
                setIsImage3Selected(true)
            }
          });
    }


    const deleteImage = (from) => {
        console.log("from",from)
        if(from=="IMAGE1"){
            setImage1(null)
            setIsImage1Selected(false)
        }
        else if(from=="IMAGE2"){
            setImage2(null)
            setIsImage2Selected(false)
        }
        else if(from=="IMAGE3"){
            setImage3(null)
            setIsImage3Selected(false)
        }
        
    }

  return (
    <View style={image_preference_style.mainContainer}>
            <View>
                <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    {/* <Appbar.Content title="Gender Preference (Steps 1/3)" /> */}
                </Appbar.Header>
            </View>


            <View style={image_preference_style.preference_display_container}>
                <View>
                    <Text variant="displayLarge" style={image_preference_style.preference_headeing_text, { color: '#f81f88' }}>Choose Your</Text>
                    <Text variant="displayLarge" style={image_preference_style.preference_headeing_text}>Images</Text>
                </View>
                <View style={{marginTop:30,flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                    
                    <View style={{marginTop:15,marginBottom:30}}>
                        <View>
                            { !isImage1Selected ? <>
                                <View style={{width:180,height:180,backgroundColor:'#f81f8830',borderRadius:14,justifyContent:'center',alignItems:'center'}}>
                                <IconButton
                                    icon="image-plus"
                                    iconColor='#f81f88'
                                    size={40}
                                    style={{
                                        backgroundColor:'white'
                                    }}
                                    centered={true}
                                    animated={true}
                                    onPress={()=>chooseImage('IMAGE1')}
                                />


                            </View>
                            </> : <>
                            <View style={{width:180,height:180,backgroundColor:'#f81f8830',borderRadius:14,}}>
                            
                                <Image source={image1 ? { uri: image1 } : null} style={{width:180,height:180,borderRadius:14}} />
                                <IconButton
                                    icon="delete"
                                    iconColor="white"
                                    size={15}
                                    style={{
                                        position:'absolute',
                                        top:0,
                                        right:0,
                                        backgroundColor:'#00000060'
                                    }}
                                    centered={true}
                                    animated={true}
                                    onPress={()=>deleteImage('IMAGE1')}
                                />
                                <IconButton
                                    icon="image-edit"
                                    iconColor='white'
                                    size={15}
                                    style={{
                                        position:'absolute',
                                        bottom:0,
                                        right:0,
                                        backgroundColor:'#00000060'
                                    }}
                                    centered={true}
                                    animated={true}
                                    onPress={()=>chooseImage('IMAGE1')}
                                />
                            </View>
                            </> }
                            
                            
                           
                            <Text variant="titleSmall">Profile Photo</Text>
                        </View>
                    </View>


                    




                 
                    <View style={{marginTop:15,marginBottom:30}}>
                        <View style={{width:180,height:180,backgroundColor:'#f81f8830',borderRadius:14,justifyContent:'center'}}>
                            {
                                !isImage2Selected ? <>
                                
                                <View style={{alignContent:'center',alignItems:'center'}}>
                                <IconButton
                                    icon="image-plus"
                                    iconColor='#f81f88'
                                    size={40}
                                    style={{
                                        backgroundColor:'white',
                                    }}
                                    centered={true}
                                    animated={true}
                                    onPress={() => console.log('Pressed')}
                                    onPress={()=>chooseImage('IMAGE2')}
                                />
                            </View>
                                
                                </> : <>
                                
                                <View style={{width:180,height:180,backgroundColor:'#f81f8830',borderRadius:14,}}>
                            
                                <Image source={image2 ? { uri: image2 } : null} style={{width:180,height:180,borderRadius:14}} />
                                <IconButton
                                    icon="delete"
                                    iconColor="white"
                                    size={15}
                                    style={{
                                        position:'absolute',
                                        top:0,
                                        right:0,
                                        backgroundColor:'#00000060'
                                    }}
                                    centered={true}
                                    animated={true}
                                    onPress={()=>deleteImage('IMAGE2')}
                                />
                                <IconButton
                                    icon="image-edit"
                                    iconColor='white'
                                    size={15}
                                    style={{
                                        position:'absolute',
                                        bottom:0,
                                        right:0,
                                        backgroundColor:'#00000060'
                                    }}
                                    centered={true}
                                    animated={true}
                                    onPress={()=>chooseImage('IMAGE2')}
                                />
                            </View>

                                </>
                            }
                            
                            
                        </View>
                        <Text variant="titleSmall">Full Image</Text>
                    </View>

                    <View style={{marginTop:0,marginBottom:30}}>
                        <View style={{width:180,height:180,backgroundColor:'#f81f8830',borderRadius:14,justifyContent:'center'}}>
                            {
                                !isImage3Selected ? <>
                                <View style={{alignContent:'center',alignItems:'center'}}>
                                <IconButton
                                    icon="image-plus"
                                    iconColor='#f81f88'
                                    size={40}
                                    style={{
                                        backgroundColor:'white',
                                    }}
                                    centered={true}
                                    animated={true}
                                    onPress={() => console.log('Pressed')}
                                    onPress={()=>chooseImage('IMAGE3')}
                                />
                            </View>
                                
                                </> : <>
                                
                                                                
                                <View style={{width:180,height:180,backgroundColor:'#f81f8830',borderRadius:14,}}>
                            
                                <Image source={image3 ? { uri: image3 } : null} style={{width:180,height:180,borderRadius:14}} />
                                <IconButton
                                    icon="delete"
                                    iconColor="white"
                                    size={15}
                                    style={{
                                        position:'absolute',
                                        top:0,
                                        right:0,
                                        backgroundColor:'#00000060'
                                    }}
                                    centered={true}
                                    animated={true}
                                    onPress={()=>deleteImage('IMAGE3')}
                                />
                                <IconButton
                                    icon="image-edit"
                                    iconColor='white'
                                    size={15}
                                    style={{
                                        position:'absolute',
                                        bottom:0,
                                        right:0,
                                        backgroundColor:'#00000060'
                                    }}
                                    centered={true}
                                    animated={true}
                                    onPress={()=>chooseImage('IMAGE3')}
                                />
                            </View>
                                </>
                            }
                            
                            
                        </View>
                        <Text variant="titleSmall">Activity</Text>
                    </View>

                </View>

            </View>

            
            <View style={{ flex: 1, justifyContent: 'flex-end', margin: 20 }}>

                <Button icon="chevron-right" buttonColor="#f81f88" mode="contained" contentStyle={image_preference_style.flexReverse} onPress={() => navigation.navigate("QuestionsPreference")}>
                    Next
                </Button>

            </View>



        </View>
  )
}

export default ImagePreference


const image_preference_style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    flexReverse: {
        flexDirection: 'row-reverse',
    },
    preference_display_container: {
        padding: 20
    },
    preference_headeing_text: {
        fontFamily: 'Montserrat-VariableFont_wght',
        fontWeight: '300'
    },
   
    bottomView: {

        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        // position: 'absolute',
        // bottom: 5,
        // right:0
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 3,
        backgroundColor:'red'
    },

});