import React, { Fragment } from "react";
import { View, FlatList, Text, TouchableOpacity, ScrollView } from "react-native";
import QuotationsItem from "./QuotationsItem/index";
import styles from "./styles";

export default function QuotationsList(props) {
  const daysQuery = props.filterDay;
  return (
    <Fragment>
      <View style={styles.filters}>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(7)}
        >
          <Text style={styles.textestylo}>7D</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(15)}
        >
          <Text style={styles.textestylo}>15D</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(30)}
        >
          <Text style={styles.textestylo}>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(90)}
        >
          <Text style={styles.textestylo}>3M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(180)}
        >
          <Text style={styles.textestylo}>6M</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.listQuotationBitcoins}>
        <FlatList
          data={props.listTransactions}
          renderItem={({ item }) => {
            return <QuotationsItem valor={item.valor} data={item.data} />;
          }}
        />
      </ScrollView>
    </Fragment>
  );
}
