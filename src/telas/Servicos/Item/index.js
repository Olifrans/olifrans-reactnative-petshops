import React, { useState } from "react";
import { Text, View } from "react-native";
import Botao from "../../../componentes/Botao";
import CampoInteiro from "../../../componentes/CampoInteiro";
import estilos from "./estilos";

export default function Item({ nome, preco, descricao }) {

  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(0);

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  };

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preco);
  };

  return;
  <>
    <View style={estilos.informacao}>
      <Text style={estilos.nome}>{nome}</Text>
      <Text style={estilos.descricao}>{descricao}</Text>

      <Text style={estilos.preco}>
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(preco)}
      </Text>
    </View>

    <View style={estilos.carrinho}>
      <View>
        <View style={estilos.valor}>
          <Text style={estilos.descricao}>Quantidade</Text>

          <CampoInteiro
            style={estilos.quantidade}
            valor={quantidade}
            acao={atualizaQuantidadeTotal}
          />
        </View>

        <View style={estilos.valor}>
          <Text style={estilos.descricao}>Preço:</Text>
          <Text style={estilos.preco}>0</Text>
        </View>
      </View>

      <Botao valor="Adcionar" acao={() => {}} />
    </View>
    <View style={estilos.divisor} />
  </>;
}
