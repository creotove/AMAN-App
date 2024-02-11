import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// marginHorizontal: spacer,
// Width: respWidth

let spacer = wp(7);
let respWidth = wp(86);

let homepage = StyleSheet.create({
  recentContainer: {
    width: wp(100),
    marginHorizontal: spacer,
    paddingVertical: hp(1),
  },
  imageLinkContainer: {
    width: respWidth,
    height: hp(13),
    marginHorizontal: spacer,
    marginBottom: hp(2),
  },
  imageLinks: {
    width: '100%',
    height: hp(13),
  },
});

let soldCustomer = StyleSheet.create({
  recentContainer: {
    width: wp(100),
    marginHorizontal: spacer,
    paddingVertical: hp(1),
  },
});

let stitchCustomer = StyleSheet.create({
  recentContainer: {
    width: wp(100),
    marginHorizontal: spacer,
    paddingVertical: hp(1),
  },
});

let recentCustomer = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: hp(2),
    flexDirection: 'row',
    paddingVertical: hp(1.5),
    width: respWidth,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: hp(1),
  },
  userDetail: {
    flexDirection: 'row',
  },
  userDetailImage: {
    height: hp(6),
    width: hp(6),
    borderRadius: 50,
  },
  userDetailContent: {
    marginHorizontal: hp(1.5),
  },
});

let universal = StyleSheet.create({
  main: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    width: wp(100),
    paddingTop: hp(1),
    paddingBottom: hp(1),
  },
  searchContainer: {
    position: 'relative',
  },
  searchBar: {
    backgroundColor: 'white',
    marginHorizontal: spacer,
    marginVertical: hp(2.5),
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
    paddingHorizontal: wp(3),
    color: 'black',
    fontSize: hp(2),
  },
  searchBtn: {
    position: 'absolute',
    right: wp(9),
    top: hp(3),
    backgroundColor: '#F2F2F2',
    padding: hp(0.7),
    borderRadius: 50,
  },
  insideHeader: {
    height: hp(7),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacer,
    borderBottomColor: '#D2D2D2',
    borderBottomWidth: 1,
  },
  flex1: {
    flex: 1,
  },
  flex3: {
    flex: 3,
  },
  flex2: {
    flex: 2,
  },
  innerPageBtn: {
    backgroundColor: 'black',
    height: hp(7),
    width: hp(7),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp(3),
    right: hp(3),
  },
  innerPageBtn2: {
    backgroundColor: 'black',
    height: hp(7),
    width: hp(7),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp(1.5),
    right: hp(1.5),
  },
  innerPageBtn3: {
    backgroundColor: 'black',
    height: hp(7),
    width: hp(7),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonConatiner: {
    alignItems: 'center',
    marginVertical: hp(3),
  },
  themeButton: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp(2),
    width: wp(50),
    borderRadius: 10,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

let forms = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: spacer,
    paddingVertical: hp(3),
  },
  inputContainer: {
    marginBottom: hp(1.5),
  },
  textInput: {
    backgroundColor: 'white',
    marginVertical: hp(1),
    borderWidth: 1,
    borderColor: '#d2d2d2',
    borderRadius: 5,
    elevation: 2,
    paddingHorizontal: wp(3),
    color: 'black',
    fontSize: hp(2),
  },
  inputWithBtn: {
    flexDirection: 'row',
  },
  textInput2: {
    backgroundColor: 'white',
    marginVertical: hp(1),
    borderWidth: 1,
    borderColor: '#d2d2d2',
    borderRadius: 5,
    elevation: 2,
    paddingHorizontal: wp(3),
    color: 'black',
    fontSize: hp(2),
    flex: 3,
  },
  inputButton: {
    flex: 1,
    marginVertical: hp(1),
    borderRadius: 5,
    backgroundColor: 'black',
    justifyContent: 'center',
    marginLeft: hp(1),
    alignItems: 'center',
  },
  pillsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: hp(1),
    borderRadius: 5,
    paddingHorizontal: wp(3),
    marginLeft: hp(1),
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 2,
    flexWrap: 'wrap',
  },
  pills: {
    backgroundColor: 'black',
    borderRadius: 50,
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(3),
    marginHorizontal: wp(1),
    marginVertical: hp(1),
    flexDirection: 'row',
    gap: wp(2),
    alignItems: 'center',

  },
  closeBtnContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: hp(0.5),
    paddingHorizontal: hp(1),
  },
  closeBtn: {
    color: 'black',
    textAlign: 'center',
  },
});

const dropdown = StyleSheet.create({
  dropdown: {
    backgroundColor: 'white',
    fontSize: hp(2),
    marginVertical: hp(1),
    paddingVertical: hp(1),
    borderColor: '#d2d2d2',
    borderWidth: 1,
    borderRadius: 5,
    elevation: 2,
    color: 'black',
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: hp(2),
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: hp(2),
    color: 'black',
  },
});

let seperator = StyleSheet.create({
  seperatorContainer: {
    width: respWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seperator: {
    flex: 1,
    height: hp(0.2),
    backgroundColor: 'black',
  },
});

let profile = StyleSheet.create({
  titleContainer: {
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'black',
    fontSize: hp(4),
    fontWeight: '700',
    paddingVertical: hp(2),
  },
  linkContainer: {
    marginHorizontal: spacer,
    width: respWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: wp(3),
    paddingHorizontal: wp(4),
    borderRadius: 15,
    elevation: 0.9,
    marginBottom: hp(2),
  },
  linkText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  svgStyle: {
    marginRight: wp(4),
  },
});
let customer = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: wp(7),
    width: wp(86),
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    alignItems: 'center',
    elevation: 1,
    marginBottom: hp(1),
    position: 'relative',
    zIndex: 1,
  },
});

export {
  homepage,
  recentCustomer,
  universal,
  soldCustomer,
  stitchCustomer,
  forms,
  dropdown,
  seperator,
  profile,
  customer,
};
