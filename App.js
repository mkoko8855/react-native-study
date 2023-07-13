import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [todoGoals, setTodoGoals] = useState("");

  const goalInputHandler = (enteredText) => {
    //사용자가 내용을 입력할 때 해당 입력(체인지가발생할때마다)값을 가져오는 함수
    //console.log(enteredText);
    setEnteredGoalText(enteredText); //변화가있을때마다 값을 바꿔주겠다~
  };

  const addGoalHandler = () => {
    //버튼을 누르면 할 일 목록을 추가하는 함수
    //console.log(enteredGoalText);

    //useState로 관리하는 상태 변수의 setter 안에 콜백 함수를 작성하면,
    //그 콜백 함수의 매개값은 항상 해당 상태 변수의 최신 값이 전달된다.
    setTodoGoals((currentTodoGoals) => [
      ...currentTodoGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]); //디스트럭쳐링방법으로하면편하다~ 기존todo에 내용들을 유지하면서해줌. 그러나 이것만으론 부족함. 제대로 실행안됨
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="할 일을 입력하세요!"
          onChangeText={goalInputHandler}
        />
        <Button title="할 일 추가하기" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        {/*참고로 FlatList는 위 객체의 key값을 따로 아래서안적어도 알아서해줌*/}
        <FlatList
          data={todoGoals}
          renderItem={(itemData) => {
            {
              /*이 item쪽으로 오는 항목들을 todoGoals의 개수만큼 반복하자*/
            }
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            {
              /*그리고 직접 키도 뽑을수있음 keyExractor을이용하자. 함수형태로전달하면됨. 이제이제 리턴되는 item의 key를 키로 활용하게된다. index로 구분하면돼!*/
            }
            return item.key;
          }}
          alwaysBounceVertical={false}
        >
          {/*스크롤뷰는 전체 화면이 렌더링 될 때 안의 항목들을 전부 렌더링한다. 이로 인해 성능 저하가 생김.*/}
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "68%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
});
