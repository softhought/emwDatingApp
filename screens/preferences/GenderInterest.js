import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, Text, RadioButton, Button , ProgressBar, MD3Colors } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import registrationService from '../../services/registration.service';

const GenderInterest = () => {

    const navigation = useNavigation();
    const [value, setValue] = React.useState('M');
    const [isSignupLoaderEnable, setIsSignupLoaderEnable] = React.useState(false)
    const [registerUserID, setRegisterUserID] = React.useState('')


    const onGenderPreferenseSave = async () => {
        setIsSignupLoaderEnable(true)
        const data = {
            user_id:registerUserID,
            updateKey: "gender",
            updateValue: value,
        };

    const response = registrationService.updateSingleValue(data).then(async (resdata) => {
        const responsedata = resdata;
        console.log("trsnjdjgj",responsedata.body.result)

        if(responsedata.body.result.operation == "UPDATE"){
            try {
                await AsyncStorage.setItem('nextstep', "location_preference")
                navigation.navigate("LocationPreference")
                } catch (e) {
                    console.log("Gender preference  error ",e)
                }
        }
        else{
            console.log("there is some error");
        }


    // setIsSignupLoaderEnable(false)
    //     if(userdata != null && userdata.user_id > 0) {
    //         try {
                
              
            
    //             await AsyncStorage.setItem('nextstep', "location_preference")

    //             navigation.navigate("GenderInterest")

    //         } catch (e) {
    //           console.log("Signup catch error ",e)
    //         }
    //     }

        
       
        
      

})

};


React.useEffect(()=>{

    async function nextScreen() {
        try{
            const nextstep = await AsyncStorage.getItem('nextstep');
            console.log("nextstep",nextstep)
            if(nextstep == "location_preference") {
                navigation.navigate("LocationPreference")  
            }
            
           
        } catch(e) {
           // console.log("ag","skdhfjdsjhfghjsjf")
        }
    }

    nextScreen()
    
},[])


React.useEffect(()=>{
    console.log("dsdfds")
    async function getUserInfo() {
        try{
            const accountuserinfo = await AsyncStorage.getItem('accountuserinfo').then((user)=>{
                console.log("Userid",JSON.parse(user).user_id)
                setRegisterUserID(JSON.parse(user).user_id)
            })
            
            
        } catch(e) {
           // console.log("ag","skdhfjdsjhfghjsjf")
        }
    }

    getUserInfo()
    
},[registerUserID])

    return (
        <View style={gender_preference_style.mainContainer}>
            <View>
                <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                    <Appbar.BackAction onPress={() => navigation.goBack()}/>
                    {/* <Appbar.Content title="Gender Preference (Steps 1/3)" /> */}
                </Appbar.Header>
            </View>
            
            <View style={gender_preference_style.preference_display_container}>
                <Text variant="displayLarge" style={gender_preference_style.preference_headeing_text, { color: '#f81f88' }}>You are</Text>
                <Text variant="displayLarge" style={gender_preference_style.preference_headeing_text}>interested in</Text>
            </View>
            <View style={gender_preference_style.preference_display_container}>
                <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    <RadioButton.Item label="Male" value="M" />
                    <RadioButton.Item label="Female" value="F" />
                    <RadioButton.Item label="Other" value="O" />
                </RadioButton.Group>
            </View>


            <View style={{ flex: 1, justifyContent: 'flex-end', margin: 20 }}>

                <Button icon="chevron-right" buttonColor="#f81f88" mode="contained" contentStyle={gender_preference_style.flexReverse} onPress={onGenderPreferenseSave}>
                    Next
                </Button>

            </View>



        </View>
    )
}

export default GenderInterest


const gender_preference_style = StyleSheet.create({
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

});