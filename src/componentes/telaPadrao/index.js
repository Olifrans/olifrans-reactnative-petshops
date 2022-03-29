import React from "react";

import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import estiloGlobal from "../../estilos";

export default function TelaPadrao({ children }) {
  return;

  <SafeAreaView style={estiloGlobal.preencher}>
    <StatusBar />
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={estiloGlobal.preencher}
    >
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>;
}
