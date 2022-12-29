import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: 'space-between',
     
    
  },
  swiperContainer: {
    height: height ,
    width:'100%',
   
    
  },
  buttonsContainer: {
    flex:1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    padding:20
   
  },
  copyright: {
    textAlign: 'left',
    fontSize: 14,
    padding: 20,
    fontFamily: 'Avenir',
  },
  overlayWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 0,
    marginLeft: 0,
  },
})
