import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import Botao from "../../../componentes/Botao";
import CampoInteiro from "../../../componentes/CampoInteiro";
import estilos from "./estilos";

export default function Item({ nome, preco, descricao }) {
  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(preco);

  const [expandir, setExpandir] = useState(false);

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  };

  const inverteExpandir = () => {
    setExpandir(!expandir);
    atualizaQuantidadeTotal(1);
  };

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preco);
  };

  return;
  <>
    <TouchableOpacity onPress={inverteExpandir} style={estilos.informacao}>
      <Text style={estilos.nome}>{nome}</Text>
      <Text style={estilos.descricao}>{descricao}</Text>

      <Text style={estilos.preco}>
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(preco)}
      </Text>
    </TouchableOpacity>

    {expandir && (
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
            <Text style={estilos.descricao}>Total:</Text>

            <Text style={estilos.preco}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(total)}
            </Text>
          </View>
        </View>

        <Botao valor="Adcionar ao Carrinho" acao={() => {}} />
      </View>
    )}
    <View style={estilos.divisor} />
  </>;
}
