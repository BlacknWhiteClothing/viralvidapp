# TikTok Video Viewer

A web application that allows users to embed and view TikTok videos directly on the website while tracking view counts.

## Features

- Embed TikTok videos using video URLs
- Track view counts for each video
- Responsive design
- Input validation for TikTok URLs

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Copy a TikTok video URL (e.g., https://www.tiktok.com/@username/video/1234567890)
2. Paste the URL into the input field
3. Click "Load Video" to embed the video
4. The view count will be displayed below the video

## Technical Details

- Built with Next.js 13+ and TypeScript
- Uses TikTok's official embed API
- Implements server-side view counting
- Styled with Tailwind CSS

## Notes

- View counts are currently stored in memory and will reset when the server restarts
- In a production environment, you should implement persistent storage (e.g., database)
- The application respects TikTok's terms of service and embedding guidelines 