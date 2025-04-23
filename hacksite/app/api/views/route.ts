import { NextResponse } from 'next/server';

// In a real application, this would be stored in a database
let views: { [key: string]: number } = {};

export async function POST(request: Request) {
  try {
    const { videoId } = await request.json();
    
    if (!videoId) {
      return NextResponse.json({ error: 'Video ID is required' }, { status: 400 });
    }

    // Increment views
    views[videoId] = (views[videoId] || 0) + 1;

    return NextResponse.json({ views: views[videoId] });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const videoId = url.searchParams.get('videoId');

  if (!videoId) {
    return NextResponse.json({ error: 'Video ID is required' }, { status: 400 });
  }

  return NextResponse.json({ views: views[videoId] || 0 });
} 