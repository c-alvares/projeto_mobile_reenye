import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./src/styles/style";

// import ButtonFinish from "./src/components/ButtonFinish";
// import ButtonCancel from "./src/components/ButtonCancel";
import ButtonSubmit from "./src/components/ButtonSubmit";

export default function App() {

  // Recebimento dos dados inseridos nos inputs e cadastro de nova tarefa
  const [description, setDescription] = useState([]);
  const [time, setTime] = useState([]);

  const submitTask = (data1, data2) => {

    

  }


  // Consumo da API para importação dos pedidos a serem preparados
  const [task, setTask] = useState([]);

  useEffect(() => {
    // setInterval(() => {
    //   console.log("Atualizar Lista")
    //   listTasks();
    // }, 1500);
    listTasks();
  }, [])

  const listTasks = () => {
    fetch("http://localhost:3000/listartarefas")
      .then((response) => { return response.json() })
      .then((data) => {
        setTask(data);
      })
  }



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todas as tarefas</Text>
      </View>
      <View>
        <TextInput style={styles.subscribeInput}
          onChangeText={setDescription}
          placeholder="Descrição"
          placeholderTextColor="#E4DDB3">
        </TextInput>
        <TextInput style={styles.subscribeInput}
          onChangeText={setTime}
          placeholder="Horário de Início"
          placeholderTextColor="#E4DDB3">
        </TextInput>
        <ButtonSubmit
          value="Cadastrar Nova Tarefa"
          onPress={() => { submitTask(description, time) }}>
        </ButtonSubmit>
      </View>
      {task.map((toDo, index) => {
        return (
          <View style={styles.boxOrder} key={index}>
            <Text style={styles.orderData}>Tarefa nº: {toDo.id_tarefa}</Text>
            <Text style={styles.orderData}>Descrição: {toDo.descricao}</Text>
            <Text style={styles.orderData}>Horário de Início: {toDo.hora_inicio}</Text>
            <Text style={styles.orderData}>Horário de Término: {toDo.hora_fim}</Text>
            <Text style={styles.orderData}>Status: {toDo.situacao}</Text>

            {/* <ButtonFinish
              value="Finalizar"
              onPress={ () => { finishTask(toDo.id_tarefa) } }>
            </ButtonFinish>
            <ButtonCancel
              value="Cancelar"
              onPress={ () => { cancelTask(toDo.id_tarefa) } }>
            </ButtonCancel> */}
          </View>
        );
      })}
    </View>
  );
}