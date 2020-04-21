import React from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as appAction from "../../../actions";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {appAction} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.containerTouchableOpacity}
          onPress={() => {
            appAction.logOut();
            appAction.pushToParticularScreen("Login");
          }}>
          <Text>LogOut</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps() {
  return {};
}
let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerTouchableOpacity: {
    padding: 20,
    backgroundColor: "red",
  },
});
const mapDispatchToProps = dispatch => ({
  appAction: bindActionCreators(appAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard);
