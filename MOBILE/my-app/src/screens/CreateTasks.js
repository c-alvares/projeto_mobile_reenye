import * as React from "react";
import { useState } from "react";
import { View, Text, TextInput } from "react-native";

import styles from "../styles/style";

import ButtonSubmit from "../components/ButtonSubmit";

export default function CreateTasks() {

  // Recebimento dos dados inseridos nos inputs e cadastro de nova tarefa
  const [description, setDescription] = useState([]);
  const [time, setTime] = useState([]);

  const submitTask = () => {
    // console.log(data1, data2)
    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          descricao: description,
          hora_inicio: time
        })
    }
    fetch("http://localhost:3000/criartarefa", data)
      .then((response) => response.status)
      .then((resp) => {
        if (resp === 200) {
          console.log("Pedido Cadastrado");
          location.reload();
        } else {
          console.log(resp.status)
        }
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Criar Nova Tarefa</Text>
      </View>
      <View>
        <TextInput style={styles.subscribeInput}
          onChangeText={(value) => { setDescription(value) }}
          placeholder="Descrição"
          placeholderTextColor="#E4DDB3">
        </TextInput>
        <TextInput style={styles.subscribeInput}
          onChangeText={(value) => { setTime(value) }}
          placeholder="Horário de Início"
          placeholderTextColor="#E4DDB3">
        </TextInput>
        <ButtonSubmit
          value="Cadastrar Nova Tarefa"
          onPress={() => { submitTask() }}>
        </ButtonSubmit>
      </View>
    </View>
  );
}