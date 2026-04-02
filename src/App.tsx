import { 
  Shield, 
  Rocket, 
  Bot, 
  Coins, 
  Lock, 
  Terminal, 
  Globe, 
  Key, 
  Route, 
  Bitcoin, 
  Check, 
  ArrowRight, 
  Play, 
  ExternalLink,
  ShieldAlert,
  Trash2,
  Wallet,
  FolderLock,
  Search,
  Microscope,
  BookOpen,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* Header */}
      <header className="w-full top-0 sticky z-50 bg-background/80 backdrop-blur-md border-b border-white/10 h-20">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
          <div className="text-2xl font-bold text-primary-container tracking-tighter font-headline flex items-center gap-2">
            <Shield className="w-8 h-8 fill-primary-container/20" />
            AgentGuard
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-primary-container border-b-2 border-primary-container pb-1 font-headline tracking-tight" href="#">Docs</a>
            <a className="text-slate-400 font-medium hover:text-primary-container transition-colors duration-200 font-headline tracking-tight" href="#">Github</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold active:scale-95 transition-transform hover:brightness-110 hidden sm:block">
              Launch
            </button>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-4"
          >
            <a className="text-primary-container font-headline" href="#">Docs</a>
            <a className="text-slate-400 font-headline" href="#">Github</a>
            <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold w-full">
              Launch
            </button>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden pt-12">
          <div className="absolute inset-0 tactical-grid opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container opacity-[0.03] blur-[120px] rounded-full"></div>
          
          <motion.div 
            className="max-w-7xl mx-auto px-6 relative z-10 text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/30 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="text-xs font-mono text-primary-container uppercase tracking-widest">Active Protection Layer v2.4</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              让每一个普通用户，<br/>
              <span className="text-primary-container">安全、无痛、顺畅地驾驭</span>超级 Agent
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
              AgentGuard 是你的 AI 时代贴身防弹衣 + 智能变速箱<br/>自动保护隐私、控制风险、压缩成本，让 Agent 放心替你做一切
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,255,156,0.3)] transition-all">
                🚀 立即接入
              </button>
              <button className="bg-surface-container-highest border border-outline-variant text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-surface-bright transition-all">
                <Play className="w-5 h-5 fill-white" /> 查看演示
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Partners Section */}
        <section className="py-12 bg-surface border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-on-surface-variant text-sm font-mono tracking-widest uppercase mb-8">Trusted by Builders & Ecosystem</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
              {[
                { icon: Rocket, name: "Starbase" },
                { icon: Bot, name: "NexusAI" },
                { icon: Coins, name: "ChainSafe" },
                { icon: Shield, name: "GuardRail" },
                { icon: Terminal, name: "ForgeOS" }
              ].map((partner, i) => (
                <div key={i} className="flex items-center gap-2 text-white font-headline font-bold text-xl">
                  <partner.icon className="w-6 h-6 text-primary-container" /> {partner.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem/Risk Section */}
        <section className="py-16 bg-surface-container-lowest relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="font-headline text-4xl font-bold text-white mb-6">Why do you need AgentGuard?</h2>
                <div className="space-y-4">
                  {[
                    { 
                      icon: ShieldAlert, 
                      title: "Data Sovereignty Leakage Risks", 
                      desc: "API Key leaks and personal identity information captured by malicious Skills leave your private data exposed." 
                    },
                    { 
                      icon: Trash2, 
                      title: "Malicious Command Execution", 
                      desc: "Agents accidentally executing \"rm -rf\" or malicious wallet clearing? AgentGuard is the only security firewall." 
                    },
                    { 
                      icon: Wallet, 
                      title: "High Token Costs", 
                      desc: "Bloated context and garbage data are eating your budget; you need intelligent compression technology." 
                    }
                  ].map((risk, i) => (
                    <div key={i} className="p-5 rounded-xl bg-surface-container border-l-4 border-secondary-container">
                      <div className="flex items-center gap-3 mb-2 text-secondary-container">
                        <risk.icon className="w-5 h-5" />
                        <span className="font-bold">{risk.title}</span>
                      </div>
                      <p className="text-on-surface-variant text-sm">{risk.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="glass-panel p-8 rounded-2xl border-secondary-container/20 overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-mono text-secondary-container">LIVE_THREAT_ANALYSIS</span>
                    <span className="flex h-2 w-2 rounded-full bg-secondary-container animate-ping"></span>
                  </div>
                  <div className="space-y-8">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-5xl font-bold font-mono text-white">36%</div>
                        <div className="text-sm text-on-surface-variant mt-2">Skills have potential security vulnerabilities</div>
                      </div>
                      <div className="h-2 w-1/2 bg-surface-container-highest rounded-full">
                        <motion.div 
                          className="h-full bg-secondary-container"
                          initial={{ width: 0 }}
                          whileInView={{ width: "36%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-5xl font-bold font-mono text-white">~20%</div>
                        <div className="text-sm text-on-surface-variant mt-2">Contain hidden malicious behaviors</div>
                      </div>
                      <div className="h-2 w-1/2 bg-surface-container-highest rounded-full">
                        <motion.div 
                          className="h-full bg-secondary-container"
                          initial={{ width: 0 }}
                          whileInView={{ width: "20%" }}
                          transition={{ duration: 1, delay: 0.7 }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-headline text-3xl font-bold text-white mb-10 text-center">Multi-Scenario Security Empowerment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: FolderLock, 
                  title: "File Management", 
                  desc: "No-risk execution against path traversal and malicious script injection.",
                  tag: "100% Sandbox Isolation"
                },
                { 
                  icon: Search, 
                  title: "Web Scraping", 
                  desc: "90% cost reduction through intelligent content stripping and semantic deduplication.",
                  tag: "Token Efficiency x10"
                },
                { 
                  icon: Wallet, 
                  title: "Wallet Interaction", 
                  desc: "Full protection for private keys and multi-sig operations via hardware-level audits.",
                  tag: "Zero-Knowledge Guard"
                }
              ].map((useCase, i) => (
                <motion.div 
                  key={i} 
                  className="p-6 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary-container/40 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <useCase.icon className="text-primary-container w-10 h-10 mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2">{useCase.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-4">{useCase.desc}</p>
                  <div className="text-xs font-mono text-primary-container bg-primary-container/10 px-2 py-1 rounded inline-block">{useCase.tag}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Engines */}
        <section className="py-16 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-headline text-4xl font-bold text-white mb-12 text-center">AgentGuard Core Engines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. Security Firewall */}
              <motion.div 
                className="bg-surface-container p-8 rounded-2xl group hover:border-primary-container/30 transition-all border border-outline-variant/10"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Shield className="text-primary-container w-10 h-10 fill-primary-container/20" />
                  <div className="bg-primary-container/10 px-3 py-1 rounded text-[10px] font-mono text-primary-container">CORE_01</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Security Firewall</h3>
                <div className="text-primary-container text-sm font-bold mb-4">The absolute shield for C-end assets</div>
                <p className="text-secondary-container text-xs italic mb-4">"If I let an Agent help me clean folders or send emails, will it upload my private keys to the cloud? Will it delete my local files?"</p>
                <p className="text-on-surface-variant text-sm mb-6">Permission interception (exec/browser/wallet) and sensitive data masking ([REDACTED]). Your Agent can grow wildly, but AgentGuard ensures it never bites its owner.</p>
                <div className="flex gap-3">
                  {[
                    { icon: Terminal, label: "EXEC_SHIELD" },
                    { icon: Globe, label: "BROWSER_ISO" },
                    { icon: Key, label: "SENSITIVE_MASK" }
                  ].map((tool, i) => (
                    <div key={i} className="flex-1 p-3 bg-surface-container-low rounded-xl text-center border border-outline-variant/10">
                      <tool.icon className="text-on-surface-variant w-5 h-5 mx-auto" />
                      <div className="text-[10px] font-mono text-primary-container mt-1">{tool.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 2. Token Compressor */}
              <motion.div 
                className="bg-surface-container p-8 rounded-2xl group hover:border-primary-container/30 transition-all border border-outline-variant/10"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Coins className="text-primary-container w-10 h-10 fill-primary-container/20" />
                  <div className="bg-primary-container/10 px-3 py-1 rounded text-[10px] font-mono text-primary-container">CORE_02</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Token Compressor</h3>
                <div className="text-primary-container text-sm font-bold mb-4">"Dehydrator" and "JSON Washer"</div>
                <p className="text-secondary-container text-xs italic mb-4">"I just asked an Agent to check Twitter, why did OpenAI charge me $2 in API fees?"</p>
                <p className="text-on-surface-variant text-sm mb-6">Local data cleaning (JSON/Base64) and dynamic RAG truncation. Compress every $10 AI task into 10 cents.</p>
                <div className="font-mono text-xs p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/20">
                  <div className="flex justify-between text-secondary-container mb-2"><span>Original:</span><span>2,441 tkn</span></div>
                  <div className="flex justify-between text-primary-container font-bold"><span>Optimized:</span><span>890 tkn</span></div>
                  <div className="mt-2 h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary-container"
                      initial={{ width: 0 }}
                      whileInView={{ width: "36%" }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Smart Router */}
              <motion.div 
                className="bg-surface-container p-8 rounded-2xl group hover:border-primary-container/30 transition-all border border-outline-variant/10"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Route className="text-primary-container w-10 h-10" />
                  <div className="bg-primary-container/10 px-3 py-1 rounded text-[10px] font-mono text-primary-container">CORE_03</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Smart Router</h3>
                <div className="text-primary-container text-sm font-bold mb-4">The automatic gearbox for AI</div>
                <p className="text-secondary-container text-xs italic mb-4">"I don't know when to use free models and when to use top-tier expensive ones."</p>
                <p className="text-on-surface-variant text-sm mb-6">Intent-based automatic routing to local or cheaper models. Experience high-end intelligence at tractor costs.</p>
                <div className="flex items-center gap-4 bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10">
                  <div className="flex-1 flex flex-col items-center opacity-40">
                    <span className="text-[10px] font-mono">GPT-4o</span>
                    <div className="h-1 w-full bg-white/20 mt-1"></div>
                  </div>
                  <ArrowRight className="text-primary-container animate-pulse w-5 h-5" />
                  <div className="flex-1 flex flex-col items-center">
                    <span className="text-[10px] font-mono text-primary-container">Local Llama3</span>
                    <div className="h-1 w-full bg-primary-container mt-1"></div>
                  </div>
                  <span className="text-[10px] font-mono text-white bg-primary-container/20 px-2 py-0.5 rounded">INTENT_AUTO</span>
                </div>
              </motion.div>

              {/* 4. Crypto Guardian */}
              <motion.div 
                className="bg-surface-container p-8 rounded-2xl group hover:border-primary-container/30 transition-all border border-outline-variant/10"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Bitcoin className="text-primary-container w-10 h-10" />
                  <div className="bg-primary-container/10 px-3 py-1 rounded text-[10px] font-mono text-primary-container">CORE_04</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Crypto Guardian</h3>
                <div className="text-primary-container text-sm font-bold mb-4">Security for Agent-led digital asset usage</div>
                <p className="text-secondary-container text-xs italic mb-4">"Can an Agent manage my wallet? How can safety be guaranteed?"</p>
                <p className="text-on-surface-variant text-sm mb-6">Wallet whitelisting, pre-sign confirmation, and risk simulation. Ensures every transaction reflects your subjective will via hardware-level audits and ZK proofs.</p>
                <ul className="space-y-2">
                  {["Wallet Whitelist", "Pre-sign Confirmation", "Real-time Risk Simulation"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-on-surface-variant">
                      <CheckCircle2 className="w-3 h-3 text-primary-container" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section className="py-24 bg-surface relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">GoPlus AI Ecosystem</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Building comprehensive AI security infrastructure, from core auditing to application-layer protection</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: "AgentGuard",
                  subtitle: "AI-Era Personal Bodyguard + Smart Gearbox",
                  desc: "Providing real-time traffic filtering, permission control, and cost optimization for AI Agents.",
                  tags: ["Security Firewall", "Token Compressor", "Smart Router"]
                },
                {
                  icon: CheckCircle2,
                  title: "SafuSkill & Launchpad",
                  subtitle: "Security-First Marketplace for AI Agent Skills",
                  desc: "The first security-focused AI skill market, ensuring every imported plugin undergoes rigorous pre-runtime auditing.",
                  tags: ["Automated Scanning", "Runtime Protection", "Security-to-Earn"]
                },
                {
                  icon: Microscope,
                  title: "DeepScan",
                  subtitle: "AI-Driven Professional Token Auditing Engine",
                  desc: "Combining LLMs with formal verification to detect deep logic flaws in complex smart contracts within seconds.",
                  tags: ["Multi-engine LLM+Graph-IR", "Logic Flaw Detection", "<10min Audit"]
                },
                {
                  icon: BookOpen,
                  title: "GoPlus Skill Library",
                  subtitle: "Standardized Capability Modules",
                  desc: "Standardized modules for common AI Agent tasks with built-in security checks.",
                  isLibrary: true
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="glass-panel p-8 rounded-3xl hover:border-primary-container/30 transition-all group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <item.icon className="text-primary-container w-8 h-8" />
                    <h3 className="text-2xl font-bold text-white font-headline">{item.title}</h3>
                  </div>
                  <div className="text-primary-container text-sm font-bold mb-4 tracking-wide uppercase">{item.subtitle}</div>
                  
                  {item.isLibrary ? (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {[
                          { title: "Web Scraping", desc: "Intelligent content stripping and deduplication." },
                          { title: "File Management", desc: "Path traversal and script injection protection." },
                          { title: "Wallet Interaction", desc: "Zero-knowledge guard for private key safety." }
                        ].map((mod, j) => (
                          <div key={j} className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/10">
                            <div className="font-bold text-xs text-white mb-1">{mod.title}</div>
                            <div className="text-[10px] text-on-surface-variant">{mod.desc}</div>
                          </div>
                        ))}
                        <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/10 flex items-center justify-center">
                          <div className="text-[10px] font-mono text-primary-container">+ MORE_MODULES</div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-[10px] font-mono text-on-surface-variant">FORMAT: SKILL.md / YAML</span>
                        <span className="text-[10px] font-mono text-on-surface-variant">VERIFIED: 100% Functional</span>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-4 text-on-surface-variant text-sm mb-8">
                      <p>{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags?.map((tag, k) => (
                          <span key={k} className="bg-surface-container-highest px-3 py-1 rounded-full text-xs border border-outline-variant/30">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-headline text-4xl font-bold text-white tracking-tight mb-2">News</h2>
                <p className="text-on-surface-variant text-sm">Latest updates and industry collaborations</p>
              </div>
              <button className="px-6 py-2 border border-outline-variant rounded-lg text-white font-bold text-sm hover:bg-surface-bright hover:border-primary-container transition-all">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  img: "https://picsum.photos/seed/security1/800/600",
                  tag: "INVESTMENT",
                  date: "MAY 2024",
                  title: "OKX Ventures Investment in Web3 Security Infrastructure GoPlus...",
                  desc: "OKX Ventures has invested in GoPlus Security to bolster Web3 security layers for AI-driven ecosystems."
                },
                {
                  img: "https://picsum.photos/seed/security2/800/600",
                  tag: "PARTNERSHIP",
                  date: "APR 2024",
                  title: "The Inaugural Partner Of The Etherscan Card. GoPlus Token...",
                  desc: "GoPlus is proud to be the first security partner for the Etherscan Card, bringing on-chain safety to millions."
                },
                {
                  img: "https://picsum.photos/seed/security3/800/600",
                  tag: "ECOSYSTEM",
                  date: "MAR 2024",
                  title: "GoPlus Security Partners with AltLayer to Elevate Web3 Security...",
                  desc: "AltLayer and GoPlus Security are joining forces to provide enhanced roll-up security for decentralized AI."
                }
              ].map((news, i) => (
                <motion.div 
                  key={i} 
                  className="group cursor-pointer flex flex-col bg-surface-container border border-outline-variant/10 rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-primary-container/20 transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img alt={news.title} className="news-image-clip group-hover:scale-105 transition-transform duration-500" src={news.img} referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-primary-container/10 text-primary-container text-[10px] font-mono px-2 py-0.5 rounded">{news.tag}</span>
                      <span className="text-[10px] text-on-surface-variant font-mono">{news.date}</span>
                    </div>
                    <h3 className="text-white font-bold text-xl leading-snug mb-3 group-hover:text-primary-container transition-colors line-clamp-2">{news.title}</h3>
                    <p className="text-on-surface-variant text-sm line-clamp-3 mb-6">{news.desc}</p>
                    <div className="mt-auto flex items-center text-primary-container text-xs font-bold gap-1">
                      READ ARTICLE <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl font-bold text-white mb-4">Simple Pricing. Start Free.</h2>
              <p className="text-on-surface-variant">Personal plan includes a 7-day free trial. Cancel anytime.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                {
                  name: "Free",
                  price: "$0",
                  period: "/forever",
                  desc: "Try it out",
                  features: ["100 scans / month", "All 6 detectors", "Basic threat reports", "Community support"],
                  btn: "Get Started"
                },
                {
                  name: "Personal",
                  price: "$15",
                  period: "/month",
                  desc: "7-day free trial. Your personal AI security guard",
                  features: ["500 scans / month", "All 6 detectors", "Detailed threat reports", "AI Deep Analysis", "API access (2 keys)"],
                  btn: "Start Free Trial",
                  recommended: true
                },
                {
                  name: "Starter",
                  price: "$99",
                  period: "/month",
                  desc: "For teams getting started",
                  features: ["10,000 scans / month", "Full threat reports", "API access (10 keys)", "Webhook notifications", "Team mgmt (5 seats)"],
                  btn: "Subscribe"
                },
                {
                  name: "Pro",
                  price: "$499",
                  period: "/month",
                  desc: "For platforms at scale",
                  features: ["100,000 scans / month", "Full reports + audit logs", "API access (50 keys)", "Unlimited team seats", "Custom rules"],
                  btn: "Subscribe"
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  desc: "Custom security requirements",
                  features: ["Unlimited scans", "Full audit + logs", "Unlimited API keys", "On-prem + SLA"],
                  btn: "Contact Sales"
                }
              ].map((plan, i) => (
                <div 
                  key={i} 
                  className={`p-6 bg-surface-container rounded-xl border flex flex-col ${plan.recommended ? 'border-2 border-primary-container shadow-[0_0_30px_rgba(0,255,156,0.1)] relative' : 'border-outline-variant/10'}`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest">Recommended</div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <div className="text-3xl font-bold text-white mb-1">{plan.price}<span className="text-xs font-normal text-on-surface-variant">{plan.period}</span></div>
                  <p className={`text-[10px] mb-6 ${plan.recommended ? 'text-primary-container' : 'text-on-surface-variant'}`}>{plan.desc}</p>
                  <ul className="space-y-2 mb-8 flex-1 text-[11px] text-on-surface-variant">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Check className="text-primary-container w-3 h-3" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-2 rounded-lg text-xs font-bold transition-all ${plan.recommended ? 'bg-primary-container text-on-primary-container hover:brightness-110' : 'border border-outline-variant text-white hover:bg-surface-container-highest'}`}>
                    {plan.btn}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 tactical-grid opacity-10"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8">Your Agent Needs a Security Guard</h2>
            <p className="text-xl text-on-surface-variant mb-12">Join global 2000+ AI development teams using AgentGuard to build a secure intelligent future.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,255,156,0.4)] transition-all">
                Start Free
              </button>
              <button className="bg-surface-container-highest border border-outline-variant text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-bright transition-all">
                Documentation
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full pt-20 pb-10 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-bold text-primary-container mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6" /> AgentGuard
            </div>
            <p className="text-slate-500 mb-6">Dedicated to building a zero-trust security layer for the AI era, providing a barrier for interaction between humans and super-intelligence.</p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Product</h5>
            <ul className="space-y-4 text-slate-500">
              {["Features", "Pricing", "Threat Database", "Detection Rules"].map((item, i) => (
                <li key={i}><a className="hover:text-white transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Developers</h5>
            <ul className="space-y-4 text-slate-500">
              {["Documentation", "API Reference", "API Keys", "Changelog"].map((item, i) => (
                <li key={i}><a className="hover:text-white transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Resources</h5>
            <ul className="space-y-4 text-slate-500">
              {["Integrations", "Dashboard"].map((item, i) => (
                <li key={i}><a className="hover:text-white transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <div>© 2024 AgentGuard. Kinetic Fortress Security.</div>
          <div className="flex gap-8">
            <a className="hover:text-white" href="#">Privacy Policy</a>
            <a className="hover:text-white" href="#">Terms of Service</a>
            <a className="hover:text-white" href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
