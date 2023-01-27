import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "./src/styles/style";

import ButtonFinish from "./src/components/ButtonFinish";
import ButtonCancel from "./src/components/ButtonCancel";

export default function App() {

// Consumo da API para importação dos pedidos a serem preparados
  const [task, setTask] = useState([]);

  useEffect(() => {
    setInterval(() => {
      console.log("Atualizar Lista")
      listTasks();
    }, 1500);
  }, [])

  const listTasks = () => {
    fetch("http://localhost:3000/listartarefas")
    .then((response) => { return response.json() })
    .then((data) => { 
      setTask(data);
    })
  } 


// Função para finalizar pedido
  const finishTask = (id) => {
    // console.log(clientOrder);
    const data = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id_tarefa: id }),
    }

    fetch("http://localhost:3000/finalizartarefa", data)
      .then((response) => response.status)
      .then((resp) => {
        if (resp === 200) {
          console.log("Pedido Enviado");
          listTasks();
        }else {
          console.log(resp.status);
        }
      })
  }

// Função para finalizar pedido
  const cancelTask = (id) => {
    // console.log(clientOrder);
    const data = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id_tarefa: id }),
    }

    fetch("http://localhost:3000/cancelartarefas", data)
      .then((response) => response.status)
      .then((resp) => {
        if (resp === 200) {
          console.log("Pedido Enviado");
          listTasks();
        }else {
          console.log(resp.status);
        }
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pedidos a Preparar</Text>
      </View>

      {task.map((toDo, index) => {
        return (
          <View style={styles.boxOrder} key={index}>
            <Text style={styles.orderData}>Tarefa nº: {toDo.id_tarefa}</Text>
            <Text style={styles.orderData}>Descrição: {toDo.descricao}</Text>
            <Text style={styles.orderData}>Horário de Início: {toDo.hora_inicio}</Text>
            <Text style={styles.orderData}>Horário de Término: {toDo.hora_fim}</Text>
            <Text style={styles.orderData}>Status: {toDo.situacao}</Text>

            <ButtonFinish
              value="Finalizar"
              onPress={ () => { finishTask(toDo.id_tarefa) } }>
            </ButtonFinish>
            <ButtonCancel
              value="Cancelar"
              onPress={ () => { cancelTask(toDo.id_tarefa) } }>
            </ButtonCancel>
          </View>
        );
      })}
    </View>
  );
}