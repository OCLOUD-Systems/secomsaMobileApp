import {
  BottomSheetModal,
  BottomSheetView
} from "@gorhom/bottom-sheet";
import React, { useCallback, useRef } from "react";
import { StyleSheet, Text } from "react-native";

const ModalResponse = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: "center",
      backgroundColor: "grey",
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
    },
  });

  // renders
  return (
    // <GestureHandlerRootView style={styles.container}>
    //   <BottomSheetModalProvider>
    //     <Button
    //       onPress={handlePresentModalPress}
    //       title="Present Modal"
    //       color="black"
    //     />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheetModal>
    //   </BottomSheetModalProvider>
    // </GestureHandlerRootView>
  );
};

export default ModalResponse;
