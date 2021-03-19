import React from "react";
import { ScrollView, FlatList } from "react-native";
import CotacaoDiaria from "../CardCotacaoDiaria/index";
import styles from "./styles";
import { useFetch } from "../../hooks/useFetch";

//insert zero to the left
function addZero(number) {
  if (number <= 9) {
    return "0" + number;
  }
  return number;
}

const date = new Date();
const listLastDays = 10;

//Date formatting to get API
const end_date = `${date.getFullYear()}-${addZero(
  date.getMonth() + 1
)}-${addZero(date.getDate())}`;
date.setDate(date.getDate() - listLastDays);
const start_date = `${date.getFullYear()}-${addZero(
  date.getMonth() + 1
)}-${addZero(date.getDate())}`;

//URL  GET API
const urlBase = `https://api.coindesk.com/v1/bpi/historical/close.json?`;
const param = `start=${start_date}&end=${end_date}`;

export default function CardCotacoes() {
  const { data } = useFetch(`${urlBase + param}`);

  if (data) {
    const queryCoinsList = Object.keys(data).map((key) => {
      return {
        data: key,
        valor: data[key],
      };
    });

    return (
      <ScrollView style={styles.headerCard}>
        <FlatList
          renderItem={({ item }) => (
            <CotacaoDiaria valor={item.valor} data={item.data} />
          )}
          data={queryCoinsList}
        />
      </ScrollView>
    );
  }
}
