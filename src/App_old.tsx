import React, { useState, useRef, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Introduction } from './components/sections/Introduction';
import { DigitalChallenges } from './components/sections/DigitalChallenges';
import { SecurityMeasures } from './components/sections/SecurityMeasures';
import { Statistics } from './components/sections/Statistics';
import { Solutions } from './components/sections/Solutions';
import { QuestionsAnswers } from './components/sections/QuestionsAnswers';
import { Resources } from './components/sections/Resources';
import { Footer } from './components/Footer';
import audioUrl from './Img/son1.mp3';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBilletModal, setShowBilletModal] = useState(false);
  const [billetName, setBilletName] = useState('');
  const [billetError, setBilletError] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  async function handleBilletSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBilletError(null);
    setDownloading(true);
    try {
      const q = query(collection(db, 'rsvps'), where('nom', '==', billetName.trim()));
      const snap = await getDocs(q);
      // Recherche insensible à la casse
      const found = snap.docs.find(doc => (doc.data().nom || '').toLowerCase() === billetName.trim().toLowerCase());
      if (found) {
        // Générer un canvas avec le nom sur le billet
        const img = new window.Image();
        img.crossOrigin = 'anonymous';
        img.src = BilletImg;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            // Style du nom
            ctx.font = 'italic 36px serif';
            ctx.fillStyle = '#823930';
            ctx.textAlign = 'center';
            ctx.shadowColor = 'white';
            ctx.shadowBlur = 4;
            // Position du nom (ajuste selon le visuel du billet)
            ctx.fillText(billetName.trim(), canvas.width / 2, canvas.height - 970);
          }
          // Télécharger l'image personnalisée
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = 'billet-ololo-wedding.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setShowBilletModal(false);
          setBilletName('');
        };
      } else {
        setBilletError('Nom non trouvé. Vérifiez l’orthographe ou contactez les mariés.');
      }
    } catch (err) {
      setBilletError("Erreur lors de la recherche. Réessayez.");
    }
    setDownloading(false);
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#6a1818] text-white">
      {/* Musique de fond */}
      <audio ref={audioRef} src={audioUrl} autoPlay loop />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow w-full">
        <div id="home">
          <Hero setActiveSection={setActiveSection} />
        </div>
        <div id="our-story">
          <OurStory />
        </div>
        <div id="event-details">
          <EventDetails />
        </div>
        <div id="rsvp">
          <RSVP />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="registry">
          <Registry />
        </div>
        <div id="practical-info">
          <PracticalInfo />
        </div>
        <div id="guest-book">
          <GuestBook />
        </div>
      </main>
      {/* Section Votre billet */}
      <section id='BILLET' className="py-20 px-4 md:px-8 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-5">VOTRE BILLET</h2>
                <div className="w-16 h-0.5 bg-amber-200 mx-auto"></div>
        <p className="text-lg mt-5 md:text-xl mb-8">Téléchargez votre billet d'invitation pour le mariage.</p>

        <div className="flex flex-col mt-12 items-center justify-center">
          <img src={BilletImg} alt="Billet d'invitation" className="w-full max-w-xs rounded-lg shadow-lg mb-6" />
          <button
            className="px-8 py-3 bg-amber-200 text-[#6a1818] font-semibold rounded-full shadow hover:bg-amber-300 transition mb-2"
            onClick={() => setShowBilletModal(true)}
          >
            Récupérer mon billet
          </button>
        </div>
      </section>
      {/* Modale billet */}
      {showBilletModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white text-[#6a1818] rounded-lg max-w-md w-full p-8 relative">
            <button
              className="absolute top-2 right-4 text-2xl"
              onClick={() => { setShowBilletModal(false); setBilletName(''); setBilletError(null); }}
              aria-label="Fermer"
            >×</button>
            <h3 className="text-xl font-light mb-4 text-center">Téléchargez votre billet</h3>
            <form onSubmit={handleBilletSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Votre nom complet"
                value={billetName}
                onChange={e => setBilletName(e.target.value)}
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-amber-200"
                required
              />
              {billetError && <p className="text-red-600 text-sm text-center">{billetError}</p>}
              <button
                type="submit"
                className="px-6 py-2 bg-amber-200 text-[#6a1818] font-semibold rounded-full shadow hover:bg-amber-300 transition"
                disabled={downloading}
              >
                {downloading ? 'Recherche...' : 'Envoyer'}
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}