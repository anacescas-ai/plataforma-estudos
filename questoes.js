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

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-emerald-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre toda a cadeia de eventos da eutrofização cobrada no Enem — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">1.</span> O que é eutrofização</h4>
          <p>
            Eutrofização é o enriquecimento de um corpo de água com nutrientes — principalmente compostos de <strong>nitrogênio</strong> (nitrato, $NO_3^-$) e <strong>fósforo</strong> (fosfato, $PO_4^{3-}$). Ela pode ser natural e lenta (um lago envelhecendo ao longo de milênios) ou <strong>artificial e rápida</strong>, causada por esgoto doméstico ou, como no enunciado, pelo escoamento de fertilizantes agrícolas — a chamada eutrofização antrópica.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">2.</span> Por que nitrogênio e fósforo disparam o crescimento das algas</h4>
          <p>
            Em ecossistemas aquáticos naturais, o crescimento de produtores primários (algas e cianobactérias) costuma ser limitado pela escassez de nitrogênio e fósforo — são os chamados <strong>fatores limitantes</strong>. Quando fertilizantes agrícolas chegam em grande quantidade, esses nutrientes deixam de ser escassos, e a população de algas cresce de forma explosiva. Esse crescimento descontrolado é chamado de <strong>floração de algas</strong> (algal bloom) — é a "densa camada esverdeada" que os moradores observaram.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">3.</span> O bloqueio de luz e a morte em cascata</h4>
          <p>
            A camada de algas na superfície bloqueia a passagem de luz para as camadas mais profundas do lago. Sem luz, as algas e plantas aquáticas submersas não conseguem fotossintetizar e morrem. Some a isso as próprias algas da superfície, que têm ciclo de vida curto e morrem em massa depois da floração. O resultado é um grande volume de <strong>matéria orgânica morta</strong> acumulada na água.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">4.</span> O papel decisivo dos decompositores aeróbios</h4>
          <p>
            Bactérias e fungos decompositores <strong>aeróbios</strong> se multiplicam para degradar essa matéria orgânica extra. Para isso, eles respiram, consumindo oxigênio dissolvido na água:
          </p>
          $$C_6H_{12}O_6 + 6\\,O_2 \\rightarrow 6\\,CO_2 + 6\\,H_2O + \\text{energia}$$
          <p>
            Quanto mais matéria orgânica para decompor, mais decompositores atuam, e mais oxigênio dissolvido é consumido — muito mais rápido do que ele consegue ser reposto (pela fotossíntese remanescente ou pela troca com o ar).
          </p>
          <p class="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-3 text-xs">
            <strong class="text-emerald-300">O ponto-chave da questão:</strong> o oxigênio despenca não porque algo o consome diretamente nos peixes, mas porque um exército de decompositores, alimentado pela morte das algas, o consome no processo de decomposição.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">5.</span> Anóxia e asfixia dos peixes</h4>
          <p>
            Com o oxigênio dissolvido próximo de zero (condição chamada <strong>anóxia</strong>, ou hipóxia quando parcial), os peixes — que dependem do $O_2$ dissolvido captado pelas brânquias para respirar — não conseguem mais obter oxigênio suficiente e morrem asfixiados. É esse mecanismo, e não uma toxina, que explica a mortandade em massa observada semanas depois da floração.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">6.</span> Descartando as explicações concorrentes</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Toxicidade direta</strong>
              Nas concentrações típicas de escoamento agrícola, nitrato e fosfato são nutrientes, não venenos para peixes. O dano é indireto, via oxigênio.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Aumento de temperatura</strong>
              Existe uma pequena absorção extra de luz pelas algas, mas essa variação térmica é insuficiente para explicar mortandade em massa.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Competição por alimento</strong>
              Algas são produtoras primárias; muitas espécies de peixe até se alimentam delas ou de organismos que delas dependem — não é uma disputa direta por comida.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Redução de CO2</strong>
              A fotossíntese intensa de fato consome CO2, mas peixes não dependem de CO2 dissolvido para respirar — dependem de O2. Essa alternativa troca o gás errado.
            </div>
          </div>
        </div>
      </div>
    `,

    /* ------------------------------------------------------------------
       2. RESOLUÇÃO COMENTADA
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-4 text-xs">

        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <h4 class="font-bold text-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-emerald-400"></i> Estratégia em 3 passos
          </h4>
          <p class="text-slate-300 leading-relaxed">
            <strong>Passo 1 — Identifique a cadeia de eventos.</strong> Fertilizante → floração de algas → bloqueio de luz → morte de algas → decomposição → consumo de O2 → morte dos peixes.
            <br><br>
            <strong>Passo 2 — Localize o elo que mata os peixes.</strong> Peixes respiram O2 dissolvido pelas brânquias; o elo fatal é a queda desse oxigênio, não uma toxina.
            <br><br>
            <strong>Passo 3 — Identifique quem consome o oxigênio.</strong> Os decompositores aeróbios, ao degradar a matéria orgânica das algas mortas, respiram e consomem o O2 da água.
          </p>
        </div>

        <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/40 space-y-2">
          <h4 class="font-bold text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa D — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            "Consumo do oxigênio dissolvido pelos decompositores aeróbios que degradam a matéria orgânica." É exatamente o elo causal: mais nutrientes → mais algas → mais matéria orgânica morta → mais decomposição aeróbia → menos O2 dissolvido → peixes asfixiados. O intervalo de "semanas depois" no enunciado bate com o tempo que leva para a floração morrer e ser decomposta.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa A — toxicidade direta de nitrato e fosfato</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> assumir que, por virem de fertilizantes ("produtos químicos"), nitrato e fosfato devem ser venenosos.
              <br>
              <strong>Onde quebra:</strong> nas concentrações do escoamento agrícola, esses íons são nutrientes que estimulam o crescimento vegetal — não toxinas para peixes. O dano é indireto, mediado pela queda de oxigênio.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — elevação de temperatura</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lembrar que superfícies escuras (a camada verde de algas) absorvem mais luz solar e aquecem.
              <br>
              <strong>Onde quebra:</strong> esse efeito térmico é real, mas pequeno demais para causar mortandade em massa — e não é o mecanismo central de uma floração de algas seguida de mortandade, que é sempre associada à queda de oxigênio.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa C — competição por alimento</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> tratar "mais algas" como sinônimo de "menos comida disponível para os peixes".
              <br>
              <strong>Onde quebra:</strong> algas são a base da cadeia alimentar aquática — sua explosão populacional não retira alimento dos peixes, muito pelo contrário. O problema nunca foi escassez de comida.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — redução de CO2</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> perceber corretamente que a fotossíntese das algas consome CO2 em excesso, e presumir que isso afeta a respiração dos peixes.
              <br>
              <strong>Onde quebra:</strong> troca o gás relevante. Peixes captam <strong>O2</strong> dissolvido pelas brânquias para respirar — não dependem de CO2 disponível. O gás que realmente cai a níveis letais, pela decomposição, é o oxigênio.
            </p>
          </div>
        </div>

        <div class="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30">
          <strong class="text-emerald-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            Cada alternativa errada pega um fato real do cenário (fertilizante, luz absorvida, mais algas, fotossíntese) e o conecta ao efeito errado. Em toda questão de eutrofização, o vilão final é sempre a <strong>queda do oxigênio dissolvido</strong> pela decomposição aeróbia — decore esse elo e a maioria dos distratores cai sozinha.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-seedling", titulo: "Fator Limitante", text: "Nitrogênio e fósforo limitam a produtividade primária; em excesso, disparam a floração de algas." },
      { icone: "fa-bacterium", titulo: "Decomposição Aeróbia", text: "Decompositores consomem O2 dissolvido ao degradar a matéria orgânica morta." },
      { icone: "fa-fish", titulo: "Anoxia", text: "Ambiente com O2 dissolvido próximo de zero; inviabiliza a respiração de peixes e invertebrados." },
      { icone: "fa-sun", titulo: "Bloqueio de luz", text: "A camada de algas na superfície impede a fotossíntese em profundidade, matando produtores submersos." },
      { icone: "fa-arrow-down-wide-short", titulo: "Cadeia causal", text: "Fertilizante → floração → morte das algas → decomposição → queda de O2 → morte dos peixes." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "A cadeia completa de eventos",
        legenda: "Do fertilizante à mortandade: cada elo depende do anterior. O elo que mata os peixes é sempre a queda de oxigênio, nunca uma toxina direta.",
        svg: `
          <svg viewBox="0 0 460 130" class="w-full h-auto">
            <rect x="10" y="45" width="80" height="35" rx="5" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
            <text x="50" y="66" fill="#e2e8f0" font-size="8" font-weight="bold" text-anchor="middle">Fertilizante</text>
            <line x1="90" y1="62" x2="108" y2="62" stroke="#64748b" stroke-width="2" marker-end="url(#pq95)"/>

            <rect x="112" y="45" width="80" height="35" rx="5" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
            <text x="152" y="60" fill="#d1fae5" font-size="8" font-weight="bold" text-anchor="middle">Floração de</text>
            <text x="152" y="72" fill="#d1fae5" font-size="8" font-weight="bold" text-anchor="middle">algas</text>
            <line x1="192" y1="62" x2="210" y2="62" stroke="#64748b" stroke-width="2" marker-end="url(#pq95)"/>

            <rect x="214" y="45" width="80" height="35" rx="5" fill="#422006" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="254" y="60" fill="#fde68a" font-size="8" font-weight="bold" text-anchor="middle">Morte das</text>
            <text x="254" y="72" fill="#fde68a" font-size="8" font-weight="bold" text-anchor="middle">algas</text>
            <line x1="294" y1="62" x2="312" y2="62" stroke="#64748b" stroke-width="2" marker-end="url(#pq95)"/>

            <rect x="316" y="45" width="66" height="35" rx="5" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
            <text x="349" y="58" fill="#ede9fe" font-size="8" font-weight="bold" text-anchor="middle">Decompo-</text>
            <text x="349" y="70" fill="#ede9fe" font-size="8" font-weight="bold" text-anchor="middle">sição</text>
            <line x1="382" y1="62" x2="400" y2="62" stroke="#64748b" stroke-width="2" marker-end="url(#pq95)"/>

            <rect x="404" y="45" width="50" height="35" rx="5" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
            <text x="429" y="58" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">↓ O2</text>
            <text x="429" y="70" fill="#fca5a5" font-size="7" text-anchor="middle">peixes</text>
            <defs>
              <marker id="pq95" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Corte transversal do lago",
        legenda: "A camada de algas bloqueia a luz. Abaixo dela, sem fotossíntese e cheia de matéria orgânica em decomposição, forma-se a zona anóxica.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <rect x="30" y="30" width="400" height="140" fill="#0c4a6e" opacity="0.4"/>
            <rect x="30" y="30" width="400" height="22" fill="#065f46"/>
            <text x="230" y="46" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">Floração de algas bloqueia a luz</text>
            <circle cx="80" cy="100" r="4" fill="#334155"/>
            <circle cx="150" cy="120" r="4" fill="#334155"/>
            <circle cx="230" cy="90" r="4" fill="#334155"/>
            <circle cx="300" cy="130" r="4" fill="#334155"/>
            <circle cx="370" cy="105" r="4" fill="#334155"/>
            <text x="230" y="160" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">Zona anóxica: O₂ ≈ 0 — matéria orgânica em decomposição</text>
          </svg>`
      },
      {
        titulo: "Oxigênio dissolvido ao longo do tempo",
        legenda: "Nas primeiras semanas o O2 se mantém; conforme a decomposição avança, ele despenca — coincidindo com o momento em que os peixes começam a morrer.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <line x1="55" y1="150" x2="435" y2="150" stroke="#64748b" stroke-width="2"/>
            <line x1="55" y1="25" x2="55" y2="150" stroke="#64748b" stroke-width="2"/>
            <text x="48" y="32" fill="#94a3b8" font-size="9" text-anchor="end">O₂</text>
            <text x="430" y="168" fill="#94a3b8" font-size="9" text-anchor="end">tempo</text>
            <polyline points="55,55 150,58 230,70 300,105 370,135 430,144" fill="none" stroke="#f87171" stroke-width="3"/>
            <circle cx="230" cy="70" r="4" fill="#fbbf24"/>
            <text x="230" y="55" fill="#fde68a" font-size="8" font-weight="bold" text-anchor="middle">floração morre</text>
            <circle cx="370" cy="135" r="4" fill="#f87171"/>
            <text x="370" y="120" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">peixes começam a morrer</text>
          </svg>`
      },
      {
        titulo: "Mapa das cinco alternativas",
        legenda: "Cada alternativa erra por trocar o mecanismo real (queda de O2 pela decomposição) por outro efeito plausível, mas insuficiente ou incorreto.",
        svg: `
          <svg viewBox="0 0 460 210" class="w-full h-auto">
            <text x="30" y="15" fill="#94a3b8" font-size="9">Alternativa</text>
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>

            <text x="30" y="42" fill="#e2e8f0" font-size="10">A — Toxicidade direta</text>
            <text x="400" y="42" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="69" fill="#e2e8f0" font-size="10">B — Aumento de temperatura</text>
            <text x="400" y="69" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="96" fill="#e2e8f0" font-size="10">C — Competição por alimento</text>
            <text x="400" y="96" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <rect x="15" y="107" width="430" height="27" rx="5" fill="#065f46" opacity="0.35"/>
            <text x="30" y="125" fill="#6ee7b7" font-size="10" font-weight="bold">D — Consumo de O2 pelos decompositores</text>
            <text x="400" y="125" fill="#34d399" font-size="12" text-anchor="middle" font-weight="bold">✓</text>

            <text x="30" y="151" fill="#e2e8f0" font-size="10">E — Redução de CO2</text>
            <text x="400" y="151" fill="#f87171" font-size="12" text-anchor="middle">✕</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: quanto fertilizante leva à mortandade de peixes?",
      descricao: "Aumente a entrada de nutrientes (nitrato e fosfato) e acompanhe o efeito em cadeia: mais algas, mais matéria orgânica morta, mais decomposição, menos oxigênio.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Entrada de fertilizante (N e P)</span><span class="text-emerald-300 font-bold" data-out="fert">40%</span>
              </label>
              <input type="range" data-sim="fert" min="0" max="100" value="40" step="5" class="w-full accent-emerald-500">
              <p class="text-[10px] text-slate-500 mt-1"><i class="fa-solid fa-flask"></i> Este é o único fator que a questão faz variar — mexa nele e observe o resto da cadeia.</p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-emerald-300 font-bold">Floração de algas</span>
                  <span class="text-emerald-300 font-mono" data-out="algas">40%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="algas" class="h-full bg-emerald-500 transition-all" style="width:40%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-amber-300 font-bold">Matéria orgânica morta</span>
                  <span class="text-amber-300 font-mono" data-out="materia">40%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="materia" class="h-full bg-amber-500 transition-all" style="width:40%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-sky-300 font-bold">Oxigênio dissolvido</span>
                  <span class="text-sky-300 font-mono" data-out="o2">60%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="o2" class="h-full bg-sky-500 transition-all" style="width:60%"></div>
                </div>
              </div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var campo = raiz.querySelector('[data-sim="fert"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };

        function atualizar() {
          var fert = parseFloat(campo.value);
          var algas = fert;
          var materia = fert;
          var o2 = Math.max(0, 100 - fert * 1.1);

          saida('fert').textContent = fert.toFixed(0) + '%';
          saida('algas').textContent = algas.toFixed(0) + '%';
          saida('materia').textContent = materia.toFixed(0) + '%';
          saida('o2').textContent = o2.toFixed(0) + '%';

          barra('algas').style.width = algas + '%';
          barra('materia').style.width = materia + '%';
          barra('o2').style.width = o2 + '%';

          var v = saida('veredito');
          if (o2 >= 55) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            v.innerHTML = '<strong>Lago saudável.</strong> Oxigênio dissolvido em nível seguro para os peixes respirarem normalmente.';
          } else if (o2 >= 20) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            v.innerHTML = '<strong>Hipóxia em andamento.</strong> A decomposição da floração já está consumindo oxigênio mais rápido do que ele é reposto — peixes começam a sofrer.';
          } else {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200';
            v.innerHTML = '<strong>Anóxia — risco de mortandade.</strong> Oxigênio dissolvido próximo de zero. É esse consumo pelos decompositores aeróbios que explica a morte dos peixes, não uma toxina.';
          }
        }

        campo.addEventListener('input', atualizar);
        atualizar();
      }
    },

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
  },

  {
    id: "q091",
    numero: "Questão 91",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "quimica",
    materia: "Química / Físico-Química — Adsorção e Porosidade",
    materiaCor: "cyan",
    materiaIcone: "fa-vial",
    titulo: "Carvão Ativado: Por que a Porosidade Determina a Capacidade de Adsorção",
    tags: ["Química", "Físico-Química", "Adsorção", "Carvão Ativado", "Porosidade", "Área Superficial"],
    alternativaCorreta: "D",
    userNotes: "",
    userCustomImage: null,

    enunciado: `A filtração em carvão é uma das mais antigas formas de purificação de água. O carvão ativado, diferentemente do carvão comum, é útil para ser empregado na remoção de material orgânico, cloro e outros contaminantes. Essa capacidade decorre de suas propriedades de adsorção. A origem do material utilizado para produzir o carvão ativado pode influenciar sua porosidade e, consequentemente, interferir na capacidade do material de remover impurezas. Na figura, é ilustrada esquematicamente a diferença entre as estruturas físicas do carvão comum e do carvão ativado.
    <br><br>
    <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 my-2">
      <svg viewBox="0 0 560 280" class="w-full h-auto max-w-xl mx-auto">
        <text x="120" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">Carvão comum</text>
        <circle cx="120" cy="150" r="90" fill="#1e293b" stroke="#64748b" stroke-width="2.5"/>
        <circle cx="95" cy="115" r="13" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
        <circle cx="145" cy="100" r="10" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
        <circle cx="155" cy="150" r="12" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
        <circle cx="90" cy="180" r="11" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
        <circle cx="140" cy="190" r="9" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
        <line x1="60" y1="72" x2="93" y2="108" stroke="#94a3b8" stroke-width="1.2"/>
        <text x="35" y="66" fill="#cbd5e1" font-size="10">Macroporo</text>
        <text x="120" y="255" text-anchor="middle" fill="#64748b" font-size="10">poucos poros grandes — pouca área interna</text>
        <line x1="228" y1="150" x2="272" y2="150" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4"/>
        <text x="410" y="22" text-anchor="middle" fill="#a5f3fc" font-size="13" font-weight="bold">Carvão ativado</text>
        <path d="M 320 150 C 320 95, 360 58, 410 58 C 465 58, 502 95, 502 150 C 502 205, 465 242, 410 242 C 358 242, 320 205, 320 150 Z" fill="#083344" stroke="#22d3ee" stroke-width="2.5"/>
        <circle cx="360" cy="105" r="13" fill="#0e2a33" stroke="#38bdf8" stroke-width="2"/>
        <circle cx="455" cy="185" r="12" fill="#0e2a33" stroke="#38bdf8" stroke-width="2"/>
        <circle cx="345" cy="175" r="7" fill="#0e2a33" stroke="#34d399" stroke-width="2"/>
        <circle cx="435" cy="105" r="7" fill="#0e2a33" stroke="#34d399" stroke-width="2"/>
        <circle cx="395" cy="140" r="3.5" fill="#0e2a33" stroke="#fbbf24" stroke-width="1.5"/>
        <circle cx="420" cy="165" r="3" fill="#0e2a33" stroke="#fbbf24" stroke-width="1.5"/>
        <circle cx="380" cy="115" r="3" fill="#0e2a33" stroke="#fbbf24" stroke-width="1.5"/>
        <circle cx="396" cy="140" r="1.4" fill="#0f172a"/>
        <circle cx="399" cy="142" r="1.2" fill="#0f172a"/>
        <line x1="360" y1="70" x2="360" y2="94" stroke="#38bdf8" stroke-width="1.2"/>
        <text x="360" y="60" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="bold">Macroporo</text>
        <line x1="330" y1="200" x2="343" y2="180" stroke="#34d399" stroke-width="1.2"/>
        <text x="322" y="212" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="bold">Mesoporo</text>
        <line x1="455" y1="145" x2="437" y2="108" stroke="#34d399" stroke-width="1.2"/>
        <text x="470" y="150" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="bold">Mesoporo</text>
        <line x1="410" y1="205" x2="398" y2="145" stroke="#fbbf24" stroke-width="1.2"/>
        <text x="410" y="216" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">Microporo</text>
        <line x1="440" y1="70" x2="399" y2="139" stroke="#f87171" stroke-width="1.2"/>
        <text x="452" y="62" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="bold">Impureza adsorvida</text>
        <text x="410" y="255" text-anchor="middle" fill="#67e8f9" font-size="10">rede densa de poros — enorme área interna</text>
      </svg>
    </div>
    <p class="text-slate-400 text-[11px] italic text-center">CORRÊA, M. A. Cosmetologia: ciência e técnica. São Paulo: Medfarma, 2012 (adaptado).</p>
    <br>
    Qual característica do carvão ativado explica a sua maior eficiência nesse processo?`,

    alternativas: [
      { letra: "A", texto: "Massa.", correta: false },
      { letra: "B", texto: "Dureza.", correta: false },
      { letra: "C", texto: "Densidade.", correta: false },
      { letra: "D", texto: "Superfície.", correta: true },
      { letra: "E", texto: "Condutividade.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA — a teoria inteira, não um resumo
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-cyan-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre adsorção, porosidade e área superficial — tudo o que o Enem cobra sobre carvão ativado.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">1.</span> Adsorção não é absorção</h4>
          <p>
            Os dois nomes parecem o mesmo fenômeno, mas descrevem coisas diferentes. Na <strong>absorção</strong>, uma substância penetra no <em>volume</em> de outra — como a água que entra numa esponja. Na <strong>adsorção</strong>, a substância fica retida apenas na <em>superfície</em> de um sólido, grudada na camada mais externa, sem penetrar sua estrutura interna.
          </p>
          <p class="bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs">
            <strong class="text-cyan-300">Consequência direta:</strong> como a adsorção é um fenômeno de superfície, a quantidade de substância retida depende diretamente de <strong>quanta superfície está disponível</strong> para o contato. É essa ideia que resolve a questão inteira.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">2.</span> Como se fabrica o carvão ativado</h4>
          <p>
            O processo tem duas etapas. Primeiro, a <strong>carbonização</strong>: um material orgânico rico em carbono (madeira, casca de coco, casca de arroz, ossos) é aquecido sem oxigênio, eliminando gases e líquidos e deixando um esqueleto de carbono. Depois, a <strong>ativação</strong> (física, com vapor d'água ou CO₂ quentes, ou química, com ácidos ou bases): esse tratamento "escava" o esqueleto de carbono, abrindo uma rede imensa de canais e cavidades internas.
          </p>
          <p>
            É por isso que o enunciado diz que "a origem do material... pode influenciar sua porosidade": matérias-primas diferentes têm estruturas de fibras diferentes, e a ativação escava essas fibras de formas distintas, gerando redes de poros com tamanhos e distribuições diferentes.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">3.</span> A anatomia dos poros</h4>
          <p>
            A IUPAC classifica os poros por diâmetro em três faixas:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-sky-500/30">
              <strong class="text-sky-300 block mb-1">Macroporos</strong>
              Diâmetro &gt; 50 nm. Funcionam como "corredores de acesso" para o interior do grão.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-emerald-500/30">
              <strong class="text-emerald-300 block mb-1">Mesoporos</strong>
              Diâmetro entre 2 e 50 nm. Conectam os macroporos às regiões mais internas.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-amber-500/30">
              <strong class="text-amber-300 block mb-1">Microporos</strong>
              Diâmetro &lt; 2 nm. Respondem pela maior parte da área de adsorção do material.
            </div>
          </div>
          <p>
            Quanto mais fina e ramificada essa rede — especialmente a fração de microporos —, maior a quantidade de "parede interna" exposta ao contaminante.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">4.</span> Por que mais poros significam mais área</h4>
          <p>
            Pense em subdividir um cubo maciço em cubos menores, mantendo o volume total constante. A soma das áreas superficiais de todos os pedaços pequenos é muito maior do que a área do cubo original — porque cada corte cria duas novas faces expostas. Formalmente, para um volume fixo, a área superficial cresce quando o tamanho característico das partículas (ou dos poros) diminui:
          </p>
          $$A \\propto \\frac{1}{r}$$
          <p class="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-3 text-xs">
            <strong class="text-cyan-300">Números reais:</strong> um carvão comum tem área superficial de poucos m² por grama. Um bom carvão ativado chega a <strong>500–1500 m²/g</strong> — a área de uma quadra de tênis dobrada dentro de uma colher de sopa de material.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">5.</span> A força por trás da adsorção</h4>
          <p>
            A retenção do contaminante na parede do poro é, na maioria dos casos, uma <strong>fisissorção</strong>: as moléculas do contaminante são atraídas para a superfície do carbono por <strong>forças de Van der Waals</strong>, interações fracas e de curto alcance. Não há formação de ligação química nova — nem o carvão, nem o contaminante mudam de composição. É um processo físico, reversível, que depende só de "quanta parede" está disponível para essas atrações fracas atuarem.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">6.</span> O que NÃO entra nessa equação</h4>
          <p>
            Nenhuma das outras propriedades citadas nas alternativas participa do mecanismo de adsorção:
          </p>
          <ul class="list-disc list-inside space-y-1 text-xs text-slate-300">
            <li><strong>Massa:</strong> é apenas "quanto material existe", não descreve sua estrutura interna. Duas amostras de mesma massa podem ter capacidades de adsorção completamente diferentes.</li>
            <li><strong>Dureza:</strong> propriedade mecânica, relacionada à resistência a risco e deformação — não tem relação com retenção de moléculas na superfície.</li>
            <li><strong>Densidade:</strong> é uma <em>consequência</em> da porosidade (mais vazios internos, menor densidade), mas não é a <em>causa</em> da adsorção. O que retém o contaminante é a parede do poro, não o quanto o material "pesa por volume".</li>
            <li><strong>Condutividade:</strong> propriedade elétrica, ligada à mobilidade de elétrons na estrutura do carbono — irrelevante para um fenômeno de forças intermoleculares fracas na superfície.</li>
          </ul>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">7.</span> Aplicações que usam esse mesmo princípio</h4>
          <p>
            O mesmo raciocínio — mais poros, mais área, mais adsorção — explica o uso do carvão ativado em filtros domésticos de água, em máscaras e respiradores contra gases, em purificadores de ar e até em produtos cosméticos (fonte da citação do enunciado), sempre buscando maximizar a área de contato disponível por grama de material.
          </p>
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
            <i class="fa-solid fa-list-check text-cyan-400"></i> Estratégia em 3 passos
          </h4>
          <p class="text-slate-300 leading-relaxed">
            <strong>Passo 1 — Identifique o fenômeno.</strong> O enunciado fala em "adsorção" — retenção na <em>superfície</em> do sólido, não no seu volume.
            <br><br>
            <strong>Passo 2 — Ligue porosidade a área.</strong> O enunciado diz que a origem do material "influencia sua porosidade" e, com isso, "a capacidade de remover impurezas". Mais poros (principalmente micro e mesoporos) significam mais parede interna exposta.
            <br><br>
            <strong>Passo 3 — Elimine propriedades que não descrevem área de contato.</strong> Massa, dureza, densidade e condutividade descrevem outros aspectos do material, não o quanto de "parede interna" ele oferece ao contaminante.
          </p>
        </div>

        <div class="bg-cyan-950/40 p-4 rounded-xl border border-cyan-500/40 space-y-2">
          <h4 class="font-bold text-cyan-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa D — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            A eficiência do carvão ativado vem da enorme <strong>área superficial</strong> gerada pela rede de macro, meso e microporos abertos na etapa de ativação. Como a adsorção ocorre pela atração das moléculas do contaminante à superfície do sólido (forças de Van der Waals), quanto maior essa área disponível, mais moléculas podem ficar retidas por grama de carvão. É exatamente a característica física destacada na figura do enunciado.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa A — Massa</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> associar "mais eficiente" a "mais quantidade de material", como se usar mais carvão (mais massa) explicasse a diferença entre o comum e o ativado.
              <br>
              <strong>Onde quebra:</strong> massa é só "quanto material existe", não descreve a estrutura interna do sólido. Duas amostras de mesma massa — uma de carvão comum, outra de ativado — têm capacidades de remoção completamente diferentes, porque o que muda é a organização interna (porosidade), não a quantidade.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — Dureza</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> confundir uma propriedade mecânica do sólido com sua capacidade química de reter substâncias.
              <br>
              <strong>Onde quebra:</strong> dureza mede resistência a risco e deformação da estrutura — não tem qualquer relação com a área disponível para adsorção. Um material poroso pode ser mole ou duro; isso não altera o número de moléculas que sua superfície interna consegue reter.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa C — Densidade</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> notar que o carvão ativado, sendo mais poroso, tende a ser menos denso, e concluir que "densidade menor" seria a explicação da eficiência.
              <br>
              <strong>Onde quebra:</strong> densidade baixa é uma <em>consequência</em> da porosidade, não a <em>causa</em> da adsorção. O que retém o contaminante é a parede interna dos poros — a área de contato —, não "o quanto o material pesa por unidade de volume". Este é o distrator mais sedutor, porque cita uma grandeza que de fato varia entre os dois carvões, só que aponta para o efeito, não para o mecanismo.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — Condutividade</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lembrar que o carbono é usado como condutor em eletrodos e baterias, e misturar esse uso com a purificação de água.
              <br>
              <strong>Onde quebra:</strong> adsorção é um fenômeno de forças intermoleculares fracas na superfície do sólido; não depende de mobilidade de elétrons nem de corrente elétrica. O carvão ativado adsorve normalmente mesmo em situações onde nenhuma condução elétrica está envolvida.
            </p>
          </div>
        </div>

        <div class="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30">
          <strong class="text-emerald-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            As quatro alternativas erradas trocam a causa real do fenômeno — área superficial disponível para adsorção — por outras propriedades físicas do carvão que soam plausíveis (mecânicas, elétricas ou de "quantidade"), mas que não participam do mecanismo de fisissorção descrito no enunciado.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-magnet", titulo: "Adsorção", text: "Retenção de moléculas na SUPERFÍCIE de um sólido, por forças de Van der Waals — diferente de absorção, que penetra o volume." },
      { icone: "fa-draw-polygon", titulo: "Porosidade", text: "Fração de vazios internos do material; mais poros = mais 'parede interna' exposta ao contaminante." },
      { icone: "fa-ruler", titulo: "Classificação IUPAC dos poros", text: "Macroporos > 50 nm, mesoporos 2–50 nm, microporos < 2 nm. Os microporos respondem pela maior parte da área." },
      { icone: "fa-expand", titulo: "Área superficial específica", text: "Pode chegar a 500–1500 m²/g no carvão ativado, contra poucos m²/g no carvão comum." },
      { icone: "fa-fire", titulo: "Carbonização + Ativação", text: "Aquecimento sem O2 forma o esqueleto de carbono; a ativação (vapor, CO2 ou agentes químicos) escava a rede de poros." },
      { icone: "fa-water", titulo: "Aplicação prática", text: "Filtros de água, máscaras de gás e purificadores de ar usam o mesmo princípio: maximizar área por grama." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Carvão comum × carvão ativado: comparação de porosidade",
        legenda: "O carvão comum tem poucos poros grandes. A ativação abre uma rede densa de macro, meso e microporos, multiplicando a área interna disponível para reter contaminantes.",
        svg: `
          <svg viewBox="0 0 460 260" class="w-full h-auto">
            <text x="110" y="22" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">Carvão comum</text>
            <circle cx="110" cy="145" r="85" fill="#1e293b" stroke="#64748b" stroke-width="2.5"/>
            <circle cx="88" cy="112" r="12" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="132" cy="98" r="9" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="140" cy="145" r="11" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="85" cy="172" r="10" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="128" cy="180" r="8" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
            <text x="110" y="245" text-anchor="middle" fill="#64748b" font-size="9">área interna pequena</text>
            <line x1="205" y1="145" x2="245" y2="145" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4"/>
            <text x="350" y="22" text-anchor="middle" fill="#a5f3fc" font-size="12" font-weight="bold">Carvão ativado</text>
            <path d="M 270 145 C 270 92, 308 57, 350 57 C 397 57, 432 92, 432 145 C 432 197, 397 232, 350 232 C 308 232, 270 197, 270 145 Z" fill="#083344" stroke="#22d3ee" stroke-width="2.5"/>
            <circle cx="305" cy="102" r="11" fill="#0e2a33" stroke="#38bdf8" stroke-width="2"/>
            <circle cx="392" cy="175" r="10" fill="#0e2a33" stroke="#38bdf8" stroke-width="2"/>
            <circle cx="292" cy="165" r="6" fill="#0e2a33" stroke="#34d399" stroke-width="2"/>
            <circle cx="375" cy="102" r="6" fill="#0e2a33" stroke="#34d399" stroke-width="2"/>
            <circle cx="338" cy="135" r="3" fill="#0e2a33" stroke="#fbbf24" stroke-width="1.5"/>
            <circle cx="360" cy="158" r="2.5" fill="#0e2a33" stroke="#fbbf24" stroke-width="1.5"/>
            <circle cx="322" cy="112" r="2.5" fill="#0e2a33" stroke="#fbbf24" stroke-width="1.5"/>
            <text x="350" y="245" text-anchor="middle" fill="#67e8f9" font-size="9">área interna enorme</text>
          </svg>`
      },
      {
        titulo: "Escala dos poros segundo a IUPAC",
        legenda: "Os poros são classificados por diâmetro. Os microporos são os menores, mas por serem numerosos, respondem pela maior fatia da área superficial total do carvão ativado.",
        svg: `
          <svg viewBox="0 0 460 170" class="w-full h-auto">
            <line x1="40" y1="90" x2="430" y2="90" stroke="#475569" stroke-width="3"/>
            <circle cx="70" cy="90" r="5" fill="#083344" stroke="#fbbf24" stroke-width="2"/>
            <text x="70" y="118" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">Microporo</text>
            <text x="70" y="132" text-anchor="middle" fill="#94a3b8" font-size="8">&lt; 2 nm</text>
            <line x1="150" y1="90" x2="150" y2="70" stroke="#475569" stroke-width="1.5"/>
            <circle cx="230" cy="90" r="11" fill="#083344" stroke="#34d399" stroke-width="2"/>
            <text x="230" y="126" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="bold">Mesoporo</text>
            <text x="230" y="140" text-anchor="middle" fill="#94a3b8" font-size="8">2 – 50 nm</text>
            <line x1="320" y1="90" x2="320" y2="70" stroke="#475569" stroke-width="1.5"/>
            <circle cx="390" cy="90" r="20" fill="#083344" stroke="#38bdf8" stroke-width="2"/>
            <text x="390" y="134" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="bold">Macroporo</text>
            <text x="390" y="148" text-anchor="middle" fill="#94a3b8" font-size="8">&gt; 50 nm</text>
            <text x="230" y="30" text-anchor="middle" fill="#cbd5e1" font-size="10" font-weight="bold">Diâmetro crescente →</text>
            <rect x="40" y="150" width="390" height="16" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1"/>
            <text x="235" y="162" text-anchor="middle" fill="#94a3b8" font-size="8">os microporos, por serem numerosos, dominam a área total</text>
          </svg>`
      },
      {
        titulo: "Fisissorção: a molécula presa na parede do poro",
        legenda: "Forças de Van der Waals atraem a molécula do contaminante para a parede interna do poro. Não há ligação química nova — é um processo físico, fraco e reversível, que só depende de haver superfície disponível.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <path d="M 40 30 L 40 160 L 130 160 L 130 90 L 210 90 L 210 160 L 300 160 L 300 70 L 380 70 L 380 160 L 420 160 L 420 30 Z" fill="#083344" stroke="#22d3ee" stroke-width="2.5"/>
            <text x="230" y="20" text-anchor="middle" fill="#a5f3fc" font-size="10" font-weight="bold">parede interna do microporo (carbono)</text>
            <circle cx="170" cy="70" r="9" fill="#fca5a5" stroke="#f87171" stroke-width="2"/>
            <text x="170" y="55" text-anchor="middle" fill="#fca5a5" font-size="8" font-weight="bold">contaminante</text>
            <path d="M 165 78 Q 168 88 175 90" fill="none" stroke="#f87171" stroke-width="1.5" stroke-dasharray="2 2" marker-end="url(#pt91)"/>
            <text x="340" y="45" text-anchor="middle" fill="#94a3b8" font-size="8">forças de Van der Waals</text>
            <path d="M 330 50 Q 335 60 335 68" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2 2" marker-end="url(#pt91)"/>
            <circle cx="335" cy="78" r="7" fill="#fca5a5" stroke="#f87171" stroke-width="2"/>
            <defs>
              <marker id="pt91" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" class="text-slate-400"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Por que dividir aumenta a área (mesmo volume)",
        legenda: "Um cubo maciço e o mesmo material dividido em 8 cubos menores têm exatamente o mesmo volume — mas a soma das áreas expostas dos cubos pequenos é o dobro da área do cubo original. É o mesmo princípio que faz um material poroso ter área imensa por grama.",
        svg: `
          <svg viewBox="0 0 460 200" class="w-full h-auto">
            <rect x="55" y="50" width="110" height="110" fill="#0f172a" stroke="#a78bfa" stroke-width="2.5"/>
            <text x="110" y="35" text-anchor="middle" fill="#c4b5fd" font-size="10" font-weight="bold">1 cubo maciço</text>
            <text x="110" y="180" text-anchor="middle" fill="#94a3b8" font-size="9">área total = 6 faces</text>
            <line x1="205" y1="105" x2="245" y2="105" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4"/>
            <g transform="translate(280,50)">
              <rect x="0" y="0" width="50" height="50" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
              <rect x="60" y="0" width="50" height="50" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
              <rect x="0" y="60" width="50" height="50" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
              <rect x="60" y="60" width="50" height="50" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
            </g>
            <text x="335" y="35" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">4 cubos menores</text>
            <text x="335" y="180" text-anchor="middle" fill="#67e8f9" font-size="9">mesmo volume, mais área exposta</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: o que realmente aumenta a capacidade de adsorção?",
      descricao: "Mexa nos controles e observe a barra de capacidade de adsorção. Ela só reage a dois deles — porosidade e tamanho médio dos poros. Massa, dureza e condutividade não mudam nada.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <p class="text-[10px] text-cyan-400/80 font-bold uppercase tracking-wide"><i class="fa-solid fa-flask"></i> Controles do experimento (afetam a área)</p>
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Porosidade</span><span class="text-cyan-300 font-bold" data-out="porosidade">40%</span>
              </label>
              <input type="range" data-sim="porosidade" min="5" max="95" value="40" step="5" class="w-full accent-cyan-500">
            </div>
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Tamanho médio do poro</span><span class="text-cyan-300 font-bold" data-out="tamanhoPoro">10 nm</span>
              </label>
              <input type="range" data-sim="tamanhoPoro" min="1" max="50" value="10" step="1" class="w-full accent-cyan-500">
            </div>
            <p class="text-[10px] text-slate-500 pt-1 border-t border-slate-800">Poros menores e mais numerosos = mais parede interna exposta.</p>

            <p class="text-[10px] text-slate-500 font-bold uppercase tracking-wide pt-2">Distratores (não afetam a adsorção)</p>
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Massa da amostra</span><span class="text-slate-300 font-bold" data-out="massa">1,0 g</span>
              </label>
              <input type="range" data-sim="massa" min="0.5" max="5" value="1" step="0.5" class="w-full accent-slate-500">
            </div>
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Dureza</span><span class="text-slate-300 font-bold" data-out="dureza">5</span>
              </label>
              <input type="range" data-sim="dureza" min="1" max="10" value="5" step="1" class="w-full accent-slate-500">
            </div>
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Condutividade</span><span class="text-slate-300 font-bold" data-out="condutividade">50 S/m</span>
              </label>
              <input type="range" data-sim="condutividade" min="0" max="100" value="50" step="5" class="w-full accent-slate-500">
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-cyan-300 font-bold">Área superficial (m²/g)</span>
                  <span class="text-cyan-300 font-mono" data-out="area">720</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="area" class="h-full bg-cyan-500 transition-all" style="width:48%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-emerald-300 font-bold">Capacidade de adsorção (mg/g)</span>
                  <span class="text-emerald-300 font-mono" data-out="capacidade">360</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="capacidade" class="h-full bg-emerald-500 transition-all" style="width:48%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-slate-400 font-bold">Distratores (massa / dureza / condutividade)</span>
                  <span class="text-slate-400 font-mono" data-out="distratorBarra">sem efeito</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="distrator" class="h-full bg-slate-600 transition-all" style="width:0%"></div>
                </div>
              </div>
            </div>

            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>

        <div class="mt-4 bg-slate-950 border border-slate-800 rounded-xl p-4">
          <p class="text-[11px] text-slate-400 mb-2">
            <i class="fa-solid fa-chart-line text-cyan-400"></i>
            Área superficial em função do tamanho do poro, na porosidade atual.
          </p>
          <div class="h-56"><canvas data-sim="grafico"></canvas></div>
        </div>
      `,
      init: function (raiz) {
        var campos = {
          porosidade: raiz.querySelector('[data-sim="porosidade"]'),
          tamanhoPoro: raiz.querySelector('[data-sim="tamanhoPoro"]'),
          massa: raiz.querySelector('[data-sim="massa"]'),
          dureza: raiz.querySelector('[data-sim="dureza"]'),
          condutividade: raiz.querySelector('[data-sim="condutividade"]')
        };
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };
        var grafico = null;
        var K = 3000;

        function calcularArea(porosidade, tamanhoPoro) {
          return (porosidade / 100) * (K / tamanhoPoro);
        }

        function calcular() {
          var porosidade = parseFloat(campos.porosidade.value);
          var tamanhoPoro = parseFloat(campos.tamanhoPoro.value);
          var massa = parseFloat(campos.massa.value);
          var dureza = parseFloat(campos.dureza.value);
          var condutividade = parseFloat(campos.condutividade.value);

          var area = calcularArea(porosidade, tamanhoPoro);
          var capacidade = area * 0.5;

          return { porosidade: porosidade, tamanhoPoro: tamanhoPoro, massa: massa, dureza: dureza, condutividade: condutividade, area: area, capacidade: capacidade };
        }

        function atualizar() {
          var d = calcular();
          var escalaArea = 1500;
          var escalaCap = 750;

          saida('porosidade').textContent = d.porosidade + '%';
          saida('tamanhoPoro').textContent = d.tamanhoPoro + ' nm';
          saida('massa').textContent = d.massa.toFixed(1).replace('.', ',') + ' g';
          saida('dureza').textContent = d.dureza;
          saida('condutividade').textContent = d.condutividade + ' S/m';
          saida('area').textContent = d.area.toFixed(0);
          saida('capacidade').textContent = d.capacidade.toFixed(0);

          barra('area').style.width = Math.min(100, d.area / escalaArea * 100) + '%';
          barra('capacidade').style.width = Math.min(100, d.capacidade / escalaCap * 100) + '%';
          barra('distrator').style.width = '0%';

          var v = saida('veredito');
          if (d.area > 700) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            v.innerHTML = '<strong>Alta área superficial</strong> (' + d.area.toFixed(0) + ' m²/g). Mexa em massa, dureza ou condutividade: a área e a capacidade de adsorção não se movem — só porosidade e tamanho do poro importam.';
          } else if (d.area > 200) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-slate-700 bg-slate-950 text-slate-300';
            v.innerHTML = '<strong>Área intermediária.</strong> Reduza o tamanho do poro ou aumente a porosidade para ver a capacidade de adsorção subir.';
          } else {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            v.innerHTML = '<strong>Área baixa, como no carvão comum</strong> (' + d.area.toFixed(0) + ' m²/g). Poucos poros e poros grandes deixam pouca parede interna exposta ao contaminante.';
          }

          if (grafico) {
            var passos = grafico.data.labels.length;
            var serieArea = [];
            for (var i = 0; i < passos; i++) {
              var t = 1 + i * (49 / (passos - 1));
              serieArea.push(calcularArea(d.porosidade, t));
            }
            grafico.data.datasets[0].data = serieArea;
            var idxAtual = Math.round((d.tamanhoPoro - 1) / (49 / (passos - 1)));
            grafico.data.datasets[1].data = serieArea.map(function (v, i) { return i === idxAtual ? v : null; });
            grafico.update('none');
          }
        }

        var canvas = raiz.querySelector('[data-sim="grafico"]');
        if (canvas && window.Chart) {
          var rotulos = [];
          for (var i = 0; i <= 20; i++) rotulos.push((1 + i * 2.45).toFixed(0));
          grafico = new Chart(canvas.getContext('2d'), {
            type: 'line',
            data: {
              labels: rotulos,
              datasets: [
                { label: 'Área superficial (m²/g)', data: [], borderColor: '#22d3ee', backgroundColor: 'transparent', borderWidth: 3, tension: 0.15, pointRadius: 0 },
                { label: 'Ponto atual', data: [], borderColor: '#34d399', backgroundColor: '#34d399', borderWidth: 0, pointRadius: 5, showLine: false }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              animation: false,
              scales: {
                y: { beginAtZero: true, grid: { color: '#1e293b' }, ticks: { color: '#94a3b8', font: { size: 10 } }, title: { display: true, text: 'Área (m²/g)', color: '#94a3b8', font: { size: 10 } } },
                x: { grid: { color: '#1e293b' }, ticks: { color: '#94a3b8', font: { size: 10 } }, title: { display: true, text: 'tamanho do poro (nm)', color: '#94a3b8', font: { size: 10 } } }
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
        <span class="text-[11px] font-bold text-cyan-300 block"><i class="fa-solid fa-draw-polygon"></i> Porosidade × Área Superficial × Capacidade de Adsorção</span>
        <svg viewBox="0 0 460 130" class="w-full h-32 mx-auto">
          <text x="80" y="18" fill="#94a3b8" font-size="9" text-anchor="middle">Carvão comum</text>
          <rect x="40" y="80" width="80" height="10" rx="3" fill="#334155"/>
          <text x="80" y="105" fill="#94a3b8" font-size="8" text-anchor="middle">~10 m²/g</text>
          <line x1="150" y1="65" x2="180" y2="65" stroke="#475569" stroke-width="2" marker-end="url(#setaQ91)"/>
          <text x="345" y="18" fill="#67e8f9" font-size="9" text-anchor="middle">Carvão ativado</text>
          <rect x="200" y="55" width="220" height="35" rx="4" fill="#083344" stroke="#22d3ee" stroke-width="2"/>
          <text x="310" y="77" fill="#a5f3fc" font-size="10" font-weight="bold" text-anchor="middle">até 1500 m²/g</text>
          <text x="230" y="115" fill="#6ee7b7" font-size="9" text-anchor="middle">= mais superfície</text>
          <text x="345" y="115" fill="#6ee7b7" font-size="9" text-anchor="middle">= mais adsorção</text>
          <defs>
            <marker id="setaQ91" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#475569"/>
            </marker>
          </defs>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q092",
    numero: "Questão 92",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "biologia",
    materia: "Biologia / Genética & Biotecnologia",
    materiaCor: "emerald",
    materiaIcone: "fa-dna",
    titulo: "Transplante do Relógio Circadiano entre Bactérias: O que Realmente Muda no Genoma do Organismo Modificado",
    tags: ["Biologia", "Genética", "Engenharia Genética", "Transgênese", "Ciclo Circadiano", "Biotecnologia"],
    alternativaCorreta: "D",
    userNotes: "",
    userCustomImage: null,

    enunciado: `A maioria dos seres vivos tem um relógio biológico (ciclo circadiano), que regula as mudanças metabólicas e comportamentais de acordo com o ciclo de 24 horas de rotação da Terra. Em 2015, um artigo publicado na revista Science Advances mostrou ser possível a transferência dos genes do relógio circadiano da cianobactéria Synechococcus elongatus para o genoma da bactéria Escherichia coli, um organismo não circadiano.
    <br><br>
    CHEN, A. H. et al. Transplantability of a Circadian Lock to Noncircadian Organism. <strong>Science Advances</strong>, n. 1, 2015 (adaptado).
    <br><br>
    Estarão presentes no organismo geneticamente modificado os genes do:`,

    alternativas: [
      { letra: "A", texto: "Metabolismo de E. coli, apenas.", correta: false },
      { letra: "B", texto: "Ciclo circadiano de E. coli, apenas.", correta: false },
      { letra: "C", texto: "Metabolismo de S. elongatus e do ciclo circadiano de E. coli.", correta: false },
      { letra: "D", texto: "Ciclo circadiano de S. elongatus e do metabolismo de E. coli.", correta: true },
      { letra: "E", texto: "Ciclo circadiano de S. elongatus e do ciclo circadiano de E. coli.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-emerald-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre todo o raciocínio de transgênese cobrado no Enem — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">1.</span> Genoma é um conjunto de instruções, não uma identidade única</h4>
          <p>
            Todo ser vivo carrega no seu DNA milhares de genes, cada um funcionando como uma instrução para produzir uma proteína específica. A soma de todas essas instruções é o <strong>genoma</strong>. A grande maioria dos genes de uma bactéria cuida de tarefas de manutenção básica — produzir energia, montar a parede celular, replicar o próprio DNA, sintetizar aminoácidos. Esse conjunto é o que chamamos, de forma ampla, de genes do <strong>metabolismo</strong> do organismo.
          </p>
          <p>
            Um organismo pode ter, além desses genes básicos, sistemas regulatórios inteiros dedicados a uma função específica — como um relógio biológico. Nem todo organismo tem esse sistema. É exatamente o caso descrito no enunciado.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">2.</span> O que é "transplantar" um conjunto de genes</h4>
          <p>
            Engenharia genética permite isolar um trecho específico do DNA de uma espécie doadora — nesse caso, o conjunto de genes <em>kaiA</em>, <em>kaiB</em> e <em>kaiC</em>, responsáveis pelo relógio circadiano da cianobactéria <em>Synechococcus elongatus</em> — e inseri-lo no genoma de uma espécie receptora, a bactéria <em>Escherichia coli</em>.
          </p>
          <p class="bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs">
            <strong class="text-emerald-300">Ponto-chave:</strong> transplantar genes é um processo de <strong>adição</strong>, não de substituição. O receptor não perde o que já tinha só porque ganhou genes novos. Salvo edição deliberada (deleção), o genoma original do hospedeiro permanece intacto, e os genes transplantados se somam a ele.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">3.</span> Quem tinha o quê, antes do experimento</h4>
          <p>
            Antes da transgênese, cada bactéria tem seu próprio pacote de genes:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-emerald-300 block mb-1">Synechococcus elongatus (doadora)</strong>
              Tem genes de metabolismo próprios <em>e</em> o sistema circadiano completo (kaiA, kaiB, kaiC) — é uma cianobactéria fotossintetizante, e seu relógio interno sincroniza a fotossíntese com o dia e a noite.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-emerald-300 block mb-1">Escherichia coli (receptora)</strong>
              Tem genes de metabolismo próprios, mas <strong>não</strong> possui um relógio circadiano — o enunciado é explícito: "um organismo não circadiano". Ela nunca teve esses genes.
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">4.</span> O que muda depois do transplante</h4>
          <p>
            O experimento pega apenas o operon do relógio circadiano de <em>S. elongatus</em> — não o genoma inteiro da cianobactéria — e insere esse trecho no DNA da <em>E. coli</em>. O resultado é uma <em>E. coli</em> geneticamente modificada que:
          </p>
          <ul class="list-disc list-inside space-y-1 text-xs text-slate-300">
            <li>Continua com <strong>todo o seu próprio metabolismo</strong> — ela ainda é, no fundo, uma <em>E. coli</em>, com todas as vias metabólicas que já tinha.</li>
            <li>Passa a carregar, além disso, os <strong>genes do ciclo circadiano de S. elongatus</strong> — um sistema que ela nunca teve e que agora funciona dentro dela (foi isso que o artigo mostrou: o relógio "pegou" mesmo em um hospedeiro diferente).</li>
            <li><strong>Não</strong> ganha genes de metabolismo da cianobactéria doadora — só o operon do relógio foi transferido, não o genoma inteiro dela.</li>
            <li><strong>Não</strong> ganha um "ciclo circadiano de E. coli" — porque esse conjunto de genes nunca existiu nessa espécie. Não hánada para transplantar do que não existe.</li>
          </ul>
          <p class="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-3 text-xs">
            <strong class="text-emerald-300">Resumindo em uma frase:</strong> organismo final = metabolismo original do hospedeiro (E. coli) + sistema transplantado do doador (ciclo circadiano de S. elongatus). Nada é trocado; um sistema novo é somado ao que já existia.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">5.</span> A armadilha da "mistura simétrica"</h4>
          <p>
            O erro mais comum nesse tipo de questão é imaginar que os dois organismos "trocam" pedaços de si um com o outro, ou que o resultado é uma mistura equilibrada de partes de cada um. Não é assim que a transgênese funciona: só o que foi deliberadamente isolado e inserido (aqui, o operon <em>kai</em>) muda de organismo. Todo o resto do genoma do doador fica onde estava, e todo o resto do genoma do receptor também.
          </p>
          <p>
            Além disso, é impossível transplantar um sistema genético que não existe na espécie de origem daquele sistema — por isso "ciclo circadiano de E. coli" nunca pode aparecer como componente do organismo final: essa categoria de genes simplesmente não existe em nenhuma das duas bactérias antes do experimento, exceto na S. elongatus.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">6.</span> Por que esse experimento importa</h4>
          <p>
            O resultado publicado em 2015 é relevante porque mostra que um sistema regulatório complexo — não um gene isolado, mas um conjunto de genes que interagem entre si para gerar um comportamento cíclico — pode ser transferido como um "módulo" funcional entre espécies bem distantes evolutivamente (uma cianobactéria fotossintetizante e uma bactéria heterotrófica do intestino). É um marco da biologia sintética: genomas podem ser pensados como coleções de módulos que se recombinam.
          </p>
        </div>
      </div>
    `,

    /* ------------------------------------------------------------------
       2. RESOLUÇÃO COMENTADA
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-4 text-xs">

        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <h4 class="font-bold text-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-emerald-400"></i> Estratégia em 3 passos
          </h4>
          <p class="text-slate-300 leading-relaxed">
            <strong>Passo 1 — Identifique quem é o doador e quem é o receptor.</strong> Doador: S. elongatus (cede os genes do relógio circadiano). Receptor: E. coli (recebe esses genes).
            <br><br>
            <strong>Passo 2 — Lembre que transgênese é adição, não troca.</strong> O receptor mantém tudo o que já tinha (seu metabolismo) e ganha só o que foi explicitamente transferido (o operon circadiano).
            <br><br>
            <strong>Passo 3 — Verifique se cada "conjunto de genes" citado na alternativa existe de verdade.</strong> "Ciclo circadiano de E. coli" não existe em nenhum momento da história — é uma categoria vazia, então qualquer alternativa que a cite está automaticamente errada.
          </p>
        </div>

        <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/40 space-y-2">
          <h4 class="font-bold text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa D — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            "Ciclo circadiano de S. elongatus e do metabolismo de E. coli." É exatamente a soma que o experimento descreve: o hospedeiro (E. coli) preserva integralmente seu próprio metabolismo, e recebe como acréscimo o sistema circadiano transplantado da cianobactéria doadora. Nenhum dos dois genomas originais é apagado; um módulo novo é inserido no genoma que já existia.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa A — metabolismo de E. coli, apenas</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lembrar que a E. coli mantém seu metabolismo, mas esquecer que ela também recebeu genes novos.
              <br>
              <strong>Onde quebra:</strong> ignora o próprio ponto central do experimento — a transferência bem-sucedida do relógio circadiano. Se apenas o metabolismo da E. coli estivesse presente, não haveria nada de "geneticamente modificado" para relatar.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — ciclo circadiano de E. coli, apenas</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> supor que, ao ganhar um relógio circadiano, esse relógio "pertence" à E. coli e é tratado como se sempre tivesse existido nela.
              <br>
              <strong>Onde quebra:</strong> o enunciado é categórico — E. coli é "um organismo não circadiano". O relógio que ela passa a ter veio de fora, de S. elongatus; não existe um "ciclo circadiano de E. coli" nativo para se manter sozinho, e o metabolismo dela — que continua existindo — nem é citado.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa C — metabolismo de S. elongatus e do ciclo circadiano de E. coli</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> inverter os papéis de doador e receptor — imaginar que o metabolismo "viaja" junto com o gene transplantado, e que o relógio "fica" com quem não o recebeu.
              <br>
              <strong>Onde quebra:</strong> dupla inversão. Só o operon circadiano foi transferido, não o metabolismo inteiro da cianobactéria; e o ciclo circadiano pertence à espécie doadora, não à receptora, que nunca teve esse sistema.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — ciclo circadiano de S. elongatus e do ciclo circadiano de E. coli</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> tentar "cobrir todas as bases" citando o ciclo circadiano das duas espécies, como se ambas tivessem um relógio próprio antes do experimento.
              <br>
              <strong>Onde quebra:</strong> cita uma categoria de genes que nunca existiu — E. coli não tem, e nunca teve, um ciclo circadiano próprio. Também deixa de fora o metabolismo da E. coli, que continua lá, intacto.
            </p>
          </div>
        </div>

        <div class="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30">
          <strong class="text-emerald-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            Os cinco pares de "genes de X e genes de Y" testam a mesma coisa: se você sabe separar com precisão o que <strong>permanece</strong> (o metabolismo do hospedeiro, sempre) do que é <strong>adicionado</strong> (o sistema transplantado do doador) — e se você percebe quando uma alternativa cita um conjunto de genes que, segundo o próprio enunciado, nunca existiu.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-dna", titulo: "Transgênese", text: "Inserção de um gene (ou conjunto de genes) de uma espécie doadora no genoma de uma espécie receptora." },
      { icone: "fa-plus", titulo: "Adição, não troca", text: "O receptor mantém seu genoma original e soma os genes transplantados — nada é apagado." },
      { icone: "fa-clock", titulo: "Operon kaiABC", text: "Conjunto de genes (kaiA, kaiB, kaiC) que gera o relógio circadiano em cianobactérias como S. elongatus." },
      { icone: "fa-ban", titulo: "Categoria inexistente", text: "E. coli nunca teve ciclo circadiano próprio — essa categoria de genes não existe para ser citada." },
      { icone: "fa-arrows-left-right", titulo: "Doador x Receptor", text: "Doador cede um módulo específico; receptor incorpora esse módulo mantendo o restante do seu genoma." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Antes do experimento: dois genomas separados",
        legenda: "S. elongatus tem metabolismo próprio e o operon circadiano kaiABC. E. coli tem apenas o próprio metabolismo — nenhum gene de relógio biológico.",
        svg: `
          <svg viewBox="0 0 460 200" class="w-full h-auto">
            <circle cx="130" cy="100" r="75" fill="#052e2b" stroke="#34d399" stroke-width="2.5"/>
            <text x="130" y="35" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">S. elongatus (doadora)</text>
            <rect x="90" y="75" width="80" height="20" rx="4" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
            <text x="130" y="89" fill="#d1fae5" font-size="9" text-anchor="middle">metabolismo próprio</text>
            <rect x="95" y="110" width="70" height="20" rx="4" fill="#7c3aed" stroke="#c4b5fd" stroke-width="1.5"/>
            <text x="130" y="124" fill="#ede9fe" font-size="9" text-anchor="middle">kaiA · kaiB · kaiC</text>

            <circle cx="330" cy="100" r="75" fill="#1e293b" stroke="#64748b" stroke-width="2.5"/>
            <text x="330" y="35" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">E. coli (receptora)</text>
            <rect x="290" y="95" width="80" height="20" rx="4" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
            <text x="330" y="109" fill="#e2e8f0" font-size="9" text-anchor="middle">metabolismo próprio</text>
            <text x="330" y="140" fill="#64748b" font-size="9" text-anchor="middle" font-style="italic">sem genes de relógio</text>

            <text x="230" y="103" fill="#475569" font-size="18" text-anchor="middle">×</text>
          </svg>`
      },
      {
        titulo: "O transplante: só o operon circadiano é transferido",
        legenda: "Apenas os genes kaiA, kaiB e kaiC são isolados e inseridos no genoma da E. coli. O metabolismo da S. elongatus não viaja junto.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <circle cx="110" cy="95" r="65" fill="#052e2b" stroke="#34d399" stroke-width="2" opacity="0.5"/>
            <rect x="75" y="75" width="70" height="18" rx="4" fill="#065f46" stroke="#34d399" stroke-width="1" opacity="0.5"/>
            <text x="110" y="87" fill="#6ee7b7" font-size="8" text-anchor="middle" opacity="0.6">metabolismo (fica)</text>
            <rect x="78" y="105" width="64" height="18" rx="4" fill="#7c3aed" stroke="#c4b5fd" stroke-width="2"/>
            <text x="110" y="117" fill="#ede9fe" font-size="8" text-anchor="middle" font-weight="bold">kaiA·kaiB·kaiC</text>

            <line x1="150" y1="114" x2="290" y2="114" stroke="#a78bfa" stroke-width="3" marker-end="url(#pt2)"/>
            <text x="220" y="102" fill="#c4b5fd" font-size="9" font-weight="bold" text-anchor="middle">transplante do operon</text>

            <circle cx="350" cy="95" r="65" fill="#1e293b" stroke="#64748b" stroke-width="2.5"/>
            <rect x="315" y="70" width="70" height="18" rx="4" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
            <text x="350" y="82" fill="#e2e8f0" font-size="8" text-anchor="middle">metabolismo próprio</text>
            <rect x="315" y="105" width="70" height="18" rx="4" fill="#7c3aed" stroke="#c4b5fd" stroke-width="2"/>
            <text x="350" y="117" fill="#ede9fe" font-size="8" text-anchor="middle" font-weight="bold">kaiA·kaiB·kaiC (novo)</text>

            <defs>
              <marker id="pt2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#a78bfa"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Genoma final: soma, não substituição",
        legenda: "A E. coli modificada carrega os dois blocos ao mesmo tempo. Repare que o bloco 'ciclo circadiano de E. coli' simplesmente não existe — não há nada ali para incluir.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <text x="230" y="20" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">Escherichia coli geneticamente modificada</text>
            <rect x="60" y="40" width="150" height="45" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
            <text x="135" y="58" fill="#e2e8f0" font-size="10" font-weight="bold" text-anchor="middle">Metabolismo</text>
            <text x="135" y="72" fill="#cbd5e1" font-size="9" text-anchor="middle">de E. coli (mantido)</text>

            <text x="230" y="68" fill="#34d399" font-size="18" text-anchor="middle" font-weight="bold">+</text>

            <rect x="250" y="40" width="150" height="45" rx="6" fill="#2e1065" stroke="#a78bfa" stroke-width="2"/>
            <text x="325" y="58" fill="#ede9fe" font-size="10" font-weight="bold" text-anchor="middle">Ciclo circadiano</text>
            <text x="325" y="72" fill="#ddd6fe" font-size="9" text-anchor="middle">de S. elongatus (novo)</text>

            <rect x="120" y="110" width="220" height="40" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4 3"/>
            <text x="230" y="128" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">"Ciclo circadiano de E. coli"</text>
            <text x="230" y="142" fill="#fca5a5" font-size="8" text-anchor="middle">categoria que nunca existiu — não entra na soma</text>
          </svg>`
      },
      {
        titulo: "Mapa das cinco alternativas",
        legenda: "Cada alternativa combina dois blocos. Só a alternativa D combina dois blocos que realmente existem no organismo final.",
        svg: `
          <svg viewBox="0 0 460 210" class="w-full h-auto">
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>
            <text x="30" y="15" fill="#94a3b8" font-size="9">Alternativa</text>
            <text x="330" y="15" fill="#94a3b8" font-size="9">Existe no organismo final?</text>

            <text x="30" y="45" fill="#e2e8f0" font-size="10">A — só metabolismo E. coli</text>
            <text x="400" y="45" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="72" fill="#e2e8f0" font-size="10">B — só ciclo circadiano E. coli</text>
            <text x="400" y="72" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="99" fill="#e2e8f0" font-size="10">C — metab. S.elong. + circad. E.coli</text>
            <text x="400" y="99" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <rect x="15" y="110" width="430" height="27" rx="5" fill="#065f46" opacity="0.35"/>
            <text x="30" y="128" fill="#6ee7b7" font-size="10" font-weight="bold">D — circad. S.elong. + metab. E.coli</text>
            <text x="400" y="128" fill="#34d399" font-size="12" text-anchor="middle" font-weight="bold">✓</text>

            <text x="30" y="154" fill="#e2e8f0" font-size="10">E — circad. S.elong. + circad. E.coli</text>
            <text x="400" y="154" fill="#f87171" font-size="12" text-anchor="middle">✕</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: monte o genoma da bactéria geneticamente modificada",
      descricao: "Ligue e desligue cada bloco de genes e veja se a combinação corresponde ao que o experimento realmente produziu. Um dos blocos é impossível de existir — tente descobrir qual antes de ligar tudo.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <p class="text-[11px] text-slate-400 mb-1">Blocos de genes disponíveis:</p>

            <label class="flex items-center justify-between p-2 rounded-lg border border-slate-800 cursor-pointer">
              <span class="text-[11px] text-slate-200">Metabolismo de <em>E. coli</em></span>
              <input type="checkbox" data-sim="metabEcoli" checked class="accent-emerald-500 w-4 h-4">
            </label>
            <label class="flex items-center justify-between p-2 rounded-lg border border-slate-800 cursor-pointer">
              <span class="text-[11px] text-slate-200">Metabolismo de <em>S. elongatus</em></span>
              <input type="checkbox" data-sim="metabSelong" class="accent-emerald-500 w-4 h-4">
            </label>
            <label class="flex items-center justify-between p-2 rounded-lg border border-slate-800 cursor-pointer">
              <span class="text-[11px] text-slate-200">Ciclo circadiano de <em>E. coli</em></span>
              <input type="checkbox" data-sim="circadEcoli" class="accent-emerald-500 w-4 h-4">
            </label>
            <label class="flex items-center justify-between p-2 rounded-lg border border-slate-800 cursor-pointer">
              <span class="text-[11px] text-slate-200">Ciclo circadiano de <em>S. elongatus</em></span>
              <input type="checkbox" data-sim="circadSelong" class="accent-emerald-500 w-4 h-4">
            </label>

            <p class="text-[10px] text-slate-500 pt-1"><i class="fa-solid fa-flask"></i> Tente reproduzir exatamente o organismo do experimento de 2015.</p>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
              <p class="text-[11px] text-slate-400 mb-2">Organismo montado:</p>
              <div data-out="lista" class="space-y-1 text-[11px]"></div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var campos = {
          metabEcoli: raiz.querySelector('[data-sim="metabEcoli"]'),
          metabSelong: raiz.querySelector('[data-sim="metabSelong"]'),
          circadEcoli: raiz.querySelector('[data-sim="circadEcoli"]'),
          circadSelong: raiz.querySelector('[data-sim="circadSelong"]')
        };
        var lista = raiz.querySelector('[data-out="lista"]');
        var veredito = raiz.querySelector('[data-out="veredito"]');

        function linha(ligado, texto, impossivel) {
          if (impossivel) {
            return '<div class="flex items-center gap-2 text-slate-600"><i class="fa-solid fa-ban"></i><span class="line-through">' + texto + '</span><span class="text-[9px]">(nunca existiu)</span></div>';
          }
          if (ligado) {
            return '<div class="flex items-center gap-2 text-emerald-300"><i class="fa-solid fa-check"></i><span>' + texto + '</span></div>';
          }
          return '<div class="flex items-center gap-2 text-slate-600"><i class="fa-solid fa-minus"></i><span>' + texto + '</span></div>';
        }

        function atualizar() {
          var metabEcoli = campos.metabEcoli.checked;
          var metabSelong = campos.metabSelong.checked;
          var circadEcoli = campos.circadEcoli.checked;
          var circadSelong = campos.circadSelong.checked;

          lista.innerHTML =
            linha(metabEcoli, 'Metabolismo de E. coli', false) +
            linha(metabSelong, 'Metabolismo de S. elongatus', false) +
            linha(circadEcoli, 'Ciclo circadiano de E. coli', true) +
            linha(circadSelong, 'Ciclo circadiano de S. elongatus', false);

          // ciclo circadiano de E. coli nunca existiu: força desligado e desabilita
          if (campos.circadEcoli.checked) {
            campos.circadEcoli.checked = false;
          }

          var correto = metabEcoli && !metabSelong && !circadEcoli && circadSelong;

          if (correto) {
            veredito.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            veredito.innerHTML = '<strong>Exatamente o organismo do experimento (alternativa D).</strong> Metabolismo original do hospedeiro preservado + operon circadiano transplantado do doador.';
          } else if (metabSelong) {
            veredito.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            veredito.innerHTML = '<strong>Isso não aconteceu.</strong> Só o operon do relógio circadiano foi transplantado — o metabolismo da S. elongatus nunca saiu dela.';
          } else if (!metabEcoli) {
            veredito.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            veredito.innerHTML = '<strong>Faltou o essencial.</strong> A transgênese não apaga o genoma do hospedeiro — o metabolismo da E. coli continua lá.';
          } else if (!circadSelong) {
            veredito.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-slate-700 bg-slate-950 text-slate-300';
            veredito.innerHTML = 'Ligue o ciclo circadiano de S. elongatus — foi exatamente esse bloco que os pesquisadores transplantaram para dentro da E. coli.';
          } else {
            veredito.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-slate-700 bg-slate-950 text-slate-300';
            veredito.innerHTML = 'Ajuste os blocos para reproduzir o organismo final do experimento.';
          }
        }

        Object.keys(campos).forEach(function (k) {
          campos[k].addEventListener('change', atualizar);
        });
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-emerald-300 block"><i class="fa-solid fa-dna"></i> Metabolismo de E. coli + Ciclo Circadiano de S. elongatus</span>
        <svg viewBox="0 0 460 120" class="w-full h-28 mx-auto">
          <rect x="40" y="40" width="160" height="40" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
          <text x="120" y="64" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">Metabolismo E. coli</text>
          <text x="220" y="65" fill="#34d399" font-size="18" text-anchor="middle" font-weight="bold">+</text>
          <rect x="260" y="40" width="160" height="40" rx="6" fill="#2e1065" stroke="#a78bfa" stroke-width="2"/>
          <text x="340" y="64" fill="#ede9fe" font-size="11" font-weight="bold" text-anchor="middle">Ciclo circadiano S. elongatus</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q093",
    numero: "Questão 93",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "biologia",
    materia: "Biologia / Zoologia & Adaptações",
    materiaCor: "emerald",
    materiaIcone: "fa-feather-pointed",
    titulo: "Glândula Uropigial e a Impermeabilização das Penas: Por que Aves Aquáticas Afundam sem Ela",
    tags: ["Biologia", "Zoologia", "Aves", "Adaptações", "Glândula Uropigial", "Impermeabilização"],
    alternativaCorreta: "C",
    userNotes: "",
    userCustomImage: null,

    enunciado: `Os funcionários de um zoológico observaram um aumento na taxa de mortalidade de aves aquáticas por afogamento. Um grupo de biólogos analisou o comportamento das aves por várias semanas e observou que elas apresentavam dificuldade de flutuação, por causa do encharcamento das penas com água.
    <br><br>
    O aumento na taxa de mortalidade dessas aves estava associado a uma redução na:`,

    alternativas: [
      { letra: "A", texto: "Dilatação do papo.", correta: false },
      { letra: "B", texto: "Reposição de penas das asas.", correta: false },
      { letra: "C", texto: "Secreção da glândula uropigial.", correta: true },
      { letra: "D", texto: "Formação da membrana natatória.", correta: false },
      { letra: "E", texto: "Largura das cavidades de ossos pneumáticos.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-emerald-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre a fisiologia da impermeabilização de penas cobrada no Enem — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">1.</span> Por que flutuar não é automático para uma ave</h4>
          <p>
            Aves aquáticas (patos, cisnes, pinguins, aves marinhas em geral) dependem de três coisas trabalhando juntas para flutuar e nadar sem se molhar por dentro: penas bem estruturadas, penas <strong>impermeáveis</strong> e uma camada de ar retida entre elas. Retire qualquer uma dessas peças e o sistema falha — mesmo que as outras duas estejam perfeitas.
          </p>
          <p>
            O enunciado já aponta exatamente qual peça falhou: "encharcamento das penas com água". Isso significa que a água passou a penetrar na plumagem em vez de escorregar por cima dela. O problema não é estrutural (a pena não se desfez) nem é falta de membrana — é a <strong>perda da propriedade impermeável</strong> da superfície da pena.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">2.</span> A anatomia da pena: barbas, bárbulas e o "velcro" natural</h4>
          <p>
            Uma pena de contorno tem um eixo central (raque) do qual saem as <strong>barbas</strong>, e de cada barba saem estruturas ainda menores, as <strong>bárbulas</strong>, equipadas com microganchos que se prendem nas bárbulas vizinhas. Esse entrelaçamento cria uma superfície contínua, quase uma "tela", que por si só já dificulta a passagem de água.
          </p>
          <p>
            Só que essa estrutura, mesmo bem travada, ainda é feita de queratina — um material que absorve água ao longo do tempo se não for tratado. É aqui que entra a segunda camada de proteção.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">3.</span> A glândula uropigial: a "fábrica de óleo" da ave</h4>
          <p>
            Na base da cauda da maioria das aves fica a <strong>glândula uropigial</strong> (também chamada glândula do óleo ou glândula sebácea das aves). Ela secreta uma substância oleosa e cerosa, rica em lipídios.
          </p>
          <p class="bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs">
            <strong class="text-emerald-300">O comportamento que faz a diferença:</strong> durante o autoalisamento (preening), a ave usa o bico para espremer essa secreção da glândula e espalhá-la por toda a plumagem, pena por pena. É um comportamento diário, repetido, essencial — não é algo que acontece uma vez só.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">4.</span> Por que óleo impermeabiliza: a física por trás</h4>
          <p>
            O óleo da glândula uropigial é hidrofóbico (repele água). Espalhado sobre as bárbulas, ele reveste a superfície da pena e eleva sua tensão superficial em relação à água, fazendo as gotas escorregarem em vez de penetrar. É o mesmo princípio de uma capa impermeável encerada: a água "perla" e escoa, ao invés de ser absorvida.
          </p>
          <p>
            Com a plumagem impermeabilizada, uma camada de ar fica retida entre as penas e a pele. Essa camada tem dupla função: <strong>flutuação</strong> (o ar é menos denso que a água, dando empuxo extra) e <strong>isolamento térmico</strong> (o ar parado é um péssimo condutor de calor, mantendo a ave aquecida na água fria).
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">5.</span> O que acontece quando a secreção cai</h4>
          <p>
            Se a glândula uropigial produz menos óleo (por doença, desnutrição, estresse, poluição por outros óleos que "sujam" a plumagem, ou simplesmente ausência de oportunidade/comportamento de autoalisamento), a queratina da pena passa a absorver água diretamente. A cadeia de eventos é direta:
          </p>
          <ul class="list-disc list-inside space-y-1 text-xs text-slate-300">
            <li>Menos óleo → penas perdem a repelência à água.</li>
            <li>Água penetra entre as barbas → a camada de ar retida é expulsa (encharcamento).</li>
            <li>Sem a camada de ar → perde-se o empuxo extra → dificuldade de flutuação (exatamente o que o enunciado descreve).</li>
            <li>Penas encharcadas ficam mais pesadas e perdem o isolamento térmico → hipotermia, exaustão ao tentar se manter na superfície → afogamento.</li>
          </ul>
          <p class="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-3 text-xs">
            <strong class="text-emerald-300">Ponte com o enunciado:</strong> "dificuldade de flutuação por causa do encharcamento das penas" é a descrição clínica exata da falha de impermeabilização — o sintoma aponta direto para a causa: menos óleo da glândula uropigial espalhado sobre a plumagem.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">6.</span> Por que as outras estruturas citadas não explicam o sintoma</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Papo</strong>
              Órgão de armazenamento temporário de alimento no trato digestivo. Não tem qualquer relação com impermeabilização de penas.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Reposição de penas (muda)</strong>
              Renova penas desgastadas ou danificadas, mas uma pena nova, sem óleo espalhado sobre ela, encharca do mesmo jeito. O problema não é ter penas — é elas não estarem impermeabilizadas.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Membrana natatória</strong>
              A pele entre os dedos ajuda a empurrar a água ao nadar (propulsão), não impede a água de encharcar a plumagem.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Ossos pneumáticos</strong>
              Cavidades de ar dentro dos ossos reduzem o peso do esqueleto (importante para o voo) e contribuem um pouco para a flutuabilidade geral, mas não têm nenhuma relação com a queratina da pena absorver ou repelir água.
            </div>
          </div>
        </div>
      </div>
    `,

    /* ------------------------------------------------------------------
       2. RESOLUÇÃO COMENTADA
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-4 text-xs">

        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <h4 class="font-bold text-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-emerald-400"></i> Estratégia em 3 passos
          </h4>
          <p class="text-slate-300 leading-relaxed">
            <strong>Passo 1 — Isole o sintoma exato.</strong> "Encharcamento das penas com água" é o problema central, não a mortalidade em si (que é a consequência final).
            <br><br>
            <strong>Passo 2 — Pergunte: o que normalmente impede esse encharcamento?</strong> A resposta é a camada de óleo espalhada pela ave a partir da glândula uropigial.
            <br><br>
            <strong>Passo 3 — Elimine alternativas que não têm relação com impermeabilização.</strong> Papo (digestão), membrana natatória (propulsão) e ossos pneumáticos (peso do voo) tratam de outras funções; reposição de penas resolve desgaste, não a falta de óleo.
          </p>
        </div>

        <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/40 space-y-2">
          <h4 class="font-bold text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa C — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            A glândula uropigial produz o óleo hidrofóbico que a ave espalha pelas penas durante o autoalisamento. Uma redução nessa secreção deixa a plumagem sem a camada impermeabilizante, a água penetra entre as barbas, a camada de ar retida se perde, e a ave passa a ter dificuldade de flutuar — exatamente o quadro clínico descrito no enunciado.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa A — dilatação do papo</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> associar qualquer estrutura anatômica de ave com o problema, sem verificar a função.
              <br>
              <strong>Onde quebra:</strong> o papo é uma bolsa do sistema digestório usada para armazenar alimento antes da digestão. Não participa da impermeabilização da plumagem nem da flutuação.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — reposição de penas das asas</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> pensar que "problema com penas" tem que ser sobre ter ou não ter penas suficientes.
              <br>
              <strong>Onde quebra:</strong> a muda repõe penas gastas ou perdidas, mas isso é sobre quantidade e integridade estrutural, não sobre impermeabilização. Uma pena nova, sem receber o óleo da glândula uropigial, encharca exatamente como uma pena velha.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa D — formação da membrana natatória</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lembrar que "aves aquáticas" e "pés palmados" andam juntos na cabeça, e aplicar essa associação aqui.
              <br>
              <strong>Onde quebra:</strong> a membrana entre os dedos serve para empurrar água durante a natação (propulsão), não para impedir que a água penetre nas penas. O sintoma descrito é sobre flutuação por encharcamento, não sobre dificuldade de se impulsionar na água.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — largura das cavidades de ossos pneumáticos</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lembrar que ossos pneumáticos ajudam aves a serem mais leves, e generalizar isso para "ajudam a flutuar".
              <br>
              <strong>Onde quebra:</strong> essas cavidades reduzem o peso do esqueleto para o voo e contribuem de forma secundária e constante para a flutuabilidade — não são algo que varia com o encharcamento observado, nem têm ligação com a queratina da pena absorvendo água.
            </p>
          </div>
        </div>

        <div class="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30">
          <strong class="text-emerald-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            As quatro alternativas erradas citam estruturas reais de aves aquáticas — mas cada uma cuida de uma função diferente (digestão, muda, propulsão, peso). Só a glândula uropigial está diretamente ligada à impermeabilização da pena, que é o elo exato entre o sintoma (encharcamento) e a causa (menos óleo espalhado).
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-droplet", titulo: "Glândula Uropigial", text: "Localizada na base da cauda; secreta óleo hidrofóbico espalhado pela ave durante o autoalisamento." },
      { icone: "fa-feather", titulo: "Estrutura da Pena", text: "Raque, barbas e bárbulas com microganchos formam uma superfície entrelaçada, mas ainda absorvente sem óleo." },
      { icone: "fa-water", titulo: "Camada de Ar Retida", text: "Penas impermeáveis prendem ar entre si e a pele, gerando empuxo extra e isolamento térmico." },
      { icone: "fa-temperature-low", titulo: "Hipotermia por Encharcamento", text: "Penas molhadas perdem a capacidade isolante, expondo a ave ao frio da água." },
      { icone: "fa-shoe-prints", titulo: "Membrana Natatória", text: "Pele entre os dedos usada para propulsão ao nadar — não impede a entrada de água nas penas." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Localização da glândula uropigial",
        legenda: "A glândula fica na base da cauda. Durante o autoalisamento, a ave pressiona o bico contra ela para retirar o óleo e espalhá-lo pela plumagem.",
        svg: `
          <svg viewBox="0 0 460 200" class="w-full h-auto">
            <ellipse cx="220" cy="110" rx="120" ry="60" fill="#1e293b" stroke="#475569" stroke-width="2"/>
            <circle cx="90" cy="90" r="30" fill="#1e293b" stroke="#475569" stroke-width="2"/>
            <polygon points="60,88 30,94 60,100" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
            <polygon points="330,110 400,95 340,135" fill="#1e293b" stroke="#475569" stroke-width="2"/>
            <circle cx="345" cy="108" r="10" fill="#065f46" stroke="#34d399" stroke-width="2.5"/>
            <text x="345" y="70" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Glândula uropigial</text>
            <line x1="345" y1="80" x2="345" y2="98" stroke="#6ee7b7" stroke-width="1.5"/>
            <text x="90" y="45" fill="#94a3b8" font-size="9" text-anchor="middle">bico espalha o óleo</text>
            <path d="M 80 60 Q 200 20 320 100" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#pt3)"/>
            <defs>
              <marker id="pt3" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#fbbf24"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Bárbulas com e sem revestimento de óleo",
        legenda: "Com óleo, as gotas escorregam pela superfície hidrofóbica. Sem óleo, a água penetra diretamente entre as bárbulas e é absorvida pela queratina.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <text x="115" y="20" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Com óleo (impermeável)</text>
            <line x1="45" y1="60" x2="185" y2="60" stroke="#a78bfa" stroke-width="3"/>
            <line x1="60" y1="60" x2="55" y2="90" stroke="#94a3b8" stroke-width="2"/>
            <line x1="90" y1="60" x2="85" y2="95" stroke="#94a3b8" stroke-width="2"/>
            <line x1="120" y1="60" x2="115" y2="90" stroke="#94a3b8" stroke-width="2"/>
            <line x1="150" y1="60" x2="145" y2="95" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="70" cy="45" r="6" fill="#38bdf8" opacity="0.8"/>
            <circle cx="130" cy="42" r="5" fill="#38bdf8" opacity="0.8"/>
            <text x="115" y="120" fill="#6ee7b7" font-size="9" text-anchor="middle">gotas escorregam</text>

            <text x="345" y="20" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">Sem óleo (encharcada)</text>
            <line x1="275" y1="60" x2="415" y2="60" stroke="#64748b" stroke-width="3"/>
            <line x1="290" y1="60" x2="285" y2="90" stroke="#64748b" stroke-width="2"/>
            <line x1="320" y1="60" x2="315" y2="95" stroke="#64748b" stroke-width="2"/>
            <line x1="350" y1="60" x2="345" y2="90" stroke="#64748b" stroke-width="2"/>
            <line x1="380" y1="60" x2="375" y2="95" stroke="#64748b" stroke-width="2"/>
            <path d="M 285 60 Q 300 100 320 90 Q 340 110 360 90 Q 380 105 395 70" fill="#0c4a6e" opacity="0.6" stroke="#0ea5e9" stroke-width="1"/>
            <text x="345" y="130" fill="#fca5a5" font-size="9" text-anchor="middle">água penetra e é absorvida</text>
          </svg>`
      },
      {
        titulo: "Efeito na flutuação",
        legenda: "Impermeabilizada, a plumagem retém ar e a ave flutua alta. Encharcada, o ar escapa, o peso aumenta e a ave afunda progressivamente.",
        svg: `
          <svg viewBox="0 0 460 180" class="w-full h-auto">
            <rect x="20" y="90" width="200" height="70" fill="#0c4a6e" opacity="0.5"/>
            <line x1="20" y1="90" x2="220" y2="90" stroke="#38bdf8" stroke-width="2"/>
            <ellipse cx="120" cy="80" rx="45" ry="22" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
            <text x="120" y="35" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">flutua alto — ar retido nas penas</text>
            <circle cx="100" cy="75" r="3" fill="#e2e8f0"/>
            <circle cx="115" cy="70" r="3" fill="#e2e8f0"/>
            <circle cx="130" cy="76" r="3" fill="#e2e8f0"/>

            <rect x="240" y="90" width="200" height="70" fill="#0c4a6e" opacity="0.5"/>
            <line x1="240" y1="90" x2="440" y2="90" stroke="#38bdf8" stroke-width="2"/>
            <ellipse cx="340" cy="100" rx="40" ry="18" fill="#334155" stroke="#f87171" stroke-width="2"/>
            <text x="340" y="35" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">afunda — penas encharcadas</text>
            <path d="M 305 108 Q 340 130 375 108" fill="none" stroke="#f87171" stroke-width="1.5" stroke-dasharray="3 3"/>
          </svg>`
      },
      {
        titulo: "Mapa das cinco alternativas",
        legenda: "Cada estrutura cuida de uma função diferente. Só a glândula uropigial está diretamente ligada à impermeabilização das penas.",
        svg: `
          <svg viewBox="0 0 460 210" class="w-full h-auto">
            <text x="30" y="15" fill="#94a3b8" font-size="9">Estrutura</text>
            <text x="330" y="15" fill="#94a3b8" font-size="9">Explica o encharcamento?</text>
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>

            <text x="30" y="42" fill="#e2e8f0" font-size="10">A — Papo</text>
            <text x="400" y="42" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="69" fill="#e2e8f0" font-size="10">B — Reposição de penas</text>
            <text x="400" y="69" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <rect x="15" y="80" width="430" height="27" rx="5" fill="#065f46" opacity="0.35"/>
            <text x="30" y="98" fill="#6ee7b7" font-size="10" font-weight="bold">C — Glândula uropigial</text>
            <text x="400" y="98" fill="#34d399" font-size="12" text-anchor="middle" font-weight="bold">✓</text>

            <text x="30" y="124" fill="#e2e8f0" font-size="10">D — Membrana natatória</text>
            <text x="400" y="124" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="151" fill="#e2e8f0" font-size="10">E — Ossos pneumáticos</text>
            <text x="400" y="151" fill="#f87171" font-size="12" text-anchor="middle">✕</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: quanto óleo faz diferença na flutuação?",
      descricao: "Mexa no nível de secreção da glândula uropigial e observe o efeito em cadeia sobre a impermeabilização, o ar retido e a flutuação da ave.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Secreção da glândula uropigial</span><span class="text-emerald-300 font-bold" data-out="secrecao">70%</span>
              </label>
              <input type="range" data-sim="secrecao" min="0" max="100" value="70" step="5" class="w-full accent-emerald-500">
              <p class="text-[10px] text-slate-500 mt-1"><i class="fa-solid fa-flask"></i> Este é o único fator que a questão faz variar — mexa nele e observe o resto.</p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-sky-300 font-bold">Impermeabilização da plumagem</span>
                  <span class="text-sky-300 font-mono" data-out="imperm">70%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="imperm" class="h-full bg-sky-500 transition-all" style="width:70%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-purple-300 font-bold">Ar retido entre as penas</span>
                  <span class="text-purple-300 font-mono" data-out="ar">70%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="ar" class="h-full bg-purple-500 transition-all" style="width:70%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-emerald-300 font-bold">Flutuação</span>
                  <span class="text-emerald-300 font-mono" data-out="flut">70%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="flut" class="h-full bg-emerald-500 transition-all" style="width:70%"></div>
                </div>
              </div>
            </div>

            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var campo = raiz.querySelector('[data-sim="secrecao"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };

        function atualizar() {
          var s = parseFloat(campo.value);
          var imperm = s;
          var ar = Math.max(0, s - 5);
          var flut = Math.max(0, s - 10);

          saida('secrecao').textContent = s.toFixed(0) + '%';
          saida('imperm').textContent = imperm.toFixed(0) + '%';
          saida('ar').textContent = ar.toFixed(0) + '%';
          saida('flut').textContent = flut.toFixed(0) + '%';

          barra('imperm').style.width = imperm + '%';
          barra('ar').style.width = ar + '%';
          barra('flut').style.width = flut + '%';

          var v = saida('veredito');
          if (s >= 60) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            v.innerHTML = '<strong>Plumagem impermeável.</strong> O óleo espalhado repele a água, o ar fica retido e a ave flutua normalmente.';
          } else if (s >= 25) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            v.innerHTML = '<strong>Impermeabilização comprometida.</strong> As penas começam a encharcar, a camada de ar diminui e a flutuação já fica prejudicada — o quadro do enunciado.';
          } else {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200';
            v.innerHTML = '<strong>Encharcamento severo.</strong> Sem óleo suficiente, a queratina absorve água livremente, o ar retido praticamente desaparece e a ave corre risco real de afogamento.';
          }
        }

        campo.addEventListener('input', atualizar);
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-emerald-300 block"><i class="fa-solid fa-droplet"></i> Glândula Uropigial → Óleo → Impermeabilização → Flutuação</span>
        <svg viewBox="0 0 460 100" class="w-full h-24 mx-auto">
          <rect x="15" y="35" width="100" height="35" rx="6" fill="#065f46" stroke="#34d399" stroke-width="2"/>
          <text x="65" y="57" fill="#d1fae5" font-size="9" font-weight="bold" text-anchor="middle">Glândula uropigial</text>
          <line x1="115" y1="52" x2="145" y2="52" stroke="#34d399" stroke-width="2" marker-end="url(#ptq93)"/>
          <rect x="150" y="35" width="90" height="35" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
          <text x="195" y="57" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">Óleo nas penas</text>
          <line x1="240" y1="52" x2="270" y2="52" stroke="#34d399" stroke-width="2" marker-end="url(#ptq93)"/>
          <rect x="275" y="35" width="90" height="35" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2"/>
          <text x="320" y="57" fill="#bae6fd" font-size="9" font-weight="bold" text-anchor="middle">Impermeável</text>
          <line x1="365" y1="52" x2="395" y2="52" stroke="#34d399" stroke-width="2" marker-end="url(#ptq93)"/>
          <rect x="398" y="35" width="55" height="35" rx="6" fill="#1e3a8a" stroke="#93c5fd" stroke-width="2"/>
          <text x="425" y="57" fill="#dbeafe" font-size="9" font-weight="bold" text-anchor="middle">Flutua</text>
          <defs>
            <marker id="ptq93" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="#34d399"/>
            </marker>
          </defs>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q094",
    numero: "Questão 94",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "fisica",
    materia: "Física / Eletrodinâmica & Potência Elétrica",
    materiaCor: "purple",
    materiaIcone: "fa-plug",
    titulo: "Corrente Elétrica em Réguas: Somando Potências para não Queimar o Fusível",
    tags: ["Física", "Eletrodinâmica", "Potência Elétrica", "Corrente Elétrica", "Circuitos em Paralelo", "Consumo Doméstico"],
    alternativaCorreta: "D",
    userNotes: "",
    userCustomImage: null,

    enunciado: `Réguas elétricas são dispositivos que permitem a ligação segura e simultânea de dois ou mais aparelhos eletroeletrônicos à rede elétrica. Uma estudante comprou uma régua com seis tomadas, conforme a figura. Essa régua suporta uma intensidade máxima de corrente elétrica igual a 20 A. Acima desse valor, o fusível de segurança da régua se rompe, inutilizando-a até que um novo fusível seja instalado. Considere as potências nominais de alguns aparelhos eletroeletrônicos apresentados no quadro.
    <br><br>
    <table class="w-full text-xs border-collapse my-2">
      <thead>
        <tr class="bg-slate-800 text-slate-200">
          <th class="border border-slate-700 p-2 text-left">Aparelho</th>
          <th class="border border-slate-700 p-2 text-left">Potência (watt)</th>
        </tr>
      </thead>
      <tbody class="text-slate-300">
        <tr><td class="border border-slate-700 p-2">Luminária de LED</td><td class="border border-slate-700 p-2">5</td></tr>
        <tr><td class="border border-slate-700 p-2">Computador</td><td class="border border-slate-700 p-2">250</td></tr>
        <tr><td class="border border-slate-700 p-2">Impressora a laser</td><td class="border border-slate-700 p-2">660</td></tr>
        <tr><td class="border border-slate-700 p-2">Secador de cabelos</td><td class="border border-slate-700 p-2">750</td></tr>
        <tr><td class="border border-slate-700 p-2">Cafeteira</td><td class="border border-slate-700 p-2">900</td></tr>
        <tr><td class="border border-slate-700 p-2">Condicionador de ar portátil</td><td class="border border-slate-700 p-2">1.100</td></tr>
      </tbody>
    </table>
    <br>
    Em um dia quente, a estudante mantém o computador e o condicionador de ar portátil ligados à régua permanentemente. Nessa situação, ela tenta realizar algumas atividades, uma de cada vez, utilizando a mesma régua, na seguinte ordem:
    <br><br>
    1º – imprimir um trabalho escolar;<br>
    2º – fazer um café com a cafeteira;<br>
    3º – ligar a luminária;<br>
    4º – secar os cabelos.
    <br><br>
    Sabe-se que a régua foi ligada à tensão elétrica de 110 V, adequada para o funcionamento desses aparelhos.
    <br><br>
    Considerando a ordem das tentativas, quantas atividades a estudante conseguiu realizar sem queimar o fusível?`,

    alternativas: [
      { letra: "A", texto: "4", correta: false },
      { letra: "B", texto: "3", correta: false },
      { letra: "C", texto: "2", correta: false },
      { letra: "D", texto: "1", correta: true },
      { letra: "E", texto: "0", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-purple-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre toda a relação entre potência, tensão e corrente cobrada no Enem — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">1.</span> A relação entre potência, tensão e corrente</h4>
          <p>
            Todo aparelho elétrico converte energia elétrica em outra forma de energia (calor, luz, movimento) a uma taxa chamada <strong>potência</strong>, medida em watts (W). Essa potência se relaciona com a tensão da rede (V, em volts) e a corrente que o aparelho puxa (I, em ampères) pela equação:
          </p>
          $$P = V \\cdot I \\quad \\Rightarrow \\quad I = \\frac{P}{V}$$
          <p>
            Quanto maior a potência de um aparelho, mais corrente ele exige da rede, para uma mesma tensão.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">2.</span> Por que as correntes se somam numa régua</h4>
          <p>
            Uma régua elétrica liga todos os aparelhos em <strong>paralelo</strong> à mesma rede. Em uma associação em paralelo, todos os ramos têm a mesma tensão, mas cada aparelho puxa sua própria corrente — e a corrente total que passa pelo fio principal (e pelo fusível) é a <strong>soma</strong> das correntes de todos os aparelhos ligados naquele instante:
          </p>
          $$I_{total} = I_1 + I_2 + I_3 + \\ldots = \\frac{P_1 + P_2 + P_3 + \\ldots}{V}$$
          <p class="bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs">
            <strong class="text-purple-300">Atalho útil:</strong> como a tensão é a mesma para todos os aparelhos da régua (110 V), basta somar as <strong>potências</strong> de tudo o que está ligado ao mesmo tempo e comparar com a potência máxima que o fusível suporta — não precisa calcular corrente aparelho por aparelho.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">3.</span> O papel do fusível</h4>
          <p>
            O fusível é um elo de segurança dimensionado para uma corrente máxima — aqui, 20 A. Se a corrente total ultrapassa esse valor, o fusível se rompe (queima) para proteger o circuito de superaquecimento. A partir desse momento, a régua fica <strong>inutilizada</strong>, sem passar mais corrente nenhuma, até que o fusível seja fisicamente trocado.
          </p>
          <p class="bg-purple-950/30 border border-purple-500/30 rounded-lg p-3 text-xs">
            <strong class="text-purple-300">Consequência que decide a questão:</strong> uma vez queimado, o fusível não se conserta sozinho. Todas as tentativas seguintes, depois da que rompeu o fusível, automaticamente falham — não porque excedam a corrente de novo, mas porque a régua já não funciona.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">4.</span> Traduzindo a potência máxima em corrente máxima</h4>
          <p>
            Com $V = 110\\text{ V}$ e $I_{max} = 20\\text{ A}$:
          </p>
          $$P_{max} = V \\cdot I_{max} = 110 \\times 20 = 2200\\text{ W}$$
          <p>
            Ou seja: a régua pode carregar, ao mesmo tempo, no máximo 2200 W somados de todos os aparelhos ligados. Qualquer combinação que ultrapasse isso rompe o fusível.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">5.</span> Separando o que é fixo do que é testado</h4>
          <p>
            O enunciado distingue dois grupos de aparelhos: o computador e o condicionador de ar portátil ficam ligados <strong>o tempo todo</strong> (carga fixa, ou "baseline"); os outros quatro aparelhos são testados <strong>um de cada vez</strong>, em uma ordem específica. Isso significa que, a cada tentativa, a régua carrega: carga fixa + um único aparelho extra.
          </p>
          <p class="bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs">
            Carga fixa: $250\\text{ W (computador)} + 1100\\text{ W (ar-condicionado)} = 1350\\text{ W}$, sempre presente, em toda tentativa.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">6.</span> A lógica de "testar até quebrar"</h4>
          <p>
            Esse tipo de questão pede para simular, passo a passo, uma sequência de eventos até encontrar o ponto de falha. A cada tentativa: some a carga fixa com o aparelho da vez, compare com 2200 W. Se couber, a atividade é bem-sucedida e a contagem de sucesso aumenta; a próxima tentativa começa normalmente. Se estourar, o fusível queima ali mesmo, e <strong>nenhuma tentativa posterior</strong> pode ser realizada, mesmo que sozinha ela coubesse tranquilamente dentro do limite.
          </p>
        </div>
      </div>
    `,

    /* ------------------------------------------------------------------
       2. RESOLUÇÃO COMENTADA
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-4 text-xs">

        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <h4 class="font-bold text-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-purple-400"></i> Estratégia em 3 passos
          </h4>
          <p class="text-slate-300 leading-relaxed">
            <strong>Passo 1 — Calcule a potência máxima.</strong> $P_{max} = 110 \\times 20 = 2200\\text{ W}$.
            <br><br>
            <strong>Passo 2 — Fixe a carga permanente.</strong> Computador (250 W) + ar-condicionado (1100 W) = 1350 W, presente em toda tentativa.
            <br><br>
            <strong>Passo 3 — Teste cada atividade, na ordem, até estourar 2200 W.</strong> No momento em que estourar, a régua para de funcionar — pare de contar sucessos ali.
          </p>
        </div>

        <div class="bg-purple-950/40 p-4 rounded-xl border border-purple-500/40 space-y-3">
          <h4 class="font-bold text-purple-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Simulação tentativa a tentativa
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="p-3 bg-emerald-950/30 rounded-lg border border-emerald-500/30">
              <strong class="text-emerald-300 block mb-1">1ª tentativa — Imprimir (660 W)</strong>
              <span class="text-slate-300">$1350 + 660 = 2010\\text{ W}$ → $2010 < 2200$ ✓ Funciona.</span>
            </div>
            <div class="p-3 bg-rose-950/30 rounded-lg border border-rose-500/30">
              <strong class="text-rose-300 block mb-1">2ª tentativa — Cafeteira (900 W)</strong>
              <span class="text-slate-300">$1350 + 900 = 2250\\text{ W}$ → $2250 > 2200$ ✗ Fusível queima aqui.</span>
            </div>
            <div class="p-3 bg-slate-900 rounded-lg border border-slate-700 opacity-60">
              <strong class="text-slate-400 block mb-1">3ª tentativa — Luminária (5 W)</strong>
              <span class="text-slate-400">Régua já inutilizada. Nem chega a ser testada de verdade — não há mais corrente nenhuma passando.</span>
            </div>
            <div class="p-3 bg-slate-900 rounded-lg border border-slate-700 opacity-60">
              <strong class="text-slate-400 block mb-1">4ª tentativa — Secador (750 W)</strong>
              <span class="text-slate-400">Mesma situação: fusível já rompido, régua fora de uso.</span>
            </div>
          </div>
          <p class="text-slate-200 leading-relaxed pt-1">
            Resultado: apenas <strong>1 atividade</strong> (imprimir) foi concluída antes do fusível queimar. <strong>Alternativa D.</strong>
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa A — 4</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> assumir que, como cada aparelho é usado "um de cada vez" e depois desligado, nunca há acúmulo suficiente para queimar o fusível.
              <br>
              <strong>Onde quebra:</strong> ignora que a carga fixa (1350 W) já ocupa boa parte do limite de 2200 W antes mesmo do primeiro teste. A folga real é de só 850 W, insuficiente para a cafeteira (900 W).
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — 3</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> testar as quatro atividades isoladamente contra o limite de 2200 W, sem somar a carga fixa (ou esquecendo de parar depois da falha).
              <br>
              <strong>Onde quebra:</strong> a cafeteira sozinha (900 W) cabe tranquilamente nos 2200 W, mas ela nunca está sozinha — sempre soma com os 1350 W fixos.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa C — 2</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> calcular corretamente que a 2ª tentativa (cafeteira) estoura o limite, mas achar que ela "conta" como sucesso por engano, ou que a régua se recupera sozinha para a tentativa seguinte.
              <br>
              <strong>Onde quebra:</strong> a 2ª tentativa é exatamente a que rompe o fusível — ela não é um sucesso, e depois dela nada mais funciona.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — 0</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> supor que a carga fixa sozinha (1350 W) já é suficiente para queimar o fusível, ou confundir o limite de 20 A com um valor de potência diretamente (sem multiplicar pela tensão).
              <br>
              <strong>Onde quebra:</strong> 1350 W é bem menor que 2200 W — a régua funciona normalmente com só o computador e o ar-condicionado. A primeira atividade (impressora, 660 W) soma 2010 W e ainda cabe no limite.
            </p>
          </div>
        </div>

        <div class="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30">
          <strong class="text-emerald-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            As alternativas erradas surgem de três descuidos típicos: esquecer de somar a carga fixa, contar a tentativa que queima o fusível como sucesso, e não perceber que, depois do rompimento, a régua fica permanentemente fora de uso — nenhuma tentativa seguinte pode ser sequer testada.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-bolt", titulo: "P = V · I", text: "Potência é o produto entre tensão e corrente; corrente = potência dividida pela tensão." },
      { icone: "fa-plug", titulo: "Paralelo numa régua", text: "Todos os aparelhos têm a mesma tensão; as correntes (e as potências) se somam no fio principal." },
      { icone: "fa-shield-halved", titulo: "Fusível", text: "Rompe ao ultrapassar a corrente máxima e deixa o circuito inutilizado até ser trocado." },
      { icone: "fa-calculator", titulo: "Potência máxima", text: "P_max = V · I_max = 110 × 20 = 2200 W neste circuito." },
      { icone: "fa-layer-group", titulo: "Carga fixa + variável", text: "Some sempre a carga permanente à carga testada antes de comparar com o limite." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Aparelhos em paralelo na régua",
        legenda: "Computador e ar-condicionado ficam ligados o tempo todo. As correntes de todos os aparelhos ativos se somam no fio principal, onde está o fusível.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <rect x="30" y="80" width="400" height="20" fill="#1e293b" stroke="#475569" stroke-width="2"/>
            <text x="230" y="65" fill="#94a3b8" font-size="9" text-anchor="middle">fio principal (fusível 20 A)</text>
            <rect x="200" y="82" width="24" height="16" fill="#7c3aed" stroke="#c4b5fd" stroke-width="1.5"/>
            <text x="212" y="115" fill="#c4b5fd" font-size="8" text-anchor="middle">fusível</text>

            <line x1="80" y1="80" x2="80" y2="50" stroke="#64748b" stroke-width="2"/>
            <rect x="55" y="20" width="50" height="30" rx="4" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
            <text x="80" y="39" fill="#e2e8f0" font-size="8" text-anchor="middle">PC 250W</text>

            <line x1="150" y1="80" x2="150" y2="50" stroke="#64748b" stroke-width="2"/>
            <rect x="120" y="20" width="60" height="30" rx="4" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2"/>
            <text x="150" y="39" fill="#bae6fd" font-size="8" text-anchor="middle">Ar-cond. 1100W</text>

            <line x1="320" y1="100" x2="320" y2="130" stroke="#64748b" stroke-width="2" stroke-dasharray="4 3"/>
            <rect x="280" y="130" width="80" height="30" rx="4" fill="#422006" stroke="#f59e0b" stroke-width="2"/>
            <text x="320" y="149" fill="#fde68a" font-size="8" text-anchor="middle">Aparelho testado</text>

            <text x="80" y="118" fill="#94a3b8" font-size="8" text-anchor="middle">sempre ligado</text>
            <text x="150" y="118" fill="#94a3b8" font-size="8" text-anchor="middle">sempre ligado</text>
          </svg>`
      },
      {
        titulo: "Quanto de folga sobra para testar",
        legenda: "O limite é 2200 W. A carga fixa já consome 1350 W, deixando só 850 W de folga para o aparelho testado em cada tentativa.",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <rect x="40" y="30" width="380" height="40" fill="#0f172a" stroke="#475569" stroke-width="2"/>
            <rect x="40" y="30" width="233" height="40" fill="#334155"/>
            <text x="156" y="55" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">Carga fixa: 1350 W</text>
            <rect x="273" y="30" width="147" height="40" fill="#422006" opacity="0.5"/>
            <text x="346" y="55" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">Folga: 850 W</text>
            <line x1="420" y1="15" x2="420" y2="85" stroke="#f87171" stroke-width="2"/>
            <text x="420" y="10" fill="#fca5a5" font-size="8" text-anchor="middle">2200 W (limite)</text>
            <text x="40" y="95" fill="#64748b" font-size="8">0 W</text>
          </svg>`
      },
      {
        titulo: "Potência acumulada em cada tentativa",
        legenda: "A impressora cabe na folga (2010 W). A cafeteira não cabe (2250 W) e rompe o fusível ali mesmo — o gráfico para nesse ponto.",
        svg: `
          <svg viewBox="0 0 460 200" class="w-full h-auto">
            <line x1="55" y1="160" x2="435" y2="160" stroke="#64748b" stroke-width="2"/>
            <line x1="55" y1="20" x2="55" y2="160" stroke="#64748b" stroke-width="2"/>
            <text x="48" y="26" fill="#94a3b8" font-size="9" text-anchor="end">P (W)</text>
            <line x1="55" y1="45" x2="435" y2="45" stroke="#f87171" stroke-width="1.5" stroke-dasharray="5 4"/>
            <text x="440" y="49" fill="#fca5a5" font-size="8">2200 W</text>

            <rect x="90" y="88" width="50" height="72" fill="#475569"/>
            <text x="115" y="175" fill="#cbd5e1" font-size="8" text-anchor="middle">base</text>
            <text x="115" y="82" fill="#e2e8f0" font-size="8" text-anchor="middle">1350</text>

            <rect x="170" y="70" width="50" height="90" fill="#34d399"/>
            <text x="195" y="175" fill="#cbd5e1" font-size="8" text-anchor="middle">+impress.</text>
            <text x="195" y="64" fill="#6ee7b7" font-size="8" text-anchor="middle">2010</text>

            <rect x="260" y="43" width="50" height="117" fill="#f43f5e"/>
            <text x="285" y="175" fill="#cbd5e1" font-size="8" text-anchor="middle">+café</text>
            <text x="285" y="37" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">2250 ✕</text>

            <rect x="340" y="43" width="80" height="117" fill="#1e293b" stroke="#334155" stroke-width="1" stroke-dasharray="3 3"/>
            <text x="380" y="105" fill="#475569" font-size="8" text-anchor="middle">fusível já</text>
            <text x="380" y="118" fill="#475569" font-size="8" text-anchor="middle">rompido</text>
          </svg>`
      },
      {
        titulo: "Mapa das cinco alternativas",
        legenda: "A régua realiza só a primeira atividade antes do fusível romper na segunda tentativa.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <text x="30" y="15" fill="#94a3b8" font-size="9">Alternativa</text>
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>

            <text x="30" y="42" fill="#e2e8f0" font-size="10">A — 4 atividades</text>
            <text x="400" y="42" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="69" fill="#e2e8f0" font-size="10">B — 3 atividades</text>
            <text x="400" y="69" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="96" fill="#e2e8f0" font-size="10">C — 2 atividades</text>
            <text x="400" y="96" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <rect x="15" y="107" width="430" height="27" rx="5" fill="#065f46" opacity="0.35"/>
            <text x="30" y="125" fill="#6ee7b7" font-size="10" font-weight="bold">D — 1 atividade (imprimir)</text>
            <text x="400" y="125" fill="#34d399" font-size="12" text-anchor="middle" font-weight="bold">✓</text>

            <text x="30" y="151" fill="#e2e8f0" font-size="10">E — 0 atividades</text>
            <text x="400" y="151" fill="#f87171" font-size="12" text-anchor="middle">✕</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: monte a régua e veja quando o fusível queima",
      descricao: "Computador e ar-condicionado já vêm ligados (carga fixa). Ligue os outros aparelhos, um de cada vez, e observe a corrente total contra o limite de 20 A.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-2 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <p class="text-[11px] text-slate-400 mb-1">Carga fixa (sempre ligada):</p>
            <div class="flex items-center justify-between p-2 rounded-lg border border-slate-800 opacity-70">
              <span class="text-[11px] text-slate-300">Computador — 250 W</span>
              <i class="fa-solid fa-lock text-slate-500"></i>
            </div>
            <div class="flex items-center justify-between p-2 rounded-lg border border-slate-800 opacity-70 mb-2">
              <span class="text-[11px] text-slate-300">Condicionador de ar — 1100 W</span>
              <i class="fa-solid fa-lock text-slate-500"></i>
            </div>

            <p class="text-[11px] text-slate-400 mb-1">Aparelho testado (escolha um):</p>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q94aparelho" data-sim="ap" value="0" class="accent-purple-500">
              <span class="text-[11px] text-slate-200">Nenhum</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q94aparelho" data-sim="ap" value="660" checked class="accent-purple-500">
              <span class="text-[11px] text-slate-200">Impressora a laser — 660 W</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q94aparelho" data-sim="ap" value="900" class="accent-purple-500">
              <span class="text-[11px] text-slate-200">Cafeteira — 900 W</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q94aparelho" data-sim="ap" value="5" class="accent-purple-500">
              <span class="text-[11px] text-slate-200">Luminária de LED — 5 W</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q94aparelho" data-sim="ap" value="750" class="accent-purple-500">
              <span class="text-[11px] text-slate-200">Secador de cabelos — 750 W</span>
            </label>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-purple-300 font-bold">Potência total</span>
                  <span class="text-purple-300 font-mono" data-out="potencia">2010 W</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="potencia" class="h-full bg-purple-500 transition-all" style="width:91%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-sky-300 font-bold">Corrente total</span>
                  <span class="text-sky-300 font-mono" data-out="corrente">18,3 A</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="corrente" class="h-full bg-sky-500 transition-all" style="width:91%"></div>
                </div>
              </div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var V = 110;
        var Imax = 20;
        var Pmax = V * Imax;
        var cargaFixa = 250 + 1100;
        var radios = raiz.querySelectorAll('[data-sim="ap"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };

        function atualizar() {
          var ap = 0;
          radios.forEach(function (r) { if (r.checked) ap = parseFloat(r.value); });

          var potencia = cargaFixa + ap;
          var corrente = potencia / V;
          var pct = Math.min(100, potencia / Pmax * 100);

          saida('potencia').textContent = potencia.toFixed(0) + ' W';
          saida('corrente').textContent = corrente.toFixed(1).replace('.', ',') + ' A';
          barra('potencia').style.width = pct + '%';
          barra('corrente').style.width = pct + '%';

          var v = saida('veredito');
          if (corrente > Imax) {
            barra('potencia').className = 'h-full bg-rose-500 transition-all';
            barra('corrente').className = 'h-full bg-rose-500 transition-all';
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200';
            v.innerHTML = '<strong>Fusível rompido!</strong> ' + corrente.toFixed(1).replace('.', ',') + ' A ultrapassa os 20 A. A régua fica inutilizada até trocar o fusível — nenhum aparelho seguinte funcionaria.';
          } else {
            barra('potencia').className = 'h-full bg-emerald-500 transition-all';
            barra('corrente').className = 'h-full bg-emerald-500 transition-all';
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            v.innerHTML = '<strong>Dentro do limite.</strong> ' + corrente.toFixed(1).replace('.', ',') + ' A é menor que 20 A — a régua funciona normalmente com essa combinação.';
          }
        }

        radios.forEach(function (r) { r.addEventListener('change', atualizar); });
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-purple-300 block"><i class="fa-solid fa-plug"></i> 1350 W (fixo) + aparelho testado, contra o limite de 2200 W</span>
        <svg viewBox="0 0 460 110" class="w-full h-28 mx-auto">
          <rect x="30" y="35" width="400" height="35" fill="#0f172a" stroke="#475569" stroke-width="2"/>
          <rect x="30" y="35" width="245" height="35" fill="#334155"/>
          <text x="152" y="57" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">1350 W fixos</text>
          <rect x="275" y="35" width="87" height="35" fill="#065f46"/>
          <text x="318" y="57" fill="#d1fae5" font-size="9" font-weight="bold" text-anchor="middle">+660 (imprime)</text>
          <line x1="430" y1="20" x2="430" y2="85" stroke="#f87171" stroke-width="2"/>
          <text x="430" y="15" fill="#fca5a5" font-size="8" text-anchor="middle">2200 W</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q096",
    numero: "Questão 96",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "biologia",
    materia: "Biologia / Ecologia & Relações Tróficas",
    materiaCor: "emerald",
    materiaIcone: "fa-frog",
    titulo: "Sapos-Flecha e a Toxina que Vem da Dieta: Bioacumulação, não Produção Própria",
    tags: ["Biologia", "Ecologia", "Toxinas Animais", "Bioacumulação", "Relações Tróficas", "Herpetologia"],
    alternativaCorreta: "B",
    userNotes: "",
    userCustomImage: null,

    enunciado: `Os sapinhos-ponta-de-flecha constituem um grupo de espécies encontradas na América Central e do Sul. Seus venenos são obtidos por meio do consumo de algumas formigas e cupins que se alimentam de plantas que contêm esses venenos. Esses anfíbios são usados para envenenar as flechas dos caçadores nativos. Quando capturados e criados em condições artificiais, ou quando nascidos em cativeiro, não são tóxicos.
    <br><br>
    BADIO, B. et al. Epibatidine: Discovery and Definition as a Potent Analgesic and Nicotinic Agonist. <strong>Med. Chem. Res.</strong>, n. 4, 1994 (adaptado).
    <br><br>
    A perda da capacidade de se obter a toxina nos nascidos em cativeiro é causada pela:`,

    alternativas: [
      { letra: "A", texto: "Diferença de umidade entre os ambientes.", correta: false },
      { letra: "B", texto: "Ausência de alimentação natural.", correta: true },
      { letra: "C", texto: "Adaptação ao novo ambiente.", correta: false },
      { letra: "D", texto: "Mudança de comportamento.", correta: false },
      { letra: "E", texto: "Variabilidade genética.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-emerald-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre o mecanismo real da toxicidade dos sapos-flecha — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">1.</span> Quem são os sapos-ponta-de-flecha</h4>
          <p>
            A família Dendrobatidae reúne pequenos anfíbios da América Central e do Sul, famosos pelas cores vibrantes — vermelho, amarelo, azul intenso. Essas cores não são só estética: são <strong>aposematismo</strong>, um sinal de alerta visual que anuncia "sou tóxico, não me coma". Historicamente, povos indígenas usavam a secreção da pele desses sapos para envenenar pontas de flecha, daí o nome popular.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">2.</span> O mito mais comum: achar que o sapo "fabrica" o veneno</h4>
          <p>
            A intuição mais frequente é imaginar que a toxina é produzida pelo próprio metabolismo do sapo, como um veneno de cobra é sintetizado em glândulas especializadas a partir do próprio corpo do animal. <strong>Não é esse o caso aqui.</strong> O enunciado já entrega a explicação real na primeira frase: "Seus venenos são obtidos por meio do consumo de algumas formigas e cupins que se alimentam de plantas que contêm esses venenos".
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">3.</span> O mecanismo real: sequestro de toxina pela cadeia alimentar</h4>
          <p>
            O que acontece é um processo chamado <strong>sequestro de toxina</strong> (ou bioacumulação dietética): o sapo não sintetiza o alcaloide tóxico do zero, ele o <strong>acumula</strong> a partir do que come, seguindo uma cadeia de três elos:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-emerald-300 block mb-1">1. Planta</strong>
              Produz alcaloides tóxicos como defesa contra herbivoria.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-emerald-300 block mb-1">2. Formigas e cupins</strong>
              Se alimentam dessas plantas e acumulam os alcaloides em seu próprio corpo, sem serem afetados.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-emerald-300 block mb-1">3. Sapo-flecha</strong>
              Come esses insetos e concentra os alcaloides nas glândulas granulares da própria pele.
            </div>
          </div>
          <p class="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-3 text-xs">
            <strong class="text-emerald-300">Por isso a toxina é dieta-dependente:</strong> sem esse elo específico da cadeia alimentar (as formigas e cupins certos, que por sua vez comeram as plantas certas), não há alcaloide para acumular — não importa quão saudável ou bem alimentado o sapo esteja com outra dieta.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">4.</span> Por que sapos de cativeiro nascem "destoxicados"</h4>
          <p>
            Em criadouros e zoológicos, os sapos-flecha são alimentados com dieta padrão de terrário — grilos, moscas-das-frutas, larvas comerciais — que não contêm os alcaloides das formigas e cupins silvestres específicos da floresta tropical de origem. Como a fonte da toxina nunca chega até o sapo, ele simplesmente não tem o que acumular, mesmo sendo, geneticamente, a mesma espécie e (nos nascidos em cativeiro de pais selvagens) até parentes diretos de indivíduos tóxicos.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">5.</span> Por que isso não é genético, comportamental ou ambiental-abiótico</h4>
          <p>
            O ponto mais importante da questão é diferenciar causas <strong>bióticas dietéticas</strong> de outras explicações que soam plausíveis:
          </p>
          <ul class="list-disc list-inside space-y-1 text-xs text-slate-300">
            <li>Não é <strong>genética</strong>: o genoma do sapo de cativeiro não mudou. Ele tem a mesma capacidade herdada de armazenar o alcaloide nas glândulas — só não recebe o alcaloide para armazenar.</li>
            <li>Não é <strong>umidade, temperatura ou outro fator abiótico</strong> do recinto: esses fatores afetam o bem-estar geral do animal, mas não fornecem (nem retiram) o composto químico específico da toxina.</li>
            <li>Não é uma questão de <strong>comportamento</strong>: o sapo pode caçar e se alimentar normalmente em cativeiro — só não há a presa certa disponível.</li>
          </ul>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">6.</span> Um padrão que se repete na natureza</h4>
          <p>
            O sequestro de toxina dietética não é exclusividade dos sapos-flecha. As borboletas-monarca acumulam cardenolídeos tóxicos ao se alimentarem, na fase de lagarta, de plantas do gênero <em>Asclepias</em>; muitos moluscos marinhos acumulam toxinas de algas que consomem. Em todos esses casos, o padrão é o mesmo: o animal não fabrica o veneno — ele o hospeda, obtido de um elo específico da cadeia alimentar.
          </p>
        </div>
      </div>
    `,

    /* ------------------------------------------------------------------
       2. RESOLUÇÃO COMENTADA
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-4 text-xs">

        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <h4 class="font-bold text-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-emerald-400"></i> Estratégia em 2 passos
          </h4>
          <p class="text-slate-300 leading-relaxed">
            <strong>Passo 1 — Releia a primeira frase do enunciado.</strong> Ela já entrega o mecanismo: a toxina vem do consumo de formigas e cupins que comeram plantas tóxicas. A pergunta é só uma consequência lógica dessa frase.
            <br><br>
            <strong>Passo 2 — Pergunte: o que muda entre um sapo selvagem e um de cativeiro?</strong> Não é o genoma, nem o comportamento, nem a umidade — é exatamente a <strong>dieta</strong>: em cativeiro, ele nunca come as formigas e cupins que carregam o alcaloide.
          </p>
        </div>

        <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/40 space-y-2">
          <h4 class="font-bold text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa B — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            "Ausência de alimentação natural." O sapo em cativeiro não recebe as formigas e cupins que sequestraram o alcaloide de plantas tóxicas — sem esse elo específico da cadeia alimentar silvestre, não há toxina para acumular nas glândulas da pele.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa A — diferença de umidade entre os ambientes</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lembrar que anfíbios são muito sensíveis à umidade e associar qualquer mudança fisiológica a esse fator.
              <br>
              <strong>Onde quebra:</strong> umidade afeta a pele e a respiração cutânea do sapo, mas não é a fonte química do alcaloide. O enunciado não menciona nada sobre condições de umidade — só sobre a dieta.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa C — adaptação ao novo ambiente</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> usar "adaptação" como explicação genérica para qualquer diferença entre populações selvagem e cativa.
              <br>
              <strong>Onde quebra:</strong> é vaga demais e não aponta a causa real. O sapo não "se adapta" a não ser tóxico — ele simplesmente não recebe o composto que tornaria sua pele tóxica.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa D — mudança de comportamento</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> supor que o sapo "decide" agir diferente em cativeiro e isso o torna não tóxico.
              <br>
              <strong>Onde quebra:</strong> o comportamento de se alimentar continua o mesmo; o que muda é o que está disponível para comer. A causa é a composição da dieta oferecida, não uma escolha comportamental do animal.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — variabilidade genética</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> assumir que qualquer diferença biológica entre indivíduos deve ter origem genética.
              <br>
              <strong>Onde quebra:</strong> o próprio enunciado contradiz essa ideia — sapos <em>capturados</em> (adultos selvagens, já geneticamente "programados" e antes tóxicos) também perdem a toxicidade em cativeiro. Se fosse genético, a captura sozinha não mudaria nada; a perda da toxina acontece porque a dieta muda, não o DNA.
            </p>
          </div>
        </div>

        <div class="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30">
          <strong class="text-emerald-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            As quatro alternativas erradas testam se você cai na armadilha de tratar a toxicidade como uma característica intrínseca do sapo (genética, comportamental, fisiológica). A informação decisiva está literalmente na primeira frase do enunciado: a toxina é <strong>obtida</strong> pela dieta, não produzida internamente.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-frog", titulo: "Sequestro de Toxina", text: "O animal acumula uma substância tóxica obtida da dieta, em vez de sintetizá-la no próprio corpo." },
      { icone: "fa-utensils", titulo: "Cadeia Trófica da Toxina", text: "Planta tóxica → formiga/cupim que a consome e acumula → sapo que come o inseto e concentra o alcaloide." },
      { icone: "fa-triangle-exclamation", titulo: "Aposematismo", text: "Cores vibrantes que sinalizam toxicidade a potenciais predadores." },
      { icone: "fa-dna", titulo: "Não é genético", text: "O genoma do sapo de cativeiro é o mesmo; falta apenas a fonte dietética do alcaloide." },
      { icone: "fa-leaf", titulo: "Exemplos análogos", text: "Borboletas-monarca sequestram cardenolídeos de Asclepias do mesmo jeito — padrão comum na natureza." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "A cadeia de três elos da toxina",
        legenda: "O alcaloide nasce na planta, é acumulado pelo inseto que a consome, e concentrado na pele do sapo que come esse inseto.",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <ellipse cx="80" cy="90" rx="50" ry="30" fill="#065f46" stroke="#34d399" stroke-width="2"/>
            <text x="80" y="85" fill="#d1fae5" font-size="9" font-weight="bold" text-anchor="middle">Planta</text>
            <text x="80" y="99" fill="#d1fae5" font-size="8" text-anchor="middle">(alcaloide)</text>
            <line x1="130" y1="90" x2="165" y2="90" stroke="#64748b" stroke-width="2" marker-end="url(#pq96)"/>

            <ellipse cx="230" cy="90" rx="50" ry="30" fill="#422006" stroke="#f59e0b" stroke-width="2"/>
            <text x="230" y="85" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">Formiga/cupim</text>
            <text x="230" y="99" fill="#fde68a" font-size="8" text-anchor="middle">acumula</text>
            <line x1="280" y1="90" x2="315" y2="90" stroke="#64748b" stroke-width="2" marker-end="url(#pq96)"/>

            <ellipse cx="390" cy="90" rx="55" ry="30" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
            <text x="390" y="85" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">Sapo-flecha</text>
            <text x="390" y="99" fill="#fca5a5" font-size="8" text-anchor="middle">concentra na pele</text>
            <defs>
              <marker id="pq96" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#64748b"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Selvagem x cativeiro: mesmo genoma, dieta diferente",
        legenda: "O sapo de cativeiro é geneticamente igual ao selvagem — a única diferença real é não ter acesso à presa que carrega o alcaloide.",
        svg: `
          <svg viewBox="0 0 460 170" class="w-full h-auto">
            <text x="115" y="20" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Na natureza</text>
            <circle cx="115" cy="80" r="40" fill="#065f46" stroke="#34d399" stroke-width="2"/>
            <text x="115" y="76" fill="#d1fae5" font-size="9" text-anchor="middle">Sapo</text>
            <text x="115" y="90" fill="#d1fae5" font-size="8" text-anchor="middle">TÓXICO</text>
            <text x="115" y="135" fill="#94a3b8" font-size="8" text-anchor="middle">dieta: formigas/cupins com alcaloide</text>

            <text x="345" y="20" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">Em cativeiro</text>
            <circle cx="345" cy="80" r="40" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
            <text x="345" y="76" fill="#e2e8f0" font-size="9" text-anchor="middle">Sapo</text>
            <text x="345" y="90" fill="#e2e8f0" font-size="8" text-anchor="middle">NÃO TÓXICO</text>
            <text x="345" y="135" fill="#94a3b8" font-size="8" text-anchor="middle">dieta: grilos/moscas de terrário</text>

            <text x="230" y="85" fill="#475569" font-size="16" text-anchor="middle">=</text>
            <text x="230" y="105" fill="#64748b" font-size="7" text-anchor="middle">mesmo genoma</text>
          </svg>`
      },
      {
        titulo: "O que muda e o que não muda",
        legenda: "Só um fator realmente varia entre os dois cenários — a origem do alimento. Genética, comportamento e ambiente físico permanecem comparáveis.",
        svg: `
          <svg viewBox="0 0 460 170" class="w-full h-auto">
            <text x="30" y="15" fill="#94a3b8" font-size="9">Fator</text>
            <text x="330" y="15" fill="#94a3b8" font-size="9">Explica a perda da toxina?</text>
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>

            <text x="30" y="42" fill="#e2e8f0" font-size="10">Genoma do sapo</text>
            <text x="400" y="42" fill="#f87171" font-size="12" text-anchor="middle">✕ (igual)</text>

            <text x="30" y="69" fill="#e2e8f0" font-size="10">Comportamento de caça</text>
            <text x="400" y="69" fill="#f87171" font-size="12" text-anchor="middle">✕ (igual)</text>

            <rect x="15" y="80" width="430" height="27" rx="5" fill="#065f46" opacity="0.35"/>
            <text x="30" y="98" fill="#6ee7b7" font-size="10" font-weight="bold">Origem da dieta (formiga/cupim c/ alcaloide)</text>
            <text x="400" y="98" fill="#34d399" font-size="12" text-anchor="middle" font-weight="bold">✓ muda</text>

            <text x="30" y="124" fill="#e2e8f0" font-size="10">Umidade do recinto</text>
            <text x="400" y="124" fill="#f87171" font-size="12" text-anchor="middle">✕ (irrelevante)</text>
          </svg>`
      },
      {
        titulo: "Mapa das cinco alternativas",
        legenda: "Só a alternativa B aponta a causa real: a ausência da dieta natural que fornece o alcaloide.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <text x="30" y="15" fill="#94a3b8" font-size="9">Alternativa</text>
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>

            <text x="30" y="42" fill="#e2e8f0" font-size="10">A — Diferença de umidade</text>
            <text x="400" y="42" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <rect x="15" y="53" width="430" height="27" rx="5" fill="#065f46" opacity="0.35"/>
            <text x="30" y="71" fill="#6ee7b7" font-size="10" font-weight="bold">B — Ausência de alimentação natural</text>
            <text x="400" y="71" fill="#34d399" font-size="12" text-anchor="middle" font-weight="bold">✓</text>

            <text x="30" y="97" fill="#e2e8f0" font-size="10">C — Adaptação ao novo ambiente</text>
            <text x="400" y="97" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="124" fill="#e2e8f0" font-size="10">D — Mudança de comportamento</text>
            <text x="400" y="124" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="151" fill="#e2e8f0" font-size="10">E — Variabilidade genética</text>
            <text x="400" y="151" fill="#f87171" font-size="12" text-anchor="middle">✕</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: monte a dieta do sapo e veja se ele fica tóxico",
      descricao: "Escolha o que o sapo come e observe se a cadeia da toxina se completa. Só um caminho leva a um sapo tóxico.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-2 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <p class="text-[11px] text-slate-400 mb-1">Dieta oferecida ao sapo:</p>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q96dieta" data-sim="dieta" value="natural" checked class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Formigas e cupins silvestres (que comeram plantas tóxicas)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q96dieta" data-sim="dieta" value="terrario" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Grilos e moscas-das-frutas de terrário</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q96dieta" data-sim="dieta" value="misto" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Metade silvestre, metade terrário</span>
            </label>
            <p class="text-[10px] text-slate-500 pt-1"><i class="fa-solid fa-flask"></i> O genoma do sapo é sempre o mesmo — só a dieta muda entre os testes.</p>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
              <div class="flex justify-between text-[11px] mb-1">
                <span class="text-emerald-300 font-bold">Alcaloide acumulado na pele</span>
                <span class="text-emerald-300 font-mono" data-out="nivel">100%</span>
              </div>
              <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                <div data-bar="nivel" class="h-full bg-emerald-500 transition-all" style="width:100%"></div>
              </div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var radios = raiz.querySelectorAll('[data-sim="dieta"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };

        function atualizar() {
          var dieta = 'natural';
          radios.forEach(function (r) { if (r.checked) dieta = r.value; });

          var nivel = dieta === 'natural' ? 100 : (dieta === 'misto' ? 50 : 0);

          saida('nivel').textContent = nivel + '%';
          barra('nivel').style.width = nivel + '%';

          var v = saida('veredito');
          if (nivel === 100) {
            barra('nivel').className = 'h-full bg-emerald-500 transition-all';
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            v.innerHTML = '<strong>Sapo tóxico.</strong> A dieta completa a cadeia planta → inseto → sapo, e o alcaloide se acumula na pele.';
          } else if (nivel === 0) {
            barra('nivel').className = 'h-full bg-rose-500 transition-all';
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200';
            v.innerHTML = '<strong>Sapo não tóxico.</strong> Sem a presa que carrega o alcaloide, não há nada para acumular — mesmo com o genoma intacto de um sapo tóxico.';
          } else {
            barra('nivel').className = 'h-full bg-amber-500 transition-all';
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            v.innerHTML = '<strong>Toxicidade parcial.</strong> Só a fração da dieta que veio da fonte silvestre contribui com alcaloide acumulado.';
          }
        }

        radios.forEach(function (r) { r.addEventListener('change', atualizar); });
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-emerald-300 block"><i class="fa-solid fa-frog"></i> Planta Tóxica → Formiga/Cupim → Sapo (toxina acumulada, não produzida)</span>
        <svg viewBox="0 0 460 100" class="w-full h-24 mx-auto">
          <rect x="20" y="30" width="110" height="40" rx="6" fill="#065f46" stroke="#34d399" stroke-width="2"/>
          <text x="75" y="54" fill="#d1fae5" font-size="9" font-weight="bold" text-anchor="middle">Planta tóxica</text>
          <text x="165" y="54" fill="#34d399" font-size="16" text-anchor="middle">→</text>
          <rect x="185" y="30" width="110" height="40" rx="6" fill="#422006" stroke="#f59e0b" stroke-width="2"/>
          <text x="240" y="54" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">Formiga/cupim</text>
          <text x="330" y="54" fill="#34d399" font-size="16" text-anchor="middle">→</text>
          <rect x="350" y="30" width="95" height="40" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
          <text x="397" y="54" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">Sapo-flecha</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q097",
    numero: "Questão 97",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "biologia",
    materia: "Biologia / Imunologia & Vacinas",
    materiaCor: "emerald",
    materiaIcone: "fa-syringe",
    titulo: "Vacinas de Tecnologia Tradicional: Como o Antígeno Induz a Produção de Anticorpos Neutralizantes",
    tags: ["Biologia", "Imunologia", "Vacinas", "Antígenos", "Anticorpos", "Resposta Imune"],
    alternativaCorreta: "D",
    userNotes: "",
    userCustomImage: null,

    enunciado: `A produção de vacinas exige uma sequência de procedimentos, além do cumprimento estrito de verificações de segurança. No esquema, estão demonstradas as etapas básicas realizadas para a fabricação de uma vacina utilizando a tecnologia tradicional e o efeito dela no organismo.
    <br><br>
    <strong>Esquema:</strong> 1) Isolamento dos vírus → 2) Inativação dos vírus pelo calor ou por ação química (a partir de cultura de células infectadas com vírus) → 3) Aplicação da vacina → 4) Efeito no organismo.
    <br><br>
    O antígeno utilizado na vacina causa um efeito protetor contra o vírus porque:`,

    alternativas: [
      { letra: "A", texto: "Mata o vírus pela ligação.", correta: false },
      { letra: "B", texto: "Aglutina o vírus por associação.", correta: false },
      { letra: "C", texto: "Contém imunoglobulinas de defesa.", correta: false },
      { letra: "D", texto: "Induz a produção de proteínas neutralizantes.", correta: true },
      { letra: "E", texto: "Mantém a quantidade de anticorpos preexistentes.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-emerald-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre a lógica das vacinas de tecnologia tradicional e a resposta imune adaptativa cobradas no Enem — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">1.</span> O que é um antígeno</h4>
          <p>
            Um <strong>antígeno</strong> é qualquer molécula ou partícula capaz de ser reconhecida pelo sistema imune como estranha, disparando uma resposta de defesa. Em uma vacina de vírus inativado, o antígeno é o próprio vírus — mas um vírus <strong>tratado para não conseguir mais infectar células</strong>. Ele ainda "parece" um vírus para o sistema imune (mantém as proteínas de superfície que o identificam), mas não tem mais capacidade de causar doença.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">2.</span> As etapas da vacina de tecnologia tradicional</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-emerald-300 block mb-1">1. Isolamento do vírus</strong>
              O vírus-alvo é obtido e cultivado em laboratório, geralmente infectando culturas de células, para se produzir grande quantidade dele.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-emerald-300 block mb-1">2. Inativação (calor ou ação química)</strong>
              O vírus é tratado para perder a capacidade de se replicar e infectar — mas sua estrutura de superfície (que o sistema imune reconhece) permanece preservada.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-emerald-300 block mb-1">3. Aplicação da vacina</strong>
              O antígeno inativado é injetado no organismo, que o reconhece como corpo estranho, sem risco de causar a doença.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-emerald-300 block mb-1">4. Efeito no organismo</strong>
              O sistema imune monta uma resposta específica contra aquele antígeno, incluindo a produção de anticorpos e células de memória.
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">3.</span> A resposta imune adaptativa, passo a passo</h4>
          <p>
            Quando o antígeno entra no corpo, células apresentadoras de antígeno o processam e o exibem para linfócitos T auxiliares, que por sua vez ativam <strong>linfócitos B</strong> específicos para aquele antígeno. Os linfócitos B ativados se diferenciam em plasmócitos, que passam a produzir e secretar <strong>anticorpos</strong> — proteínas também chamadas imunoglobulinas — moldadas para se ligar exatamente àquele antígeno.
          </p>
          <p class="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-3 text-xs">
            <strong class="text-emerald-300">O ponto central da questão:</strong> a vacina não entrega anticorpos prontos nem mata o vírus diretamente. Ela apresenta o antígeno para que o <strong>próprio organismo produza</strong> os anticorpos, que ficarão disponíveis (junto com células de memória) para agir rapidamente numa exposição futura ao vírus real.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">4.</span> Por que os anticorpos são chamados "neutralizantes"</h4>
          <p>
            Um anticorpo neutralizante se liga a regiões específicas da superfície do vírus (por exemplo, a proteína que ele usa para entrar em uma célula), bloqueando fisicamente essa capacidade de infecção. O vírus não é "morto" no sentido de destruído quimicamente pelo anticorpo — ele é <strong>impedido de funcionar</strong>, e depois eliminado por outros mecanismos do sistema imune (fagocitose, complemento, etc.).
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">5.</span> Antígeno x anticorpo: não confundir os dois papéis</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Antígeno (na vacina)</strong>
              É o estímulo — a molécula estranha que o organismo reconhece. Não tem função de defesa por si só.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Anticorpo (produzido pelo organismo)</strong>
              É a resposta — a proteína de defesa, produzida pelos plasmócitos após o reconhecimento do antígeno.
            </div>
          </div>
          <p>
            Essa distinção elimina de cara qualquer alternativa que atribua ao antígeno funções que só o anticorpo, produzido depois, é capaz de exercer.
          </p>
        </div>
      </div>
    `,

    /* ------------------------------------------------------------------
       2. RESOLUÇÃO COMENTADA
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-4 text-xs">

        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <h4 class="font-bold text-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-emerald-400"></i> Estratégia em 2 passos
          </h4>
          <p class="text-slate-300 leading-relaxed">
            <strong>Passo 1 — Separe quem é o antígeno e quem é o anticorpo.</strong> O antígeno é o vírus inativado da vacina; o anticorpo é a proteína de defesa que o organismo produz em resposta.
            <br><br>
            <strong>Passo 2 — Pergunte o que o antígeno FAZ, e não o que ele CONTÉM.</strong> Ele não mata, não aglutina, não carrega imunoglobulinas prontas — ele apenas dispara, no organismo, a produção das proteínas de defesa.
          </p>
        </div>

        <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/40 space-y-2">
          <h4 class="font-bold text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa D — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            "Induz a produção de proteínas neutralizantes." O antígeno inativado é reconhecido pelo sistema imune, que ativa linfócitos B e os diferencia em plasmócitos produtores de anticorpos específicos. Esses anticorpos se ligam ao vírus real numa exposição futura e neutralizam sua capacidade de infectar — é exatamente o efeito protetor da vacina.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa A — mata o vírus pela ligação</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> imaginar o antígeno como um agente ativo que ataca e destrói o vírus diretamente, como se fosse um remédio antiviral.
              <br>
              <strong>Onde quebra:</strong> o antígeno não age contra o vírus — ele é o estímulo que faz o organismo produzir as proteínas de defesa. Quem eventualmente neutraliza o vírus real é o anticorpo, produzido depois, não o antígeno em si.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — aglutina o vírus por associação</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lembrar que anticorpos podem causar aglutinação (agrupar partículas virais) e atribuir esse efeito ao antígeno da vacina.
              <br>
              <strong>Onde quebra:</strong> aglutinação é uma propriedade de anticorpos ligando múltiplos vírus entre si — de novo, uma função do anticorpo produzido, não do antígeno injetado. Além disso, não é o mecanismo protetor central descrito no esquema.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa C — contém imunoglobulinas de defesa</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> confundir o conteúdo da vacina (vírus inativado) com o produto final da resposta imune (anticorpos/imunoglobulinas).
              <br>
              <strong>Onde quebra:</strong> a vacina tradicional não contém anticorpos prontos — ela contém o antígeno que vai <em>estimular</em> a produção deles pelo próprio corpo. Confundir estímulo com resposta é o erro central desta alternativa.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — mantém a quantidade de anticorpos preexistentes</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> supor que a pessoa já tinha anticorpos contra aquele vírus e que a vacina só "conserva" esse nível.
              <br>
              <strong>Onde quebra:</strong> antes da vacinação, geralmente não há anticorpos específicos suficientes contra aquele patógeno (é justamente por isso que a pessoa é vulnerável). O efeito da vacina é <strong>induzir a produção de novos</strong> anticorpos específicos, não manter algo que já existia.
            </p>
          </div>
        </div>

        <div class="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30">
          <strong class="text-emerald-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            Quatro das cinco alternativas atribuem ao <strong>antígeno</strong> capacidades que, na realidade, pertencem ao <strong>anticorpo</strong> produzido posteriormente pelo organismo (matar, aglutinar, conter imunoglobulinas, manter defesa). A vacina não age — ela <em>induz</em> o organismo a agir.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-syringe", titulo: "Vacina de vírus inativado", text: "Vírus tratado por calor ou ação química para perder infectividade, preservando a estrutura reconhecida pelo sistema imune." },
      { icone: "fa-shapes", titulo: "Antígeno", text: "Molécula ou partícula reconhecida como estranha, que dispara a resposta imune — não age diretamente contra o patógeno." },
      { icone: "fa-y", titulo: "Anticorpo (Imunoglobulina)", text: "Proteína produzida por plasmócitos, específica para um antígeno, capaz de neutralizá-lo em exposições futuras." },
      { icone: "fa-brain", titulo: "Memória Imunológica", text: "Células B e T de memória permanecem no organismo, permitindo resposta mais rápida numa infecção real." },
      { icone: "fa-arrows-turn-right", titulo: "Estímulo x Resposta", text: "O antígeno é o estímulo; a produção de anticorpos pelo organismo é a resposta protetora." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Etapas da vacina de tecnologia tradicional",
        legenda: "Isolamento → inativação → aplicação → resposta imune. O antígeno inativado não infecta, mas ainda é reconhecido pelo organismo.",
        svg: `
          <svg viewBox="0 0 460 110" class="w-full h-auto">
            <rect x="10" y="35" width="95" height="40" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
            <text x="57" y="58" fill="#e2e8f0" font-size="8" font-weight="bold" text-anchor="middle">1. Isolamento</text>
            <line x1="105" y1="55" x2="122" y2="55" stroke="#64748b" stroke-width="2" marker-end="url(#pq97)"/>

            <rect x="126" y="35" width="95" height="40" rx="6" fill="#422006" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="173" y="52" fill="#fde68a" font-size="8" font-weight="bold" text-anchor="middle">2. Inativação</text>
            <text x="173" y="64" fill="#fde68a" font-size="7" text-anchor="middle">(calor/química)</text>
            <line x1="221" y1="55" x2="238" y2="55" stroke="#64748b" stroke-width="2" marker-end="url(#pq97)"/>

            <rect x="242" y="35" width="95" height="40" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="289" y="58" fill="#bae6fd" font-size="8" font-weight="bold" text-anchor="middle">3. Aplicação</text>
            <line x1="337" y1="55" x2="354" y2="55" stroke="#64748b" stroke-width="2" marker-end="url(#pq97)"/>

            <rect x="358" y="35" width="95" height="40" rx="6" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
            <text x="405" y="52" fill="#d1fae5" font-size="8" font-weight="bold" text-anchor="middle">4. Produção de</text>
            <text x="405" y="64" fill="#d1fae5" font-size="8" font-weight="bold" text-anchor="middle">anticorpos</text>
            <defs>
              <marker id="pq97" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Antígeno ativa linfócito B, que vira fábrica de anticorpos",
        legenda: "O antígeno não age sozinho: ele é reconhecido, e a célula B ativada se transforma em plasmócito, produzindo os anticorpos que farão a defesa.",
        svg: `
          <svg viewBox="0 0 460 160" class="w-full h-auto">
            <circle cx="70" cy="80" r="30" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
            <text x="70" y="75" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">Antígeno</text>
            <text x="70" y="88" fill="#fca5a5" font-size="7" text-anchor="middle">(vacina)</text>
            <line x1="100" y1="80" x2="140" y2="80" stroke="#64748b" stroke-width="2" marker-end="url(#pq97b)"/>

            <circle cx="200" cy="80" r="35" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
            <text x="200" y="75" fill="#e2e8f0" font-size="8" font-weight="bold" text-anchor="middle">Linfócito B</text>
            <text x="200" y="88" fill="#e2e8f0" font-size="7" text-anchor="middle">reconhece</text>
            <line x1="235" y1="80" x2="275" y2="80" stroke="#64748b" stroke-width="2" marker-end="url(#pq97b)"/>

            <circle cx="345" cy="80" r="35" fill="#065f46" stroke="#34d399" stroke-width="2"/>
            <text x="345" y="75" fill="#d1fae5" font-size="8" font-weight="bold" text-anchor="middle">Plasmócito</text>
            <text x="345" y="88" fill="#d1fae5" font-size="7" text-anchor="middle">produz anticorpos</text>
            <text x="345" y="130" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">↓ secreta</text>
            <text x="345" y="145" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">Y Y Y (anticorpos)</text>
            <defs>
              <marker id="pq97b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Anticorpo neutralizando o vírus real",
        legenda: "Numa exposição futura, o anticorpo produzido se liga à proteína de superfície do vírus e bloqueia sua entrada na célula — isso é neutralização.",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <circle cx="140" cy="75" r="35" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
            <text x="140" y="70" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">Vírus real</text>
            <path d="M 165 60 L 178 50" stroke="#f87171" stroke-width="2"/>
            <path d="M 168 75 L 182 75" stroke="#f87171" stroke-width="2"/>
            <path d="M 165 90 L 178 100" stroke="#f87171" stroke-width="2"/>

            <path d="M 260 55 L 240 70 L 260 85" fill="none" stroke="#34d399" stroke-width="3"/>
            <text x="260" y="45" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">anticorpo</text>
            <text x="260" y="105" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">bloqueia</text>

            <rect x="330" y="45" width="100" height="60" rx="6" fill="#1e293b" stroke="#475569" stroke-width="2"/>
            <text x="380" y="80" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Célula</text>
            <text x="380" y="118" fill="#94a3b8" font-size="8" text-anchor="middle">infecção impedida</text>
          </svg>`
      },
      {
        titulo: "Mapa das cinco alternativas",
        legenda: "Quatro alternativas atribuem ao antígeno funções que, na verdade, pertencem ao anticorpo produzido depois pelo organismo.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <text x="30" y="15" fill="#94a3b8" font-size="9">Alternativa</text>
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>

            <text x="30" y="42" fill="#e2e8f0" font-size="10">A — Mata o vírus por ligação</text>
            <text x="400" y="42" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="69" fill="#e2e8f0" font-size="10">B — Aglutina o vírus</text>
            <text x="400" y="69" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="96" fill="#e2e8f0" font-size="10">C — Contém imunoglobulinas</text>
            <text x="400" y="96" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <rect x="15" y="107" width="430" height="27" rx="5" fill="#065f46" opacity="0.35"/>
            <text x="30" y="125" fill="#6ee7b7" font-size="10" font-weight="bold">D — Induz produção de proteínas neutralizantes</text>
            <text x="400" y="125" fill="#34d399" font-size="12" text-anchor="middle" font-weight="bold">✓</text>

            <text x="30" y="151" fill="#e2e8f0" font-size="10">E — Mantém anticorpos preexistentes</text>
            <text x="400" y="151" fill="#f87171" font-size="12" text-anchor="middle">✕</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: simule a resposta imune após a vacinação",
      descricao: "Avance o tempo depois da aplicação da vacina e acompanhe o antígeno sendo reconhecido e a produção de anticorpos crescendo.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Dias após a aplicação da vacina</span><span class="text-emerald-300 font-bold" data-out="dias">7 dias</span>
              </label>
              <input type="range" data-sim="dias" min="0" max="21" value="7" step="1" class="w-full accent-emerald-500">
              <p class="text-[10px] text-slate-500 mt-1"><i class="fa-solid fa-flask"></i> O antígeno não muda — o que evolui com o tempo é a resposta do organismo.</p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-rose-300 font-bold">Antígeno presente (vírus inativado)</span>
                  <span class="text-rose-300 font-mono" data-out="antigeno">80%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="antigeno" class="h-full bg-rose-500 transition-all" style="width:80%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-emerald-300 font-bold">Anticorpos neutralizantes produzidos</span>
                  <span class="text-emerald-300 font-mono" data-out="anticorpo">30%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="anticorpo" class="h-full bg-emerald-500 transition-all" style="width:30%"></div>
                </div>
              </div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var campo = raiz.querySelector('[data-sim="dias"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };

        function atualizar() {
          var d = parseFloat(campo.value);
          var antigeno = Math.max(0, 100 - d * 6);
          var anticorpo = Math.min(100, d * 5.5);

          saida('dias').textContent = d + (d === 1 ? ' dia' : ' dias');
          saida('antigeno').textContent = antigeno.toFixed(0) + '%';
          saida('anticorpo').textContent = anticorpo.toFixed(0) + '%';
          barra('antigeno').style.width = antigeno + '%';
          barra('anticorpo').style.width = anticorpo + '%';

          var v = saida('veredito');
          if (d === 0) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-slate-700 bg-slate-950 text-slate-300';
            v.innerHTML = 'Vacina recém-aplicada: o antígeno acaba de ser reconhecido, a produção de anticorpos ainda não começou.';
          } else if (anticorpo < 60) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            v.innerHTML = '<strong>Resposta em construção.</strong> Linfócitos B ativados estão se diferenciando em plasmócitos — os anticorpos ainda estão sendo produzidos.';
          } else {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            v.innerHTML = '<strong>Proteção estabelecida.</strong> O antígeno já foi eliminado, mas os anticorpos neutralizantes — e a memória imunológica — permanecem, prontos para uma exposição real ao vírus.';
          }
        }

        campo.addEventListener('input', atualizar);
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-emerald-300 block"><i class="fa-solid fa-syringe"></i> Antígeno (estímulo) → Organismo Produz Anticorpos (proteção)</span>
        <svg viewBox="0 0 460 100" class="w-full h-24 mx-auto">
          <rect x="30" y="30" width="150" height="40" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
          <text x="105" y="54" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">Antígeno (vacina)</text>
          <line x1="180" y1="50" x2="220" y2="50" stroke="#34d399" stroke-width="2" marker-end="url(#pq97c)"/>
          <text x="200" y="42" fill="#6ee7b7" font-size="8" text-anchor="middle">induz</text>
          <rect x="225" y="30" width="205" height="40" rx="6" fill="#065f46" stroke="#34d399" stroke-width="2"/>
          <text x="327" y="54" fill="#d1fae5" font-size="10" font-weight="bold" text-anchor="middle">Produção de anticorpos neutralizantes</text>
          <defs>
            <marker id="pq97c" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="#34d399"/>
            </marker>
          </defs>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q098",
    numero: "Questão 98",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "biologia",
    materia: "Biologia / Ecologia & Espécies Invasoras",
    materiaCor: "emerald",
    materiaIcone: "fa-seedling",
    titulo: "Capim-Gordura no Cerrado: Como uma Espécie Invasora Reduz a Biodiversidade Nativa",
    tags: ["Biologia", "Ecologia", "Espécies Invasoras", "Biodiversidade", "Cerrado", "Competição Interespecífica"],
    alternativaCorreta: "D",
    userNotes: "",
    userCustomImage: null,

    enunciado: `O bioma Cerrado é caracterizado por apresentar ampla e natural diversidade de espécies vegetais. Nos últimos tempos, o homem vem modificando esse cenário pela inserção de plantas exóticas nesse ambiente. Exemplo disso é o cultivo do capim-gordura, nativo do continente africano e utilizado nesse tipo de ecossistema como forma de pastagem. É importante ressaltar que essa espécie vegetal é capaz de se espalhar por grandes áreas, devido à sua agressividade e poder competitivo.
    <br><br>
    CARLOS JR., L. A.; BARBOSA, N. P. U.; FERNANDES, G. W. O capim-gordura e as invasões no Cerrado brasileiro. <strong>Jornal do Biólogo</strong>, mar-jun. 2008 (adaptado).
    <br><br>
    Em longo prazo, essa ação do homem pode gerar qual consequência?`,

    alternativas: [
      { letra: "A", texto: "Diversificar nichos ecológicos.", correta: false },
      { letra: "B", texto: "Assorear as nascentes do bioma.", correta: false },
      { letra: "C", texto: "Dificultar a infiltração de água na terra.", correta: false },
      { letra: "D", texto: "Diminuir as espécies nativas do bioma.", correta: true },
      { letra: "E", texto: "Contribuir com a redução das queimadas.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-emerald-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre o mecanismo das invasões biológicas cobrado no Enem — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">1.</span> O que é uma espécie exótica invasora</h4>
          <p>
            Uma espécie é <strong>exótica</strong> quando introduzida, por ação humana, fora de sua área de ocorrência natural. Ela se torna <strong>invasora</strong> quando, além de se estabelecer, consegue se espalhar de forma agressiva pelo novo ambiente, competindo com sucesso contra as espécies nativas — que não coevoluíram com ela e não têm defesas específicas contra sua presença.
          </p>
          <p>
            O capim-gordura (<em>Melinis minutiflora</em>) é um exemplo clássico: nativo da África, foi trazido ao Brasil deliberadamente como forrageira (planta de pastagem) para o gado, e depois escapou do controle, se espalhando pelo Cerrado nativo.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">2.</span> Por que essa gramínea é tão "agressiva e competitiva"</h4>
          <p>
            O próprio enunciado usa essas palavras — agressividade e poder competitivo — que resumem um conjunto de características biológicas típicas de plantas invasoras de sucesso:
          </p>
          <ul class="list-disc list-inside space-y-1 text-xs text-slate-300">
            <li>Crescimento rápido e produção abundante de sementes, colonizando áreas abertas ou perturbadas rapidamente.</li>
            <li>Tolerância a solos pobres em nutrientes — exatamente o tipo de solo típico do Cerrado.</li>
            <li>Formação de touceiras densas que sombreiam e sufocam plântulas de espécies nativas, monopolizando luz, água e nutrientes do solo.</li>
          </ul>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">3.</span> Exclusão competitiva: o mecanismo central</h4>
          <p>
            Quando duas espécies competem pelos mesmos recursos limitados (luz, água, nutrientes, espaço) em um mesmo nicho, a espécie mais eficiente tende a suprimir a outra — esse é o princípio da <strong>exclusão competitiva</strong>. Uma planta invasora com crescimento mais rápido e maior capacidade de dispersão consegue ocupar o espaço antes das nativas, reduzindo drasticamente sua capacidade de se reproduzir e se manter na população.
          </p>
          <p class="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-3 text-xs">
            <strong class="text-emerald-300">Consequência em longo prazo:</strong> áreas antes ricas em dezenas de espécies vegetais nativas podem se tornar, com o tempo, dominadas quase exclusivamente pela gramínea invasora — um fenômeno chamado <strong>monodominância</strong>, com perda direta de biodiversidade.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">4.</span> Um efeito colateral importante: o capim-gordura e o fogo</h4>
          <p>
            Vale destacar (porque aparece como pegadinha em uma das alternativas): o capim-gordura é uma planta altamente inflamável e produz grande quantidade de biomassa seca. Sua presença no Cerrado <strong>aumenta</strong> a intensidade e a frequência das queimadas — o oposto de "reduzir" incêndios. Esse ciclo de fogo mais intenso ainda prejudica mais as espécies nativas (que toleram o regime natural de fogo do Cerrado, mas não esse regime intensificado), reforçando a perda de biodiversidade.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">5.</span> Por que as outras alternativas não descrevem o efeito principal</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Diversificar nichos</strong>
              O oposto do que ocorre: a invasão tende a homogeneizar a vegetação, não diversificá-la.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Assorear nascentes</strong>
              Assoreamento está ligado a erosão e transporte de sedimentos para corpos d'água — não é o mecanismo central de uma invasão por gramínea competitiva.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Dificultar infiltração de água</strong>
              Não é a consequência ecológica destacada pelo texto, que fala especificamente de competição entre espécies vegetais, não de compactação ou impermeabilização do solo.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Reduzir queimadas</strong>
              Contraria o que se sabe sobre essa espécie: ela aumenta, não reduz, o risco e a intensidade de incêndios no Cerrado.
            </div>
          </div>
        </div>
      </div>
    `,

    /* ------------------------------------------------------------------
       2. RESOLUÇÃO COMENTADA
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-4 text-xs">

        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <h4 class="font-bold text-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-emerald-400"></i> Estratégia em 2 passos
          </h4>
          <p class="text-slate-300 leading-relaxed">
            <strong>Passo 1 — Extraia as palavras-chave do enunciado.</strong> "Agressividade" e "poder competitivo" apontam diretamente para exclusão competitiva entre espécies vegetais.
            <br><br>
            <strong>Passo 2 — Pergunte quem perde nessa competição.</strong> Se a invasora se espalha "por grandes áreas", ela ocupa espaço que era das espécies nativas — a consequência lógica de longo prazo é a redução delas.
          </p>
        </div>

        <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/40 space-y-2">
          <h4 class="font-bold text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa D — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            "Diminuir as espécies nativas do bioma." O capim-gordura compete com sucesso por luz, água, nutrientes e espaço, suprimindo a regeneração e a permanência das espécies vegetais nativas do Cerrado — exatamente o que "agressividade e poder competitivo" descrevem em termos ecológicos.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa A — diversificar nichos ecológicos</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> associar "nova espécie chegando" com "mais diversidade".
              <br>
              <strong>Onde quebra:</strong> é o inverso. Espécies invasoras agressivas tendem a homogeneizar o ambiente, formando extensas áreas de monocultura natural (só a espécie invasora), reduzindo a diversidade em vez de aumentá-la.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — assorear as nascentes</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lembrar de impactos ambientais genéricos ligados a alteração de vegetação, sem verificar se é o que o texto descreve.
              <br>
              <strong>Onde quebra:</strong> assoreamento envolve erosão e sedimentação em corpos d'água — um processo distinto, não citado nem implícito na descrição de uma gramínea competitiva se espalhando por área terrestre.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa C — dificultar a infiltração de água</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> imaginar que uma gramínea densa "sela" o solo como uma superfície impermeável.
              <br>
              <strong>Onde quebra:</strong> o texto foca exclusivamente na competição entre plantas por recursos, não em propriedades físicas do solo como infiltração — essa alternativa muda de assunto.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — reduzir as queimadas</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> supor que mais vegetação (mesmo invasora) significa menos risco de fogo.
              <br>
              <strong>Onde quebra:</strong> é o contrário do que a ecologia registra sobre essa espécie — o capim-gordura é altamente inflamável e <strong>aumenta</strong> a intensidade das queimadas no Cerrado, agravando ainda mais a perda de espécies nativas.
            </p>
          </div>
        </div>

        <div class="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30">
          <strong class="text-emerald-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            As alternativas erradas trocam o mecanismo central (competição entre plantas por recursos) por processos ambientais parecidos, mas diferentes — erosão, infiltração de água, ou até invertem o efeito real sobre o fogo. Em toda questão de espécie invasora, a consequência de longo prazo mais cobrada no Enem é a <strong>perda de biodiversidade nativa por exclusão competitiva</strong>.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-seedling", titulo: "Espécie Exótica Invasora", text: "Espécie introduzida fora de sua área natural que se espalha agressivamente, competindo com as nativas." },
      { icone: "fa-people-arrows", titulo: "Exclusão Competitiva", text: "Quando duas espécies disputam o mesmo recurso limitado, a mais eficiente tende a suprimir a outra." },
      { icone: "fa-layer-group", titulo: "Monodominância", text: "Área antes diversa passa a ser dominada quase exclusivamente pela espécie invasora." },
      { icone: "fa-fire", titulo: "Capim-gordura e fogo", text: "Planta altamente inflamável que aumenta a intensidade das queimadas no Cerrado — não reduz." },
      { icone: "fa-globe", titulo: "Introdução Antrópica", text: "O capim-gordura foi trazido da África deliberadamente como forrageira para pastagem." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "De pastagem controlada a invasão descontrolada",
        legenda: "O capim-gordura foi introduzido para uso agrícola, mas escapou do cultivo e se espalhou pelo Cerrado nativo por sua alta capacidade competitiva.",
        svg: `
          <svg viewBox="0 0 460 130" class="w-full h-auto">
            <rect x="15" y="35" width="120" height="60" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
            <text x="75" y="60" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">Introduzido</text>
            <text x="75" y="75" fill="#e2e8f0" font-size="8" text-anchor="middle">como pastagem</text>
            <line x1="135" y1="65" x2="165" y2="65" stroke="#64748b" stroke-width="2" marker-end="url(#pq98)"/>

            <rect x="170" y="35" width="120" height="60" rx="6" fill="#422006" stroke="#f59e0b" stroke-width="2"/>
            <text x="230" y="60" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">Escapa do</text>
            <text x="230" y="75" fill="#fde68a" font-size="8" text-anchor="middle">cultivo</text>
            <line x1="290" y1="65" x2="320" y2="65" stroke="#64748b" stroke-width="2" marker-end="url(#pq98)"/>

            <rect x="325" y="35" width="120" height="60" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
            <text x="385" y="60" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">Invade o</text>
            <text x="385" y="75" fill="#fca5a5" font-size="8" text-anchor="middle">Cerrado nativo</text>
            <defs>
              <marker id="pq98" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Antes e depois da invasão",
        legenda: "Uma área originalmente diversa, com muitas espécies nativas, pode se tornar dominada quase exclusivamente pelo capim-gordura ao longo do tempo.",
        svg: `
          <svg viewBox="0 0 460 170" class="w-full h-auto">
            <text x="115" y="20" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Antes: Cerrado diverso</text>
            <rect x="30" y="35" width="170" height="110" fill="#0f172a" stroke="#475569" stroke-width="2"/>
            <circle cx="60" cy="70" r="10" fill="#065f46"/>
            <circle cx="100" cy="90" r="14" fill="#047857"/>
            <circle cx="145" cy="65" r="9" fill="#0d9488"/>
            <circle cx="175" cy="110" r="11" fill="#059669"/>
            <circle cx="70" cy="120" r="8" fill="#0891b2"/>
            <circle cx="130" cy="120" r="10" fill="#0d9488"/>

            <text x="345" y="20" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">Depois: monodominância</text>
            <rect x="260" y="35" width="170" height="110" fill="#1a2e1a" stroke="#475569" stroke-width="2"/>
            <path d="M 270 145 Q 275 90 270 45 M 280 145 Q 285 95 280 45 M 292 145 Q 297 90 292 45 M 305 145 Q 310 95 305 45 M 318 145 Q 323 90 318 45 M 330 145 Q 335 95 330 45 M 343 145 Q 348 90 343 45 M 356 145 Q 361 95 356 45 M 369 145 Q 374 90 369 45 M 382 145 Q 387 95 382 45 M 395 145 Q 400 90 395 45 M 408 145 Q 413 95 408 45 M 420 145 Q 425 90 420 45" stroke="#84cc16" stroke-width="2" fill="none"/>
            <text x="345" y="160" fill="#a3e635" font-size="8" text-anchor="middle">só capim-gordura</text>
          </svg>`
      },
      {
        titulo: "Competição por recursos limitados",
        legenda: "Luz, água, nutrientes e espaço são finitos. A gramínea invasora, mais eficiente, ocupa o recurso antes das plântulas nativas conseguirem se estabelecer.",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <rect x="40" y="20" width="380" height="30" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
            <text x="230" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">Recursos disponíveis: luz, água, nutrientes, espaço</text>
            <line x1="230" y1="50" x2="150" y2="85" stroke="#84cc16" stroke-width="2" marker-end="url(#pq98b)"/>
            <line x1="230" y1="50" x2="310" y2="85" stroke="#64748b" stroke-width="2" stroke-dasharray="3 3" marker-end="url(#pq98b)"/>
            <ellipse cx="130" cy="105" rx="55" ry="30" fill="#365314" stroke="#84cc16" stroke-width="2"/>
            <text x="130" y="102" fill="#d9f99d" font-size="8" font-weight="bold" text-anchor="middle">Capim-gordura</text>
            <text x="130" y="115" fill="#d9f99d" font-size="7" text-anchor="middle">absorve rápido, cresce mais</text>
            <ellipse cx="330" cy="105" rx="55" ry="30" fill="#1e293b" stroke="#64748b" stroke-width="2" opacity="0.6"/>
            <text x="330" y="102" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Espécie nativa</text>
            <text x="330" y="115" fill="#94a3b8" font-size="7" text-anchor="middle">sombreada, suprimida</text>
            <defs>
              <marker id="pq98b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Mapa das cinco alternativas",
        legenda: "Só a alternativa D descreve o mecanismo ecológico central: a redução das espécies nativas por competição.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <text x="30" y="15" fill="#94a3b8" font-size="9">Alternativa</text>
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>

            <text x="30" y="42" fill="#e2e8f0" font-size="10">A — Diversificar nichos</text>
            <text x="400" y="42" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="69" fill="#e2e8f0" font-size="10">B — Assorear nascentes</text>
            <text x="400" y="69" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="96" fill="#e2e8f0" font-size="10">C — Dificultar infiltração</text>
            <text x="400" y="96" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <rect x="15" y="107" width="430" height="27" rx="5" fill="#065f46" opacity="0.35"/>
            <text x="30" y="125" fill="#6ee7b7" font-size="10" font-weight="bold">D — Diminuir espécies nativas</text>
            <text x="400" y="125" fill="#34d399" font-size="12" text-anchor="middle" font-weight="bold">✓</text>

            <text x="30" y="151" fill="#e2e8f0" font-size="10">E — Reduzir queimadas</text>
            <text x="400" y="151" fill="#f87171" font-size="12" text-anchor="middle">✕</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: avance o tempo da invasão no Cerrado",
      descricao: "Controle o quanto o capim-gordura já se espalhou pela área e observe o efeito sobre a diversidade de espécies nativas e o risco de queimadas.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Cobertura de capim-gordura na área</span><span class="text-emerald-300 font-bold" data-out="cobertura">30%</span>
              </label>
              <input type="range" data-sim="cobertura" min="0" max="100" value="30" step="5" class="w-full accent-emerald-500">
              <p class="text-[10px] text-slate-500 mt-1"><i class="fa-solid fa-flask"></i> Este é o fator que avança com o tempo — mexa e observe as duas barras.</p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-emerald-300 font-bold">Espécies nativas remanescentes</span>
                  <span class="text-emerald-300 font-mono" data-out="nativas">70%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="nativas" class="h-full bg-emerald-500 transition-all" style="width:70%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-rose-300 font-bold">Risco de queimada intensa</span>
                  <span class="text-rose-300 font-mono" data-out="fogo">30%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="fogo" class="h-full bg-rose-500 transition-all" style="width:30%"></div>
                </div>
              </div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var campo = raiz.querySelector('[data-sim="cobertura"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };

        function atualizar() {
          var cob = parseFloat(campo.value);
          var nativas = Math.max(0, 100 - cob);
          var fogo = cob;

          saida('cobertura').textContent = cob.toFixed(0) + '%';
          saida('nativas').textContent = nativas.toFixed(0) + '%';
          saida('fogo').textContent = fogo.toFixed(0) + '%';
          barra('nativas').style.width = nativas + '%';
          barra('fogo').style.width = fogo + '%';

          var v = saida('veredito');
          if (cob < 30) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            v.innerHTML = '<strong>Invasão inicial.</strong> A maior parte da diversidade nativa ainda está preservada.';
          } else if (cob < 70) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            v.innerHTML = '<strong>Exclusão competitiva em curso.</strong> O capim-gordura já domina parte considerável da área, suprimindo espécies nativas e elevando o risco de queimadas mais intensas.';
          } else {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200';
            v.innerHTML = '<strong>Monodominância.</strong> A área está quase tomada pela invasora — pouquíssimas espécies nativas restam, e o risco de queimadas intensas é alto.';
          }
        }

        campo.addEventListener('input', atualizar);
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-emerald-300 block"><i class="fa-solid fa-seedling"></i> Espécie Invasora Agressiva → Exclusão Competitiva → Menos Espécies Nativas</span>
        <svg viewBox="0 0 460 100" class="w-full h-24 mx-auto">
          <rect x="20" y="30" width="140" height="40" rx="6" fill="#365314" stroke="#84cc16" stroke-width="2"/>
          <text x="90" y="54" fill="#d9f99d" font-size="9" font-weight="bold" text-anchor="middle">Capim-gordura</text>
          <text x="220" y="54" fill="#34d399" font-size="16" text-anchor="middle">→</text>
          <rect x="245" y="30" width="90" height="40" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
          <text x="290" y="54" fill="#e2e8f0" font-size="8" font-weight="bold" text-anchor="middle">Competição</text>
          <text x="395" y="54" fill="#34d399" font-size="16" text-anchor="middle">→</text>
          <text x="425" y="54" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">↓ nativas</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q099",
    numero: "Questão 99",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "biologia",
    materia: "Biologia / Ecologia & Evolução Convergente",
    materiaCor: "emerald",
    materiaIcone: "fa-map-location-dot",
    titulo: "Convergência Evolutiva e Biomas Análogos: Por que Procurar o Monstro-de-Gila Brasileiro na Caatinga",
    tags: ["Biologia", "Ecologia", "Evolução Convergente", "Biomas Brasileiros", "Adaptação", "Biogeografia"],
    alternativaCorreta: "C",
    userNotes: "",
    userCustomImage: null,

    enunciado: `O monstro de gila, um lagarto encontrado em um deserto dos Estados Unidos, apresenta adaptações à falta de alimento nesse ambiente. Esse lagarto possui um hormônio que controla os níveis de açúcar em seu próprio sangue. Foi observado que esse hormônio também controla os níveis de açúcar no sangue de pessoas diabéticas.
    <br><br>
    RUSSELL, C. Ozempic e outros remédios inspirados em veneno de animais. Disponível em: www.bbc.com. Acesso em: 6 dez. 2024 (adaptado).
    <br><br>
    Considerando que animais de um mesmo grupo taxonômico podem apresentar características adaptativas semelhantes em ambientes similares, onde seria mais provável encontrar lagartos com essas características adaptativas no território brasileiro?`,

    alternativas: [
      { letra: "A", texto: "Cerrado.", correta: false },
      { letra: "B", texto: "Pampas.", correta: false },
      { letra: "C", texto: "Caatinga.", correta: true },
      { letra: "D", texto: "Restinga.", correta: false },
      { letra: "E", texto: "Pantanal.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-emerald-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre convergência evolutiva e a comparação entre biomas brasileiros cobrada no Enem — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">1.</span> Quem é o monstro-de-gila e por que ele importa para a medicina</h4>
          <p>
            O monstro-de-gila (<em>Heloderma suspectum</em>) é um lagarto peçonhento de desertos da América do Norte. Em ambientes desérticos, o alimento é escasso e imprevisível — o animal pode passar longos períodos sem se alimentar. Uma das adaptações fisiológicas a essa escassez envolve um hormônio (a exendina-4, presente em sua saliva/veneno) que regula os níveis de açúcar no sangue de forma muito eficiente. Cientistas usaram esse hormônio como base para desenvolver medicamentos análogos ao GLP-1 (como o Ozempic), usados no tratamento de diabetes em humanos.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">2.</span> Convergência evolutiva: mesma pressão, adaptação parecida</h4>
          <p>
            A questão não pergunta sobre a espécie exata do monstro-de-gila (que não ocorre no Brasil), mas usa um princípio ecológico-evolutivo importante: quando animais de um mesmo grupo taxonômico amplo (aqui, "lagartos") enfrentam <strong>pressões ambientais semelhantes</strong> — como escassez extrema e imprevisível de alimento — em lugares diferentes do planeta, é comum que evoluam <strong>soluções adaptativas parecidas</strong>, mesmo sem parentesco próximo. Isso é <strong>convergência evolutiva</strong>.
          </p>
          <p class="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-3 text-xs">
            <strong class="text-emerald-300">Tradução da pergunta:</strong> "em qual bioma brasileiro o ambiente se parece mais com um deserto, a ponto de favorecer, em lagartos locais, adaptações metabólicas parecidas com as do monstro-de-gila?"
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">3.</span> O que caracteriza um ambiente "tipo deserto"</h4>
          <p>
            O elemento central do habitat do monstro-de-gila não é a temperatura em si, mas a <strong>escassez e imprevisibilidade de água e alimento</strong>. Um bioma brasileiro funcionalmente parecido precisa ter chuvas escassas e irregulares, vegetação adaptada à seca (xerófita) e produtividade biológica baixa boa parte do ano.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">4.</span> Comparando os biomas brasileiros citados</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-3 bg-emerald-950/30 rounded-lg border border-emerald-500/30">
              <strong class="text-emerald-300 block mb-1">Caatinga</strong>
              Único bioma exclusivamente brasileiro. Clima semiárido, chuvas escassas e muito irregulares, longos períodos de seca, vegetação xerófita (cactos, arbustos espinhosos, plantas caducifólias). É o bioma brasileiro mais próximo, em termos funcionais, de um deserto.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Cerrado</strong>
              Savana tropical com estação seca bem definida, mas também estação chuvosa regular e razoável disponibilidade de água no subsolo (raízes profundas). Seco, mas não no mesmo nível de escassez extrema.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Pampas</strong>
              Campos do Sul do Brasil, clima subtropical, chuvas bem distribuídas ao longo do ano, solos férteis — ambiente úmido, não escasso.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Restinga</strong>
              Ecossistema costeiro sobre solo arenoso, mas com lençol freático raso e forte influência da umidade marinha — apesar da aparência de solo pobre, não é um ambiente de escassez hídrica como um deserto.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Pantanal</strong>
              Planície sazonalmente inundável, com grande disponibilidade de água na maior parte do ano — o oposto de um ambiente desértico.
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">5.</span> A conclusão biogeográfica</h4>
          <p>
            Entre as opções, a <strong>Caatinga</strong> é, de longe, o bioma brasileiro com o regime de escassez de água e alimento mais parecido com o de um deserto. É lá que a pressão seletiva por adaptações metabólicas de resistência à fome prolongada — como um hormônio eficiente de controle glicêmico — seria mais provável de evoluir em lagartos locais, por convergência evolutiva com o monstro-de-gila.
          </p>
        </div>
      </div>
    `,

    /* ------------------------------------------------------------------
       2. RESOLUÇÃO COMENTADA
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-4 text-xs">

        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <h4 class="font-bold text-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-emerald-400"></i> Estratégia em 2 passos
          </h4>
          <p class="text-slate-300 leading-relaxed">
            <strong>Passo 1 — Identifique a pressão ambiental central.</strong> Não é "calor" nem "areia" — é escassez extrema e imprevisível de alimento e água.
            <br><br>
            <strong>Passo 2 — Compare os cinco biomas quanto a essa mesma pressão.</strong> O que mais se parece com um deserto nesse critério vence, independentemente de outras semelhanças superficiais (como solo arenoso na restinga).
          </p>
        </div>

        <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/40 space-y-2">
          <h4 class="font-bold text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa C — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            "Caatinga." É o único bioma exclusivamente brasileiro com clima semiárido, chuvas escassas e irregulares e vegetação adaptada à seca extrema — o ambiente mais próximo de um deserto entre as opções, e por isso o mais provável de favorecer, por convergência evolutiva, lagartos com adaptações metabólicas semelhantes às do monstro-de-gila.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa A — Cerrado</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lembrar que o Cerrado tem estação seca e vegetação retorcida, associando isso a "ambiente árido".
              <br>
              <strong>Onde quebra:</strong> o Cerrado tem estação chuvosa regular e bem definida, além de lençol freático acessível por raízes profundas — a escassez é sazonal e previsível, bem menos severa que num deserto.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — Pampas</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> confundir "campos abertos" com "ambiente árido".
              <br>
              <strong>Onde quebra:</strong> os Pampas têm clima subtropical úmido, chuvas bem distribuídas e solos férteis — é um dos biomas brasileiros menos parecidos com um deserto.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa D — Restinga</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> associar solo arenoso a "deserto" pela aparência visual.
              <br>
              <strong>Onde quebra:</strong> apesar do solo arenoso, a restinga fica sobre lençol freático raso e recebe forte influência de umidade marinha — não há a escassez hídrica severa característica de um deserto.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — Pantanal</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> nenhum sinal óbvio de erro à primeira vista, mas é a alternativa mais distante logicamente.
              <br>
              <strong>Onde quebra:</strong> o Pantanal é uma planície sazonalmente inundável, com grande disponibilidade de água na maior parte do ano — é praticamente o oposto de um ambiente desértico.
            </p>
          </div>
        </div>

        <div class="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30">
          <strong class="text-emerald-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            Cada bioma errado tem alguma característica que pode lembrar superficialmente um ambiente árido (vegetação retorcida, campos abertos, solo arenoso), mas nenhum reproduz a escassez hídrica extrema e crônica de um deserto como a Caatinga reproduz. Questões de convergência evolutiva pedem sempre para comparar a <strong>pressão ambiental real</strong>, não a aparência do bioma.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-dna", titulo: "Convergência Evolutiva", text: "Espécies não aparentadas desenvolvem adaptações semelhantes ao enfrentar pressões ambientais parecidas." },
      { icone: "fa-droplet-slash", titulo: "Escassez como pressão seletiva", text: "Ambientes com alimento e água escassos e imprevisíveis favorecem adaptações metabólicas de resistência à fome." },
      { icone: "fa-map", titulo: "Caatinga", text: "Único bioma exclusivamente brasileiro; clima semiárido, o mais próximo de um deserto entre os biomas do país." },
      { icone: "fa-hand-holding-medical", titulo: "Do veneno ao remédio", text: "A exendina-4 do monstro-de-gila inspirou medicamentos análogos ao GLP-1 usados no tratamento de diabetes." },
      { icone: "fa-scale-balanced", titulo: "Pressão real x aparência", text: "Compare o mecanismo ecológico (escassez de recursos), não semelhanças visuais superficiais entre biomas." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Convergência evolutiva: mesma pressão, lugares diferentes",
        legenda: "O monstro-de-gila, no deserto americano, e um lagarto hipotético na Caatinga enfrentam a mesma pressão de escassez de alimento — e podem evoluir soluções metabólicas parecidas.",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <text x="115" y="20" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">Deserto (EUA)</text>
            <ellipse cx="115" cy="90" rx="90" ry="45" fill="#422006" stroke="#f59e0b" stroke-width="2"/>
            <text x="115" y="85" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">Monstro-de-gila</text>
            <text x="115" y="100" fill="#fde68a" font-size="8" text-anchor="middle">hormônio de controle glicêmico</text>

            <text x="345" y="20" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">Caatinga (Brasil)</text>
            <ellipse cx="345" cy="90" rx="90" ry="45" fill="#065f46" stroke="#34d399" stroke-width="2"/>
            <text x="345" y="85" fill="#d1fae5" font-size="9" font-weight="bold" text-anchor="middle">Lagarto local</text>
            <text x="345" y="100" fill="#d1fae5" font-size="8" text-anchor="middle">adaptação metabólica análoga?</text>

            <text x="230" y="95" fill="#64748b" font-size="14" text-anchor="middle">≈</text>
            <text x="230" y="112" fill="#64748b" font-size="7" text-anchor="middle">mesma pressão:</text>
            <text x="230" y="123" fill="#64748b" font-size="7" text-anchor="middle">escassez de alimento</text>
          </svg>`
      },
      {
        titulo: "Disponibilidade de água ao longo do ano",
        legenda: "A Caatinga se destaca pela escassez crônica e irregular de chuva — muito mais próxima do regime de um deserto que os demais biomas citados.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <line x1="55" y1="160" x2="435" y2="160" stroke="#64748b" stroke-width="2"/>
            <line x1="55" y1="20" x2="55" y2="160" stroke="#64748b" stroke-width="2"/>
            <text x="48" y="26" fill="#94a3b8" font-size="8" text-anchor="end">água</text>

            <rect x="75" y="70" width="50" height="90" fill="#0d9488"/>
            <text x="100" y="175" fill="#cbd5e1" font-size="8" text-anchor="middle">Cerrado</text>

            <rect x="145" y="45" width="50" height="115" fill="#0891b2"/>
            <text x="170" y="175" fill="#cbd5e1" font-size="8" text-anchor="middle">Pampas</text>

            <rect x="215" y="125" width="50" height="35" fill="#84cc16"/>
            <text x="240" y="175" fill="#a3e635" font-size="8" font-weight="bold" text-anchor="middle">Caatinga</text>

            <rect x="285" y="55" width="50" height="105" fill="#38bdf8"/>
            <text x="310" y="175" fill="#cbd5e1" font-size="8" text-anchor="middle">Restinga</text>

            <rect x="355" y="30" width="50" height="130" fill="#0ea5e9"/>
            <text x="380" y="175" fill="#cbd5e1" font-size="8" text-anchor="middle">Pantanal</text>
          </svg>`
      },
      {
        titulo: "Mapa dos biomas brasileiros citados",
        legenda: "Posição aproximada de cada bioma no território brasileiro — útil para lembrar que a Caatinga concentra-se no semiárido nordestino.",
        svg: `
          <svg viewBox="0 0 460 200" class="w-full h-auto">
            <path d="M 120 20 L 340 20 L 380 80 L 360 160 L 260 190 L 140 180 L 90 100 Z" fill="#1e293b" stroke="#475569" stroke-width="2"/>
            <ellipse cx="290" cy="70" rx="55" ry="35" fill="#84cc16" opacity="0.7"/>
            <text x="290" y="74" fill="#1a2e05" font-size="9" font-weight="bold" text-anchor="middle">Caatinga</text>
            <ellipse cx="220" cy="120" rx="55" ry="35" fill="#0d9488" opacity="0.6"/>
            <text x="220" y="124" fill="#f0fdfa" font-size="9" font-weight="bold" text-anchor="middle">Cerrado</text>
            <ellipse cx="330" cy="140" rx="35" ry="25" fill="#0ea5e9" opacity="0.6"/>
            <text x="330" y="144" fill="#f0f9ff" font-size="8" font-weight="bold" text-anchor="middle">Pantanal</text>
            <ellipse cx="180" cy="175" rx="35" ry="20" fill="#0891b2" opacity="0.6"/>
            <text x="180" y="178" fill="#f0f9ff" font-size="8" font-weight="bold" text-anchor="middle">Pampas</text>
            <text x="365" y="100" fill="#38bdf8" font-size="8" font-weight="bold">Restinga →</text>
            <text x="365" y="112" fill="#94a3b8" font-size="7">(faixa costeira)</text>
          </svg>`
      },
      {
        titulo: "Mapa das cinco alternativas",
        legenda: "Só a Caatinga combina escassez crônica de água e alimento, comparável à pressão ambiental do deserto do monstro-de-gila.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <text x="30" y="15" fill="#94a3b8" font-size="9">Bioma</text>
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>

            <text x="30" y="42" fill="#e2e8f0" font-size="10">A — Cerrado</text>
            <text x="400" y="42" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="69" fill="#e2e8f0" font-size="10">B — Pampas</text>
            <text x="400" y="69" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <rect x="15" y="80" width="430" height="27" rx="5" fill="#065f46" opacity="0.35"/>
            <text x="30" y="98" fill="#6ee7b7" font-size="10" font-weight="bold">C — Caatinga</text>
            <text x="400" y="98" fill="#34d399" font-size="12" text-anchor="middle" font-weight="bold">✓</text>

            <text x="30" y="124" fill="#e2e8f0" font-size="10">D — Restinga</text>
            <text x="400" y="124" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="151" fill="#e2e8f0" font-size="10">E — Pantanal</text>
            <text x="400" y="151" fill="#f87171" font-size="12" text-anchor="middle">✕</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: compare a escassez hídrica dos biomas",
      descricao: "Escolha um bioma brasileiro e veja o quanto seu regime de água e alimento se parece com o de um deserto — quanto mais parecido, maior a chance de convergência evolutiva com o monstro-de-gila.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-2 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <p class="text-[11px] text-slate-400 mb-1">Escolha um bioma:</p>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q99bioma" data-sim="bioma" value="cerrado" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Cerrado</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q99bioma" data-sim="bioma" value="pampas" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Pampas</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q99bioma" data-sim="bioma" value="caatinga" checked class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Caatinga</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q99bioma" data-sim="bioma" value="restinga" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Restinga</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q99bioma" data-sim="bioma" value="pantanal" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Pantanal</span>
            </label>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
              <div class="flex justify-between text-[11px] mb-1">
                <span class="text-amber-300 font-bold">Semelhança com regime desértico</span>
                <span class="text-amber-300 font-mono" data-out="semelhanca">85%</span>
              </div>
              <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                <div data-bar="semelhanca" class="h-full bg-amber-500 transition-all" style="width:85%"></div>
              </div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var radios = raiz.querySelectorAll('[data-sim="bioma"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };

        var valores = {
          cerrado: { pct: 40, texto: 'Estação seca definida, mas com chuvas regulares e raízes que alcançam água profunda. Escassez moderada e previsível.' },
          pampas: { pct: 10, texto: 'Clima subtropical úmido, chuvas bem distribuídas. Um dos ambientes menos parecidos com deserto entre os citados.' },
          caatinga: { pct: 85, texto: 'Semiárido, chuvas escassas e irregulares, vegetação xerófita. O bioma brasileiro mais próximo funcionalmente de um deserto.' },
          restinga: { pct: 20, texto: 'Solo arenoso, mas lençol freático raso e umidade marinha constante — a aparência engana, não há escassez hídrica severa.' },
          pantanal: { pct: 5, texto: 'Planície sazonalmente inundável, com grande disponibilidade de água na maior parte do ano. Praticamente o oposto de um deserto.' }
        };

        function atualizar() {
          var bioma = 'caatinga';
          radios.forEach(function (r) { if (r.checked) bioma = r.value; });
          var d = valores[bioma];

          saida('semelhanca').textContent = d.pct + '%';
          barra('semelhanca').style.width = d.pct + '%';

          var v = saida('veredito');
          if (bioma === 'caatinga') {
            barra('semelhanca').className = 'h-full bg-emerald-500 transition-all';
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
          } else if (d.pct >= 35) {
            barra('semelhanca').className = 'h-full bg-amber-500 transition-all';
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
          } else {
            barra('semelhanca').className = 'h-full bg-rose-500 transition-all';
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200';
          }
          v.innerHTML = '<strong>' + bioma.charAt(0).toUpperCase() + bioma.slice(1) + ':</strong> ' + d.texto;
        }

        radios.forEach(function (r) { r.addEventListener('change', atualizar); });
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-emerald-300 block"><i class="fa-solid fa-map-location-dot"></i> Mesma Pressão de Escassez → Adaptação Metabólica Convergente</span>
        <svg viewBox="0 0 460 100" class="w-full h-24 mx-auto">
          <rect x="20" y="30" width="140" height="40" rx="6" fill="#422006" stroke="#f59e0b" stroke-width="2"/>
          <text x="90" y="54" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">Deserto (EUA)</text>
          <text x="220" y="54" fill="#34d399" font-size="14" text-anchor="middle">≈</text>
          <rect x="245" y="30" width="90" height="40" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
          <text x="290" y="54" fill="#e2e8f0" font-size="8" font-weight="bold" text-anchor="middle">Escassez</text>
          <text x="395" y="54" fill="#34d399" font-size="14" text-anchor="middle">≈</text>
          <text x="420" y="54" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">Caatinga</text>
        </svg>
      </div>
    `,
    simuladorType: null
  }

];
