export interface KpiCalculationResult {
  baseRent: number;
  currentKpi: number;
  previousKpi: number;
  changePct: number;
  adjustedRent: number;
  effectiveFrom: string;
}

export function calculateKpiAdjustment(baseRent: number, previousKpi: number = 130.5, currentKpi: number = 134.2): KpiCalculationResult {
  const changePct = ((currentKpi - previousKpi) / previousKpi) * 100;
  const adjustedRent = Math.round(baseRent * (1 + changePct / 100));

  return {
    baseRent,
    currentKpi,
    previousKpi,
    changePct: Math.round(changePct * 10) / 10,
    adjustedRent,
    effectiveFrom: new Date().toISOString().slice(0, 10)
  };
}
