'use client';
import { useState } from 'react';

const TWEET_URL = 'https://twitter.com/deshuu_/status/1953501969252864153';

export default function Page() {
  const [username, setUsername] = useState('');
  const [domain, setDomain] = useState('');
  const [submitted, setSubmitted] = useState(false);

   // ① Form validasyonu için ekle 
 const isFormValid = username.trim().length > 0 && domain.trim().length > 0; 

 // ② handleSubmit fonksiyonunu ekle 
 const handleSubmit = () => { 
   if (!isFormValid) return;      // boşsa çık 
   setSubmitted(true);             // doluysa gönder 
 };

  const intentUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    TWEET_URL
  )}&text=${encodeURIComponent(
    `Just secured ${domain}.billions on Billions Domain Service.

Get yours now : billions-domain-service.vercel.app
Who wouldn't want to have a unique Billioner identity?`
  )}`;

  return (
    <main className="flex items-start justify-center min-h-screen px-4 pt-20 bg-[url('/pattern.jpg')] bg-cover bg-center">
      <div className="border border-blue-300 rounded-lg bg-gray-800 p-6 w-full max-w-md shadow-lg text-white">
        {!submitted ? (
          <>  
            {/* Karakter resmi */}
            <img src="/placeholder.jpg" alt="character" className="w-full rounded mb-4" />

            <h2 className="text-2xl font-bold mb-4 text-left text-blue-400">
              Grab Your Billions Domain Now
            </h2>
            <p className="text-sm text-gray-200 mb-4">
              This is a fan-made Billions Name Domain that allows you to generate a visual .billions domain card.
            </p>

            <label className="block text-sm text-gray-200 mb-1">Your X Username</label>
            <input
              type="text"
              placeholder="e.g. @billions_lover"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-3 p-2 rounded bg-black border border-blue-300 text-white"
            />

            <label className="block text-sm text-gray-200 mb-1">Your Billions Domain</label>
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="yourname"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full p-2 rounded-l bg-black border border-blue-300 text-white"
              />
              <span className="bg-blue-500 text-black font-bold px-4 flex items-center rounded-r">
                .billions
              </span>
            </div>

            {/* ③ Butona handleSubmit ve disable logic ekle */}
           <button 
             type="button" 
             onClick={handleSubmit} 
             disabled={!isFormValid} 
             className="w-full bg-blue-300 text-black font-bold py-2 rounded transition" 
             style={{ 
               opacity: isFormValid ? 1 : 0.5, 
               cursor: isFormValid ? 'pointer' : 'not-allowed' 
             }} 
           > 
             Secure Your Domain 
           </button>
          </>
        ) : (
          <>          
            <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
             🎉 Congratulations {username || 'User'}! 🎉
            </h2>
            {/* Başarı görseli */}
            <img src="/success.jpg" alt="Success" className="w-full rounded mb-4" />
             <p className="text-center mb-6"> 
              Your <span className="font-semibold text-blue-400">{domain || 'yourname'}.billions</span> domain is now yours forever. 
              <br /> 
              You have a unique name secured on the blockchain. 
              </p>
            {/* Yeni sekmede paylaş butonu */}
            <button
              onClick={() => window.open(intentUrl, '_blank')}
              className="w-full bg-blue-300 text-black font-bold py-2 rounded hover:bg-blue-500 transition"
            >
              Share Your Domain on X
            </button>
          </>
        )}
      </div>
    </main>
  );
}