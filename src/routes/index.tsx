import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sabesp · Ensaios de Proficiência Interlaboratoriais" },
      { name: "description", content: "Programa de Ensaios de Proficiência (PEP) Sabesp — comparações interlaboratoriais para análises ambientais, águas, sólidos, óleos e graxas, sementes e amostragem." },
      { property: "og:title", content: "Sabesp · Ensaios de Proficiência" },
      { property: "og:description", content: "Excelência em metrologia e ensaios interlaboratoriais para laboratórios brasileiros." },
    ],
  }),
  component: Page,
});

const VIDEOS = [
  "https://assets.mixkit.co/videos/4645/4645-720.mp4",
  "https://assets.mixkit.co/videos/39764/39764-720.mp4",
  "https://assets.mixkit.co/videos/4736/4736-720.mp4",
  "https://assets.mixkit.co/videos/27607/27607-720.mp4",
];

const PROGRAMS = [
  { tag: "Amostragem", title: "PEP de Amostragem", region: "Rio Grande do Sul", date: "16 Mar 2026", img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80" },
  { tag: "Ambiental", title: "Análises Ambientais", region: "Programa Nacional", date: "30 Mar 2026", img: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=1200&q=80" },
  { tag: "Óleos & Graxas", title: "Óleos e Graxas", region: "Programa Nacional", date: "20 Abr 2026", img: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=1200&q=80" },
  { tag: "Sólidos", title: "Série Sólidos", region: "Águas residuárias", date: "20 Abr 2026", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80" },
  { tag: "Sementes", title: "Análise de Sementes", region: "Programa Nacional", date: "12 Mai 2026", img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80" },
  { tag: "Microbiologia", title: "Microbiologia da Água", region: "Programa Nacional", date: "08 Jun 2026", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80" },
];

function Page() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % VIDEOS.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero active={active} />
      <Stats />
      <Programs />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero({ active }: { active: number }) {
  return (
    <header className="relative isolate min-h-screen w-full overflow-hidden bg-[var(--color-deep)]">
      {/* Video background sequence with smooth crossfade */}
      <div className="absolute inset-0 -z-10">
        {VIDEOS.map((src, i) => (
          <video
            key={src}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover will-change-[opacity,transform]"
            style={{
              opacity: i === active ? 1 : 0,
              transform: i === active ? "scale(1.04)" : "scale(1)",
              transition: "opacity 2200ms cubic-bezier(0.45, 0, 0.2, 1), transform 7500ms ease-out",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.05_220/0.82)] via-[oklch(0.22_0.06_215/0.55)] to-[oklch(0.15_0.04_220/0.95)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.4_0.13_195/0.35),transparent_60%)]" />
        <div className="absolute inset-0 grain opacity-40 mix-blend-overlay" />
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <a href="#" className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Sabesp_logo.svg/512px-Sabesp_logo.svg.png"
            alt="Sabesp"
            className="h-9 w-auto brightness-0 invert drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:h-11"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/85 md:flex">
          <a href="#programas" className="hover:text-white">Programas</a>
          <a href="#sobre" className="hover:text-white">Sobre o PEP</a>
          <a href="#metodologia" className="hover:text-white">Metodologia</a>
          <a href="#contato" className="hover:text-white">Contato</a>
        </nav>

        <a
          href="#programas"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[oklch(0.22_0.05_220)] shadow-lg shadow-black/20 transition hover:bg-white/90 md:inline-flex"
        >
          Programação 2026 →
        </a>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl flex-col justify-center px-6 pb-24 md:px-12">
        <div className="max-w-4xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/90 ring-1 ring-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-aqua)]" />
            Programa Sabesp · ISO/IEC 17043
          </div>

          <h1 className="text-balance text-5xl font-normal leading-[1.05] text-white md:text-7xl lg:text-[5.5rem]">
            Ensaios de proficiência <em className="text-[var(--color-aqua)]">interlaboratoriais</em> com rigor científico.
          </h1>

          <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-white/80 md:text-xl">
            Programas reconhecidos nacionalmente para validação, comparação e melhoria contínua de laboratórios de análises químicas, ambientais e microbiológicas.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="https://redemetrologica.com.br/downloads/Previsao_Ensaios_de_Proficiencia_2026.pdf"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-aqua)] px-7 py-4 text-sm font-semibold text-[oklch(0.18_0.05_220)] shadow-xl shadow-[oklch(0.4_0.13_195/0.4)] transition hover:scale-[1.02] hover:bg-white"
            >
              Baixar programação anual
              <span className="transition group-hover:translate-x-1">↓</span>
            </a>
            <a
              href="#programas"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver ensaios confirmados
            </a>
          </div>
        </div>

        {/* Bottom progress indicator */}
        <div className="absolute bottom-10 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/60 md:left-12 md:right-12">
          <span>SP · Brasil</span>
          <div className="flex gap-2">
            {VIDEOS.map((_, i) => (
              <span
                key={i}
                className={`h-px transition-all duration-700 ${i === active ? "w-12 bg-white" : "w-6 bg-white/30"}`}
              />
            ))}
          </div>
          <span>Rolar ↓</span>
        </div>
      </div>
    </header>
  );
}

function Stats() {
  const items = [
    { n: "+450", l: "Laboratórios participantes" },
    { n: "27", l: "Programas ativos" },
    { n: "ISO 17043", l: "Acreditação" },
    { n: "20 anos", l: "De experiência" },
  ];
  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
        {items.map((it) => (
          <div key={it.l} className="bg-white px-6 py-10 md:px-10 md:py-14">
            <div className="font-display text-4xl text-[var(--color-deep)] md:text-5xl">{it.n}</div>
            <div className="mt-2 text-sm text-muted-foreground">{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programas" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Programação 2026
            </div>
            <h2 className="text-balance text-4xl text-[var(--color-deep)] md:text-6xl">
              Ensaios confirmados, agendas abertas.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Cada programa segue protocolos próprios, com homogeneidade, estabilidade e tratamento estatístico conforme ABNT NBR ISO 13528.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-border transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[oklch(0.4_0.1_210/0.15)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.05_220/0.4)] to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-deep)] backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Confirmado
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-[var(--color-deep)]/80 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="p-7">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.region}</div>
                <h3 className="mt-2 text-2xl text-[var(--color-deep)]">{p.title}</h3>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-sm font-medium text-[var(--color-primary)]">{p.date}</span>
                  <a href="#" className="text-sm font-semibold text-[var(--color-deep)] underline-offset-4 hover:underline">
                    Visualizar →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[var(--color-deep)] py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-12">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1614308457932-e16d85c5d057?auto=format&fit=crop&w=1400&q=80"
            alt="Laboratório Sabesp"
            className="aspect-[4/5] w-full rounded-3xl object-cover ring-1 ring-white/10"
          />
          <div className="absolute -bottom-6 -right-6 max-w-xs rounded-2xl bg-[var(--color-aqua)] p-6 text-[oklch(0.18_0.05_220)] shadow-2xl">
            <div className="font-display text-3xl">17043</div>
            <div className="mt-1 text-sm font-medium">Acreditado conforme ABNT NBR ISO/IEC para provedores de ensaios de proficiência.</div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-aqua)]">
            Sobre o programa
          </div>
          <h2 className="text-balance text-4xl leading-tight md:text-5xl">
            Comparação entre laboratórios como instrumento de excelência técnica.
          </h2>
          <p className="mt-6 text-balance text-white/70 md:text-lg">
            A Sabesp, por meio do seu Centro de Tecnologia, opera há mais de duas décadas um dos mais robustos programas de ensaios de proficiência do Brasil, contribuindo para a qualidade analítica de laboratórios públicos e privados.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { t: "Tratamento estatístico robusto", d: "Métodos conforme ISO 13528 com Z-score, En-score e gráficos comparativos." },
              { t: "Materiais homogêneos e estáveis", d: "Produção interna com avaliação prévia de incertezas." },
              { t: "Relatórios técnicos detalhados", d: "Acompanhamento de desempenho histórico do laboratório." },
            ].map((f) => (
              <li key={f.t} className="flex gap-4 border-t border-white/10 pt-5">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-aqua)] text-xs font-bold text-[var(--color-deep)]">✓</span>
                <div>
                  <div className="font-semibold">{f.t}</div>
                  <div className="text-sm text-white/60">{f.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
        <h2 className="text-balance text-4xl text-[var(--color-deep)] md:text-6xl">
          Inscreva seu laboratório no próximo ciclo.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          As vagas para os ensaios de 2026 estão abertas. Receba o cronograma completo e instruções de participação.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:pep@sabesp.com.br" className="rounded-full bg-[var(--color-deep)] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[var(--color-primary)]">
            Solicitar inscrição
          </a>
          <a href="#programas" className="rounded-full border border-border px-8 py-4 text-sm font-semibold text-[var(--color-deep)] transition hover:bg-secondary">
            Falar com a equipe técnica
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--color-deep)] py-12 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-12">
        <div className="flex items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Sabesp_logo.svg/512px-Sabesp_logo.svg.png"
            alt="Sabesp"
            className="h-8 w-auto brightness-0 invert"
          />
          <span className="text-sm">Centro de Tecnologia de Saneamento Básico</span>
        </div>
        <div className="text-xs uppercase tracking-[0.18em] text-white/40">
          © 2026 · Programa de Ensaios de Proficiência
        </div>
      </div>
    </footer>
  );
}
