import { NextResponse } from 'next/server';
import { calculateKpiAdjustment } from '../../../../lib/ssbKpiClient';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { baseRent, previousKpi, currentKpi } = body;
    const result = calculateKpiAdjustment(Number(baseRent) || 10000, previousKpi, currentKpi);
    return NextResponse.json({ success: true, result });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
