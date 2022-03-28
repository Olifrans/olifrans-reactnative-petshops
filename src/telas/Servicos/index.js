import React from "react";
import { SafeAreaView, StatusBar, Text, FlatList } from "react-native";
import Item from "./Item";

const servicos = [
  {
    id: 1,
    nome: "Banho e Tosa",
    preco: 120.99,
    descricao:
      "O banho e tosa são alguns dos cuidados que estão diretamente relacionados com o bem-estar do seu animal, por isso, é essencial que você mantenha a higiene do seu pet sempre em dia. Ao levar o seu pet ao banho e tosa, além de evitar odores, você garante que ele estará limpo e longe de pulgas, carrapatos e até mesmo de doenças de pele.",
  },
  {
    id: 2,
    nome: "Vacinas",
    preco: 320.99,
    descricao:
      "Vacinar o pet é essencial para que ele tenha uma vida longa e saudável e para isso, é necessário que a vacinação seja feita nos primeiros meses de vida do seu animalzinho, e mesmo adulto ele precisa continuar tomando o reforço anual de vacinas, assim você garante que seu amigo estará sempre protegido.",
  },
  {
    id: 3,
    nome: "Ortopédia",
    preco: 520.99,
    descricao:
      "As doenças ortopédicas acometem o sistema osteomuscular, como: ossos, músculos, tendões, ligamentos, e articulações. Alguns dos principais sinais de problemas ortopédicos nos animais são: dificuldades de locomoção, perda de apetite, dor ao se mover, relutância para se levantar ou deitar, dificuldades para urinar e/ou defecar.",
  },
  {
    id: 4,
    nome: "Cirurgia Veterinária Sspecializada",
    preco: 520.99,
    descricao:
      "A cirurgia veterinária especializada abrange uma ampla gama de patologias e pode compreender desde procedimentos mais simples aos mais complexos. Para a cirurgia veterinária especializada é necessário mobilizar uma equipe de médicos veterinários especializados e demais profissionais da clínica veterinária, aliando o conhecimento técnico-científico a um moderno centro cirúrgico.",
  },
];

export default function Servicos() {
  return;
  <SafeAreaView>
    <StatusBar />
    <Text>Serviços</Text>;
    <FlatList
      data={servicos}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={({ id }) => String(id)}
    />
  </SafeAreaView>;
}
