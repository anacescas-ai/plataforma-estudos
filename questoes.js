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
  },

  {
    id: "q100",
    numero: "Questão 100",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "quimica",
    materia: "Química / Separação de Misturas & Soluções",
    materiaCor: "cyan",
    materiaIcone: "fa-vial",
    titulo: "Água Destilada: Por que Remover os Sais Torna a Água Imprópria para Beber",
    tags: ["Química", "Substâncias Puras", "Destilação", "Purificação da Água", "Soluções", "Eletrólitos"],
    alternativaCorreta: "D",
    userNotes: "",
    userCustomImage: null,

    enunciado: `Existe um processo de purificação de água em que são removidos os sais dissolvidos. A água que passa por esse processo é muito utilizada em laboratórios de química, em indústrias (como solvente), em baterias de carros etc. Entretanto, esse tipo de água não é adequado para ingestão, pois pode causar problemas de saúde, como carência iônica e diarreia.
    <br><br>
    Essa água é chamada de:`,

    alternativas: [
      { letra: "A", texto: "Dura.", correta: false },
      { letra: "B", texto: "Pesada.", correta: false },
      { letra: "C", texto: "Sanitária.", correta: false },
      { letra: "D", texto: "Destilada.", correta: true },
      { letra: "E", texto: "Oxigenada.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-cyan-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre destilação e os diferentes "tipos de água" que costumam ser confundidos no Enem — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">1.</span> O que é destilação</h4>
          <p>
            Destilação é um método físico de separação de misturas homogêneas, baseado na diferença entre os <strong>pontos de ebulição</strong> dos componentes. No caso da água com sais dissolvidos: a mistura é aquecida, a água (volátil, ferve a 100°C ao nível do mar) evapora, esse vapor é conduzido para um condensador e volta ao estado líquido em outro recipiente — enquanto os sais (não voláteis, precisam de temperaturas muito mais altas para evaporar) permanecem no recipiente original.
          </p>
          <p class="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-3 text-xs">
            <strong class="text-cyan-300">Resultado do processo:</strong> água quimicamente pura, praticamente livre de íons dissolvidos (Ca²⁺, Mg²⁺, Na⁺, Cl⁻ etc.) — é exatamente essa água que se chama <strong>água destilada</strong>.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">2.</span> Por que a água destilada é tão usada em laboratório e indústria</h4>
          <p>
            Sem íons dissolvidos, a água destilada não interfere em reações químicas sensíveis — é o solvente padrão de laboratório, usado para preparar soluções e lavar vidrarias sem introduzir contaminantes. Em baterias automotivas (baterias de chumbo-ácido), ela repõe o nível do eletrólito sem acrescentar sais que se depositariam nas placas internas, reduzindo a vida útil da bateria. Na indústria, funciona como solvente "neutro" para diversos processos.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">3.</span> Por que não é recomendada para beber com frequência</h4>
          <p>
            A água potável comum contém pequenas quantidades de eletrólitos essenciais — sódio, potássio, cálcio, magnésio — que ajudam a manter o equilíbrio hídrico e iônico do corpo. A água destilada não tem nada disso.
          </p>
          <p>
            Além de não fornecer esses eletrólitos, a água destilada é <strong>hipotônica</strong> em relação ao meio interno do corpo: por osmose, ela tende a "puxar" íons das células do trato intestinal na tentativa de equilibrar as concentrações, o que pode causar <strong>carência iônica</strong> (perda de eletrólitos) e, em consumo contínuo e significativo, distúrbios como diarreia.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">4.</span> Não confundir com outros "tipos de água" do vocabulário químico</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Água dura</strong>
              O oposto conceitual: água com <strong>alta</strong> concentração de sais dissolvidos, principalmente de cálcio e magnésio (carbonatos, sulfatos). Forma incrustações em tubulações e reduz a espuma de sabões.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Água pesada</strong>
              Óxido de deutério ($D_2O$): a água comum tem hidrogênio comum, a pesada tem o isótopo deutério (com nêutron extra). Usada como moderador em reatores nucleares — não tem relação com remoção de sais.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Água sanitária</strong>
              Nome popular de uma solução aquosa de hipoclorito de sódio, usada como alvejante e desinfetante doméstico — um produto de limpeza, não um tipo de água purificada por destilação.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Água oxigenada</strong>
              Solução aquosa de peróxido de hidrogênio ($H_2O_2$), usada como antisséptico e alvejante — outro produto químico distinto, sem relação com destilação.
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">5.</span> Fechando a ideia</h4>
          <p>
            A descrição do enunciado — remoção de sais dissolvidos, uso em laboratório, indústria e baterias, e inadequação para consumo por causar carência iônica — bate exatamente com a definição de <strong>água destilada</strong>, o produto direto do processo de destilação.
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
            <i class="fa-solid fa-list-check text-cyan-400"></i> Estratégia em 2 passos
          </h4>
          <p class="text-slate-300 leading-relaxed">
            <strong>Passo 1 — Identifique o processo descrito.</strong> "Remove os sais dissolvidos" é a definição-chave: aponta diretamente para destilação, não para qualquer outro tratamento.
            <br><br>
            <strong>Passo 2 — Confirme com os usos citados.</strong> Laboratório, indústria como solvente, baterias de carro e o efeito colateral de carência iônica ao beber — todos são características clássicas da água destilada, não de outras "águas" com nomes parecidos.
          </p>
        </div>

        <div class="bg-cyan-950/40 p-4 rounded-xl border border-cyan-500/40 space-y-2">
          <h4 class="font-bold text-cyan-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa D — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            "Destilada." É a água obtida por destilação, praticamente isenta de sais e íons dissolvidos — por isso é o solvente padrão de laboratório e indústria, e por isso, ao ser ingerida continuamente, não repõe eletrólitos e pode até retirar íons do corpo por osmose, causando carência iônica e diarreia.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa A — dura</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> associar qualquer nome de água "diferente" ao enunciado, sem checar a definição.
              <br>
              <strong>Onde quebra:</strong> água dura tem <em>alta</em> concentração de sais (cálcio e magnésio) — o oposto exato do que o enunciado descreve (remoção de sais).
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — pesada</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lembrar vagamente que "água pesada" é um termo técnico de química e presumir que tem relação com pureza.
              <br>
              <strong>Onde quebra:</strong> água pesada é definida pela substituição isotópica do hidrogênio por deutério ($D_2O$) — um conceito de física nuclear/química isotópica, sem qualquer relação com remoção de sais dissolvidos.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa C — sanitária</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> confundir "água sanitária" com "água tratada/purificada" pelo nome.
              <br>
              <strong>Onde quebra:</strong> água sanitária é uma solução de hipoclorito de sódio (alvejante/desinfetante) — um produto de limpeza doméstica, não uma água purificada por destilação, e nunca usada como solvente de laboratório.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — oxigenada</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> associar "oxigenada" a algo positivo ou "purificado".
              <br>
              <strong>Onde quebra:</strong> água oxigenada é uma solução de peróxido de hidrogênio ($H_2O_2$), usada como antisséptico — um composto químico completamente diferente, sem relação com remoção de sais por destilação.
            </p>
          </div>
        </div>

        <div class="p-3 bg-cyan-950/30 rounded-xl border border-cyan-500/30">
          <strong class="text-cyan-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            Todas as alternativas erradas são nomes reais de "águas" ou soluções aquosas da química do dia a dia — mas cada uma define um conceito totalmente diferente (excesso de sal, isótopo, alvejante, antisséptico). A prova está testando se você sabe a definição exata de cada termo, não só se reconhece a palavra "água" antes dele.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-vial", titulo: "Destilação", text: "Separação baseada na diferença de ponto de ebulição; remove sais e outras impurezas não voláteis da água." },
      { icone: "fa-droplet", titulo: "Água Destilada", text: "Praticamente isenta de íons dissolvidos; usada em laboratório, indústria e baterias." },
      { icone: "fa-bolt", titulo: "Carência Iônica", text: "Beber água destilada continuamente pode retirar eletrólitos do corpo por osmose." },
      { icone: "fa-mountain", titulo: "Água Dura", text: "Tem alto teor de sais de cálcio e magnésio — o oposto da água destilada." },
      { icone: "fa-flask-vial", titulo: "Não confundir nomes", text: "Pesada (D2O), sanitária (hipoclorito) e oxigenada (H2O2) são substâncias distintas, sem relação com destilação." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Aparelho de destilação simples",
        legenda: "A água evapora e é conduzida para o condensador, onde retorna ao estado líquido livre de sais. Os sais, não voláteis, ficam retidos no balão de origem.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <ellipse cx="90" cy="140" rx="55" ry="35" fill="#0c4a6e" opacity="0.5" stroke="#38bdf8" stroke-width="2"/>
            <text x="90" y="145" fill="#bae6fd" font-size="8" text-anchor="middle">água + sais</text>
            <rect x="70" y="60" width="10" height="60" fill="#0c4a6e" opacity="0.3" stroke="#38bdf8" stroke-width="1.5"/>
            <path d="M 80 80 Q 200 20 300 80" fill="none" stroke="#64748b" stroke-width="3"/>
            <text x="200" y="45" fill="#94a3b8" font-size="8" text-anchor="middle">vapor de água</text>
            <rect x="290" y="70" width="80" height="25" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
            <text x="330" y="87" fill="#cbd5e1" font-size="7" text-anchor="middle">condensador</text>
            <line x1="330" y1="95" x2="330" y2="130" stroke="#38bdf8" stroke-width="3"/>
            <ellipse cx="330" cy="155" rx="45" ry="25" fill="#065f46" opacity="0.5" stroke="#34d399" stroke-width="2"/>
            <text x="330" y="160" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">água destilada</text>
            <circle cx="70" cy="150" r="2.5" fill="#fbbf24"/>
            <circle cx="85" cy="160" r="2.5" fill="#fbbf24"/>
            <circle cx="100" cy="148" r="2.5" fill="#fbbf24"/>
            <text x="90" y="180" fill="#fde68a" font-size="7" text-anchor="middle">sais ficam retidos aqui</text>
          </svg>`
      },
      {
        titulo: "Água comum x água destilada",
        legenda: "A água potável comum carrega eletrólitos (Na+, K+, Ca2+, Mg2+). A destilada não tem nenhum deles.",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <text x="115" y="20" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">Água comum</text>
            <rect x="35" y="35" width="160" height="90" rx="6" fill="#0c4a6e" opacity="0.4" stroke="#38bdf8" stroke-width="2"/>
            <text x="70" y="60" fill="#bae6fd" font-size="9" font-weight="bold">Na⁺</text>
            <text x="140" y="75" fill="#bae6fd" font-size="9" font-weight="bold">Ca²⁺</text>
            <text x="90" y="95" fill="#bae6fd" font-size="9" font-weight="bold">K⁺</text>
            <text x="150" y="105" fill="#bae6fd" font-size="9" font-weight="bold">Mg²⁺</text>

            <text x="345" y="20" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">Água destilada</text>
            <rect x="265" y="35" width="160" height="90" rx="6" fill="#065f46" opacity="0.25" stroke="#34d399" stroke-width="2"/>
            <text x="345" y="85" fill="#6ee7b7" font-size="9" text-anchor="middle" font-style="italic">sem íons</text>
          </svg>`
      },
      {
        titulo: "Por que beber água destilada causa carência iônica",
        legenda: "Por osmose, a água hipotônica tende a puxar íons das células intestinais na tentativa de equilibrar as concentrações — causando perda de eletrólitos.",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <rect x="150" y="30" width="160" height="90" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2"/>
            <text x="230" y="50" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Célula intestinal</text>
            <circle cx="200" cy="80" r="3" fill="#fbbf24"/>
            <circle cx="230" cy="90" r="3" fill="#fbbf24"/>
            <circle cx="260" cy="75" r="3" fill="#fbbf24"/>
            <text x="230" y="110" fill="#fde68a" font-size="7" text-anchor="middle">íons intracelulares</text>

            <line x1="150" y1="75" x2="90" y2="75" stroke="#f87171" stroke-width="2" marker-end="url(#pq100)"/>
            <text x="60" y="65" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">íons saem</text>
            <ellipse cx="50" cy="75" rx="35" ry="25" fill="#065f46" opacity="0.3" stroke="#34d399" stroke-width="2"/>
            <text x="50" y="79" fill="#6ee7b7" font-size="7" text-anchor="middle">água destilada</text>
            <defs>
              <marker id="pq100" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f87171"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Mapa das cinco alternativas",
        legenda: "Cada nome corresponde a uma substância química bem diferente — só a destilada bate com o processo de remoção de sais descrito.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <text x="30" y="15" fill="#94a3b8" font-size="9">Alternativa</text>
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>

            <text x="30" y="42" fill="#e2e8f0" font-size="10">A — Dura (excesso de sais)</text>
            <text x="400" y="42" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="69" fill="#e2e8f0" font-size="10">B — Pesada (D2O)</text>
            <text x="400" y="69" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="96" fill="#e2e8f0" font-size="10">C — Sanitária (hipoclorito)</text>
            <text x="400" y="96" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <rect x="15" y="107" width="430" height="27" rx="5" fill="#0e7490" opacity="0.35"/>
            <text x="30" y="125" fill="#67e8f9" font-size="10" font-weight="bold">D — Destilada (sem sais)</text>
            <text x="400" y="125" fill="#22d3ee" font-size="12" text-anchor="middle" font-weight="bold">✓</text>

            <text x="30" y="151" fill="#e2e8f0" font-size="10">E — Oxigenada (H2O2)</text>
            <text x="400" y="151" fill="#f87171" font-size="12" text-anchor="middle">✕</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: identifique o tipo de água pela composição",
      descricao: "Escolha um tipo de água e veja sua composição real, seus usos e se ela bate com a descrição do enunciado (remoção de sais).",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-2 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <p class="text-[11px] text-slate-400 mb-1">Escolha o tipo de água:</p>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q100agua" data-sim="agua" value="dura" class="accent-cyan-500">
              <span class="text-[11px] text-slate-200">Água dura</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q100agua" data-sim="agua" value="pesada" class="accent-cyan-500">
              <span class="text-[11px] text-slate-200">Água pesada</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q100agua" data-sim="agua" value="sanitaria" class="accent-cyan-500">
              <span class="text-[11px] text-slate-200">Água sanitária</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q100agua" data-sim="agua" value="destilada" checked class="accent-cyan-500">
              <span class="text-[11px] text-slate-200">Água destilada</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q100agua" data-sim="agua" value="oxigenada" class="accent-cyan-500">
              <span class="text-[11px] text-slate-200">Água oxigenada</span>
            </label>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4" data-out="ficha">
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var radios = raiz.querySelectorAll('[data-sim="agua"]');
        var ficha = raiz.querySelector('[data-out="ficha"]');
        var veredito = raiz.querySelector('[data-out="veredito"]');

        var dados = {
          dura: { composicao: 'Alta concentração de sais de Ca²⁺ e Mg²⁺', uso: 'Água de poço/torneira em regiões calcárias', bate: false },
          pesada: { composicao: 'D₂O — hidrogênio substituído por deutério', uso: 'Moderador em reatores nucleares', bate: false },
          sanitaria: { composicao: 'Solução de hipoclorito de sódio (NaClO)', uso: 'Alvejante e desinfetante doméstico', bate: false },
          destilada: { composicao: 'Praticamente sem sais ou íons dissolvidos', uso: 'Laboratório, indústria, baterias de carro', bate: true },
          oxigenada: { composicao: 'Solução de peróxido de hidrogênio (H₂O₂)', uso: 'Antisséptico e alvejante', bate: false }
        };

        function atualizar() {
          var tipo = 'destilada';
          radios.forEach(function (r) { if (r.checked) tipo = r.value; });
          var d = dados[tipo];

          ficha.innerHTML =
            '<p class="text-[11px] text-slate-300"><strong class="text-cyan-300">Composição:</strong> ' + d.composicao + '</p>' +
            '<p class="text-[11px] text-slate-300 mt-1"><strong class="text-cyan-300">Uso típico:</strong> ' + d.uso + '</p>';

          if (d.bate) {
            veredito.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            veredito.innerHTML = '<strong>Bate com o enunciado!</strong> Remove os sais, é usada em laboratório/indústria/baterias, e não deve ser bebida continuamente.';
          } else {
            veredito.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200';
            veredito.innerHTML = '<strong>Não bate com o enunciado.</strong> Essa substância tem composição e uso diferentes do que foi descrito.';
          }
        }

        radios.forEach(function (r) { r.addEventListener('change', atualizar); });
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-cyan-300 block"><i class="fa-solid fa-vial"></i> Destilação: Água + Sais → Vapor Puro → Água Destilada (sais ficam retidos)</span>
        <svg viewBox="0 0 460 90" class="w-full h-24 mx-auto">
          <rect x="20" y="25" width="140" height="40" rx="6" fill="#0c4a6e" opacity="0.5" stroke="#38bdf8" stroke-width="2"/>
          <text x="90" y="49" fill="#bae6fd" font-size="9" font-weight="bold" text-anchor="middle">Água + sais</text>
          <line x1="160" y1="45" x2="200" y2="45" stroke="#64748b" stroke-width="2" marker-end="url(#pq100d)"/>
          <text x="180" y="37" fill="#94a3b8" font-size="7" text-anchor="middle">destila</text>
          <rect x="205" y="25" width="230" height="40" rx="6" fill="#065f46" opacity="0.35" stroke="#34d399" stroke-width="2"/>
          <text x="320" y="49" fill="#d1fae5" font-size="9" font-weight="bold" text-anchor="middle">Água destilada (sem sais)</text>
          <defs>
            <marker id="pq100d" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/>
            </marker>
          </defs>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q101",
    numero: "Questão 101",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "biologia",
    materia: "Biologia / Fisiologia Sensorial & Visão",
    materiaCor: "emerald",
    materiaIcone: "fa-eye",
    titulo: "Efeito Olho Vermelho: Como a Dilatação da Pupila no Escuro Revela os Vasos Sanguíneos da Retina",
    tags: ["Biologia", "Fisiologia Sensorial", "Visão", "Pupila", "Retina", "Óptica do Olho"],
    alternativaCorreta: "A",
    userNotes: "",
    userCustomImage: null,

    enunciado: `<strong>Por que os olhos ficam vermelhos em algumas fotografias?</strong>
    <br><br>
    Em fotos tiradas com câmeras fotográficas antigas, por vezes as pessoas aparecem com os olhos vermelhos. Isso ocorre porque a luz do flash da câmera incide diretamente no globo ocular, sendo refletida por uma região repleta de vasos sanguíneos.
    <br><br>
    Disponível em: www.uol.com.br. Acesso em: 14 jun. 2017 (adaptado).
    <br><br>
    Esse efeito é mais comum à noite ou em lugares pouco iluminados porque, com a pupila:`,

    alternativas: [
      { letra: "A", texto: "Dilatada, chega mais luz à retina.", correta: true },
      { letra: "B", texto: "Retraída, chega mais luz vermelha à retina.", correta: false },
      { letra: "C", texto: "Retraída, chega mais luz vermelha aos bastonetes.", correta: false },
      { letra: "D", texto: "Dilatada, chegam menos luzes azul e verde aos cones.", correta: false },
      { letra: "E", texto: "Dilatada, chegam menos luzes azul e verde aos bastonetes.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-emerald-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre a anatomia do olho e o reflexo pupilar cobrados no Enem — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">1.</span> A pupila como uma "abertura de câmera" viva</h4>
          <p>
            A <strong>pupila</strong> é o orifício central da íris por onde a luz entra no olho. A íris, através de músculos, controla o diâmetro da pupila em resposta à quantidade de luz disponível — exatamente como o diafragma de uma câmera fotográfica controla a abertura da lente.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-emerald-300 block mb-1">Ambiente claro</strong>
              A pupila se contrai (<strong>miose</strong>), diminuindo de diâmetro, para reduzir a quantidade de luz que entra e evitar ofuscamento.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-emerald-300 block mb-1">Ambiente escuro</strong>
              A pupila se dilata (<strong>midríase</strong>), aumentando de diâmetro, para captar o máximo de luz possível e permitir enxergar em condições de pouca luminosidade.
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">2.</span> A retina e por que ela reflete vermelho</h4>
          <p>
            A <strong>retina</strong> é a camada fotossensível no fundo do olho, onde a luz é convertida em sinais nervosos. Logo atrás dela fica a <strong>coroide</strong>, uma camada extremamente rica em vasos sanguíneos, que nutre a retina com oxigênio e nutrientes. Quando um flash de luz forte incide diretamente sobre essa região, parte da luz é refletida de volta para fora do olho — e, ao passar por essa camada cheia de sangue, a luz refletida assume a coloração avermelhada característica do efeito "olho vermelho".
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">3.</span> Por que o efeito é mais forte no escuro</h4>
          <p>
            Em ambientes pouco iluminados, a pupila já está dilatada (midríase) tentando captar mais luz. Quando o flash da câmera dispara de repente, ele encontra uma "abertura" muito maior do que encontraria em um ambiente claro (onde a pupila estaria contraída). Uma pupila maior deixa entrar <strong>mais luz do flash</strong> até a retina — e, na volta, deixa sair <strong>mais luz refletida</strong> pela coroide vascularizada, tornando o reflexo vermelho muito mais visível na fotografia.
          </p>
          <p class="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-3 text-xs">
            <strong class="text-emerald-300">Resumo da causa-efeito:</strong> escuro → pupila dilata → mais luz do flash entra e atinge a retina → mais luz reflete de volta pela camada vascularizada → efeito olho vermelho mais intenso.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">4.</span> Cones e bastonetes: papéis diferentes, sem relação direta com o efeito</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Cones</strong>
              Fotorreceptores responsáveis pela visão de cores e pela nitidez, funcionam melhor com luz intensa (visão fotópica).
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Bastonetes</strong>
              Fotorreceptores muito mais sensíveis à luz fraca, responsáveis pela visão em ambientes escuros (visão escotópica) — mas <strong>não distinguem cores</strong>, só captam intensidade luminosa.
            </div>
          </div>
          <p>
            Esses fotorreceptores são responsáveis por gerar o sinal nervoso da visão — não são a causa da reflexão vermelha, que é um fenômeno óptico ligado à coroide vascularizada, não à ativação de cones ou bastonetes.
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
            <strong>Passo 1 — Lembre a direção correta do reflexo pupilar.</strong> No escuro, a pupila dilata (não retrai) para captar mais luz — isso já elimina B e C de cara.
            <br><br>
            <strong>Passo 2 — Ligue "pupila maior" a "mais luz alcançando a retina".</strong> O próprio texto do enunciado já explica que a cor vem da reflexão em uma região vascularizada (a retina/coroide) — a explicação mais direta é que mais luz chega até lá.
          </p>
        </div>

        <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/40 space-y-2">
          <h4 class="font-bold text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa A — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            "Dilatada, chega mais luz à retina." No escuro, a pupila se dilata para captar o máximo de luz possível. Quando o flash dispara, essa abertura maior permite que mais luz atinja a retina (e a coroide vascularizada logo atrás dela), aumentando a quantidade de luz refletida de volta — e, com ela, a intensidade do reflexo avermelhado captado pela câmera.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — retraída, chega mais luz vermelha à retina</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> confundir a direção do reflexo pupilar, ou associar "retraída" a algum tipo de foco mais preciso.
              <br>
              <strong>Onde quebra:</strong> em ambientes escuros a pupila se <strong>dilata</strong>, não retrai. Uma pupila retraída (contraída) deixaria passar <em>menos</em> luz, o que tornaria o efeito menos intenso, não mais.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa C — retraída, chega mais luz vermelha aos bastonetes</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> misturar "bastonetes" (que realmente predominam na visão noturna) com a direção errada do reflexo pupilar.
              <br>
              <strong>Onde quebra:</strong> mesma falha da alternativa B quanto à pupila retraída, além de atribuir a "luz vermelha" chegando aos bastonetes um papel que não é o mecanismo do efeito fotográfico descrito.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa D — dilatada, chegam menos luzes azul e verde aos cones</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> acertar a direção da pupila (dilatada), mas inventar uma explicação sobre filtragem seletiva de cores pelos cones.
              <br>
              <strong>Onde quebra:</strong> o efeito olho vermelho não depende de os cones receberem mais ou menos luz azul/verde — é um fenômeno de reflexão física na coroide vascularizada, não de processamento de cor pelos fotorreceptores.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — dilatada, chegam menos luzes azul e verde aos bastonetes</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> mesma lógica da alternativa D, mas trocando cones por bastonetes.
              <br>
              <strong>Onde quebra:</strong> além de não ser o mecanismo do efeito, os bastonetes nem sequer distinguem cores — não faz sentido biológico falar em "luz azul e verde chegando aos bastonetes" de forma seletiva, já que eles só captam intensidade luminosa, não comprimento de onda.
            </p>
          </div>
        </div>

        <div class="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30">
          <strong class="text-emerald-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            Duas alternativas erram a direção do reflexo pupilar (retraída em vez de dilatada); as outras duas acertam a direção, mas inventam um mecanismo de filtragem de cor por cones ou bastonetes que não existe nesse fenômeno. A explicação real é a mais simples: pupila maior, mais luz entra e sai, reflexo mais visível.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-eye", titulo: "Midríase e Miose", text: "Dilatação (midríase, no escuro) e contração (miose, na claridade) da pupila, controladas pela íris." },
      { icone: "fa-circle-dot", titulo: "Retina e Coroide", text: "A retina capta a luz; a coroide, logo atrás, é rica em vasos sanguíneos e reflete a coloração avermelhada." },
      { icone: "fa-bolt-lightning", titulo: "Flash + Pupila Dilatada", text: "No escuro, a pupila maior deixa entrar e refletir mais luz, intensificando o efeito olho vermelho." },
      { icone: "fa-palette", titulo: "Cones", text: "Fotorreceptores da visão de cor, ativos em luz intensa — não são a causa do reflexo vermelho." },
      { icone: "fa-moon", titulo: "Bastonetes", text: "Fotorreceptores sensíveis à luz fraca, mas sem discriminação de cor — dominam a visão noturna." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Pupila contraída x dilatada",
        legenda: "No escuro, a pupila se dilata para captar mais luz — como abrir mais o diafragma de uma câmera.",
        svg: `
          <svg viewBox="0 0 460 160" class="w-full h-auto">
            <text x="115" y="20" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">Ambiente claro</text>
            <circle cx="115" cy="90" r="60" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="115" cy="90" r="55" fill="none" stroke="#38bdf8" stroke-width="8"/>
            <circle cx="115" cy="90" r="15" fill="#0f172a"/>
            <text x="115" y="145" fill="#94a3b8" font-size="8" text-anchor="middle">pupila pequena (miose)</text>

            <text x="345" y="20" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">Ambiente escuro</text>
            <circle cx="345" cy="90" r="60" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="345" cy="90" r="55" fill="none" stroke="#38bdf8" stroke-width="8"/>
            <circle cx="345" cy="90" r="35" fill="#0f172a"/>
            <text x="345" y="145" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">pupila grande (midríase)</text>
          </svg>`
      },
      {
        titulo: "Trajeto da luz do flash até a retina e de volta",
        legenda: "Com a pupila dilatada, mais luz do flash entra, atinge a retina/coroide vascularizada, e mais luz refletida sai — intensificando o vermelho na foto.",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <rect x="30" y="55" width="60" height="40" rx="4" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
            <text x="60" y="78" fill="#e2e8f0" font-size="8" font-weight="bold" text-anchor="middle">Flash</text>
            <line x1="90" y1="75" x2="200" y2="75" stroke="#fde68a" stroke-width="3" marker-end="url(#pq101)"/>

            <circle cx="280" cy="75" r="55" fill="#1e293b" stroke="#475569" stroke-width="2"/>
            <circle cx="280" cy="75" r="30" fill="#0f172a"/>
            <path d="M 250 75 A 30 30 0 1 1 310 75" stroke="#f87171" stroke-width="6" fill="none"/>
            <text x="280" y="130" fill="#94a3b8" font-size="8" text-anchor="middle">retina/coroide vascularizada</text>

            <line x1="230" y1="55" x2="140" y2="35" stroke="#f87171" stroke-width="3" marker-end="url(#pq101)"/>
            <text x="180" y="30" fill="#fca5a5" font-size="8" font-weight="bold">reflexo vermelho na câmera</text>
            <defs>
              <marker id="pq101" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#fde68a"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Cones x bastonetes: papéis diferentes",
        legenda: "Cones enxergam cor sob luz forte; bastonetes enxergam em preto e branco sob luz fraca. Nenhum dos dois é a causa do reflexo vermelho.",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <text x="115" y="20" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">Cones</text>
            <rect x="40" y="35" width="150" height="70" rx="6" fill="#450a0a" opacity="0.3" stroke="#f87171" stroke-width="2"/>
            <circle cx="80" cy="65" r="8" fill="#f87171"/>
            <circle cx="115" cy="65" r="8" fill="#34d399"/>
            <circle cx="150" cy="65" r="8" fill="#38bdf8"/>
            <text x="115" y="90" fill="#fca5a5" font-size="8" text-anchor="middle">visão de cor, luz forte</text>

            <text x="345" y="20" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">Bastonetes</text>
            <rect x="270" y="35" width="150" height="70" rx="6" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="345" cy="65" r="8" fill="#cbd5e1"/>
            <text x="345" y="90" fill="#cbd5e1" font-size="8" text-anchor="middle">preto e branco, luz fraca</text>
          </svg>`
      },
      {
        titulo: "Mapa das cinco alternativas",
        legenda: "Duas erram a direção da pupila; duas acertam a pupila dilatada mas inventam um mecanismo de cor que não existe nesse fenômeno.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <text x="30" y="15" fill="#94a3b8" font-size="9">Alternativa</text>
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>

            <rect x="15" y="30" width="430" height="27" rx="5" fill="#065f46" opacity="0.35"/>
            <text x="30" y="48" fill="#6ee7b7" font-size="10" font-weight="bold">A — Dilatada, mais luz à retina</text>
            <text x="400" y="48" fill="#34d399" font-size="12" text-anchor="middle" font-weight="bold">✓</text>

            <text x="30" y="75" fill="#e2e8f0" font-size="10">B — Retraída, mais luz vermelha</text>
            <text x="400" y="75" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="101" fill="#e2e8f0" font-size="10">C — Retraída, luz aos bastonetes</text>
            <text x="400" y="101" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="127" fill="#e2e8f0" font-size="10">D — Dilatada, menos cor aos cones</text>
            <text x="400" y="127" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="153" fill="#e2e8f0" font-size="10">E — Dilatada, menos cor aos bastonetes</text>
            <text x="400" y="153" fill="#f87171" font-size="12" text-anchor="middle">✕</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: ajuste a luminosidade e veja o efeito no olho vermelho",
      descricao: "Controle o quão escuro está o ambiente e observe o diâmetro da pupila mudar — e, com ele, a intensidade do reflexo vermelho ao disparar o flash.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Luminosidade do ambiente</span><span class="text-emerald-300 font-bold" data-out="luz">30%</span>
              </label>
              <input type="range" data-sim="luz" min="0" max="100" value="30" step="5" class="w-full accent-emerald-500">
              <p class="text-[10px] text-slate-500 mt-1"><i class="fa-solid fa-flask"></i> 0% = escuro total, 100% = ambiente bem iluminado.</p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 flex items-center justify-center">
              <svg viewBox="0 0 200 200" class="w-32 h-32">
                <circle cx="100" cy="100" r="90" fill="#f1f5f9" stroke="#94a3b8" stroke-width="3"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#38bdf8" stroke-width="12"/>
                <circle data-out="pupilaSvg" cx="100" cy="100" r="40" fill="#0f172a"/>
              </svg>
            </div>
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
              <div class="flex justify-between text-[11px] mb-1">
                <span class="text-rose-300 font-bold">Intensidade do reflexo vermelho</span>
                <span class="text-rose-300 font-mono" data-out="reflexo">55%</span>
              </div>
              <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                <div data-bar="reflexo" class="h-full bg-rose-500 transition-all" style="width:55%"></div>
              </div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var campo = raiz.querySelector('[data-sim="luz"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };
        var pupila = raiz.querySelector('[data-out="pupilaSvg"]');

        function atualizar() {
          var luz = parseFloat(campo.value);
          var raioPupila = 15 + (100 - luz) * 0.35;
          var reflexo = Math.max(5, 100 - luz);

          saida('luz').textContent = luz.toFixed(0) + '%';
          saida('reflexo').textContent = reflexo.toFixed(0) + '%';
          barra('reflexo').style.width = reflexo + '%';
          pupila.setAttribute('r', raioPupila.toFixed(0));

          var v = saida('veredito');
          if (luz >= 60) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            v.innerHTML = '<strong>Ambiente claro.</strong> Pupila contraída — pouco espaço para o flash entrar e refletir, efeito olho vermelho quase imperceptível.';
          } else if (luz >= 25) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            v.innerHTML = '<strong>Penumbra.</strong> Pupila já dilatando — o reflexo começa a ficar visível nas fotos com flash.';
          } else {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200';
            v.innerHTML = '<strong>Ambiente escuro.</strong> Pupila bem dilatada — máxima entrada e saída de luz do flash pela retina vascularizada, efeito olho vermelho no auge.';
          }
        }

        campo.addEventListener('input', atualizar);
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-emerald-300 block"><i class="fa-solid fa-eye"></i> Escuro → Pupila Dilata → Mais Luz na Retina → Mais Reflexo Vermelho</span>
        <svg viewBox="0 0 460 100" class="w-full h-24 mx-auto">
          <rect x="15" y="30" width="100" height="40" rx="6" fill="#1e293b" stroke="#475569" stroke-width="2"/>
          <text x="65" y="54" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">Escuro</text>
          <text x="130" y="54" fill="#34d399" font-size="14" text-anchor="middle">→</text>
          <rect x="150" y="30" width="110" height="40" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
          <text x="205" y="54" fill="#e2e8f0" font-size="8" font-weight="bold" text-anchor="middle">Pupila dilata</text>
          <text x="275" y="54" fill="#34d399" font-size="14" text-anchor="middle">→</text>
          <rect x="295" y="30" width="150" height="40" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
          <text x="370" y="54" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">Mais reflexo vermelho</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q103",
    numero: "Questão 103",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "biologia",
    materia: "Biologia / Biologia Celular & Organelas",
    materiaCor: "emerald",
    materiaIcone: "fa-microscope",
    titulo: "Lisossomos e a Doença do Depósito de Colesterol: Quando a Digestão Celular Falha",
    tags: ["Biologia", "Biologia Celular", "Lisossomos", "Enzimas Digestivas", "Doenças de Depósito Lisossômico", "Organelas"],
    alternativaCorreta: "A",
    userNotes: "",
    userCustomImage: null,

    enunciado: `A deficiência da enzima lipase ácida causa uma doença em que o portador apresenta células que não degradam colesterol esterificado nem triglicerídeos, resultando no depósito desses compostos em diversos órgãos, principalmente no fígado.
    <br><br>
    ANDERSON, R. A. et al. In Situ Localization of the Genetic Locus Encoding [...]. <strong>Genomics</strong>, n. 1, jan. 1993 (adaptado).
    <br><br>
    Essa doença resulta da insuficiência funcional de qual estrutura celular?`,

    alternativas: [
      { letra: "A", texto: "Lisossomos.", correta: true },
      { letra: "B", texto: "Ribossomos.", correta: false },
      { letra: "C", texto: "Mitocôndrias.", correta: false },
      { letra: "D", texto: "Peroxissomos.", correta: false },
      { letra: "E", texto: "Retículo endoplasmático liso.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-emerald-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre a função dos lisossomos e as doenças de depósito lisossômico cobradas no Enem — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">1.</span> O que são lisossomos</h4>
          <p>
            Lisossomos são organelas membranosas, praticamente exclusivas de células animais, que funcionam como o <strong>"estômago" da célula</strong>. Seu interior é ácido (pH em torno de 5) e contém dezenas de <strong>enzimas hidrolíticas</strong> (hidrolases ácidas) especializadas em quebrar praticamente qualquer tipo de macromolécula: proteínas, ácidos nucleicos, carboidratos complexos e <strong>lipídeos</strong>.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">2.</span> A digestão intracelular de lipídeos: onde a lipase ácida atua</h4>
          <p>
            Entre as enzimas lisossômicas está a <strong>lipase ácida lisossômica</strong>, responsável por quebrar o colesterol esterificado (colesterol ligado a um ácido graxo) e os triglicerídeos que chegam à célula, por exemplo via endocitose de lipoproteínas (como o LDL). Essa quebra libera colesterol livre e ácidos graxos, que a célula pode reaproveitar em suas membranas ou vias metabólicas.
          </p>
          <p class="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-3 text-xs">
            <strong class="text-emerald-300">Ponto-chave:</strong> "lipase ácida" já é uma pista direta — enzimas que funcionam em meio ácido são a marca registrada dos lisossomos, cujo interior é mantido ácido justamente para essas hidrolases funcionarem.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">3.</span> Doenças de depósito lisossômico</h4>
          <p>
            Quando falta (ou funciona mal) uma enzima lisossômica específica, o substrato que ela deveria degradar simplesmente <strong>se acumula</strong> dentro dos lisossomos, sem ser processado. Esse grupo de doenças genéticas é chamado <strong>doenças de depósito lisossômico</strong>. A descrição do enunciado — falta de lipase ácida, acúmulo de colesterol esterificado e triglicerídeos, principalmente no fígado — corresponde exatamente a esse mecanismo, no caso relacionado à deficiência de lipase ácida lisossômica (as doenças de Wolman e de depósito de ésteres de colesterol, causadas por mutações no mesmo gene).
          </p>
          <p>
            O fígado é um dos órgãos mais afetados porque processa grande quantidade de lipoproteínas e lipídeos circulantes — exatamente o tipo de material que passa pela via lisossômica de digestão.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">4.</span> Descartando as outras organelas</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Ribossomos</strong>
              Sintetizam proteínas a partir do RNAm — não têm relação com degradação de lipídeos.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Mitocôndrias</strong>
              Produzem ATP pela respiração celular; participam de outra via de metabolismo de gordura (beta-oxidação de ácidos graxos livres para gerar energia), mas não da digestão ácida de colesterol esterificado vinda de fora da célula.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Peroxissomos</strong>
              Fazem beta-oxidação de ácidos graxos de cadeia muito longa e neutralizam peróxidos — uma via bioquímica distinta da lipase ácida lisossômica descrita.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Retículo endoplasmático liso</strong>
              É o principal local de <strong>síntese</strong> de lipídeos e esteroides, e participa da desintoxicação — função oposta à de degradar colesterol esterificado recebido pela célula.
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
            <strong>Passo 1 — Repare na palavra "ácida".</strong> Enzima que funciona em meio ácido é a assinatura das hidrolases lisossômicas.
            <br><br>
            <strong>Passo 2 — Reconheça o padrão "falta de enzima → acúmulo do substrato".</strong> Esse é o mecanismo clássico das doenças de depósito lisossômico, sempre ligado à organela onde a digestão intracelular acontece: o lisossomo.
          </p>
        </div>

        <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/40 space-y-2">
          <h4 class="font-bold text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa A — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            "Lisossomos." A lipase ácida é uma enzima hidrolítica lisossômica que degrada colesterol esterificado e triglicerídeos dentro do lisossomo. Sem ela, esses lipídeos se acumulam na própria organela, sobrecarregando as células — principalmente as do fígado — exatamente como descrito no enunciado.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — ribossomos</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lembrar apenas "organela + enzima" e associar de forma genérica à maquinaria de síntese celular.
              <br>
              <strong>Onde quebra:</strong> ribossomos sintetizam proteínas; não têm qualquer papel na degradação de lipídeos. A doença descrita é de falha em digerir, não em produzir algo.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa C — mitocôndrias</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> associar "gordura" automaticamente a "mitocôndria", lembrando da beta-oxidação de ácidos graxos para gerar energia.
              <br>
              <strong>Onde quebra:</strong> a mitocôndria degrada ácidos graxos livres para produzir ATP, numa via bioquímica diferente da lipase ácida lisossômica, que degrada colesterol esterificado e triglicerídeos em ambiente ácido, dentro do lisossomo.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa D — peroxissomos</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> peroxissomos também lidam com lipídeos, então parecem uma resposta plausível.
              <br>
              <strong>Onde quebra:</strong> peroxissomos processam ácidos graxos de cadeia muito longa e neutralizam peróxido de hidrogênio — uma via distinta, sem relação com a enzima lipase ácida especificamente citada no enunciado.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — retículo endoplasmático liso</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lembrar que o REL está envolvido no metabolismo de lipídeos, sem diferenciar síntese de degradação.
              <br>
              <strong>Onde quebra:</strong> o REL <strong>sintetiza</strong> lipídeos e esteroides — função oposta à de degradar colesterol esterificado já formado, que é o papel da lipase ácida lisossômica.
            </p>
          </div>
        </div>

        <div class="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30">
          <strong class="text-emerald-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            Todas as alternativas erradas citam organelas que, de alguma forma, também lidam com lipídeos — mas cada uma em uma via bioquímica diferente (síntese, produção de energia, oxidação de cadeias longas). A palavra "ácida" na enzima e o padrão "falta de enzima → depósito do substrato" são as pistas que apontam especificamente para o lisossomo.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-microscope", titulo: "Lisossomo", text: "Organela com interior ácido e enzimas hidrolíticas, responsável pela digestão intracelular." },
      { icone: "fa-flask", titulo: "Lipase Ácida Lisossômica", text: "Enzima que degrada colesterol esterificado e triglicerídeos dentro do lisossomo." },
      { icone: "fa-triangle-exclamation", titulo: "Doença de Depósito Lisossômico", text: "Falta de uma enzima lisossômica específica causa acúmulo do substrato não digerido na organela." },
      { icone: "fa-liver", titulo: "Fígado como órgão-alvo", text: "Processa grande volume de lipoproteínas circulantes, por isso é um dos mais afetados nesse tipo de doença." },
      { icone: "fa-shapes", titulo: "Outras organelas lipídicas", text: "Mitocôndria (energia), peroxissomo (cadeias longas) e REL (síntese) atuam em vias diferentes da lisossômica." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "O lisossomo como \"estômago\" da célula",
        legenda: "Interior ácido, repleto de enzimas hidrolíticas prontas para degradar macromoléculas recebidas por endocitose ou autofagia.",
        svg: `
          <svg viewBox="0 0 460 160" class="w-full h-auto">
            <circle cx="230" cy="90" r="70" fill="#450a0a" opacity="0.25" stroke="#f87171" stroke-width="2.5"/>
            <text x="230" y="35" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">Lisossomo (pH ácido ≈ 5)</text>
            <circle cx="200" cy="80" r="6" fill="#fbbf24"/>
            <circle cx="240" cy="70" r="6" fill="#fbbf24"/>
            <circle cx="260" cy="105" r="6" fill="#fbbf24"/>
            <circle cx="210" cy="115" r="6" fill="#fbbf24"/>
            <text x="230" y="145" fill="#fde68a" font-size="8" text-anchor="middle">enzimas hidrolíticas (inclui lipase ácida)</text>
          </svg>`
      },
      {
        titulo: "Degradação normal do colesterol esterificado",
        legenda: "A lipase ácida quebra o colesterol esterificado e os triglicerídeos, liberando componentes que a célula reaproveita.",
        svg: `
          <svg viewBox="0 0 460 130" class="w-full h-auto">
            <rect x="20" y="40" width="130" height="50" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
            <text x="85" y="60" fill="#e2e8f0" font-size="8" font-weight="bold" text-anchor="middle">Colesterol</text>
            <text x="85" y="74" fill="#e2e8f0" font-size="8" font-weight="bold" text-anchor="middle">esterificado</text>
            <line x1="150" y1="65" x2="185" y2="65" stroke="#64748b" stroke-width="2" marker-end="url(#pq103)"/>
            <text x="167" y="55" fill="#94a3b8" font-size="7" text-anchor="middle">lipase</text>
            <text x="167" y="65" fill="#94a3b8" font-size="7" text-anchor="middle">ácida</text>

            <rect x="190" y="40" width="80" height="50" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
            <text x="230" y="68" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">Lisossomo</text>
            <line x1="270" y1="65" x2="305" y2="65" stroke="#64748b" stroke-width="2" marker-end="url(#pq103)"/>

            <rect x="310" y="40" width="130" height="50" rx="6" fill="#065f46" stroke="#34d399" stroke-width="2"/>
            <text x="375" y="60" fill="#d1fae5" font-size="8" font-weight="bold" text-anchor="middle">Colesterol livre +</text>
            <text x="375" y="74" fill="#d1fae5" font-size="8" font-weight="bold" text-anchor="middle">ácidos graxos</text>
            <defs>
              <marker id="pq103" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Sem a enzima: acúmulo dentro do lisossomo",
        legenda: "Faltando lipase ácida, o colesterol esterificado e os triglicerídeos não são degradados e se acumulam na organela, sobrecarregando a célula — sobretudo no fígado.",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <circle cx="230" cy="80" r="70" fill="#450a0a" opacity="0.35" stroke="#f87171" stroke-width="2.5"/>
            <text x="230" y="25" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">Lisossomo sem lipase ácida</text>
            <rect x="190" y="55" width="20" height="16" rx="2" fill="#fde68a"/>
            <rect x="220" y="65" width="20" height="16" rx="2" fill="#fde68a"/>
            <rect x="250" y="50" width="20" height="16" rx="2" fill="#fde68a"/>
            <rect x="205" y="90" width="20" height="16" rx="2" fill="#fde68a"/>
            <rect x="245" y="95" width="20" height="16" rx="2" fill="#fde68a"/>
            <text x="230" y="130" fill="#fde68a" font-size="8" font-weight="bold" text-anchor="middle">colesterol esterificado acumulado (não digerido)</text>
          </svg>`
      },
      {
        titulo: "Mapa das cinco alternativas",
        legenda: "Todas as organelas erradas lidam com lipídeos de alguma forma, mas só o lisossomo abriga a via específica da lipase ácida.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <text x="30" y="15" fill="#94a3b8" font-size="9">Organela</text>
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>

            <rect x="15" y="30" width="430" height="27" rx="5" fill="#065f46" opacity="0.35"/>
            <text x="30" y="48" fill="#6ee7b7" font-size="10" font-weight="bold">A — Lisossomos</text>
            <text x="400" y="48" fill="#34d399" font-size="12" text-anchor="middle" font-weight="bold">✓</text>

            <text x="30" y="75" fill="#e2e8f0" font-size="10">B — Ribossomos</text>
            <text x="400" y="75" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="101" fill="#e2e8f0" font-size="10">C — Mitocôndrias</text>
            <text x="400" y="101" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="127" fill="#e2e8f0" font-size="10">D — Peroxissomos</text>
            <text x="400" y="127" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="153" fill="#e2e8f0" font-size="10">E — Retículo endoplasmático liso</text>
            <text x="400" y="153" fill="#f87171" font-size="12" text-anchor="middle">✕</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: teste a atividade da lipase ácida no lisossomo",
      descricao: "Ajuste o quanto de lipase ácida funcional a célula tem e observe o acúmulo de colesterol esterificado dentro do lisossomo.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Atividade da lipase ácida</span><span class="text-emerald-300 font-bold" data-out="atividade">80%</span>
              </label>
              <input type="range" data-sim="atividade" min="0" max="100" value="80" step="5" class="w-full accent-emerald-500">
              <p class="text-[10px] text-slate-500 mt-1"><i class="fa-solid fa-flask"></i> 0% = enzima ausente (doença); 100% = enzima totalmente funcional.</p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-emerald-300 font-bold">Lipídeos degradados</span>
                  <span class="text-emerald-300 font-mono" data-out="degradado">80%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="degradado" class="h-full bg-emerald-500 transition-all" style="width:80%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-rose-300 font-bold">Colesterol/triglicerídeos acumulados</span>
                  <span class="text-rose-300 font-mono" data-out="acumulado">20%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="acumulado" class="h-full bg-rose-500 transition-all" style="width:20%"></div>
                </div>
              </div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var campo = raiz.querySelector('[data-sim="atividade"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };

        function atualizar() {
          var at = parseFloat(campo.value);
          var acumulado = 100 - at;

          saida('atividade').textContent = at.toFixed(0) + '%';
          saida('degradado').textContent = at.toFixed(0) + '%';
          saida('acumulado').textContent = acumulado.toFixed(0) + '%';
          barra('degradado').style.width = at + '%';
          barra('acumulado').style.width = acumulado + '%';

          var v = saida('veredito');
          if (at >= 60) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            v.innerHTML = '<strong>Célula saudável.</strong> A lipase ácida degrada normalmente o colesterol esterificado e os triglicerídeos dentro do lisossomo.';
          } else if (at >= 20) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            v.innerHTML = '<strong>Deficiência parcial.</strong> Parte dos lipídeos já começa a se acumular dentro do lisossomo, sobrecarregando a célula aos poucos.';
          } else {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200';
            v.innerHTML = '<strong>Quadro da doença.</strong> Quase sem atividade enzimática, o colesterol esterificado e os triglicerídeos se acumulam maciçamente no lisossomo — exatamente o que ocorre no fígado dos pacientes descritos no enunciado.';
          }
        }

        campo.addEventListener('input', atualizar);
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-emerald-300 block"><i class="fa-solid fa-microscope"></i> Falta de Lipase Ácida → Sem Degradação → Depósito no Lisossomo (Fígado)</span>
        <svg viewBox="0 0 460 100" class="w-full h-24 mx-auto">
          <rect x="20" y="30" width="140" height="40" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
          <text x="90" y="54" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">Falta lipase ácida</text>
          <text x="220" y="54" fill="#34d399" font-size="14" text-anchor="middle">→</text>
          <rect x="245" y="30" width="90" height="40" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
          <text x="290" y="54" fill="#e2e8f0" font-size="8" font-weight="bold" text-anchor="middle">Sem digestão</text>
          <text x="395" y="54" fill="#34d399" font-size="14" text-anchor="middle">→</text>
          <text x="425" y="54" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">Depósito</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q104",
    numero: "Questão 104",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "biologia",
    materia: "Biologia / Ecologia & Ciclo do Carbono",
    materiaCor: "emerald",
    materiaIcone: "fa-tree",
    titulo: "Remoção x Redução de Emissões: Por que Plantar Árvores é a Única Ação que Tira CO2 do Ar",
    tags: ["Biologia", "Ecologia", "Ciclo do Carbono", "Mudanças Climáticas", "Fotossíntese", "Sequestro de Carbono"],
    alternativaCorreta: "A",
    userNotes: "",
    userCustomImage: null,

    enunciado: `A quantidade de CO2 na atmosfera da Terra aumentou 50%, e a temperatura está agora cerca de 1,2 °C mais quente em comparação ao século XIX. O ritmo de aumento da temperatura precisa diminuir se quisermos evitar as piores consequências das mudanças climáticas. Cientistas afirmam que o aquecimento global precisa ser mantido em 1,5°C até o ano 2100. No entanto, a menos que outras ações sejam tomadas, o planeta ainda pode aquecer mais de 2 °C até final deste século. Na prática, os países precisam enfrentar as mudanças climáticas com ações mitigadoras, que reduzam tanto as emissões quanto os níveis de CO2 na atmosfera.
    <br><br>
    Um guia rápido para entender as mudanças climáticas. Disponível em: www.bbc.com. Acesso em: 6 dez. 2021 (adaptado).
    <br><br>
    Qual ação mitigadora auxilia na remoção desse gás presente na atmosfera, reduzindo seus níveis?`,

    alternativas: [
      { letra: "A", texto: "Plantar mais árvores.", correta: true },
      { letra: "B", texto: "Instalar mais usinas eólicas.", correta: false },
      { letra: "C", texto: "Ampliar o uso de energia solar.", correta: false },
      { letra: "D", texto: "Manter os combustíveis fósseis no solo.", correta: false },
      { letra: "E", texto: "Produzir menos resíduos sólidos urbanos.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-emerald-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre a diferença entre reduzir emissões e remover CO2 já presente na atmosfera — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">1.</span> Duas famílias de ação climática, o enunciado já as separa</h4>
          <p>
            O próprio texto do enunciado usa duas palavras diferentes de propósito: ações que <strong>"reduzam as emissões"</strong> e ações que reduzam <strong>"os níveis de CO2 na atmosfera"</strong>. São coisas distintas:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-slate-300 block mb-1">Reduzir emissões (evitar que entre)</strong>
              Impede que <strong>novo</strong> CO2 seja lançado na atmosfera — por exemplo, trocando uma usina termelétrica a carvão por uma fonte que não queima combustível fóssil.
            </div>
            <div class="p-3 bg-emerald-950/30 rounded-lg border border-emerald-500/30">
              <strong class="text-emerald-300 block mb-1">Remover CO2 (tirar o que já está lá)</strong>
              Retira CO2 que <strong>já está</strong> na atmosfera, diminuindo o estoque acumulado — é isso que a pergunta pede especificamente.
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">2.</span> A fotossíntese como mecanismo biológico de remoção</h4>
          <p>
            Plantas realizam fotossíntese, capturando CO2 atmosférico e convertendo-o em glicose e outras moléculas orgânicas que formam sua própria biomassa (tronco, raízes, folhas):
          </p>
          $$6\\,CO_2 + 6\\,H_2O + \\text{luz} \\rightarrow C_6H_{12}O_6 + 6\\,O_2$$
          <p>
            Cada árvore, ao crescer, fixa fisicamente carbono atmosférico em seu próprio corpo. Florestas funcionam, portanto, como <strong>sumidouros de carbono</strong> (carbon sinks): retiram CO2 do ar de forma ativa e contínua, e não apenas evitam que novo CO2 seja emitido.
          </p>
          <p class="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-3 text-xs">
            <strong class="text-emerald-300">É por isso que plantar mais árvores responde exatamente à pergunta:</strong> é uma ação que remove CO2 já presente na atmosfera, reduzindo seus níveis — não apenas uma ação que evita emissões futuras.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">3.</span> Por que energia eólica e solar não removem CO2 do ar</h4>
          <p>
            Usinas eólicas e solares geram eletricidade sem queimar combustíveis fósseis. Isso é extremamente importante para o clima — mas o efeito é <strong>evitar que emissões futuras aconteçam</strong>, substituindo uma fonte poluente por uma limpa. Nenhuma delas retira uma molécula sequer de CO2 que já esteja na atmosfera.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">4.</span> Por que manter combustíveis fósseis no solo também é prevenção, não remoção</h4>
          <p>
            Se o petróleo, carvão ou gás natural permanecem no subsolo, o carbono neles armazenado nunca chega a ser queimado e liberado como CO2. É uma estratégia de <strong>evitar emissão futura</strong> — trata do carbono que ainda não está no ar, não do que já está.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">5.</span> Por que reduzir resíduos sólidos também é prevenção</h4>
          <p>
            Menos lixo em aterros significa menos decomposição orgânica gerando gases de efeito estufa (metano e CO2) no futuro. De novo, isso <strong>evita nova emissão</strong> — não retira o CO2 que já está acumulado na atmosfera desde o século XIX.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">6.</span> A distinção que resolve a questão</h4>
          <p>
            Das cinco ações, quatro atuam na <strong>torneira</strong> (evitando que mais CO2 entre no sistema); apenas uma atua no <strong>ralo</strong> (retirando CO2 que já está no sistema). Fotossíntese em larga escala, via reflorestamento, é o mecanismo biológico responsável por essa remoção.
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
            <strong>Passo 1 — Grife a palavra "remoção" no enunciado.</strong> A pergunta não pede qualquer ação mitigadora — pede especificamente uma que retire CO2 já presente no ar.
            <br><br>
            <strong>Passo 2 — Para cada alternativa, pergunte: isso evita emissão futura, ou tira CO2 que já está lá?</strong> Só uma resposta realmente remove.
          </p>
        </div>

        <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/40 space-y-2">
          <h4 class="font-bold text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa A — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            "Plantar mais árvores." Por meio da fotossíntese, árvores capturam CO2 já presente na atmosfera e o fixam como biomassa. É a única alternativa que age diretamente sobre o estoque de CO2 já acumulado, reduzindo seus níveis — exatamente o que a pergunta pede.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — instalar mais usinas eólicas</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> energia eólica é "verde" e ajuda o clima, então parece uma resposta óbvia.
              <br>
              <strong>Onde quebra:</strong> gera eletricidade sem emitir CO2 novo, mas não retira nada do CO2 já existente na atmosfera. É prevenção de emissão futura, não remoção.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa C — ampliar o uso de energia solar</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> mesma lógica da eólica — soa como uma solução climática direta.
              <br>
              <strong>Onde quebra:</strong> mesmo mecanismo da alternativa B: substitui uma fonte emissora, evitando emissões futuras, sem remover CO2 do estoque atmosférico atual.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa D — manter os combustíveis fósseis no solo</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> parece uma ação sobre "o carbono", então pode confundir com remoção.
              <br>
              <strong>Onde quebra:</strong> trata do carbono que ainda não foi liberado — impede uma emissão futura, mas não afeta o CO2 que já está na atmosfera desde o século XIX.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — produzir menos resíduos sólidos urbanos</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lixo em decomposição libera gases de efeito estufa, então parece ligado ao CO2 atmosférico.
              <br>
              <strong>Onde quebra:</strong> reduz a geração futura de metano e CO2 pela decomposição — de novo, prevenção de emissão, não remoção do que já está no ar.
            </p>
          </div>
        </div>

        <div class="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/30">
          <strong class="text-emerald-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            As quatro alternativas erradas são, todas, boas políticas climáticas reais — mas todas atuam evitando <strong>emissões futuras</strong>, não removendo o CO2 que já está na atmosfera. Só o reflorestamento, via fotossíntese, faz o caminho inverso: retira o gás do ar.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-tree", titulo: "Sumidouro de Carbono", text: "Floresta que captura e armazena CO2 atmosférico como biomassa, via fotossíntese." },
      { icone: "fa-leaf", titulo: "Fotossíntese", text: "6CO2 + 6H2O + luz → C6H12O6 + 6O2 — o mecanismo biológico de fixação do carbono." },
      { icone: "fa-faucet", titulo: "Redução de Emissão", text: "Evitar que novo CO2 entre na atmosfera (energias limpas, manter combustíveis no solo)." },
      { icone: "fa-arrow-down", titulo: "Remoção de CO2", text: "Retirar CO2 já presente na atmosfera, reduzindo o estoque acumulado — só a reflorestação faz isso entre as opções." },
      { icone: "fa-scale-balanced", titulo: "Torneira x Ralo", text: "Prevenção fecha a torneira de novas emissões; remoção abre o ralo do estoque já existente." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Torneira x ralo do CO2 atmosférico",
        legenda: "Emissões enchem o estoque de CO2 (torneira); remoção biológica o esvazia (ralo). A maioria das ações climáticas fecha a torneira — só a reflorestação abre o ralo.",
        svg: `
          <svg viewBox="0 0 460 170" class="w-full h-auto">
            <rect x="150" y="30" width="160" height="90" fill="#0c4a6e" opacity="0.4" stroke="#38bdf8" stroke-width="2"/>
            <text x="230" y="20" fill="#94a3b8" font-size="9" font-weight="bold" text-anchor="middle">Estoque de CO2 atmosférico</text>
            <line x1="180" y1="10" x2="180" y2="30" stroke="#f87171" stroke-width="3" marker-end="url(#pq104)"/>
            <text x="150" y="8" fill="#fca5a5" font-size="8" font-weight="bold">torneira: emissões</text>
            <line x1="280" y1="120" x2="280" y2="150" stroke="#34d399" stroke-width="3" marker-end="url(#pq104)"/>
            <text x="235" y="165" fill="#6ee7b7" font-size="8" font-weight="bold">ralo: remoção (árvores)</text>
            <defs>
              <marker id="pq104" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Fotossíntese fixando carbono na árvore",
        legenda: "O CO2 atmosférico entra pelas folhas e é convertido em biomassa — tronco, raízes, galhos — retirando ativamente o gás do ar.",
        svg: `
          <svg viewBox="0 0 460 160" class="w-full h-auto">
            <circle cx="230" cy="60" r="45" fill="#065f46" stroke="#34d399" stroke-width="2"/>
            <rect x="220" y="95" width="20" height="55" fill="#78350f" stroke="#92400e" stroke-width="1.5"/>
            <text x="90" y="45" fill="#fca5a5" font-size="9" font-weight="bold">CO2</text>
            <line x1="110" y1="48" x2="185" y2="55" stroke="#f87171" stroke-width="2" marker-end="url(#pq104b)"/>
            <text x="370" y="45" fill="#fde68a" font-size="9" font-weight="bold">O2</text>
            <line x1="275" y1="55" x2="355" y2="48" stroke="#fbbf24" stroke-width="2" marker-end="url(#pq104b)"/>
            <text x="230" y="150" fill="#6ee7b7" font-size="8" text-anchor="middle">carbono fixado como biomassa</text>
            <defs>
              <marker id="pq104b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/>
              </marker>
            </defs>
          </svg>`
      },
      {
        titulo: "Quatro ações de prevenção, uma de remoção",
        legenda: "Eólica, solar, combustível no solo e menos resíduos evitam emissão futura. Só plantar árvores retira o CO2 que já está no ar.",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <rect x="20" y="20" width="200" height="110" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2"/>
            <text x="120" y="40" fill="#94a3b8" font-size="9" font-weight="bold" text-anchor="middle">Prevenção (evitam emissão)</text>
            <text x="35" y="60" fill="#cbd5e1" font-size="8">• Usinas eólicas</text>
            <text x="35" y="78" fill="#cbd5e1" font-size="8">• Energia solar</text>
            <text x="35" y="96" fill="#cbd5e1" font-size="8">• Combustível fóssil no solo</text>
            <text x="35" y="114" fill="#cbd5e1" font-size="8">• Menos resíduos sólidos</text>

            <rect x="255" y="45" width="185" height="60" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2"/>
            <text x="347" y="65" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">Remoção (tira o CO2 do ar)</text>
            <text x="347" y="85" fill="#d1fae5" font-size="9" font-weight="bold" text-anchor="middle">Plantar mais árvores</text>
          </svg>`
      },
      {
        titulo: "Mapa das cinco alternativas",
        legenda: "Só a alternativa A responde à pergunta específica sobre remoção de CO2 já presente na atmosfera.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <text x="30" y="15" fill="#94a3b8" font-size="9">Alternativa</text>
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>

            <rect x="15" y="30" width="430" height="27" rx="5" fill="#065f46" opacity="0.35"/>
            <text x="30" y="48" fill="#6ee7b7" font-size="10" font-weight="bold">A — Plantar mais árvores</text>
            <text x="400" y="48" fill="#34d399" font-size="12" text-anchor="middle" font-weight="bold">✓</text>

            <text x="30" y="75" fill="#e2e8f0" font-size="10">B — Usinas eólicas</text>
            <text x="400" y="75" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="101" fill="#e2e8f0" font-size="10">C — Energia solar</text>
            <text x="400" y="101" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="127" fill="#e2e8f0" font-size="10">D — Combustível fóssil no solo</text>
            <text x="400" y="127" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="153" fill="#e2e8f0" font-size="10">E — Menos resíduos sólidos</text>
            <text x="400" y="153" fill="#f87171" font-size="12" text-anchor="middle">✕</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: prevenção x remoção de CO2",
      descricao: "Escolha uma ação climática e veja se ela evita emissão futura ou remove CO2 já presente na atmosfera.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-2 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <p class="text-[11px] text-slate-400 mb-1">Escolha a ação:</p>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q104acao" data-sim="acao" value="arvores" checked class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Plantar mais árvores</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q104acao" data-sim="acao" value="eolica" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Usinas eólicas</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q104acao" data-sim="acao" value="solar" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Energia solar</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q104acao" data-sim="acao" value="fossil" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Combustível fóssil no solo</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q104acao" data-sim="acao" value="residuos" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Menos resíduos sólidos</span>
            </label>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-sky-300 font-bold">Evita emissão futura</span>
                  <span class="text-sky-300 font-mono" data-out="prevencao">0%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="prevencao" class="h-full bg-sky-500 transition-all" style="width:0%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-emerald-300 font-bold">Remove CO2 já presente</span>
                  <span class="text-emerald-300 font-mono" data-out="remocao">100%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="remocao" class="h-full bg-emerald-500 transition-all" style="width:100%"></div>
                </div>
              </div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var radios = raiz.querySelectorAll('[data-sim="acao"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };

        var dados = {
          arvores: { prevencao: 0, remocao: 100, texto: 'Fotossíntese captura CO2 já presente no ar e o fixa como biomassa — remoção pura.' },
          eolica: { prevencao: 100, remocao: 0, texto: 'Gera energia sem queimar combustível fóssil — evita emissão futura, não remove o que já está no ar.' },
          solar: { prevencao: 100, remocao: 0, texto: 'Mesmo mecanismo da eólica: previne emissões futuras, não retira CO2 do estoque atual.' },
          fossil: { prevencao: 100, remocao: 0, texto: 'O carbono nunca sai do solo, então nunca chega a ser emitido — prevenção, não remoção.' },
          residuos: { prevencao: 100, remocao: 0, texto: 'Menos decomposição em aterros significa menos gases futuros — de novo, prevenção.' }
        };

        function atualizar() {
          var acao = 'arvores';
          radios.forEach(function (r) { if (r.checked) acao = r.value; });
          var d = dados[acao];

          saida('prevencao').textContent = d.prevencao + '%';
          saida('remocao').textContent = d.remocao + '%';
          barra('prevencao').style.width = d.prevencao + '%';
          barra('remocao').style.width = d.remocao + '%';

          var v = saida('veredito');
          if (d.remocao > 0) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
          } else {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-sky-500/40 bg-sky-950/30 text-sky-200';
          }
          v.innerHTML = '<strong>' + (d.remocao > 0 ? 'Remoção: ' : 'Prevenção: ') + '</strong>' + d.texto;
        }

        radios.forEach(function (r) { r.addEventListener('change', atualizar); });
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-emerald-300 block"><i class="fa-solid fa-tree"></i> Fotossíntese: CO2 Atmosférico → Biomassa (Remoção Real)</span>
        <svg viewBox="0 0 460 100" class="w-full h-24 mx-auto">
          <rect x="20" y="30" width="140" height="40" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
          <text x="90" y="54" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">CO2 na atmosfera</text>
          <text x="220" y="54" fill="#34d399" font-size="14" text-anchor="middle">→</text>
          <rect x="245" y="30" width="90" height="40" rx="6" fill="#065f46" stroke="#34d399" stroke-width="2"/>
          <text x="290" y="54" fill="#d1fae5" font-size="8" font-weight="bold" text-anchor="middle">Fotossíntese</text>
          <text x="395" y="54" fill="#34d399" font-size="14" text-anchor="middle">→</text>
          <text x="425" y="54" fill="#a3e635" font-size="9" font-weight="bold" text-anchor="middle">Biomassa</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q105",
    numero: "Questão 105",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "quimica",
    materia: "Química / Físico-Química & Solubilidade de Gases",
    materiaCor: "cyan",
    materiaIcone: "fa-temperature-high",
    titulo: "Poluição Térmica em Usinas Nucleares: Por que Água Mais Quente Dissolve Menos Oxigênio",
    tags: ["Química", "Físico-Química", "Solubilidade de Gases", "Poluição Térmica", "Termoquímica", "Ecossistemas Aquáticos"],
    alternativaCorreta: "E",
    userNotes: "",
    userCustomImage: null,

    enunciado: `As usinas termonucleares são aquelas que produzem energia elétrica a partir da geração de energia térmica proveniente das reações nucleares. Normalmente, essas usinas funcionam por meio de dois circuitos, denominados circuito primário (vaso de pressão, pressurizador e bomba) e circuito secundário (gerador de vapor, turbina, condensador, tanque de alimentação e bombas), além de um sistema de água de refrigeração, formado por uma bomba ligada a uma fonte hídrica natural.
    <br><br>
    Durante a operação da usina, se o sistema de água de refrigeração funcionar de forma ineficiente pode causar poluição térmica, comprometendo a vida no ecossistema aquático.
    <br><br>
    Disponível em: www.eletronuclear.gov.br. Acesso em: 29 nov. 2021 (adaptado).
    <br><br>
    Para o ecossistema aquático, a ineficiência do sistema de água de refrigeração tem como consequência a:`,

    alternativas: [
      { letra: "A", texto: "Diminuição do pH.", correta: false },
      { letra: "B", texto: "Liberação de gases poluentes.", correta: false },
      { letra: "C", texto: "Contaminação por combustíveis.", correta: false },
      { letra: "D", texto: "Liberação de elementos radioativos.", correta: false },
      { letra: "E", texto: "Diminuição da solubilidade do gás oxigênio.", correta: true }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-cyan-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre a relação entre temperatura e solubilidade de gases cobrada no Enem — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">1.</span> Como funciona (por fora) uma usina termonuclear</h4>
          <p>
            O <strong>circuito primário</strong> troca calor diretamente com o reator nuclear. Esse calor é transferido, através de um gerador de vapor, para o <strong>circuito secundário</strong>: a água vira vapor, o vapor move a turbina (que gera eletricidade), e depois precisa ser resfriado e condensado de volta a líquido para reiniciar o ciclo. É aí que entra o <strong>sistema de água de refrigeração</strong>: ele retira calor do condensador do circuito secundário usando água de uma fonte natural (rio, lago, mar), e depois devolve essa água — agora mais quente — de volta ao ambiente.
          </p>
          <p class="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-3 text-xs">
            <strong class="text-cyan-300">Ponto crucial de isolamento:</strong> a água de refrigeração troca calor pelas paredes do condensador — ela não entra em contato direto com o reator nem com material radioativo do circuito primário. Fisicamente, ela só recebe <strong>calor</strong>, nada mais.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">2.</span> O que é poluição térmica</h4>
          <p>
            Se o sistema de refrigeração funciona mal (por exemplo, vazão insuficiente ou falha em dissipar o calor), a água devolvida ao corpo hídrico natural fica <strong>mais quente</strong> do que deveria. Esse aumento artificial de temperatura no ambiente aquático é chamado de <strong>poluição térmica</strong> — um tipo de poluição que não envolve substâncias químicas estranhas, apenas excesso de energia térmica.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">3.</span> Por que água mais quente dissolve menos gás</h4>
          <p>
            Para a maioria dos <strong>sólidos</strong> dissolvidos em água, aumentar a temperatura aumenta a solubilidade. Mas para <strong>gases</strong> dissolvidos em líquidos, a relação é o contrário: a solubilidade <strong>diminui</strong> com o aumento da temperatura.
          </p>
          <p>
            A explicação está na energia cinética das moléculas: com mais calor, as moléculas do gás dissolvido ganham energia cinética suficiente para escapar mais facilmente da fase líquida, retornando à fase gasosa. É o mesmo motivo pelo qual um refrigerante gelado mantém o gás carbônico dissolvido (mais "gaseificado"), enquanto um refrigerante quente perde as bolhas rapidamente.
          </p>
          <p class="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-3 text-xs">
            <strong class="text-cyan-300">Aplicando ao caso:</strong> água mais quente no rio ou lago dissolve <strong>menos oxigênio</strong> (O2) do ar. Isso reduz o oxigênio disponível para peixes e outros organismos aquáticos respirarem, comprometendo a vida no ecossistema.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">4.</span> Um paralelo útil: o mesmo efeito final, causas diferentes</h4>
          <p>
            Note a semelhança com a questão da eutrofização (queda de oxigênio dissolvido por consumo de decompositores): o efeito final — menos O2 para os organismos aquáticos — é parecido, mas a <strong>causa física</strong> aqui é totalmente diferente. Não há decomposição nem consumo biológico de oxigênio; é a própria física da solubilidade que muda com a temperatura.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">5.</span> Por que não é vazamento radioativo, químico ou de pH</h4>
          <p>
            O enunciado descreve uma falha específica: o <strong>sistema de água de refrigeração</strong> funcionando mal — não uma falha no circuito primário nem um vazamento de material radioativo ou combustível nuclear. Sem contato com esses materiais, a água de refrigeração não pode transportá-los para o ambiente. O único efeito físico direto de uma refrigeração ineficiente é o excesso de calor liberado — e sua consequência químico-física mais direta é justamente a queda de solubilidade de gases, incluindo o oxigênio.
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
            <i class="fa-solid fa-list-check text-cyan-400"></i> Estratégia em 2 passos
          </h4>
          <p class="text-slate-300 leading-relaxed">
            <strong>Passo 1 — Identifique exatamente qual sistema falhou.</strong> É a refrigeração (troca de calor), não o reator nem o circuito primário. Isso já limita a consequência a algo térmico, não radioativo ou químico.
            <br><br>
            <strong>Passo 2 — Lembre a regra de solubilidade de gases em líquidos.</strong> Mais temperatura = menos gás dissolvido. Aplique isso ao oxigênio da água.
          </p>
        </div>

        <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/40 space-y-2">
          <h4 class="font-bold text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa E — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            "Diminuição da solubilidade do gás oxigênio." A poluição térmica eleva a temperatura da água natural. Como a solubilidade de gases em líquidos cai com o aumento da temperatura, menos O2 fica dissolvido — comprometendo diretamente a respiração dos organismos aquáticos, exatamente como o enunciado descreve.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa A — diminuição do pH</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> associar qualquer "poluição" a acidificação da água.
              <br>
              <strong>Onde quebra:</strong> a água de refrigeração não introduz ácidos nem espécies químicas novas — o efeito é puramente térmico. Não há mecanismo direto ligando o aumento de temperatura, por si só, a uma queda de pH nesse cenário.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — liberação de gases poluentes</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> lembrar que usinas em geral (termelétricas a combustível fóssil) liberam gases poluentes na queima.
              <br>
              <strong>Onde quebra:</strong> usinas nucleares não queimam combustível fóssil, e o sistema de refrigeração aqui descrito só troca calor — não gera nem libera gases poluentes.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa C — contaminação por combustíveis</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> imaginar vazamento de combustível nuclear junto com a água de resfriamento.
              <br>
              <strong>Onde quebra:</strong> o combustível nuclear fica isolado no circuito primário, sem contato com a água de refrigeração — a falha descrita é de troca de calor, não de contenção do combustível.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa D — liberação de elementos radioativos</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> é a associação mais intuitiva com "usina nuclear" — muita gente marca essa por medo/preconceito com o tema, sem checar o mecanismo.
              <br>
              <strong>Onde quebra:</strong> o sistema de água de refrigeração é fisicamente separado do circuito primário radioativo; ele não tem contato com material radioativo. Uma falha nele causa aquecimento da água, não contaminação radioativa.
            </p>
          </div>
        </div>

        <div class="p-3 bg-cyan-950/30 rounded-xl border border-cyan-500/30">
          <strong class="text-cyan-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            As alternativas erradas exploram associações emocionais ou genéricas com "usina nuclear" e "poluição" (radioatividade, combustível, gases, acidez), sem verificar qual sistema específico falhou. A leitura cuidadosa do enunciado isola o problema em um único fenômeno físico: excesso de calor, que reduz a solubilidade de gases.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-temperature-high", titulo: "Poluição Térmica", text: "Aumento artificial da temperatura de um corpo d'água, sem introdução de substâncias químicas estranhas." },
      { icone: "fa-droplet", titulo: "Solubilidade de Gases", text: "Ao contrário dos sólidos, a solubilidade de gases em líquidos diminui com o aumento da temperatura." },
      { icone: "fa-fish", titulo: "Hipóxia por Aquecimento", text: "Menos O2 dissolvido em água mais quente prejudica a respiração de organismos aquáticos." },
      { icone: "fa-shield-halved", titulo: "Isolamento entre Circuitos", text: "A água de refrigeração troca só calor com o condensador — não tem contato com material radioativo." },
      { icone: "fa-arrows-split-up-and-left", titulo: "Circuito Primário x Secundário", text: "Primário troca calor com o reator; secundário gera vapor para a turbina; refrigeração resfria o secundário." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Os três sistemas da usina, isolados entre si",
        legenda: "Circuito primário (radioativo, fechado), circuito secundário (gera vapor) e sistema de refrigeração (só troca calor com fonte hídrica externa).",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <rect x="20" y="30" width="120" height="80" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
            <text x="80" y="55" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">Circuito</text>
            <text x="80" y="68" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">primário</text>
            <text x="80" y="90" fill="#fca5a5" font-size="7" text-anchor="middle">(radioativo, fechado)</text>

            <rect x="170" y="30" width="120" height="80" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
            <text x="230" y="55" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">Circuito</text>
            <text x="230" y="68" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">secundário</text>
            <text x="230" y="90" fill="#e2e8f0" font-size="7" text-anchor="middle">(vapor → turbina)</text>

            <rect x="320" y="30" width="120" height="80" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2"/>
            <text x="380" y="55" fill="#bae6fd" font-size="9" font-weight="bold" text-anchor="middle">Refrigeração</text>
            <text x="380" y="90" fill="#bae6fd" font-size="7" text-anchor="middle">(só troca calor)</text>

            <text x="155" y="75" fill="#64748b" font-size="14" text-anchor="middle">|</text>
            <text x="305" y="75" fill="#64748b" font-size="14" text-anchor="middle">|</text>
          </svg>`
      },
      {
        titulo: "Solubilidade do O2 em função da temperatura",
        legenda: "Quanto mais quente a água, menos oxigênio ela consegue manter dissolvido — o oposto do que ocorre com a maioria dos sais sólidos.",
        svg: `
          <svg viewBox="0 0 460 170" class="w-full h-auto">
            <line x1="55" y1="140" x2="435" y2="140" stroke="#64748b" stroke-width="2"/>
            <line x1="55" y1="20" x2="55" y2="140" stroke="#64748b" stroke-width="2"/>
            <text x="48" y="26" fill="#94a3b8" font-size="8" text-anchor="end">O2 dissolvido</text>
            <text x="430" y="158" fill="#94a3b8" font-size="8" text-anchor="end">temperatura</text>
            <polyline points="65,45 150,60 240,85 330,110 425,130" fill="none" stroke="#38bdf8" stroke-width="3"/>
            <circle cx="120" cy="65" r="4" fill="#34d399"/>
            <text x="120" y="50" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">água natural</text>
            <circle cx="360" cy="118" r="4" fill="#f87171"/>
            <text x="360" y="105" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">água aquecida</text>
          </svg>`
      },
      {
        titulo: "Efeito na vida aquática",
        legenda: "Com menos O2 dissolvido, peixes e outros organismos aquáticos têm dificuldade para respirar — mesmo sem qualquer substância tóxica na água.",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <rect x="30" y="30" width="180" height="80" fill="#0c4a6e" opacity="0.4" stroke="#38bdf8" stroke-width="2"/>
            <text x="120" y="20" fill="#94a3b8" font-size="9" font-weight="bold" text-anchor="middle">Água natural (fria)</text>
            <circle cx="70" cy="60" r="3" fill="#e2e8f0"/>
            <circle cx="95" cy="75" r="3" fill="#e2e8f0"/>
            <circle cx="130" cy="55" r="3" fill="#e2e8f0"/>
            <circle cx="160" cy="80" r="3" fill="#e2e8f0"/>
            <circle cx="180" cy="60" r="3" fill="#e2e8f0"/>
            <text x="120" y="100" fill="#bae6fd" font-size="8" text-anchor="middle">peixes respiram bem</text>

            <rect x="250" y="30" width="180" height="80" fill="#450a0a" opacity="0.3" stroke="#f87171" stroke-width="2"/>
            <text x="340" y="20" fill="#94a3b8" font-size="9" font-weight="bold" text-anchor="middle">Água aquecida</text>
            <circle cx="290" cy="70" r="3" fill="#e2e8f0"/>
            <circle cx="380" cy="65" r="3" fill="#e2e8f0"/>
            <text x="340" y="100" fill="#fca5a5" font-size="8" text-anchor="middle">poucos peixes, hipóxia</text>
          </svg>`
      },
      {
        titulo: "Mapa das cinco alternativas",
        legenda: "Só a solubilidade do oxigênio se relaciona diretamente com o mecanismo físico de uma refrigeração ineficiente.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <text x="30" y="15" fill="#94a3b8" font-size="9">Alternativa</text>
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>

            <text x="30" y="42" fill="#e2e8f0" font-size="10">A — Diminuição do pH</text>
            <text x="400" y="42" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="69" fill="#e2e8f0" font-size="10">B — Gases poluentes</text>
            <text x="400" y="69" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="96" fill="#e2e8f0" font-size="10">C — Contaminação por combustíveis</text>
            <text x="400" y="96" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="123" fill="#e2e8f0" font-size="10">D — Elementos radioativos</text>
            <text x="400" y="123" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <rect x="15" y="134" width="430" height="27" rx="5" fill="#0e7490" opacity="0.35"/>
            <text x="30" y="152" fill="#67e8f9" font-size="10" font-weight="bold">E — Diminuição da solubilidade do O2</text>
            <text x="400" y="152" fill="#22d3ee" font-size="12" text-anchor="middle" font-weight="bold">✓</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: temperatura da água x oxigênio dissolvido",
      descricao: "Controle a eficiência da refrigeração e observe o efeito sobre a temperatura da água descartada e o oxigênio disponível para a vida aquática.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Eficiência da refrigeração</span><span class="text-cyan-300 font-bold" data-out="eficiencia">80%</span>
              </label>
              <input type="range" data-sim="eficiencia" min="0" max="100" value="80" step="5" class="w-full accent-cyan-500">
              <p class="text-[10px] text-slate-500 mt-1"><i class="fa-solid fa-flask"></i> 100% = refrigeração ideal; 0% = falha total, água devolvida muito quente.</p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-rose-300 font-bold">Temperatura da água descartada</span>
                  <span class="text-rose-300 font-mono" data-out="temp">28°C</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="temp" class="h-full bg-rose-500 transition-all" style="width:20%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-sky-300 font-bold">O2 dissolvido disponível</span>
                  <span class="text-sky-300 font-mono" data-out="o2">85%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="o2" class="h-full bg-sky-500 transition-all" style="width:85%"></div>
                </div>
              </div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var campo = raiz.querySelector('[data-sim="eficiencia"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };

        function atualizar() {
          var ef = parseFloat(campo.value);
          var temp = 20 + (100 - ef) * 0.3;
          var o2 = Math.max(5, ef);

          saida('eficiencia').textContent = ef.toFixed(0) + '%';
          saida('temp').textContent = temp.toFixed(0) + '°C';
          saida('o2').textContent = o2.toFixed(0) + '%';
          barra('temp').style.width = Math.min(100, (temp - 20) / 30 * 100) + '%';
          barra('o2').style.width = o2 + '%';

          var v = saida('veredito');
          if (ef >= 70) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            v.innerHTML = '<strong>Refrigeração eficiente.</strong> Água devolvida próxima da temperatura natural — oxigênio dissolvido em nível seguro para a vida aquática.';
          } else if (ef >= 30) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            v.innerHTML = '<strong>Poluição térmica moderada.</strong> A água sai mais quente, e a solubilidade do O2 já começa a cair — estresse para organismos aquáticos.';
          } else {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200';
            v.innerHTML = '<strong>Poluição térmica severa.</strong> Água muito mais quente que o natural, solubilidade do oxigênio despenca — risco real de hipóxia para peixes e outros organismos.';
          }
        }

        campo.addEventListener('input', atualizar);
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-cyan-300 block"><i class="fa-solid fa-temperature-high"></i> Refrigeração Ineficiente → Água Mais Quente → Menos O2 Dissolvido</span>
        <svg viewBox="0 0 460 100" class="w-full h-24 mx-auto">
          <rect x="20" y="30" width="140" height="40" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2"/>
          <text x="90" y="54" fill="#bae6fd" font-size="9" font-weight="bold" text-anchor="middle">Refrigeração falha</text>
          <text x="220" y="54" fill="#22d3ee" font-size="14" text-anchor="middle">→</text>
          <rect x="245" y="30" width="90" height="40" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
          <text x="290" y="54" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">Água + quente</text>
          <text x="395" y="54" fill="#22d3ee" font-size="14" text-anchor="middle">→</text>
          <text x="425" y="54" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">↓ O2</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q106",
    numero: "Questão 106",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "quimica",
    materia: "Química / História da Química & Fórmulas",
    materiaCor: "cyan",
    materiaIcone: "fa-atom",
    titulo: "Notação Química de 1909: Decifrando Fórmulas Antigas com Azoto e Números Sobrescritos",
    tags: ["Química", "História da Química", "Fórmulas Químicas", "Nomenclatura", "Notação Científica", "Estequiometria"],
    alternativaCorreta: "A",
    userNotes: "",
    userCustomImage: null,

    enunciado: `No início do século XX, as fórmulas das substâncias eram representadas de modo diferente do atual. A figura apresenta uma fotografia bem antiga (1909) que registra uma aula de química ministrada em um colégio em Santos (SP). Um olhar mais atento permite identificar como os compostos químicos eram representados.
    <br><br>
    <div class="bg-slate-900 border border-slate-700 rounded-lg p-3 font-mono text-xs text-slate-300 my-2">
      AzO + O = AzO²<br>
      SO² + H²O = H²SO³<br>
      2 H²SO³ + O² = 2 H²SO⁴<br>
      2 HCl + MgO²H² = MgCl² + 2 H²O
    </div>
    Disponível em: www.novomilenio.inf.br. Acesso em: 29 ago. 2014 (adaptado).
    <br><br>
    O nitrogênio era chamado de azoto e representado pelo símbolo Az. Vê-se na lousa a equação representativa da adição do oxigênio atômico (O) ao monóxido de nitrogênio (AzO) com a formação de dióxido de nitrogênio (AzO²). Analogamente, o nitrato de sódio era representado por NaAzO³.
    <br><br>
    Em 1909, as representações das substâncias ácido nítrico e cloreto de cálcio, tendo por base essas informações e seguindo a mesma lógica, seriam, respectivamente:`,

    alternativas: [
      { letra: "A", texto: "HAzO³ e CaCl²", correta: true },
      { letra: "B", texto: "HAz³O e Ca²Cl", correta: false },
      { letra: "C", texto: "H³AzO⁴ e CaCl", correta: false },
      { letra: "D", texto: "HAz³O e KCl²", correta: false },
      { letra: "E", texto: "HAzO² e KCl", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-cyan-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre como "traduzir" uma notação química antiga para a moderna — a questão é só a aplicação final.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">1.</span> "Azoto": o nome antigo do nitrogênio</h4>
          <p>
            Antes da nomenclatura química se padronizar internacionalmente, o nitrogênio era comumente chamado de <strong>azoto</strong> (do grego "sem vida", porque não sustenta a combustão nem a respiração sozinho) — nome que ainda sobrevive em outras línguas (francês <em>azote</em>, italiano <em>azoto</em>, português de Portugal). Na fórmula antiga, o símbolo usado era <strong>Az</strong>, no lugar do atual <strong>N</strong>.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">2.</span> Os números na posição de cima, não embaixo</h4>
          <p>
            Repare nas equações da lousa: onde hoje escrevemos $H_2O$ (índice/subscrito), em 1909 se escrevia <strong>H²O</strong> (número na posição de cima, como um sobrescrito). É só uma diferença de <strong>estilo gráfico</strong> — o número representa exatamente a mesma coisa: a quantidade de átomos daquele elemento na fórmula. A química por trás é idêntica; muda apenas onde o número é escrito.
          </p>
          <p class="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-3 text-xs">
            <strong class="text-cyan-300">Regra de tradução:</strong> "elemento moderno" → substitua pelo nome antigo se ele mudou (nitrogênio → Az); "número subscrito moderno" → reescreva como sobrescrito, mantendo o mesmo valor.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">3.</span> Conferindo a regra com os exemplos dados</h4>
          <p>
            O próprio enunciado fornece duas "chaves de tradução" para testar a regra:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-cyan-300 block mb-1">AzO + O = AzO²</strong>
              Monóxido de nitrogênio ($NO$) + oxigênio atômico → dióxido de nitrogênio ($NO_2$). Bate exatamente: Az = N, e o "²" sobrescrito é o mesmo "2" subscrito moderno.
            </div>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong class="text-cyan-300 block mb-1">NaAzO³ = nitrato de sódio</strong>
              Nitrato de sódio moderno é $NaNO_3$. De novo: Az = N, "³" sobrescrito = "3" subscrito. A regra se confirma duas vezes.
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">4.</span> Aplicando a regra ao ácido nítrico</h4>
          <p>
            A fórmula moderna do ácido nítrico é $HNO_3$. Seguindo a mesma lógica:
          </p>
          <ul class="list-disc list-inside space-y-1 text-xs text-slate-300">
            <li>H permanece H (não muda de nome).</li>
            <li>N vira Az (mesma substituição confirmada nos exemplos).</li>
            <li>O permanece O.</li>
            <li>O subscrito 3 vira sobrescrito ³.</li>
          </ul>
          <p class="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-3 text-xs">
            <strong class="text-emerald-300">Resultado:</strong> $HNO_3 \\rightarrow$ <strong>HAzO³</strong>.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">5.</span> Aplicando a regra ao cloreto de cálcio</h4>
          <p>
            A fórmula moderna do cloreto de cálcio é $CaCl_2$. Nem o cálcio (Ca) nem o cloro (Cl) tiveram seu nome/símbolo alterado nessa notação antiga (isso já se confirma na última equação da lousa, onde $MgCl_2$ aparece como <strong>MgCl²</strong> — Mg e Cl mantêm os símbolos modernos). Então:
          </p>
          <ul class="list-disc list-inside space-y-1 text-xs text-slate-300">
            <li>Ca permanece Ca.</li>
            <li>Cl permanece Cl.</li>
            <li>O subscrito 2 vira sobrescrito ².</li>
          </ul>
          <p class="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-3 text-xs">
            <strong class="text-emerald-300">Resultado:</strong> $CaCl_2 \\rightarrow$ <strong>CaCl²</strong>.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">6.</span> A resposta completa</h4>
          <p>
            Juntando as duas traduções: ácido nítrico e cloreto de cálcio em 1909 seriam escritos, respectivamente, como <strong>HAzO³</strong> e <strong>CaCl²</strong> — exatamente as mesmas proporções atômicas de hoje, só com o nome antigo do nitrogênio e os números na posição de sobrescrito.
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
            <i class="fa-solid fa-list-check text-cyan-400"></i> Estratégia em 3 passos
          </h4>
          <p class="text-slate-300 leading-relaxed">
            <strong>Passo 1 — Escreva as fórmulas modernas primeiro.</strong> Ácido nítrico = $HNO_3$; cloreto de cálcio = $CaCl_2$.
            <br><br>
            <strong>Passo 2 — Troque N por Az.</strong> Confirmado pelos dois exemplos do enunciado (AzO2 e NaAzO3).
            <br><br>
            <strong>Passo 3 — Reescreva os números subscritos como sobrescritos, sem mudar o valor.</strong> $HNO_3 \\to HAzO^3$; $CaCl_2 \\to CaCl^2$.
          </p>
        </div>

        <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/40 space-y-2">
          <h4 class="font-bold text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Alternativa A — CORRETA
          </h4>
          <p class="text-slate-200 leading-relaxed">
            "HAzO³ e CaCl²." Aplica corretamente as duas regras extraídas do enunciado: substituir N por Az, e reescrever os subscritos modernos (3 no ácido nítrico, 2 no cloreto de cálcio) como sobrescritos — sem alterar nenhuma proporção atômica real.
          </p>
        </div>

        <div class="space-y-2">
          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa B — HAz³O e Ca²Cl</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> colocar o número "3" no elemento errado (Az em vez de O), e inventar um "2" no cálcio.
              <br>
              <strong>Onde quebra:</strong> no ácido nítrico há 1 nitrogênio e 3 oxigênios — o número pertence ao O, não ao Az. E no cloreto de cálcio moderno ($CaCl_2$) o índice 2 pertence ao cloro, não ao cálcio.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa C — H³AzO⁴ e CaCl</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> inventar proporções (3 hidrogênios, 4 oxigênios) que não correspondem à fórmula real do ácido nítrico, e esquecer o índice 2 no cloreto de cálcio.
              <br>
              <strong>Onde quebra:</strong> $HNO_3$ tem 1 H, 1 N e 3 O — não 3 H e 4 O. E $CaCl_2$ precisa do sobrescrito ² para manter a proporção 1 cálcio : 2 cloros.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa D — HAz³O e KCl²</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> mesma troca de posição do número (B), além de confundir o elemento cálcio (Ca) com potássio (K) na segunda substância.
              <br>
              <strong>Onde quebra:</strong> a questão pede cloreto de <strong>cálcio</strong>, não cloreto de potássio — troca o elemento errado, não apenas a formatação.
            </p>
          </div>

          <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/30">
            <strong class="text-rose-400 block mb-1"><i class="fa-solid fa-xmark"></i> Alternativa E — HAzO² e KCl</strong>
            <p class="text-slate-300 leading-relaxed">
              <strong>Raciocínio que leva ao erro:</strong> usar o número 2 (talvez confundindo com o dióxido de nitrogênio do exemplo AzO²) em vez do número correto (3) para o ácido nítrico, além de trocar cálcio por potássio de novo.
              <br>
              <strong>Onde quebra:</strong> ácido nítrico tem 3 oxigênios, não 2 (2 oxigênios seria outro composto, como o ácido nitroso). E, de novo, o cátion pedido é cálcio, não potássio.
            </p>
          </div>
        </div>

        <div class="p-3 bg-cyan-950/30 rounded-xl border border-cyan-500/30">
          <strong class="text-cyan-400 block mb-1"><i class="fa-solid fa-key"></i> O padrão por trás dos distratores</strong>
          <p class="text-slate-300 leading-relaxed">
            Os erros combinam três tipos de armadilha: colocar o número no elemento errado, inventar proporções que não existem na fórmula real, e trocar o elemento pedido (cálcio) por outro parecido na tabela periódica (potássio). A chave é sempre partir da fórmula moderna correta antes de "traduzir" a notação.
          </p>
        </div>
      </div>
    `,

    conceitos: [
      { icone: "fa-atom", titulo: "Azoto = Nitrogênio", text: "Nome histórico do nitrogênio (N), representado pelo símbolo Az na notação de 1909." },
      { icone: "fa-arrow-up-9-1", titulo: "Sobrescrito x Subscrito", text: "A notação antiga escrevia os números de átomos acima da linha; hoje escrevemos abaixo — mesmo valor, posição diferente." },
      { icone: "fa-flask", titulo: "Ácido Nítrico (HNO3)", text: "1 hidrogênio, 1 nitrogênio (Az), 3 oxigênios — vira HAzO³ na notação antiga." },
      { icone: "fa-cubes", titulo: "Cloreto de Cálcio (CaCl2)", text: "Ca e Cl mantêm os símbolos modernos; só o índice 2 muda de posição, virando CaCl²." },
      { icone: "fa-magnifying-glass", titulo: "Usar os exemplos como chave", text: "As equações da lousa (AzO2, NaAzO3) confirmam as regras de tradução antes de aplicá-las." }
    ],

    /* ------------------------------------------------------------------
       3. GALERIA DE ESQUEMAS
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Tradução moderno → 1909",
        legenda: "Duas regras simples: trocar N por Az, e mover o número de baixo (subscrito) para cima (sobrescrito), mantendo o mesmo valor.",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <text x="115" y="20" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">Notação moderna</text>
            <rect x="30" y="35" width="170" height="50" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
            <text x="115" y="66" fill="#e2e8f0" font-size="16" font-weight="bold" text-anchor="middle">HNO₃</text>

            <text x="230" y="65" fill="#22d3ee" font-size="16" text-anchor="middle">→</text>

            <text x="345" y="20" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">Notação de 1909</text>
            <rect x="260" y="35" width="170" height="50" rx="6" fill="#0e7490" opacity="0.3" stroke="#22d3ee" stroke-width="2"/>
            <text x="345" y="66" fill="#67e8f9" font-size="16" font-weight="bold" text-anchor="middle">HAzO³</text>
          </svg>`
      },
      {
        titulo: "Confirmando a regra com os exemplos do enunciado",
        legenda: "As duas equações da lousa funcionam como chave: Az=N e o número sobrescrito equivale ao subscrito moderno.",
        svg: `
          <svg viewBox="0 0 460 130" class="w-full h-auto">
            <rect x="20" y="20" width="200" height="40" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            <text x="120" y="45" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">AzO + O = AzO²</text>
            <text x="240" y="45" fill="#94a3b8" font-size="12" text-anchor="middle">=</text>
            <rect x="260" y="20" width="180" height="40" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            <text x="350" y="45" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">NO + O = NO₂</text>

            <rect x="20" y="75" width="200" height="40" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            <text x="120" y="100" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">NaAzO³</text>
            <text x="240" y="100" fill="#94a3b8" font-size="12" text-anchor="middle">=</text>
            <rect x="260" y="75" width="180" height="40" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            <text x="350" y="100" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">NaNO₃</text>
          </svg>`
      },
      {
        titulo: "As duas respostas lado a lado",
        legenda: "Ácido nítrico e cloreto de cálcio, cada um seguindo a mesma lógica de tradução aplicada aos exemplos do enunciado.",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <text x="115" y="20" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">Ácido nítrico</text>
            <rect x="30" y="35" width="170" height="50" rx="6" fill="#0e7490" opacity="0.3" stroke="#22d3ee" stroke-width="2"/>
            <text x="115" y="66" fill="#67e8f9" font-size="16" font-weight="bold" text-anchor="middle">HAzO³</text>

            <text x="345" y="20" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">Cloreto de cálcio</text>
            <rect x="260" y="35" width="170" height="50" rx="6" fill="#0e7490" opacity="0.3" stroke="#22d3ee" stroke-width="2"/>
            <text x="345" y="66" fill="#67e8f9" font-size="16" font-weight="bold" text-anchor="middle">CaCl²</text>
          </svg>`
      },
      {
        titulo: "Mapa das cinco alternativas",
        legenda: "Só a alternativa A aplica corretamente as duas regras de tradução a ambas as substâncias pedidas.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <text x="30" y="15" fill="#94a3b8" font-size="9">Alternativa</text>
            <line x1="20" y1="20" x2="440" y2="20" stroke="#334155" stroke-width="1"/>

            <rect x="15" y="30" width="430" height="27" rx="5" fill="#0e7490" opacity="0.35"/>
            <text x="30" y="48" fill="#67e8f9" font-size="10" font-weight="bold">A — HAzO³ e CaCl²</text>
            <text x="400" y="48" fill="#22d3ee" font-size="12" text-anchor="middle" font-weight="bold">✓</text>

            <text x="30" y="75" fill="#e2e8f0" font-size="10">B — HAz³O e Ca²Cl</text>
            <text x="400" y="75" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="101" fill="#e2e8f0" font-size="10">C — H³AzO⁴ e CaCl</text>
            <text x="400" y="101" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="127" fill="#e2e8f0" font-size="10">D — HAz³O e KCl²</text>
            <text x="400" y="127" fill="#f87171" font-size="12" text-anchor="middle">✕</text>

            <text x="30" y="153" fill="#e2e8f0" font-size="10">E — HAzO² e KCl</text>
            <text x="400" y="153" fill="#f87171" font-size="12" text-anchor="middle">✕</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       4. LABORATÓRIO INTERATIVO DEDICADO
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: tradutor de fórmulas de 1909",
      descricao: "Escolha uma substância moderna e veja, passo a passo, como ela seria escrita na notação de 1909.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-2 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <p class="text-[11px] text-slate-400 mb-1">Escolha a substância:</p>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q106sub" data-sim="sub" value="hno3" checked class="accent-cyan-500">
              <span class="text-[11px] text-slate-200">Ácido nítrico (HNO₃)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q106sub" data-sim="sub" value="cacl2" class="accent-cyan-500">
              <span class="text-[11px] text-slate-200">Cloreto de cálcio (CaCl₂)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q106sub" data-sim="sub" value="no2" class="accent-cyan-500">
              <span class="text-[11px] text-slate-200">Dióxido de nitrogênio (NO₂)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q106sub" data-sim="sub" value="nano3" class="accent-cyan-500">
              <span class="text-[11px] text-slate-200">Nitrato de sódio (NaNO₃)</span>
            </label>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
              <p class="text-[10px] text-slate-500 mb-1">Notação moderna</p>
              <p class="text-lg font-bold text-slate-200" data-out="moderna">HNO₃</p>
              <p class="text-cyan-400 text-lg my-1">↓</p>
              <p class="text-[10px] text-slate-500 mb-1">Notação de 1909</p>
              <p class="text-lg font-bold text-cyan-300" data-out="antiga">HAzO³</p>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var radios = raiz.querySelectorAll('[data-sim="sub"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };

        var dados = {
          hno3: { moderna: 'HNO₃', antiga: 'HAzO³', texto: 'N vira Az; o subscrito 3 do oxigênio vira sobrescrito.' },
          cacl2: { moderna: 'CaCl₂', antiga: 'CaCl²', texto: 'Ca e Cl não mudam de símbolo; só o subscrito 2 vira sobrescrito.' },
          no2: { moderna: 'NO₂', antiga: 'AzO²', texto: 'Exatamente o exemplo do enunciado — confirma a regra de tradução.' },
          nano3: { moderna: 'NaNO₃', antiga: 'NaAzO³', texto: 'O outro exemplo dado no enunciado — Na não muda, N vira Az, 3 vira sobrescrito.' }
        };

        function atualizar() {
          var sub = 'hno3';
          radios.forEach(function (r) { if (r.checked) sub = r.value; });
          var d = dados[sub];

          saida('moderna').textContent = d.moderna;
          saida('antiga').textContent = d.antiga;

          var v = saida('veredito');
          v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-cyan-500/40 bg-cyan-950/30 text-cyan-200';
          v.innerHTML = '<strong>Tradução:</strong> ' + d.texto;
        }

        radios.forEach(function (r) { r.addEventListener('change', atualizar); });
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-cyan-300 block"><i class="fa-solid fa-atom"></i> HNO₃ + CaCl₂ (moderno) → HAzO³ + CaCl² (notação de 1909)</span>
        <svg viewBox="0 0 460 90" class="w-full h-24 mx-auto">
          <rect x="30" y="25" width="150" height="40" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
          <text x="105" y="50" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">HNO₃ + CaCl₂</text>
          <text x="220" y="50" fill="#22d3ee" font-size="16" text-anchor="middle">→</text>
          <rect x="255" y="25" width="175" height="40" rx="6" fill="#0e7490" opacity="0.3" stroke="#22d3ee" stroke-width="2"/>
          <text x="342" y="50" fill="#67e8f9" font-size="11" font-weight="bold" text-anchor="middle">HAzO³ + CaCl²</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q107",
    numero: "Questão 107",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "biologia",
    materia: "Biologia / Genética",
    materiaCor: "emerald",
    materiaIcone: "fa-dna",
    titulo: "Herança da Padronagem de Manchas em Joaninhas: Dominância Incompleta",
    tags: ["Biologia", "Genética", "Dominância Incompleta", "Herança Intermediária", "Proporção Fenotípica", "Quadro de Punnett"],
    alternativaCorreta: "C",
    userNotes: "",
    userCustomImage: null,

    enunciado: `A figura apresenta a herança genética de uma característica a partir do cruzamento de insetos de uma mesma espécie.
    <br><br>
    <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-4">
      <p class="text-center text-emerald-300 font-bold text-xs uppercase tracking-wide">Parentais</p>
      <div class="flex items-center justify-center gap-6">
        <div class="text-center">
          <svg viewBox="0 0 80 70" class="w-16 h-14 mx-auto">
            <ellipse cx="40" cy="40" rx="32" ry="24" fill="#dc2626" stroke="#450a0a" stroke-width="2"/>
            <ellipse cx="40" cy="16" rx="14" ry="12" fill="#0f172a"/>
            <line x1="40" y1="16" x2="40" y2="64" stroke="#450a0a" stroke-width="1.5"/>
            <circle cx="24" cy="30" r="4" fill="#0f172a"/><circle cx="56" cy="30" r="4" fill="#0f172a"/>
            <circle cx="20" cy="45" r="4" fill="#0f172a"/><circle cx="60" cy="45" r="4" fill="#0f172a"/>
            <circle cx="30" cy="55" r="4" fill="#0f172a"/><circle cx="50" cy="55" r="4" fill="#0f172a"/>
            <circle cx="40" cy="48" r="4" fill="#0f172a"/>
          </svg>
          <span class="text-[10px] text-slate-400">Macho — muitas pintas pequenas</span>
        </div>
        <i class="fa-solid fa-xmark text-slate-500"></i>
        <div class="text-center">
          <svg viewBox="0 0 80 70" class="w-16 h-14 mx-auto">
            <ellipse cx="40" cy="40" rx="32" ry="24" fill="#dc2626" stroke="#450a0a" stroke-width="2"/>
            <ellipse cx="40" cy="16" rx="14" ry="12" fill="#0f172a"/>
            <line x1="40" y1="16" x2="40" y2="64" stroke="#450a0a" stroke-width="1.5"/>
            <ellipse cx="30" cy="42" rx="5" ry="12" fill="#0f172a"/>
            <ellipse cx="50" cy="42" rx="5" ry="12" fill="#0f172a"/>
          </svg>
          <span class="text-[10px] text-slate-400">Fêmea — poucas pintas grandes</span>
        </div>
      </div>
      <p class="text-center text-emerald-300 font-bold text-xs uppercase tracking-wide pt-2 border-t border-slate-800">Primeira geração (F1)</p>
      <div class="flex items-center justify-center gap-10">
        <div class="text-center">
          <svg viewBox="0 0 80 70" class="w-16 h-14 mx-auto">
            <ellipse cx="40" cy="40" rx="32" ry="24" fill="#dc2626" stroke="#450a0a" stroke-width="2"/>
            <ellipse cx="40" cy="16" rx="14" ry="12" fill="#0f172a"/>
            <line x1="40" y1="16" x2="40" y2="64" stroke="#450a0a" stroke-width="1.5"/>
            <circle cx="26" cy="34" r="5" fill="#0f172a"/><circle cx="54" cy="34" r="5" fill="#0f172a"/>
            <circle cx="24" cy="52" r="5" fill="#0f172a"/><circle cx="56" cy="52" r="5" fill="#0f172a"/>
          </svg>
          <span class="text-[10px] text-slate-400">Macho — padrão intermediário</span>
        </div>
        <div class="text-center">
          <svg viewBox="0 0 80 70" class="w-16 h-14 mx-auto">
            <ellipse cx="40" cy="40" rx="32" ry="24" fill="#dc2626" stroke="#450a0a" stroke-width="2"/>
            <ellipse cx="40" cy="16" rx="14" ry="12" fill="#0f172a"/>
            <line x1="40" y1="16" x2="40" y2="64" stroke="#450a0a" stroke-width="1.5"/>
            <circle cx="26" cy="34" r="5" fill="#0f172a"/><circle cx="54" cy="34" r="5" fill="#0f172a"/>
            <circle cx="24" cy="52" r="5" fill="#0f172a"/><circle cx="56" cy="52" r="5" fill="#0f172a"/>
          </svg>
          <span class="text-[10px] text-slate-400">Fêmea — padrão intermediário</span>
        </div>
      </div>
    </div>
    <br>
    Note que os indivíduos da primeira geração (F1), tanto macho quanto fêmea, não se parecem com nenhum dos dois parentais: eles exibem um padrão de manchas <strong>intermediário</strong> entre "muitas pintas pequenas" e "poucas pintas grandes".
    <br><br>
    Qual alternativa representa a proporção fenotípica da prole resultante do cruzamento entre indivíduos da primeira geração (F1 × F1)?`,

    alternativas: [
      { letra: "A", texto: "Todos os descendentes idênticos ao macho parental original, com muitas pintas pequenas.", correta: false },
      { letra: "B", texto: "Todos os descendentes idênticos à fêmea parental original, com poucas pintas grandes.", correta: false },
      { letra: "C", texto: "1 indivíduo com muitas pintas pequenas : 2 indivíduos com padrão intermediário (igual ao da F1) : 1 indivíduo com poucas pintas grandes — proporção 1:2:1.", correta: true },
      { letra: "D", texto: "2 indivíduos com muitas pintas pequenas e 2 indivíduos com poucas pintas grandes, sem nenhum indivíduo de padrão intermediário — proporção 1:1.", correta: false },
      { letra: "E", texto: "3 indivíduos com padrão intermediário e 1 indivíduo com poucas pintas grandes — proporção 3:1.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-emerald-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre a diferença entre dominância completa e dominância incompleta — a chave para não confundir esta questão com um Mendel clássico de proporção 3:1.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">1.</span> Genótipo x Fenótipo: revisão rápida</h4>
          <p>
            <strong>Genótipo</strong> é a constituição alélica de um indivíduo para um gene (ex.: AA, Aa, aa). <strong>Fenótipo</strong> é a característica observável resultante da expressão desse genótipo (ex.: cor, forma, padrão de manchas). A relação entre genótipo e fenótipo depende de como os alelos interagem entre si — e é exatamente aí que mora a pegadinha desta questão.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">2.</span> Dominância completa (o "Mendel clássico")</h4>
          <p>
            Na herança com <strong>dominância completa</strong>, um dos alelos (o dominante, ex.: <strong>A</strong>) mascara totalmente o efeito do outro (o recessivo, ex.: <strong>a</strong>). Assim, o heterozigoto <strong>Aa</strong> tem exatamente a mesma aparência do homozigoto dominante <strong>AA</strong> — só existem <strong>dois fenótipos possíveis</strong> para três genótipos possíveis.
          </p>
          <p>
            Cruzando dois heterozigotos (Aa × Aa), o quadro de Punnett dá genótipos na proporção <strong>1 AA : 2 Aa : 1 aa</strong>, mas como AA e Aa têm o mesmo fenótipo, a proporção fenotípica observada é <strong>3 (dominante) : 1 (recessivo)</strong>. É essa proporção 3:1 que a maioria dos estudantes decora — e é exatamente a armadilha que uma das alternativas desta questão explora.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">3.</span> Dominância incompleta: quando NÃO há proporção 3:1</h4>
          <p>
            Na <strong>dominância incompleta</strong> (também chamada de herança intermediária ou "sem dominância"), nenhum dos dois alelos consegue mascarar totalmente o outro. O heterozigoto exibe um <strong>fenótipo intermediário</strong>, distinto dos dois homozigotos — um "meio-termo" visível entre as duas características parentais. Aqui, cada genótipo corresponde a um fenótipo diferente: <strong>três genótipos, três fenótipos</strong>.
          </p>
          <p>
            O exemplo clássico de livro-texto é a cor das flores de maravilha (<em>Mirabilis jalapa</em>): flor vermelha (VV) × flor branca (BB) gera F1 100% rosa (VB) — nem vermelha, nem branca, um verdadeiro intermediário. É exatamente esse padrão que a questão descreve para as joaninhas: os parentais têm padrões de manchas opostos (muitas pintas pequenas vs. poucas pintas grandes) e a F1 inteira exibe um padrão que não é igual a nenhum dos dois — um número e tamanho de pintas intermediário.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">4.</span> Por que o fenótipo da F1 já denuncia o tipo de herança</h4>
          <p>
            Esse é o pulo do gato para resolver a questão sem nem chegar ao cruzamento F1 × F1. Se a herança fosse de dominância completa, a F1 (heterozigota) teria o mesmo aspecto de um dos parentais — não um padrão novo. Como o enunciado mostra explicitamente que <strong>a F1 tem um padrão diferente dos dois parentais</strong>, isso identifica a herança como <strong>incompleta</strong> antes mesmo de montar qualquer quadro de Punnett.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">5.</span> Montando o cruzamento F1 × F1</h4>
          <p>
            Chame os alelos de <strong>M¹</strong> (muitas pintas pequenas) e <strong>M²</strong> (poucas pintas grandes), sem relação de dominância entre eles:
          </p>
          <ul class="list-disc list-inside space-y-1 pl-2">
            <li>Parentais: M¹M¹ (macho) × M²M² (fêmea)</li>
            <li>F1: 100% M¹M² — fenótipo intermediário (bate com a figura)</li>
            <li>F1 × F1: M¹M² × M¹M²</li>
          </ul>
          <p>
            Cada progenitor F1 produz gametas M¹ e M² em proporções iguais (50%/50%). O quadro de Punnett 2×2 combina esses gametas e resulta em genótipos na proporção <strong>1 M¹M¹ : 2 M¹M² : 1 M²M²</strong> — a mesma proporção genotípica de sempre em um cruzamento heterozigoto × heterozigoto de um único gene.
          </p>
          <p>
            A diferença crucial em relação à dominância completa é que, aqui, <strong>cada um desses três genótipos corresponde a um fenótipo visualmente distinto</strong>. Não há mascaramento — então a proporção <strong>fenotípica</strong> é idêntica à proporção <strong>genotípica</strong>: <strong>1 (muitas pintas pequenas) : 2 (padrão intermediário) : 1 (poucas pintas grandes)</strong>.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">6.</span> Resumo comparativo</h4>
          <p>
            Dominância completa (Aa × Aa): genótipos 1:2:1, fenótipos <strong>3:1</strong> (2 fenótipos). Dominância incompleta (M¹M² × M¹M²): genótipos 1:2:1, fenótipos <strong>1:2:1</strong> (3 fenótipos, pois o heterozigoto tem cara própria). Memorize o gatilho: <strong>se o heterozigoto tem uma aparência própria, nova, a proporção fenotípica final também vira 1:2:1</strong> — nunca 3:1.
          </p>
        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       2. CONCEITOS
       ------------------------------------------------------------------ */
    conceitos: [
      { icone: "fa-dna", titulo: "Dominância incompleta", text: "Nenhum alelo mascara o outro; o heterozigoto tem fenótipo próprio, intermediário entre os dois homozigotos." },
      { icone: "fa-shuffle", titulo: "Fenótipo intermediário", text: "É o sinal de alerta na F1: se ela não se parece com nenhum parental, a herança não é de dominância completa." },
      { icone: "fa-table-cells", titulo: "Quadro de Punnett", text: "Ferramenta para combinar os gametas de dois heterozigotos e prever a proporção genotípica 1:2:1 da prole." },
      { icone: "fa-chart-simple", titulo: "Proporção 1:2:1", text: "Na dominância incompleta, a proporção fenotípica reproduz exatamente a proporção genotípica — três fenótipos, não dois." },
      { icone: "fa-triangle-exclamation", titulo: "Armadilha do 3:1", text: "A proporção 3:1 só existe quando há dominância completa (2 fenótipos). Aplicá-la aqui ignora que a F1 já mostrou um terceiro fenótipo." }
    ],

    /* ------------------------------------------------------------------
       3. RESOLUÇÃO
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <div class="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4">
          <p class="font-bold text-emerald-300 mb-1"><i class="fa-solid fa-check-circle"></i> Gabarito: Alternativa C</p>
          <p>Proporção fenotípica 1:2:1 — 1 indivíduo igual ao macho parental (muitas pintas pequenas), 2 indivíduos iguais à F1 (padrão intermediário) e 1 indivíduo igual à fêmea parental (poucas pintas grandes).</p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold"><i class="fa-solid fa-list-ol text-emerald-400"></i> Estratégia de resolução em 3 passos</h4>
          <p><strong>Passo 1 — Identifique o tipo de herança pela F1.</strong> A figura mostra que a primeira geração (F1) não se parece com nenhum dos parentais: tem um padrão de manchas intermediário. Isso só acontece em <strong>dominância incompleta</strong> — se fosse dominância completa, a F1 heterozigota teria a cara de um dos parentais.</p>
          <p><strong>Passo 2 — Monte o cruzamento F1 × F1.</strong> Chamando os alelos de M¹ (muitas pintas pequenas) e M² (poucas pintas grandes), a F1 é M¹M² × M¹M². O quadro de Punnett dá genótipos 1 M¹M¹ : 2 M¹M² : 1 M²M².</p>
          <p><strong>Passo 3 — Converta genótipo em fenótipo.</strong> Como não há dominância, cada genótipo tem seu próprio fenótipo: M¹M¹ = muitas pintas pequenas, M¹M² = intermediário (igual à F1), M²M² = poucas pintas grandes. A proporção fenotípica final é, portanto, idêntica à genotípica: <strong>1:2:1</strong>.</p>
        </div>

        <div class="space-y-3">
          <h4 class="text-white font-bold"><i class="fa-solid fa-magnifying-glass text-emerald-400"></i> Por que cada alternativa está certa ou errada</h4>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">A) Todos idênticos ao macho parental — ERRADA</p>
            <p class="text-xs">Isso implicaria que todos os descendentes de F1 × F1 fossem M¹M¹. Mas cada progenitor F1 é heterozigoto (M¹M²) e produz gametas M¹ <em>e</em> M² em proporções iguais — é geneticamente impossível que 100% da prole herde só o alelo M¹ de ambos os pais.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">B) Todos idênticos à fêmea parental — ERRADA</p>
            <p class="text-xs">Mesmo erro da alternativa A, mas na direção oposta: assumir que toda a prole herda só M² também ignora que ambos os pais são heterozigotos e podem passar qualquer um dos dois alelos.</p>
          </div>

          <div class="border border-emerald-500/40 bg-emerald-950/20 rounded-lg p-3">
            <p class="font-bold text-emerald-300 text-xs mb-1">C) Proporção 1:2:1 — CORRETA</p>
            <p class="text-xs">É exatamente o resultado do quadro de Punnett para M¹M² × M¹M², reinterpretado sem qualquer mascaramento por dominância: 1 M¹M¹ (muitas pintas pequenas) : 2 M¹M² (intermediário) : 1 M²M² (poucas pintas grandes).</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">D) Proporção 1:1, sem intermediários — ERRADA</p>
            <p class="text-xs">Essa alternativa erra ao eliminar a classe heterozigota (M¹M²) do resultado, como se só os genótipos homozigotos pudessem se formar. Mas o cruzamento M¹M² × M¹M² produz heterozigotos com probabilidade 50% (2 em 4 combinações do Punnett) — é a classe mais frequente, não a ausente.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">E) Proporção 3:1 — ERRADA (a armadilha clássica)</p>
            <p class="text-xs">Essa é a proporção fenotípica esperada em <strong>dominância completa</strong> (onde AA e Aa têm o mesmo fenótipo, "fundindo" duas das quatro combinações do Punnett em uma só classe). Mas o próprio enunciado já mostrou que a F1 tem um padrão intermediário — ou seja, o heterozigoto NÃO se confunde com nenhum homozigoto, então as quatro combinações do Punnett geram três fenótipos distintos, e não dois. Usar 3:1 aqui significa ignorar a informação-chave dada pela figura.</p>
          </div>

        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       4. GALERIA (4 diagramas SVG)
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Parentais e F1: o fenótipo intermediário denuncia a herança",
        legenda: "A F1 não se parece com nenhum parental — sinal inequívoco de dominância incompleta, não de dominância completa.",
        svg: `
          <svg viewBox="0 0 460 160" class="w-full h-auto">
            <text x="230" y="16" fill="#94a3b8" font-size="9" font-weight="bold" text-anchor="middle">PARENTAIS</text>
            <ellipse cx="90" cy="55" rx="34" ry="26" fill="#dc2626" stroke="#450a0a" stroke-width="2"/>
            <circle cx="76" cy="42" r="4" fill="#0f172a"/><circle cx="104" cy="42" r="4" fill="#0f172a"/>
            <circle cx="70" cy="58" r="4" fill="#0f172a"/><circle cx="110" cy="58" r="4" fill="#0f172a"/>
            <circle cx="82" cy="68" r="4" fill="#0f172a"/><circle cx="98" cy="68" r="4" fill="#0f172a"/>
            <text x="90" y="98" fill="#fca5a5" font-size="8" text-anchor="middle">M¹M¹ (macho)</text>

            <text x="150" y="58" fill="#64748b" font-size="16" text-anchor="middle">×</text>

            <ellipse cx="210" cy="55" rx="34" ry="26" fill="#dc2626" stroke="#450a0a" stroke-width="2"/>
            <ellipse cx="198" cy="58" rx="5" ry="13" fill="#0f172a"/>
            <ellipse cx="222" cy="58" rx="5" ry="13" fill="#0f172a"/>
            <text x="210" y="98" fill="#fca5a5" font-size="8" text-anchor="middle">M²M² (fêmea)</text>

            <text x="260" y="58" fill="#64748b" font-size="14" text-anchor="middle">→</text>

            <text x="370" y="16" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">F1 (INTERMEDIÁRIA)</text>
            <ellipse cx="370" cy="55" rx="34" ry="26" fill="#dc2626" stroke="#450a0a" stroke-width="2"/>
            <circle cx="356" cy="48" r="5" fill="#0f172a"/><circle cx="384" cy="48" r="5" fill="#0f172a"/>
            <circle cx="354" cy="66" r="5" fill="#0f172a"/><circle cx="386" cy="66" r="5" fill="#0f172a"/>
            <text x="370" y="98" fill="#6ee7b7" font-size="8" text-anchor="middle">M¹M² (100% da prole)</text>

            <text x="230" y="130" fill="#94a3b8" font-size="8" text-anchor="middle">F1 não é igual a nenhum dos parentais → dominância incompleta</text>
          </svg>`
      },
      {
        titulo: "Quadro de Punnett: F1 × F1",
        legenda: "M¹M² × M¹M² gera genótipos na proporção 1 M¹M¹ : 2 M¹M² : 1 M²M².",
        svg: `
          <svg viewBox="0 0 300 220" class="w-full h-auto">
            <text x="150" y="14" fill="#94a3b8" font-size="9" font-weight="bold" text-anchor="middle">M¹M² (♂) × M¹M² (♀)</text>
            <line x1="90" y1="40" x2="270" y2="40" stroke="#475569" stroke-width="1.5"/>
            <line x1="90" y1="40" x2="90" y2="200" stroke="#475569" stroke-width="1.5"/>
            <text x="140" y="34" fill="#94a3b8" font-size="10" text-anchor="middle">M¹</text>
            <text x="220" y="34" fill="#94a3b8" font-size="10" text-anchor="middle">M²</text>
            <text x="70" y="80" fill="#94a3b8" font-size="10" text-anchor="middle">M¹</text>
            <text x="70" y="160" fill="#94a3b8" font-size="10" text-anchor="middle">M²</text>
            <line x1="180" y1="40" x2="180" y2="200" stroke="#334155" stroke-width="1"/>
            <line x1="90" y1="120" x2="270" y2="120" stroke="#334155" stroke-width="1"/>

            <rect x="90" y="40" width="90" height="80" fill="#450a0a" opacity="0.5"/>
            <text x="135" y="85" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">M¹M¹</text>
            <rect x="180" y="40" width="90" height="80" fill="#064e3b" opacity="0.5"/>
            <text x="225" y="85" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">M¹M²</text>
            <rect x="90" y="120" width="90" height="80" fill="#064e3b" opacity="0.5"/>
            <text x="135" y="165" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">M¹M²</text>
            <rect x="180" y="120" width="90" height="80" fill="#1e293b" opacity="0.7"/>
            <text x="225" y="165" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="middle">M²M²</text>
          </svg>`
      },
      {
        titulo: "Proporção fenotípica final: 1:2:1",
        legenda: "Como não há dominância, a proporção fenotípica é idêntica à genotípica — três fenótipos distintos na prole.",
        svg: `
          <svg viewBox="0 0 460 170" class="w-full h-auto">
            <line x1="60" y1="140" x2="420" y2="140" stroke="#64748b" stroke-width="2"/>
            <line x1="60" y1="20" x2="60" y2="140" stroke="#64748b" stroke-width="2"/>
            <text x="52" y="26" fill="#94a3b8" font-size="8" text-anchor="end">nº de indivíduos</text>

            <rect x="100" y="105" width="60" height="35" fill="#f87171"/>
            <text x="130" y="98" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">1</text>
            <text x="130" y="155" fill="#94a3b8" font-size="7" text-anchor="middle">muitas pintas</text>
            <text x="130" y="164" fill="#94a3b8" font-size="7" text-anchor="middle">pequenas (M¹M¹)</text>

            <rect x="210" y="35" width="60" height="105" fill="#6ee7b7"/>
            <text x="240" y="28" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">2</text>
            <text x="240" y="155" fill="#94a3b8" font-size="7" text-anchor="middle">intermediário</text>
            <text x="240" y="164" fill="#94a3b8" font-size="7" text-anchor="middle">(M¹M²)</text>

            <rect x="320" y="105" width="60" height="35" fill="#93c5fd"/>
            <text x="350" y="98" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">1</text>
            <text x="350" y="155" fill="#94a3b8" font-size="7" text-anchor="middle">poucas pintas</text>
            <text x="350" y="164" fill="#94a3b8" font-size="7" text-anchor="middle">grandes (M²M²)</text>
          </svg>`
      },
      {
        titulo: "Dominância completa vs. incompleta, lado a lado",
        legenda: "A mesma proporção genotípica (1:2:1) vira proporções fenotípicas diferentes, dependendo de como os alelos interagem.",
        svg: `
          <svg viewBox="0 0 460 200" class="w-full h-auto">
            <text x="230" y="16" fill="#94a3b8" font-size="9" font-weight="bold" text-anchor="middle">Genótipos (Aa × Aa): sempre 1 : 2 : 1</text>

            <rect x="30" y="30" width="190" height="150" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            <text x="125" y="48" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">Dominância COMPLETA</text>
            <rect x="50" y="60" width="30" height="20" fill="#f87171"/>
            <rect x="90" y="60" width="30" height="20" fill="#f87171"/><rect x="130" y="60" width="30" height="20" fill="#f87171"/>
            <text x="125" y="90" fill="#fca5a5" font-size="8" text-anchor="middle">3 partes: fenótipo dominante</text>
            <rect x="50" y="105" width="30" height="20" fill="#94a3b8"/>
            <text x="65" y="140" fill="#cbd5e1" font-size="8" text-anchor="middle">1 parte: recessivo</text>
            <text x="125" y="165" fill="white" font-size="11" font-weight="bold" text-anchor="middle">Fenótipos → 3 : 1</text>

            <rect x="240" y="30" width="190" height="150" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            <text x="335" y="48" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">Dominância INCOMPLETA</text>
            <rect x="260" y="70" width="30" height="20" fill="#f87171"/>
            <text x="275" y="100" fill="#fca5a5" font-size="7" text-anchor="middle">1: M¹M¹</text>
            <rect x="320" y="60" width="30" height="20" fill="#6ee7b7"/><rect x="320" y="85" width="30" height="20" fill="#6ee7b7"/>
            <text x="335" y="118" fill="#6ee7b7" font-size="7" text-anchor="middle">2: intermediário</text>
            <rect x="380" y="70" width="30" height="20" fill="#93c5fd"/>
            <text x="395" y="100" fill="#93c5fd" font-size="7" text-anchor="middle">1: M²M²</text>
            <text x="335" y="165" fill="white" font-size="11" font-weight="bold" text-anchor="middle">Fenótipos → 1 : 2 : 1</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       5. SIMULADOR
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: monte o cruzamento e veja o quadro de Punnett",
      descricao: "Escolha o tipo de herança e os genótipos dos dois pais. O simulador monta o quadro de Punnett e calcula a proporção fenotípica da prole em tempo real.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div>
              <p class="text-[11px] text-slate-400 mb-1">Tipo de herança:</p>
              <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
                <input type="radio" name="q107heranca" data-sim="heranca" value="incompleta" checked class="accent-emerald-500">
                <span class="text-[11px] text-slate-200">Dominância incompleta (como nas joaninhas)</span>
              </label>
              <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
                <input type="radio" name="q107heranca" data-sim="heranca" value="completa" class="accent-emerald-500">
                <span class="text-[11px] text-slate-200">Dominância completa (Mendel clássico)</span>
              </label>
            </div>

            <div>
              <p class="text-[11px] text-slate-400 mb-1">Genótipo do pai:</p>
              <select data-sim="pai" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-[11px] text-slate-200">
                <option value="AA">Homozigoto 1 (M¹M¹ / AA)</option>
                <option value="Aa" selected>Heterozigoto (M¹M² / Aa)</option>
                <option value="aa">Homozigoto 2 (M²M² / aa)</option>
              </select>
            </div>
            <div>
              <p class="text-[11px] text-slate-400 mb-1">Genótipo da mãe:</p>
              <select data-sim="mae" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-[11px] text-slate-200">
                <option value="AA">Homozigoto 1 (M¹M¹ / AA)</option>
                <option value="Aa" selected>Heterozigoto (M¹M² / Aa)</option>
                <option value="aa">Homozigoto 2 (M²M² / aa)</option>
              </select>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
              <p class="text-[11px] text-slate-400 mb-2">Quadro de Punnett (genótipos da prole):</p>
              <div data-out="punnett" class="grid grid-cols-2 gap-1 text-[10px] font-mono text-center"></div>
            </div>
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
              <p class="text-[11px] text-slate-400">Proporção fenotípica resultante:</p>
              <div data-out="fenotipos" class="text-[12px] text-slate-100 font-bold"></div>
              <div data-out="explicacao" class="text-[11px] text-slate-300 leading-relaxed"></div>
            </div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var radios = raiz.querySelectorAll('[data-sim="heranca"]');
        var selPai = raiz.querySelector('[data-sim="pai"]');
        var selMae = raiz.querySelector('[data-sim="mae"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };

        function gametas(genotipo) {
          if (genotipo === 'AA') return ['A', 'A'];
          if (genotipo === 'aa') return ['a', 'a'];
          return ['A', 'a'];
        }

        function atualizar() {
          var heranca = raiz.querySelector('[data-sim="heranca"]:checked').value;
          var gPai = gametas(selPai.value);
          var gMae = selMae.value === 'AA' ? ['A', 'A'] : (selMae.value === 'aa' ? ['a', 'a'] : ['A', 'a']);

          var combinacoes = [];
          gPai.forEach(function (p) {
            gMae.forEach(function (m) {
              var gt = (p === 'A' && m === 'A') ? 'AA' : (p === 'a' && m === 'a') ? 'aa' : 'Aa';
              combinacoes.push(gt);
            });
          });

          var punnettHtml = '';
          combinacoes.forEach(function (gt) {
            var cor = gt === 'AA' ? 'bg-rose-950/40 text-rose-300 border-rose-500/30' : (gt === 'aa' ? 'bg-sky-950/40 text-sky-300 border-sky-500/30' : 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30');
            punnettHtml += '<div class="p-2 rounded border ' + cor + ' font-bold">' + gt + '</div>';
          });
          saida('punnett').innerHTML = punnettHtml;

          var cont = { AA: 0, Aa: 0, aa: 0 };
          combinacoes.forEach(function (gt) { cont[gt]++; });

          var fenoTxt, explTxt;
          if (heranca === 'incompleta') {
            var partes = [];
            if (cont.AA) partes.push(cont.AA + ' muitas pintas pequenas (M¹M¹)');
            if (cont.Aa) partes.push(cont.Aa + ' padrão intermediário (M¹M²)');
            if (cont.aa) partes.push(cont.aa + ' poucas pintas grandes (M²M²)');
            fenoTxt = partes.join(' : ');
            explTxt = 'Sem dominância, cada genótipo tem seu próprio fenótipo — a proporção fenotípica é idêntica à genotípica.';
          } else {
            var dominante = cont.AA + cont.Aa;
            var recessivo = cont.aa;
            fenoTxt = dominante + ' fenótipo dominante : ' + recessivo + ' fenótipo recessivo';
            explTxt = 'Com dominância completa, AA e Aa têm o mesmo fenótipo — eles se fundem em uma única classe "dominante".';
          }
          saida('fenotipos').textContent = fenoTxt;
          saida('explicacao').textContent = explTxt;
        }

        radios.forEach(function (r) { r.addEventListener('change', atualizar); });
        selPai.addEventListener('change', atualizar);
        selMae.addEventListener('change', atualizar);
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-emerald-300 block"><i class="fa-solid fa-dna"></i> M¹M² × M¹M² → 1 M¹M¹ : 2 M¹M² : 1 M²M² (fenótipos 1:2:1)</span>
        <svg viewBox="0 0 460 130" class="w-full h-32 mx-auto">
          <rect x="20" y="30" width="90" height="60" fill="#450a0a" stroke="#f87171" stroke-width="1.5" rx="4"/>
          <text x="65" y="65" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">1</text>
          <text x="65" y="100" fill="#94a3b8" font-size="7" text-anchor="middle">muitas pintas</text>
          <rect x="185" y="20" width="90" height="80" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.5" rx="4"/>
          <text x="230" y="65" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">2</text>
          <text x="230" y="110" fill="#94a3b8" font-size="7" text-anchor="middle">intermediário</text>
          <rect x="350" y="30" width="90" height="60" fill="#0c4a6e" stroke="#93c5fd" stroke-width="1.5" rx="4"/>
          <text x="395" y="65" fill="#93c5fd" font-size="9" font-weight="bold" text-anchor="middle">1</text>
          <text x="395" y="100" fill="#94a3b8" font-size="7" text-anchor="middle">poucas pintas</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q109",
    numero: "Questão 109",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "quimica",
    materia: "Química / Química Orgânica & Reações Orgânicas",
    materiaCor: "cyan",
    materiaIcone: "fa-vial",
    titulo: "Descarboxilação do Ácido Anacárdico: Como o LCC Técnico é Produzido",
    tags: ["Química", "Química Orgânica", "Reações Orgânicas", "Descarboxilação", "Ácidos Carboxílicos", "Fenóis", "LCC do Caju"],
    alternativaCorreta: "E",
    userNotes: "",
    userCustomImage: null,

    enunciado: `O fruto do cajueiro é um aquênio repleto de um líquido escuro, quase preto, cáustico e inflamável. Esse líquido da casca da castanha do caju (LCC) representa aproximadamente 25% da massa da castanha e é um subproduto do agronegócio do caju. Quando submetido a altas temperaturas, o ácido anacárdico presente no LCC é convertido a cardanol, que recebe a denominação de LCC técnico, conforme o esquema:
    <br><br>
    <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
      <svg viewBox="0 0 460 160" class="w-full h-auto">
        <polygon points="70,40 100,55 100,85 70,100 40,85 40,55" fill="none" stroke="#94a3b8" stroke-width="1.8"/>
        <line x1="70" y1="40" x2="70" y2="20" stroke="#94a3b8" stroke-width="1.8"/>
        <text x="70" y="14" fill="#e2e8f0" font-size="9" text-anchor="middle">OH</text>
        <line x1="100" y1="55" x2="125" y2="42" stroke="#94a3b8" stroke-width="1.8"/>
        <text x="140" y="38" fill="#e2e8f0" font-size="9" text-anchor="middle">COOH</text>
        <line x1="70" y1="100" x2="70" y2="120" stroke="#94a3b8" stroke-width="1.8"/>
        <text x="70" y="134" fill="#94a3b8" font-size="8" text-anchor="middle">C15H31</text>
        <text x="70" y="150" fill="#94a3b8" font-size="8" font-style="italic" text-anchor="middle">Ácido anacárdico</text>

        <text x="185" y="65" fill="#67e8f9" font-size="13" text-anchor="middle">Δ</text>
        <line x1="160" y1="70" x2="215" y2="70" stroke="#67e8f9" stroke-width="2"/>
        <polygon points="215,70 207,66 207,74" fill="#67e8f9"/>
        <text x="187" y="86" fill="#94a3b8" font-size="7" text-anchor="middle">180 °C a 200 °C</text>

        <polygon points="300,40 330,55 330,85 300,100 270,85 270,55" fill="none" stroke="#94a3b8" stroke-width="1.8"/>
        <line x1="300" y1="40" x2="300" y2="20" stroke="#94a3b8" stroke-width="1.8"/>
        <text x="300" y="14" fill="#e2e8f0" font-size="9" text-anchor="middle">OH</text>
        <line x1="300" y1="100" x2="300" y2="120" stroke="#94a3b8" stroke-width="1.8"/>
        <text x="300" y="134" fill="#94a3b8" font-size="8" text-anchor="middle">C15H31</text>
        <text x="300" y="150" fill="#94a3b8" font-size="8" font-style="italic" text-anchor="middle">Cardanol</text>

        <text x="360" y="68" fill="#94a3b8" font-size="14" text-anchor="middle">+</text>
        <text x="410" y="68" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">CO₂</text>
      </svg>
    </div>
    <p class="text-[10px] text-slate-500 mt-2">MAZZETTO, S. E.; LOMONACO, D.; MELE, G. Óleo da castanha de caju: oportunidades e desafios no contexto do desenvolvimento e sustentabilidade industrial. <em>Química Nova</em>, n. 3, 2009 (adaptado).</p>
    <br>
    O LCC técnico é produzido por meio de uma reação orgânica do tipo`,

    alternativas: [
      { letra: "A", texto: "hidrólise.", correta: false },
      { letra: "B", texto: "fenilação.", correta: false },
      { letra: "C", texto: "esterificação.", correta: false },
      { letra: "D", texto: "hidrogenação.", correta: false },
      { letra: "E", texto: "descarboxilação.", correta: true }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-cyan-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre como reconhecer os principais tipos de reação orgânica comparando reagente e produto — a questão é, no fundo, um exercício de "antes e depois".
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">1.</span> O contexto: do LCC bruto ao LCC técnico</h4>
          <p>
            O <strong>LCC</strong> (Líquido da Casca da Castanha de Caju) é um subproduto abundante do agronegócio do caju, rico em <strong>ácido anacárdico</strong>: uma molécula com um anel aromático que carrega um grupo <strong>fenol</strong> (–OH ligado ao anel) e um grupo <strong>ácido carboxílico</strong> (–COOH), além de uma longa cadeia lateral (C15H31) que dá à molécula suas propriedades de óleo.
          </p>
          <p>
            Quando aquecido entre 180 °C e 200 °C, o ácido anacárdico perde o grupo –COOH na forma de <strong>CO₂ (gás carbônico)</strong>, restando apenas o anel com o grupo –OH e a cadeia lateral: essa molécula resultante é o <strong>cardanol</strong>, também chamado de LCC técnico — hoje usado como matéria-prima renovável para resinas, tintas e biocombustíveis.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">2.</span> Ácidos carboxílicos: o grupo funcional -COOH</h4>
          <p>
            Um <strong>ácido carboxílico</strong> tem o grupo funcional –COOH: um carbono ligado a uma dupla ligação com oxigênio (carbonila) e a uma hidroxila (–OH), tudo no mesmo carbono. É esse grupo que confere o caráter ácido (cáustico, como descrito no enunciado) ao LCC bruto. No produto (cardanol), esse grupo desaparece por completo — restando só o fenol.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">3.</span> As cinco reações candidatas, uma a uma</h4>
          <p><strong>Hidrólise:</strong> quebra de uma ligação por adição de água (H₂O), geralmente dividindo uma molécula grande em duas menores (ex.: éster + água → ácido + álcool). Exige a <strong>entrada</strong> de água na equação — o esquema do enunciado não mostra água entrando em lugar nenhum.</p>
          <p><strong>Fenilação:</strong> não é um tipo de reação orgânica reconhecido na nomenclatura padrão (não existe uma classe de reação com esse nome equivalente a hidrólise, esterificação etc.) — é uma alternativa fabricada para soar quimicamente plausível, mas vazia de significado técnico correto aqui.</p>
          <p><strong>Esterificação:</strong> reação entre um ácido carboxílico e um álcool, formando um éster e liberando água (–COOH + HO– → –COO– + H₂O). Exigiria um álcool reagindo com o ácido anacárdico — não é isso que o esquema mostra: não há álcool envolvido, e o subproduto liberado é CO₂, não água.</p>
          <p><strong>Hidrogenação:</strong> adição de hidrogênio (H₂) a uma ligação dupla C=C, saturando-a. Não há indicação de H₂ sendo adicionado nem de dupla ligação C=C sendo saturada nas estruturas do enunciado — a cadeia lateral (C15H31) e o anel aromático permanecem inalterados.</p>
          <p><strong>Descarboxilação:</strong> perda do grupo –COOH de uma molécula na forma de CO₂ gasoso, deixando um átomo de hidrogênio no lugar onde estava a carboxila. É exatamente essa perda de CO₂, indicada explicitamente no esquema ("+ CO₂"), que caracteriza a transformação do ácido anacárdico em cardanol.</p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">4.</span> Como confirmar pela contagem de átomos</h4>
          <p>
            Compare reagente e produto: o ácido anacárdico tem o grupo –OH (fenol) <em>e</em> o grupo –COOH (ácido). O cardanol tem apenas o grupo –OH. O que sumiu foi exatamente o carbono da carboxila junto com dois de seus oxigênios — e é isso que reaparece do lado direito da equação como CO₂. Um produto sendo liberado como gás, com perda líquida de um átomo de carbono e dois de oxigênio da molécula orgânica, é a assinatura característica de uma <strong>descarboxilação</strong>.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">5.</span> Por que a temperatura (180–200 °C) reforça a resposta</h4>
          <p>
            Descarboxilações de ácidos carboxílicos aromáticos costumam exigir aquecimento — a ligação C–COOH se rompe termicamente, liberando CO₂ e deixando um hidrogênio em seu lugar no anel. A faixa de temperatura informada no enunciado (180 °C a 200 °C) é plenamente compatível com esse tipo de reação térmica, reforçando a interpretação de que o mecanismo é descarboxilação, e não uma reação que ocorreria à temperatura ambiente com um reagente adicional (como água, no caso de hidrólise, ou um álcool, no caso de esterificação).
          </p>
        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       2. CONCEITOS
       ------------------------------------------------------------------ */
    conceitos: [
      { icone: "fa-fire", titulo: "Descarboxilação", text: "Perda térmica do grupo -COOH de uma molécula na forma de CO₂ gasoso, deixando um hidrogênio no lugar." },
      { icone: "fa-flask", titulo: "Ácido carboxílico", text: "Grupo funcional -COOH; confere caráter ácido e é o grupo que desaparece na conversão para cardanol." },
      { icone: "fa-ring", titulo: "Fenol", text: "Grupo -OH ligado diretamente a um anel aromático; permanece intacto do ácido anacárdico ao cardanol." },
      { icone: "fa-cloud", titulo: "CO₂ como subproduto", text: "A liberação explícita de CO₂ no esquema é o principal indício de que a reação é uma descarboxilação." },
      { icone: "fa-magnifying-glass", titulo: "Comparar reagente x produto", text: "Identificar o tipo de reação orgânica é, na prática, notar exatamente o que aparece e o que desaparece entre as duas estruturas." }
    ],

    /* ------------------------------------------------------------------
       3. RESOLUÇÃO
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <div class="bg-cyan-950/30 border border-cyan-500/30 rounded-xl p-4">
          <p class="font-bold text-cyan-300 mb-1"><i class="fa-solid fa-check-circle"></i> Gabarito: Alternativa E</p>
          <p>O ácido anacárdico perde seu grupo -COOH na forma de CO₂ ao ser aquecido, restando apenas o fenol com a cadeia lateral (cardanol). Essa perda de um grupo carboxila como gás carbônico é, por definição, uma <strong>descarboxilação</strong>.</p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold"><i class="fa-solid fa-list-ol text-cyan-400"></i> Estratégia de resolução em 3 passos</h4>
          <p><strong>Passo 1 — Identifique os grupos funcionais em cada estrutura.</strong> O ácido anacárdico tem –OH (fenol) e –COOH (ácido carboxílico) no anel. O cardanol tem só –OH. Algo saiu da molécula.</p>
          <p><strong>Passo 2 — Veja o que é liberado na equação.</strong> O esquema mostra explicitamente "+ CO₂" do lado dos produtos. Isso já aponta diretamente para a perda do grupo carboxila como gás carbônico.</p>
          <p><strong>Passo 3 — Confirme que nenhum outro reagente entra na equação.</strong> Não há água entrando (descartando hidrólise), nem álcool reagindo (descartando esterificação), nem H₂ sendo adicionado a uma dupla ligação (descartando hidrogenação). A única mudança é a perda espontânea, por aquecimento, do grupo –COOH como CO₂ — a definição exata de descarboxilação.</p>
        </div>

        <div class="space-y-3">
          <h4 class="text-white font-bold"><i class="fa-solid fa-magnifying-glass text-cyan-400"></i> Por que cada alternativa está certa ou errada</h4>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">A) Hidrólise — ERRADA</p>
            <p class="text-xs">Hidrólise exige a <strong>adição</strong> de uma molécula de água para quebrar uma ligação. O esquema não mostra água entrando como reagente em lugar nenhum — o que sai é CO₂, não o que entra é H₂O.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">B) Fenilação — ERRADA</p>
            <p class="text-xs">Não corresponde a uma classe de reação orgânica com definição própria comparável às demais alternativas — é um nome que soa tecnicamente plausível, mas não descreve nenhuma transformação real observada aqui.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">C) Esterificação — ERRADA</p>
            <p class="text-xs">Esterificação uniria o ácido anacárdico a um <strong>álcool</strong>, formando um éster e liberando água. Não há álcool no esquema, e o subproduto liberado é CO₂ — não H₂O. Os dois ingredientes-chave da esterificação (um álcool reagente e água como subproduto) estão ausentes.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">D) Hidrogenação — ERRADA</p>
            <p class="text-xs">Hidrogenação satura uma ligação dupla C=C com H₂. O anel aromático e a cadeia C15H31 permanecem exatamente iguais do ácido anacárdico ao cardanol — nenhuma insaturação foi removida, e H₂ não aparece como reagente em nenhum ponto do esquema.</p>
          </div>

          <div class="border border-cyan-500/40 bg-cyan-950/20 rounded-lg p-3">
            <p class="font-bold text-cyan-300 text-xs mb-1">E) Descarboxilação — CORRETA</p>
            <p class="text-xs">É exatamente o que o esquema mostra: o grupo –COOH do ácido anacárdico é removido pelo aquecimento (180–200 °C) e liberado como CO₂, restando o cardanol com apenas o grupo fenol e a cadeia lateral intactos.</p>
          </div>

        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       4. GALERIA (4 diagramas SVG)
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "O que muda: ácido anacárdico → cardanol",
        legenda: "O grupo -OH (fenol) permanece; o grupo -COOH desaparece e reaparece do outro lado como CO₂.",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <rect x="20" y="20" width="180" height="110" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="110" y="38" fill="#bae6fd" font-size="9" font-weight="bold" text-anchor="middle">Ácido anacárdico</text>
            <text x="110" y="60" fill="#e0f2fe" font-size="9" text-anchor="middle">-OH (fenol)</text>
            <text x="110" y="78" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">-COOH (ácido)</text>
            <text x="110" y="96" fill="#e0f2fe" font-size="9" text-anchor="middle">-C15H31 (cadeia)</text>

            <text x="230" y="80" fill="#67e8f9" font-size="16" text-anchor="middle">→</text>
            <text x="230" y="95" fill="#94a3b8" font-size="7" text-anchor="middle">Δ 180-200°C</text>

            <rect x="260" y="20" width="180" height="110" rx="6" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.5"/>
            <text x="350" y="38" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">Cardanol</text>
            <text x="350" y="60" fill="#d1fae5" font-size="9" text-anchor="middle">-OH (fenol)</text>
            <text x="350" y="78" fill="#64748b" font-size="9" text-decoration="line-through" text-anchor="middle">-COOH (removido)</text>
            <text x="350" y="96" fill="#d1fae5" font-size="9" text-anchor="middle">-C15H31 (cadeia)</text>
            <text x="350" y="116" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">+ CO₂ liberado</text>
          </svg>`
      },
      {
        titulo: "As cinco reações candidatas, o que cada uma exige",
        legenda: "Só a descarboxilação bate exatamente com o que o esquema mostra: nada entra, CO₂ sai.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <rect x="10" y="10" width="440" height="26" fill="#1e293b" rx="4"/>
            <text x="120" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Reação</text>
            <text x="300" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Exige / libera</text>
            <text x="410" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Bate?</text>

            <text x="20" y="52" fill="#e2e8f0" font-size="9">Hidrólise</text>
            <text x="220" y="52" fill="#e2e8f0" font-size="8">adiciona H₂O</text>
            <text x="410" y="52" fill="#f87171" font-size="10" text-anchor="middle">✗</text>

            <text x="20" y="76" fill="#e2e8f0" font-size="9">Fenilação</text>
            <text x="220" y="76" fill="#e2e8f0" font-size="8">não é reação-padrão</text>
            <text x="410" y="76" fill="#f87171" font-size="10" text-anchor="middle">✗</text>

            <text x="20" y="100" fill="#e2e8f0" font-size="9">Esterificação</text>
            <text x="220" y="100" fill="#e2e8f0" font-size="8">precisa de álcool, libera H₂O</text>
            <text x="410" y="100" fill="#f87171" font-size="10" text-anchor="middle">✗</text>

            <text x="20" y="124" fill="#e2e8f0" font-size="9">Hidrogenação</text>
            <text x="220" y="124" fill="#e2e8f0" font-size="8">adiciona H₂ a C=C</text>
            <text x="410" y="124" fill="#f87171" font-size="10" text-anchor="middle">✗</text>

            <rect x="10" y="140" width="440" height="26" fill="#064e3b" rx="4"/>
            <text x="20" y="157" fill="#6ee7b7" font-size="9" font-weight="bold">Descarboxilação</text>
            <text x="220" y="157" fill="#6ee7b7" font-size="8" font-weight="bold">libera CO₂, sem reagente extra</text>
            <text x="410" y="157" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">✓</text>
          </svg>`
      },
      {
        titulo: "Mecanismo simplificado da descarboxilação",
        legenda: "O carbono da carboxila sai junto com dois oxigênios (como CO₂); um hidrogênio toma o lugar dele no anel.",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <circle cx="80" cy="70" r="35" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
            <text x="80" y="75" fill="#e2e8f0" font-size="8" text-anchor="middle">anel</text>
            <line x1="115" y1="70" x2="150" y2="55" stroke="#f87171" stroke-width="2"/>
            <text x="170" y="52" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">-COOH</text>

            <text x="220" y="72" fill="#67e8f9" font-size="16" text-anchor="middle">⇌</text>
            <text x="220" y="90" fill="#94a3b8" font-size="7" text-anchor="middle">calor</text>

            <circle cx="320" cy="70" r="35" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
            <text x="320" y="75" fill="#e2e8f0" font-size="8" text-anchor="middle">anel</text>
            <line x1="355" y1="70" x2="385" y2="55" stroke="#94a3b8" stroke-width="2"/>
            <text x="400" y="52" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">-H</text>

            <text x="320" y="130" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">+ CO₂ ↑</text>
          </svg>`
      },
      {
        titulo: "Grupos funcionais: antes e depois, lado a lado",
        legenda: "Fenol permanece intacto; ácido carboxílico é totalmente removido; cadeia alifática não é alterada.",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <rect x="20" y="20" width="130" height="100" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            <text x="85" y="38" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">Fenol -OH</text>
            <text x="85" y="60" fill="#6ee7b7" font-size="8" text-anchor="middle">presente antes</text>
            <text x="85" y="76" fill="#6ee7b7" font-size="8" text-anchor="middle">presente depois</text>
            <text x="85" y="100" fill="#94a3b8" font-size="7" text-anchor="middle">→ inalterado</text>

            <rect x="165" y="20" width="130" height="100" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            <text x="230" y="38" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">-COOH</text>
            <text x="230" y="60" fill="#fca5a5" font-size="8" text-anchor="middle">presente antes</text>
            <text x="230" y="76" fill="#64748b" font-size="8" text-anchor="middle">ausente depois</text>
            <text x="230" y="100" fill="#fca5a5" font-size="7" font-weight="bold" text-anchor="middle">→ saiu como CO₂</text>

            <rect x="310" y="20" width="130" height="100" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            <text x="375" y="38" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">Cadeia C15H31</text>
            <text x="375" y="60" fill="#6ee7b7" font-size="8" text-anchor="middle">presente antes</text>
            <text x="375" y="76" fill="#6ee7b7" font-size="8" text-anchor="middle">presente depois</text>
            <text x="375" y="100" fill="#94a3b8" font-size="7" text-anchor="middle">→ inalterada</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       5. SIMULADOR
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: identifique o tipo de reação orgânica",
      descricao: "Escolha um cenário de transformação química e tente identificar qual tipo de reação orgânica ele descreve — igual ao raciocínio usado para resolver a questão do LCC.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div>
              <p class="text-[11px] text-slate-400 mb-1">Cenário de transformação:</p>
              <select data-sim="cenario" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-[11px] text-slate-200">
                <option value="ester">Um ácido carboxílico reage com um álcool; libera-se água e forma-se uma nova ligação C(=O)-O-C.</option>
                <option value="hidrol">Uma ligação éster é quebrada pela adição de água, regenerando o ácido e o álcool originais.</option>
                <option value="descarb" selected>Um grupo -COOH é removido da molécula na forma de CO₂; o carbono que restou ganha um hidrogênio.</option>
                <option value="hidrog">Uma ligação dupla C=C recebe átomos de H₂ e vira uma ligação simples C-C saturada.</option>
              </select>
            </div>
            <p class="text-[11px] text-slate-400 pt-1">Sua resposta:</p>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q109resp" data-sim="resp" value="hidrolise" class="accent-cyan-500">
              <span class="text-[11px] text-slate-200">Hidrólise</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q109resp" data-sim="resp" value="esterificacao" class="accent-cyan-500">
              <span class="text-[11px] text-slate-200">Esterificação</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q109resp" data-sim="resp" value="descarboxilacao" class="accent-cyan-500">
              <span class="text-[11px] text-slate-200">Descarboxilação</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q109resp" data-sim="resp" value="hidrogenacao" class="accent-cyan-500">
              <span class="text-[11px] text-slate-200">Hidrogenação</span>
            </label>
          </div>

          <div class="space-y-3">
            <div data-out="feedback" class="p-4 rounded-xl border text-[11px] leading-relaxed bg-slate-950 border-slate-800 text-slate-400">
              Escolha uma resposta para ver o resultado.
            </div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var selCenario = raiz.querySelector('[data-sim="cenario"]');
        var radios = raiz.querySelectorAll('[data-sim="resp"]');
        var fb = raiz.querySelector('[data-out="feedback"]');

        var respostas = {
          ester: 'esterificacao',
          hidrol: 'hidrolise',
          descarb: 'descarboxilacao',
          hidrog: 'hidrogenacao'
        };
        var nomes = {
          hidrolise: 'Hidrólise', esterificacao: 'Esterificação',
          descarboxilacao: 'Descarboxilação', hidrogenacao: 'Hidrogenação'
        };

        function limparEscolha() {
          radios.forEach(function (r) { r.checked = false; });
          fb.className = 'p-4 rounded-xl border text-[11px] leading-relaxed bg-slate-950 border-slate-800 text-slate-400';
          fb.textContent = 'Escolha uma resposta para ver o resultado.';
        }

        function avaliar() {
          var escolhido = raiz.querySelector('[data-sim="resp"]:checked');
          if (!escolhido) return;
          var correta = respostas[selCenario.value];
          if (escolhido.value === correta) {
            fb.className = 'p-4 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            fb.innerHTML = '<strong>Certo!</strong> Esse cenário descreve uma <strong>' + nomes[correta] + '</strong>.';
          } else {
            fb.className = 'p-4 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200';
            fb.innerHTML = '<strong>Não é bem isso.</strong> O cenário descreve uma <strong>' + nomes[correta] + '</strong>, não uma ' + nomes[escolhido.value] + '.';
          }
        }

        selCenario.addEventListener('change', limparEscolha);
        radios.forEach(function (r) { r.addEventListener('change', avaliar); });
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-cyan-300 block"><i class="fa-solid fa-vial"></i> Ácido anacárdico → Cardanol + CO₂ (descarboxilação térmica, 180-200 °C)</span>
        <svg viewBox="0 0 460 110" class="w-full h-28 mx-auto">
          <rect x="20" y="20" width="120" height="70" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5" rx="4"/>
          <text x="80" y="50" fill="#bae6fd" font-size="9" font-weight="bold" text-anchor="middle">-OH e -COOH</text>
          <text x="80" y="66" fill="#bae6fd" font-size="8" text-anchor="middle">no anel</text>
          <text x="200" y="55" fill="#67e8f9" font-size="14" text-anchor="middle">→</text>
          <rect x="240" y="20" width="120" height="70" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.5" rx="4"/>
          <text x="300" y="50" fill="#d1fae5" font-size="9" font-weight="bold" text-anchor="middle">só -OH</text>
          <text x="300" y="66" fill="#d1fae5" font-size="8" text-anchor="middle">no anel</text>
          <text x="410" y="55" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">+ CO₂</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q110",
    numero: "Questão 110",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "quimica",
    materia: "Química / Química Nuclear & Radioatividade",
    materiaCor: "cyan",
    materiaIcone: "fa-radiation",
    titulo: "Decaimento Radioativo do Cobalto-60: Meia-Vida ao Longo de 26,5 Anos",
    tags: ["Química", "Química Nuclear", "Radioatividade", "Meia-Vida", "Decaimento Exponencial", "Cobalto-60"],
    alternativaCorreta: "E",
    userNotes: "",
    userCustomImage: null,

    enunciado: `A química nuclear é uma importante ferramenta na produção de substâncias utilizadas na área da saúde humana. A radiação emitida pelo cobalto-60 é utilizada na medicina como ferramenta de diagnóstico e no tratamento do câncer. No entanto, esse radioisótopo tem um tempo de armazenamento limitado, pois seu tempo de meia-vida é de <strong>5,3 anos</strong>. Considere um frasco com uma amostra contendo <strong>2,00 mg</strong> de cobalto-60, armazenado durante um período de <strong>26,5 anos</strong>.
    <br><br>
    A massa de cobalto-60, em miligrama, que restará ao final desse tempo é mais próxima de`,

    alternativas: [
      { letra: "A", texto: "2,00 mg.", correta: false },
      { letra: "B", texto: "1,00 mg.", correta: false },
      { letra: "C", texto: "0,40 mg.", correta: false },
      { letra: "D", texto: "0,13 mg.", correta: false },
      { letra: "E", texto: "0,06 mg.", correta: true }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-cyan-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre como funciona a meia-vida e por que decaimento radioativo é <strong>exponencial</strong>, não linear — essa é a confusão que a maioria das alternativas erradas explora.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">1.</span> O que é meia-vida (t½)</h4>
          <p>
            <strong>Meia-vida</strong> é o tempo necessário para que <strong>metade</strong> dos átomos de uma amostra radioativa decaia (se transforme em outro elemento/isótopo, emitindo radiação). É uma propriedade fixa de cada radioisótopo: não importa quanto material você tem — depois de um intervalo igual à meia-vida, sempre resta exatamente metade da massa (ou da quantidade de átomos) que havia antes.
          </p>
          <p>
            O cobalto-60, usado em radioterapia contra o câncer e em irradiadores industriais, tem meia-vida de <strong>5,3 anos</strong>. Isso significa: a cada 5,3 anos que passam, a quantidade de cobalto-60 ativo na amostra cai pela metade — não importa se você começou com 2 mg ou 2 kg.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">2.</span> Por que é uma queda exponencial, não linear</h4>
          <p>
            O erro mais comum é pensar que a massa cai em "fatias iguais" ao longo do tempo — como se em cada meia-vida a amostra perdesse sempre a mesma quantidade de miligramas. Isso está errado: o que se mantém constante é a <strong>fração</strong> que sobra (metade), não a quantidade absoluta perdida.
          </p>
          <p>
            Por isso a massa remanescente segue uma <strong>curva exponencial decrescente</strong>: cai rápido no início (em termos absolutos) e cada vez mais devagar depois, porque a cada passo você está tirando a metade de uma quantidade já menor.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">3.</span> A fórmula da meia-vida</h4>
          <p>
            A massa remanescente após um tempo <code>t</code> é dada por:
          </p>
          <div class="bg-slate-950 border border-slate-800 rounded-lg p-3 text-center font-mono text-cyan-300 text-sm">
            m(t) = m₀ × (1/2)<sup>t / t½</sup>
          </div>
          <p>
            Onde <code>m₀</code> é a massa inicial, <code>t</code> é o tempo decorrido e <code>t½</code> é a meia-vida. O expoente <code>t / t½</code> é simplesmente <strong>quantas meias-vidas se passaram</strong> — e é esse número inteiro (ou fracionário) que você eleva o fator 1/2.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">4.</span> Contando as meias-vidas do cobalto-60</h4>
          <p>
            Tempo decorrido: 26,5 anos. Meia-vida: 5,3 anos. Número de meias-vidas:
          </p>
          <div class="bg-slate-950 border border-slate-800 rounded-lg p-3 text-center font-mono text-cyan-300 text-sm">
            n = 26,5 / 5,3 = 5
          </div>
          <p>
            Passaram-se exatamente <strong>5 meias-vidas</strong> — um número redondo, o que é a pista de que a questão foi desenhada para se resolver por halvings sucessivos, sem precisar de calculadora científica.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">5.</span> Aplicando as 5 divisões por 2, uma a uma</h4>
          <table class="w-full text-xs border-collapse">
            <thead>
              <tr class="border-b border-slate-700 text-slate-400">
                <th class="text-left py-1">Meia-vida nº</th>
                <th class="text-left py-1">Tempo acumulado</th>
                <th class="text-right py-1">Massa restante</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-slate-800"><td class="py-1">0</td><td>0 anos</td><td class="text-right">2,00 mg</td></tr>
              <tr class="border-b border-slate-800"><td class="py-1">1</td><td>5,3 anos</td><td class="text-right">1,00 mg</td></tr>
              <tr class="border-b border-slate-800"><td class="py-1">2</td><td>10,6 anos</td><td class="text-right">0,50 mg</td></tr>
              <tr class="border-b border-slate-800"><td class="py-1">3</td><td>15,9 anos</td><td class="text-right">0,25 mg</td></tr>
              <tr class="border-b border-slate-800"><td class="py-1">4</td><td>21,2 anos</td><td class="text-right">0,125 mg</td></tr>
              <tr class="border-b border-cyan-500/40 text-cyan-300 font-bold"><td class="py-1">5</td><td>26,5 anos</td><td class="text-right">0,0625 mg ≈ 0,06 mg</td></tr>
            </tbody>
          </table>
          <p>
            Cada linha divide a massa da linha anterior por 2. Depois de 5 divisões sucessivas, 2,00 mg vira 0,0625 mg — que arredonda para <strong>0,06 mg</strong>, a alternativa E.
          </p>
        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       2. CONCEITOS
       ------------------------------------------------------------------ */
    conceitos: [
      { icone: "fa-radiation", titulo: "Meia-vida (t½)", text: "Tempo necessário para metade dos átomos de uma amostra radioativa decair — fixo para cada radioisótopo." },
      { icone: "fa-chart-line", titulo: "Decaimento exponencial", text: "A massa cai pela metade a cada meia-vida — não em quantidades absolutas iguais, mas em fração constante." },
      { icone: "fa-square-root-variable", titulo: "Fórmula m(t) = m₀(1/2)ᵗ/ᵗ½", text: "O expoente t/t½ é o número de meias-vidas decorridas; eleva-se o fator 1/2 a essa potência." },
      { icone: "fa-hourglass-half", titulo: "Contar meias-vidas", text: "26,5 anos ÷ 5,3 anos = 5 meias-vidas — um número inteiro, resolvível por halvings sucessivos." },
      { icone: "fa-hospital", titulo: "Cobalto-60 na medicina", text: "Usado em radioterapia contra câncer; seu tempo de armazenamento é limitado justamente pelo decaimento contínuo." }
    ],

    /* ------------------------------------------------------------------
       3. RESOLUÇÃO
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <div class="bg-cyan-950/30 border border-cyan-500/30 rounded-xl p-4">
          <p class="font-bold text-cyan-300 mb-1"><i class="fa-solid fa-check-circle"></i> Gabarito: Alternativa E</p>
          <p>26,5 anos ÷ 5,3 anos = 5 meias-vidas. Massa restante = 2,00 mg × (1/2)⁵ = 2,00 mg × 1/32 = 0,0625 mg ≈ <strong>0,06 mg</strong>.</p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold"><i class="fa-solid fa-list-ol text-cyan-400"></i> Estratégia de resolução em 3 passos</h4>
          <p><strong>Passo 1 — Calcule quantas meias-vidas se passaram.</strong> n = tempo decorrido / meia-vida = 26,5 / 5,3 = 5.</p>
          <p><strong>Passo 2 — Aplique o fator (1/2) elevado a n.</strong> (1/2)⁵ = 1/32 = 0,03125.</p>
          <p><strong>Passo 3 — Multiplique pela massa inicial.</strong> 2,00 mg × 0,03125 = 0,0625 mg, que arredonda para 0,06 mg.</p>
        </div>

        <div class="space-y-3">
          <h4 class="text-white font-bold"><i class="fa-solid fa-magnifying-glass text-cyan-400"></i> Por que cada alternativa está certa ou errada</h4>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">A) 2,00 mg — ERRADA</p>
            <p class="text-xs">Corresponde a ignorar completamente o decaimento, como se nenhum tempo tivesse passado. Mas 26,5 anos é justamente 5 meias-vidas inteiras — massa suficiente decaiu para reduzir a amostra a uma fração pequena do valor original.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">B) 1,00 mg — ERRADA</p>
            <p class="text-xs">É o resultado de aplicar <strong>apenas uma</strong> meia-vida (2,00 mg ÷ 2), como se 26,5 anos correspondesse a um único período de 5,3 anos. Ignora que o tempo total é cinco vezes maior que uma meia-vida.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">C) 0,40 mg — ERRADA</p>
            <p class="text-xs">É o que se obtém dividindo a massa inicial <strong>linearmente</strong> pelo número de meias-vidas (2,00 mg ÷ 5 = 0,40 mg), tratando o decaimento como se fosse proporcional ao tempo, e não exponencial. Essa é exatamente a armadilha "decaimento linear" descrita na teoria.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">D) 0,13 mg — ERRADA</p>
            <p class="text-xs">É o resultado de aplicar apenas <strong>4</strong> meias-vidas em vez de 5 (2,00 mg × (1/2)⁴ = 0,125 mg ≈ 0,13 mg) — um erro de contagem por um período a menos, parando em 21,2 anos em vez de completar os 26,5 anos informados.</p>
          </div>

          <div class="border border-cyan-500/40 bg-cyan-950/20 rounded-lg p-3">
            <p class="font-bold text-cyan-300 text-xs mb-1">E) 0,06 mg — CORRETA</p>
            <p class="text-xs">Resultado de aplicar corretamente as 5 meias-vidas completas: 2,00 mg × (1/2)⁵ = 0,0625 mg, arredondado para 0,06 mg — o valor mais próximo entre as opções.</p>
          </div>

        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       4. GALERIA (4 diagramas SVG)
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Curva de decaimento exponencial do cobalto-60",
        legenda: "A massa cai rápido no início e cada vez mais devagar — sempre pela metade a cada 5,3 anos.",
        svg: `
          <svg viewBox="0 0 460 180" class="w-full h-auto">
            <line x1="55" y1="150" x2="435" y2="150" stroke="#64748b" stroke-width="2"/>
            <line x1="55" y1="20" x2="55" y2="150" stroke="#64748b" stroke-width="2"/>
            <text x="48" y="26" fill="#94a3b8" font-size="8" text-anchor="end">massa (mg)</text>
            <text x="430" y="168" fill="#94a3b8" font-size="8" text-anchor="end">tempo (anos)</text>
            <polyline points="55,20 130,86 205,118 280,134 355,142 430,146" fill="none" stroke="#67e8f9" stroke-width="2.5"/>
            <circle cx="55" cy="20" r="3.5" fill="#67e8f9"/><text x="55" y="14" fill="#67e8f9" font-size="7" text-anchor="middle">2,00</text>
            <circle cx="130" cy="86" r="3.5" fill="#67e8f9"/><text x="130" y="80" fill="#67e8f9" font-size="7" text-anchor="middle">1,00</text>
            <circle cx="205" cy="118" r="3.5" fill="#67e8f9"/><text x="205" y="112" fill="#67e8f9" font-size="7" text-anchor="middle">0,50</text>
            <circle cx="280" cy="134" r="3.5" fill="#67e8f9"/><text x="280" y="128" fill="#67e8f9" font-size="7" text-anchor="middle">0,25</text>
            <circle cx="355" cy="142" r="3.5" fill="#67e8f9"/><text x="355" y="136" fill="#67e8f9" font-size="7" text-anchor="middle">0,125</text>
            <circle cx="430" cy="146" r="4" fill="#6ee7b7"/><text x="410" y="130" fill="#6ee7b7" font-size="7" font-weight="bold" text-anchor="middle">0,0625</text>
            <text x="55" y="163" fill="#64748b" font-size="7">0</text>
            <text x="130" y="163" fill="#64748b" font-size="7">5,3</text>
            <text x="205" y="163" fill="#64748b" font-size="7">10,6</text>
            <text x="280" y="163" fill="#64748b" font-size="7">15,9</text>
            <text x="355" y="163" fill="#64748b" font-size="7">21,2</text>
            <text x="425" y="163" fill="#6ee7b7" font-size="7" font-weight="bold">26,5</text>
          </svg>`
      },
      {
        titulo: "As 5 divisões por 2, passo a passo",
        legenda: "Cada meia-vida divide a massa restante ao meio — nunca subtrai uma quantidade fixa.",
        svg: `
          <svg viewBox="0 0 460 110" class="w-full h-auto">
            <rect x="10" y="30" width="60" height="50" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5" rx="4"/>
            <text x="40" y="58" fill="#bae6fd" font-size="10" font-weight="bold" text-anchor="middle">2,00</text>
            <text x="82" y="58" fill="#64748b" font-size="12" text-anchor="middle">÷2</text>
            <rect x="100" y="38" width="52" height="34" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.2" rx="4"/>
            <text x="126" y="59" fill="#bae6fd" font-size="9" font-weight="bold" text-anchor="middle">1,00</text>
            <text x="160" y="58" fill="#64748b" font-size="11" text-anchor="middle">÷2</text>
            <rect x="176" y="44" width="44" height="24" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1" rx="3"/>
            <text x="198" y="60" fill="#bae6fd" font-size="8" font-weight="bold" text-anchor="middle">0,50</text>
            <text x="228" y="58" fill="#64748b" font-size="10" text-anchor="middle">÷2</text>
            <rect x="240" y="48" width="38" height="18" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1" rx="3"/>
            <text x="259" y="60" fill="#bae6fd" font-size="7" font-weight="bold" text-anchor="middle">0,25</text>
            <text x="288" y="58" fill="#64748b" font-size="9" text-anchor="middle">÷2</text>
            <rect x="298" y="51" width="32" height="13" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1" rx="2"/>
            <text x="314" y="60" fill="#bae6fd" font-size="6" font-weight="bold" text-anchor="middle">0,125</text>
            <text x="340" y="58" fill="#64748b" font-size="9" text-anchor="middle">÷2</text>
            <rect x="352" y="53" width="26" height="9" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.2" rx="2"/>
            <text x="405" y="45" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">0,0625 mg</text>
            <text x="405" y="58" fill="#6ee7b7" font-size="7" text-anchor="middle">≈ 0,06 mg</text>
          </svg>`
      },
      {
        titulo: "A fórmula aplicada ao caso do cobalto-60",
        legenda: "n = t/t½ = 5; (1/2)⁵ = 1/32; 2,00 mg × 1/32 = 0,0625 mg.",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <rect x="20" y="20" width="420" height="110" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
            <text x="230" y="45" fill="#67e8f9" font-size="13" font-family="monospace" text-anchor="middle">m(t) = m₀ × (1/2)^(t / t½)</text>
            <text x="230" y="72" fill="#e2e8f0" font-size="11" font-family="monospace" text-anchor="middle">m(26,5) = 2,00 × (1/2)^(26,5 / 5,3)</text>
            <text x="230" y="96" fill="#e2e8f0" font-size="11" font-family="monospace" text-anchor="middle">m(26,5) = 2,00 × (1/2)⁵ = 2,00 × 1/32</text>
            <text x="230" y="120" fill="#6ee7b7" font-size="13" font-weight="bold" font-family="monospace" text-anchor="middle">m(26,5) = 0,0625 mg ≈ 0,06 mg</text>
          </svg>`
      },
      {
        titulo: "Exponencial x linear: a armadilha da alternativa C",
        legenda: "Dividir 2,00 mg por 5 (linear) dá 0,40 mg — errado. O correto é dividir por 2, cinco vezes seguidas (exponencial).",
        svg: `
          <svg viewBox="0 0 460 170" class="w-full h-auto">
            <line x1="55" y1="140" x2="435" y2="140" stroke="#64748b" stroke-width="2"/>
            <line x1="55" y1="20" x2="55" y2="140" stroke="#64748b" stroke-width="2"/>
            <polyline points="55,20 130,52 205,84 280,116 355,132 430,140" fill="none" stroke="#f87171" stroke-width="2" stroke-dasharray="4,3"/>
            <text x="355" y="122" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">linear (errado)</text>
            <text x="430" y="130" fill="#fca5a5" font-size="7" text-anchor="middle">0,40</text>
            <polyline points="55,20 130,86 205,118 280,134 355,142 430,146" fill="none" stroke="#6ee7b7" stroke-width="2.5"/>
            <text x="330" y="158" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">exponencial (correto)</text>
            <text x="430" y="152" fill="#6ee7b7" font-size="7" text-anchor="middle">0,06</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       5. SIMULADOR
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: decaimento do cobalto-60 ao longo do tempo",
      descricao: "Arraste o tempo decorrido e veja a massa de cobalto-60 restante cair exponencialmente, meia-vida após meia-vida.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Tempo decorrido</span><span class="text-cyan-300 font-bold" data-out="tempo">26,5 anos</span>
              </label>
              <input type="range" data-sim="tempo" min="0" max="42.4" value="26.5" step="1.325" class="w-full accent-cyan-500">
              <p class="text-[10px] text-slate-500 mt-1"><i class="fa-solid fa-hourglass-half"></i> Meia-vida do cobalto-60 = 5,3 anos. Cada passo do slider representa 1/4 de meia-vida.</p>
            </div>
            <div class="text-[11px] text-slate-400" data-out="nMeias"></div>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-cyan-300 font-bold">Massa de cobalto-60 restante</span>
                  <span class="text-cyan-300 font-mono" data-out="massa">2,00 mg</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="massa" class="h-full bg-cyan-500 transition-all" style="width:100%"></div>
                </div>
              </div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var campo = raiz.querySelector('[data-sim="tempo"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };
        var t_half = 5.3;
        var m0 = 2.00;

        function atualizar() {
          var t = parseFloat(campo.value);
          var n = t / t_half;
          var massa = m0 * Math.pow(0.5, n);
          var pct = (massa / m0) * 100;

          saida('tempo').textContent = t.toFixed(1) + ' anos';
          saida('nMeias').textContent = 'Meias-vidas decorridas: ' + n.toFixed(2) + ' (26,5 ÷ 5,3 = 5 é o valor exato da questão)';
          saida('massa').textContent = massa.toFixed(3) + ' mg';
          barra('massa').style.width = Math.max(pct, 1) + '%';

          var v = saida('veredito');
          if (n < 1) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-cyan-500/40 bg-cyan-950/30 text-cyan-200';
            v.innerHTML = '<strong>Ainda não completou uma meia-vida.</strong> A massa está caindo, mas ainda não chegou à metade do valor inicial.';
          } else if (n < 5) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            v.innerHTML = '<strong>' + Math.floor(n) + ' meia(s)-vida(s) completa(s).</strong> Continue arrastando até 26,5 anos (5 meias-vidas) para chegar ao cenário exato da questão.';
          } else {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            v.innerHTML = '<strong>5 meias-vidas completas (26,5 anos).</strong> Restam 0,0625 mg ≈ 0,06 mg — exatamente o cenário da questão, alternativa E.';
          }
        }

        campo.addEventListener('input', atualizar);
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-cyan-300 block"><i class="fa-solid fa-radiation"></i> 26,5 anos ÷ 5,3 anos = 5 meias-vidas → 2,00 mg × (1/2)⁵ = 0,06 mg</span>
        <svg viewBox="0 0 460 90" class="w-full h-24 mx-auto">
          <text x="60" y="45" fill="#e2e8f0" font-size="10" font-weight="bold" text-anchor="middle">2,00</text>
          <text x="60" y="65" fill="#64748b" font-size="7" text-anchor="middle">0 anos</text>
          <text x="130" y="45" fill="#94a3b8" font-size="10" text-anchor="middle">1,00</text>
          <text x="200" y="45" fill="#94a3b8" font-size="9" text-anchor="middle">0,50</text>
          <text x="270" y="45" fill="#94a3b8" font-size="8" text-anchor="middle">0,25</text>
          <text x="340" y="45" fill="#94a3b8" font-size="7" text-anchor="middle">0,125</text>
          <text x="410" y="45" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">0,06</text>
          <text x="410" y="65" fill="#6ee7b7" font-size="7" font-weight="bold" text-anchor="middle">26,5 anos</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q111",
    numero: "Questão 111",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "biologia",
    materia: "Biologia / Ecologia & Sustentabilidade",
    materiaCor: "emerald",
    materiaIcone: "fa-recycle",
    titulo: "Biodigestão de Resíduos Animais: Por Que o Destino do Adubo Evita a Eutrofização",
    tags: ["Biologia", "Ecologia", "Biodigestão", "Eutrofização", "Sustentabilidade", "Ciclo de Nutrientes", "Fertilizante Orgânico"],
    alternativaCorreta: "B",
    userNotes: "",
    userCustomImage: null,

    enunciado: `O esquema apresenta as etapas do processo de biodigestão, uma forma de dar um destino sustentável a excrementos animais e restos de comida produzidos em áreas de criação de gado e porcos confinados.
    <br><br>
    <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-[11px]">
        <div class="bg-slate-900 border border-slate-700 rounded-lg p-3">
          <span class="text-emerald-400 font-bold">1</span>
          <p class="text-slate-300 mt-1">Excrementos animais e restos de alimentos são misturados com água no alimentador do biodigestor.</p>
        </div>
        <div class="bg-slate-900 border border-slate-700 rounded-lg p-3">
          <span class="text-emerald-400 font-bold">2</span>
          <p class="text-slate-300 mt-1">Dentro do biodigestor, a ação das bactérias decompõe os resíduos, transformando-os em gás metano e adubo.</p>
        </div>
        <div class="bg-slate-900 border border-slate-700 rounded-lg p-3">
          <span class="text-emerald-400 font-bold">3</span>
          <p class="text-slate-300 mt-1">O gás metano pode ser encanado para alimentar um gerador ou aquecedor.</p>
        </div>
        <div class="bg-slate-900 border border-emerald-500/40 rounded-lg p-3">
          <span class="text-emerald-400 font-bold">4</span>
          <p class="text-slate-300 mt-1"><strong>As sobras servem como fertilizante.</strong></p>
        </div>
      </div>
    </div>
    <p class="text-[10px] text-slate-500 mt-2">Disponível em: www.engquimicasantossp.com.br. Acesso em: 11 fev. 2015 (adaptado).</p>
    <br>
    Dar destino sustentável às sobras, conforme apresentado na etapa 4, ajuda a evitar a`,

    alternativas: [
      { letra: "A", texto: "bioacumulação de toxinas em plantas.", correta: false },
      { letra: "B", texto: "eutrofização dos corpos de água.", correta: true },
      { letra: "C", texto: "destruição da camada de ozônio.", correta: false },
      { letra: "D", texto: "ocorrência de inversão térmica.", correta: false },
      { letra: "E", texto: "produção de chuva ácida.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-emerald-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre para onde vão os nutrientes de dejetos animais quando não há um destino adequado — e por que isso, especificamente, causa eutrofização, e não os outros problemas ambientais listados nas alternativas.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">1.</span> O que é biodigestão</h4>
          <p>
            A <strong>biodigestão anaeróbica</strong> é a decomposição de matéria orgânica (excrementos, restos de alimento) por bactérias, na ausência de oxigênio, dentro de um tanque fechado (o biodigestor). Esse processo gera dois produtos principais: <strong>biogás</strong> (rico em metano, CH₄, que pode ser queimado como combustível) e <strong>digestato</strong> (também chamado de biofertilizante ou "sobras" no esquema) — um lodo rico em nitrogênio, fósforo e outros nutrientes que sobra depois da decomposição.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">2.</span> Por que os dejetos animais, sem tratamento, são um problema</h4>
          <p>
            Grandes propriedades de criação confinada de gado e porcos produzem um volume enorme de excrementos, ricos em <strong>nitrogênio e fósforo</strong>. Se esses dejetos não recebem destino adequado — por exemplo, se escoam diretamente para rios, lagos ou lençóis freáticos — eles funcionam como um <strong>fertilizante descontrolado</strong> despejado na água.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">3.</span> Eutrofização: o que é e como começa</h4>
          <p>
            <strong>Eutrofização</strong> é o enriquecimento excessivo de um corpo d'água com nutrientes (principalmente nitrogênio e fósforo), causando uma explosão populacional de algas e cianobactérias (a chamada "floração"). Essa camada de algas bloqueia a luz solar, e quando morre, é decomposta por bactérias aeróbias que consomem grandes quantidades de oxigênio dissolvido — levando à <strong>morte de peixes por asfixia</strong> e ao colapso do ecossistema aquático.
          </p>
          <p>
            O ponto-chave: eutrofização é causada por <strong>excesso de nutrientes</strong> chegando à água — exatamente o tipo de poluição que dejetos animais não tratados provocam quando escoam para rios e lagos.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">4.</span> Como a etapa 4 (usar as sobras como fertilizante) resolve isso</h4>
          <p>
            Ao transformar o digestato em <strong>fertilizante aplicado de forma controlada no solo de plantações</strong>, o nitrogênio e o fósforo que antes escoariam sem controle para os corpos d'água passam a ser <strong>absorvidos pelas plantas</strong> como nutrientes — fechando o ciclo de forma sustentável, em vez de acumular na água. É esse manejo controlado, e não um descarte aleatório, que evita a eutrofização dos rios e lagos próximos à propriedade.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">5.</span> Por que os outros problemas ambientais NÃO se aplicam aqui</h4>
          <p>
            <strong>Bioacumulação de toxinas:</strong> ocorre com substâncias persistentes (metais pesados, certos pesticidas sintéticos) que se acumulam ao longo da cadeia alimentar — não é o mecanismo associado a nutrientes orgânicos como N e P do digestato.
          </p>
          <p>
            <strong>Destruição da camada de ozônio:</strong> causada por gases como CFCs (clorofluorcarbonos) reagindo com o ozônio estratosférico — sem relação com dejetos animais ou fertilizantes orgânicos.
          </p>
          <p>
            <strong>Inversão térmica:</strong> é um fenômeno meteorológico (uma camada de ar quente sobre uma camada de ar frio perto do solo) que impede a dispersão de poluentes atmosféricos — não tem relação com resíduos sólidos ou líquidos aplicados ao solo.
          </p>
          <p>
            <strong>Chuva ácida:</strong> resulta da emissão de óxidos de enxofre (SOₓ) e nitrogênio (NOₓ) principalmente pela queima de combustíveis fósseis, que reagem com a água da atmosfera formando ácidos — não é o destino de biofertilizante sólido/líquido aplicado ao solo que causa esse fenômeno atmosférico.
          </p>
        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       2. CONCEITOS
       ------------------------------------------------------------------ */
    conceitos: [
      { icone: "fa-recycle", titulo: "Biodigestão anaeróbica", text: "Decomposição de matéria orgânica por bactérias sem oxigênio, gerando biogás (metano) e digestato (adubo)." },
      { icone: "fa-water", titulo: "Eutrofização", text: "Excesso de nutrientes (N e P) num corpo d'água causa floração de algas, que ao morrer consome o oxigênio dissolvido." },
      { icone: "fa-seedling", titulo: "Digestato como fertilizante", text: "As 'sobras' do biodigestor, aplicadas de forma controlada no solo, devolvem nutrientes às plantas em vez de escoarem para a água." },
      { icone: "fa-arrows-rotate", titulo: "Ciclo de nutrientes controlado", text: "Fechar o ciclo N/P entre dejeto → adubo → solo → planta evita que esses nutrientes se acumulem descontroladamente na água." },
      { icone: "fa-triangle-exclamation", titulo: "Não confundir os problemas ambientais", text: "Bioacumulação, ozônio, inversão térmica e chuva ácida têm causas químicas/atmosféricas distintas — nenhuma é causada por excesso de N/P na água." }
    ],

    /* ------------------------------------------------------------------
       3. RESOLUÇÃO
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <div class="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4">
          <p class="font-bold text-emerald-300 mb-1"><i class="fa-solid fa-check-circle"></i> Gabarito: Alternativa B</p>
          <p>Usar as sobras do biodigestor (digestato) como fertilizante controlado impede que o nitrogênio e o fósforo dos dejetos animais escoem sem controle para rios e lagos, evitando a <strong>eutrofização dos corpos de água</strong>.</p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold"><i class="fa-solid fa-list-ol text-emerald-400"></i> Estratégia de resolução em 3 passos</h4>
          <p><strong>Passo 1 — Identifique o que são as "sobras" da etapa 4.</strong> É o digestato: um lodo rico em nitrogênio e fósforo, subproduto da decomposição dos dejetos animais dentro do biodigestor.</p>
          <p><strong>Passo 2 — Pergunte: o que aconteceria se essas sobras NÃO tivessem destino sustentável?</strong> Sem controle, esses nutrientes tenderiam a escoar para corpos d'água próximos (rios, lagos, córregos que recebem a drenagem da propriedade).</p>
          <p><strong>Passo 3 — Associe excesso de N e P na água ao processo que ele desencadeia.</strong> Excesso de nutrientes na água é a causa direta de eutrofização — floração de algas seguida de consumo excessivo de oxigênio dissolvido. Usar as sobras como fertilizante no solo evita justamente esse escoamento descontrolado.</p>
        </div>

        <div class="space-y-3">
          <h4 class="text-white font-bold"><i class="fa-solid fa-magnifying-glass text-emerald-400"></i> Por que cada alternativa está certa ou errada</h4>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">A) Bioacumulação de toxinas em plantas — ERRADA</p>
            <p class="text-xs">Bioacumulação está associada a substâncias tóxicas persistentes (metais pesados, certos pesticidas), que se concentram progressivamente na cadeia alimentar. O digestato usado como adubo é rico em nutrientes orgânicos (N, P), não em toxinas persistentes — o mecanismo não se aplica.</p>
          </div>

          <div class="border border-emerald-500/40 bg-emerald-950/20 rounded-lg p-3">
            <p class="font-bold text-emerald-300 text-xs mb-1">B) Eutrofização dos corpos de água — CORRETA</p>
            <p class="text-xs">É exatamente o problema evitado: nitrogênio e fósforo dos dejetos, quando escoam sem controle para a água, provocam eutrofização. Usar as sobras como fertilizante controlado no solo mantém esses nutrientes fora dos corpos d'água.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">C) Destruição da camada de ozônio — ERRADA</p>
            <p class="text-xs">É causada por gases halogenados (como CFCs) que reagem com o ozônio estratosférico. Nenhum composto emitido no manejo de dejetos animais ou biofertilizantes está associado a esse fenômeno.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">D) Ocorrência de inversão térmica — ERRADA</p>
            <p class="text-xs">Inversão térmica é um fenômeno atmosférico relacionado à estratificação de temperatura do ar, que aprisiona poluentes gasosos perto do solo — não tem relação com o destino de resíduos sólidos/líquidos como o digestato.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">E) Produção de chuva ácida — ERRADA</p>
            <p class="text-xs">Chuva ácida decorre da emissão atmosférica de óxidos de enxofre e nitrogênio, tipicamente da queima de combustíveis fósseis — um processo distinto do manejo de fertilizante orgânico no solo.</p>
          </div>

        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       4. GALERIA (4 diagramas SVG)
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "As 4 etapas da biodigestão",
        legenda: "Dejetos + água entram no biodigestor; bactérias anaeróbias geram biogás (etapa 3) e adubo/digestato (etapa 4).",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <rect x="10" y="55" width="80" height="50" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            <text x="50" y="75" fill="#e2e8f0" font-size="8" font-weight="bold" text-anchor="middle">1. Dejetos</text>
            <text x="50" y="90" fill="#94a3b8" font-size="7" text-anchor="middle">+ água</text>

            <text x="100" y="85" fill="#64748b" font-size="14" text-anchor="middle">→</text>

            <rect x="115" y="40" width="90" height="80" rx="6" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.5"/>
            <text x="160" y="65" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">2. Biodigestor</text>
            <text x="160" y="82" fill="#a7f3d0" font-size="7" text-anchor="middle">bactérias</text>
            <text x="160" y="94" fill="#a7f3d0" font-size="7" text-anchor="middle">anaeróbias</text>

            <text x="220" y="60" fill="#64748b" font-size="12" text-anchor="middle">↗</text>
            <text x="220" y="105" fill="#64748b" font-size="12" text-anchor="middle">↘</text>

            <rect x="235" y="15" width="100" height="45" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="285" y="35" fill="#bae6fd" font-size="8" font-weight="bold" text-anchor="middle">3. Biogás (CH₄)</text>
            <text x="285" y="50" fill="#bae6fd" font-size="7" text-anchor="middle">gerador / aquecedor</text>

            <rect x="235" y="95" width="100" height="45" rx="6" fill="#78350f" stroke="#fbbf24" stroke-width="1.5"/>
            <text x="285" y="115" fill="#fde68a" font-size="8" font-weight="bold" text-anchor="middle">4. Digestato</text>
            <text x="285" y="130" fill="#fde68a" font-size="7" text-anchor="middle">fertilizante no solo</text>

            <text x="360" y="122" fill="#64748b" font-size="12" text-anchor="middle">→</text>
            <rect x="375" y="95" width="75" height="45" rx="6" fill="#166534" stroke="#4ade80" stroke-width="1.5"/>
            <text x="412" y="115" fill="#bbf7d0" font-size="8" font-weight="bold" text-anchor="middle">Plantação</text>
            <text x="412" y="130" fill="#bbf7d0" font-size="7" text-anchor="middle">absorve N e P</text>
          </svg>`
      },
      {
        titulo: "Com destino sustentável x sem destino sustentável",
        legenda: "A diferença entre aplicar o digestato como adubo controlado e deixá-lo escoar sem controle para a água.",
        svg: `
          <svg viewBox="0 0 460 170" class="w-full h-auto">
            <text x="115" y="16" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">COM destino sustentável (etapa 4)</text>
            <rect x="30" y="30" width="80" height="40" fill="#78350f" stroke="#fbbf24" stroke-width="1.2" rx="4"/>
            <text x="70" y="53" fill="#fde68a" font-size="7" text-anchor="middle">digestato</text>
            <text x="115" y="60" fill="#64748b" font-size="12" text-anchor="middle">→</text>
            <rect x="130" y="30" width="70" height="40" fill="#166534" stroke="#4ade80" stroke-width="1.2" rx="4"/>
            <text x="165" y="53" fill="#bbf7d0" font-size="7" text-anchor="middle">solo/planta</text>
            <text x="115" y="90" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">✓ nutrientes ficam no ciclo terrestre</text>

            <text x="345" y="16" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">SEM destino sustentável</text>
            <rect x="260" y="105" width="80" height="40" fill="#78350f" stroke="#fbbf24" stroke-width="1.2" rx="4"/>
            <text x="300" y="128" fill="#fde68a" font-size="7" text-anchor="middle">dejeto</text>
            <text x="345" y="135" fill="#64748b" font-size="12" text-anchor="middle">→</text>
            <rect x="360" y="105" width="80" height="40" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.2" rx="4"/>
            <text x="400" y="128" fill="#bae6fd" font-size="7" text-anchor="middle">rio / lago</text>
            <text x="345" y="165" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">✗ excesso de N/P → eutrofização</text>
          </svg>`
      },
      {
        titulo: "A cascata da eutrofização evitada",
        legenda: "Excesso de N/P → floração de algas → morte das algas → decomposição consome O₂ → mortandade de peixes.",
        svg: `
          <svg viewBox="0 0 460 130" class="w-full h-auto">
            <rect x="10" y="40" width="90" height="50" rx="5" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
            <text x="55" y="60" fill="#e2e8f0" font-size="7" font-weight="bold" text-anchor="middle">Excesso</text>
            <text x="55" y="72" fill="#e2e8f0" font-size="7" text-anchor="middle">de N e P</text>
            <text x="108" y="68" fill="#64748b" font-size="11" text-anchor="middle">→</text>
            <rect x="120" y="40" width="90" height="50" rx="5" fill="#166534" stroke="#4ade80" stroke-width="1.2"/>
            <text x="165" y="60" fill="#bbf7d0" font-size="7" font-weight="bold" text-anchor="middle">Floração</text>
            <text x="165" y="72" fill="#bbf7d0" font-size="7" text-anchor="middle">de algas</text>
            <text x="218" y="68" fill="#64748b" font-size="11" text-anchor="middle">→</text>
            <rect x="230" y="40" width="90" height="50" rx="5" fill="#78350f" stroke="#fbbf24" stroke-width="1.2"/>
            <text x="275" y="60" fill="#fde68a" font-size="7" font-weight="bold" text-anchor="middle">Decompositores</text>
            <text x="275" y="72" fill="#fde68a" font-size="7" text-anchor="middle">consomem O₂</text>
            <text x="328" y="68" fill="#64748b" font-size="11" text-anchor="middle">→</text>
            <rect x="340" y="40" width="110" height="50" rx="5" fill="#450a0a" stroke="#f87171" stroke-width="1.2"/>
            <text x="395" y="60" fill="#fca5a5" font-size="7" font-weight="bold" text-anchor="middle">Mortandade</text>
            <text x="395" y="72" fill="#fca5a5" font-size="7" text-anchor="middle">de peixes</text>
            <text x="230" y="115" fill="#94a3b8" font-size="8" text-anchor="middle">Essa cascata é interrompida quando o N/P vira adubo no solo, não poluição na água</text>
          </svg>`
      },
      {
        titulo: "Um problema ambiental, cinco causas diferentes",
        legenda: "As alternativas testam se você sabe distinguir causas de poluentes na água, no ar e na cadeia alimentar.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <rect x="10" y="10" width="440" height="26" fill="#1e293b" rx="4"/>
            <text x="130" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Problema ambiental</text>
            <text x="330" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Causa real</text>

            <text x="20" y="52" fill="#e2e8f0" font-size="8">A) Bioacumulação</text>
            <text x="230" y="52" fill="#94a3b8" font-size="7">toxinas persistentes na cadeia alimentar</text>

            <rect x="10" y="60" width="440" height="26" fill="#064e3b" rx="4"/>
            <text x="20" y="77" fill="#6ee7b7" font-size="8" font-weight="bold">B) Eutrofização ✓</text>
            <text x="230" y="77" fill="#a7f3d0" font-size="7" font-weight="bold">excesso de N/P escoando para a água</text>

            <text x="20" y="102" fill="#e2e8f0" font-size="8">C) Destruição do ozônio</text>
            <text x="230" y="102" fill="#94a3b8" font-size="7">gases halogenados (CFCs) na estratosfera</text>

            <text x="20" y="126" fill="#e2e8f0" font-size="8">D) Inversão térmica</text>
            <text x="230" y="126" fill="#94a3b8" font-size="7">estratificação de temperatura do ar</text>

            <text x="20" y="150" fill="#e2e8f0" font-size="8">E) Chuva ácida</text>
            <text x="230" y="150" fill="#94a3b8" font-size="7">SOₓ/NOₓ da queima de combustíveis fósseis</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       5. SIMULADOR
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: destino das sobras do biodigestor",
      descricao: "Escolha o destino do digestato (adubo) produzido na etapa 4 e veja o efeito sobre o nível de nutrientes e o oxigênio dissolvido no rio próximo à propriedade.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <p class="text-[11px] text-slate-400 mb-1">Destino das sobras (digestato):</p>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q111destino" data-sim="destino" value="adubo" checked class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Aplicado como fertilizante controlado no solo (etapa 4)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q111destino" data-sim="destino" value="rio" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Descartado sem controle, escoando para o rio</span>
            </label>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-amber-300 font-bold">N e P no rio</span>
                  <span class="text-amber-300 font-mono" data-out="nutrientes">15%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="nutrientes" class="h-full bg-amber-500 transition-all" style="width:15%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-sky-300 font-bold">O₂ dissolvido no rio</span>
                  <span class="text-sky-300 font-mono" data-out="o2">90%</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="o2" class="h-full bg-sky-500 transition-all" style="width:90%"></div>
                </div>
              </div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var radios = raiz.querySelectorAll('[data-sim="destino"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };

        function atualizar() {
          var destino = raiz.querySelector('[data-sim="destino"]:checked').value;
          var nutrientes = destino === 'adubo' ? 15 : 85;
          var o2 = destino === 'adubo' ? 90 : 18;

          saida('nutrientes').textContent = nutrientes + '%';
          saida('o2').textContent = o2 + '%';
          barra('nutrientes').style.width = nutrientes + '%';
          barra('o2').style.width = o2 + '%';

          var v = saida('veredito');
          if (destino === 'adubo') {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            v.innerHTML = '<strong>Ciclo sustentável.</strong> O digestato vira adubo no solo, as plantas absorvem o N e o P, e o rio permanece com nutrientes e oxigênio em níveis saudáveis — sem eutrofização.';
          } else {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200';
            v.innerHTML = '<strong>Eutrofização em curso.</strong> O excesso de nutrientes no rio provoca floração de algas; a decomposição delas consome o oxigênio dissolvido, ameaçando a vida aquática.';
          }
        }

        radios.forEach(function (r) { r.addEventListener('change', atualizar); });
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-emerald-300 block"><i class="fa-solid fa-recycle"></i> Etapa 4 (adubo no solo) fecha o ciclo de N/P e evita eutrofização dos corpos de água</span>
        <svg viewBox="0 0 460 100" class="w-full h-24 mx-auto">
          <rect x="20" y="25" width="100" height="50" fill="#78350f" stroke="#fbbf24" stroke-width="1.5" rx="4"/>
          <text x="70" y="55" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">Digestato</text>
          <text x="200" y="55" fill="#67e8f9" font-size="14" text-anchor="middle">→</text>
          <rect x="230" y="25" width="100" height="50" fill="#166534" stroke="#4ade80" stroke-width="1.5" rx="4"/>
          <text x="280" y="55" fill="#bbf7d0" font-size="9" font-weight="bold" text-anchor="middle">Solo / planta</text>
          <text x="360" y="55" fill="#94a3b8" font-size="9" text-anchor="middle">≠</text>
          <rect x="380" y="25" width="60" height="50" fill="#0c4a6e" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,3" rx="4"/>
          <text x="410" y="55" fill="#fca5a5" font-size="7" font-weight="bold" text-anchor="middle">rio</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q112",
    numero: "Questão 112",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "biologia",
    materia: "Biologia / Bioquímica, Nutrição & Biotecnologia",
    materiaCor: "emerald",
    materiaIcone: "fa-wheat-awn",
    titulo: "Arroz Dourado (Golden Rice): Betacaroteno, Vitamina A e Cegueira Noturna",
    tags: ["Biologia", "Bioquímica", "Vitaminas", "Vitamina A", "Biotecnologia", "Transgenia", "Golden Rice"],
    alternativaCorreta: "D",
    userNotes: "",
    userCustomImage: null,

    enunciado: `<em>Golden Rice</em>, ou arroz dourado, é uma variedade de arroz enriquecida em betacaroteno, precursor da vitamina A. Foi desenvolvida para ajudar a combater a doença decorrente da deficiência dessa vitamina. Para a obtenção dessa variedade de arroz, foram utilizados métodos de engenharia genética.
    <br><br>
    <p class="text-[10px] text-slate-500">BORÉM, A.; SANTOS, F. R. <strong>Entendendo a biotecnologia</strong>. Viçosa: UFV, 2008 (adaptado).</p>
    <br>
    Esse alimento contribui para diminuir a carência associada a qual doença?`,

    alternativas: [
      { letra: "A", texto: "Hemofilia.", correta: false },
      { letra: "B", texto: "Escorbuto.", correta: false },
      { letra: "C", texto: "Raquitismo.", correta: false },
      { letra: "D", texto: "Cegueira noturna.", correta: true },
      { letra: "E", texto: "Anemia perniciosa.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-emerald-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre o papel da vitamina A no corpo humano e por que sua carência causa especificamente um problema de visão — a questão é, no fundo, associar corretamente vitamina → doença carencial.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">1.</span> O que é o Golden Rice e por que ele foi criado</h4>
          <p>
            O arroz comum tem endosperma (a parte comestível do grão) praticamente sem betacaroteno. Cientistas inseriram, por engenharia genética, genes de outros organismos (como narciso e uma bactéria) que codificam enzimas da via de síntese do betacaroteno, fazendo o endosperma do arroz acumular esse pigmento — daí a cor dourada/amarelada que dá nome à variedade.
          </p>
          <p>
            O objetivo é nutricional: em regiões onde o arroz é alimento-base e a dieta é pobre em fontes de vitamina A, o Golden Rice oferece uma via alimentar simples e barata para reduzir a deficiência dessa vitamina em larga escala.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">2.</span> Betacaroteno: a pró-vitamina A</h4>
          <p>
            O <strong>betacaroteno</strong> é um pigmento carotenoide (presente também em cenoura, abóbora, manga) que o corpo humano converte enzimaticamente em <strong>retinol</strong>, a forma ativa da vitamina A. Por isso o betacaroteno é chamado de <strong>pró-vitamina A</strong>: não é a vitamina em si, mas seu precursor direto, absorvido no intestino e convertido no fígado e em outros tecidos.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">3.</span> Para que serve a vitamina A no corpo</h4>
          <p>
            A vitamina A (retinol) tem dois papéis centrais bem estabelecidos: manutenção da integridade de tecidos epiteliais (pele, córnea, mucosas) e, crucialmente, a <strong>visão</strong>. Nos bastonetes da retina — as células fotorreceptoras responsáveis pela visão em condições de pouca luz — o retinol é convertido em <strong>retinal</strong>, componente essencial da <strong>rodopsina</strong>, o pigmento visual que capta luz em ambientes escuros.
          </p>
          <p>
            Sem vitamina A suficiente, a regeneração da rodopsina fica comprometida, e a capacidade de enxergar em pouca luz piora progressivamente — esse é o quadro clínico conhecido como <strong>cegueira noturna (nictalopia)</strong>, um dos primeiros e mais característicos sinais de deficiência de vitamina A, podendo evoluir para xeroftalmia e cegueira permanente em casos graves e prolongados.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">4.</span> Mapa rápido: vitamina/nutriente → doença carencial</h4>
          <table class="w-full text-xs border-collapse">
            <thead>
              <tr class="border-b border-slate-700 text-slate-400">
                <th class="text-left py-1">Carência</th>
                <th class="text-left py-1">Doença associada</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-slate-800"><td class="py-1">Vitamina C</td><td>Escorbuto (sangramento de gengivas, má cicatrização)</td></tr>
              <tr class="border-b border-slate-800"><td class="py-1">Vitamina D</td><td>Raquitismo (crianças) / osteomalácia (adultos)</td></tr>
              <tr class="border-b border-slate-800"><td class="py-1">Vitamina B12</td><td>Anemia perniciosa</td></tr>
              <tr class="border-b border-emerald-500/40 text-emerald-300 font-bold"><td class="py-1">Vitamina A</td><td>Cegueira noturna / xeroftalmia</td></tr>
            </tbody>
          </table>
          <p>
            Note que <strong>hemofilia</strong> não entra nessa tabela: não é uma doença carencial (causada por falta de nutriente), mas um <strong>distúrbio genético</strong> hereditário que afeta a coagulação sanguínea — categoria completamente diferente das demais alternativas.
          </p>
        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       2. CONCEITOS
       ------------------------------------------------------------------ */
    conceitos: [
      { icone: "fa-wheat-awn", titulo: "Golden Rice", text: "Arroz geneticamente modificado para acumular betacaroteno no endosperma, combatendo a deficiência de vitamina A." },
      { icone: "fa-carrot", titulo: "Betacaroteno (pró-vitamina A)", text: "Pigmento carotenoide convertido pelo corpo em retinol, a forma ativa da vitamina A." },
      { icone: "fa-eye", titulo: "Rodopsina e visão noturna", text: "Retinal (derivado da vitamina A) é componente essencial da rodopsina, o pigmento que permite enxergar em pouca luz." },
      { icone: "fa-moon", titulo: "Cegueira noturna (nictalopia)", text: "Um dos primeiros sinais de deficiência de vitamina A — dificuldade progressiva de enxergar em ambientes escuros." },
      { icone: "fa-table", titulo: "Vitamina ≠ doença genética", text: "Hemofilia é um distúrbio genético de coagulação, não uma doença causada por deficiência nutricional — categoria diferente das demais alternativas." }
    ],

    /* ------------------------------------------------------------------
       3. RESOLUÇÃO
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <div class="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4">
          <p class="font-bold text-emerald-300 mb-1"><i class="fa-solid fa-check-circle"></i> Gabarito: Alternativa D</p>
          <p>O Golden Rice fornece betacaroteno, precursor da vitamina A. A deficiência dessa vitamina prejudica a rodopsina dos bastonetes da retina, causando <strong>cegueira noturna</strong>.</p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold"><i class="fa-solid fa-list-ol text-emerald-400"></i> Estratégia de resolução em 3 passos</h4>
          <p><strong>Passo 1 — Identifique a vitamina envolvida.</strong> O enunciado é direto: betacaroteno é "precursor da vitamina A". A pergunta é sobre a deficiência dessa vitamina especificamente.</p>
          <p><strong>Passo 2 — Lembre-se da função biológica central da vitamina A.</strong> Além da manutenção de tecidos epiteliais, seu papel mais conhecido e cobrado é na visão: ela é componente da rodopsina dos bastonetes, essencial para enxergar em pouca luz.</p>
          <p><strong>Passo 3 — Associe deficiência de vitamina A à doença correspondente.</strong> A falta de vitamina A leva à cegueira noturna (e, em casos graves, à xeroftalmia) — não às demais condições listadas, que estão associadas a outras vitaminas ou a um distúrbio genético.</p>
        </div>

        <div class="space-y-3">
          <h4 class="text-white font-bold"><i class="fa-solid fa-magnifying-glass text-emerald-400"></i> Por que cada alternativa está certa ou errada</h4>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">A) Hemofilia — ERRADA</p>
            <p class="text-xs">Não é uma doença carencial: é um distúrbio genético hereditário (ligado ao cromossomo X) que compromete fatores de coagulação sanguínea. Nenhuma vitamina, por si só, previne ou trata hemofilia.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">B) Escorbuto — ERRADA</p>
            <p class="text-xs">Escorbuto é causado por deficiência de <strong>vitamina C</strong> (ácido ascórbico), não de vitamina A. O betacaroteno do Golden Rice não tem relação com essa via.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">C) Raquitismo — ERRADA</p>
            <p class="text-xs">Raquitismo (em crianças) e osteomalácia (em adultos) resultam de deficiência de <strong>vitamina D</strong>, relacionada à absorção de cálcio e à mineralização óssea — um eixo bioquímico distinto do da vitamina A.</p>
          </div>

          <div class="border border-emerald-500/40 bg-emerald-950/20 rounded-lg p-3">
            <p class="font-bold text-emerald-300 text-xs mb-1">D) Cegueira noturna — CORRETA</p>
            <p class="text-xs">É exatamente a doença carencial associada à falta de vitamina A: sem retinol suficiente para regenerar a rodopsina dos bastonetes, a visão em pouca luz é a primeira função a ser comprometida.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">E) Anemia perniciosa — ERRADA</p>
            <p class="text-xs">Está associada à deficiência de <strong>vitamina B12</strong> (cobalamina), essencial para a formação de hemácias e para o sistema nervoso — sem relação direta com a via do betacaroteno/vitamina A.</p>
          </div>

        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       4. GALERIA (4 diagramas SVG)
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Do betacaroteno à visão noturna",
        legenda: "Betacaroteno (Golden Rice) → retinol → retinal → rodopsina nos bastonetes → visão em pouca luz.",
        svg: `
          <svg viewBox="0 0 460 130" class="w-full h-auto">
            <rect x="10" y="40" width="90" height="50" rx="5" fill="#78350f" stroke="#fbbf24" stroke-width="1.2"/>
            <text x="55" y="60" fill="#fde68a" font-size="7" font-weight="bold" text-anchor="middle">Betacaroteno</text>
            <text x="55" y="72" fill="#fde68a" font-size="7" text-anchor="middle">(Golden Rice)</text>
            <text x="108" y="68" fill="#64748b" font-size="11" text-anchor="middle">→</text>
            <rect x="120" y="40" width="90" height="50" rx="5" fill="#166534" stroke="#4ade80" stroke-width="1.2"/>
            <text x="165" y="60" fill="#bbf7d0" font-size="7" font-weight="bold" text-anchor="middle">Retinol</text>
            <text x="165" y="72" fill="#bbf7d0" font-size="7" text-anchor="middle">(vitamina A)</text>
            <text x="218" y="68" fill="#64748b" font-size="11" text-anchor="middle">→</text>
            <rect x="230" y="40" width="90" height="50" rx="5" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.2"/>
            <text x="275" y="60" fill="#bae6fd" font-size="7" font-weight="bold" text-anchor="middle">Retinal</text>
            <text x="275" y="72" fill="#bae6fd" font-size="7" text-anchor="middle">+ opsina</text>
            <text x="328" y="68" fill="#64748b" font-size="11" text-anchor="middle">→</text>
            <rect x="340" y="40" width="110" height="50" rx="5" fill="#312e81" stroke="#a5b4fc" stroke-width="1.2"/>
            <text x="395" y="60" fill="#e0e7ff" font-size="7" font-weight="bold" text-anchor="middle">Rodopsina</text>
            <text x="395" y="72" fill="#e0e7ff" font-size="7" text-anchor="middle">(bastonetes)</text>
            <text x="230" y="115" fill="#94a3b8" font-size="8" text-anchor="middle">Sem retinol suficiente, a rodopsina não se regenera → cegueira noturna</text>
          </svg>`
      },
      {
        titulo: "Mapa vitamina/nutriente → doença carencial",
        legenda: "Cada alternativa da questão corresponde a uma via bioquímica diferente — só a vitamina A liga-se ao Golden Rice.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <rect x="10" y="10" width="440" height="26" fill="#1e293b" rx="4"/>
            <text x="120" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Alternativa</text>
            <text x="330" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Via correta</text>

            <text x="20" y="52" fill="#e2e8f0" font-size="8">A) Hemofilia</text>
            <text x="230" y="52" fill="#94a3b8" font-size="7">distúrbio genético (coagulação) — não é vitamina</text>

            <text x="20" y="76" fill="#e2e8f0" font-size="8">B) Escorbuto</text>
            <text x="230" y="76" fill="#94a3b8" font-size="7">deficiência de vitamina C</text>

            <text x="20" y="100" fill="#e2e8f0" font-size="8">C) Raquitismo</text>
            <text x="230" y="100" fill="#94a3b8" font-size="7">deficiência de vitamina D</text>

            <rect x="10" y="108" width="440" height="26" fill="#064e3b" rx="4"/>
            <text x="20" y="125" fill="#6ee7b7" font-size="8" font-weight="bold">D) Cegueira noturna ✓</text>
            <text x="230" y="125" fill="#a7f3d0" font-size="7" font-weight="bold">deficiência de vitamina A (Golden Rice)</text>

            <text x="20" y="150" fill="#e2e8f0" font-size="8">E) Anemia perniciosa</text>
            <text x="230" y="150" fill="#94a3b8" font-size="7">deficiência de vitamina B12</text>
          </svg>`
      },
      {
        titulo: "Arroz comum x Golden Rice",
        legenda: "Engenharia genética insere genes que fazem o endosperma acumular betacaroteno, dando a cor dourada característica.",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <ellipse cx="110" cy="70" rx="70" ry="45" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
            <text x="110" y="75" fill="#334155" font-size="9" font-weight="bold" text-anchor="middle">Arroz comum</text>
            <text x="110" y="120" fill="#94a3b8" font-size="7" text-anchor="middle">sem betacaroteno no endosperma</text>

            <text x="220" y="75" fill="#64748b" font-size="16" text-anchor="middle">+ genes</text>
            <text x="220" y="90" fill="#94a3b8" font-size="7" text-anchor="middle">(narciso/bactéria)</text>
            <text x="220" y="55" fill="#64748b" font-size="16" text-anchor="middle">→</text>

            <ellipse cx="350" cy="70" rx="70" ry="45" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
            <text x="350" y="75" fill="#78350f" font-size="9" font-weight="bold" text-anchor="middle">Golden Rice</text>
            <text x="350" y="120" fill="#78350f" font-size="7" text-anchor="middle">endosperma rico em betacaroteno</text>
          </svg>`
      },
      {
        titulo: "Vitamina A: dois papéis principais no corpo",
        legenda: "Manutenção de epitélios e visão noturna — é essa segunda função que a questão está testando.",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <rect x="30" y="20" width="180" height="100" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            <text x="120" y="42" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">Integridade epitelial</text>
            <text x="120" y="65" fill="#94a3b8" font-size="7" text-anchor="middle">Pele, córnea e mucosas</text>
            <text x="120" y="80" fill="#94a3b8" font-size="7" text-anchor="middle">saudáveis e íntegras</text>
            <text x="120" y="102" fill="#64748b" font-size="7" text-anchor="middle">(não é o foco desta questão)</text>

            <rect x="250" y="20" width="180" height="100" rx="6" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.5"/>
            <text x="340" y="42" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">Visão em pouca luz</text>
            <text x="340" y="65" fill="#a7f3d0" font-size="7" text-anchor="middle">Retinal + opsina = rodopsina</text>
            <text x="340" y="80" fill="#a7f3d0" font-size="7" text-anchor="middle">nos bastonetes da retina</text>
            <text x="340" y="102" fill="#6ee7b7" font-size="7" font-weight="bold" text-anchor="middle">Deficiência → cegueira noturna</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       5. SIMULADOR
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: associe a vitamina à doença carencial",
      descricao: "Escolha uma vitamina (ou o caso do distúrbio genético) e veja qual doença carencial está associada a ela — reforçando a distinção que a questão do Golden Rice exige.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-2 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <p class="text-[11px] text-slate-400 mb-1">Selecione:</p>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q112vit" data-sim="vit" value="A" checked class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Vitamina A (betacaroteno / Golden Rice)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q112vit" data-sim="vit" value="C" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Vitamina C</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q112vit" data-sim="vit" value="D" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Vitamina D</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q112vit" data-sim="vit" value="B12" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Vitamina B12</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q112vit" data-sim="vit" value="genetico" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">(Não é vitamina) Distúrbio genético</span>
            </label>
          </div>

          <div class="space-y-3">
            <div data-out="painel" class="p-4 rounded-xl border text-[11px] leading-relaxed bg-slate-950 border-slate-800 text-slate-300"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var radios = raiz.querySelectorAll('[data-sim="vit"]');
        var painel = raiz.querySelector('[data-out="painel"]');

        var dados = {
          A: { doenca: 'Cegueira noturna (nictalopia)', classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200', texto: 'A vitamina A é essencial para a rodopsina dos bastonetes. Sem ela, a visão em pouca luz é comprometida — exatamente o problema que o Golden Rice ajuda a combater.' },
          C: { doenca: 'Escorbuto', classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200', texto: 'A vitamina C é essencial para a síntese de colágeno. Sua falta causa sangramento de gengivas, má cicatrização e fraqueza — nada a ver com a via do betacaroteno.' },
          D: { doenca: 'Raquitismo (crianças) / osteomalácia (adultos)', classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-sky-500/40 bg-sky-950/30 text-sky-200', texto: 'A vitamina D regula a absorção de cálcio e a mineralização óssea. Sua falta compromete os ossos — um eixo bioquímico distinto do da vitamina A.' },
          B12: { doenca: 'Anemia perniciosa', classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200', texto: 'A vitamina B12 é essencial para a formação de hemácias e a saúde do sistema nervoso. Sua falta causa anemia perniciosa — sem relação com o betacaroteno.' },
          genetico: { doenca: 'Hemofilia', classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-slate-500/40 bg-slate-800/30 text-slate-300', texto: 'Hemofilia não é causada por falta de nutriente — é um distúrbio genético hereditário que compromete a coagulação sanguínea. Nenhuma vitamina previne ou trata hemofilia.' }
        };

        function atualizar() {
          var v = raiz.querySelector('[data-sim="vit"]:checked').value;
          var d = dados[v];
          painel.className = d.classe;
          painel.innerHTML = '<strong>' + d.doenca + '</strong><br><br>' + d.texto;
        }

        radios.forEach(function (r) { r.addEventListener('change', atualizar); });
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-emerald-300 block"><i class="fa-solid fa-wheat-awn"></i> Golden Rice → betacaroteno → vitamina A → rodopsina → previne cegueira noturna</span>
        <svg viewBox="0 0 460 90" class="w-full h-24 mx-auto">
          <rect x="20" y="25" width="100" height="50" fill="#78350f" stroke="#fbbf24" stroke-width="1.5" rx="4"/>
          <text x="70" y="55" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">Golden Rice</text>
          <text x="200" y="55" fill="#67e8f9" font-size="14" text-anchor="middle">→</text>
          <rect x="230" y="25" width="100" height="50" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.5" rx="4"/>
          <text x="280" y="55" fill="#bbf7d0" font-size="9" font-weight="bold" text-anchor="middle">Vitamina A</text>
          <text x="360" y="55" fill="#94a3b8" font-size="14" text-anchor="middle">→</text>
          <rect x="380" y="25" width="60" height="50" fill="#312e81" stroke="#a5b4fc" stroke-width="1.5" rx="4"/>
          <text x="410" y="50" fill="#e0e7ff" font-size="7" font-weight="bold" text-anchor="middle">visão</text>
          <text x="410" y="62" fill="#e0e7ff" font-size="7" font-weight="bold" text-anchor="middle">noturna</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q113",
    numero: "Questão 113",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "fisica",
    materia: "Física / Eletromagnetismo & Força Elétrica",
    materiaCor: "purple",
    materiaIcone: "fa-tv",
    titulo: "Tubo de Imagem (CRT): Desvio do Feixe de Elétrons por Campo Elétrico",
    tags: ["Física", "Eletromagnetismo", "Campo Elétrico", "Força Elétrica", "Carga Negativa", "Tubo de Imagem", "CRT"],
    alternativaCorreta: "B",
    userNotes: "",
    userCustomImage: null,

    enunciado: `A Figura 1 apresenta o esquema de um tubo de imagem em que um filamento, na posição A, libera elétrons por efeito termiônico. Esses elétrons formam um feixe estreito, que é acelerado por campos elétricos em direção à parte interna da tela. Nesse caminho, o feixe de elétrons passa por outro campo elétrico, na região B, atingindo, em seguida, a parte interna da tela do tubo, a qual é recoberta por um material que emite luz ao receber o impacto dos elétrons.
    <br><br>
    <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
      <p class="text-center text-purple-300 font-bold text-xs uppercase tracking-wide mb-2">Figura 1</p>
      <svg viewBox="0 0 460 200" class="w-full h-auto">
        <rect x="20" y="80" width="70" height="40" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="25" y="85" width="8" height="30" fill="#0f172a"/>
        <text x="40" y="75" fill="#e2e8f0" font-size="10" font-weight="bold" text-anchor="middle">A</text>
        <line x1="90" y1="100" x2="150" y2="100" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3,2"/>
        <rect x="150" y="88" width="35" height="24" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>
        <text x="167" y="82" fill="#e2e8f0" font-size="10" font-weight="bold" text-anchor="middle">B</text>
        <polygon points="185,100 320,30 320,170" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="330" y="24" fill="#e2e8f0" font-size="10" font-weight="bold">Tela</text>
        <line x1="185" y1="100" x2="320" y2="40" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2"/>
        <text x="326" y="42" fill="#c4b5fd" font-size="10" font-weight="bold">1</text>
        <line x1="185" y1="100" x2="320" y2="80" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2"/>
        <text x="300" y="94" fill="#c4b5fd" font-size="10" font-weight="bold">4</text>
        <line x1="185" y1="100" x2="320" y2="100" stroke="#f87171" stroke-width="1.3" stroke-dasharray="2,2"/>
        <text x="308" y="98" fill="#fca5a5" font-size="10" font-weight="bold">5</text>
        <text x="326" y="106" fill="#fca5a5" font-size="10" font-weight="bold">3</text>
        <line x1="185" y1="100" x2="320" y2="150" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2"/>
        <text x="308" y="156" fill="#c4b5fd" font-size="10" font-weight="bold">2</text>
      </svg>
    </div>
    <br>
    Na Figura 2, a carga negativa representa o feixe de elétrons que é acelerado e, posteriormente, atinge um ponto da tela. O campo elétrico na região B apresenta a seguinte configuração:
    <br><br>
    <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
      <p class="text-center text-purple-300 font-bold text-xs uppercase tracking-wide mb-2">Figura 2</p>
      <svg viewBox="0 0 320 130" class="w-full h-auto mx-auto max-w-sm">
        <line x1="40" y1="20" x2="40" y2="110" stroke="#38bdf8" stroke-width="2"/><polygon points="40,20 36,28 44,28" fill="#38bdf8"/>
        <line x1="90" y1="20" x2="90" y2="110" stroke="#38bdf8" stroke-width="2"/><polygon points="90,20 86,28 94,28" fill="#38bdf8"/>
        <line x1="140" y1="20" x2="140" y2="110" stroke="#38bdf8" stroke-width="2"/><polygon points="140,20 136,28 144,28" fill="#38bdf8"/>
        <line x1="190" y1="20" x2="190" y2="110" stroke="#38bdf8" stroke-width="2"/><polygon points="190,20 186,28 194,28" fill="#38bdf8"/>
        <line x1="240" y1="20" x2="240" y2="110" stroke="#38bdf8" stroke-width="2"/><polygon points="240,20 236,28 244,28" fill="#38bdf8"/>
        <circle cx="65" cy="65" r="14" fill="#fbbf24" stroke="#78350f" stroke-width="1.5"/>
        <text x="65" y="70" fill="#78350f" font-size="14" font-weight="bold" text-anchor="middle">−</text>
        <line x1="85" y1="65" x2="120" y2="65" stroke="#fbbf24" stroke-width="2.5"/><polygon points="120,65 112,60 112,70" fill="#fbbf24"/>
        <text x="102" y="55" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">v</text>
        <text x="270" y="65" fill="#7dd3fc" font-size="13" font-weight="bold" text-anchor="middle">E</text>
      </svg>
    </div>
    <p class="text-[10px] text-slate-500 mt-2">Grupo de Reelaboração do Ensino de Física. <strong>Física 3: eletromagnetismo</strong>. São Paulo: Edusp, 2000 (adaptado).</p>
    <br>
    Nessa situação, qual ponto da tela será atingido pelo feixe de elétrons?`,

    alternativas: [
      { letra: "A", texto: "1", correta: false },
      { letra: "B", texto: "2", correta: true },
      { letra: "C", texto: "3", correta: false },
      { letra: "D", texto: "4", correta: false },
      { letra: "E", texto: "5", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-purple-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre a regra mais importante do eletromagnetismo para esta questão: a força elétrica sobre uma carga <strong>negativa</strong> aponta no sentido <strong>oposto</strong> ao campo elétrico.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">1.</span> Como funciona um tubo de imagem (CRT)</h4>
          <p>
            No filamento (posição A), elétrons são liberados por <strong>efeito termiônico</strong> (aquecimento libera elétrons da superfície do metal). Campos elétricos aceleram esse feixe estreito de elétrons em direção à tela. No caminho, o feixe passa pela região B, onde outro campo elétrico pode <strong>desviar</strong> o feixe verticalmente (ou horizontalmente) antes de ele atingir a tela — é assim que, em uma TV de tubo antiga, o feixe varre a tela ponto a ponto para formar a imagem.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">2.</span> Força elétrica: F = qE</h4>
          <p>
            A força elétrica sobre uma carga <code>q</code> imersa em um campo elétrico <code>E</code> é dada por <code>F = qE</code>. O vetor força tem a mesma direção do campo <code>E</code>, mas o <strong>sentido</strong> depende do sinal da carga:
          </p>
          <ul class="list-disc list-inside space-y-1 pl-2">
            <li>Carga <strong>positiva</strong>: força no <strong>mesmo sentido</strong> de E.</li>
            <li>Carga <strong>negativa</strong>: força em sentido <strong>oposto</strong> a E.</li>
          </ul>
          <p>
            O elétron tem carga negativa. Portanto, a força elétrica sobre ele aponta sempre na direção contrária à do campo <code>E</code> aplicado.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">3.</span> Lendo a Figura 2</h4>
          <p>
            O elétron entra na região B com velocidade horizontal <code>v</code>, apontando para a direita. O campo elétrico <code>E</code> na região B aponta <strong>para cima</strong> (setas verticais ascendentes). Como a carga do elétron é negativa, a força elétrica sobre ele aponta para <strong>baixo</strong> — sentido oposto ao de E.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">4.</span> Analogia com lançamento horizontal</h4>
          <p>
            A trajetória do elétron dentro da região B é análoga a um lançamento horizontal sob gravidade: o elétron mantém sua velocidade horizontal constante (<code>v</code>) enquanto ganha velocidade vertical <strong>para baixo</strong> devido à força elétrica constante. O resultado é uma trajetória parabólica que se curva para baixo — assim como uma bola lançada horizontalmente cai por causa da gravidade, mas aqui quem "puxa" o elétron para baixo é a força elétrica, não o peso.
          </p>
          <p>
            Depois de sair da região B (onde o campo já não atua), o elétron segue em <strong>linha reta</strong>, na direção que ganhou até ali, até atingir a tela — um pouco abaixo da linha central (não desviada) por onde passaria se não houvesse campo elétrico em B.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">5.</span> Relacionando com os pontos da tela</h4>
          <p>
            Na Figura 1, a linha central (sem desvio) sairia de B em direção ao ponto <strong>3</strong>, na borda da tela, alinhado horizontalmente com a saída do feixe. Como o feixe é desviado <strong>para baixo</strong>, ele atinge um ponto <strong>abaixo</strong> dessa linha central — que é o ponto <strong>2</strong>. Os pontos 1 e 4, acima da linha central, corresponderiam a um desvio para <strong>cima</strong>, que ocorreria apenas se a força sobre o elétron apontasse no mesmo sentido de E — o que não é o caso para uma carga negativa.
          </p>
        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       2. CONCEITOS
       ------------------------------------------------------------------ */
    conceitos: [
      { icone: "fa-square-root-variable", titulo: "F = qE", text: "A força elétrica sobre uma carga é o produto da carga pelo campo elétrico no ponto onde ela está." },
      { icone: "fa-arrow-down", titulo: "Carga negativa → força oposta a E", text: "Para cargas negativas (como o elétron), a força elétrica aponta em sentido contrário ao do campo elétrico aplicado." },
      { icone: "fa-chart-line", titulo: "Trajetória parabólica", text: "Velocidade horizontal constante + força vertical constante geram uma trajetória curva, análoga a um lançamento horizontal sob gravidade." },
      { icone: "fa-tv", titulo: "Tubo de imagem (CRT)", text: "Elétrons liberados por efeito termiônico são acelerados e desviados por campos elétricos até atingir a tela, formando a imagem." },
      { icone: "fa-bolt", titulo: "Efeito termiônico", text: "Aquecimento de um filamento libera elétrons de sua superfície — a fonte do feixe de elétrons no tubo de imagem." }
    ],

    /* ------------------------------------------------------------------
       3. RESOLUÇÃO
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <div class="bg-purple-950/30 border border-purple-500/30 rounded-xl p-4">
          <p class="font-bold text-purple-300 mb-1"><i class="fa-solid fa-check-circle"></i> Gabarito: Alternativa B</p>
          <p>Como o elétron tem carga negativa e o campo E aponta para cima, a força elétrica sobre ele aponta para baixo. O feixe se desvia para baixo e atinge o ponto <strong>2</strong>, abaixo da linha central (ponto 3).</p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold"><i class="fa-solid fa-list-ol text-purple-400"></i> Estratégia de resolução em 3 passos</h4>
          <p><strong>Passo 1 — Determine o sentido da força elétrica.</strong> F = qE. Como a carga do elétron é negativa e E aponta para cima, a força aponta para baixo (sentido oposto a E).</p>
          <p><strong>Passo 2 — Visualize a trajetória.</strong> O elétron entra com velocidade horizontal e sofre uma força vertical constante para baixo — trajetória parabólica que se curva para baixo, como um lançamento horizontal sob gravidade.</p>
          <p><strong>Passo 3 — Identifique o ponto na tela.</strong> A linha central (sem desvio) apontaria para o ponto 3. Como o desvio é para baixo, o feixe atinge o ponto imediatamente abaixo dessa linha: o ponto 2.</p>
        </div>

        <div class="space-y-3">
          <h4 class="text-white font-bold"><i class="fa-solid fa-magnifying-glass text-purple-400"></i> Por que cada alternativa está certa ou errada</h4>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">A) Ponto 1 — ERRADA</p>
            <p class="text-xs">É o ponto mais alto, exigiria um desvio para cima muito maior do que o esperado, além de estar no sentido errado (força é para baixo, não para cima).</p>
          </div>

          <div class="border border-emerald-500/40 bg-emerald-950/20 rounded-lg p-3">
            <p class="font-bold text-emerald-300 text-xs mb-1">B) Ponto 2 — CORRETA</p>
            <p class="text-xs">É o ponto abaixo da linha central, compatível com uma força elétrica para baixo sobre a carga negativa — exatamente o resultado de F = qE com q negativo e E apontando para cima.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">C) Ponto 3 — ERRADA</p>
            <p class="text-xs">É o ponto que seria atingido se <strong>não houvesse</strong> desvio nenhum — ou seja, ignora completamente a existência do campo elétrico na região B, que o próprio enunciado afirma estar presente.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">D) Ponto 4 — ERRADA</p>
            <p class="text-xs">Está acima da linha central, o que corresponderia a uma força para cima — o erro típico de esquecer o sinal negativo da carga e tratar o elétron como se a força fosse no mesmo sentido de E.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">E) Ponto 5 — ERRADA</p>
            <p class="text-xs">Está próximo da linha central mas ainda acima ou alinhado a ela, sem representar o desvio para baixo esperado — não é compatível com a força elétrica calculada para uma carga negativa neste campo.</p>
          </div>

        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       4. GALERIA (4 diagramas SVG)
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Regra do sinal: força sobre carga negativa é oposta a E",
        legenda: "F = qE. Com q negativo, o vetor força aponta no sentido contrário ao do campo elétrico.",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <text x="115" y="16" fill="#94a3b8" font-size="9" font-weight="bold" text-anchor="middle">Carga POSITIVA</text>
            <line x1="115" y1="40" x2="115" y2="90" stroke="#38bdf8" stroke-width="2.5"/><polygon points="115,40 110,50 120,50" fill="#38bdf8"/>
            <text x="140" y="65" fill="#7dd3fc" font-size="10" font-weight="bold">E</text>
            <circle cx="115" cy="110" r="12" fill="#f87171"/><text x="115" y="115" fill="white" font-size="12" font-weight="bold" text-anchor="middle">+</text>
            <line x1="115" y1="95" x2="115" y2="65" stroke="#fbbf24" stroke-width="2" stroke-dasharray="3,2"/>
            <text x="90" y="70" fill="#fde68a" font-size="8" text-anchor="middle">F (mesmo sentido)</text>

            <text x="345" y="16" fill="#94a3b8" font-size="9" font-weight="bold" text-anchor="middle">Carga NEGATIVA (elétron)</text>
            <line x1="345" y1="40" x2="345" y2="90" stroke="#38bdf8" stroke-width="2.5"/><polygon points="345,40 340,50 350,50" fill="#38bdf8"/>
            <text x="370" y="65" fill="#7dd3fc" font-size="10" font-weight="bold">E</text>
            <circle cx="345" cy="60" r="12" fill="#fbbf24"/><text x="345" y="65" fill="#78350f" font-size="12" font-weight="bold" text-anchor="middle">−</text>
            <line x1="345" y1="75" x2="345" y2="105" stroke="#f87171" stroke-width="2" stroke-dasharray="3,2"/>
            <polygon points="345,110 340,100 350,100" fill="#f87171"/>
            <text x="380" y="105" fill="#fca5a5" font-size="8" text-anchor="middle">F (sentido oposto)</text>
          </svg>`
      },
      {
        titulo: "Trajetória do elétron na região B",
        legenda: "Velocidade horizontal constante + força vertical para baixo = trajetória curva descendente (análoga a um lançamento horizontal).",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <line x1="40" y1="20" x2="40" y2="120" stroke="#38bdf8" stroke-width="1.5"/><polygon points="40,20 36,28 44,28" fill="#38bdf8"/>
            <line x1="110" y1="20" x2="110" y2="120" stroke="#38bdf8" stroke-width="1.5"/><polygon points="110,20 106,28 114,28" fill="#38bdf8"/>
            <line x1="180" y1="20" x2="180" y2="120" stroke="#38bdf8" stroke-width="1.5"/><polygon points="180,20 176,28 184,28" fill="#38bdf8"/>
            <line x1="250" y1="20" x2="250" y2="120" stroke="#38bdf8" stroke-width="1.5"/><polygon points="250,20 246,28 254,28" fill="#38bdf8"/>
            <line x1="20" y1="60" x2="300" y2="60" stroke="#64748b" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="10" y="64" fill="#64748b" font-size="7" text-anchor="end">reta</text>
            <path d="M 20 60 Q 150 65 300 110" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
            <circle cx="20" cy="60" r="8" fill="#fbbf24"/><text x="20" y="64" fill="#78350f" font-size="9" font-weight="bold" text-anchor="middle">−</text>
            <text x="330" y="115" fill="#fde68a" font-size="8" font-weight="bold" text-anchor="middle">desvio para baixo</text>
          </svg>`
      },
      {
        titulo: "Mapa dos pontos na tela",
        legenda: "3 é a linha central (sem desvio); 1 e 4 estão acima (desvio para cima); 2 está abaixo (desvio para baixo) — o resultado correto.",
        svg: `
          <svg viewBox="0 0 300 200" class="w-full h-auto">
            <line x1="20" y1="100" x2="260" y2="100" stroke="#64748b" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="10" y="104" fill="#64748b" font-size="7" text-anchor="end">B</text>

            <circle cx="260" cy="30" r="8" fill="#334155"/><text x="260" y="34" fill="#cbd5e1" font-size="9" font-weight="bold" text-anchor="middle">1</text>
            <text x="260" y="16" fill="#94a3b8" font-size="7" text-anchor="middle">↑↑ desvio forte p/ cima</text>

            <circle cx="260" cy="60" r="8" fill="#334155"/><text x="260" y="64" fill="#cbd5e1" font-size="9" font-weight="bold" text-anchor="middle">4</text>
            <text x="260" y="76" fill="#94a3b8" font-size="7" text-anchor="middle">↑ desvio p/ cima</text>

            <circle cx="260" cy="100" r="9" fill="#334155" stroke="#64748b"/><text x="260" y="104" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="200" y="118" fill="#94a3b8" font-size="7" text-anchor="middle">linha central (sem campo)</text>

            <circle cx="260" cy="140" r="11" fill="#166534" stroke="#4ade80" stroke-width="2"/><text x="260" y="145" fill="#bbf7d0" font-size="11" font-weight="bold" text-anchor="middle">2</text>
            <text x="260" y="160" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">✓ resposta correta</text>

            <circle cx="260" cy="90" r="0" fill="none"/>
          </svg>`
      },
      {
        titulo: "Analogia: elétron em campo E ↔ projétil na gravidade",
        legenda: "Assim como a gravidade curva a trajetória de um projétil lançado horizontalmente, a força elétrica curva a trajetória do elétron.",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <rect x="10" y="10" width="210" height="120" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            <text x="115" y="30" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">Projétil sob gravidade</text>
            <path d="M 30 50 Q 100 55 200 110" fill="none" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="30" cy="50" r="6" fill="#94a3b8"/>
            <text x="115" y="120" fill="#94a3b8" font-size="7" text-anchor="middle">força peso, sempre para baixo</text>

            <rect x="240" y="10" width="210" height="120" rx="6" fill="#312e81" stroke="#a5b4fc" stroke-width="1.5"/>
            <text x="345" y="30" fill="#e0e7ff" font-size="9" font-weight="bold" text-anchor="middle">Elétron no campo E</text>
            <path d="M 260 50 Q 330 55 430 110" fill="none" stroke="#fbbf24" stroke-width="2"/>
            <circle cx="260" cy="50" r="6" fill="#fbbf24"/>
            <text x="345" y="120" fill="#e0e7ff" font-size="7" text-anchor="middle">força elétrica, oposta a E (E aponta p/ cima)</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       5. SIMULADOR
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: desvio do elétron em um campo elétrico",
      descricao: "Escolha o sinal da carga e o sentido do campo elétrico E e observe para onde a força — e, portanto, o desvio da trajetória — aponta.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div>
              <p class="text-[11px] text-slate-400 mb-1">Sinal da carga:</p>
              <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
                <input type="radio" name="q113carga" data-sim="carga" value="neg" checked class="accent-purple-500">
                <span class="text-[11px] text-slate-200">Negativa (elétron)</span>
              </label>
              <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
                <input type="radio" name="q113carga" data-sim="carga" value="pos" class="accent-purple-500">
                <span class="text-[11px] text-slate-200">Positiva</span>
              </label>
            </div>
            <div>
              <p class="text-[11px] text-slate-400 mb-1">Sentido do campo E:</p>
              <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
                <input type="radio" name="q113campo" data-sim="campo" value="cima" checked class="accent-purple-500">
                <span class="text-[11px] text-slate-200">Para cima (como na questão)</span>
              </label>
              <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
                <input type="radio" name="q113campo" data-sim="campo" value="baixo" class="accent-purple-500">
                <span class="text-[11px] text-slate-200">Para baixo</span>
              </label>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 flex items-center justify-center">
              <svg viewBox="0 0 220 140" class="w-full h-auto max-w-[220px]">
                <line x1="30" y1="15" x2="30" y2="125" stroke="#38bdf8" stroke-width="1.5" data-svg="e1"/>
                <line x1="80" y1="15" x2="80" y2="125" stroke="#38bdf8" stroke-width="1.5" data-svg="e2"/>
                <line x1="130" y1="15" x2="130" y2="125" stroke="#38bdf8" stroke-width="1.5" data-svg="e3"/>
                <line x1="180" y1="15" x2="180" y2="125" stroke="#38bdf8" stroke-width="1.5" data-svg="e4"/>
                <circle cx="55" cy="70" r="12" data-svg="carga" fill="#fbbf24"/>
                <text x="55" y="75" data-svg="sinal" fill="#78350f" font-size="13" font-weight="bold" text-anchor="middle">−</text>
                <line x1="70" y1="70" x2="100" y2="70" stroke="#94a3b8" stroke-width="2"/><polygon points="100,70 93,65 93,75" fill="#94a3b8"/>
                <line x1="55" y1="70" x2="55" y2="70" data-svg="forca" stroke="#f87171" stroke-width="3"/>
              </svg>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var radiosCarga = raiz.querySelectorAll('[data-sim="carga"]');
        var radiosCampo = raiz.querySelectorAll('[data-sim="campo"]');
        var setas = raiz.querySelectorAll('[data-svg="e1"],[data-svg="e2"],[data-svg="e3"],[data-svg="e4"]');
        var forca = raiz.querySelector('[data-svg="forca"]');
        var sinalEl = raiz.querySelector('[data-svg="sinal"]');
        var cargaEl = raiz.querySelector('[data-svg="carga"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };

        function atualizar() {
          var carga = raiz.querySelector('[data-sim="carga"]:checked').value;
          var campo = raiz.querySelector('[data-sim="campo"]:checked').value;

          setas.forEach(function (s) {
            var x = s.getAttribute('x1');
            if (campo === 'cima') {
              s.setAttribute('x1', x); s.setAttribute('y1', '125'); s.setAttribute('y2', '15');
            } else {
              s.setAttribute('y1', '15'); s.setAttribute('y2', '125');
            }
          });

          sinalEl.textContent = carga === 'neg' ? '−' : '+';
          cargaEl.setAttribute('fill', carga === 'neg' ? '#fbbf24' : '#f87171');
          sinalEl.setAttribute('fill', carga === 'neg' ? '#78350f' : 'white');

          var forcaParaCima = (carga === 'pos' && campo === 'cima') || (carga === 'neg' && campo === 'baixo');
          if (forcaParaCima) {
            forca.setAttribute('y1', '70'); forca.setAttribute('y2', '40');
          } else {
            forca.setAttribute('y1', '70'); forca.setAttribute('y2', '100');
          }

          var v = saida('veredito');
          var direcao = forcaParaCima ? 'para CIMA' : 'para BAIXO';
          var pontoTela = forcaParaCima ? 'acima da linha central (pontos 1 ou 4)' : 'abaixo da linha central (ponto 2, como na questão)';
          v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-purple-500/40 bg-purple-950/30 text-purple-200';
          v.innerHTML = 'Com carga <strong>' + (carga === 'neg' ? 'negativa' : 'positiva') + '</strong> e campo apontando para <strong>' + campo + '</strong>, a força elétrica aponta <strong>' + direcao + '</strong> — o feixe atingiria um ponto ' + pontoTela + '.';
        }

        radiosCarga.forEach(function (r) { r.addEventListener('change', atualizar); });
        radiosCampo.forEach(function (r) { r.addEventListener('change', atualizar); });
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-purple-300 block"><i class="fa-solid fa-tv"></i> Carga negativa + E para cima → Força para baixo → feixe atinge o ponto 2</span>
        <svg viewBox="0 0 460 90" class="w-full h-24 mx-auto">
          <line x1="60" y1="15" x2="60" y2="75" stroke="#38bdf8" stroke-width="2"/><polygon points="60,15 55,25 65,25" fill="#38bdf8"/>
          <text x="60" y="10" fill="#7dd3fc" font-size="9" text-anchor="middle">E</text>
          <circle cx="180" cy="45" r="14" fill="#fbbf24"/><text x="180" y="50" fill="#78350f" font-size="12" font-weight="bold" text-anchor="middle">−</text>
          <line x1="200" y1="45" x2="240" y2="45" stroke="#94a3b8" stroke-width="2"/><polygon points="240,45 232,40 232,50" fill="#94a3b8"/>
          <line x1="180" y1="60" x2="180" y2="80" stroke="#f87171" stroke-width="2.5"/><polygon points="180,84 175,74 185,74" fill="#f87171"/>
          <text x="180" y="20" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">F para baixo</text>
          <text x="400" y="50" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">Ponto 2</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q114",
    numero: "Questão 114",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "fisica",
    materia: "Física / Ondulatória & Ressonância",
    materiaCor: "purple",
    materiaIcone: "fa-wave-square",
    titulo: "Por que a Voz Quebra Taças de Cristal? Ressonância e Frequência, Não Intensidade",
    tags: ["Física", "Ondulatória", "Ressonância", "Frequência", "Frequência Natural", "Ondas Sonoras", "Timbre"],
    alternativaCorreta: "B",
    userNotes: "",
    userCustomImage: null,

    enunciado: `A tirinha ilustra um processo físico em que uma onda sonora, produzida pela Mônica, causa a quebra das taças de cristal. O fenômeno ondulatório que provoca a quebra das taças só é possível em razão de uma característica da voz produzida pela Mônica naquele momento, que, diferentemente do que sugere a tirinha, <strong>não</strong> está relacionada à sua intensidade.
    <br><br>
    <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
      <svg viewBox="0 0 460 130" class="w-full h-auto">
        <rect x="10" y="10" width="440" height="110" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
        <text x="230" y="30" fill="#e2e8f0" font-size="10" text-anchor="middle" font-style="italic">"É QUEM ESTÁ GRITANDO MUITO?"</text>
        <circle cx="90" cy="75" r="20" fill="#fbbf24"/>
        <path d="M 78 82 Q 90 100 102 82" fill="none" stroke="#78350f" stroke-width="2.5"/>
        <path d="M 115 60 Q 140 50 160 65" fill="none" stroke="#f87171" stroke-width="2"/>
        <path d="M 115 75 Q 145 75 170 75" fill="none" stroke="#f87171" stroke-width="2"/>
        <path d="M 115 90 Q 140 100 160 85" fill="none" stroke="#f87171" stroke-width="2"/>
        <polygon points="320,55 335,105 305,105" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="308" y1="60" x2="332" y2="60" stroke="#f87171" stroke-width="1" stroke-dasharray="2,2"/>
        <text x="320" y="118" fill="#94a3b8" font-size="7" text-anchor="middle">taça de cristal</text>
        <path d="M 340 60 Q 355 70 340 80" fill="none" stroke="#fbbf24" stroke-width="2"/>
        <text x="365" y="72" fill="#fde68a" font-size="7">vibra e</text>
        <text x="365" y="82" fill="#fde68a" font-size="7">racha</text>
      </svg>
    </div>
    <p class="text-[10px] text-slate-500 mt-2">Disponível em: https://artedafisicapibid.blogspot.com. Acesso em: 23 nov. 2021 (adaptado).</p>
    <br>
    Esse fenômeno e a característica associada à voz da Mônica naquele momento são, respectivamente,`,

    alternativas: [
      { letra: "A", texto: "reflexão e comprimento de onda.", correta: false },
      { letra: "B", texto: "ressonância e frequência.", correta: true },
      { letra: "C", texto: "interferência e velocidade.", correta: false },
      { letra: "D", texto: "ressonância e timbre.", correta: false },
      { letra: "E", texto: "reflexão e amplitude.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-purple-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre a diferença entre <strong>frequência</strong>, <strong>amplitude/intensidade</strong> e <strong>timbre</strong> — as três grandezas que a questão usa para te confundir entre as alternativas.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">1.</span> Frequência natural: todo objeto tem a sua</h4>
          <p>
            Qualquer objeto capaz de vibrar (uma corda, uma taça de cristal, uma ponte) tem uma ou mais <strong>frequências naturais de vibração</strong> — frequências nas quais ele "prefere" oscilar quando perturbado, determinadas por sua forma, material e rigidez. Bata de leve em uma taça de cristal e ela emite um som quase puro: essa é justamente sua frequência natural, a que você ouve como o "tim" característico do cristal.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">2.</span> O que é ressonância</h4>
          <p>
            <strong>Ressonância</strong> ocorre quando um sistema é forçado a vibrar por uma fonte externa cuja frequência <strong>coincide</strong> com uma de suas frequências naturais. Nessa condição, cada novo ciclo da força externa entrega energia "no compasso certo" da vibração do objeto, fazendo a amplitude da vibração <strong>crescer progressivamente</strong> — às vezes até o ponto de ruptura, como no caso clássico da taça de cristal que racha com a voz de um cantor.
          </p>
          <p>
            Se a frequência da fonte sonora <strong>não</strong> coincidir com a frequência natural da taça, a energia entregue em cada ciclo tende a se cancelar em parte com a vibração residual do ciclo anterior, e a amplitude não cresce de forma significativa — não importa o quão intenso (alto) seja o som.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">3.</span> Por que não é intensidade/amplitude</h4>
          <p>
            É senso comum (e é o que a tirinha sugere, de forma humorística) achar que basta "gritar muito alto" para quebrar um copo. Mas amplitude/intensidade sozinha não é suficiente: um som muito intenso, numa frequência qualquer, longe da frequência natural da taça, dissipa a maior parte de sua energia sem produzir vibração acumulada relevante. É a <strong>coincidência de frequências</strong> — não o volume — que faz a vibração crescer ciclo após ciclo até a ruptura.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">4.</span> Frequência x timbre: não confunda</h4>
          <p>
            <strong>Frequência</strong> é o número de oscilações por segundo (medida em Hz) — é ela que determina a "altura" percebida do som (grave ou agudo) e é ela que precisa coincidir com a frequência natural do objeto para haver ressonância.
          </p>
          <p>
            <strong>Timbre</strong> é a qualidade que permite diferenciar duas fontes sonoras emitindo a <strong>mesma</strong> frequência fundamental (por exemplo, a mesma nota tocada num violino e num piano soa diferente) — resulta da mistura de harmônicos que acompanham a frequência fundamental. Timbre não é a grandeza que precisa "casar" com a frequência natural de um objeto para gerar ressonância; quem precisa coincidir é a frequência.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-purple-400">5.</span> Por que não é reflexão nem interferência</h4>
          <p>
            <strong>Reflexão</strong> é o retorno de uma onda ao encontrar uma mudança de meio (como o eco de um som numa parede) — não é o mecanismo que causa vibração crescente e ruptura de um objeto. <strong>Interferência</strong> é a superposição de duas ou mais ondas, gerando reforço ou cancelamento — também não descreve o fenômeno de uma única fonte sonora fazendo um objeto vibrar até quebrar. O fenômeno correto, específico para esse cenário, é a <strong>ressonância</strong>.
          </p>
        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       2. CONCEITOS
       ------------------------------------------------------------------ */
    conceitos: [
      { icone: "fa-wave-square", titulo: "Frequência natural", text: "Frequência na qual um objeto (como uma taça de cristal) tende a vibrar quando perturbado — determinada por sua forma e material." },
      { icone: "fa-circle-notch", titulo: "Ressonância", text: "Quando a frequência de uma força externa coincide com a frequência natural de um objeto, a amplitude da vibração cresce progressivamente." },
      { icone: "fa-volume-high", titulo: "Amplitude/intensidade não é o fator-chave", text: "Um som muito alto, mas de frequência errada, não causa ressonância — o que importa é a frequência coincidir, não o volume." },
      { icone: "fa-music", titulo: "Timbre ≠ frequência", text: "Timbre distingue fontes sonoras com a mesma frequência fundamental; não é a grandeza que precisa coincidir para haver ressonância." },
      { icone: "fa-shapes", titulo: "Ressonância ≠ reflexão ≠ interferência", text: "Três fenômenos ondulatórios distintos: só a ressonância explica a vibração crescente até a ruptura de um objeto único." }
    ],

    /* ------------------------------------------------------------------
       3. RESOLUÇÃO
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <div class="bg-purple-950/30 border border-purple-500/30 rounded-xl p-4">
          <p class="font-bold text-purple-300 mb-1"><i class="fa-solid fa-check-circle"></i> Gabarito: Alternativa B</p>
          <p>O fenômeno é a <strong>ressonância</strong>: a voz da Mônica atinge a <strong>frequência</strong> natural de vibração da taça, fazendo sua amplitude de vibração crescer até a ruptura — independente de quão intensa (alta) fosse a voz.</p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold"><i class="fa-solid fa-list-ol text-purple-400"></i> Estratégia de resolução em 3 passos</h4>
          <p><strong>Passo 1 — Identifique o fenômeno.</strong> Um objeto vibrando cada vez mais até se romper, por causa de uma onda sonora externa, é a assinatura clássica da <strong>ressonância</strong> — não de reflexão nem de interferência.</p>
          <p><strong>Passo 2 — Elimine "intensidade/amplitude" como característica-chave.</strong> O próprio enunciado avisa: a quebra não está relacionada à intensidade da voz, ao contrário do que a tirinha sugere de forma cômica.</p>
          <p><strong>Passo 3 — Identifique a característica correta da voz.</strong> Para haver ressonância, a <strong>frequência</strong> da voz precisa coincidir com a frequência natural de vibração da taça — não seu timbre, nem sua velocidade de propagação, nem seu comprimento de onda isoladamente.</p>
        </div>

        <div class="space-y-3">
          <h4 class="text-white font-bold"><i class="fa-solid fa-magnifying-glass text-purple-400"></i> Por que cada alternativa está certa ou errada</h4>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">A) Reflexão e comprimento de onda — ERRADA</p>
            <p class="text-xs">Reflexão é o retorno de uma onda ao mudar de meio (eco) — não descreve uma taça vibrando cada vez mais até quebrar. E o comprimento de onda, embora relacionado à frequência, não é a grandeza citada nas explicações físicas do fenômeno de ressonância sonora.</p>
          </div>

          <div class="border border-emerald-500/40 bg-emerald-950/20 rounded-lg p-3">
            <p class="font-bold text-emerald-300 text-xs mb-1">B) Ressonância e frequência — CORRETA</p>
            <p class="text-xs">A taça quebra porque a frequência da voz coincide com sua frequência natural de vibração, entrando em ressonância — a amplitude de vibração cresce ciclo após ciclo até a ruptura do material.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">C) Interferência e velocidade — ERRADA</p>
            <p class="text-xs">Interferência exige a superposição de duas ou mais ondas — não é o mecanismo de uma única fonte sonora causando vibração crescente em um objeto. Velocidade de propagação do som também não é a característica determinante aqui.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">D) Ressonância e timbre — ERRADA (armadilha)</p>
            <p class="text-xs">O fenômeno (ressonância) está certo, mas a característica está errada: timbre distingue fontes sonoras de mesma frequência fundamental — não é a grandeza que precisa coincidir com a frequência natural da taça. Quem precisa "casar" é a <strong>frequência</strong>, não o timbre.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">E) Reflexão e amplitude — ERRADA</p>
            <p class="text-xs">Reflexão não é o fenômeno correto (ver alternativa A). E o próprio enunciado já descarta explicitamente a amplitude/intensidade como a característica responsável pela quebra.</p>
          </div>

        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       4. GALERIA (4 diagramas SVG)
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Ressonância: frequência da voz = frequência natural da taça",
        legenda: "Quando as frequências coincidem, cada novo ciclo da onda sonora aumenta a amplitude de vibração da taça.",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <path d="M 20 70 Q 45 40 70 70 T 120 70 T 170 70" fill="none" stroke="#a78bfa" stroke-width="2"/>
            <text x="95" y="30" fill="#c4b5fd" font-size="9" font-weight="bold" text-anchor="middle">voz (frequência f)</text>
            <text x="190" y="75" fill="#94a3b8" font-size="14" text-anchor="middle">=</text>
            <polygon points="290,40 320,110 260,110" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
            <text x="290" y="30" fill="#94a3b8" font-size="9" font-weight="bold" text-anchor="middle">taça (freq. natural f₀)</text>
            <text x="230" y="130" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">f = f₀ → ressonância → amplitude cresce → racha</text>
          </svg>`
      },
      {
        titulo: "Curva de resposta em ressonância",
        legenda: "A amplitude de vibração é máxima quando a frequência aplicada coincide com a frequência natural — não quando o som é mais intenso.",
        svg: `
          <svg viewBox="0 0 460 170" class="w-full h-auto">
            <line x1="50" y1="140" x2="430" y2="140" stroke="#64748b" stroke-width="2"/>
            <line x1="50" y1="20" x2="50" y2="140" stroke="#64748b" stroke-width="2"/>
            <text x="42" y="26" fill="#94a3b8" font-size="8" text-anchor="end">amplitude</text>
            <text x="425" y="158" fill="#94a3b8" font-size="8" text-anchor="end">frequência aplicada</text>
            <path d="M 60 135 Q 150 130 210 40 Q 240 20 270 40 Q 330 130 420 135" fill="none" stroke="#a78bfa" stroke-width="2.5"/>
            <line x1="240" y1="20" x2="240" y2="140" stroke="#f87171" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="240" y="14" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">f₀ (frequência natural)</text>
            <text x="240" y="155" fill="#fca5a5" font-size="7" text-anchor="middle">pico: racha aqui</text>
          </svg>`
      },
      {
        titulo: "Cinco fenômenos, uma resposta certa",
        legenda: "Só a ressonância explica um único objeto vibrando cada vez mais até quebrar.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <rect x="10" y="10" width="440" height="26" fill="#1e293b" rx="4"/>
            <text x="120" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Fenômeno</text>
            <text x="330" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Explica a taça quebrando?</text>

            <text x="20" y="52" fill="#e2e8f0" font-size="8">Reflexão</text>
            <text x="230" y="52" fill="#94a3b8" font-size="7">não — é o retorno de uma onda (eco)</text>

            <rect x="10" y="60" width="440" height="26" fill="#064e3b" rx="4"/>
            <text x="20" y="77" fill="#6ee7b7" font-size="8" font-weight="bold">Ressonância ✓</text>
            <text x="230" y="77" fill="#a7f3d0" font-size="7" font-weight="bold">sim — frequência = frequência natural</text>

            <text x="20" y="102" fill="#e2e8f0" font-size="8">Interferência</text>
            <text x="230" y="102" fill="#94a3b8" font-size="7">não — exige duas ou mais ondas se somando</text>

            <text x="20" y="126" fill="#e2e8f0" font-size="8">Difração</text>
            <text x="230" y="126" fill="#94a3b8" font-size="7">não — é o contorno de obstáculos pela onda</text>

            <text x="20" y="150" fill="#e2e8f0" font-size="8">Refração</text>
            <text x="230" y="150" fill="#94a3b8" font-size="7">não — é a mudança de direção ao trocar de meio</text>
          </svg>`
      },
      {
        titulo: "Frequência x timbre: grandezas diferentes",
        legenda: "Duas vozes podem ter a mesma frequência com timbres diferentes — é a frequência que precisa coincidir com a da taça, não o timbre.",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <rect x="20" y="20" width="200" height="100" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            <text x="120" y="38" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">Mesma frequência</text>
            <path d="M 35 65 Q 55 50 75 65 T 115 65 T 155 65 T 195 65" fill="none" stroke="#a78bfa" stroke-width="2"/>
            <path d="M 35 95 Q 45 80 55 95 Q 65 110 75 95 T 115 95 T 155 95 T 195 95" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
            <text x="120" y="112" fill="#94a3b8" font-size="7" text-anchor="middle">timbres diferentes, f igual</text>

            <rect x="240" y="20" width="200" height="100" rx="6" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.5"/>
            <text x="340" y="38" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">O que importa aqui</text>
            <text x="340" y="65" fill="#a7f3d0" font-size="9" text-anchor="middle">Frequência da voz</text>
            <text x="340" y="82" fill="#a7f3d0" font-size="9" text-anchor="middle">=</text>
            <text x="340" y="99" fill="#a7f3d0" font-size="9" text-anchor="middle">Frequência natural da taça</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       5. SIMULADOR
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: encontre a frequência de ressonância da taça",
      descricao: "Ajuste a frequência da voz e veja a amplitude de vibração da taça responder — repare que o volume (intensidade) sozinho não é o que importa.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Frequência da voz</span><span class="text-purple-300 font-bold" data-out="freq">300 Hz</span>
              </label>
              <input type="range" data-sim="freq" min="100" max="500" value="300" step="5" class="w-full accent-purple-500">
              <p class="text-[10px] text-slate-500 mt-1"><i class="fa-solid fa-wave-square"></i> A taça deste laboratório tem frequência natural de 300 Hz.</p>
            </div>
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Intensidade (volume) da voz</span><span class="text-purple-300 font-bold" data-out="intensidade">60%</span>
              </label>
              <input type="range" data-sim="intensidade" min="10" max="100" value="60" step="5" class="w-full accent-purple-500">
              <p class="text-[10px] text-slate-500 mt-1"><i class="fa-solid fa-volume-high"></i> Aumentar o volume sozinho não garante a quebra.</p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div>
                <div class="flex justify-between text-[11px] mb-1">
                  <span class="text-purple-300 font-bold">Amplitude de vibração da taça</span>
                  <span class="text-purple-300 font-mono" data-out="amplitude">—</span>
                </div>
                <div class="h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div data-bar="amplitude" class="h-full bg-purple-500 transition-all" style="width:10%"></div>
                </div>
              </div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var campoFreq = raiz.querySelector('[data-sim="freq"]');
        var campoInt = raiz.querySelector('[data-sim="intensidade"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };
        var barra = function (nome) { return raiz.querySelector('[data-bar="' + nome + '"]'); };
        var f0 = 300;

        function atualizar() {
          var f = parseFloat(campoFreq.value);
          var intensidade = parseFloat(campoInt.value);
          var distancia = Math.abs(f - f0);
          var fatorRessonancia = Math.max(0, 1 - distancia / 60);
          var amplitude = fatorRessonancia * fatorRessonancia * (0.3 + 0.7 * (intensidade / 100)) * 100;

          saida('freq').textContent = f.toFixed(0) + ' Hz';
          saida('intensidade').textContent = intensidade.toFixed(0) + '%';
          saida('amplitude').textContent = amplitude.toFixed(0) + '%';
          barra('amplitude').style.width = Math.max(amplitude, 3) + '%';

          var v = saida('veredito');
          if (distancia <= 10 && amplitude > 55) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200';
            v.innerHTML = '<strong>Ressonância! A taça racha.</strong> A frequência da voz (' + f.toFixed(0) + ' Hz) está muito próxima da frequência natural (300 Hz) — a amplitude de vibração dispara.';
          } else if (distancia <= 25) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            v.innerHTML = '<strong>Quase lá.</strong> Chegue mais perto de 300 Hz para maximizar a amplitude de vibração — intensidade sozinha não resolve.';
          } else {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-slate-600/40 bg-slate-800/30 text-slate-300';
            v.innerHTML = 'Mesmo com volume alto, longe da frequência natural (300 Hz) a taça vibra pouco. Ajuste a <strong>frequência</strong>, não o volume.';
          }
        }

        campoFreq.addEventListener('input', atualizar);
        campoInt.addEventListener('input', atualizar);
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-purple-300 block"><i class="fa-solid fa-wave-square"></i> Frequência da voz = frequência natural da taça → ressonância → amplitude cresce → racha</span>
        <svg viewBox="0 0 460 90" class="w-full h-24 mx-auto">
          <path d="M 20 45 Q 45 20 70 45 T 120 45 T 170 45" fill="none" stroke="#a78bfa" stroke-width="2.5"/>
          <text x="95" y="70" fill="#c4b5fd" font-size="8" text-anchor="middle">voz (f)</text>
          <text x="220" y="50" fill="#67e8f9" font-size="14" text-anchor="middle">=</text>
          <polygon points="320,15 350,80 290,80" fill="none" stroke="#f87171" stroke-width="2"/>
          <text x="320" y="8" fill="#fca5a5" font-size="8" text-anchor="middle">taça (f₀)</text>
          <text x="400" y="50" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">racha!</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q115",
    numero: "Questão 115",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "quimica",
    materia: "Química / Química Orgânica & Oxidação",
    materiaCor: "cyan",
    materiaIcone: "fa-vial",
    titulo: "Do Borneol à Cânfora: Oxidação de Álcool Secundário e Fórmula Molecular",
    tags: ["Química", "Química Orgânica", "Oxidação", "Álcoois Secundários", "Cetonas", "Fórmula Molecular", "Grau de Insaturação", "Terpenos"],
    alternativaCorreta: "C",
    userNotes: "",
    userCustomImage: null,

    enunciado: `Em uma aula prática de química orgânica, um professor identificou os frascos de várias substâncias apenas por suas fórmulas moleculares. Em seguida, apresentou uma representação tridimensional da molécula do <strong>borneol</strong>, um álcool secundário, conforme a figura. Ele explicou que, quando oxidado, o borneol dá origem à <strong>cânfora</strong>, uma cetona usada desde a Antiguidade como incenso e no preparo de medicamentos. Finalmente, o professor solicitou que os alunos identificassem o frasco contendo a substância cânfora.
    <br><br>
    <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
      <svg viewBox="0 0 300 200" class="w-full h-auto mx-auto max-w-xs">
        <polygon points="150,40 190,70 175,120 125,120 110,70" fill="none" stroke="#94a3b8" stroke-width="1.8"/>
        <line x1="150" y1="40" x2="175" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="130" y1="55" x2="130" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="118" y="14" fill="#e2e8f0" font-size="10" text-anchor="middle">H₃C</text>
        <line x1="165" y1="55" x2="180" y2="25" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="188" y="18" fill="#e2e8f0" font-size="10" text-anchor="middle">CH₃</text>
        <line x1="110" y1="70" x2="70" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="55" y="84" fill="#e2e8f0" font-size="10" text-anchor="middle">H₃C</text>
        <line x1="175" y1="120" x2="210" y2="140" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="225" y="146" fill="#7dd3fc" font-size="11" font-weight="bold" text-anchor="middle">OH</text>
        <text x="150" y="175" fill="#94a3b8" font-size="9" font-style="italic" text-anchor="middle">Borneol</text>
      </svg>
    </div>
    <p class="text-[10px] text-slate-500 mt-2">SANTOS, A. P. B. et al. Oxidação do borneol à cânfora com água sanitária: um experimento simples de baixo custo e limpo. <strong>Química Nova</strong>, n. 6, 2009 (adaptado).</p>
    <br>
    O frasco contendo cânfora apresenta a fórmula molecular:`,

    alternativas: [
      { letra: "A", texto: "C₉H₁₆O", correta: false },
      { letra: "B", texto: "C₉H₁₇O", correta: false },
      { letra: "C", texto: "C₁₀H₁₆O", correta: true },
      { letra: "D", texto: "C₁₀H₁₆O₂", correta: false },
      { letra: "E", texto: "C₁₀H₁₈O₂", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-cyan-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre o que acontece, em termos de átomos, quando um álcool secundário é oxidado a cetona — e como usar o grau de insaturação para eliminar alternativas impossíveis sem decorar a fórmula do borneol.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">1.</span> Borneol: um álcool secundário bicíclico</h4>
          <p>
            O <strong>borneol</strong> é um monoterpeno bicíclico (dois anéis fundidos na estrutura) com um grupo <strong>–OH</strong> ligado a um carbono <strong>secundário</strong> (carbono ligado a exatamente dois outros carbonos). Sua fórmula molecular é <strong>C₁₀H₁₈O</strong> — típica de monoterpenos, que têm 10 carbonos (duas unidades de isopreno, C₅).
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">2.</span> O que muda na oxidação de álcool secundário a cetona</h4>
          <p>
            Álcoois <strong>secundários</strong> (R₂CH–OH), quando oxidados, formam <strong>cetonas</strong> (R₂C=O) — diferente dos álcoois primários (que formam aldeídos e depois ácidos carboxílicos) e dos álcoois terciários (que não sofrem esse tipo de oxidação, pois não há hidrogênio no carbono ligado à hidroxila).
          </p>
          <p>
            Na reação R₂CH–OH → R₂C=O, o carbono perde o hidrogênio que estava ligado a ele e o hidrogênio da hidroxila também sai (removidos pelo agente oxidante, como o hipoclorito de sódio da água sanitária, citado no texto de referência). No balanço da molécula orgânica, isso significa <strong>perda líquida de 2 átomos de hidrogênio</strong>, mantendo o número de carbonos e de oxigênios inalterado.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">3.</span> Aplicando ao borneol → cânfora</h4>
          <div class="bg-slate-950 border border-slate-800 rounded-lg p-3 text-center font-mono text-cyan-300 text-sm">
            Borneol (C₁₀H₁₈O) → Cânfora (C₁₀H₁₆O) + "2 H" (removidos pela oxidação)
          </div>
          <p>
            Note que o número de carbonos (10) e de oxigênios (1) permanece o mesmo — só o número de hidrogênios cai de 18 para 16. Isso já é suficiente para prever a fórmula da cânfora sem precisar desenhar a estrutura completa.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">4.</span> Confirmando com o grau de insaturação (GI)</h4>
          <p>
            O grau de insaturação conta quantos anéis e/ou ligações π (duplas/triplas) uma molécula tem, a partir da fórmula molecular CcHhOo (oxigênio não entra na conta):
          </p>
          <div class="bg-slate-950 border border-slate-800 rounded-lg p-3 text-center font-mono text-cyan-300 text-sm">
            GI = (2c + 2 − h) / 2
          </div>
          <p>
            Para o borneol (C₁₀H₁₈O): GI = (2×10 + 2 − 18) / 2 = 4/2 = <strong>2</strong>. Isso bate com a estrutura bicíclica (2 anéis, 0 ligações duplas) — um álcool secundário saturado.
          </p>
          <p>
            Para a cânfora (C₁₀H₁₆O): GI = (2×10 + 2 − 16) / 2 = 6/2 = <strong>3</strong>. Isso bate perfeitamente: os mesmos 2 anéis do borneol, mais 1 ligação dupla C=O nova (a carbonila da cetona) — exatamente o que se espera de uma oxidação que transforma –OH em C=O sem quebrar nenhum anel.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">5.</span> Um truque rápido: número de hidrogênios deve ser par</h4>
          <p>
            Para uma molécula orgânica neutra formada apenas por C, H e O (sem nitrogênio), o número total de átomos de hidrogênio precisa ser <strong>par</strong>. Isso decorre da valência do carbono e do oxigênio serem pares (4 e 2) — uma molécula com número ímpar de H exigiria um elétron desemparelhado, ou seja, seria um radical livre, não uma substância estável armazenada num frasco de laboratório.
          </p>
        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       2. CONCEITOS
       ------------------------------------------------------------------ */
    conceitos: [
      { icone: "fa-flask", titulo: "Oxidação de álcool secundário", text: "R₂CH-OH oxida a R₂C=O (cetona), com perda líquida de 2 átomos de hidrogênio da fórmula molecular." },
      { icone: "fa-ring", titulo: "Borneol e cânfora: monoterpenos", text: "Ambos têm 10 carbonos (C₁₀) e a mesma estrutura bicíclica de anéis — só o grupo funcional muda." },
      { icone: "fa-square-root-variable", titulo: "Grau de insaturação (GI)", text: "GI = (2c+2-h)/2 conta anéis + ligações π. Confirma que cânfora tem 1 grau a mais que borneol (a nova carbonila)." },
      { icone: "fa-circle-half-stroke", titulo: "H sempre em número par", text: "Moléculas orgânicas neutras de C, H e O têm sempre um número par de hidrogênios — descarta fórmulas com H ímpar de cara." },
      { icone: "fa-arrows-left-right", titulo: "O que muda e o que não muda", text: "Na oxidação, carbonos e oxigênios da molécula permanecem os mesmos; só o número de hidrogênios muda." }
    ],

    /* ------------------------------------------------------------------
       3. RESOLUÇÃO
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <div class="bg-cyan-950/30 border border-cyan-500/30 rounded-xl p-4">
          <p class="font-bold text-cyan-300 mb-1"><i class="fa-solid fa-check-circle"></i> Gabarito: Alternativa C</p>
          <p>Borneol (C₁₀H₁₈O) é oxidado a cânfora, perdendo 2 hidrogênios ao formar a carbonila da cetona: <strong>C₁₀H₁₆O</strong>.</p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold"><i class="fa-solid fa-list-ol text-cyan-400"></i> Estratégia de resolução em 3 passos</h4>
          <p><strong>Passo 1 — Parta da fórmula do borneol.</strong> Como monoterpeno bicíclico C₁₀H₁₈O, com 10 carbonos e 1 oxigênio (do grupo –OH).</p>
          <p><strong>Passo 2 — Aplique a regra da oxidação de álcool secundário a cetona.</strong> Carbonos e oxigênio não mudam; hidrogênios diminuem em 2 (–OH e o H do carbono viram C=O).</p>
          <p><strong>Passo 3 — Escreva a fórmula da cânfora.</strong> C₁₀H₁₈O → C₁₀H₁₆O. Confira com o grau de insaturação: sobe de 2 (dois anéis) para 3 (dois anéis + a nova dupla C=O) — consistente.</p>
        </div>

        <div class="space-y-3">
          <h4 class="text-white font-bold"><i class="fa-solid fa-magnifying-glass text-cyan-400"></i> Por que cada alternativa está certa ou errada</h4>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">A) C₉H₁₆O — ERRADA</p>
            <p class="text-xs">Tem apenas 9 carbonos — perdeu um carbono que não deveria sumir na oxidação. A cânfora, como o borneol, é um monoterpeno com 10 carbonos.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">B) C₉H₁₇O — ERRADA</p>
            <p class="text-xs">Além do erro no número de carbonos, tem número <strong>ímpar</strong> de hidrogênios (17) — impossível para uma molécula neutra de C, H e O, que exigiria um elétron desemparelhado (seria um radical, não uma substância estável de frasco de laboratório).</p>
          </div>

          <div class="border border-cyan-500/40 bg-cyan-950/20 rounded-lg p-3">
            <p class="font-bold text-cyan-300 text-xs mb-1">C) C₁₀H₁₆O — CORRETA</p>
            <p class="text-xs">Mantém os 10 carbonos e o 1 oxigênio do borneol, com 2 hidrogênios a menos — exatamente o resultado esperado da oxidação de um álcool secundário a cetona, confirmado pelo grau de insaturação subindo de 2 para 3.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">D) C₁₀H₁₆O₂ — ERRADA</p>
            <p class="text-xs">Número de carbonos e hidrogênios corretos, mas tem 2 oxigênios em vez de 1. A oxidação de –OH a C=O não adiciona um segundo átomo de oxigênio à molécula — o oxigênio original apenas muda de ligação simples (C–OH) para dupla (C=O).</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">E) C₁₀H₁₈O₂ — ERRADA</p>
            <p class="text-xs">Mantém os 18 hidrogênios do borneol (sem refletir a perda de 2H da oxidação) e ainda adiciona um segundo oxigênio inexistente. Nenhuma das duas mudanças esperadas está presente.</p>
          </div>

        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       4. GALERIA (4 diagramas SVG)
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Borneol → Cânfora: o que muda na fórmula",
        legenda: "10 carbonos e 1 oxigênio permanecem; apenas 2 hidrogênios são perdidos na oxidação.",
        svg: `
          <svg viewBox="0 0 460 140" class="w-full h-auto">
            <rect x="20" y="30" width="170" height="80" rx="6" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="105" y="55" fill="#bae6fd" font-size="10" font-weight="bold" text-anchor="middle">Borneol</text>
            <text x="105" y="78" fill="#e0f2fe" font-size="12" font-family="monospace" text-anchor="middle">C₁₀H₁₈O</text>
            <text x="105" y="98" fill="#7dd3fc" font-size="8" text-anchor="middle">(álcool secundário)</text>

            <text x="225" y="75" fill="#67e8f9" font-size="16" text-anchor="middle">→</text>
            <text x="225" y="92" fill="#94a3b8" font-size="7" text-anchor="middle">oxidação (−2H)</text>

            <rect x="270" y="30" width="170" height="80" rx="6" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.5"/>
            <text x="355" y="55" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Cânfora</text>
            <text x="355" y="78" fill="#d1fae5" font-size="12" font-family="monospace" text-anchor="middle">C₁₀H₁₆O</text>
            <text x="355" y="98" fill="#a7f3d0" font-size="8" text-anchor="middle">(cetona)</text>
          </svg>`
      },
      {
        titulo: "Grau de insaturação confirma a resposta",
        legenda: "GI = (2c+2−h)/2. O borneol tem GI=2 (2 anéis); a cânfora tem GI=3 (2 anéis + a nova carbonila).",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <rect x="20" y="20" width="200" height="110" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
            <text x="120" y="40" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">Borneol C₁₀H₁₈O</text>
            <text x="120" y="65" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">GI = (22-18)/2 = 2</text>
            <text x="120" y="90" fill="#94a3b8" font-size="8" text-anchor="middle">2 anéis</text>
            <text x="120" y="105" fill="#94a3b8" font-size="8" text-anchor="middle">0 ligações duplas</text>

            <rect x="240" y="20" width="200" height="110" rx="6" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.5"/>
            <text x="340" y="40" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">Cânfora C₁₀H₁₆O</text>
            <text x="340" y="65" fill="#a7f3d0" font-size="9" font-family="monospace" text-anchor="middle">GI = (22-16)/2 = 3</text>
            <text x="340" y="90" fill="#a7f3d0" font-size="8" text-anchor="middle">2 anéis</text>
            <text x="340" y="105" fill="#a7f3d0" font-size="8" text-anchor="middle">+ 1 ligação dupla C=O</text>
          </svg>`
      },
      {
        titulo: "Álcool secundário → cetona: o mecanismo em átomos",
        legenda: "O carbono perde o H ligado a ele; a hidroxila perde seu H; juntos formam a ligação dupla C=O.",
        svg: `
          <svg viewBox="0 0 460 130" class="w-full h-auto">
            <circle cx="90" cy="65" r="22" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
            <text x="90" y="60" fill="#e2e8f0" font-size="9" font-weight="bold" text-anchor="middle">C</text>
            <text x="90" y="74" fill="#94a3b8" font-size="7" text-anchor="middle">-H</text>
            <line x1="112" y1="65" x2="150" y2="65" stroke="#94a3b8" stroke-width="1.5"/>
            <text x="160" y="60" fill="#7dd3fc" font-size="9" font-weight="bold">O-H</text>

            <text x="230" y="70" fill="#67e8f9" font-size="16" text-anchor="middle">→</text>
            <text x="230" y="90" fill="#fca5a5" font-size="7" font-weight="bold" text-anchor="middle">−2H (oxidante)</text>

            <circle cx="320" cy="65" r="22" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.5"/>
            <text x="320" y="70" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">C</text>
            <line x1="342" y1="60" x2="380" y2="60" stroke="#6ee7b7" stroke-width="1.5"/>
            <line x1="342" y1="70" x2="380" y2="70" stroke="#6ee7b7" stroke-width="1.5"/>
            <text x="392" y="65" fill="#6ee7b7" font-size="9" font-weight="bold">O</text>
          </svg>`
      },
      {
        titulo: "As cinco alternativas, o que cada erro revela",
        legenda: "Cada alternativa errada corresponde a um erro específico de contagem de átomos.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <rect x="10" y="10" width="440" height="26" fill="#1e293b" rx="4"/>
            <text x="90" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Fórmula</text>
            <text x="320" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Erro</text>

            <text x="20" y="52" fill="#e2e8f0" font-size="9" font-family="monospace">A) C₉H₁₆O</text>
            <text x="180" y="52" fill="#94a3b8" font-size="7">carbono a menos</text>

            <text x="20" y="76" fill="#e2e8f0" font-size="9" font-family="monospace">B) C₉H₁₇O</text>
            <text x="180" y="76" fill="#94a3b8" font-size="7">carbono a menos + H ímpar (radical, impossível)</text>

            <rect x="10" y="84" width="440" height="26" fill="#064e3b" rx="4"/>
            <text x="20" y="101" fill="#6ee7b7" font-size="9" font-weight="bold" font-family="monospace">C) C₁₀H₁₆O ✓</text>
            <text x="280" y="101" fill="#a7f3d0" font-size="7" font-weight="bold">correta</text>

            <text x="20" y="126" fill="#e2e8f0" font-size="9" font-family="monospace">D) C₁₀H₁₆O₂</text>
            <text x="180" y="126" fill="#94a3b8" font-size="7">oxigênio extra que não existe</text>

            <text x="20" y="150" fill="#e2e8f0" font-size="9" font-family="monospace">E) C₁₀H₁₈O₂</text>
            <text x="180" y="150" fill="#94a3b8" font-size="7">esqueceu de tirar os 2H + oxigênio extra</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       5. SIMULADOR
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: monte a fórmula da cânfora a partir do borneol",
      descricao: "Ajuste o número de hidrogênios e oxigênios removidos/adicionados na oxidação e veja se a fórmula resultante — e o grau de insaturação — fazem sentido quimicamente.",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-3 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Hidrogênios removidos na oxidação</span><span class="text-cyan-300 font-bold" data-out="hrem">2</span>
              </label>
              <input type="range" data-sim="hrem" min="0" max="4" value="2" step="1" class="w-full accent-cyan-500">
            </div>
            <div>
              <label class="text-[11px] text-slate-400 flex justify-between">
                <span>Oxigênios adicionados</span><span class="text-cyan-300 font-bold" data-out="oadd">0</span>
              </label>
              <input type="range" data-sim="oadd" min="0" max="1" value="0" step="1" class="w-full accent-cyan-500">
            </div>
            <p class="text-[10px] text-slate-500"><i class="fa-solid fa-flask"></i> Fórmula de partida: Borneol C₁₀H₁₈O.</p>
          </div>

          <div class="space-y-3">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
              <p class="text-[11px] text-slate-400">Fórmula resultante:</p>
              <div data-out="formula" class="text-xl font-mono text-cyan-300 font-bold"></div>
              <p class="text-[11px] text-slate-400 pt-1">Grau de insaturação:</p>
              <div data-out="gi" class="text-sm font-mono text-slate-200"></div>
            </div>
            <div data-out="veredito" class="p-3 rounded-xl border text-[11px] leading-relaxed"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var campoH = raiz.querySelector('[data-sim="hrem"]');
        var campoO = raiz.querySelector('[data-sim="oadd"]');
        var saida = function (nome) { return raiz.querySelector('[data-out="' + nome + '"]'); };

        function atualizar() {
          var hrem = parseInt(campoH.value, 10);
          var oadd = parseInt(campoO.value, 10);
          var c = 10, h = 18 - hrem, o = 1 + oadd;

          saida('hrem').textContent = hrem;
          saida('oadd').textContent = oadd;
          saida('formula').textContent = 'C' + c + 'H' + h + 'O' + (o > 1 ? o : '');

          var gi = (2 * c + 2 - h) / 2;
          saida('gi').textContent = 'GI = (2×' + c + '+2−' + h + ')/2 = ' + gi;

          var v = saida('veredito');
          if (h % 2 !== 0) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200';
            v.innerHTML = '<strong>Impossível.</strong> Número ímpar de hidrogênios não corresponde a uma molécula neutra estável — seria um radical.';
          } else if (hrem === 2 && oadd === 0) {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200';
            v.innerHTML = '<strong>Esse é o cenário real da questão!</strong> C₁₀H₁₆O — grau de insaturação 3, compatível com os 2 anéis do borneol mais a nova carbonila da cetona.';
          } else {
            v.className = 'p-3 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200';
            v.innerHTML = 'Formula quimicamente válida, mas não corresponde à oxidação real de álcool secundário a cetona (que remove exatamente 2 H e não adiciona oxigênio).';
          }
        }

        campoH.addEventListener('input', atualizar);
        campoO.addEventListener('input', atualizar);
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-cyan-300 block"><i class="fa-solid fa-vial"></i> Borneol C₁₀H₁₈O (−2H, oxidação) → Cânfora C₁₀H₁₆O</span>
        <svg viewBox="0 0 460 90" class="w-full h-24 mx-auto">
          <rect x="20" y="20" width="140" height="50" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5" rx="4"/>
          <text x="90" y="50" fill="#bae6fd" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">C₁₀H₁₈O</text>
          <text x="230" y="50" fill="#67e8f9" font-size="14" text-anchor="middle">→</text>
          <rect x="300" y="20" width="140" height="50" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.5" rx="4"/>
          <text x="370" y="50" fill="#d1fae5" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">C₁₀H₁₆O</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q116",
    numero: "Questão 116",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "biologia",
    materia: "Biologia / Ecologia & Evolução",
    materiaCor: "emerald",
    materiaIcone: "fa-mountain",
    titulo: "Cangas de Ferro: Por Que Ambientes Extremos e Isolados Formam Espécies Endêmicas",
    tags: ["Biologia", "Ecologia", "Evolução", "Seleção Natural", "Endemismo", "Especiação", "Cangas Ferruginosas"],
    alternativaCorreta: "C",
    userNotes: "",
    userCustomImage: null,

    enunciado: `As <strong>cangas</strong> são ambientes resultantes da atuação, ao longo de milhões de anos, de chuvas, enxurradas, calor e ventos em rochas ricas em ferro. São compostas por até 90% de óxidos de ferro e contêm solos muito ácidos, rasos, com reduzidos índices de fertilidade e temperaturas que atingem quase 70 °C na superfície. Ao contrário do que se imagina, esse tipo de ambiente abriga comunidades de plantas e animais com elevado número de espécies e <strong>distribuição restrita</strong>.
    <br><br>
    <p class="text-[10px] text-slate-500">CARMO, F. F. et al. <strong>Ilhas de ferro estratégicas para a conservação</strong>. Disponível em: http://cienciahoje.org.br. Acesso em: 2 dez. 2018 (adaptado).</p>
    <br>
    A seleção adaptativa nesses ambientes favorece a ocorrência de espécies`,

    alternativas: [
      { letra: "A", texto: "exóticas.", correta: false },
      { letra: "B", texto: "migratórias.", correta: false },
      { letra: "C", texto: "endêmicas.", correta: true },
      { letra: "D", texto: "dominantes.", correta: false },
      { letra: "E", texto: "generalistas.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-emerald-500 pl-3">
          Leia esta parte antes da resolução. Ela cobre por que ambientes extremos e isolados como as cangas funcionam como "ilhas" evolutivas — e por que isso produz exatamente o oposto de espécies generalistas ou exóticas.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">1.</span> O que são as cangas ferruginosas</h4>
          <p>
            Cangas são afloramentos rochosos ricos em óxido de ferro, formados ao longo de milhões de anos. São ambientes fisicamente hostis: solo raso e pobre em nutrientes, alta acidez, temperaturas de superfície próximas a 70 °C e forte exposição ao sol e ao vento. No Brasil, ocorrem principalmente em regiões de mineração de ferro, como o Quadrilátero Ferrífero (MG) e a Serra dos Carajás (PA) — daí o apelido "ilhas de ferro" usado no título do texto de referência.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">2.</span> Seleção adaptativa: o ambiente como filtro</h4>
          <p>
            A <strong>seleção natural (adaptativa)</strong> favorece, em cada ambiente, os indivíduos com características que aumentam sua sobrevivência e reprodução <em>naquelas condições específicas</em>. Num ambiente tão extremo quanto a canga — solo raso, calor intenso, acidez, escassez de nutrientes —, apenas organismos com adaptações muito específicas conseguem sobreviver. Esse ambiente funciona como um <strong>filtro seletivo forte</strong>, que exclui espécies generalistas (adaptadas a condições médias, comuns) e favorece linhagens altamente especializadas para aquele conjunto particular de condições.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">3.</span> O efeito "ilha": isolamento gera endemismo</h4>
          <p>
            As cangas são afloramentos isolados uns dos outros, cercados por outros tipos de vegetação (floresta, cerrado) que funcionam como "barreiras" — daí a analogia com <strong>ilhas</strong> no meio de um "mar" de vegetação diferente. Populações isoladas em cada afloramento evoluem separadamente, sob pressões seletivas muito específicas e sem troca genética significativa com outras populações. Ao longo de gerações, esse isolamento reprodutivo somado à seleção específica do ambiente favorece a formação de espécies que existem <strong>apenas naquele local</strong> (ou num conjunto restrito de locais semelhantes) — ou seja, espécies <strong>endêmicas</strong>.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">4.</span> Endemismo: a definição que bate com o enunciado</h4>
          <p>
            Uma espécie <strong>endêmica</strong> é aquela cuja distribuição geográfica natural está restrita a uma área específica, não sendo encontrada, de forma nativa, em nenhum outro lugar. O próprio enunciado já entrega a resposta ao descrever a comunidade das cangas como tendo "elevado número de espécies e <strong>distribuição restrita</strong>" — essa é exatamente a definição de endemismo.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-emerald-400">5.</span> Por que as outras categorias não se encaixam</h4>
          <p>
            <strong>Espécies exóticas</strong> são introduzidas por ação humana em ambientes fora de sua distribuição natural — não é isso que a seleção natural nas cangas produz, e sim espécies nativas altamente adaptadas.
          </p>
          <p>
            <strong>Espécies migratórias</strong> se deslocam regularmente entre diferentes áreas (geralmente sazonalmente) — o oposto de ficar restrita a um único afloramento isolado.
          </p>
          <p>
            <strong>Espécies dominantes</strong> e <strong>generalistas</strong> costumam ser abundantes e amplamente distribuídas, tolerando uma ampla gama de condições ambientais — exatamente o oposto do padrão de "distribuição restrita" que caracteriza organismos adaptados a um ambiente tão específico e hostil quanto a canga.
          </p>
        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       2. CONCEITOS
       ------------------------------------------------------------------ */
    conceitos: [
      { icone: "fa-mountain", titulo: "Canga ferruginosa", text: "Afloramento rochoso rico em óxido de ferro, com solo raso, ácido, pobre em nutrientes e temperaturas extremas." },
      { icone: "fa-filter", titulo: "Seleção adaptativa como filtro", text: "Condições extremas favorecem linhagens altamente especializadas, excluindo espécies generalistas." },
      { icone: "fa-water", titulo: "Efeito ilha", text: "Afloramentos isolados por outros tipos de vegetação funcionam como ilhas, impedindo troca genética entre populações." },
      { icone: "fa-map-pin", titulo: "Endemismo", text: "Espécie com distribuição geográfica natural restrita a uma área específica — não ocorre naturalmente em outro lugar." },
      { icone: "fa-shuffle", titulo: "Endêmica ≠ exótica ≠ generalista", text: "Exótica é introduzida pelo homem; generalista/dominante tolera ampla gama de condições — o oposto do padrão observado nas cangas." }
    ],

    /* ------------------------------------------------------------------
       3. RESOLUÇÃO
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <div class="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4">
          <p class="font-bold text-emerald-300 mb-1"><i class="fa-solid fa-check-circle"></i> Gabarito: Alternativa C</p>
          <p>O ambiente extremo e isolado da canga seleciona espécies altamente especializadas e restritas a esses afloramentos — ou seja, espécies <strong>endêmicas</strong>, exatamente como o enunciado descreve ("distribuição restrita").</p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold"><i class="fa-solid fa-list-ol text-emerald-400"></i> Estratégia de resolução em 3 passos</h4>
          <p><strong>Passo 1 — Identifique a pista textual.</strong> O enunciado já entrega a resposta: "elevado número de espécies e distribuição restrita". "Distribuição restrita" é a própria definição de endemismo.</p>
          <p><strong>Passo 2 — Conecte com o mecanismo de seleção adaptativa.</strong> Condições extremas (calor, acidez, solo raso) funcionam como filtro seletivo forte, favorecendo especialistas muito adaptados àquele ambiente específico, não generalistas.</p>
          <p><strong>Passo 3 — Elimine as alternativas incompatíveis com "distribuição restrita".</strong> Exóticas, migratórias, dominantes e generalistas descrevem, cada uma à sua maneira, ampla distribuição ou origem externa — o oposto do que o texto descreve.</p>
        </div>

        <div class="space-y-3">
          <h4 class="text-white font-bold"><i class="fa-solid fa-magnifying-glass text-emerald-400"></i> Por que cada alternativa está certa ou errada</h4>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">A) Exóticas — ERRADA</p>
            <p class="text-xs">Espécies exóticas são introduzidas por ação humana fora de sua área de distribuição natural — a seleção natural num ambiente extremo favorece espécies nativas adaptadas, não introduzidas.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">B) Migratórias — ERRADA</p>
            <p class="text-xs">Espécies migratórias se deslocam entre diferentes áreas regularmente — o oposto de ficarem restritas a um único afloramento isolado, como a canga exige de seus organismos especializados.</p>
          </div>

          <div class="border border-emerald-500/40 bg-emerald-950/20 rounded-lg p-3">
            <p class="font-bold text-emerald-300 text-xs mb-1">C) Endêmicas — CORRETA</p>
            <p class="text-xs">Distribuição geográfica restrita a um local específico é exatamente a definição de endemismo — e é exatamente o que o enunciado descreve para as comunidades das cangas.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">D) Dominantes — ERRADA</p>
            <p class="text-xs">Espécies dominantes costumam ser numericamente abundantes e amplamente distribuídas em vários ambientes — não corresponde ao padrão de distribuição restrita e alta especialização das cangas.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">E) Generalistas — ERRADA</p>
            <p class="text-xs">Espécies generalistas toleram ampla gama de condições ambientais e por isso costumam ter distribuição ampla — o oposto do que a seleção adaptativa produz num ambiente tão específico e hostil quanto a canga.</p>
          </div>

        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       4. GALERIA (4 diagramas SVG)
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Perfil de um ambiente de canga",
        legenda: "Solo raso, ácido, pobre em nutrientes, rico em óxido de ferro, com temperaturas de superfície próximas a 70 °C.",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <rect x="30" y="90" width="400" height="40" fill="#7c2d12" stroke="#c2410c" stroke-width="1.5"/>
            <text x="230" y="114" fill="#fed7aa" font-size="9" font-weight="bold" text-anchor="middle">Solo raso, ácido, rico em óxido de ferro</text>
            <line x1="60" y1="30" x2="60" y2="90" stroke="#f87171" stroke-width="2"/><polygon points="60,30 55,42 65,42" fill="#f87171"/>
            <text x="60" y="24" fill="#fca5a5" font-size="8" text-anchor="middle">~70°C</text>
            <path d="M 150 30 Q 160 50 150 70" fill="none" stroke="#94a3b8" stroke-width="2"/>
            <text x="150" y="20" fill="#94a3b8" font-size="8" text-anchor="middle">vento</text>
            <circle cx="330" cy="45" r="18" fill="#fde047"/>
            <text x="330" y="20" fill="#fde047" font-size="8" text-anchor="middle">sol forte</text>
            <text x="230" y="145" fill="#94a3b8" font-size="8" text-anchor="middle">Ambiente hostil → forte filtro seletivo</text>
          </svg>`
      },
      {
        titulo: '"Ilhas de ferro": afloramentos isolados',
        legenda: "Cangas isoladas por outros tipos de vegetação impedem troca genética — cada uma pode desenvolver espécies próprias.",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <rect x="10" y="10" width="440" height="130" fill="#166534" rx="6"/>
            <ellipse cx="110" cy="60" rx="55" ry="35" fill="#7c2d12" stroke="#c2410c" stroke-width="1.5"/>
            <text x="110" y="64" fill="#fed7aa" font-size="8" font-weight="bold" text-anchor="middle">Canga A</text>
            <text x="110" y="78" fill="#fed7aa" font-size="6" text-anchor="middle">espécie endêmica X</text>
            <ellipse cx="330" cy="95" rx="55" ry="35" fill="#7c2d12" stroke="#c2410c" stroke-width="1.5"/>
            <text x="330" y="99" fill="#fed7aa" font-size="8" font-weight="bold" text-anchor="middle">Canga B</text>
            <text x="330" y="113" fill="#fed7aa" font-size="6" text-anchor="middle">espécie endêmica Y</text>
            <text x="230" y="30" fill="#bbf7d0" font-size="8" font-weight="bold" text-anchor="middle">"mar" de vegetação diferente (floresta/cerrado)</text>
            <text x="230" y="145" fill="#94a3b8" font-size="7" text-anchor="middle">Sem troca genética entre A e B → evolução separada → endemismo</text>
          </svg>`
      },
      {
        titulo: "Cinco tipos de distribuição, uma resposta certa",
        legenda: "Só o endemismo descreve exatamente 'distribuição restrita' — a frase-chave do enunciado.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <rect x="10" y="10" width="440" height="26" fill="#1e293b" rx="4"/>
            <text x="110" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Categoria</text>
            <text x="320" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Padrão de distribuição</text>

            <text x="20" y="52" fill="#e2e8f0" font-size="8">A) Exótica</text>
            <text x="220" y="52" fill="#94a3b8" font-size="7">introduzida pelo homem, fora da área natural</text>

            <text x="20" y="76" fill="#e2e8f0" font-size="8">B) Migratória</text>
            <text x="220" y="76" fill="#94a3b8" font-size="7">desloca-se entre múltiplas áreas</text>

            <rect x="10" y="84" width="440" height="26" fill="#064e3b" rx="4"/>
            <text x="20" y="101" fill="#6ee7b7" font-size="8" font-weight="bold">C) Endêmica ✓</text>
            <text x="220" y="101" fill="#a7f3d0" font-size="7" font-weight="bold">distribuição restrita a uma área específica</text>

            <text x="20" y="126" fill="#e2e8f0" font-size="8">D) Dominante</text>
            <text x="220" y="126" fill="#94a3b8" font-size="7">abundante, amplamente distribuída</text>

            <text x="20" y="150" fill="#e2e8f0" font-size="8">E) Generalista</text>
            <text x="220" y="150" fill="#94a3b8" font-size="7">tolera ampla gama de condições, distribuição ampla</text>
          </svg>`
      },
      {
        titulo: "Da pressão seletiva ao endemismo",
        legenda: "Condições extremas + isolamento geográfico convergem para espécies altamente especializadas e restritas.",
        svg: `
          <svg viewBox="0 0 460 130" class="w-full h-auto">
            <rect x="10" y="40" width="120" height="50" rx="5" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
            <text x="70" y="60" fill="#e2e8f0" font-size="7" font-weight="bold" text-anchor="middle">Ambiente</text>
            <text x="70" y="72" fill="#e2e8f0" font-size="7" text-anchor="middle">extremo</text>
            <text x="138" y="68" fill="#64748b" font-size="11" text-anchor="middle">+</text>
            <rect x="150" y="40" width="120" height="50" rx="5" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
            <text x="210" y="60" fill="#e2e8f0" font-size="7" font-weight="bold" text-anchor="middle">Isolamento</text>
            <text x="210" y="72" fill="#e2e8f0" font-size="7" text-anchor="middle">geográfico</text>
            <text x="278" y="68" fill="#64748b" font-size="14" text-anchor="middle">→</text>
            <rect x="290" y="40" width="160" height="50" rx="5" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.5"/>
            <text x="370" y="60" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">Espécies endêmicas</text>
            <text x="370" y="75" fill="#a7f3d0" font-size="7" text-anchor="middle">distribuição restrita</text>
          </svg>`
      }
    ],

    /* ------------------------------------------------------------------
       5. SIMULADOR
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Laboratório: associe o tipo de distribuição à definição correta",
      descricao: "Escolha uma categoria e veja sua definição e se ela se encaixa no que o enunciado descreve para as cangas (elevado número de espécies com distribuição restrita).",
      html: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div class="space-y-2 bg-slate-950 border border-slate-800 rounded-xl p-4">
            <p class="text-[11px] text-slate-400 mb-1">Selecione:</p>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q116tipo" data-sim="tipo" value="exotica" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Exótica</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q116tipo" data-sim="tipo" value="migratoria" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Migratória</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q116tipo" data-sim="tipo" value="endemica" checked class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Endêmica</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q116tipo" data-sim="tipo" value="dominante" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Dominante</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 cursor-pointer">
              <input type="radio" name="q116tipo" data-sim="tipo" value="generalista" class="accent-emerald-500">
              <span class="text-[11px] text-slate-200">Generalista</span>
            </label>
          </div>

          <div class="space-y-3">
            <div data-out="painel" class="p-4 rounded-xl border text-[11px] leading-relaxed bg-slate-950 border-slate-800 text-slate-300"></div>
          </div>
        </div>
      `,
      init: function (raiz) {
        var radios = raiz.querySelectorAll('[data-sim="tipo"]');
        var painel = raiz.querySelector('[data-out="painel"]');

        var dados = {
          exotica: { encaixa: false, classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200', texto: '<strong>Não se encaixa.</strong> Espécie exótica é introduzida por ação humana fora de sua área natural — a canga seleciona espécies nativas adaptadas, não introduzidas.' },
          migratoria: { encaixa: false, classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200', texto: '<strong>Não se encaixa.</strong> Espécie migratória se desloca entre múltiplas áreas — o oposto de "distribuição restrita" a um único afloramento.' },
          endemica: { encaixa: true, classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200', texto: '<strong>É exatamente isso!</strong> Espécie endêmica tem distribuição geográfica restrita a uma área específica — a definição que bate com o "distribuição restrita" do enunciado.' },
          dominante: { encaixa: false, classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200', texto: '<strong>Não se encaixa.</strong> Espécie dominante costuma ser abundante e amplamente distribuída — o oposto do padrão restrito das cangas.' },
          generalista: { encaixa: false, classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200', texto: '<strong>Não se encaixa.</strong> Espécie generalista tolera ampla gama de condições e por isso tende a ter distribuição ampla — o oposto do que a seleção extrema da canga favorece.' }
        };

        function atualizar() {
          var t = raiz.querySelector('[data-sim="tipo"]:checked').value;
          var d = dados[t];
          painel.className = d.classe;
          painel.innerHTML = d.texto;
        }

        radios.forEach(function (r) { r.addEventListener('change', atualizar); });
        atualizar();
      }
    },

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-emerald-300 block"><i class="fa-solid fa-mountain"></i> Ambiente extremo + isolado → seleção adaptativa → espécies endêmicas (distribuição restrita)</span>
        <svg viewBox="0 0 460 90" class="w-full h-24 mx-auto">
          <rect x="20" y="25" width="120" height="50" fill="#7c2d12" stroke="#c2410c" stroke-width="1.5" rx="4"/>
          <text x="80" y="55" fill="#fed7aa" font-size="9" font-weight="bold" text-anchor="middle">Canga extrema</text>
          <text x="220" y="55" fill="#67e8f9" font-size="14" text-anchor="middle">→</text>
          <rect x="300" y="25" width="140" height="50" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.5" rx="4"/>
          <text x="370" y="50" fill="#d1fae5" font-size="9" font-weight="bold" text-anchor="middle">Espécies endêmicas</text>
          <text x="370" y="65" fill="#a7f3d0" font-size="7" text-anchor="middle">distribuição restrita</text>
        </svg>
      </div>
    `,
    simuladorType: null
  },

  {
    id: "q117",
    numero: "Questão 117",
    ano: "2025",
    caderno: "Caderno 7 (Azul)",
    area: "natureza",
    areaNome: "Ciências da Natureza",
    materiaId: "quimica",
    materia: "Química / Equilíbrio Químico & Princípio de Le Chatelier",
    materiaCor: "cyan",
    materiaIcone: "fa-scale-balanced",
    titulo: "Cloração do Dióxido de Titânio: Deslocando o Equilíbrio a Favor do TiCl₄",
    tags: ["Química", "Equilíbrio Químico", "Princípio de Le Chatelier", "Pressão Parcial", "Reação Endotérmica", "Sólidos em Equilíbrio"],
    alternativaCorreta: "D",
    userNotes: "",
    userCustomImage: null,

    enunciado: `Para a produção de titânio metálico ou dióxido de titânio puros, é necessário fazer a cloração do minério que contém dióxido de titânio, com o objetivo de separar esse óxido de outras substâncias presentes no minério. A principal reação química de cloração é representada por:
    <br><br>
    $$TiO_{2(s)} + 2\\,Cl_{2(g)} \\rightleftharpoons TiCl_{4(g)} + O_{2(g)} \\qquad \\Delta H = +175\\ kJ/mol$$
    <br>
    Depois da cloração, o tetracloreto de titânio é condensado e convertido, novamente, a dióxido de titânio.
    <br><br>
    Após o sistema atingir o equilíbrio químico, como a formação do $TiCl_4$ pode ser favorecida?`,

    alternativas: [
      { letra: "A", texto: "Aumentando a pressão total do sistema.", correta: false },
      { letra: "B", texto: "Diminuindo a temperatura do sistema.", correta: false },
      { letra: "C", texto: "Aumentando a pressão parcial de O₂.", correta: false },
      { letra: "D", texto: "Aumentando a pressão parcial de Cl₂.", correta: true },
      { letra: "E", texto: "Variando a quantidade de TiO₂.", correta: false }
    ],

    /* ------------------------------------------------------------------
       1. MATÉRIA COMPLETA
       ------------------------------------------------------------------ */
    materiaCompleta: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <p class="text-slate-400 text-xs italic border-l-2 border-cyan-500 pl-3">
          Leia esta parte antes da resolução. Ela explica por que dá para "empurrar" um equilíbrio químico para o lado que você quer — mudando concentração, pressão parcial ou temperatura — e por que nem toda mudança tem efeito.
        </p>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">1.</span> O que é um equilíbrio químico</h4>
          <p>
            A seta dupla ($\\rightleftharpoons$) indica que a reação é <strong>reversível</strong>: TiO₂ e Cl₂ reagem para formar TiCl₄ e O₂, ao mesmo tempo em que TiCl₄ e O₂ reagem para regenerar TiO₂ e Cl₂. No <strong>equilíbrio</strong>, as velocidades das reações direta e inversa se igualam, e as quantidades de cada substância param de variar — mas as reações continuam acontecendo (equilíbrio <em>dinâmico</em>, não parado).
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">2.</span> Princípio de Le Chatelier</h4>
          <p>
            Quando um sistema em equilíbrio sofre uma perturbação (mudança de concentração, pressão ou temperatura), ele se desloca no sentido que <strong>minimiza</strong> essa perturbação. Na prática: aumentar a quantidade de um <strong>reagente</strong> desloca o equilíbrio para a <strong>direita</strong> (mais produtos); aumentar a quantidade de um <strong>produto</strong> desloca para a <strong>esquerda</strong> (mais reagentes).
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">3.</span> Pressão parcial funciona como concentração</h4>
          <p>
            Para um gás, aumentar sua <strong>pressão parcial</strong> equivale a aumentar sua concentração no sistema. Como $Cl_2$ é reagente, aumentar a pressão parcial de $Cl_2$ desloca o equilíbrio para a direita, favorecendo a formação de $TiCl_4$. Já $O_2$ é produto: aumentar a pressão parcial de $O_2$ faz o efeito contrário, deslocando o equilíbrio para a esquerda.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">4.</span> Pressão total só importa se o nº de mols de gás muda</h4>
          <p>
            Aumentar a <strong>pressão total</strong> do sistema (comprimindo o volume) desloca o equilíbrio para o lado com <strong>menos mols de gás</strong>. Aqui, os reagentes gasosos somam 2 mol ($2\\,Cl_2$) e os produtos gasosos também somam 2 mol ($TiCl_4 + O_2$) — o $TiO_2$ é sólido e não conta. Como $\\Delta n_{gás} = 0$, mudar a pressão total <strong>não desloca</strong> esse equilíbrio para nenhum lado.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">5.</span> Temperatura em reação endotérmica</h4>
          <p>
            Com $\\Delta H = +175\\ kJ/mol$, a reação direta (formação de $TiCl_4$) é <strong>endotérmica</strong> — absorve calor. Pense no calor como se fosse mais um "reagente": aumentar a temperatura desloca o equilíbrio para a direita (mais $TiCl_4$); <strong>diminuir</strong> a temperatura desloca para a esquerda, ou seja, atrapalha a formação de $TiCl_4$.
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold flex items-center gap-2"><span class="text-cyan-400">6.</span> Sólidos puros não entram na "conta" do equilíbrio</h4>
          <p>
            $TiO_2$ é um sólido puro. A concentração (ou "atividade") de um sólido puro é constante e, por convenção, não aparece na expressão da constante de equilíbrio. Por isso, aumentar ou diminuir a quantidade de $TiO_2$ sólido presente <strong>não altera a posição do equilíbrio</strong>, desde que ainda haja sólido suficiente para a reação ocorrer.
          </p>
        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       2. CONCEITOS
       ------------------------------------------------------------------ */
    conceitos: [
      { icone: "fa-scale-balanced", titulo: "Princípio de Le Chatelier", text: "Uma perturbação no equilíbrio (concentração, pressão parcial ou temperatura) desloca o sistema no sentido que minimiza essa perturbação." },
      { icone: "fa-wind", titulo: "Pressão parcial de reagente vs. produto", text: "Aumentar a pressão parcial de um reagente desloca para os produtos; aumentar a de um produto desloca para os reagentes." },
      { icone: "fa-compress", titulo: "Pressão total e Δn de gás", text: "Só desloca o equilíbrio se o número de mols de gás for diferente entre reagentes e produtos. Aqui, Δn = 0 (2 mol de cada lado)." },
      { icone: "fa-temperature-high", titulo: "Temperatura em reação endotérmica", text: "Com ΔH positivo, aumentar a temperatura favorece os produtos; diminuir a temperatura favorece os reagentes." },
      { icone: "fa-cube", titulo: "Sólidos puros", text: "Não entram na expressão de Kc/Kp — variar a quantidade de um sólido puro não desloca o equilíbrio." }
    ],

    /* ------------------------------------------------------------------
       3. RESOLUÇÃO
       ------------------------------------------------------------------ */
    resolucaoHtml: `
      <div class="space-y-5 text-sm text-slate-200 leading-relaxed">

        <div class="bg-cyan-950/40 border border-cyan-500/30 rounded-xl p-4">
          <p class="font-bold text-cyan-300 mb-1"><i class="fa-solid fa-check-circle"></i> Gabarito: Alternativa D</p>
          <p>Aumentar a pressão parcial de $Cl_2$ — um reagente — desloca o equilíbrio para a direita, favorecendo a formação de $TiCl_4$, conforme o Princípio de Le Chatelier.</p>
        </div>

        <div class="space-y-2">
          <h4 class="text-white font-bold"><i class="fa-solid fa-list-ol text-cyan-400"></i> Estratégia de resolução em 3 passos</h4>
          <p><strong>Passo 1 — Identifique reagentes, produtos e fases.</strong> Reagentes: $TiO_{2(s)}$ e $Cl_{2(g)}$. Produtos: $TiCl_{4(g)}$ e $O_{2(g)}$. Note que $TiO_2$ é sólido — isso já elimina a alternativa E.</p>
          <p><strong>Passo 2 — Conte os mols de gás de cada lado.</strong> Reagentes gasosos: 2 mol ($2\\,Cl_2$). Produtos gasosos: 2 mol ($TiCl_4 + O_2$). Como são iguais, mudar a pressão total não desloca o equilíbrio — isso elimina a alternativa A.</p>
          <p><strong>Passo 3 — Aplique Le Chatelier em cada alternativa restante.</strong> $\\Delta H > 0$ (endotérmica direta): esfriar atrapalha a formação de $TiCl_4$ (elimina B). Aumentar pressão parcial de $O_2$ (produto) desloca para a esquerda (elimina C). Só resta D: aumentar pressão parcial de $Cl_2$ (reagente) desloca para a direita — favorece $TiCl_4$.</p>
        </div>

        <div class="space-y-3">
          <h4 class="text-white font-bold"><i class="fa-solid fa-magnifying-glass text-cyan-400"></i> Por que cada alternativa está certa ou errada</h4>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">A) Aumentar a pressão total — ERRADA</p>
            <p class="text-xs">Reagentes e produtos gasosos somam 2 mol de cada lado ($\\Delta n_{gás} = 0$). Sem diferença no número de mols de gás, mudar a pressão total não desloca esse equilíbrio para nenhum sentido.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">B) Diminuir a temperatura — ERRADA</p>
            <p class="text-xs">A reação direta é endotérmica ($\\Delta H = +175\\ kJ/mol$). Diminuir a temperatura desloca o equilíbrio no sentido exotérmico (para os reagentes), reduzindo — e não favorecendo — a formação de $TiCl_4$.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">C) Aumentar a pressão parcial de O₂ — ERRADA</p>
            <p class="text-xs">$O_2$ é um produto. Aumentar a concentração/pressão parcial de um produto desloca o equilíbrio para o lado dos reagentes, consumindo (e não formando) mais $TiCl_4$.</p>
          </div>

          <div class="border border-emerald-500/40 bg-emerald-950/20 rounded-lg p-3">
            <p class="font-bold text-emerald-300 text-xs mb-1">D) Aumentar a pressão parcial de Cl₂ — CORRETA</p>
            <p class="text-xs">$Cl_2$ é reagente. Aumentar sua pressão parcial desloca o equilíbrio para a direita, na direção de formação de $TiCl_4$ e $O_2$ — exatamente o que a pergunta pede.</p>
          </div>

          <div class="border border-slate-800 rounded-lg p-3">
            <p class="font-bold text-rose-300 text-xs mb-1">E) Variar a quantidade de TiO₂ — ERRADA</p>
            <p class="text-xs">$TiO_2$ é um sólido puro: sua concentração (atividade) é constante e não entra na expressão do equilíbrio. Variar a quantidade de sólido presente não desloca a posição do equilíbrio.</p>
          </div>

        </div>

      </div>
    `,

    /* ------------------------------------------------------------------
       4. GALERIA
       ------------------------------------------------------------------ */
    galeria: [
      {
        titulo: "Reação de cloração do TiO₂ e o efeito de cada fator",
        legenda: "Cl₂ e TiCl₄/O₂ estão em pé de igualdade (2 mol de gás de cada lado) — só concentração/pressão parcial e temperatura deslocam esse equilíbrio.",
        svg: `
          <svg viewBox="0 0 460 150" class="w-full h-auto">
            <rect x="15" y="45" width="150" height="60" rx="6" fill="#083344" stroke="#22d3ee" stroke-width="1.5"/>
            <text x="90" y="68" fill="#a5f3fc" font-size="9" font-weight="bold" text-anchor="middle">TiO₂(s) + 2 Cl₂(g)</text>
            <text x="90" y="84" fill="#67e8f9" font-size="7" text-anchor="middle">reagentes · 2 mol gás</text>
            <text x="90" y="98" fill="#67e8f9" font-size="7" text-anchor="middle">(TiO₂ é sólido, não conta)</text>
            <text x="225" y="68" fill="#facc15" font-size="16" text-anchor="middle">⇌</text>
            <text x="225" y="88" fill="#94a3b8" font-size="7" text-anchor="middle">ΔH = +175 kJ/mol</text>
            <rect x="285" y="45" width="160" height="60" rx="6" fill="#083344" stroke="#22d3ee" stroke-width="1.5"/>
            <text x="365" y="68" fill="#a5f3fc" font-size="9" font-weight="bold" text-anchor="middle">TiCl₄(g) + O₂(g)</text>
            <text x="365" y="84" fill="#67e8f9" font-size="7" text-anchor="middle">produtos · 2 mol gás</text>
            <text x="365" y="98" fill="#67e8f9" font-size="7" text-anchor="middle">(alvo: favorecer este lado)</text>
            <text x="225" y="130" fill="#94a3b8" font-size="7" text-anchor="middle">Δn gás = 2 − 2 = 0 → pressão total não desloca o equilíbrio</text>
          </svg>`
      },
      {
        titulo: "Resumo dos 5 fatores de Le Chatelier nesta questão",
        legenda: "Só a alternativa D empurra o equilíbrio para a formação de TiCl₄.",
        svg: `
          <svg viewBox="0 0 460 190" class="w-full h-auto">
            <rect x="10" y="10" width="440" height="26" fill="#1e293b" rx="4"/>
            <text x="90" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Alternativa</text>
            <text x="330" y="27" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Efeito sobre a formação de TiCl₄</text>

            <text x="20" y="52" fill="#e2e8f0" font-size="8">A) ↑ pressão total</text>
            <text x="220" y="52" fill="#94a3b8" font-size="7">nenhum efeito (Δn gás = 0)</text>

            <text x="20" y="76" fill="#e2e8f0" font-size="8">B) ↓ temperatura</text>
            <text x="220" y="76" fill="#94a3b8" font-size="7">atrapalha (reação direta é endotérmica)</text>

            <text x="20" y="100" fill="#e2e8f0" font-size="8">C) ↑ pressão parcial de O₂</text>
            <text x="220" y="100" fill="#94a3b8" font-size="7">atrapalha (produto em excesso)</text>

            <rect x="10" y="108" width="440" height="26" fill="#064e3b" rx="4"/>
            <text x="20" y="125" fill="#6ee7b7" font-size="8" font-weight="bold">D) ↑ pressão parcial de Cl₂ ✓</text>
            <text x="330" y="125" fill="#a7f3d0" font-size="7" font-weight="bold" text-anchor="middle">favorece (reagente em excesso)</text>

            <text x="20" y="150" fill="#e2e8f0" font-size="8">E) variar quantidade de TiO₂</text>
            <text x="220" y="150" fill="#94a3b8" font-size="7">nenhum efeito (sólido puro)</text>
          </svg>`
      }
    ],

    diagramaHtml: `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-2">
        <span class="text-[11px] font-bold text-cyan-300 block"><i class="fa-solid fa-scale-balanced"></i> Reagente em excesso empurra o equilíbrio para os produtos</span>
        <svg viewBox="0 0 460 90" class="w-full h-24 mx-auto">
          <rect x="20" y="25" width="140" height="50" fill="#083344" stroke="#22d3ee" stroke-width="1.5" rx="4"/>
          <text x="90" y="50" fill="#a5f3fc" font-size="9" font-weight="bold" text-anchor="middle">↑ Cl₂ (reagente)</text>
          <text x="90" y="65" fill="#67e8f9" font-size="7" text-anchor="middle">pressão parcial maior</text>
          <text x="230" y="55" fill="#67e8f9" font-size="14" text-anchor="middle">→</text>
          <rect x="300" y="25" width="140" height="50" fill="#064e3b" stroke="#6ee7b7" stroke-width="1.5" rx="4"/>
          <text x="370" y="50" fill="#d1fae5" font-size="9" font-weight="bold" text-anchor="middle">↑ TiCl₄ + O₂</text>
          <text x="370" y="65" fill="#a7f3d0" font-size="7" text-anchor="middle">formação favorecida</text>
        </svg>
      </div>
    `,

    /* ------------------------------------------------------------------
       5. LABORATÓRIO (simulador interativo)
       ------------------------------------------------------------------ */
    simulador: {
      titulo: "Qual fator favorece a formação de TiCl₄?",
      descricao: "Escolha uma das cinco mudanças propostas na questão e veja se ela favorece, atrapalha ou não afeta a formação de TiCl₄ no equilíbrio.",
      html: `
        <div class="space-y-3" data-sim="raiz-q117">
          <div class="grid grid-cols-1 gap-2 text-xs">
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 hover:border-cyan-500 cursor-pointer">
              <input type="radio" name="fatorQ117" value="pressaoTotal" data-sim="tipo">
              <span>A) Aumentar a pressão total do sistema</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 hover:border-cyan-500 cursor-pointer">
              <input type="radio" name="fatorQ117" value="temperatura" data-sim="tipo">
              <span>B) Diminuir a temperatura do sistema</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 hover:border-cyan-500 cursor-pointer">
              <input type="radio" name="fatorQ117" value="pressaoO2" data-sim="tipo">
              <span>C) Aumentar a pressão parcial de O₂</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 hover:border-cyan-500 cursor-pointer">
              <input type="radio" name="fatorQ117" value="pressaoCl2" data-sim="tipo">
              <span>D) Aumentar a pressão parcial de Cl₂</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-800 hover:border-cyan-500 cursor-pointer">
              <input type="radio" name="fatorQ117" value="quantidadeTiO2" data-sim="tipo">
              <span>E) Variar a quantidade de TiO₂</span>
            </label>
          </div>
          <div data-out="painel" class="p-4 rounded-xl border text-[11px] leading-relaxed border-slate-800 bg-slate-950 text-slate-400">
            Escolha uma alternativa acima para ver o efeito sobre o equilíbrio.
          </div>
        </div>
      `,
      init(raiz) {
        var radios = raiz.querySelectorAll('[data-sim="tipo"]');
        var painel = raiz.querySelector('[data-out="painel"]');

        var dados = {
          pressaoTotal: { favorece: false, classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200', texto: '<strong>Sem efeito.</strong> Reagentes e produtos gasosos somam 2 mol de cada lado (Δn gás = 0) — mudar a pressão total não desloca esse equilíbrio.' },
          temperatura: { favorece: false, classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200', texto: '<strong>Atrapalha.</strong> A reação direta é endotérmica (ΔH = +175 kJ/mol) — diminuir a temperatura desloca o equilíbrio para os reagentes, reduzindo a formação de TiCl₄.' },
          pressaoO2: { favorece: false, classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-rose-500/40 bg-rose-950/30 text-rose-200', texto: '<strong>Atrapalha.</strong> O₂ é produto. Aumentar sua pressão parcial desloca o equilíbrio para os reagentes, consumindo TiCl₄ em vez de formá-lo.' },
          pressaoCl2: { favorece: true, classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-emerald-500/40 bg-emerald-950/30 text-emerald-200', texto: '<strong>É exatamente isso!</strong> Cl₂ é reagente. Aumentar sua pressão parcial desloca o equilíbrio para a direita, favorecendo a formação de TiCl₄ — esta é a resposta da questão.' },
          quantidadeTiO2: { favorece: false, classe: 'p-4 rounded-xl border text-[11px] leading-relaxed border-amber-500/40 bg-amber-950/30 text-amber-200', texto: '<strong>Sem efeito.</strong> TiO₂ é sólido puro: sua concentração não entra na expressão do equilíbrio, então variar sua quantidade não desloca a posição do equilíbrio.' }
        };

        function atualizar() {
          var checked = raiz.querySelector('[data-sim="tipo"]:checked');
          if (!checked) return;
          var d = dados[checked.value];
          painel.className = d.classe;
          painel.innerHTML = d.texto;
        }

        radios.forEach(function (r) { r.addEventListener('change', atualizar); });
      }
    },
    simuladorType: null
  }

];
