import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react'
import { View, Image, ImageSourcePropType, TouchableOpacity, StatusBar, Modal } from 'react-native'
import { shape, string, number } from 'prop-types'
import { Appbar, Button, Surface, Text, Chip, Badge, IconButton, MD3Colors, Card, Title, Paragraph } from 'react-native-paper'
import styles from './Card.styles'

//import ProfileI from '../../assets/austin-wade-ex6qfO4TPMY-unsplash.jpg'
// import { IconButton } from '../../components'
import LinearGradient from 'react-native-linear-gradient';

// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";



const MatchCard = ({ card }) => {


  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    console.log("fasdf");
    setModalVisible(!modalVisible)
  }
  return (

    <View>



      <View
        style={styles.card}
      >
        <Image
          style={styles.image}
          source={{ uri: card.photo }}
          resizeMode="cover"
        />
        {/* <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>
        {`${card.name}, ${card.age}`}

      </Text>
    </View> */}




        <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>

          <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={["black", "transparent"]} style={{ paddingBottom: '2%' }} >

            <View style={{ padding: 20 }}>


              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Button icon="information" mode="outlined" onPress={() => toggleModal()} style={{ width: 'auto' }} textColor="#EBF20E">
                  About
                </Button>
              </View>
              <View>
                <Text>
                  <Text variant="headlineMedium" style={{ color: '#ffffff', fontWeight: 'bold' }}>  {`${card.name},`}</Text>
                  <Text variant="headlineMedium" style={{ color: '#ffffff', fontWeight: '500' }}>   {`${card.age}`}</Text>
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <Chip
                  mode="outlined"
                  compact
                  textStyle={{ color: 'white' }}
                  onPress={() => { }}
                  style={styles.chip}
                  showSelectedOverlay={false}>
                  Dancing
                </Chip>

                <Chip
                  mode="outlined"
                  compact
                  textStyle={{ color: 'white' }}
                  onPress={() => { }}
                  style={styles.chip}
                  showSelectedOverlay={false}>
                  Gaming
                </Chip>
              </View>
              <View style={styles.buttonsContainer}>

                <IconButton
                  icon="close"
                  iconColor="#FF252E"
                  size={30}
                  onPress={() => console.log('Pressed1')}
                  mode='outlined'
                  style={{ borderColor: '#FF252E', borderWidth: 2 }}
                />

                <IconButton
                  icon="star"
                  iconColor="#00D450"
                  size={30}
                  onPress={() => console.log('Pressed2')}
                  mode='outlined'
                  style={{ borderColor: '#00D450', borderWidth: 2 }}
                />

                <IconButton
                  icon="heart"
                  iconColor="#FF1C7C"
                  size={30}
                  onPress={() => console.log('Pressed3')}
                  mode='outlined'
                  style={{ borderColor: '#FF1C7C', borderWidth: 2 }}
                />

                {/* <IconButton
              name="close"
              // onPress={handleOnSwipedLeft}
              color="white"
              backgroundColor="#E5566D"
            />
            <IconButton
              name="star"
              // onPress={handleOnSwipedTop}
              color="white"
              backgroundColor="transparent"

            />
            <IconButton
              name="heart"
              // onPress={handleOnSwipedRight}
              color="white"
              backgroundColor="#4CCC93"
            /> */}
              </View>



            </View>
          </LinearGradient>
        </View>






      </View>




      {/* <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            toggleModal()
          }}
          style={{ height: 400 }}
        >
          <View>
            <Appbar.Header>
              <Appbar.BackAction onPress={() => { }} />
              <Appbar.Content title="Aleksander Borzenets"  />
            </Appbar.Header>


            <Card>
      
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
            </Card>

          </View>
        </Modal>
      </View> */}




    </View>
  )
}

MatchCard.propTypes = {
  card: shape({
    photo: string,
    name: string,
    age: number,
  }).isRequired,
}

export default MatchCard
