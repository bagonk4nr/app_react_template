import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
  bodyimages: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover'
  },
  rheadercorners: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 50,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    width: 'auto',
    height: 150,
    marginTop: '15%',
    marginLeft: '2%',
    marginRight: '2%'
  },
  rbodycorners: {
    backgroundColor: '#fff',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 50,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    width: 'auto',
    height: 'auto',
    marginTop: '2%',
    marginLeft: '2%',
    marginRight: '2%'
  },
  imgavatar: {
    textAlignVertical: 'middle',
    width: 75,
    height: 75,
    borderRadius: '50%'
  },
  dropbtn: {
    backgroundColor: '#4CAF50',
    color: 'white',
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    fontSize: 16,
    borderWidth: 0,
    borderColor: 'black',
    borderStyle: 'solid',
    cursor: 'pointer'
  },
  modal: {
    display: 'none',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  'modal-content': {
    backgroundColor: '#fefefe',
    marginTop: '15%',
    marginRight: 'auto',
    marginBottom: '15%',
    marginLeft: 'auto',
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#888',
    borderStyle: 'solid',
    width: '80%'
  },
  close: {
    color: '#aaa',
    float: 'right',
    fontSize: 28,
    fontWeight: 'bold'
  }
}
);
