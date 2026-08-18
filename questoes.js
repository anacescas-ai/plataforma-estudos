/* =========================================================================
   BANCO DE QUESTÕES — Plataforma de Estudos
   Este arquivo guarda SÓ os dados. A interface fica em index.html.
   Para adicionar uma questão: copie um objeto, cole no fim do array e edite.
   ========================================================================= */

const questaoDatabase = [

  {
    id: "q108",
    numero: "Questão 108",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "fisica",
    materia: "Física / Dinâmica & Atrito",
    materiaCor: "purple",
    materiaIcone: "fa-bolt",
    titulo: "Força de Atrito Cinético no Plano Inclinado: Independência da Força Aplicada e da Velocidade",
    tags: ["Física", "Dinâmica", "Força de Atrito", "Plano Inclinado", "Atrito Cinético", "Gráficos"],
    alternativaCorreta: "C",
    userNotes: "",
    userCustomImage: null,

    enunciado: `Para transportar uma caixa do primeiro para o segundo piso de uma construção, um trabalhador precisará arrastá-la sobre um plano inclinado. O trabalhador começa a arrastar a caixa no primeiro piso, exercendo sobre ela uma força de grande intensidade, paralela ao seu deslocamento. Na medida em que a caixa sobe o plano inclinado, ele decide reduzir a força sobre ela, arrastando-a lentamente até chegar ao segundo piso. Considere que a caixa permanece em movimento nos encontros dos pisos com o plano inclinado, e que a rugosidade entre as superfícies permanece a mesma durante todo o percurso.
    <br><br>
    O comportamento da força de atrito entre a caixa e o chão no plano inclinado é representado em:`,

    alternativas: [
      { letra: "A", texto: "Gráfico com declínio inicial e elevação para patamar elevado.", correta: false },
      { letra: "B", texto: "Gráfico em pico em V invertido seguido de queda para patamar baixo.", correta: false },
      { letra: "C", texto: "Gráfico em linha reta horizontal constante em relação ao tempo.", correta: true },
      { letra: "D", texto: "Gráfico em patamar inicial alto seguido de queda linear contínua.", correta: false },
      { letra: "E", texto: "Gráfico com subida inicial rápida e declínio linear contínuo.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA — a teoria inteira, não um resumo
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-purple-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre todo o conteúdo de atrito cobrado no Enem — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">1.</span> De onde vem a força de atrito</h4>
          <p>
            Nenhuma superfície é lisa. O que parece polido, visto de perto, é uma paisagem de picos e vales. Quando dois corpos se tocam, o contato real acontece só nos picos — uma fração minúscula da área que enxergamos. Nesses pontos as moléculas dos dois materiais ficam próximas o bastante para se ligarem, formando micro-soldas que precisam ser rompidas para o movimento continuar.
          </p>
          <p>
            A força de atrito é a soma da resistência dessas micro-soldas. Ela é sempre <strong>paralela às superfícies</strong> e sempre <strong>contrária ao movimento relativo</strong> (ou à tendência de movimento).
          </p>
          <p class="bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs">
            <strong class="text-purple-300">Consequência que cai muito:</strong> aumentar a área de contato aparente não aumenta o atrito. Área maior distribui o peso em mais pontos, mas cada ponto fica menos comprimido — os efeitos se cancelam. Por isso um pneu largo e um estreito, de mesmo material e mesmo peso, têm o mesmo atrito.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">2.</span> Os dois regimes: estático e cinético</h4>
          <p>
            Enquanto o corpo <strong>não desliza</strong>, atua o atrito estático. Ele é uma força <em>variável</em>: vale exatamente o necessário para impedir o movimento. Se você empurra um armário com 50 N e ele não sai do lugar, o atrito estático vale 50 N. Se você empurra com 80 N e ele continua parado, o atrito vale 80 N. Mas há um teto:
          </p>
          $$F_{at}^{est} \\leq \\mu_e \\cdot N$$
          <p>
            Rompido esse teto, o corpo desliza e o regime muda. Agora atua o <strong>atrito cinético</strong>, que é uma força <em>fixa</em>:
          </p>
          $$F_{at}^{cin} = \\mu_k \\cdot N$$
          <p>
            Repare na diferença de sinal: o estático é uma <strong>desigualdade</strong> (vale até esse máximo), o cinético é uma <strong>igualdade</strong> (vale exatamente isso). É aqui que a questão inteira se decide.
          </p>
          <p class="bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs">
            Na prática, $\\mu_e > \\mu_k$. Por isso custa mais para tirar um móvel da inércia do que para mantê-lo deslizando — e por isso o gráfico de atrito por força aplicada tem aquele pico característico antes de cair para o patamar.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">3.</span> A força normal é quem manda</h4>
          <p>
            Nas duas fórmulas, o atrito depende de dois fatores apenas: o coeficiente $\\mu$ (que traduz o par de materiais e a rugosidade) e a força normal $N$ (o quanto as superfícies estão comprimidas uma contra a outra).
          </p>
          <p>
            No plano horizontal, $N = m \\cdot g$. No plano inclinado, o peso se decompõe em duas direções:
          </p>
          $$P_x = m \\cdot g \\cdot \\text{sen}\\,\\theta \\quad \\text{(paralela ao plano, puxa para baixo)}$$
          $$P_y = m \\cdot g \\cdot \\cos\\theta \\quad \\text{(perpendicular, comprime o plano)}$$
          <p>
            Como não há aceleração na direção perpendicular, a normal equilibra $P_y$:
          </p>
          $$N = m \\cdot g \\cdot \\cos\\theta$$
          <p>
            E o atrito no plano inclinado fica:
          </p>
          $$F_{at} = \\mu_k \\cdot m \\cdot g \\cdot \\cos\\theta$$
          <p class="bg-purple-950/30 border border-purple-500/30 rounded-lg p-3 text-xs">
            <strong class="text-purple-300">Leia essa fórmula com atenção:</strong> aparecem $\\mu_k$, $m$, $g$ e $\\theta$. <strong>Não aparece a força aplicada. Não aparece a velocidade. Não aparece a aceleração.</strong> Tudo o que a questão diz que muda (a força do trabalhador, a rapidez da caixa) simplesmente não está nessa equação.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">4.</span> Por que a força aplicada não altera o atrito</h4>
          <p>
            É a confusão mais comum do tema. Mudar a força do trabalhador muda, sim, alguma coisa — só que não é o atrito. Pela segunda lei de Newton, ao longo do plano:
          </p>
          $$F_{aplicada} - P_x - F_{at} = m \\cdot a$$
          <p>
            Reduzir $F_{aplicada}$ reduz o lado esquerdo e, portanto, reduz a <strong>aceleração</strong>. A caixa passa a subir mais devagar, pode até desacelerar. Mas $F_{at}$ é uma parcela independente: ela só mudaria se mudasse $\\mu_k$ (a rugosidade — que o enunciado fixa) ou $N$ (que depende de massa, gravidade e inclinação — todas fixas).
          </p>
          <p>
            Há um único caso em que a força aplicada altera a normal: quando ela é <strong>inclinada</strong> em relação à superfície, empurrando o corpo contra o plano ou puxando-o para longe dele. O enunciado bloqueia essa saída ao dizer que a força é <strong>paralela ao deslocamento</strong>.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">5.</span> Por que a velocidade também não altera</h4>
          <p>
            Em velocidades comuns, o atrito cinético é praticamente independente da rapidez do deslizamento. A quantidade de micro-soldas formadas e rompidas por segundo aumenta com a velocidade, mas a força média necessária para romper cada uma não muda de forma significativa. Esse é o resultado experimental que sustenta o modelo usado no ensino médio.
          </p>
          <p>
            Cuidado para não confundir com a <strong>resistência do ar</strong> ou o <strong>arrasto em fluidos</strong>, que crescem com a velocidade (tipicamente com $v$ ou $v^2$). Atrito seco entre sólidos: constante. Arrasto em fluido: depende da velocidade.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">6.</span> Traduzindo para o gráfico</h4>
          <p>
            O Enem adora a passagem "grandeza física → forma do gráfico". A regra é direta:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-purple-300 block mb-1">Grandeza constante</strong>
              Reta horizontal, paralela ao eixo do tempo.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-purple-300 block mb-1">Variação uniforme</strong>
              Reta inclinada, com coeficiente angular constante.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-purple-300 block mb-1">Variação acelerada</strong>
              Curva (parábola, exponencial), inclinação mudando.
            </div>
          </div>
          <p>
            Como $F_{at} = \\mu_k \\, m \\, g \\cos\\theta$ tem todos os fatores fixos no trecho inclinado, o gráfico só pode ser uma reta horizontal.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">7.</span> O que mudaria o valor do atrito</h4>
          <ul class="list-disc list-inside space-y-1 text-xs text-slate-300">
            <li><strong>Trocar a inclinação:</strong> outro $\\theta$, outro $\\cos\\theta$, outra normal. Por isso o patamar no plano inclinado é <em>menor</em> que no piso horizontal.</li>
            <li><strong>Mudar a massa:</strong> caixa mais pesada comprime mais, atrito maior.</li>
            <li><strong>Mudar o par de materiais ou a rugosidade:</strong> outro $\\mu_k$ — expressamente descartado pelo enunciado.</li>
            <li><strong>Parar a caixa:</strong> volta ao regime estático, com outro comportamento — também descartado, já que o enunciado garante movimento contínuo.</li>
            <li><strong>Inclinar a força aplicada:</strong> aí sim a normal muda, e o atrito junto.</li>
          </ul>
        </div>
      </div>
    `,

    /* ------------------------------------------------------------------
       2. RESOLUÇÃO COMENTADA — todos os distratores, um a um
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-4 text-xs">

        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <h4 class="font-bold text-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-purple-400"></i> Estratégia em 3 passos
          </h4>
          <p class="text-slate-300 leading-relaxed">
            <strong>Passo 1 — Identifique o regime.</strong> O enunciado garante que a caixa "permanece em movimento". Regime cinético, portanto $F_{at} = \\mu_k N$, uma igualdade fixa.
            <br><br>
            <strong>Passo 2 — Escreva a normal do trecho.</strong> No plano inclinado, $N = m g \\cos\\theta$. Massa, gravidade e inclinação são constantes ao longo da rampa.
            <br><br>
            <strong>Passo 3 — Liste o que o enunciado faz variar.</strong> Só a força do trabalhador e a velocidade da caixa. Nenhuma das duas aparece em $\\mu_k m g \\cos\\theta$. Logo, o atrito não muda: reta horizontal.
          </p>
        </div>

        <div class="bg-purple-950/40 p-4 rounded-xl border border-purple-500/40 space-y-2">
          <h4 class="font-bold text-purple-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa C — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            $$F_{at} = \\mu_k \\cdot m \\cdot g \\cdot \\cos\\theta = \\text{constante}$$
            Todos os quatro fatores permanecem fixos no plano inclinado. Uma grandeza constante ao longo do tempo é representada por uma reta horizontal. A redução da força do trabalhador diminui a aceleração da caixa, não o atrito.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa A — declínio inicial e depois elevação para patamar alto</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> imaginar que o atrito acompanha a velocidade da caixa — cairia enquanto ela desacelera e subiria ao estabilizar.
              <br>
              <strong>Onde quebra:</strong> a velocidade não entra em $\\mu_k N$. Atrito seco entre sólidos independe da rapidez do deslizamento; quem depende de $v$ é o arrasto em fluidos.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — pico em V invertido e queda para patamar baixo</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lembrar do gráfico clássico de atrito <em>versus força aplicada</em>, aquele com o pico do atrito estático antes de cair para o patamar cinético. É um gráfico real e importante — só que de outra coisa.
              <br>
              <strong>Onde quebra:</strong> aquele pico ocorre no instante em que o corpo <em>começa</em> a deslizar, na transição estático → cinético. Aqui a caixa já entra na rampa em movimento, e o enunciado diz que assim permanece. Nunca há retorno ao regime estático, então o pico não existe neste trecho.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa D — patamar alto seguido de queda linear</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> transformar em gráfico exatamente a frase "ele decide reduzir a força" — o candidato desenha a <em>força do trabalhador</em>, que de fato começa grande e diminui.
              <br>
              <strong>Onde quebra:</strong> a pergunta é sobre a força de <strong>atrito</strong>, não sobre a força aplicada. Este é o distrator mais perigoso da questão, porque o gráfico está certo — só que responde a outra pergunta. Sublinhe sempre qual grandeza está no eixo vertical.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — subida rápida e declínio linear contínuo</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> misturar as duas confusões anteriores — um pico inicial de "esforço" seguido do decaimento da força do trabalhador.
              <br>
              <strong>Onde quebra:</strong> soma dois enganos. Não há transição estática no trecho (a caixa já vem em movimento) e a curva descrita é novamente a da força aplicada, não a do atrito.
            </p>
          </div>
        </div>

        <div class="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30">
          <strong class="text-emerald-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            Quatro das cinco alternativas descrevem corretamente <em>alguma</em> grandeza da cena — a força do trabalhador, a velocidade, o esforço inicial. Nenhuma delas descreve o atrito. Em questões de gráfico, o erro raramente está na física: está em ler qual grandeza foi pedida.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-bolt", titulo: "Atrito Cinético", text: "Fat = μk·N. Igualdade fixa, válida enquanto há deslizamento." },
      { icone: "fa-draw-polygon", titulo: "Normal no Plano Inclinado", text: "N = m·g·cos(θ). Só depende de massa, gravidade e inclinação." },
      { icone: "fa-chart-line", titulo: "Constante vira reta", text: "Grandeza que não varia é sempre uma reta horizontal no gráfico." },
      { icone: "fa-arrows-up-down", titulo: "Estático x Cinético", text: "Estático é desigualdade (≤ μe·N) e variável; cinético é igualdade e fixo." },
      { icone: "fa-wind", titulo: "Atrito x Arrasto", text: "Atrito seco independe de v; arrasto em fluido cresce com v ou v²." },
      { icone: "fa-magnifying-glass", titulo: "Área não importa", text: "Área aparente maior distribui o peso; a força de atrito não muda." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Diagrama de corpo livre no plano inclinado",
        legenda: "Todas as forças sobre a caixa. Note que o peso P se divide em Px (paralela, puxa para baixo) e Py (perpendicular, comprime o plano). A normal N equilibra apenas Py.",
        svg: `
          <svg viewBox="0 0 460 240" class="w-full h-auto">
            <polygon points="40,200 400,200 400,60" fill="#1e293b" stroke="#475569" stroke-width="2"/>
            <path d="M 340 200 A 60 60 0 0 0 355 175" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
            <text x="352" y="194" fill="#cbd5e1" font-size="11" font-weight="bold">θ</text>
            <g transform="rotate(-21, 230, 138)">
              <rect x="205" y="118" width="50" height="40" rx="3" fill="#0f172a" stroke="#a78bfa" stroke-width="2.5"/>
              <line x1="255" y1="138" x2="330" y2="138" stroke="#38bdf8" stroke-width="3" marker-end="url(#pt)"/>
              <text x="300" y="128" fill="#7dd3fc" font-size="11" font-weight="bold">F</text>
              <line x1="205" y1="138" x2="140" y2="138" stroke="#f87171" stroke-width="3" marker-end="url(#pt)"/>
              <text x="160" y="130" fill="#fca5a5" font-size="11" font-weight="bold">Fat</text>
              <line x1="230" y1="118" x2="230" y2="55" stroke="#34d399" stroke-width="3" marker-end="url(#pt)"/>
              <text x="238" y="70" fill="#6ee7b7" font-size="11" font-weight="bold">N</text>
              <line x1="230" y1="158" x2="230" y2="205" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="4 3" marker-end="url(#pt)"/>
              <text x="236" y="200" fill="#fcd34d" font-size="10">Py</text>
            </g>
            <line x1="230" y1="138" x2="230" y2="225" stroke="#fbbf24" stroke-width="3" marker-end="url(#pt)"/>
            <text x="238" y="222" fill="#fcd34d" font-size="11" font-weight="bold">P = m·g</text>
            <text x="150" y="175" fill="#fcd34d" font-size="10">Px</text>
            <line x1="196" y1="150" x2="150" y2="168" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="4 3" marker-end="url(#pt)"/>
            <defs>
              <marker id="pt" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="currentColor"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Por que a área de contato não importa",
        legenda: "Ampliação das superfícies. O contato real ocorre só nos picos. Dobrar a área aparente dobra o número de pontos de contato, mas reduz a compressão em cada um — o atrito total permanece igual.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <text x="115" y="18" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">Área pequena: poucos pontos, muito comprimidos</text>
            <rect x="45" y="35" width="140" height="26" fill="#0f172a" stroke="#a78bfa" stroke-width="2"/>
            <path d="M 45 68 L 60 62 L 75 70 L 90 61 L 105 69 L 120 62 L 135 70 L 150 63 L 165 69 L 185 64" fill="none" stroke="#a78bfa" stroke-width="2"/>
            <path d="M 45 78 L 62 72 L 78 80 L 92 71 L 108 79 L 122 72 L 138 80 L 152 73 L 168 79 L 185 74" fill="none" stroke="#64748b" stroke-width="2"/>
            <rect x="45" y="80" width="140" height="24" fill="#1e293b" stroke="#475569" stroke-width="2"/>
            <circle cx="61" cy="66" r="4" fill="none" stroke="#f87171" stroke-width="2"/>
            <circle cx="105" cy="72" r="4" fill="none" stroke="#f87171" stroke-width="2"/>
            <circle cx="152" cy="67" r="4" fill="none" stroke="#f87171" stroke-width="2"/>
            <text x="115" y="126" fill="#f87171" font-size="10" text-anchor="middle" font-weight="bold">3 micro-soldas fortes</text>
            <line x1="230" y1="30" x2="230" y2="150" stroke="#334155" stroke-width="1" stroke-dasharray="4 4"/>
            <text x="345" y="18" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">Área grande: muitos pontos, pouco comprimidos</text>
            <rect x="265" y="35" width="160" height="18" fill="#0f172a" stroke="#a78bfa" stroke-width="2"/>
            <path d="M 265 60 L 277 55 L 289 62 L 301 55 L 313 62 L 325 55 L 337 62 L 349 55 L 361 62 L 373 55 L 385 62 L 397 56 L 425 60" fill="none" stroke="#a78bfa" stroke-width="2"/>
            <path d="M 265 70 L 279 65 L 293 72 L 305 64 L 319 72 L 331 65 L 345 72 L 357 65 L 371 72 L 383 65 L 397 72 L 411 66 L 425 70" fill="none" stroke="#64748b" stroke-width="2"/>
            <rect x="265" y="72" width="160" height="24" fill="#1e293b" stroke="#475569" stroke-width="2"/>
            <circle cx="278" cy="58" r="3" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
            <circle cx="313" cy="63" r="3" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
            <circle cx="348" cy="58" r="3" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
            <circle cx="383" cy="63" r="3" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
            <circle cx="410" cy="60" r="3" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
            <text x="345" y="120" fill="#fbbf24" font-size="10" text-anchor="middle" font-weight="bold">5 micro-soldas fracas</text>
            <rect x="120" y="145" width="220" height="32" rx="8" fill="#2e1065" stroke="#8b5cf6" stroke-width="2"/>
            <text x="230" y="166" fill="#c4b5fd" font-size="12" font-weight="bold" text-anchor="middle">Atrito total: exatamente o mesmo</text>
          </svg>`
      },
      {
        titulo: "Atrito × força aplicada: o pico que a alternativa B usa",
        legenda: "Este gráfico existe e é importante — mas o eixo horizontal é a FORÇA APLICADA, não o tempo. O pico marca a transição estático → cinético, que não ocorre no trecho da questão.",
        svg: `
          <svg viewBox="0 0 460 200" class="w-full h-auto">
            <line x1="55" y1="160" x2="435" y2="160" stroke="#64748b" stroke-width="2"/>
            <line x1="55" y1="25" x2="55" y2="160" stroke="#64748b" stroke-width="2"/>
            <text x="48" y="32" fill="#94a3b8" font-size="10" text-anchor="end">Fat</text>
            <text x="430" y="178" fill="#94a3b8" font-size="10" text-anchor="end">Força aplicada</text>
            <line x1="55" y1="160" x2="215" y2="55" stroke="#38bdf8" stroke-width="3"/>
            <line x1="215" y1="55" x2="228" y2="85" stroke="#a78bfa" stroke-width="3"/>
            <line x1="228" y1="85" x2="425" y2="85" stroke="#a78bfa" stroke-width="3"/>
            <circle cx="215" cy="55" r="4" fill="#f87171"/>
            <line x1="215" y1="55" x2="215" y2="160" stroke="#f87171" stroke-width="1" stroke-dasharray="4 3"/>
            <text x="140" y="70" fill="#7dd3fc" font-size="10" font-weight="bold">estático: cresce</text>
            <text x="215" y="45" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">μe·N</text>
            <text x="330" y="75" fill="#c4b5fd" font-size="10" font-weight="bold" text-anchor="middle">cinético: constante (μk·N)</text>
            <text x="215" y="176" fill="#f87171" font-size="9" text-anchor="middle">começa a deslizar</text>
            <rect x="285" y="120" width="145" height="30" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
            <text x="357" y="139" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">Eixo x = força, não tempo</text>
          </svg>`
      },
      {
        titulo: "Atrito × tempo no percurso: a resposta da questão",
        legenda: "No trecho inclinado, a força do trabalhador cai (linha azul) enquanto o atrito permanece no mesmo valor (linha verde). Duas grandezas diferentes, dois comportamentos diferentes, no mesmo intervalo de tempo.",
        svg: `
          <svg viewBox="0 0 460 200" class="w-full h-auto">
            <line x1="55" y1="160" x2="435" y2="160" stroke="#64748b" stroke-width="2"/>
            <line x1="55" y1="25" x2="55" y2="160" stroke="#64748b" stroke-width="2"/>
            <text x="48" y="32" fill="#94a3b8" font-size="10" text-anchor="end">Força</text>
            <text x="430" y="178" fill="#94a3b8" font-size="10" text-anchor="end">tempo</text>
            <line x1="55" y1="45" x2="425" y2="120" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6 4"/>
            <text x="250" y="80" fill="#7dd3fc" font-size="10" font-weight="bold">força do trabalhador: diminui</text>
            <line x1="55" y1="130" x2="425" y2="130" stroke="#34d399" stroke-width="4"/>
            <text x="250" y="148" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">força de atrito: constante ← alternativa C</text>
            <circle cx="55" cy="130" r="4" fill="#34d399"/>
            <circle cx="425" cy="130" r="4" fill="#34d399"/>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: o que realmente muda a força de atrito?",
      descricao: "Mexa nos controles e observe. A barra vermelha do atrito só reage a três deles — massa, inclinação e rugosidade. Mover a força aplicada muda a aceleração da caixa, e nada mais.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Massa da caixa</span><span class="text-purple-300 font-bold" data-out="massa">40 kg</span>
              </label>
              <input type="range" data-sim="massa" min="10" max="120" value="40" step="5" class="w-full accent-purple-500">
            </div>
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Inclinação do plano</span><span class="text-purple-300 font-bold" data-out="angulo">30°</span>
              </label>
              <input type="range" data-sim="angulo" min="0" max="60" value="30" step="1" class="w-full accent-purple-500">
            </div>
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Rugosidade (μk)</span><span class="text-purple-300 font-bold" data-out="mu">0,30</span>
              </label>
              <input type="range" data-sim="mu" min="0.05" max="0.9" value="0.3" step="0.05" class="w-full accent-purple-500">
            </div>
            <div class="pt-2 border-t border-slate-800">
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span class="text-sky-300">Força do trabalhador</span><span class="text-sky-300 font-bold" data-out="forca">400 N</span>
              </label>
              <input type="range" data-sim="forca" min="0" max="900" value="400" step="10" class="w-full accent-sky-500">
              <p class="text-[10px] text-sky-400/70 mt-1"><i class="fa-solid fa-flask"></i> Este é o controle do experimento: mexa só nele e observe a barra do atrito.</p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-emerald-300 font-bold">Normal (N = m·g·cosθ)</span>
                  <span class="text-emerald-300 font-mono" data-out="normal">339 N</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="normal" class="h-full bg-emerald-500 transition-all" style="width:35%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-rose-300 font-bold">Atrito (Fat = μk·N)</span>
                  <span class="text-rose-300 font-mono" data-out="atrito">102 N</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="atrito" class="h-full bg-rose-500 transition-all" style="width:11%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-sky-300 font-bold">Força aplicada</span>
                  <span class="text-sky-300 font-mono" data-out="forcaBarra">400 N</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="forca" class="h-full bg-sky-500 transition-all" style="width:44%"></div>
                </div>
              </div>
            </div>

            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>

        <div class="mt-4 bg-slate-950 border border-slate-800 rounded-xl p-4">
          <p class="text-[11px] text-slate-400 mb-2">
            <i class="fa-solid fa-chart-line text-purple-400"></i>
            Percurso simulado: o trabalhador reduz a força até 40% do valor inicial ao longo da subida.
          </p>
          <div class="h-56"><canvas data-sim="grafico"></canvas></div>
        </div>
      `,
      init: function (raiz) {
        var g = 9.8;
        var campos = {
          massa: raiz.querySelector('[data-sim="massa"]'),
          angulo: raiz.querySelector('[data-sim="angulo"]'),
          mu: raiz.querySelector('[data-sim="mu"]'),
          forca: raiz.querySelector('[data-sim="forca"]')
        };
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };
        var grafico = null;

        function calcular() {
          var m = parseFloat(campos.massa.value);
          var th = parseFloat(campos.angulo.value) * Math.PI / 180;
          var mu = parseFloat(campos.mu.value);
          var F = parseFloat(campos.forca.value);

          var N = m * g * Math.cos(th);
          var Fat = mu * N;
          var Px = m * g * Math.sin(th);
          var a = (F - Px - Fat) / m;

          return { m: m, mu: mu, F: F, N: N, Fat: Fat, Px: Px, a: a, graus: campos.angulo.value };
        }

        function atualizar() {
          var d = calcular();
          var escala = 1200;

          saida('massa').textContent = d.m + ' kg';
          saida('angulo').textContent = d.graus + '°';
          saida('mu').textContent = d.mu.toFixed(2).replace('.', ',');
          saida('forca').textContent = d.F + ' N';
          saida('normal').textContent = d.N.toFixed(0) + ' N';
          saida('atrito').textContent = d.Fat.toFixed(0) + ' N';
          saida('forcaBarra').textContent = d.F.toFixed(0) + ' N';

          barra('normal').style.width = Math.min(100, d.N / escala * 100) + '%';
          barra('atrito').style.width = Math.min(100, d.Fat / escala * 100) + '%';
          barra('forca').style.width = Math.min(100, d.F / escala * 100) + '%';

          var v = saida('veredito');
          if (d.a > 0.05) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            v.innerHTML = '<strong>Caixa acelerando</strong> a ' + d.a.toFixed(2) + ' m/s². Reduza a força aplicada e acompanhe: a aceleração cai, o atrito não se mexe.';
          } else if (d.a > -0.05) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-slate-700 bg-slate-950 text-slate-300';
            v.innerHTML = '<strong>Velocidade constante.</strong> A força aplicada equilibra exatamente peso e atrito — e o atrito segue valendo ' + d.Fat.toFixed(0) + ' N.';
          } else {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            v.innerHTML = '<strong>Caixa desacelerando</strong> a ' + Math.abs(d.a).toFixed(2) + ' m/s². Ela sobe cada vez mais devagar — mas o atrito continua em ' + d.Fat.toFixed(0) + ' N, o mesmo de antes.';
          }

          if (grafico) {
            var passos = grafico.data.labels.length;
            var serieF = [];
            var serieAt = [];
            for (var i = 0; i < passos; i++) {
              serieF.push(d.F * (1 - 0.6 * i / (passos - 1)));
              serieAt.push(d.Fat);
            }
            grafico.data.datasets[0].data = serieF;
            grafico.data.datasets[1].data = serieAt;
            grafico.update('none');
          }
        }

        var canvas = raiz.querySelector('[data-sim="grafico"]');
        if (canvas && window.Chart) {
          var rotulos = [];
          for (var i = 0; i <= 10; i++) rotulos.push(i);
          grafico = new Chart(canvas.getContext('2d'), {
            type: 'line',
            data: {
              labels: rotulos,
              datasets: [
                { label: 'Força do trabalhador', data: [], borderColor: '#38bdf8', backgroundColor: 'transparent', borderDash: [6, 4], borderWidth: 3, tension: 0, pointRadius: 0 },
                { label: 'Força de atrito', data: [], borderColor: '#f43f5e', backgroundColor: 'transparent', borderWidth: 4, tension: 0, pointRadius: 0 }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              animation: false,
              scales: {
                y: { beginAtZero: true, grid: { color: '#1e293b' }, ticks: { color: '#94a3b8', font: { size: 10 } }, title: { display: true, text: 'Força (N)', color: '#94a3b8', font: { size: 10 } } },
                x: { grid: { color: '#1e293b' }, ticks: { color: '#94a3b8', font: { size: 10 } }, title: { display: true, text: 'tempo na subida (s)', color: '#94a3b8', font: { size: 10 } } }
              },
              plugins: { legend: { labels: { color: '#cbd5e1', font: { size: 11 }, boxWidth: 14 } } }
            }
          });
        }

        Object.keys(campos).forEach(function (k) {
          campos[k].addEventListener('input', atualizar);
        });
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-purple-300 block"><i class="fa-solid fa-draw-polygon"></i> Decomposição de Forças e Gráfico da Força de Atrito</span>
        <svg viewBox="0 0 460 160" class="w-full h-36 mx-auto">
          <polygon points="40,140 240,140 240,50" fill="#1e293b" stroke="#475569" stroke-width="2"/>
          <rect x="110" y="80" width="40" height="30" rx="3" fill="#0f172a" stroke="#a78bfa" stroke-width="2" transform="rotate(-24, 130, 95)"/>
          <line x1="280" y1="120" x2="430" y2="120" stroke="#64748b" stroke-width="2"/>
          <line x1="280" y1="30" x2="280" y2="120" stroke="#64748b" stroke-width="2"/>
          <line x1="280" y1="60" x2="420" y2="60" stroke="#10b981" stroke-width="3"/>
          <text x="350" y="50" fill="#34d399" font-size="9" font-weight="bold" text-anchor="middle">Fat = Constante</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q095",
    numero: "Questão 95",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "biologia",
    materia: "Biologia / Ecologia & Impacto Ambiental",
    materiaCor: "emerald",
    materiaIcone: "fa-dna",
    titulo: "Eutrofização: Por que o Excesso de Nutrientes Provoca Mortandade de Peixes",
    tags: ["Biologia", "Ecologia", "Eutrofização", "Ciclo do Oxigênio", "Poluição", "Decomposição"],
    alternativaCorreta: "D",
    userNotes: "",
    userCustomImage: null,
    enunciado: `Um lago situado próximo a uma área agrícola passou a receber, ao longo de vários anos, a água da chuva que escoa das lavouras vizinhas, carregada de fertilizantes ricos em nitrato e fosfato. Moradores relataram que a superfície do lago ficou coberta por uma densa camada esverdeada e que, semanas depois, grande quantidade de peixes apareceu morta às margens.
    <br><br>
    A mortandade dos peixes descrita é explicada principalmente pelo(a):`,
    alternativas: [
      { letra: "A", texto: "Toxicidade direta dos íons nitrato e fosfato sobre as brânquias dos peixes.", correta: false },
      { letra: "B", texto: "Elevação da temperatura da água provocada pela absorção de luz pelas algas.", correta: false },
      { letra: "C", texto: "Competição por alimento entre os peixes e as algas que se multiplicaram.", correta: false },
      { letra: "D", texto: "Consumo do oxigênio dissolvido pelos decompositores aeróbios que degradam a matéria orgânica.", correta: true },
      { letra: "E", texto: "Redução do gás carbônico disponível na água em razão da intensa fotossíntese das algas.", correta: false }
    ],
    resolucaoHtml: `
      <div class="space-y-4 text-xs">
        <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/30 space-y-2">
          <h4 class="font-bold text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Por que a Alternativa D é a Correta?
          </h4>
          <p class="text-slate-200 leading-relaxed">
            1. <strong>Entrada de nutrientes:</strong> nitrato ($NO_3^-$) e fosfato ($PO_4^{3-}$) são fatores limitantes do crescimento de produtores aquáticos. Quando chegam em excesso, deixam de limitar — e a população de algas e cianobactérias explode. Esse é o processo de <strong>eutrofização artificial</strong>.
            <br><br>
            2. <strong>A camada esverdeada:</strong> a floração cobre a superfície e bloqueia a passagem de luz. As algas das camadas mais profundas, sem luz, param de fotossintetizar e morrem, gerando um grande volume de matéria orgânica.
            <br><br>
            3. <strong>O passo decisivo:</strong> bactérias e fungos decompositores <strong>aeróbios</strong> degradam essa matéria orgânica e, para isso, respiram:
            $$C_6H_{12}O_6 + 6\\,O_2 \\rightarrow 6\\,CO_2 + 6\\,H_2O + \\text{energia}$$
            O oxigênio dissolvido despenca. Instala-se a <strong>anoxia</strong>, e os peixes — que dependem do $O_2$ dissolvido captado pelas brânquias — morrem asfixiados (<strong>Alternativa D</strong>).
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">A) Incorreta:</strong> nas concentrações típicas de escoamento agrícola, nitrato e fosfato são nutrientes, não venenos. O dano é indireto, via cadeia trófica.
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">B) Incorreta:</strong> a variação térmica existe, mas é pequena demais para causar mortandade em massa.
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">C) Incorreta:</strong> algas são produtoras, não competem por alimento com peixes — muitas até servem de base da cadeia alimentar.
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-emerald-400">Dica ENEM:</strong> em toda questão de eutrofização, o vilão final é sempre a <strong>queda do oxigênio dissolvido</strong> pela decomposição aeróbia.
          </div>
        </div>
      </div>
    `,
    conceitos: [
      { icone: "fa-seedling", titulo: "Fator Limitante", text: "Nitrogênio e fósforo limitam a produtividade primária; em excesso, disparam a floração de algas." },
      { icone: "fa-bacterium", titulo: "Decomposição Aeróbia", text: "Decompositores consomem O2 dissolvido ao degradar a matéria orgânica morta." },
      { icone: "fa-fish", titulo: "Anoxia", text: "Ambiente com O2 dissolvido próximo de zero; inviabiliza a respiração de peixes e invertebrados." }
    ],
    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-emerald-300 block"><i class="fa-solid fa-water"></i> Cascata da Eutrofização e Queda do Oxigênio Dissolvido</span>
        <svg viewBox="0 0 460 170" class="w-full h-40 mx-auto">
          <rect x="20" y="30" width="240" height="120" fill="#0f172a" stroke="#475569" stroke-width="2" rx="4"/>
          <rect x="20" y="30" width="240" height="20" fill="#065f46"/>
          <text x="140" y="44" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">Floração de algas bloqueia a luz</text>
          <circle cx="70" cy="90" r="4" fill="#334155"/>
          <circle cx="110" cy="110" r="4" fill="#334155"/>
          <circle cx="160" cy="85" r="4" fill="#334155"/>
          <circle cx="205" cy="115" r="4" fill="#334155"/>
          <text x="140" y="140" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">Zona anóxica: O₂ ≈ 0</text>
          <line x1="290" y1="140" x2="440" y2="140" stroke="#64748b" stroke-width="2"/>
          <line x1="290" y1="35" x2="290" y2="140" stroke="#64748b" stroke-width="2"/>
          <text x="284" y="32" fill="#94a3b8" font-size="8" text-anchor="end">O₂</text>
          <polyline points="295,55 330,58 365,95 400,130 435,136" fill="none" stroke="#f87171" stroke-width="3"/>
          <text x="370" y="52" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">O₂ dissolvido despenca</text>
          <text x="437" y="155" fill="#94a3b8" font-size="8" text-anchor="end">tempo</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q102",
    numero: "Questão 102",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "quimica",
    materia: "Química / Estequiometria & Neutralização",
    materiaCor: "cyan",
    materiaIcone: "fa-vial",
    titulo: "Neutralização de Efluente Ácido: Cálculo da Massa de Hidróxido de Sódio",
    tags: ["Química", "Estequiometria", "Neutralização", "Concentração Molar", "Ácido-Base", "Mol"],
    alternativaCorreta: "B",
    userNotes: "",
    userCustomImage: null,
    enunciado: `Uma indústria precisa neutralizar 500 L de um efluente cuja concentração de ácido clorídrico é de $0{,}01\\ mol/L$ antes de descartá-lo. Para isso, será utilizado hidróxido de sódio sólido, segundo a reação:
    <br><br>
    $$HCl_{(aq)} + NaOH_{(aq)} \\rightarrow NaCl_{(aq)} + H_2O_{(l)}$$
    <br>
    Dada a massa molar do $NaOH = 40\\ g/mol$, a massa mínima de hidróxido de sódio necessária para neutralizar completamente esse efluente é de:`,
    alternativas: [
      { letra: "A", texto: "20 g", correta: false },
      { letra: "B", texto: "200 g", correta: true },
      { letra: "C", texto: "400 g", correta: false },
      { letra: "D", texto: "2 000 g", correta: false },
      { letra: "E", texto: "20 000 g", correta: false }
    ],
    resolucaoHtml: `
      <div class="space-y-4 text-xs">
        <div class="bg-cyan-950/40 p-4 rounded-xl border border-cyan-500/30 space-y-2">
          <h4 class="font-bold text-cyan-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Por que a Alternativa B é a Correta?
          </h4>
          <p class="text-slate-200 leading-relaxed">
            1. <strong>Quantidade de matéria do ácido:</strong> a concentração molar relaciona mol e volume por
            $$n = C \\cdot V$$
            $$n_{HCl} = 0{,}01\\ \\frac{mol}{L} \\times 500\\ L = 5\\ mol$$
            2. <strong>Proporção estequiométrica:</strong> a equação mostra $1 : 1$ entre $HCl$ e $NaOH$. Logo, são necessários exatamente
            $$n_{NaOH} = 5\\ mol$$
            3. <strong>Da quantidade de matéria para a massa:</strong>
            $$m = n \\cdot M$$
            $$m_{NaOH} = 5\\ mol \\times 40\\ \\frac{g}{mol} = 200\\ g$$
            Portanto, são necessários <strong>200 g</strong> de hidróxido de sódio (<strong>Alternativa B</strong>).
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">A) Incorreta:</strong> resulta de esquecer o volume e multiplicar apenas $0{,}5 \\times 40$.
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">C) Incorreta:</strong> vem de supor proporção $1 : 2$, que não existe nessa reação.
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">D) e E) Incorretas:</strong> erros de ordem de grandeza na conversão de $mol/L$ ou de litros.
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-emerald-400">Dica ENEM:</strong> o caminho é quase sempre o mesmo — <strong>concentração → mol → proporção da equação → massa</strong>.
          </div>
        </div>
      </div>
    `,
    conceitos: [
      { icone: "fa-flask", titulo: "Concentração Molar", text: "C = n/V. Relaciona quantidade de matéria e volume da solução em mol/L." },
      { icone: "fa-scale-balanced", titulo: "Proporção Estequiométrica", text: "Os coeficientes da equação balanceada dão a razão em mol entre reagentes e produtos." },
      { icone: "fa-droplet", titulo: "Neutralização", text: "Ácido + base formam sal e água; no ponto de equivalência, mols de H+ igualam mols de OH-." }
    ],
    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-cyan-300 block"><i class="fa-solid fa-arrow-right-arrow-left"></i> Caminho do Cálculo Estequiométrico</span>
        <svg viewBox="0 0 460 120" class="w-full h-28 mx-auto">
          <rect x="10" y="40" width="95" height="40" rx="6" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
          <text x="57" y="58" fill="#a5f3fc" font-size="9" font-weight="bold" text-anchor="middle">0,01 mol/L</text>
          <text x="57" y="71" fill="#67e8f9" font-size="8" text-anchor="middle">× 500 L</text>
          <line x1="110" y1="60" x2="140" y2="60" stroke="#475569" stroke-width="2" marker-end="url(#setaQ102)"/>
          <rect x="145" y="40" width="95" height="40" rx="6" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
          <text x="192" y="58" fill="#a5f3fc" font-size="9" font-weight="bold" text-anchor="middle">5 mol HCl</text>
          <text x="192" y="71" fill="#67e8f9" font-size="8" text-anchor="middle">proporção 1:1</text>
          <line x1="245" y1="60" x2="275" y2="60" stroke="#475569" stroke-width="2" marker-end="url(#setaQ102)"/>
          <rect x="280" y="40" width="90" height="40" rx="6" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
          <text x="325" y="58" fill="#a5f3fc" font-size="9" font-weight="bold" text-anchor="middle">5 mol NaOH</text>
          <text x="325" y="71" fill="#67e8f9" font-size="8" text-anchor="middle">× 40 g/mol</text>
          <line x1="375" y1="60" x2="392" y2="60" stroke="#475569" stroke-width="2" marker-end="url(#setaQ102)"/>
          <rect x="396" y="40" width="55" height="40" rx="6" fill="#083344" stroke="#06b6d4" stroke-width="2"/>
          <text x="423" y="64" fill="#67e8f9" font-size="11" font-weight="bold" text-anchor="middle">200 g</text>
          <defs>
            <marker id="setaQ102" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#475569"/>
            </marker>
          </defs>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q145",
    numero: "Questão 145",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "matematica",
    areaNome: "Matemática e suas Tecnologias",
    materiaId: "matematica",
    materia: "Matemática / Porcentagem & Variações Sucessivas",
    materiaCor: "blue",
    materiaIcone: "fa-calculator",
    titulo: "Aumento e Desconto de Mesmo Percentual: Por que o Preço Final Não Volta ao Original",
    tags: ["Matemática", "Porcentagem", "Fator de Multiplicação", "Variação Percentual", "Raciocínio Lógico"],
    alternativaCorreta: "A",
    userNotes: "",
    userCustomImage: null,
    enunciado: `Uma loja de eletrodomésticos reajustou o preço de uma geladeira em 20%. Como o produto encalhou no estoque, o gerente anunciou, um mês depois, um desconto de 20% sobre o novo preço.
    <br><br>
    Em relação ao preço que a geladeira tinha antes do reajuste, o preço final praticado pela loja é:`,
    alternativas: [
      { letra: "A", texto: "4% menor.", correta: true },
      { letra: "B", texto: "exatamente igual.", correta: false },
      { letra: "C", texto: "4% maior.", correta: false },
      { letra: "D", texto: "20% menor.", correta: false },
      { letra: "E", texto: "40% menor.", correta: false }
    ],
    resolucaoHtml: `
      <div class="space-y-4 text-xs">
        <div class="bg-blue-950/40 p-4 rounded-xl border border-blue-500/30 space-y-2">
          <h4 class="font-bold text-blue-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Por que a Alternativa A é a Correta?
          </h4>
          <p class="text-slate-200 leading-relaxed">
            1. <strong>Fatores de multiplicação:</strong> um aumento de 20% corresponde a multiplicar por $1{,}20$; um desconto de 20% corresponde a multiplicar por $0{,}80$. Variações sucessivas se <strong>multiplicam</strong>, nunca se somam.
            <br><br>
            2. <strong>Aplicando ao preço inicial $P$:</strong>
            $$P_{final} = P \\times 1{,}20 \\times 0{,}80$$
            $$P_{final} = P \\times 0{,}96$$
            3. <strong>Interpretação:</strong> o preço final vale 96% do original, ou seja, houve uma queda de
            $$100\\% - 96\\% = 4\\%$$
            <br>
            4. <strong>Conferindo com número:</strong> se $P = R\\$\\ 2\\,000$, o reajuste leva a $R\\$\\ 2\\,400$; o desconto de 20% sobre $2\\,400$ retira $R\\$\\ 480$, resultando em $R\\$\\ 1\\,920$ — exatamente $R\\$\\ 80$ a menos, que são 4% de $2\\,000$ (<strong>Alternativa A</strong>).
            <br><br>
            5. <strong>A raiz do fenômeno:</strong> o aumento incide sobre o valor menor e o desconto incide sobre o valor maior. Bases diferentes, efeitos diferentes.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">B) Incorreta:</strong> é a armadilha central da questão — supor que +20% e −20% se cancelam.
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">C) Incorreta:</strong> inverte o sentido da variação; $0{,}96 < 1$, logo o preço caiu.
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">D) e E) Incorretas:</strong> somam ou ignoram um dos percentuais em vez de multiplicar os fatores.
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-emerald-400">Dica ENEM:</strong> aumento e desconto de mesmo percentual $x$ sempre geram queda de $x^2$ (em decimal): $0{,}2^2 = 0{,}04 = 4\\%$.
          </div>
        </div>
      </div>
    `,
    conceitos: [
      { icone: "fa-percent", titulo: "Fator de Multiplicação", text: "Aumento de x% → multiplicar por (1 + x/100); desconto de x% → multiplicar por (1 − x/100)." },
      { icone: "fa-layer-group", titulo: "Variações Sucessivas", text: "Percentuais aplicados em sequência se multiplicam; somá-los é o erro mais comum." },
      { icone: "fa-arrows-left-right", titulo: "Mudança de Base", text: "Cada percentual incide sobre um valor diferente, por isso não há simetria entre subir e descer." }
    ],
    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-blue-300 block"><i class="fa-solid fa-chart-column"></i> Trajetória do Preço: R$ 2.000 → R$ 2.400 → R$ 1.920</span>
        <svg viewBox="0 0 460 150" class="w-full h-36 mx-auto">
          <line x1="40" y1="125" x2="440" y2="125" stroke="#64748b" stroke-width="2"/>
          <line x1="40" y1="15" x2="40" y2="125" stroke="#64748b" stroke-width="2"/>
          <line x1="40" y1="55" x2="440" y2="55" stroke="#334155" stroke-width="1" stroke-dasharray="4 4"/>
          <rect x="80" y="55" width="70" height="70" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
          <text x="115" y="48" fill="#93c5fd" font-size="9" font-weight="bold" text-anchor="middle">R$ 2.000</text>
          <text x="115" y="140" fill="#94a3b8" font-size="8" text-anchor="middle">inicial</text>
          <rect x="195" y="31" width="70" height="94" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
          <text x="230" y="24" fill="#93c5fd" font-size="9" font-weight="bold" text-anchor="middle">R$ 2.400</text>
          <text x="230" y="140" fill="#94a3b8" font-size="8" text-anchor="middle">×1,20</text>
          <rect x="310" y="62" width="70" height="63" fill="#172554" stroke="#3b82f6" stroke-width="2"/>
          <text x="345" y="55" fill="#93c5fd" font-size="9" font-weight="bold" text-anchor="middle">R$ 1.920</text>
          <text x="345" y="140" fill="#94a3b8" font-size="8" text-anchor="middle">×0,80</text>
          <text x="412" y="52" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">−4%</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q015",
    numero: "Questão 15",
    ano: "2025",
    caderno: "Caderno 1 (Azul)",
    area: "humanas",
    areaNome: "Ciências Humanas e suas Tecnologias",
    materiaId: "historia",
    materia: "História / Era Vargas & Legislação Trabalhista",
    materiaCor: "amber",
    materiaIcone: "fa-landmark",
    titulo: "CLT e Sindicalismo Atrelado: Direitos Sociais como Instrumento de Controle Político",
    tags: ["História", "Era Vargas", "Estado Novo", "CLT", "Trabalhismo", "Sindicalismo"],
    alternativaCorreta: "C",
    userNotes: "",
    userCustomImage: null,
    enunciado: `Durante o governo de Getúlio Vargas, foram criados o Ministério do Trabalho, Indústria e Comércio, a carteira de trabalho, a jornada de oito horas e, em 1943, a Consolidação das Leis do Trabalho. Simultaneamente, os sindicatos passaram a depender de reconhecimento oficial do Estado, e as greves foram progressivamente restringidas.
    <br><br>
    A associação entre a concessão de direitos e o controle das organizações de trabalhadores indica que a política trabalhista varguista:`,
    alternativas: [
      { letra: "A", texto: "resultou da pressão vitoriosa dos sindicatos anarquistas sobre o governo federal.", correta: false },
      { letra: "B", texto: "consolidou a autonomia sindical ao garantir a livre negociação coletiva entre patrões e empregados.", correta: false },
      { letra: "C", texto: "atendeu a demandas históricas dos trabalhadores ao mesmo tempo em que submeteu suas organizações à tutela do Estado.", correta: true },
      { letra: "D", texto: "eliminou a intervenção estatal nas relações de trabalho, transferindo-as ao poder judiciário.", correta: false },
      { letra: "E", texto: "restringiu-se aos trabalhadores rurais, que formavam a maior parte da população economicamente ativa.", correta: false }
    ],
    resolucaoHtml: `
      <div class="space-y-4 text-xs">
        <div class="bg-amber-950/40 p-4 rounded-xl border border-amber-500/30 space-y-2">
          <h4 class="font-bold text-amber-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Por que a Alternativa C é a Correta?
          </h4>
          <p class="text-slate-200 leading-relaxed">
            1. <strong>A dupla face do trabalhismo:</strong> o enunciado apresenta dois movimentos simultâneos — concessão de direitos (carteira, jornada, CLT) e controle das organizações (reconhecimento oficial, restrição às greves). A resposta precisa contemplar os dois, e não apenas um.
            <br><br>
            2. <strong>Demandas antigas:</strong> jornada de oito horas, férias e regulamentação do trabalho feminino e infantil eram bandeiras do movimento operário desde as greves de 1917. Vargas as incorporou — mas como <strong>outorga do Estado</strong>, não como conquista negociada.
            <br><br>
            3. <strong>Tutela estatal:</strong> o sindicato único por categoria, o reconhecimento pelo Ministério do Trabalho e o imposto sindical retiraram das entidades a independência financeira e política. O trabalhador ganhava direitos; o sindicato perdia autonomia.
            <br><br>
            4. <strong>O efeito político:</strong> isso construiu a imagem de Vargas como "pai dos pobres" e canalizou o apoio popular para o governo, esvaziando o sindicalismo combativo (<strong>Alternativa C</strong>).
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">A) Incorreta:</strong> os anarcossindicalistas foram justamente os mais reprimidos e marginalizados pelo modelo varguista.
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">B) e D) Incorretas:</strong> invertem o sentido do processo — houve mais intervenção estatal, não menos.
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">E) Incorreta:</strong> a CLT alcançou os trabalhadores urbanos; o campo só seria contemplado décadas depois, com o Estatuto do Trabalhador Rural (1963).
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-emerald-400">Dica ENEM:</strong> quando o enunciado descreve dois movimentos opostos, desconfie das alternativas que só mencionam um deles.
          </div>
        </div>
      </div>
    `,
    conceitos: [
      { icone: "fa-file-signature", titulo: "CLT (1943)", text: "Reuniu a legislação trabalhista dispersa e firmou a marca social do governo Vargas." },
      { icone: "fa-people-roof", titulo: "Sindicalismo Atrelado", text: "Sindicato único por categoria, reconhecido e financiado sob controle do Ministério do Trabalho." },
      { icone: "fa-hand-holding-heart", titulo: "Outorga x Conquista", text: "Direitos apresentados como dádiva do Estado, e não como resultado da luta operária." }
    ],
    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-amber-300 block"><i class="fa-solid fa-scale-unbalanced"></i> As Duas Faces da Política Trabalhista Varguista</span>
        <svg viewBox="0 0 460 150" class="w-full h-36 mx-auto">
          <rect x="20" y="25" width="185" height="100" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
          <text x="112" y="46" fill="#fcd34d" font-size="10" font-weight="bold" text-anchor="middle">Concessão</text>
          <text x="112" y="66" fill="#e2e8f0" font-size="8" text-anchor="middle">Carteira de trabalho</text>
          <text x="112" y="82" fill="#e2e8f0" font-size="8" text-anchor="middle">Jornada de 8 horas</text>
          <text x="112" y="98" fill="#e2e8f0" font-size="8" text-anchor="middle">CLT, 1943</text>
          <text x="112" y="114" fill="#e2e8f0" font-size="8" text-anchor="middle">Justiça do Trabalho</text>
          <rect x="255" y="25" width="185" height="100" rx="8" fill="#0f172a" stroke="#f87171" stroke-width="2"/>
          <text x="347" y="46" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">Controle</text>
          <text x="347" y="66" fill="#e2e8f0" font-size="8" text-anchor="middle">Sindicato único oficial</text>
          <text x="347" y="82" fill="#e2e8f0" font-size="8" text-anchor="middle">Imposto sindical</text>
          <text x="347" y="98" fill="#e2e8f0" font-size="8" text-anchor="middle">Greves restringidas</text>
          <text x="347" y="114" fill="#e2e8f0" font-size="8" text-anchor="middle">Censura ao operariado</text>
          <line x1="230" y1="35" x2="230" y2="115" stroke="#475569" stroke-width="2" stroke-dasharray="5 4"/>
          <text x="230" y="140" fill="#94a3b8" font-size="9" font-weight="bold" text-anchor="middle">mesma política</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q032",
    numero: "Questão 32",
    ano: "2025",
    caderno: "Caderno 1 (Azul)",
    area: "humanas",
    areaNome: "Ciências Humanas e suas Tecnologias",
    materiaId: "sociologia",
    materia: "Sociologia / Durkheim & Divisão do Trabalho",
    materiaCor: "pink",
    materiaIcone: "fa-users",
    titulo: "Solidariedade Mecânica e Orgânica: a Coesão Social em Durkheim",
    tags: ["Sociologia", "Durkheim", "Solidariedade Orgânica", "Divisão do Trabalho", "Coesão Social", "Anomia"],
    alternativaCorreta: "E",
    userNotes: "",
    userCustomImage: null,
    enunciado: `Émile Durkheim observou que, nas sociedades industriais, os indivíduos exercem funções cada vez mais especializadas e distintas entre si. Um cirurgião, um eletricista e um motorista de aplicativo compartilham poucas crenças e experiências comuns, mas nenhum deles conseguiria manter seu modo de vida sem os serviços prestados pelos demais.
    <br><br>
    Segundo o autor, o vínculo social descrito nessa situação decorre da:`,
    alternativas: [
      { letra: "A", texto: "uniformidade das consciências individuais em torno de uma tradição partilhada.", correta: false },
      { letra: "B", texto: "coerção exercida pela classe proprietária dos meios de produção sobre os trabalhadores.", correta: false },
      { letra: "C", texto: "afinidade eletiva entre a ética religiosa e a racionalidade econômica.", correta: false },
      { letra: "D", texto: "ausência de normas capaz de produzir um estado permanente de anomia social.", correta: false },
      { letra: "E", texto: "interdependência gerada pela divisão social do trabalho entre funções especializadas.", correta: true }
    ],
    resolucaoHtml: `
      <div class="space-y-4 text-xs">
        <div class="bg-pink-950/40 p-4 rounded-xl border border-pink-500/30 space-y-2">
          <h4 class="font-bold text-pink-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Por que a Alternativa E é a Correta?
          </h4>
          <p class="text-slate-200 leading-relaxed">
            1. <strong>O problema de Durkheim:</strong> em <em>Da Divisão do Trabalho Social</em> (1893), ele investiga o que mantém unida uma sociedade cujos membros são cada vez mais diferentes uns dos outros.
            <br><br>
            2. <strong>Solidariedade mecânica:</strong> típica das sociedades tradicionais e de baixa especialização. A coesão vem da <strong>semelhança</strong> — mesmas crenças, mesmos trabalhos, forte consciência coletiva.
            <br><br>
            3. <strong>Solidariedade orgânica:</strong> típica das sociedades industriais. A coesão vem justamente da <strong>diferença</strong>: como cada um domina apenas uma função, todos dependem do trabalho dos outros, como os órgãos de um corpo. É exatamente o caso do cirurgião, do eletricista e do motorista.
            <br><br>
            4. <strong>Conclusão:</strong> o vínculo descrito nasce da interdependência produzida pela divisão social do trabalho (<strong>Alternativa E</strong>).
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">A) Incorreta:</strong> descreve a solidariedade mecânica, e o enunciado afirma que essas pessoas partilham poucas crenças em comum.
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">B) Incorreta:</strong> é a chave marxista de leitura, centrada em exploração e conflito de classes — não é o argumento de Durkheim.
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">C) Incorreta:</strong> é o conceito weberiano de <em>A Ética Protestante e o Espírito do Capitalismo</em>.
          </div>
          <div class="p-3 bg-slate-950 rounded border border-slate-800">
            <strong class="text-rose-400">D) Incorreta:</strong> anomia é a <strong>falha</strong> da regulação social. O enunciado descreve coesão funcionando, não sua ausência.
          </div>
        </div>
        <div class="p-3 bg-slate-950 rounded border border-slate-800 text-[11px]">
          <strong class="text-emerald-400">Dica ENEM:</strong> identifique o autor pela palavra-chave — <strong>coesão e função</strong> remetem a Durkheim; <strong>classe e exploração</strong>, a Marx; <strong>ação social e racionalidade</strong>, a Weber.
        </div>
      </div>
    `,
    conceitos: [
      { icone: "fa-clone", titulo: "Solidariedade Mecânica", text: "Coesão pela semelhança entre os indivíduos e forte consciência coletiva." },
      { icone: "fa-diagram-project", titulo: "Solidariedade Orgânica", text: "Coesão pela complementaridade entre funções especializadas e interdependentes." },
      { icone: "fa-triangle-exclamation", titulo: "Anomia", text: "Estado de enfraquecimento das normas que regulam a conduta e a integração social." }
    ],
    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-pink-300 block"><i class="fa-solid fa-circle-nodes"></i> Dois Tipos de Coesão Social em Durkheim</span>
        <svg viewBox="0 0 460 160" class="w-full h-36 mx-auto">
          <text x="112" y="22" fill="#f9a8d4" font-size="10" font-weight="bold" text-anchor="middle">Mecânica: coesão pela semelhança</text>
          <circle cx="52" cy="70" r="15" fill="#500724" stroke="#f472b6" stroke-width="2"/>
          <circle cx="92" cy="70" r="15" fill="#500724" stroke="#f472b6" stroke-width="2"/>
          <circle cx="132" cy="70" r="15" fill="#500724" stroke="#f472b6" stroke-width="2"/>
          <circle cx="172" cy="70" r="15" fill="#500724" stroke="#f472b6" stroke-width="2"/>
          <circle cx="72" cy="108" r="15" fill="#500724" stroke="#f472b6" stroke-width="2"/>
          <circle cx="112" cy="108" r="15" fill="#500724" stroke="#f472b6" stroke-width="2"/>
          <circle cx="152" cy="108" r="15" fill="#500724" stroke="#f472b6" stroke-width="2"/>
          <text x="112" y="140" fill="#94a3b8" font-size="8" text-anchor="middle">unidades idênticas e intercambiáveis</text>
          <line x1="230" y1="30" x2="230" y2="130" stroke="#334155" stroke-width="1" stroke-dasharray="4 4"/>
          <text x="347" y="22" fill="#f9a8d4" font-size="10" font-weight="bold" text-anchor="middle">Orgânica: coesão pela diferença</text>
          <line x1="347" y1="55" x2="300" y2="95" stroke="#db2777" stroke-width="2"/>
          <line x1="347" y1="55" x2="394" y2="95" stroke="#db2777" stroke-width="2"/>
          <line x1="300" y1="95" x2="394" y2="95" stroke="#db2777" stroke-width="2"/>
          <circle cx="347" cy="55" r="17" fill="#831843" stroke="#f472b6" stroke-width="2"/>
          <text x="347" y="59" fill="#fbcfe8" font-size="8" font-weight="bold" text-anchor="middle">saúde</text>
          <circle cx="300" cy="95" r="17" fill="#831843" stroke="#f472b6" stroke-width="2"/>
          <text x="300" y="99" fill="#fbcfe8" font-size="8" font-weight="bold" text-anchor="middle">energia</text>
          <circle cx="394" cy="95" r="17" fill="#831843" stroke="#f472b6" stroke-width="2"/>
          <text x="394" y="99" fill="#fbcfe8" font-size="8" font-weight="bold" text-anchor="middle">transporte</text>
          <text x="347" y="140" fill="#94a3b8" font-size="8" text-anchor="middle">funções distintas e interdependentes</text>
        </svg>
      </div>
    `,
    simuladorType: null
  }

];
