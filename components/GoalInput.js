// import React, { useState } from "react";
// import { View, TextInput, Button } from "react-native";
// const GoalInput = (props) => {
//   const [enteredGoalText, setEnteredGoalText] = useState("");

//   const goalInputHandler = (enteredText) => {
//     //사용자가 내용을 입력할 때 해당 입력(체인지가발생할때마다)값을 가져오는 함수
//     //console.log(enteredText);
//     setEnteredGoalText(enteredText); //변화가있을때마다 값을 바꿔주겠다~
//   };

//   function addGoalHandler() {
//     props.onAddGoal(enteredGoalText); //부모가 넘겨준 onAddGoal을 호출하면서 enteredGoalText를전달하겠다 라는 것이다.
//     setEnteredGoalText("");
//   }

//   return (
//     <Modal visible={props.visible} animationType="slide">
//       <View style={styles.inputContainer}>
//         <Image style={styles.image} source={require("../assets/goal.png")} />

//         <TextInput
//           style={styles.textInput}
//           placeholder="할 일을 입력하세요!"
//           onChangeText={goalInputHandler}
//           value={enteredGoalText}
//         />
//         <View style={styles.buttonContainer}>
//           <View style={styles.button}>
//             <Button
//               title="할 일 추가하기"
//               onPress={addGoalHandler}
//               color="#b180f0"
//             />
//           </View>
//           <View style={styles.button}>
//             <Button title="취소" onPress={props.onCancel} color="#f31282" />
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default GoalInput;

// const styles = StyleSheet.creat({
//   inputContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "#311b6",
//   },
//   image: {
//     width: 100,
//     height: 100,
//     margin: 20,
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: "#cccccc",
//     width: "100%",
//     padding: 8,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     marginTop: 16,
//   },
//   button: {
//     //버튼을감싸고있는 View에다가 줌
//     width: "30%",
//     marginHorizontal: 8,
//   },
// });
import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  //사용자가 내용을 입력할 때 해당 입력값을 가져오는 함수
  const goalInputHandler = (enteredText) => {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/choonsik.gif")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="할 일을 입력하세요!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="할 일 추가하기"
              onPress={addGoalHandler}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button title="취소" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
