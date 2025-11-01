import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Globe, Shield, FileText, TrendingUp, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import featureAi from "@/assets/feature-ai.jpg";
import featureLanguage from "@/assets/feature-language.jpg";
import featureBank from "@/assets/feature-bank.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50 shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">DPR AI</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
            <Button variant="hero" onClick={() => navigate("/create-dpr")}>Get Started <ArrowRight className="h-4 w-4" /></Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-32 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="inline-block">
                <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                  Powered by AI
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Create Professional{" "}
                <span className="bg-gradient-secondary bg-clip-text text-transparent">
                  Project Reports
                </span>{" "}
                in Minutes
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                AI-powered tool designed for MSME entrepreneurs to prepare bank-ready Detailed Project Reports. Get funding faster with intelligent suggestions and bilingual support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-base" onClick={() => navigate("/create-dpr")}>
                  Start Creating DPR <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-base">
                  <Globe className="h-5 w-5" /> తెలుగు / English
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">DPRs Created</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">85%</p>
                  <p className="text-sm text-muted-foreground">Approval Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">2 Days</p>
                  <p className="text-sm text-muted-foreground">Avg. Time</p>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="rounded-2xl overflow-hidden shadow-strong">
                <img src={heroImage} alt="MSME entrepreneurs using DPR AI tool" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-medium border hidden md:block">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-8 w-8 text-secondary" />
                  <div>
                    <p className="font-semibold">Bank Ready</p>
                    <p className="text-sm text-muted-foreground">100% Compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Powerful Features for Your Success</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create professional, bank-ready project reports with AI assistance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img src={featureAi} alt="AI-powered automation" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-secondary" />
                  AI-Powered Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Smart suggestions for financial data, cost structures, and government schemes. Our AI learns from successful DPRs to guide you better.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img src={featureLanguage} alt="Bilingual support" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-accent" />
                  Bilingual Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Work in your preferred language - English or Telugu. Generate reports in both languages for wider accessibility and reach.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img src={featureBank} alt="Bank integration" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Bank-Ready Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional templates compliant with bank requirements. Export in multiple formats ready for submission to financial institutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Simple 4-Step Process</h2>
            <p className="text-lg text-muted-foreground">From idea to bank-ready report in minutes</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Enter Business Details", desc: "Basic information about your MSME venture" },
              { step: "02", title: "AI Suggestions", desc: "Get intelligent recommendations for your project" },
              { step: "03", title: "Financial Planning", desc: "Auto-populate cost structures and projections" },
              { step: "04", title: "Export & Submit", desc: "Download bank-ready report in your format" }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-medium">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose DPR AI?</h2>
              <div className="space-y-4">
                {[
                  "Save 90% time compared to traditional methods",
                  "85% higher approval rate from banks",
                  "No consultant fees - DIY with AI guidance",
                  "Integrated with AP MSME ONE Portal",
                  "Secure and compliant with data protection",
                  "Continuous learning from successful projects"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <Button variant="hero" size="lg" onClick={() => navigate("/create-dpr")}>
                Start Your DPR Now <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Card className="shadow-strong p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-8 w-8 text-secondary" />
                    <div>
                      <p className="font-semibold text-lg">Success Rate</p>
                      <p className="text-3xl font-bold text-secondary">85%</p>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-secondary w-[85%]"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    8,500 out of 10,000 DPRs created with our tool received bank approval
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Unlock Your MSME Potential?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of entrepreneurs who have successfully secured funding with AI-powered DPRs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-base" onClick={() => navigate("/create-dpr")}>
              Create Your First DPR <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-base">
              Watch Demo Video
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">DPR AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering MSME entrepreneurs with AI-powered project report preparation tools.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a></li>
                <li><a href="#benefits" className="hover:text-foreground transition-colors">Benefits</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Data Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 DPR AI. Integrated with AP MSME ONE Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
