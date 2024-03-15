import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../Participant";

export default function Home() {
  const participants = [
    "Thayana",
    "Simone",
    "João",
    "Sade",
    "Paulo",
    "Stephanie",
    "Lucas",
    "André",
    "Mariana",
    "Luciana",
    "Jonas",
  ];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar");
  }

  function handleDeleteParticipant(name: string) {
    console.log(`Voce deletou o participante ${name}`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleDeleteParticipant("Simone")}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <Text style={styles.listEmpty}>
              Ainda não entrou ninguém, adicione um participante
            </Text>
          );
        }}
      />
    </View>
  );
}
