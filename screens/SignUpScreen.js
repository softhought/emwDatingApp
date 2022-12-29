import * as React from 'react';
import { TextInput, View, StyleSheet, ScrollView, SafeAreaView, Dimensions, Platform, Image, Pressable } from 'react-native';
import { Appbar, Text, HelperText, Paragraph, Button, SegmentedButtons, List, ActivityIndicator, Snackbar, TouchableRipple } from 'react-native-paper';

import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import SignUpLoveImage from '../assets/love_signup.png'

import DatePicker from 'react-native-date-picker'

// import TextInputMask from 'react-native-text-input-mask';

import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomeAutoComplete from '../component/CustomeAutoComplete';
import { useNavigation } from '@react-navigation/native';
import registrationService from '../services/registration.service'

import { javascriptDateToFormattedDate, curentDateTime, formDateToTime, validateInput } from '../constants/common'

import AsyncStorage from '@react-native-async-storage/async-storage';




Feather.loadFont()


const _goBack = () => console.log('Went back');

const _handleSearch = () => console.log('Searching');

const _handleMore = () => console.log('Shown more');




const SignUpScreen = () => {
    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = React.useState(null)

    const [visibleSnackBar, setVisibleSnackBar] = React.useState(false);

    const [isSignupLoaderEnable, setIsSignupLoaderEnable] = React.useState(false)

    const firstNameRef = React.useRef(null);

    const [firstName, setFirstName] = React.useState("")
    const [firstNameError, setFirstNameError] = React.useState("")
    const [isFirstNameErrorVisible, setIsFirstNameErrorVisible] = React.useState(false)


    const [middleName, setMiddleName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [genderValue, setGenderValue] = React.useState('M');

    const userNameRef = React.useRef(null);
    const [userName, setUserName] = React.useState("")
    const [userNameError, setUserNameError] = React.useState("")
    const [isUserNameErrorVisible, setIsUserNameErrorVisible] = React.useState(false)


    const [dateOfBirthValue, setDateOfBirthValue] = React.useState("")
    const [timeOfBirthValue, setTimeOfBirthValue] = React.useState("")

    const passwordRef = React.useRef(null);
    const [password, setPassword] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")
    const [isPasswordErrorVisible, setIsPasswordErrorVisible] = React.useState(false)

    const confirmPasswordRef = React.useRef(null);
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [confirmPasswordError, setConfirmPasswordError] = React.useState("")
    const [isConfirmPasswordErrorVisible, setIsConfirmPasswordErrorVisible] = React.useState(false)


    const [dateDOB, setDateOfBirth] = React.useState(new Date())
    const [isopenDOB, setIsOpenDOB] = React.useState(false)



    const [birthTime, setBirthTime] = React.useState(new Date())
    const [isBirthTimeOpen, setIsBirthTimeOpen] = React.useState(false)


    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);


    const getRandomId = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return (Math.floor(Math.random() *
            (max - min + 1)) + min).toString();
    };



    const onChangeFirstName = (firstName) => {
        setFirstNameError("")
        setIsFirstNameErrorVisible(false)
        setFirstName(firstName)

    };


    const onChangeUserName = (userName) => {
        setUserNameError("")
        setIsUserNameErrorVisible(false)
        setUserName(userName)
    };


    const onChangePassword = (password) => {
        setPasswordError("")
        setIsPasswordErrorVisible(false)
        setPassword(password)
    };

    const onChangeConfirmPassword = (confirmPassword) => {
        setConfirmPasswordError("")
        setIsConfirmPasswordErrorVisible(false)
        setConfirmPassword(confirmPassword)
    };



    const onRegistrationSave = async () => {

        setIsFirstNameErrorVisible(false)
        setIsUserNameErrorVisible(false)
        setIsPasswordErrorVisible(false)

        if (firstName.trim() == "") {
            setIsFirstNameErrorVisible(true)
            setFirstNameError("First name is required")
            firstNameRef.current.focus()
        }
        else if (userName.trim() == "") {
            setIsUserNameErrorVisible(true)
            setUserNameError("Email / Mobile is required")
            userNameRef.current.focus()
        }
        else if (password.trim() == "") {
            setIsPasswordErrorVisible(true)
            setPasswordError("Password is required")
            passwordRef.current.focus()
        }
        else if(password.trim() != confirmPassword.trim()) {
            setIsConfirmPasswordErrorVisible(true)
            setConfirmPasswordError("Password mismatch")
            confirmPasswordRef.current.focus()
        }



        else {
            setIsSignupLoaderEnable(true)

            const data = {
                user_id: getRandomId(1000, 1000000000),
                first_name: firstName,
                middle_name: middleName,
                last_name: lastName,
                gender: genderValue,
                user_name: userName,
                date_of_birth: dateOfBirthValue,
                date_of_time: timeOfBirthValue,
                password: password,
                user_city: '',
            };


            const user_check = {
                user_name: userName,
            };


            registrationService.checkDuplicateUser(user_check).then((resdata) => {

                if (resdata.body.result && resdata.body.result.length > 0) {
                    console.log("user already exist")
                    setIsSignupLoaderEnable(false)
                    setVisibleSnackBar(true)
                    return false;
                }
                else {
                    console.log("new entry")
                
                    const response = registrationService.signUpSave(data).then(async (resdata) => {
                        const userdata = resdata.body.result.response;
                        setIsSignupLoaderEnable(false)
                        if (userdata != null && userdata.user_id > 0) {
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
                                await AsyncStorage.setItem('nextstep', "gender_preference")
    
                                navigation.navigate("GenderInterest")
    
                            } catch (e) {
                                // saving error
                                console.log("Signup catch error ", e)
                            }
                        }
                    })
    
                      


                }

            })
        }









    };







    const onDateConfirm = (date) => {
        setIsOpenDOB(false)
        setDateOfBirth(date)
        setDateOfBirthValue(javascriptDateToFormattedDate(date, '/'))
    }



    const onBirthTimeConfirm = (time) => {
        setIsBirthTimeOpen(false)
        setBirthTime(time)
        setTimeOfBirthValue(formDateToTime(time))
    }


    React.useEffect(() => {

        async function nextScreen() {
            try {
                const nextstep = await AsyncStorage.getItem('nextstep');
                console.log("nextstep", nextstep)
                if (nextstep == "gender_preference") {
                    navigation.navigate("GenderInterest")
                }


            } catch (e) {
                // console.log("ag","skdhfjdsjhfghjsjf")
            }
        }

        nextScreen()

    }, [])

    const onDismissSnackBar = () => setVisibleSnackBar(false);

    return (


        <ScrollView style={signup_style.mainContainer} showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true} keyboardShouldPersistTaps='always'>

            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                {/* <Appbar.Content title="Create an account" /> */}

            </Appbar.Header>

            <View style={{ padding: 20 }}>
                {/* <View style={{marginBottom:20}}>
                    <Text variant="headlineSmall" style={{color:'#FA1774',fontWeight:'bold'}}>Create an account   </Text>
                </View> */}


                <View style={signup_style.signupImageContainer}>
                    <Image
                        style={signup_style.signupImage}
                        source={SignUpLoveImage}
                    />
                </View>
                <View style={{ marginBottom: 20, alignContent: 'center', alignItems: 'center' }}>
                    <Text variant="headlineSmall" style={{ color: '#09101D', fontWeight: 'bold' }}>Create an Account   </Text>
                </View>

                <View style={signup_style.inputContainer}>

                    <Text style={signup_style.inputLabel} >First Name</Text>
                    <TextInput style={signup_style.input} style={isFirstNameErrorVisible ? signup_style.inputError : signup_style.input} underlineColorAndroid="transparent" onChangeText={onChangeFirstName} ref={firstNameRef} />
                    {
                        isFirstNameErrorVisible ? <>
                            <HelperText type="error" visible={isFirstNameErrorVisible} style={{ color: '#F61C86', fontSize: 14 }}>
                                {firstNameError}
                            </HelperText>
                        </> : ''
                    }
                </View>

                <View style={signup_style.inputContainer}>
                    <Text style={signup_style.inputLabel}>Middle Name</Text>
                    <TextInput style={signup_style.input} onChangeText={(middlename) => setMiddleName(middlename)} />
                </View>

                <View style={signup_style.inputContainer}>
                    <Text style={signup_style.inputLabel}>Last Name</Text>
                    <TextInput style={signup_style.input} onChangeText={(lastname) => setLastName(lastname)} />

                </View>
                <View style={signup_style.inputContainer}>
                    <Text style={signup_style.inputLabel}>Gender</Text>
                    <List.Section >
                        <SegmentedButtons
                            value={genderValue}
                            onValueChange={setGenderValue}
                            density="low"
                            buttons={[
                                {
                                    value: 'M',
                                    icon: 'gender-male',
                                    label: 'Male',
                                    style: signup_style.segmentButton,
                                },
                                {
                                    value: 'F',
                                    icon: 'gender-female',
                                    label: 'Female',
                                    style: signup_style.segmentButton,
                                },
                                {
                                    value: 'O',
                                    icon: 'gender-male-female',
                                    label: 'Other',
                                    style: signup_style.segmentButton,
                                },
                            ]}
                            style={signup_style.segmentBtnGroup}
                        />
                    </List.Section>
                </View>

                <View style={signup_style.inputContainer}>
                    <Text style={signup_style.inputLabel}>Email/Mobile</Text>
                    <TextInput style={isUserNameErrorVisible ? signup_style.inputError : signup_style.input} onChangeText={onChangeUserName} ref={userNameRef} />


                    {
                        isUserNameErrorVisible ? <>
                            <HelperText type="error" visible={isUserNameErrorVisible} style={{ color: '#F61C86', fontSize: 14 }}>
                                {userNameError}
                            </HelperText>
                        </> : ''
                    }

                </View>

                <View style={signup_style.inputContainer}>
                    <Text style={signup_style.inputLabel}>Date of Birth</Text>


                    <Pressable onPress={() => setIsOpenDOB(true)} >
                        <View pointerEvents="none">
                            <TextInput style={signup_style.input} value={dateOfBirthValue} />
                        </View>
                    </Pressable>

                    <DatePicker
                        modal
                        title="Select DOB"
                        mode="date"
                        open={isopenDOB}
                        date={dateDOB}
                        confirmText="Ok"
                        onConfirm={(date) => onDateConfirm(date)}
                        cancelText="Cancel"
                        onCancel={() => {
                            setIsOpenDOB(false)
                        }}
                    />





                </View>
                <View style={signup_style.inputContainer}>
                    <Text style={signup_style.inputLabel}>Time of Birth</Text>

                    <Pressable onPress={() => setIsBirthTimeOpen(true)} >
                        <View pointerEvents="none">
                            <TextInput style={signup_style.input} value={timeOfBirthValue} />
                        </View>
                    </Pressable>

                    <DatePicker
                        modal
                        title="Select time"
                        mode="time"
                        open={isBirthTimeOpen}
                        date={birthTime}
                        confirmText="Ok"
                        onConfirm={(time) => onBirthTimeConfirm(time)}
                        cancelText="Cancel"
                        onCancel={() => {
                            setIsBirthTimeOpen(false)
                        }}
                    />


                </View>

                <View style={signup_style.inputContainer}>
                    <Text style={signup_style.inputLabel}>Password</Text>
                    <TextInput style={isPasswordErrorVisible ? signup_style.inputError : signup_style.input} secureTextEntry onChangeText={onChangePassword} ref={passwordRef} />


                    {
                        isPasswordErrorVisible ? <>
                            <HelperText type="error" visible={isPasswordErrorVisible} style={{ color: '#F61C86', fontSize: 14 }}>
                                {passwordError}
                            </HelperText>
                        </> : ''
                    }

                </View>

                <View style={signup_style.inputContainer}>
                    <Text style={signup_style.inputLabel}>Confirm Password</Text>
                    <TextInput style={isConfirmPasswordErrorVisible ? signup_style.inputError : signup_style.input} secureTextEntry value={confirmPassword} onChangeText={onChangeConfirmPassword} ref={confirmPasswordRef} />

                    {
                        isConfirmPasswordErrorVisible ? <>
                            <HelperText type="error" visible={isConfirmPasswordErrorVisible} style={{ color: '#F61C86', fontSize: 14 }}>
                                {confirmPasswordError}
                            </HelperText>
                        </> : ''
                    }
                </View>

                <View style={signup_style.inputContainer}>
                    <Text style={signup_style.inputLabel}>Location</Text>

                    {/* <View style={signup_style.input}>
                        <CustomeAutoComplete />
                    </View> */}


                </View>

                <View style={{ marginTop: 20 }}>

                    {
                        !isSignupLoaderEnable ? <>


                            <TouchableRipple
                                onPress={onRegistrationSave}
                                rippleColor="rgba(0, 0, 0, .2)"
                                
                            >
                                <Button icon="chevron-right" buttonColor="#f81f88" textColor='#fff' mode="contained"  contentStyle={signup_style.flexReverse} 
                                 >Continue</Button>
                            </TouchableRipple>



                        </> : <>
                            <ActivityIndicator size={40} animating={true} color="#f81f88" />
                        </>
                    }



                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
                    <Text style={{ fontSize: 16 }}>
                        <Text>Already have an account . </Text>
                        <Text style={{ color: '#E61778', fontWeight: 'bold', marginLeft: 4, marginBottom: 8 }} onPress={() => navigation.navigate("Login")}> Sign In </Text>
                    </Text>
                </View>


                <View style={{
                    flex: 1,
                    justifyContent: 'space-between',

                }}>
                    <Snackbar
                        style={{
                            backgroundColor: '#4C4C4C'
                        }}
                        visible={visibleSnackBar}
                        onDismiss={onDismissSnackBar}
                        action={{
                            label: 'OK',
                            onPress: () => {
                                setVisibleSnackBar(!visibleSnackBar)
                            },
                        }}>
                        Email/Mobile already exist.Try different
                    </Snackbar>
                </View>


            </View>

        </ScrollView>
    );
}



export default SignUpScreen

const signup_style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    flexReverse: {
        flexDirection: 'row-reverse',
    },
    signupImageContainer: {
        alignContent: 'center',
        alignItems: 'center',

    },
    signupImage: {
        width: 200,
        height: 200

    },
    inputContainer: {
        marginBottom: 10,
        borderRadius: 4,
        overflow: 'hidden',

    },
    inputLabel: {
        fontSize: 16,
        color: '#5D5C5D',
        fontWeight: '600',
        marginTop: 8,
        marginBottom: 8,
    },
    input: {
        borderRadius: 12,
        backgroundColor: '#fff',
        borderWidth: 1,
        height: 50,
        overflow: 'hidden',
        borderColor: '#D8D8D8',
        //borderBottomColor: '#DDDDDD',
        paddingLeft: 20

    },

    inputError: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#FF84BF',
        paddingLeft: 20

    },
    segmentButton: {
        flex: 1,
        borderRadius: 4,
        margin: 4,
        // backgroundColor:'#F0F0F0',
        borderColor: 'transparent'
    },
    segmentBtnGroup: { paddingHorizontal: 0, justifyContent: 'center' },
    autocompleteContainer: {
        flex: 1,
        // left: 0,
        // position: 'absolute',
        // right: 0,
        // top: 0,
        zIndex: 1
    }
});