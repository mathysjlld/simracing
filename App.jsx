import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flag, MapPin, Calendar, Gamepad2, MonitorPlay, Timer, ChevronRight, Medal, Play, Crosshair, Settings, Trash2, Plus } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flag className="text-racing-neon w-6 h-6" />
          <span className="font-orbitron font-bold text-xl tracking-wider">
            BS<span className="text-racing-netflix text-racing-neon">RACING</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#concept" className="hover:text-racing-neon transition-colors">Concept</a>
          <a href="#experience" className="hover:text-racing-neon transition-colors">Expérience</a>
          <a href="#classement" className="hover:text-racing-neon transition-colors">Classement</a>
        </div>
        <a href="#inscription" className="bg-racing-red hover:bg-racing-neon text-white px-6 py-2.5 rounded text-sm font-bold tracking-wide transition-all uppercase flex items-center gap-2">
          Infos pratiques <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img src="/hero.png" alt="Ferrari 458 Cockpit" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-[#0B0B0E]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0E]/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start text-left">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-white mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-racing-neon animate-pulse"></span>
          Événement SimRacing
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-white leading-tight uppercase max-w-4xl"
        >
          Qui sera le <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-neon to-orange-500">plus rapide ?</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-xl text-gray-300 max-w-2xl font-light"
        >
          Viens battre le chrono sur Laguna Seca et tente de gagner le classement au volant d'une Ferrari 458 GT2.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <a href="#inscription" className="bg-racing-red hover:bg-racing-neon text-white px-8 py-4 rounded font-bold tracking-wider text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(229,9,20,0.5)]">
            Participer au tournoi
          </a>
          <a href="#concept" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded font-bold tracking-wider text-lg transition-colors">
            Découvrir
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Concept() {
  return (
    <section id="concept" className="py-24 bg-[#0B0B0E] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold uppercase mb-4">Le <span className="text-racing-neon">Concept</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Préparez-vous à une immersion totale. Pas besoin d'expérience, juste de l'envie et des réflexes.</p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeUp} className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-racing-neon/50 transition-colors group">
            <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-racing-neon/20 transition-colors">
              <Crosshair className="w-7 h-7 text-racing-neon" />
            </div>
            <h3 className="text-xl font-bold font-orbitron mb-3 uppercase">Laguna Seca</h3>
            <p className="text-gray-400">Affrontez le mythique circuit californien et son célèbre virage en tire-bouchon (Corkscrew).</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-racing-neon/50 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-racing-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-racing-neon/20 transition-colors relative z-10">
              <Gamepad2 className="w-7 h-7 text-racing-neon" />
            </div>
            <h3 className="text-xl font-bold font-orbitron mb-3 uppercase relative z-10">Ferrari 458 GT2</h3>
            <p className="text-gray-400 relative z-10">Pilotez une véritable machine de course virtuelle, réglée pour allier vitesse et précision.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-racing-neon/50 transition-colors group">
            <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-racing-neon/20 transition-colors">
              <Timer className="w-7 h-7 text-racing-neon" />
            </div>
            <h3 className="text-xl font-bold font-orbitron mb-3 uppercase">Hotlap</h3>
            <p className="text-gray-400">Votre seul adversaire est le chronomètre. Réalisez le meilleur temps pour dominer le classement en direct.</p>
          </motion.div>
        </motion.div>

        <motion.div
           initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
           className="mt-20 max-w-4xl mx-auto rounded-xl overflow-hidden border border-zinc-800 shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-racing-neon/5 animate-pulse pointer-events-none"></div>
          <div className="aspect-video relative z-10">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/Tunjv-PbumA?rel=0&showinfo=0" 
              title="Assetto Corsa Laguna Seca" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-950 border-y border-zinc-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="lg:w-1/2 space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold uppercase mb-4">Immersion <span className="text-racing-neon">Totale</span></h2>
            <p className="text-gray-400 text-lg">Prenez place dans un simulateur de course digne des compétitions professionnelles et ressentez chaque virage.</p>
          </div>
          <ul className="space-y-4">
            {[
              "Volant professionnel à retour de force direct",
              "Pédalier avec frein de type Load Cell",
              "Siège baquet de simulation ergonomique",
              "PC Gaming très haute performance",
              "Grand écran affichant le gameplay",
              "Retransmission et replay en direct au lounge"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 hidden sm:block">
                  <MonitorPlay className="w-5 h-5 text-racing-neon" />
                </div>
                <span className="text-gray-300 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="lg:w-1/2 relative min-h-[400px] w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-racing-neon to-transparent opacity-20 blur-3xl rounded-full"></div>
          <img src="/simulator.png" alt="Simulateur" className="rounded-xl shadow-2xl shadow-black/50 border border-zinc-800 relative z-10 w-full object-cover aspect-video" />
        </motion.div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { title: "Inscription", desc: "Payez 5€ et réservez votre créneau au BDE.", num: "01" },
    { title: "Briefing", desc: "Explication des contrôles et du circuit (2 min).", num: "02" },
    { title: "Essais", desc: "Prenez en main le véhicule (Tours de chauffe).", num: "03" },
    { title: "Chrono", desc: "Mode attaque ! Réalisez le meilleur temps possible.", num: "04" },
    { title: "Classement", desc: "Votre temps s'affiche en direct sur l'écran du lounge.", num: "05" },
  ];

  return (
    <section className="py-24 bg-[#0B0B0E] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold uppercase mb-4">Comment <span className="text-racing-neon">Participer</span></h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-racing-neon/10 border border-racing-neon/30 text-racing-neon rounded-full font-bold">
            Tarif: 5 € par participation
          </div>
          <p className="text-gray-400 mt-4">Vous pouvez retenter votre chance autant de fois que vous le souhaitez !</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-800 -translate-y-1/2 z-0"></div>
          {steps.map((step, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              key={idx} 
              className="relative z-10 flex flex-col items-center text-center p-4"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-900 border-2 border-racing-neon flex items-center justify-center font-orbitron font-black text-2xl mb-4 text-white shadow-[0_0_15px_rgba(255,30,30,0.3)]">
                {step.num}
              </div>
              <h4 className="font-bold text-lg mb-2 uppercase">{step.title}</h4>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leaderboard() {
  const initialData = [
    { id: 1, name: "Lucas M.", time: "1:21.845" },
    { id: 2, name: "Antoine D.", time: "1:22.012" },
    { id: 3, name: "Sophie L.", time: "1:22.560" },
    { id: 4, name: "Maxime T.", time: "1:23.100" },
    { id: 5, name: "Emma R.", time: "1:24.005" },
  ];

  const [leaderboard, setLeaderboard] = useState(() => {
    const saved = localStorage.getItem('simracing-leaderboard');
    if (saved) return JSON.parse(saved);
    return initialData;
  });

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('simracing-leaderboard', JSON.stringify(leaderboard));
  }, [leaderboard]);

  const handleEdit = (id, field, value) => {
    setLeaderboard(prev => prev.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  const addRow = () => {
    setLeaderboard([...leaderboard, { id: Date.now(), name: "Nouveau Pilote", time: "1:30.000" }]);
  };

  const removeRow = (id) => {
    setLeaderboard(leaderboard.filter(row => row.id !== id));
  };

  const sortedLeaderboard = [...leaderboard].sort((a, b) => {
    if (!a.time || !b.time) return 0;
    return a.time.localeCompare(b.time); 
  });

  return (
    <section id="classement" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-racing-neon/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div className="w-10"></div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold uppercase text-center flex justify-center items-center gap-4">
            <Trophy className="text-racing-neon w-10 h-10" /> Leaderboard
          </h2>
          <button 
            onClick={() => setIsEditMode(!isEditMode)}
            className={`p-2 rounded-full transition-colors ${isEditMode ? 'bg-racing-neon text-white' : 'text-zinc-600 hover:text-white'}`}
            title="Mode Administrateur"
          >
            <Settings className="w-6 h-6" />
          </button>
        </div>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-950 border-b border-zinc-800 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                <th className="py-4 px-6 w-16 text-center">Pos</th>
                <th className="py-4 px-6">Pilote</th>
                <th className="py-4 px-6 text-right">Temps</th>
                {isEditMode && <th className="py-4 px-6 w-16 text-center">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {sortedLeaderboard.map((row, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={row.id} 
                  className={`border-b border-zinc-800/50 hover:bg-zinc-800/50 transition-colors ${idx === 0 && !isEditMode ? 'bg-racing-neon/10 hover:bg-racing-neon/20' : ''}`}
                >
                  <td className="py-4 px-6 text-center font-orbitron font-black text-xl">
                    {isEditMode ? (
                      <span className="text-zinc-600 text-sm">#{idx + 1}</span>
                    ) : (
                      idx === 0 ? <span className="text-yellow-500">1</span> : 
                      idx === 1 ? <span className="text-gray-300">2</span> : 
                      idx === 2 ? <span className="text-amber-600">3</span> : 
                      <span className="text-zinc-500">{idx + 1}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 font-bold text-lg">
                    {isEditMode ? (
                      <input 
                        type="text" 
                        value={row.name} 
                        onChange={(e) => handleEdit(row.id, 'name', e.target.value)}
                        className="bg-zinc-950 border border-zinc-700 px-2 py-1 rounded text-white w-full"
                      />
                    ) : (row.name)}
                  </td>
                  <td className="py-4 px-6 text-right font-orbitron font-bold text-racing-neon tracking-wider">
                    {isEditMode ? (
                      <input 
                        type="text" 
                        value={row.time} 
                        onChange={(e) => handleEdit(row.id, 'time', e.target.value)}
                        className="bg-zinc-950 border border-zinc-700 px-2 py-1 rounded text-racing-neon text-right w-32 ml-auto"
                      />
                    ) : (row.time)}
                  </td>
                  {isEditMode && (
                    <td className="py-4 px-6 text-center">
                      <button onClick={() => removeRow(row.id)} className="text-red-500 hover:text-red-400 p-1">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  )}
                </motion.tr>
              ))}
            </tbody>
          </table>
          {isEditMode && (
            <div className="p-4 bg-zinc-950 flex justify-center border-t border-zinc-800">
               <button onClick={addRow} className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  <Plus className="w-4 h-4" /> Ajouter un chrono
               </button>
            </div>
          )}
          {!isEditMode && (
            <div className="p-4 bg-zinc-950 text-center text-sm text-gray-500 font-medium">
              Mise à jour en direct pendant l'événement
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Prizes() {
  return (
    <section className="py-24 bg-[#0B0B0E] relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-racing-neon/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold uppercase mb-16 text-center">
          Les <span className="text-racing-neon text-glow">Récompenses</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-5xl mx-auto mt-12">
          {/* 2nd Place */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="bg-zinc-900 border border-zinc-700/50 hover:border-gray-400 rounded-t-xl rounded-b-md p-8 text-center order-2 md:order-1 h-[300px] flex flex-col justify-end relative shadow-[0_0_20px_rgba(156,163,175,0.05)] hover:shadow-[0_0_80px_rgba(156,163,175,0.15)] transition-all group"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_rgba(209,213,219,0.4)] group-hover:scale-110 transition-transform">
              <Medal className="text-gray-900 w-8 h-8" />
              <span className="text-gray-900 font-orbitron font-black text-xs leading-none mt-1">2ND</span>
            </div>
            <h3 className="font-orbitron font-bold text-2xl uppercase mb-3 text-gray-300">2ème Place</h3>
            <div className="inline-block bg-white/5 border border-white/10 rounded-lg py-3 px-6 mb-2">
              <p className="text-4xl font-black font-orbitron text-gray-300">30 €</p>
            </div>
            <p className="text-gray-400 text-sm mt-2">Carte Cadeau / Récompense</p>
          </motion.div>

          {/* 1st Place */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }} 
            whileInView={{ opacity: 1, scale: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }} 
            className="bg-gradient-to-t from-zinc-900 to-zinc-800 border-2 border-yellow-500 rounded-t-xl rounded-b-md p-8 text-center order-1 md:order-2 h-[360px] flex flex-col justify-end relative z-20 shadow-[0_0_50px_rgba(234,179,8,0.2)] hover:shadow-[0_0_100px_rgba(234,179,8,0.3)] transition-all group"
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(250,204,21,0.6)] group-hover:scale-110 group-hover:-translate-y-2 transition-all">
              <Trophy className="text-yellow-950 w-10 h-10" />
              <span className="text-yellow-950 font-orbitron font-black text-sm leading-none mt-1">1ST</span>
            </div>
            <h3 className="font-orbitron font-black text-3xl uppercase mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">Champion</h3>
            <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 rounded-lg py-4 px-6 mb-2">
              <p className="text-5xl font-black font-orbitron text-yellow-500 animate-pulse">50 €</p>
            </div>
            <p className="text-gray-300 text-sm font-medium mt-2">Le Grand Prix du Tournoi</p>
          </motion.div>

          {/* 3rd Place */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }} 
            className="bg-zinc-900 border border-zinc-700/50 hover:border-amber-700/50 rounded-t-xl rounded-b-md p-8 text-center order-3 h-[280px] flex flex-col justify-end relative shadow-[0_0_20px_rgba(180,83,9,0.05)] hover:shadow-[0_0_80px_rgba(180,83,9,0.15)] transition-all group"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_rgba(180,83,9,0.4)] group-hover:scale-110 transition-transform">
              <Medal className="text-amber-100 w-8 h-8" />
              <span className="text-amber-100 font-orbitron font-black text-xs leading-none mt-1">3RD</span>
            </div>
            <h3 className="font-orbitron font-bold text-2xl uppercase mb-3 text-amber-700">3ème Place</h3>
            <div className="inline-block bg-white/5 border border-white/10 rounded-lg py-3 px-6 mb-2">
              <p className="text-3xl font-black font-orbitron text-amber-700">20 €</p>
            </div>
            <p className="text-gray-400 text-sm mt-2">Carte Cadeau / Récompense</p>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm italic">Les récompenses seront distribuées par le BDE à la fin de la semaine lors de l'annonce officielle des résultats.</p>
        </div>
      </div>
    </section>
  );
}

function Registration() {
  return (
    <section id="inscription" className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-racing-neon/10 blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold uppercase mb-6">Informations & <span className="text-racing-neon">Inscription</span></h2>
          <p className="text-gray-400 mb-8 max-w-md">Les places pour le tournoi sur simulateur sont limitées. Rejoignez-nous sur place pour participer.</p>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-900 rounded flex items-center justify-center">
                <MapPin className="text-racing-neon" />
              </div>
              <div>
                <h4 className="font-bold">Lieu</h4>
                <p className="text-sm text-gray-400">Lounge - Business School Limas (Villefranche-sur-Saône)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-900 rounded flex items-center justify-center">
                <Calendar className="text-racing-neon" />
              </div>
              <div>
                <h4 className="font-bold">Dates</h4>
                <p className="text-sm text-gray-400">Événement sur toute une semaine (Créneaux libres)</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="lg:w-1/2 bg-zinc-900 border border-zinc-800 p-8 rounded-xl relative z-10 flex flex-col justify-center items-center text-center shadow-2xl"
        >
          <div className="w-20 h-20 bg-zinc-950 rounded-full border border-racing-neon/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,30,30,0.15)]">
            <span className="text-4xl" role="img" aria-label="Flag">🏁</span>
          </div>
          <h3 className="font-orbitron font-bold text-2xl mb-4 text-white uppercase tracking-wider">Inscription sur Place</h3>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-md">
            Pas besoin de formulaire en ligne, les inscriptions se font <strong className="text-white">directement sur place au stand du BDE</strong> dans le Lounge.
          </p>
          <div className="inline-block bg-racing-neon/10 border border-racing-neon/50 rounded-lg py-4 px-10 shadow-[0_0_15px_rgba(255,30,30,0.1)]">
             <span className="block text-sm text-racing-neon font-bold uppercase tracking-widest mb-1">Tarif Unique</span>
             <span className="block text-5xl font-black font-orbitron text-white">5 €</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-2 bg-[#0B0B0E]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
        <img src="/action.png" alt="Gallery" className="w-full h-64 object-cover hover:opacity-75 transition-opacity" />
        <img src="/hero.png" alt="Gallery" className="w-full h-64 object-cover hover:opacity-75 transition-opacity" />
        <img src="/simulator.png" alt="Gallery" className="w-full h-64 object-cover hover:opacity-75 transition-opacity" />
        <img src="/action.png" alt="Gallery" className="w-full h-64 object-cover hover:opacity-75 transition-opacity" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 text-center text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6 text-white opacity-50">
          <Flag className="w-5 h-5" />
          <span className="font-orbitron font-bold tracking-wider">BSRACING</span>
        </div>
        <p className="mb-2">© 2026 Business School Limas. Événement organisé par le Bureau des Étudiants.</p>
        <p>Tournoi SimRacing | Assetto Corsa | Laguna Seca | Aucun droit d'auteur, projet interne.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Concept />
      <Experience />
      <Steps />
      <Leaderboard />
      <Prizes />
      <Registration />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
