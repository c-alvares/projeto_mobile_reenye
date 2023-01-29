import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "../styles/style";

export default function FinishedTasks() {

// Consumo da API para importação das tarefas finalizadas
  const [task, setTask] = useState([]);

  useEffect(() => {
    setInterval(() => {
      console.log("Atualizar Lista")
      listTasks();
    }, 1500);
  }, [])

  const listTasks = () => {
    fetch("http://localhost:3000/tarefasfinalizadas")
    .then((response) => { return response.json() })
    .then((data) => { 
      setTask(data);
    })
  } 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tarefas Finalizadas</Text>
      </View>

      {task.map((toDo, index) => {
        return (
          <View style={styles.boxOrder} key={index}>
            <Text style={styles.orderData}>Tarefa nº: {toDo.id_tarefa}</Text>
            <Text style={styles.orderData}>Descrição: {toDo.descricao}</Text>
            <Text style={styles.orderData}>Horário de Início: {toDo.hora_inicio}</Text>
            <Text style={styles.orderData}>Horário de Término: {toDo.hora_fim}</Text>
            <Text style={styles.orderData}>Status: {toDo.situacao}</Text>
          </View>
        );
      })}
    </View>
  );
}