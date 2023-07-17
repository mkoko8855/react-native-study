// import { useState } from "react";
// import {
//   Button,
//   FlatList,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from "react-native";

// import GoalItem from "./components/GoalItem";
// import GoalInput from "./components/GoalInput";
// import { StatusBar } from "expo-status-bar";

// export default function App() {
//   const [modalIsVisible, setModalIsVisible] = useState(false);

//   const [todoGoals, setTodoGoals] = useState("");

//   //할 일 추가 모달을 띄워주는 함수
//   const startAddGoalHandler = () => {
//     setModalIsVisible(ture);
//   };

//   const endAddGoalHandler = () => {
//     setModalIsVisible(false);
//   };

//   const addGoalHandler = (enteredGoalText) => {
//     //버튼을 누르면 할 일 목록을 추가하는 함수
//     //console.log(enteredGoalText);

//     //useState로 관리하는 상태 변수의 setter 안에 콜백 함수를 작성하면,
//     //그 콜백 함수의 매개값은 항상 해당 상태 변수의 최신 값이 전달된다.
//     setTodoGoals((currentTodoGoals) => [
//       ...currentTodoGoals,
//       { text: enteredGoalText, key: Math.random().toString() },
//     ]); //디스트럭쳐링방법으로하면편하다~ 기존todo에 내용들을 유지하면서해줌. 그러나 이것만으론 부족함. 제대로 실행안됨
//     endAddGoalHandler();
//   };

//   const deleteGoalHandler = (id) => {
//     setTodoGoals((currentTodoGoals) => {
//       //매개값 하나면 괄호안써도됨. 위는 괄호연거임.
//       return currentTodoGoals.filter((goal) => goal.id !== id);
//     });
//   };

//   return (
//     <>
//       <StatusBar style="light" />
//       <View style={styles.appContainer}>
//         <Button
//           title="할 일 추가하기!"
//           color="#520acc"
//           onPress={startAddGoalHandler}
//         />
//         <GoalInput
//           visible={modalIsVisible}
//           onAddGoal={addGoalHandler}
//           onCancel={endAddGoalHandler}
//         />
//         <View style={styles.goalsContainer}>
//           {/*참고로 FlatList는 위 객체의 key값을 따로 아래서안적어도 알아서해줌*/}
//           <FlatList
//             data={todoGoals}
//             renderItem={(itemData) => {
//               {
//                 /*이 item쪽으로 오는 항목들을 todoGoals의 개수만큼 반복하자*/
//               }
//               return (
//                 <GoalItem
//                   text={itemData.item.text}
//                   id={itemData.item.id}
//                   onDeleteitem={deleteGoalHandler}
//                 />
//               );
//             }}
//             keyExtractor={(item, index) => {
//               {
//                 /*그리고 직접 키도 뽑을수있음 keyExractor을이용하자. 함수형태로전달하면됨. 이제이제 리턴되는 item의 key를 키로 활용하게된다. index로 구분하면돼!*/
//               }
//               return item.key;
//             }}
//             alwaysBounceVertical={false}
//           >
//             {/*스크롤뷰는 전체 화면이 렌더링 될 때 안의 항목들을 전부 렌더링한다. 이로 인해 성능 저하가 생김.*/}
//           </FlatList>
//         </View>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 16,
//   },

//   goalsContainer: {
//     flex: 4,
//   },
// });
import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [todoGoals, setTodoGoals] = useState([]);

  //할 일 추가 모달을 띄워주는 함수
  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  //버튼을 누르면 할 일 목록을 추가하는 함수
  const addGoalHandler = (enteredGoalText) => {
    //useState로 관리하는 상태 변수의 setter 안에 콜백 함수를 작성하면,
    //그 콜백 함수의 매개값은 항상 해당 상태 변수의 최신 값이 전달됩니다.

    //useState로 관리하는 상태 변수의 세터(메서드)안에 콜백 함수를 작성하면,
    //그 콜백 함수의 매개값은 항상 해당 상태 변수의 최신 값이 전달된다.
    setTodoGoals((currentTodoGoals) => [
      ...currentTodoGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setTodoGoals((currentTodoGoals) => {
      return currentTodoGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="할 일 추가하기!"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {/* ScrollView는 전체 화면이 렌더링 될 때 안의 항목들을 전부 렌더링합니다.
            이로 인해, 성능의 저하가 발생할 수 있습니다.
            (보이지 않는 영역까지 렌더링을 진행하기 때문에 목록이 많다면 로딩이 길어짐.) 
            FlatList는 보이는 영역만 일단 렌더링을 진행하고, 나머지 항목들은
            스크롤 움직임이 발생하면 렌더링을 진행합니다. */}
          <FlatList
            data={todoGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              // console.log("item: ", item);
              // console.log("index: ", index);
              return item.id;
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
