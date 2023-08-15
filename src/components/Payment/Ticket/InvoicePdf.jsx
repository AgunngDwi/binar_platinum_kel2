import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 60,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
});

const InvoicePdf = ({ dataInvoice }) => {
  const formatDate = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const dateOrder = formatDate(dataInvoice?.updatedAt);
  const image = dataInvoice?.slip;

  console.log(image);

  console.log("invoice", dataInvoice);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>Invoice</Text>
          <Text style={styles.text}>
            Invoice Number: BCR/{dataInvoice?.id}/INV/2023
          </Text>
          <Text style={styles.text}>User: {dataInvoice?.User?.email}</Text>
          <Text style={styles.text}>Date: {dateOrder}</Text>
          <Text style={styles.text}>
            Total Amount: {dataInvoice?.total_price}
          </Text>
          <Image source={{ uri: image }} />
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePdf;
