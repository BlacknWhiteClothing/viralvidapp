'use client';

import { useState } from 'react';
import TikTokEmbed from './components/TikTokEmbed';

export default function Home() {
  const [url, setUrl] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tiktokUrlPattern = /^https?:\/\/((?:vm|vt|www)\.)?tiktok\.com\/.+/i;
    setIsValidUrl(tiktokUrlPattern.test(url));
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          TikTok Video Viewer
        </h1>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter TikTok video URL"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Load Video
            </button>
          </div>
          {!isValidUrl && (
            <p className="text-red-500 mt-2">
              Please enter a valid TikTok URL
            </p>
          )}
        </form>

        {isValidUrl && url && <TikTokEmbed url={url} />}
      </div>
    </main>
  );
} 