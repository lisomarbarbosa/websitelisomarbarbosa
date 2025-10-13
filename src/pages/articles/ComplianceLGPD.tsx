import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, FileText, Users, Database } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ComplianceLGPD = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Compliance em LGPD: Checklist Completo para Empresas | Lisomar Barbosa | Direito Digital e Proteção de Dados</title>
        <meta name="description" content="Adequar sua empresa à LGPD não precisa ser complicado. Este checklist abrange desde o mapeamento de dados até a implementação de políticas de privacidade." />
        <link rel="canonical" href="https://www.lisomarbarbosa.adv.br/blog/compliance-lgpd" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <meta property="og:site_name" content="Lisomar Barbosa | Direito Digital" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lisomarbarbosa.adv.br/blog/compliance-lgpd" />
        <meta property="og:image" content="https://www.lisomarbarbosa.adv.br/og-image.jpg" />
        <meta property="og:title" content="Compliance em LGPD: Checklist Completo para Empresas | Lisomar Barbosa | Direito Digital e Proteção de Dados" />
        <meta property="og:description" content="Adequar sua empresa à LGPD não precisa ser complicado. Este checklist abrange desde o mapeamento de dados até a implementação de políticas de privacidade." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Compliance em LGPD: Checklist Completo para Empresas | Lisomar Barbosa | Direito Digital e Proteção de Dados" />
        <meta name="twitter:description" content="Adequar sua empresa à LGPD não precisa ser complicado. Este checklist abrange desde o mapeamento de dados até a implementação de políticas de privacidade." />
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
                    LGPD
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Compliance em LGPD: Checklist Completo para Empresas
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-8">
                    <span>15 Nov 2024</span>
                    <span>•</span>
                    <span>12 min de leitura</span>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80" 
                    alt="Compliance em LGPD para Empresas"
                    className="w-full h-[400px] object-cover rounded-lg mb-8"
                  />
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                    Adequar sua empresa à LGPD não precisa ser complicado. Este guia completo abrange desde o mapeamento de dados até a implementação de políticas de privacidade, garantindo conformidade legal e evitando multas milionárias.
                  </p>

                  <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <Database className="text-primary" size={28} />
                    Fase 1: Mapeamento de Dados
                  </h2>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">1.1 Inventário de Dados Pessoais</h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span>Liste todos os dados pessoais coletados (nome, CPF, e-mail, telefone, endereço, dados bancários, etc.)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span>Identifique dados sensíveis (origem racial/étnica, convicções religiosas, opiniões políticas, dados de saúde, biométricos, genéticos)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span>Mapeie dados de crianças e adolescentes (requer atenção especial)</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">1.2 Fluxo de Dados</h3>
                    <p className="text-foreground/80 mb-4">Para cada tipo de dado, documente:</p>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span><strong>Origem:</strong> Como e onde os dados são coletados (formulários web, aplicativos, atendimento presencial)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span><strong>Finalidade:</strong> Por que os dados são coletados (prestação de serviço, marketing, contabilidade)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span><strong>Armazenamento:</strong> Onde os dados ficam guardados (servidores próprios, nuvem, terceiros)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span><strong>Compartilhamento:</strong> Com quem os dados são compartilhados (fornecedores, parceiros, órgãos públicos)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span><strong>Tempo de retenção:</strong> Por quanto tempo os dados são mantidos</span>
                      </li>
                    </ul>
                  </Card>

                  <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <FileText className="text-primary" size={28} />
                    Fase 2: Base Legal
                  </h2>

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Para cada tratamento de dados, identifique a base legal aplicável (Art. 7º da LGPD):
                  </p>

                  <div className="space-y-4 mb-12">
                    <Card className="p-4 border-border/30">
                      <h4 className="font-bold mb-2">✓ Consentimento</h4>
                      <p className="text-sm text-foreground/80">Quando o titular autoriza expressamente (ex: newsletters, marketing)</p>
                    </Card>
                    <Card className="p-4 border-border/30">
                      <h4 className="font-bold mb-2">✓ Cumprimento de Obrigação Legal</h4>
                      <p className="text-sm text-foreground/80">Exigências legais ou regulatórias (ex: emissão de nota fiscal)</p>
                    </Card>
                    <Card className="p-4 border-border/30">
                      <h4 className="font-bold mb-2">✓ Execução de Contrato</h4>
                      <p className="text-sm text-foreground/80">Necessário para prestação do serviço contratado</p>
                    </Card>
                    <Card className="p-4 border-border/30">
                      <h4 className="font-bold mb-2">✓ Legítimo Interesse</h4>
                      <p className="text-sm text-foreground/80">Interesses legítimos da empresa (com teste de proporcionalidade)</p>
                    </Card>
                    <Card className="p-4 border-border/30">
                      <h4 className="font-bold mb-2">✓ Proteção da Vida</h4>
                      <p className="text-sm text-foreground/80">Situações emergenciais de proteção à vida ou saúde</p>
                    </Card>
                    <Card className="p-4 border-border/30">
                      <h4 className="font-bold mb-2">✓ Tutela da Saúde</h4>
                      <p className="text-sm text-foreground/80">Procedimentos por profissionais de saúde</p>
                    </Card>
                  </div>

                  <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                    <Users className="text-primary" size={28} />
                    Fase 3: Governança e Responsabilidades
                  </h2>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">3.1 Nomeação do DPO</h3>
                    <p className="text-foreground/80 mb-4">
                      Designar um Encarregado de Proteção de Dados (DPO - Data Protection Officer):
                    </p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">• Pode ser funcionário ou terceiro contratado</li>
                      <li className="flex gap-2">• Deve ter conhecimento técnico e jurídico</li>
                      <li className="flex gap-2">• Canal de comunicação direto com titulares e ANPD</li>
                      <li className="flex gap-2">• Divulgue publicamente identidade e contato do DPO</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">3.2 Comitê de Privacidade</h3>
                    <p className="text-foreground/80 mb-4">
                      Crie um comitê multidisciplinar com representantes de:
                    </p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">• TI / Segurança da Informação</li>
                      <li className="flex gap-2">• Jurídico</li>
                      <li className="flex gap-2">• RH</li>
                      <li className="flex gap-2">• Marketing</li>
                      <li className="flex gap-2">• Áreas que lidam diretamente com dados</li>
                    </ul>
                  </Card>

                  <h2 className="text-3xl font-bold mt-12 mb-6">Fase 4: Políticas e Documentos</h2>

                  <div className="space-y-6 mb-12">
                    <Card className="p-6 border-border/30">
                      <h3 className="text-lg font-bold mb-3">Política de Privacidade</h3>
                      <p className="text-sm text-foreground/80 mb-3">
                        Documento público explicando como a empresa coleta, usa e protege dados pessoais.
                      </p>
                      <p className="text-xs text-foreground/70">
                        (Ex: no site, no aplicativo, em contratos)
                      </p>
                    </Card>

                    <Card className="p-6 border-border/30">
                      <h3 className="text-lg font-bold mb-3">Termos de Uso</h3>
                      <p className="text-sm text-foreground/80 mb-3">
                        Regras de utilização dos serviços/produtos da empresa e responsabilidades dos usuários.
                      </p>
                      <p className="text-xs text-foreground/70">
                        (Ex: no site, no aplicativo)
                      </p>
                    </Card>

                    <Card className="p-6 border-border/30">
                      <h3 className="text-lg font-bold mb-3">Política de Segurança da Informação</h3>
                      <p className="text-sm text-foreground/80 mb-3">
                        Documento interno detalhando as medidas técnicas e administrativas de segurança.
                      </p>
                      <p className="text-xs text-foreground/70">
                        (Ex: acesso a sistemas, uso de senhas, backup)
                      </p>
                    </Card>

                    <Card className="p-6 border-border/30">
                      <h3 className="text-lg font-bold mb-3">Contratos com Terceiros</h3>
                      <p className="text-sm text-foreground/80 mb-3">
                        Revise e adéque contratos com fornecedores e parceiros que tratam dados pessoais.
                      </p>
                      <p className="text-xs text-foreground/70">
                        (Ex: cláusulas de confidencialidade, responsabilidade, segurança)
                      </p>
                    </Card>
                  </div>

                  <h2 className="text-3xl font-bold mt-12 mb-6">Fase 5: Treinamento e Conscientização</h2>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">5.1 Treinamento de Colaboradores</h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span>Realize treinamentos periódicos sobre LGPD e segurança da informação para todos os funcionários.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span>Crie materiais educativos e guias de boas práticas.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span>Fomente uma cultura de privacidade e proteção de dados na empresa.</span>
                      </li>
                    </ul>
                  </Card>

                  <h2 className="text-3xl font-bold mt-12 mb-6">Fase 6: Monitoramento e Auditoria</h2>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">6.1 Auditorias Internas e Externas</h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span>Realize auditorias periódicas para verificar a conformidade com a LGPD.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span>Contrate auditorias externas independentes para validação.</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">6.2 Plano de Resposta a Incidentes</h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span>Tenha um plano claro para agir em caso de vazamento ou incidente de segurança.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span>Defina responsabilidades, comunicação com ANPD e titulares.</span>
                      </li>
                    </ul>
                  </Card>

                  <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    A implementação de um programa de compliance em LGPD é um processo contínuo e fundamental para a segurança jurídica e reputacional da sua empresa. Não se trata apenas de evitar multas, mas de construir uma relação de confiança com seus clientes e colaboradores, demonstrando o compromisso com a privacidade e a proteção de dados. Invista na conformidade e proteja o futuro do seu negócio.
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

export default ComplianceLGPD;
