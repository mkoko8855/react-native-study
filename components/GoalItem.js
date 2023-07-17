// import { Pressable, StyleSheet, Text, View } from "react-native";

// const GoalItem = (props) => {
//   return (
//     //react-native는 스타일 상속의 개념이 없습니다.
//     //bind()는 표준 자바스크립트 함수로, 나중에 실행할 함수를 미리 조정할 수 있게 한다.
//     //첫번째 인수는 곧 실행할 함수의 this 키워드로 설정되고, 두 번째 인수는 지정한 함수에 전달할 값을 세팅하면 된다. this는 ondeleteitem이고 함수 호출하면서 전달할 값은 id가 된다 라고 해석하면된다

//     <View style={styles.goalItem}>
//       <Pressable
//         android_ripple={{ color: "#210644" }}
//         onPress={props.onDeleteItem.bind(this, props.id)}
//         style={(pressData) => pressData.pressed && styles.pressedItem}
//       >
//         {/*하나의 할일 목록 View는*/}
//         <Text style={styles.goalText}>{props.text}</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default GoalItem;

// const styles = StyleSheet.create({
//   goalItem: {
//     margin: 8,
//     borderRadius: 6,
//     backgroundColor: "#5e0acc",
//   },
//   pressedItem: {
//     opacity: 0.5,
//   },
//   goalText: {
//     color: "white",
//     padding: 8,
//   },
// });
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    //react-native는 스타일 상속의 개념이 없다.
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={(pressData) => pressData.pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
