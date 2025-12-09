import React, { useEffect } from 'react';
import { 
  Github, 
  FileText, 
  Terminal,
  BookOpen,
  Award,
  Mail,
  Linkedin,
  ExternalLink
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import cvPdf from '../assets/docs/CV_ats_v0_1_2___AI_Engineering.pdf';
import profilePic from '../assets/images/profile_pic.png';
import profilePic2 from '../assets/images/profile_pic_2.png';
import { PROJECTS, SKILLS, CERTS, ARTICLES, ABOUT_ME, JOURNEY, TECH_STACK } from '../data';
import ComicButton from '../components/ui/ComicButton';
import GlitchText from '../components/ui/GlitchText';
import Section from '../components/ui/Section';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

const Home = () => {
  const location = useLocation();

  // Handle initial scrolling based on query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Update hash on scroll - Disabled for HashRouter compatibility
  /*
  useEffect(() => {
    const sections = ['hero', 'projects', 'about', 'skills', 'articles', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (window.location.hash !== `#${sectionId}`) {
              window.history.replaceState(null, null, `#${sectionId}`);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  */

  return (
    <>
      {/* 1. HERO */}
      <Section id="hero" theme="green" className="min-h-[90vh] flex flex-col justify-center pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block border border-[#4ade80] px-4 py-1 text-[#4ade80] font-mono text-sm tracking-widest uppercase mb-4 shadow-[4px_4px_0px_0px_#4ade80]">
              Aspiring Data Individual
            </div>
            
            <GlitchText text="I'M CHAMODH" />
            
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-medium">
              I build <span className="text-[#4ade80] font-bold">practical models</span> and <span className="text-[#4ade80] font-bold">clear visualizations</span> that turn messy data into actionable insights.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <ComicButton href="https://github.com/ChamoChiran" variant="outline">
                <Github className="w-5 h-5" /> GitHub Profile
              </ComicButton>
              <ComicButton href={cvPdf} variant="filled" download="Chamodh_Wijayawardana_CV.pdf">
                <FileText className="w-5 h-5" /> Download CV
              </ComicButton>
            </div>
          </div>
          
          {/* Abstract Hero Graphic */}
          <div className="relative hidden lg:block h-[600px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#4ade8030_0%,_transparent_70%)] opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-[#4ade80] z-10 bg-black/50 backdrop-blur-sm overflow-hidden">
              <img src={profilePic} alt="Chamodh" className="w-full h-full object-cover object-top scale-115 opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-white -rotate-6 z-0 opacity-50"></div>
            
            <div className="absolute bottom-10 left-10 p-4 bg-black border border-[#4ade80] text-[#4ade80] font-mono text-xs shadow-[4px_4px_0px_0px_#4ade80]">
              &gt; git add .<br/>
              &gt; git commit -m "final pls work"<br/>
              &gt; git push origin main -f
            </div>
          </div>
        </div>
      </Section>

      {/* 2. PROJECTS */}
      <Section id="projects" theme="pink">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white mb-2">
              FEATURED <span className="text-[#e879f9]">PROJECTS</span>
            </h2>
            <div className="h-2 w-24 bg-[#e879f9]"></div>
          </div>
          <p className="text-gray-400 font-mono mt-4 md:mt-0 text-sm">// SELECTED WORKS 2023-2025</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </Section>

      {/* 3. ABOUT & JOURNEY */}
      <Section id="about" theme="cyan">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: About */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative">
              <div className="w-full aspect-square bg-gray-900 border-2 border-[#22d3ee] relative overflow-hidden mb-6 group">
                <img src={profilePic2} alt="Chamodh Wijayawardana" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-115" />
                <div className="absolute inset-0 bg-[#22d3ee] mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-[#22d3ee] text-black p-2 font-bold text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  DATA PROFESSIONAL
                </div>
              </div>
              
              <h2 className="text-3xl font-black italic text-white break-words">CHAMODH <span className="text-[#22d3ee]">WIJAYAWARDANA</span></h2>
              <p className="text-[#22d3ee] font-mono font-bold mt-1">Data Professional</p>
            </div>

            <div className="text-gray-300 leading-relaxed space-y-4">
              {ABOUT_ME.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-bold uppercase border-b border-gray-800 pb-2 mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-[#22d3ee]/10 text-[#22d3ee] text-xs font-bold border border-[#22d3ee]/30 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Journey */}
          <div className="lg:col-span-7 pl-0 lg:pl-12 border-l-0 lg:border-l border-gray-800">
            <h3 className="text-3xl font-black italic tracking-tighter text-white mb-8 flex items-center gap-3">
              <span className="text-[#22d3ee]">#</span> JOURNEY
            </h3>

            <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
              
              {JOURNEY.map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${item.type === 'work' ? 'border-[#22d3ee] text-[#22d3ee] shadow-[0_0_10px_#22d3ee]' : 'border-gray-600 text-gray-400'} bg-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}>
                    {item.icon}
                  </div>
                  <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 ${item.type === 'work' ? 'bg-[#22d3ee]/5 border-[#22d3ee]/30' : 'bg-black border-gray-800'} border relative`}>
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-white">{item.role}</div>
                      <time className={`font-mono text-xs ${item.type === 'work' ? 'text-[#22d3ee]' : 'text-gray-500'}`}>{item.period}</time>
                    </div>
                    <div className="text-gray-400 text-sm mb-2">{item.company}</div>
                    {item.desc && (
                      <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
                        {item.desc.map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </Section>

      {/* 4. WHAT I DO (Yellow) */}
      <Section id="skills" theme="yellow">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white mb-4">
            WHAT <span className="text-[#facc15]">I DO</span>
          </h2>
          <p className="text-xl text-gray-300 font-medium">"I don't just crunch numbers — I chase the story behind them."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, i) => (
            <div key={i} className="bg-neutral-900/50 p-8 border border-neutral-800 hover:border-[#facc15] hover:bg-[#facc15]/5 transition-all duration-300 group">
              <div className="mb-6 text-[#facc15] group-hover:scale-110 transition-transform duration-300 origin-left">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#facc15]">{skill.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-black italic text-white mb-8 border-l-4 border-[#facc15] pl-4">
            BADGES & CERTIFICATIONS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CERTS.map((cert, i) => (
              <div key={i} className="flex items-center gap-3 p-4 border border-dashed border-gray-700 hover:border-[#facc15] transition-colors group">
                <Award className="text-[#facc15] w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-300 uppercase leading-tight">{cert.name}</span>
                  <span className="text-[10px] text-gray-500 font-mono mt-1">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. BLOG / BRAIN DUMP (Pink) */}
      <Section id="articles" theme="pink">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-4xl font-black italic tracking-tighter text-white">
              BRAIN <span className="text-[#e879f9]">DUMP</span>
            </h2>
            <div className="hidden md:block text-[#e879f9] font-mono text-sm">// INSIGHTS & DEEP DIVES</div>
          </div>
          <p className="text-gray-400 max-w-2xl text-lg">
            Insights and deep dives into real-world data science projects, methodologies, and learnings from the field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((article, i) => (
            <a href={article.link} key={i} className="block group relative">
              <div className="absolute inset-0 bg-[#e879f9] transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative bg-black border border-gray-700 p-8 h-full transition-transform duration-200 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:border-[#e879f9]">
                <div className="text-[#e879f9] text-xs font-mono font-bold mb-3 uppercase tracking-widest">Article 0{i + 1}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:underline decoration-[#e879f9] decoration-2 underline-offset-4 break-words">
                  {article.title}
                </h3>
                <p className="text-gray-400">
                  {article.desc}
                </p>
                <div className="mt-6 flex justify-end">
                  <ExternalLink className="w-6 h-6 text-gray-500 group-hover:text-[#e879f9]" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* 6. CONTACT */}
      <Section id="contact" theme="green" className="pb-12 bg-[#050505] border-b-0">
        <div className="bg-[#4ade80] text-black p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_black_2px,_transparent_2px)] [background-size:20px_20px]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black italic mb-6 tracking-tighter">LET'S TALK DATA</h2>
            <p className="text-lg md:text-xl font-bold mb-8 max-w-2xl mx-auto">
              Discuss data science opportunities, collaborations, or just say hi.
            </p>
            
            <a href="mailto:chamochiran05@gmail.com" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg font-bold uppercase tracking-wider hover:scale-105 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </div>

        <Footer />
      </Section>
    </>
  );
};

export default Home;
