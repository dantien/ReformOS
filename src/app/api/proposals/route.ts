import { NextResponse } from 'next/server';

export async function GET() {
  const proposals = [
    {
      id: "prop_1",
      title: "Fornybar lokalenergi i lokalsamfunnet",
      description: "Forslag om å etablere felles sol- og batteriløsninger for lavere strømutgifter.",
      votes: 142,
      category: "Praktisk Gren",
      status: "AKTIV_AVSTEMNING",
      aiCompliance: "🌿 Verifisert mot Kjernekvalitets-katalogen (Qwen 1.5B)",
      createdAt: "2026-08-10",
    },
    {
      id: "prop_2",
      title: "Styrket tilbud for barn og unge i nærmiljøet",
      description: "Etablere gratis fritidsaktiviteter og trygge møteplasser i helgene.",
      votes: 98,
      category: "Sosial Gren",
      status: "VEDTATT",
      aiCompliance: "🌿 Verifisert mot Relasjonskvaliteten (Qwen 1.5B)",
      createdAt: "2026-08-08",
    },
    {
      id: "prop_3",
      title: "Uavhengig lokalmat-deling og grønnsaksdyrking",
      description: "Direkte avtaler med lokale bønder for kjemikaliefritt jordsmonn.",
      votes: 215,
      category: "Næringskvaliteten",
      status: "AKTIV_AVSTEMNING",
      aiCompliance: "🌿 Verifisert mot Næringskvaliteten (Qwen 1.5B)",
      createdAt: "2026-08-11",
    }
  ];

  return NextResponse.json({
    success: true,
    totalProposals: proposals.length,
    totalVotesCast: proposals.reduce((acc, p) => acc + p.votes, 0),
    proposals,
    provider: 'ReformOS Direct Democracy Engine',
  });
}
