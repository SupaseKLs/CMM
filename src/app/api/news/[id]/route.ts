import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
  }

  const newsItem = await prisma.news.findUnique({
    where: { id: Number(id) },
  });

  if (!newsItem) {
    return NextResponse.json({ error: 'News not found' }, { status: 404 });
  }

  return NextResponse.json(newsItem);
}
