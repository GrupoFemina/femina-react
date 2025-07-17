const data = {
  lists: {
    "estoque_coluna_001": "ESTOQUE",
    "683615767be3d4dd7675250e": "CADASTROS - EXTERNAS",
    "683616ef6cc0c8d06e9b1dcc": "ADMINISTRATIVO",
    "683615767be3d4dd7675250f": "FORÇA DE VENDAS",
    "683615767be3d4dd7675250d": "ATENDIMENTO - LOJA"
  },
  cards: [
    {
      name: "CADASTRO NOVO",
      desc: "<strong>Ativação:</strong> Via pedido.\n<strong>Pagamento:</strong> Boleto 3x.\n<strong>Entrega:</strong> endereço do RE.",
      idList: "683615767be3d4dd7675250e"
    },
    {
      name: "TRANSFERÊNCIA DE CADASTRO - ACOLHIMENTO",
      desc: "<strong>ATIVAÇÃO:</strong> Pedido em Anexo\n<strong>FORMA DE PAGAMENTO:</strong> Boleto 3x\n<strong>ENTREGA:</strong> No endereço do RE\n<strong>CUPOM:</strong> Inserir cupom vigente",
      idList: "683615767be3d4dd7675250e"
    },
    {
      name: "REATIVAÇÃO - CESSADO",
      desc: "<strong>ATIVAÇÃO:</strong> Pedido em Anexo\n<strong>FORMA DE PAGAMENTO:</strong> Boleto 3x \n<strong>ENTREGA:</strong> No endereço do RE\n<strong>CUPOM:</strong> Inserir cupom vigente",
      idList: "683615767be3d4dd7675250e"
    },
    {
      name: "LIBERAR CADASTRO - AUTOATENDIMENTO",
      desc: "<strong>Liberação de cadastro</strong> para o RE realizar compras em loja ou no APP.<br><br><strong>STATUS:</strong> [NOVO - CESSADO - TRANSFERÊNCIA]<br><strong>PAGAMENTO:</strong> Boleto 3x.",
      idList: "683615767be3d4dd7675250e"
    },
    {
      name: "AUTO REATIVAÇÃO",
      desc: "<strong>RE realizou pedido pelo APP ou em Loja</strong>\n\n<strong>Nº PEDIDO:</strong> XXX.XXX.XXX\n<strong>Ranking:</strong> Adicionar ao ciclo XX",
      idList: "683615767be3d4dd7675250e"
    },
    {
      name: "PEDIDO COM RETIRADA AGENDADA",
      desc: "<strong>Nº PEDIDO:</strong> [XXX]\n<strong>CÓD. REV.:</strong> [CÓD + NOME RE]\n<strong>DATA RETIRAR:</strong> [pedido + 2 dias úteis]",
      idList: "estoque_coluna_001"
    },
    {
      name: "OCORRÊNCIA DE PRODUTO",
      desc: "<strong>CÓD. PRODUTO1:</strong>\n<strong>CÓD. PRODUTO2:</strong>\n<strong>CÓD. PRODUTO3:</strong>",
      idList: "estoque_coluna_001"
    },
    {
      name: "CANCELAMENTO DE PEDIDO",
      desc: "<strong>CÓD/NOME:</strong>\n<strong>N° DO PEDIDO:</strong>\n<strong>MOTIVO:</strong>\n<strong>ANEXAR OS PRINTS DA SOLICITAÇÃO:</strong> (conversa com RE, entre outros)\n\n@‌mencionar gerente adm @‌marcar gerente loja @‌mencionar gerente estoque",
      idList: "estoque_coluna_001"
    },
    {
      name: "CARTA DE CORREÇÃO",
      desc: "Solicito Carta de Correção de Endereço para o pedido, conforme os dados:\n<strong>CÓD/NOME:</strong>\n<strong>N° DO PEDIDO:</strong>\n<strong>MOTIVO:</strong> (Descrever o motivo com clareza)\n<em>Exemplo: O RE informou um endereço incorreto e solicitou a alteração para o endereço do trabalho.</em>\n\n*Print da conversa com o RE solicitando a alteração;\n*Comprovante do endereço atualizado;\n*Print da alteração do endereço no sistema GERA",
      idList: "estoque_coluna_001"
    },
    {
      name: "TRANSFERÊNCIA DE VD - DOCUMENTAÇÃO NECESSÁRIA",
      desc: "Foto do documento (RG/CNH) frente e verso,\n\nSelfie com o documento junto.\n\nComprovante de endereço atualizado e em seu nome, (caso não tenha, enviar foto do titular junto com o comprovante).\n\nCarta a próprio punho informando que está residindo no endereço atual.\n\n<strong>*ENVIAR A DOCUMENTAÇÃO PARA O E-MAIL:</strong><br>Joinville: admjoinville@grupofemina.com.br<br>Florianópolis: admflorianopolis@grupofemina.com.br<br>Rio do Sul: admriodosul@grupofemina.com.br",
      idList: "683616ef6cc0c8d06e9b1dcc"
    },
    {
      name: "TRANSFERIDO",
      desc: "Olá,\n\nInformamos que seu endereço foi atualizado com sucesso. Agora, o próximo passo é entrar em contato com a VD+ (Venda Direta) da sua localidade para realizar o desbloqueio e a atualização completa do seu cadastro como Revendedor(a) O Boticário.\n\nEnquanto isso, seu cadastro ficará bloqueado temporariamente até que essa etapa seja concluída.\n\nAgradecemos pela parceria até aqui e boas vendas. 💜\n\n<strong>Atenciosamente,</strong>",
      idList: "683616ef6cc0c8d06e9b1dcc"
    },
    {
      name: "CARTA DE AUTODECLARAÇÃO DE ENDEREÇO",
      desc: "<em>\"Eu, [Seu Nome Completo], portador do RG nº [Seu RG] e CPF nº [Seu CPF], declaro, que resido atualmente no endereço residencial:</em><br><br>Rua: [Nome da Rua]<br>Número: [Número da Casa/Apartamento]<br>Bairro: [Nome do Bairro]<br>Cidade: [Nome da Cidade]<br>CEP: [CEP]<br><br>Declaro, prestadas são verdadeiras.<br><br>Assinatura: _______________________________",
      idList: "683616ef6cc0c8d06e9b1dcc"
    },
    {
      name: "CAR - ATENDIMENTO",
      desc: "<strong>Central de Atendimento ao Revendedor</strong><br>Atendimento de segunda a sexta, das 8h às 20h.<br>Sábado, das 9h às 16h.<br><br><strong>Whatsapp:</strong> (41) 8735-7095<br><strong>Telefone:</strong> 0800-729-9050<br><em>Ligação gratuita de qualquer lugar do país tanto de telefone fixo quanto de celular.</em>",
      idList: "683616ef6cc0c8d06e9b1dcc"
    },
    {
      name: "PEDIDO À VISTA - C.I",
      desc: "<strong>CP:</strong> [ 20573 - 24125 - 23341 ]<br><strong>FORMA DE PAGAMENTO:</strong> PIX ou CARTÃO DE CRÉDITO 3X<br><strong>IR:</strong> [ CÓD + NOME ]<br><strong>PEDIDO:</strong> XXX.XXX.XXX<br><strong>VALOR:</strong> R$<br><strong>ENTREGA OU RETIRADA:</strong>",
      idList: "683616ef6cc0c8d06e9b1dcc"
    },
    {
      name: "ATENDIMENTO - RE ATIVO",
      desc: "<strong>CÓD RE + NOME:</strong>\n<strong>DESCRIÇÃO DO ATENDIMENTO:</strong> Descrever a necessidade do RE.\n<strong>PROMOTORA:</strong> @marcar Alocação na Rede",
      idList: "683615767be3d4dd7675250f"
    },
    {
      name: "CADASTRO REVENDEDOR - IR (INTENÇÃO DE REVENDA)",
      desc: "<strong>NOME COMPLETO:</strong>\n<strong>CPF:</strong>\n<strong>BAIRRO:</strong>\n<strong>TELEFONE:</strong>",
      idList: "683615767be3d4dd7675250f"
    },
    {
      name: "ATENDIMENTO - REATIVAÇÃO",
      desc: "<strong>CÓD RE + NOME:</strong>\n<strong>CPF:</strong>\n<strong>FONE:</strong>\n<strong>DESCRIÇÃO DO ATENDIMENTO:</strong> Descrever a necessidade do RE.",
      idList: "683615767be3d4dd7675250f"
    },
    {
      name: "IDENTIFICAÇÃO PARA COMPRAR",
      desc: "Informamos que, para a realização de compras no Espaço do Revendedor, é obrigatória a apresentação de um documento oficial com foto no caixa.\n\nEssa medida visa garantir a segurança, a identificação correta do revendedor e a integridade do processo de atendimento.\n\nAgradecemos a compreensão e colaboração 💜",
      idList: "683615767be3d4dd7675250d"
    },
    {
      name: "ARMÁRIO - GUARDA VOLUME",
      desc: "Para segurança e organização, não é permitido entrar na loja com bolsas ou mochilas.\n\nDisponibilizamos guarda-volumes com chave para guardar seus pertences com segurança.\n\nSempre que possível, venha com o mínimo de itens pessoais.\n\nAgradecemos a compreensão. 💜",
      idList: "683615767be3d4dd7675250d"
    },
    {
      name: "ACESSO RESTRITO",
      desc: "Para garantir a segurança, organização e qualidade no atendimento, informamos que o acesso ao Espaço do Revendedor (Loja) é exclusivo para revendedores cadastrados.\n\nNão é permitido o ingresso de acompanhantes ou terceiros durante as compras.\n\nContamos com a compreensão e colaboração de todos para mantermos um ambiente adequado e eficiente para nossos parceiros de negócios.\n\nGratidão 💜",
      idList: "683615767be3d4dd7675250d"
    }
  ]
};
export default data;