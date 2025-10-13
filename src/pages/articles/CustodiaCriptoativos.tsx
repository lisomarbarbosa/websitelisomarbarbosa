import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Wallet, ShieldCheck, Lock, Lightbulb } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CustodiaCriptoativos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Custódia de Criptoativos: Segurança e Aspectos Legais | Lisomar Barbosa | Direito Digital e Proteção de Dados</title>
        <meta name="description" content="Guia completo sobre custódia segura de criptoativos. Proteja suas criptomoedas com as melhores práticas e aspectos legais no Brasil." />
        <link rel="canonical" href="https://www.lisomarbarbosa.adv.br/blog/custodia-criptoativos" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <meta property="og:site_name" content="Lisomar Barbosa | Direito Digital" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lisomarbarbosa.adv.br/blog/custodia-criptoativos" />
        <meta property="og:image" content="https://www.lisomarbarbosa.adv.br/og-image.jpg" />
        <meta property="og:title" content="Custódia de Criptoativos: Segurança e Aspectos Legais | Lisomar Barbosa | Direito Digital e Proteção de Dados" />
        <meta property="og:description" content="Guia completo sobre custódia segura de criptoativos. Proteja suas criptomoedas com as melhores práticas e aspectos legais no Brasil." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custódia de Criptoativos: Segurança e Aspectos Legais | Lisomar Barbosa | Direito Digital e Proteção de Dados" />
        <meta name="twitter:description" content="Guia completo sobre custódia segura de criptoativos. Proteja suas criptomoedas com as melhores práticas e aspectos legais no Brasil." />
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
                    Criptoativos
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Custódia Segura de Criptoativos: Guia Completo para Investidores
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-8">
                    <span>10 Dez 2024</span>
                    <span>•</span>
                    <span>10 min de leitura</span>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop&q=80" 
                    alt="Custódia Segura de Criptoativos"
                    className="w-full h-[400px] object-cover rounded-lg mb-8"
                  />
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                    Proteger suas criptomoedas vai muito além de senhas fortes. A custódia segura de criptoativos é fundamental para investidores. Conheça as melhores práticas, os tipos de carteiras e os aspectos legais no Brasil para garantir a segurança dos seus ativos digitais.
                  </p>

                  <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <Wallet className="text-primary" size={28} />
                    O Que é Custódia de Criptoativos?
                  </h2>

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    A custódia de criptoativos refere-se à forma como você armazena e protege suas chaves privadas, que são essenciais para acessar e movimentar suas moedas digitais. Perder o acesso às suas chaves privadas significa perder seus criptoativos permanentemente.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Tipos de Custódia: Hot Wallets vs. Cold Wallets</h3>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h4 className="text-xl font-bold mb-4">Hot Wallets (Carteiras Quentes)</h4>
                    <p className="text-foreground/80 mb-4">
                      Conectadas à internet, oferecem facilidade de acesso, mas são mais vulneráveis a ataques cibernéticos.
                    </p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">• <strong>Exemplos:</strong> Exchanges (Binance, Coinbase), carteiras de software (MetaMask, Trust Wallet).</li>
                      <li className="flex gap-2">• <strong>Vantagens:</strong> Conveniência para transações rápidas.</li>
                      <li className="flex gap-2">• <strong>Desvantagens:</strong> Maior risco de hacks e roubos.</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h4 className="text-xl font-bold mb-4">Cold Wallets (Carteiras Frias)</h4>
                    <p className="text-foreground/80 mb-4">
                      Desconectadas da internet, oferecem maior segurança, ideais para armazenamento de longo prazo.
                    </p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">• <strong>Exemplos:</strong> Hardware wallets (Ledger, Trezor), paper wallets.</li>
                      <li className="flex gap-2">• <strong>Vantagens:</strong> Alta segurança contra ataques online.</li>
                      <li className="flex gap-2">• <strong>Desvantagens:</strong> Menos convenientes para uso diário.</li>
                    </ul>
                  </Card>

                  <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <ShieldCheck className="text-primary" size={28} />
                    Melhores Práticas para Custódia Segura
                  </h2>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">1. Use Hardware Wallets</h3>
                    <p className="text-foreground/80 mb-4">
                      Consideradas a opção mais segura para a maioria dos investidores. Armazenam suas chaves privadas offline.
                    </p>
                  </Card>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">2. Mantenha Sua Seed Phrase Segura</h3>
                    <p className="text-foreground/80 mb-4">
                      A seed phrase (ou frase de recuperação) é a chave mestra para suas criptomoedas. Armazene-a offline, em local seguro e nunca compartilhe com ninguém.
                    </p>
                  </Card>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">3. Ative a Autenticação de Dois Fatores (2FA)</h3>
                    <p className="text-foreground/80 mb-4">
                      Sempre ative o 2FA em exchanges e carteiras de software para uma camada extra de segurança.
                    </p>
                  </Card>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">4. Diversifique o Armazenamento</h3>
                    <p className="text-foreground/80 mb-4">
                      Não coloque todos os seus ativos em um único lugar. Distribua entre diferentes tipos de custódia (ex: parte em hardware wallet, parte em exchange para trading).
                    </p>
                  </Card>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">5. Cuidado com Phishing e Scams</h3>
                    <p className="text-foreground/80 mb-4">
                      Verifique sempre a URL dos sites, desconfie de e-mails e mensagens suspeitas que pedem suas chaves privadas ou seed phrase.
                    </p>
                  </Card>

                  <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <Lock className="text-primary" size={28} />
                    Aspectos Legais da Custódia de Criptoativos no Brasil
                  </h2>

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    A regulamentação de criptoativos no Brasil está em evolução. É crucial entender suas responsabilidades e direitos:
                  </p>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">Declaração de Imposto de Renda</h3>
                    <p className="text-foreground/80 mb-4">
                      Criptoativos devem ser declarados à Receita Federal. Fique atento às regras de ganho de capital e isenções.
                    </p>
                  </Card>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">Herança e Sucessão</h3>
                    <p className="text-foreground/80 mb-4">
                      Planeje a sucessão de seus criptoativos. Sem as chaves privadas, seus herdeiros não terão acesso. Consulte um advogado para um plano de sucessão digital.
                    </p>
                  </Card>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">Fraudes e Golpes</h3>
                    <p className="text-foreground/80 mb-4">
                      Em caso de golpes ou roubos, a ação legal é possível, mas a recuperação dos ativos pode ser complexa. A prevenção é sempre a melhor estratégia.
                    </p>
                  </Card>

                  <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <Lightbulb className="text-primary" size={28} />
                    Conclusão
                  </h2>

                  <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                    A custódia segura de criptoativos é um pilar fundamental para qualquer investidor no mercado digital. Ao adotar as melhores práticas de segurança e entender os aspectos legais, você protege seu patrimônio e garante tranquilidade em suas operações. Lembre-se que a responsabilidade pela segurança de seus ativos digitais é primariamente sua.
                  </p>

                  <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                    Para dúvidas sobre a custódia de seus criptoativos ou para um planejamento jurídico completo, entre em contato. Estou à disposição para oferecer o suporte especializado que você precisa.
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

export default CustodiaCriptoativos;
