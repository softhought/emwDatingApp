import React, { useEffect, useRef ,useCallback ,useMemo, useState} from 'react'
import { Modal, ScrollView, View } from 'react-native'
import { Appbar, Button, Surface, Text } from 'react-native-paper'
import Swiper from 'react-native-deck-swiper'
// import { photoCards } from '../../../constants/photoCards'
import { MatchCard, IconButton, OverlayLabel } from '../../../components'
import styles from './App.styles'
import { useNavigation } from '@react-navigation/native'

// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
// import { CardStyleInterpolators } from '@react-navigation/stack'



const photoCards = [
  {
    name: 'Austin Wade',
    age: 22,
    photo: 'https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    key: 'caseex6qfO4TPMYyhorner',
  },
  {
    name: 'Aleksander Borzenets',
    age: 28,
    photo: 'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    key: 'ozda-XbeP0k',
  },
  {
    name: 'Don Delfin Espino',
    age: 29,
    photo: 'https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    key: 'nBywXevf_jE-',
  }


];

const Dashboard = () => {

   
  const sheetRef = useRef(null);
  const [isOpen,setIsOpen] = useState(false);
  // const [modalVisible,setModalVisible] = useState(false);


 // const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);
  const snapPoints = ["40%"];




  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    alert("afsd")
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);



  const useSwiper = useRef(null).current

  const navigation = useNavigation();
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  const handleOnSwipedLeft = () => {
    console.log("SwipedLeft")
    useSwiper.swipeLeft()
  }
  const handleOnSwipedTop = () => useSwiper.swipeTop()
  const handleOnSwipedRight = () => useSwiper.swipeRight()

  useEffect(() => {
    console.log("gdsfgdfg");
  }, [useSwiper]);


  // const toggleModal = () => {
  //   setModalVisible(true)
  // }

  return (

    <View>

      <View>
        <Appbar.Header style={{ backgroundColor: 'white', padding: 20 }} elevated="2">
          <Appbar.Content title={<Text variant="displaySmall" style={{ fontWeight: 'bold', color: '#f81f88' }}>emw</Text>} />
          <Appbar.Action icon="bell" iconColor='#f81f88' onPress={_handleMore} />
        </Appbar.Header>
      </View>



      <View>
        <View style={styles.swiperContainer}>
          <Swiper
            ref={useSwiper}
            animateCardOpacity
            containerStyle={styles.container}
            cards={photoCards}
            renderCard={card => <MatchCard card={card} />}
            cardIndex={0}
            onSwipedLeft={() => handleOnSwipedLeft}
            stackSize={2}
            //onTapCard={(index)=>toggleModal({photo:photoCards[index].photo, name:photoCards[index].name})}
            infinite
            showSecondCard
            animateOverlayLabelsOpacity
            overlayLabels={{
              left: {
                title: 'NOPE',
                element: <OverlayLabel label="NOPE" color="#E5566D" />,
                style: {
                  wrapper: styles.overlayWrapper,
                },
              },
              right: {
                title: 'LIKE',
                element: <OverlayLabel label="LIKE" color="#4CCC93" />,
                style: {
                  wrapper: {
                    ...styles.overlayWrapper,
                    alignItems: 'flex-start',
                    marginLeft: 30,
                  },
                },
              },
            }}
          />
           
           


          

        </View>


      </View>


{/* 
      <View style={{paddingTop: 200}}>
      
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <BottomSheetView>
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
      </BottomSheet>
    </View> */}



    {/* <View>
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
          toggleModal(!modalVisible)
      }}
      
      style={{height:'50%'}}
      
      >
      <View style={{marginTop: 22}}>
        <View>
          <Text>Hello World!</Text>
          
        </View>
      </View>
    </Modal>
    </View> */}

      
  
    </View>
  )
}

export default Dashboard
