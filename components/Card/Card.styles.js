import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  card: {
   
    marginTop:-70,
    height:height-100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    shadowOpacity: 0.1,
    elevation: 4,
    marginLeft:-20,
    marginRight:-20
  },
  image: {
    // borderRadius: 0,
    // flex: 1,
    // width: '100%',
    
    flex: 1,
    width: '100%',
    height: '100%',
   

  },
  photoDescriptionContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    position: 'absolute',
    left: 20,
    top: 20,
    padding:0,
    margin:0,
    width:'100%'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Avenir',
    textShadowColor: 'black',
    textShadowRadius: 10,
  },
  buttonsContainer: {
    flex:1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    justifyContent: 'space-evenly',
    paddingBottom:0
   
  },
  chip: {
    margin: 4,
    borderRadius:20,
    backgroundColor:'transparent',
  },
})
