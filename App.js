import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Title from "./src/components/Title";
import CurrentPrice from "./src/components/CurrentPrice";
import HistoryGraphic from "./src/components/HistoryGraphic";
import QuotationsList from "./src/components/QuotationsList";


//insert zero to the left
function addZero(number) {
  if (number <= 9) {
    return "0" + number;
  }
  return number;
}

//Date formatting to get API
function url(qtdDias) {
  const date = new Date();
  const listLastDays = qtdDias;
  const end_date = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1
  )}-${addZero(date.getDate())}`;
  date.setDate(date.getDate() - listLastDays);
  const start_date = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1
  )}-${addZero(date.getDate())}`;
  //URL  GET API
  const urlSearchCoins = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
  return urlSearchCoins;
}

async function getListCoins(url) {
  let response = await fetch(url);
  let retunrApi = await response.json();
  let selectListQuotations = retunrApi.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key],
    };
  });
  let data = queryCoinsList.reverse();
  return data;
}

async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;
  const queryCoinsListG = Object.keys(selectListQuotationsG).map((key) => {
    return selectListQuotationsG[key];
  });
  let dataG = queryCoinsListG;
  return dataG;
}




export default function App(props) {
  const [coinsList, setcoinsList] = useState([]);
  const [coinsGrafichList, setcoinsGrafichList] = useState([0]);
  const [days, setdays] = useState(30);
  const [updateData, setupdateData] = useState(true);

  function updateDay(number) {
    setdays(number);
    setupdateData(true);
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setcoinsList(data);
    });
    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setcoinsGrafichList(dataG);
    });
    if (updateData) {
      setupdateData(false);
    }
  }, [updateData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#f50d41"
      />
      <CurrentPrice />
      <HistoryGraphic infoDataGraphic={coinsGrafichList} />
      <QuotationsList filterDay={updateDay} listTransactions={coinsList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
