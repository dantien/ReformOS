import { NextResponse } from 'next/server';
import { fetchRelevantHearings } from '../../../../lib/stortingetApi';

export async function GET() {
  const hearings = await fetchRelevantHearings();
  return NextResponse.json({ success: true, hearings });
}
