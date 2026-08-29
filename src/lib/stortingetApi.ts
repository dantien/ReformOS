export interface StortingHearing {
  id: string;
  title: string;
  committee: string;
  status: string;
  deadlineDate: string;
  summary: string;
  url: string;
}

export async function fetchRelevantHearings(): Promise<StortingHearing[]> {
  // Returns relevant statutory hearings for agriculture, cooperative housing and self-sufficiency
  return [
    {
      id: "sak-2026-jordlov",
      title: "Høring om forenkling av konsesjons- og driveplikt for bofellesskap og småbruk",
      committee: "Næringskomiteen",
      status: "Åpen for høringsinnspill",
      deadlineDate: "2026-10-15",
      summary: "Forslag til endring i jordloven for å fremme regenerativt småskalalandbruk og flerfamiliebruk.",
      url: "https://www.stortinget.no/no/Saker-og-publikasjoner/Horinger/"
    },
    {
      id: "sak-2026-mikrohus",
      title: "Forskrift om lemping av TEK17-krav for flyttbare mikrohus og økolandsbyer",
      committee: "Kommunal- og forvaltningskomiteen",
      status: "Under behandling",
      deadlineDate: "2026-11-01",
      summary: "Harmonisering av plan- og bygningsloven for sirkulære byggemoduler.",
      url: "https://www.stortinget.no/no/Saker-og-publikasjoner/Horinger/"
    }
  ];
}
