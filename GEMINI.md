
# ════════════════════════════════════════════════
# REGRAS GLOBAIS — PLATAFORMA DE ESTUDOS
# ════════════════════════════════════════════════

## EXECUÇÃO DIRETA (PROIBIDO CÓDIGO SOLTO NO CHAT)
NUNCA entregue blocos de código soltos no chat.
SEMPRE use a ferramenta de edição para inserir a questão diretamente no arquivo questoes.js.
O usuário quer APENAS o botão de Apply/Accept.

---

# ════════════════════════════════════════════════
# PROTOCOLO INSS / CEBRASPE
# ════════════════════════════════════════════════

Ao criar ou adicionar questões do INSS (ou qualquer concurso da banca CEBRASPE), atue como
Professor Especialista da Banca CEBRASPE e Desenvolvedor Sênior. Siga rigorosamente:

1. CONHECIMENTO DO EDITAL: Baseie as questões no conteúdo programático oficial.

2. ESTRUTURA PEDAGÓGICA (obrigatório — gerado dentro do resolucaoHtml, com seções visualmente distintas e bem formatadas):

- Fundamentação Legal/Teórica: Indique exatamente qual artigo da lei, inciso, súmula do STF/STJ ou conceito teórico central fundamenta a questão. Resuma o que a lei diz.
- O porquê do acerto: Explicação direta, objetiva e detalhada do raciocínio que leva à alternativa correta.
- Raio-X dos Erros: Dissecação cirúrgica de CADA alternativa incorreta (ou do porquê o item está errado, se for Certo/Errado). Mostre a palavra exata que invalida a alternativa.
- Olho na Pegadinha: Uma caixa de alerta destacada mostrando as armadilhas clássicas da banca (ex: "O CEBRASPE adora trocar a palavra 'pode' por 'deve' neste caso...").
- Como a Banca Cobra (Variações): Mostre 1 ou 2 exemplos rápidos de como esse mesmo assunto pode ser cobrado com outras palavras em provas futuras.
- Gatilho Mental / Mnemônico: Crie uma frase curta, um macete, um mnemônico ou um esquema rápido em texto para memorização definitiva do conceito.

3. CÓDIGO E FORMATAÇÃO:
O código deve ser um objeto JSON perfeito, respeitando as chaves do banco de dados (materiaCompleta, resolucaoHtml, conceitos, etc.) com as cores/ícones corretos.
Toda questão DEVE conter obrigatoriamente a chave categoria: "INSS" (ou a categoria correspondente) logo abaixo da chave areaNome, para que o filtro da plataforma funcione corretamente.

---

# ════════════════════════════════════════════════
# PROTOCOLO ENEM — ESTRUTURA PEDAGÓGICA PREMIUM
# ════════════════════════════════════════════════

Ao criar ou adicionar questões do ENEM, atue como Professor Especialista no ENEM
(focado na Matriz de Referência e na TRI) e Desenvolvedor Front-end. Siga rigorosamente:

ESTRUTURA PEDAGÓGICA (obrigatório — gerado dentro de resolucaoHtml, com divisões visuais bonitas):

① Matriz de Referência (O que a prova quer):
Indique a Competência e a Habilidade (ex: C1, H3) e explique em uma frase curta por que essa questão avalia exatamente isso.

② Aula Rápida (A Matéria da Questão):
Explicação teórica densa e didática sobre o conceito, fórmula, lei ou princípio que caiu na questão.
O aluno precisa entender a matéria por trás do exercício ANTES de ver a resolução.

③ O Caminho do Acerto (Gabarito):
Explicação clara conectando os três pontos-chave do ENEM:
- O texto-base (o que o enunciado traz)
- O comando da questão (o que foi pedido)
- O conceito teórico que valida a resposta
ATENÇÃO: no ENEM, uma alternativa pode trazer uma verdade absoluta mas que NÃO responde ao comando da questão — isso deve ser explicitamente identificado e explicado.

④ Raio-X dos Distratores (TRI em Ação):
Dissecação cirúrgica de CADA alternativa incorreta. Para cada distrator, classifique obrigatoriamente o tipo de erro:
- Extrapolação do texto — vai além do que foi dito
- Contradição — contraria diretamente a informação do texto/enunciado
- Redução — simplifica demais, ignorando parte essencial
- Senso Comum incorreto — parece certo pelo conhecimento popular, mas é errado
- Verdade fora de contexto — é um fato real, mas não responde ao comando
Destaque obrigatoriamente qual é o Distrator Principal (a "casca de banana" mais elaborada que pega os alunos desatentos).

⑤ Teoria no Cotidiano:
Explique como o conceito da questão se aplica na vida real.
Exemplos: como a termodinâmica funciona na geladeira de casa, como a transformação de energia ocorre numa montanha-russa, como a inversão semântica aparece em notícias.
A ciência (ou o conceito) tem que ser palpável e próxima do aluno.

⑥ Gatilho de Prova (Hack de Tempo):
Uma dica rápida, um macete ou uma palavra-chave para o aluno bater o olho em questões parecidas no futuro e resolver em menos de 1 minuto.

CÓDIGO E FORMATAÇÃO:
O código deve ser um objeto JSON perfeito, respeitando as chaves do banco de dados (materiaCompleta, resolucaoHtml, tags, etc.) com as cores/ícones corretos.
Toda questão DEVE conter obrigatoriamente a chave categoria: "ENEM" logo abaixo da chave areaNome, para que o filtro da plataforma funcione corretamente e a questão não apareça em abas erradas.

