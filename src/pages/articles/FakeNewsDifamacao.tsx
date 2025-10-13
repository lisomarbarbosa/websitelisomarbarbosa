import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, AlertTriangle, Scale, Ban } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const FakeNewsDifamacao = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Fake News e Difamação Online: Proteja Sua Reputação | Lisomar Barbosa | Direito Digital e Proteção de Dados</title>
        <meta name="description" content="Notícias falsas e comentários difamatórios podem destruir reputações. Conheça os mecanismos legais para remover conteúdo ofensivo e buscar reparação de danos." />
        <link rel="canonical" href="https://www.lisomarbarbosa.adv.br/blog/fake-news-difamacao" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <meta property="og:site_name" content="Lisomar Barbosa | Direito Digital" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lisomarbarbosa.adv.br/blog/fake-news-difamacao" />
        <meta property="og:image" content="https://www.lisomarbarbosa.adv.br/og-image.jpg" />
        <meta property="og:title" content="Fake News e Difamação Online: Proteja Sua Reputação | Lisomar Barbosa | Direito Digital e Proteção de Dados" />
        <meta property="og:description" content="Notícias falsas e comentários difamatórios podem destruir reputações. Conheça os mecanismos legais para remover conteúdo ofensivo e buscar reparação de danos." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fake News e Difamação Online: Proteja Sua Reputação | Lisomar Barbosa | Direito Digital e Proteção de Dados" />
        <meta name="twitter:description" content="Notícias falsas e comentários difamatórios podem destruir reputações. Conheça os mecanismos legais para remover conteúdo ofensivo e buscar reparação de danos." />
        <meta name="twitter:image" content="https://www.lisomarbarbosa.adv.br/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog">
                <Button variant="ghost" className="mb-6 group">
                  <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-smooth" size={18} />
                  Voltar aos Artigos
                </Button>
              </Link>

              <article className="animate-fade-in">
                <header className="mb-12">
                  <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                    Crimes Digitais
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Fake News e Difamação Online: Como Proteger Sua Reputação
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-8">
                    <span>22 Nov 2024</span>
                    <span>•</span>
                    <span>7 min de leitura</span>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?w=1200&auto=format&fit=crop&q=80" 
                    alt="Fake News e Difamação Online"
                    className="w-full h-[400px] object-cover rounded-lg mb-8"
                  />
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                    Notícias falsas e comentários difamatórios nas redes sociais podem destruir reputações pessoais e profissionais em questão de horas. Conheça os mecanismos legais para remover conteúdo ofensivo e buscar reparação de danos.
                  </p>

                  <Card className="p-6 bg-accent/10 border-accent/20 mb-8">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="text-accent flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-bold mb-2">Aja Rapidamente</h3>
                        <p className="text-sm text-foreground/80">
                          Quanto mais tempo um conteúdo difamatório permanece online, mais danos pode causar. A lei permite medidas urgentes para remoção.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <Ban className="text-primary" size={28} />
                    Diferenças Entre os Crimes
                  </h2>

                  <div className="space-y-6 mb-12">
                    <Card className="p-6 border-primary/20">
                      <h3 className="text-xl font-bold mb-3">Difamação (Art. 139 do CP)</h3>
                      <p className="text-foreground/80 mb-3">
                        Imputar a alguém fato ofensivo à sua reputação, mesmo que seja verdadeiro.
                      </p>
                      <p className="text-sm text-foreground/70 mb-2">
                        <strong>Pena:</strong> Detenção de 3 meses a 1 ano, e multa.
                      </p>
                      <p className="text-sm text-foreground/70">
                        <strong>Exemplo:</strong> "Fulano não paga suas contas" (mesmo que seja verdade, ofende a reputação).
                      </p>
                    </Card>

                    <Card className="p-6 border-primary/20">
                      <h3 className="text-xl font-bold mb-3">Calúnia (Art. 138 do CP)</h3>
                      <p className="text-foreground/80 mb-3">
                        Imputar falsamente a alguém a prática de crime.
                      </p>
                      <p className="text-sm text-foreground/70 mb-2">
                        <strong>Pena:</strong> Detenção de 6 meses a 2 anos, e multa.
                      </p>
                      <p className="text-sm text-foreground/70">
                        <strong>Exemplo:</strong> "Fulano roubou dinheiro da empresa" (acusação falsa de crime).
                      </p>
                    </Card>

                    <Card className="p-6 border-primary/20">
                      <h3 className="text-xl font-bold mb-3">Injúria (Art. 140 do CP)</h3>
                      <p className="text-foreground/80 mb-3">
                        Ofender a dignidade ou decoro de alguém.
                      </p>
                      <p className="text-sm text-foreground/70 mb-2">
                        <strong>Pena:</strong> Detenção de 1 a 6 meses, ou multa.
                      </p>
                      <p className="text-sm text-foreground/70">
                        <strong>Exemplo:</strong> Xingamentos, ofensas pessoais ("idiota", "incompetente", etc.).
                      </p>
                    </Card>
                  </div>

                  <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <Shield className="text-primary" size={28} />
                    Como Agir em Casos de Difamação Online
                  </h2>

                  <ol className="space-y-6 mb-12">
                    <li>
                      <h3 className="text-xl font-bold mb-3">1. Preserve as Evidências</h3>
                      <p className="text-foreground/80 leading-relaxed mb-3">
                        Antes de qualquer coisa, documente o conteúdo:
                      </p>
                      <ul className="space-y-2 text-foreground/80 pl-6">
                        <li className="flex gap-2">• Tire prints completos (com URL, data, hora e perfil do autor)</li>
                        <li className="flex gap-2">• Salve páginas completas em PDF</li>
                        <li className="flex gap-2">• Considere ata notarial (cartório) para maior robustez jurídica</li>
                        <li className="flex gap-2">• Grave vídeos se for conteúdo audiovisual</li>
                      </ul>
                    </li>

                    <li>
                      <h3 className="text-xl font-bold mb-3">2. Notificação Extrajudicial</h3>
                      <p className="text-foreground/80 leading-relaxed mb-3">
                        Envie notificação formal ao autor do conteúdo solicitando:
                      </p>
                      <ul className="space-y-2 text-foreground/80 pl-6">
                        <li className="flex gap-2">• Remoção imediata do conteúdo</li>
                        <li className="flex gap-2">• Retratação pública</li>
                        <li className="flex gap-2">• Identificação de terceiros envolvidos na disseminação</li>
                      </ul>
                      <p className="text-sm text-foreground/70 mt-3">
                        <strong>Dica:</strong> A notificação extrajudicial muitas vezes resolve o problema rapidamente e evita custos judiciais.
                      </p>
                    </li>

                    <li>
                      <h3 className="text-xl font-bold mb-3">3. Solicitação às Plataformas</h3>
                      <p className="text-foreground/80 leading-relaxed mb-3">
                        O Marco Civil da Internet permite solicitar remoção diretamente às plataformas (Facebook, Instagram, Twitter, Google):
                      </p>
                      <ul className="space-y-2 text-foreground/80 pl-6">
                        <li className="flex gap-2">• Use os canais oficiais de denúncia</li>
                        <li className="flex gap-2">• Descreva claramente por que o conteúdo é ilícito</li>
                        <li className="flex gap-2">• Anexe documentos comprobatórios</li>
                      </ul>
                    </li>

                    <li>
                      <h3 className="text-xl font-bold mb-3">4. Medida Judicial Urgente</h3>
                      <p className="text-foreground/80 leading-relaxed mb-3">
                        Se o conteúdo não for removido, procure um advogado para:
                      </p>
                      <ul className="space-y-2 text-foreground/80 pl-6">
                        <li className="flex gap-2">• Obter liminar de remoção imediata</li>
                        <li className="flex gap-2">• Identificar autores anônimos (quebra de sigilo de dados)</li>
                        <li className="flex gap-2">• Bloquear propagação do conteúdo</li>
                      </ul>
                    </li>

                    <li>
                      <h3 className="text-xl font-bold mb-3">5. Ação Criminal e Cível</h3>
                      <p className="text-foreground/80 leading-relaxed mb-3">
                        Após a remoção, você pode buscar:
                      </p>
                      <ul className="space-y-2 text-foreground/80 pl-6">
                        <li className="flex gap-2">• <strong>Criminal:</strong> Punição do autor (detenção e multa)</li>
                        <li className="flex gap-2">• <strong>Cível:</strong> Indenização por danos morais e materiais</li>
                      </ul>
                    </li>
                  </ol>

                  <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <Scale className="text-primary" size={28} />
                    Danos Indenizáveis
                  </h2>

                  <div className="space-y-4 mb-12">
                    <div>
                      <h3 className="text-xl font-bold mb-3">Danos Morais</h3>
                      <p className="text-foreground/80 leading-relaxed mb-2">
                        Compensação pelo sofrimento psicológico, constrangimento, humilhação e abalo à reputação.
                      </p>
                      <p className="text-sm text-foreground/70">
                        <strong>Valores:</strong> Variam de R$ 5 mil a mais de R$ 100 mil, dependendo da gravidade, repercussão e capacidade econômica do ofensor.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">Danos Materiais</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Reembolso de gastos com advogados, perícias, tratamento psicológico e lucros cessantes (para empresas ou profissionais autônomos).
                      </p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <AlertTriangle className="text-primary" size={28} />
                    Conclusão
                  </h2>

                  <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                    A internet é um ambiente poderoso, mas também propício à disseminação de informações falsas e difamatórias. Proteger sua reputação online é um direito fundamental. Agir de forma rápida e estratégica, com o suporte de um advogado especializado em Direito Digital, é crucial para remover conteúdo ofensivo e buscar a devida reparação.
                  </p>

                  <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                    Se você foi vítima de fake news ou difamação online, entre em contato. Estou à disposição para oferecer o suporte jurídico especializado que você precisa para restaurar sua imagem e proteger seus direitos.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FakeNewsDifamacao;
