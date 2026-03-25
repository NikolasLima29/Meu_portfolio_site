import React from 'react';
import Marquee from 'react-fast-marquee';
import { 
  SiReact, 
  SiJavascript, 
  SiPhp, 
  SiMysql, 
  SiBootstrap, 
  SiKotlin, 
  SiUnity, 
  SiNodedotjs,
  SiFramer 
} from 'react-icons/si';

const TechMarquee = () => {
  const techs = [
    { icon: <SiReact color="#61DAFB" />, name: "React" },
    { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiPhp color="#777BB4" />, name: "PHP" },
    { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
    { icon: <SiFramer color="#0055FF" />, name: "Framer Motion" },
    { icon: <SiNodedotjs color="#339933" />, name: "Node.js" },
    { icon: <SiKotlin color="#7F52FF" />, name: "Kotlin" },
    { icon: <SiUnity color="#FFFFFF" />, name: "Unity" },
    { icon: <SiBootstrap color="#7952B3" />, name: "Bootstrap" }
  ];

  return (
    <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '15px 0', background: 'rgba(0,0,0,0.2)' }}>
      <Marquee gradient={true} gradientColor={[9, 14, 26]} gradientWidth={100} speed={40} autoFill={true}>
        {techs.map((tech, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 40px', opacity: 0.6, transition: '0.3s' }} className="marquee-item">
            <span style={{ fontSize: '1.8rem' }}>{tech.icon}</span>
            <span style={{ fontWeight: 600, fontSize: '1.2rem', color: '#fff', letterSpacing: '1px' }}>{tech.name}</span>
          </div>
        ))}
      </Marquee>
      
      {/* CSS interno para o hover clarear o ícone */}
      <style>{`
        .marquee-item:hover {
          opacity: 1 !important;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default TechMarquee;
