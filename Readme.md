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


