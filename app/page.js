'use client'; // Declara o componente como Client Component
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [fonts, setFonts] = useState([]);
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const fontFamilies = [
      'Arial, sans-serif',
      'Courier New, monospace',
      'Georgia, serif',
      'Comic Sans MS, cursive',
      'Impact, sans-serif',
      'Lucida Console, monospace',
      'Brush Script MT, cursive',
      'Garamond, serif',
      'Copperplate, serif',
      'Papyrus, fantasy',
    ];

    const initialFonts = Array.from({ length: 26 }, () =>
      fontFamilies[Math.floor(Math.random() * fontFamilies.length)]
    );
    setFonts(initialFonts);

    const interval = setInterval(() => {
      // Atualiza as fontes de cada letra
      setFonts((prevFonts) =>
        prevFonts.map(
          () => fontFamilies[Math.floor(Math.random() * fontFamilies.length)]
        )
      );
      // Atualiza o índice da logo
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 500); // Troca a cada 500ms

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  const text = 'TRABALHO DESENVOLVIMENTO WEB';
  const logos = [
    '/images/logo1.webp',
    '/images/logo2.png',
    '/images/logo3.webp',
    '/images/logo4.svg',
    '/images/logo6.svg',
    '/images/logo7.png',
    '/images/logo8.webp',
    '/images/logo9.svg',
  ];

  return (
    <div className="animatedBackground">
      <div className="textContainer">
        {text.split('').map((char, index) => (
          <span
            key={index}
            style={{
              fontFamily: fonts[index] || 'Arial, sans-serif',
              fontWeight: 'bold',
              fontSize: '4rem',
              margin: '0 5px',
            }}
          >
            {char.trim() === '' ? '\u00A0' : char}
          </span>
        ))}
      </div>
      <div className="logoContainer">
        <img src={logos[currentLogo]} alt="Logo" className="logo" />
      </div>

      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animatedBackground {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          background: linear-gradient(135deg, #0f172a, #1e293b, #2563eb, #7c3aed, #4c1d95);
          background-size: 300% 300%;
          animation: gradientMove 8s ease infinite;
          margin: 0;
          padding: 0;
        }

        .textContainer {
          display: flex;
          text-transform: uppercase;
          color: #ffffff;
          text-shadow: 0 0 5px #000000, 0 0 10px #000000, 0 0 15px rgba(0, 0, 0, 0.8);
        }

        .logoContainer {
          margin-top: 20px;
          height: 150px; /* Altura fixa para o container */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo {
          max-width: 150px; /* Tamanho máximo da largura */
          max-height: 100%; /* Ajusta dentro do container fixo */
        }
      `}</style>
    </div>
  );
}
