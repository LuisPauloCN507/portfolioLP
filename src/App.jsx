/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Download, Wallet, Code2, Clock, FolderOpen, Terminal } from 'lucide-react';

// --- DADOS DAS TECNOLOGIAS (Com ícones) ---
const TECHS = [
  { name: "JavaScript", icon: "js.png" },
  { name: "TypeScript", icon: "typescript.png" },
  { name: "React", icon: "react.png" },
  { name: "Next.js", icon: "nextjs.png" },
  { name: "Node.js", icon: "node.png" },
  { name: "Prisma", icon: "prisma.png" },
  { name: "Tailwind", icon: "tailwind.png" },
  { name: "Docker", icon: "docker.png" },
  { name: "SQL", icon: "sql.png" },
  { name: "Python", icon: "python.png" },
  { name: "Git", icon: "git.png" },
  { name: "Express", icon: "express.png" },
  { name: "MongoDB", icon: "mongo.png" },
];

const PROJECTS = [
  { title: "Finans.AI", desc: "Gestor financeiro inteligente com Prisma ORM e Dashboard moderno.", demo: "https://finans-ai.vercel.app", repo: "https://github.com/LuisPauloCN507/finans-ai", icon: <Wallet size={24} /> },
  { title: "DevFinder", desc: "Busca de perfis GitHub consumindo API externa com tipagem estrita.", demo: "https://dev-finder-omega-vert.vercel.app", repo: "https://github.com/LuisPauloCN507/dev-finder", icon: <Code2 size={24} /> },
  { title: "FocusTimer", desc: "Temporizador Pomodoro com lógica de precisão e efeitos sonoros.", demo: "https://focus-timer-three-xi.vercel.app", repo: "https://github.com/LuisPauloCN507/focus-timer", icon: <Clock size={24} /> },
  { title: "NoteKeeper V2.5", desc: "CRUD Full Stack com arquitetura MVC.", repo: "https://github.com/LuisPauloCN507/note-keeper", icon: <FolderOpen size={24} /> },
  { title: "PyDownloader Rev5", desc: "Automação em Python para downloads do YouTube.", repo: "https://github.com/LuisPauloCN507/py-downloader", icon: <Terminal size={24} /> },
];

const HackerText = ({ text }) => {
  const [val, setVal] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const scramble = useCallback(() => {
    let iter = 0;
    const interval = setInterval(() => {
      setVal(text.split("").map((c, i) => i < iter ? text[i] : chars[Math.floor(Math.random() * 36)]).join(""));
      if (iter >= text.length) clearInterval(interval);
      iter += 1 / 3;
    }, 30);
  }, [text]);
  useEffect(() => scramble(), [scramble]);
  return <motion.span onMouseOver={scramble} className="cursor-default">{val}</motion.span>;
};

export default function App() {
  const copyEmail = () => {
    navigator.clipboard.writeText('lu1spaul0d3v@gmail.com');
    alert('E-mail copiado!');
  };

  return (
    <div className="min-h-screen bg-black text-white w-full">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 border-b border-neon/10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <span className="text-neon font-bold text-xl tracking-tighter shadow-neon">LP.DEV</span>
          <div className="flex gap-6 md:gap-10 text-[10px] uppercase tracking-widest font-bold">
            <a href="#about" className="hover:text-neon transition">Sobre</a>
            <a href="#education" className="hover:text-neon transition">Educação</a>
            <a href="#projects" className="hover:text-neon transition">Projetos</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen w-full flex flex-col items-center justify-center text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-7xl font-bold text-neon font-mono mb-6 shadow-neon">
            <HackerText text="LUIS PAULO COSTA NETO" />
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light">Full Stack Developer Júnior</p>
          
          <div className="flex gap-8 mt-10 justify-center">
            <a href="https://github.com/LuisPauloCN507" target="_blank" rel="noreferrer" className="hover:text-neon transition transform hover:-translate-y-1"><Github size={28}/></a>
            <a href="https://www.linkedin.com/in/luis-paulo-costa-neto-42521a352" target="_blank" rel="noreferrer" className="hover:text-neon transition transform hover:-translate-y-1"><Linkedin size={28}/></a>
            <button onClick={copyEmail} className="hover:text-neon transition transform hover:-translate-y-1"><Mail size={28}/></button>
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="w-full md:w-auto px-10 py-3 border border-neon text-neon font-bold rounded hover:bg-neon hover:text-black transition">VER PROJETOS</a>
            <a href="/assets/curriculo.pdf" download className="w-full md:w-auto px-10 py-3 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition flex items-center justify-center gap-2 font-semibold text-sm">
              CV <Download size={18}/>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Seção Sobre & Tech (Com Logos) */}
      <section id="about" className="w-full max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white/2 border border-white/5 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-neon mb-6 uppercase tracking-tighter">Sobre_Mim</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Estudante de ADS e desenvolvedor Full Stack focado no ecossistema <span className="text-white">JS/TS</span>. Construo sistemas modernos com <span className="text-neon font-medium">Next.js e Prisma</span> em ambientes Docker.
            </p>
            <div className="mt-6 flex items-center gap-2 text-gray-500 text-sm">
              <MapPin size={16} className="text-neon" /> Teresina - PI - Brasil
            </div>
          </div>

          <div className="bg-white/2 border border-white/5 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-neon mb-6 uppercase tracking-tighter">Tech_Stack</h2>
            <div className="flex flex-wrap gap-3">
              {TECHS.map(t => (
                <div key={t.name} className="flex items-center gap-2 px-3 py-1.5 bg-black border border-neon/20 hover:border-neon transition rounded-md group">
                  <img 
                    src={`/assets/${t.icon}`} 
                    alt={t.name} 
                    className="w-5 h-5 object-contain group-hover:scale-110 transition"
                    onError={(e) => { e.target.style.display = 'none' }} 
                  />
                  <span className="text-neon text-[10px] font-bold uppercase tracking-tight">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educação */}
      <section id="education" className="w-full max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-widest text-neon shadow-neon">Educação</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { inst: "Estácio", curso: "Graduação ADS", desc: "Engenharia de Software.", logo: "estacio-logo.png" },
            { inst: "Udemy", curso: "Full Stack Mastery", desc: "Next.js, Node e TypeScript.", logo: "udemy-logo.png" }
          ].map((edu, i) => (
            <div key={i} className="p-8 bg-white/2 border border-white/5 rounded-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-2 border-neon p-2">
                <img src={`/assets/${edu.logo}`} alt={edu.inst} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-white">{edu.inst}</h3>
              <p className="text-neon font-medium text-sm mt-1">{edu.curso}</p>
              <p className="text-gray-500 text-xs mt-4 italic leading-relaxed">{edu.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projetos Grid */}
      <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <Terminal className="text-neon" /> MEUS_PROJETOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} className="bg-white/2 border border-white/5 p-8 rounded-xl flex flex-col hover:border-neon/40 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-neon/10 rounded-lg text-neon">{p.icon}</div>
                <div className="flex gap-3 text-gray-500">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="hover:text-neon transition"><Github size={20}/></a>
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="hover:text-neon transition"><ExternalLink size={20}/></a>}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 uppercase">{p.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed grow">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-20 text-center text-gray-600 text-[10px] uppercase tracking-[0.5em] border-t border-white/5">
        Luis Paulo Costa Neto // 2026 // Built with React & Tailwind v4
      </footer>
    </div>
  );
}