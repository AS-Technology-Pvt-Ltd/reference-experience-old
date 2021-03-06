/*
Name : Suraj Sanwal
File Name : login.js
Description : Contains login screen.
Date : 11 Dec 2018
*/

import React, {Component} from "react";
import {View, Text, StyleSheet, Platform, TouchableOpacity} from "react-native";

import _ from "lodash";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as appAction from "../../actions";
import FormTextInput from "../../components/Common/FormTextInput";
import {moderateScale} from "../../helpers/ResponsiveFonts";
import AuthButton from "../../components/Common/AuthButtonWeb/AuthButtonWeb";
import Constants from "../../constants";
import Regex from "../../helpers/Regex";
import LogoText from "../../components/Common/LogoText";
import DivContainer from "../../components/Common/DivContainer";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWide: false,
      email: "",
      password: "",
      deviceWidth: window.innerWidth,
    };
  }
  componentDidMount() {
    if (Platform.OS == "web") {
      window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    appAction.logOut();
  }
  updateDimensions() {
    // console.log("change event ", window.innerWidth);
    this.setState({deviceWidth: window.innerWidth});
  }
  /**
   * Remove event listener
   */
  componentWillUnmount() {
    if (Platform.OS == "web") {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
  }

  focusNext(next) {
    this[next].focus();
  }
  submitLogin = () => {
    let {appAction} = this.props;

    let {email, password} = this.state;
    // if (_.isEmpty(email.trim())) {
    //   // appAction.showToast(
    //   //   Constants.AppConstants.Notificaitons.Error,
    //   //   Constants.Strings.Common.EmptyEmailMsg
    //   // );
    //   return;
    // }

    // if (!Regex.validateEmail(email.trim())) {
    //   // appAction.showToast(
    //   //   Constants.AppConstants.Notificaitons.Error,
    //   //   Constants.Strings.Common.ValidEmailAddress
    //   // );
    //   return;
    // }
    // if (_.isEmpty(password.trim())) {
    //   // appAction.showToast(
    //   //   Constants.AppConstants.Notificaitons.Error,
    //   //   Constants.Strings.Common.EnterPassword
    //   // );
    //   return;
    // }
    appAction.loginUser();
    appAction.pushToParticularScreen("Dashboard");
  };

  onForgotPassword = () => {
    let {appAction, componentId} = this.props;
    // appAction.pushToParticularScreen(componentId, "ForgotPassword");
  };

  render() {
    let {deviceWidth} = this.state;
    return (
      <View>
        <DivContainer className={"loginTopText"}>
          <LogoText
            text={"ACT Home Health Services, Inc"}
            containerStyle={{marginTop: moderateScale(40)}}
          />
        </DivContainer>
        <DivContainer className={"formWidget"}>
          <View
            style={[
              Styles.formView,
              {
                ...Platform.select({
                  web: {
                    width: deviceWidth > 600 ? deviceWidth / 2 : deviceWidth,
                  },
                }),
              },
            ]}>
            <DivContainer
              className={"loginFormFrame"}
              styleApp={[Styles.styleAppContainer]}>
              <DivContainer
                styleWeb={Styles.FloatingInputContainer}
                styleApp={Styles.FloatingInputContainer}
                className={"formInput"}>
                <FormTextInput
                  image={Constants.Images.Email}
                  placeHolderText={"Username"}
                  onChangeText={email => {
                    this.setState({email});
                  }}
                  value={this.state.email}
                  keyboardType={"email-address"}
                  returnKeyType={"next"}
                  autoCapitalize={"none"}
                  ref={ref => (this.email = ref)}
                  onSubmitEditing={() => {
                    this.focusNext("password");
                  }}
                />
                <FormTextInput
                  image={Constants.Images.Password}
                  placeHolderText={"Password"}
                  onChangeText={password => {
                    this.setState({password});
                  }}
                  value={this.state.password}
                  returnKey="done"
                  onSubmitEditing={() => {
                    this.submitLogin();
                  }}
                  autoCapitalize={"none"}
                  secureText
                  ref={ref => (this.password = ref)}
                />
              </DivContainer>
            </DivContainer>

            {/* <DivContainer
              styleWeb={[Styles.AuthButton]}
              styleApp={[Styles.AuthButton]}
              className={"webButtonFrame"}
            >
              <AuthButton
                buttonName={"Log In"}
                gradientColors={Constants.Colors.ButtonGradients}
                textStyle={{ color: "#fff" }}
                onPress={this.submitLogin}
              />
            </DivContainer> */}
            <View style={Styles.forgotView}>
              <TouchableOpacity>
                <Text
                  className="forgotPass"
                  style={Styles.forgotText}
                  onPress={this.submitLogin}>
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.forgotView}>
              <TouchableOpacity>
                <Text
                  className="forgotPass"
                  style={Styles.forgotText}
                  onPress={this.onForgotPassword}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </DivContainer>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  styleAppContainer: {flex: 0.2, top: moderateScale(25)},
  containner: {
    alignItems: "center",
  },
  formView: {
    ...Platform.select({
      ios: {
        height: Constants.BaseStyle.DEVICE_HEIGHT * 0.7,
        justifyContent: "space-evenly",
        width: Constants.BaseStyle.DEVICE_WIDTH,
      },
      android: {
        height: Constants.BaseStyle.DEVICE_HEIGHT * 0.7,
        width: Constants.BaseStyle.DEVICE_WIDTH,
        justifyContent: "space-evenly",
      },
    }),
    overflow: "hidden",
  },
  FloatingInputContainer: {
    paddingHorizontal: moderateScale(25),
    justifyContent: "center",
    ...Platform.select({
      ios: {
        flex: 0.5,
      },
      android: {
        flex: 0.5,
      },
    }),
  },
  AuthButton: {
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        flex: 0.25,
      },
      android: {
        flex: 0.25,
      },
    }),
  },
  forgotView: {
    justifyContent: "flex-start",
    alignItems: "center",
    ...Platform.select({
      ios: {
        flex: 0.25,
      },
      android: {
        flex: 0.25,
      },
      web: {
        marginTop: "10",
        marginBottom: "20",
      },
    }),
  },
  forgotText: {
    ...Constants.Fonts.Regular,
    fontSize: moderateScale(16),
    color: Constants.Colors.Secondary,
  },
  gradientStyle: {borderRadius: 0},
});

const mapStateToProps = state => ({
  user: state.user,
  app: state.app,
});
const mapDispatchToProps = dispatch => ({
  appAction: bindActionCreators(appAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
