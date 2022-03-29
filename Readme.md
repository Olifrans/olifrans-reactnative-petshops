# instalação da lib
$ npm i intl

import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
usar formatos de moedas

exemplo:
<Text style={estilos.preco}>
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(preco)}
      </Text>






Versões utilizadas
PRÓXIMA ATIVIDADE

Para evitar incompatibilidades com versões mais recentes, siga as instruções de instalação do próximo vídeo, porém especificando a versão das bibliotecas:

npm install @react-navigation/native@5.9.2
npm install @react-navigation/bottom-tabs@5.11.7

# React Navigation

https://reactnavigation.org/docs/getting-started/

npm install @react-navigation/native


Falta instalar

Installing dependencies into an Expo managed project​
In your project directory, run:
expo install react-native-screens react-native-safe-area-context


Tab navigation
npm install @react-navigation/bottom-tabs