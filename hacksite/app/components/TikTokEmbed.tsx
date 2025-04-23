'use client';

import { useEffect, useRef, useState } from 'react';

interface TikTokEmbedProps {
  url: string;
}

const TikTokEmbed = ({ url }: TikTokEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [views, setViews] = useState<number | null>(null);

  const getVideoId = (url: string): string => {
    const match = url.match(/\/video\/(\d+)/);
    return match ? match[1] : '';
  };

  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const videoId = getVideoId(url);
    if (url && containerRef.current && videoId) {
      // Clear previous embed
      containerRef.current.innerHTML = '';
      
      // Create blockquote element
      const blockquote = document.createElement('blockquote');
      blockquote.className = 'tiktok-embed';
      blockquote.cite = url;
      blockquote.setAttribute('data-video-id', videoId);
      
      // Add blockquote to container
      containerRef.current.appendChild(blockquote);
      
      // Trigger embed
      if (window.tiktok) {
        (window as any).tiktok.loadEmbeds();
      }

      // Track view
      fetch('/api/views', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoId }),
      })
        .then(response => response.json())
        .then(data => setViews(data.views))
        .catch(console.error);
    }
  }, [url]);

  return (
    <div className="space-y-4">
      <div ref={containerRef} className="tiktok-container w-full max-w-md mx-auto">
        {!url && <div className="text-center p-4">Enter a TikTok URL to embed a video</div>}
      </div>
      {views !== null && (
        <div className="text-center text-sm text-gray-600">
          Views: {views}
        </div>
      )}
    </div>
  );
};

export default TikTokEmbed; 