import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, AlertTriangle, FileText, Phone } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CrimesCiberneticos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Crimes Cibernéticos: Proteja-se no Ambiente Digital | Lisomar Barbosa | Direito Digital e Proteção de Dados</title>
        <meta name="description" content="Entenda os principais crimes cibernéticos, como fraude online, roubo de dados e ataques de phishing, e saiba como se proteger e buscar justiça." />
        <link rel="canonical" href="https://www.lisomarbarbosa.adv.br/blog/crimes-ciberneticos" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <meta property="og:site_name" content="Lisomar Barbosa | Direito Digital" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lisomarbarbosa.adv.br/blog/crimes-ciberneticos" />
        <meta property="og:image" content="https://www.lisomarbarbosa.adv.br/og-image.jpg" />
        <meta property="og:title" content="Crimes Cibernéticos: Proteja-se no Ambiente Digital | Lisomar Barbosa | Direito Digital e Proteção de Dados" />
        <meta property="og:description" content="Entenda os principais crimes cibernéticos, como fraude online, roubo de dados e ataques de phishing, e saiba como se proteger e buscar justiça." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crimes Cibernéticos: Proteja-se no Ambiente Digital | Lisomar Barbosa | Direito Digital e Proteção de Dados" />
        <meta name="twitter:description" content="Entenda os principais crimes cibernéticos, como fraude online, roubo de dados e ataques de phishing, e saiba como se proteger e buscar justiça." />
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
                    Crimes Cibernéticos: Proteja-se no Ambiente Digital
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-8">
                    <span>20 Out 2024</span>
                    <span>•</span>
                    <span>10 min de leitura</span>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop&q=80" 
                    alt="Crimes Cibernéticos e Extorsão Online"
                    className="w-full h-[400px] object-cover rounded-lg mb-8"
                  />
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                    Com a crescente digitalização da vida, os crimes cibernéticos se tornaram uma ameaça constante. Fraudes online, roubo de dados, ataques de phishing e extorsão são apenas alguns exemplos. É fundamental entender como esses crimes funcionam para se proteger e saber como agir caso seja vítima.
                  </p>

                  <Card className="p-6 bg-accent/10 border-accent/20 mb-8">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="text-accent flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-bold mb-2">Atenção: Tempo é Essencial</h3>
                        <p className="text-sm text-foreground/80">
                          Em casos de extorsão digital, cada minuto conta. Não pague resgates sem consultar um advogado especializado e registre um boletim de ocorrência imediatamente.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <Shield className="text-primary" size={28} />
                    Tipos Comuns de Crimes Cibernéticos
                  </h2>

                  <div className="space-y-6 mb-12">
                    <div>
                      <h3 className="text-xl font-bold mb-3">1. Phishing</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Tentativas de obter informações confidenciais (senhas, dados bancários) por meio de e-mails, mensagens ou sites falsos que se passam por entidades legítimas.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">2. Malware</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Softwares maliciosos (vírus, ransomware, spyware) que infectam sistemas para roubar dados, danificar arquivos ou controlar o dispositivo da vítima.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">3. Fraudes Online</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Esquemas para enganar usuários e obter dinheiro ou bens, como falsas promoções, leilões fraudulentos ou golpes de investimento.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">4. Roubo de Identidade</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Uso indevido de informações pessoais para cometer fraudes, abrir contas ou realizar compras em nome da vítima.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">5. Cyberbullying e Difamação</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Assédio, ameaças ou disseminação de informações falsas e prejudiciais online.
                      </p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <FileText className="text-primary" size={28} />
                    Como se Proteger?
                  </h2>

                  <ol className="space-y-4 mb-12">
                    <li className="flex gap-4">
                      <span className="font-bold text-primary">1.</span>
                      <div>
                        <strong>Senhas Fortes:</strong> Use senhas complexas e únicas para cada serviço, e ative a autenticação de dois fatores sempre que possível.
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-primary">2.</span>
                      <div>
                        <strong>Software Atualizado:</strong> Mantenha seu sistema operacional, navegadores e antivírus sempre atualizados.
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-primary">3.</span>
                      <div>
                        <strong>Cuidado com Links e Anexos:</strong> Desconfie de e-mails e mensagens suspeitas, evite clicar em links desconhecidos ou baixar anexos de remetentes não confiáveis.
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-primary">4.</span>
                      <div>
                        <strong>Backup de Dados:</strong> Faça backups regulares de seus arquivos importantes para evitar perdas em caso de ataques de ransomware ou falhas de sistema.
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-primary">5.</span>
                      <div>
                        <strong>Monitore suas Contas:</strong> Verifique regularmente extratos bancários e atividades em suas contas online para identificar qualquer transação suspeita.
                      </div>
                    </li>
                  </ol>

                  <h2 className="text-3xl font-bold mt-12 mb-6">Fui Vítima de um Crime Cibernético, e Agora?</h2>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Se você foi vítima de um crime cibernético, é crucial agir rapidamente:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                    <li>
                      <strong>Registre um Boletim de Ocorrência:</strong> Procure a delegacia de polícia mais próxima ou faça um BO online, reunindo todas as provas possíveis (prints, e-mails, conversas).
                    </li>
                    <li>
                      <strong>Comunique as Instituições:</strong> Informe seu banco, operadora de cartão de crédito ou a plataforma onde o crime ocorreu.
                    </li>
                    <li>
                      <strong>Busque Ajuda Especializada:</strong> Um advogado especializado em direito digital pode orientá-lo sobre os próximos passos legais, como a remoção de conteúdo indevido ou a busca por indenização.
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    A segurança no ambiente digital é uma responsabilidade compartilhada. Ao adotar boas práticas de cibersegurança e estar ciente dos riscos, você pode reduzir significativamente as chances de ser vítima de crimes cibernéticos. Em caso de dúvidas ou necessidade de assistência jurídica, não hesite em procurar um especialista.
                  </p>
                </div>

                <div className="mt-16 p-8 rounded-2xl gradient-cyber border border-primary/20 text-center">
                  <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda com Crimes Cibernéticos?</h3>
                  <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                    Nossa equipe especializada em direito digital está pronta para oferecer suporte e orientação.
                  </p>
                  <Link to="/#contato">
                    <Button size="lg" className="bg-gradient-accent text-background font-semibold shadow-cyber">
                      Fale Conosco
                    </Button>
                  </Link>
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

export default CrimesCiberneticos;
