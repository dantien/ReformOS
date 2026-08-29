# 🏛️ ReformOS — Universal Direct Democracy & Governance Engine
*(Open Source Framework for Member-Driven Direct Democracy)*

ReformOS is a universal, non-custodial, open-source governance engine designed for cooperatives, housing associations (borettslag), non-profit foundations, and sovereign communities.

## 🌟 Key Features

1. **1 Member = 1 Vote:** Cryptographically secured direct voting via Passkeys (OIDC/WebAuthn).
2. **Universal Plugin Architecture:** Plug-and-play governance rules (`universal-governance-plugin.ts`) allowing any organization to configure its own core values, branches, and voting rules without touching the core engine.
3. **0% AI Veto — 100% Human Sovereignty:** AI acts strictly as a neutral assistant (formatting and category mapping). AI algorithms cannot block proposals or override human votes.
4. **Automated Public Meeting Minutes:** Generates unalterable digital meeting protocols upon vote completion for total transparency.
5. **Dynamic Voting Thresholds:** Automatically applies 66% (2/3) qualified majority for constitutional/bylaw changes, and 51% simple majority for operational tasks.

---

## 🚀 Quick Start (Plugin Configuration)

Import and configure your organization's governance rules in `src/lib/plugins/universal-governance-plugin.ts`:

```typescript
import { OrganizationGovernanceConfig } from '@/lib/plugins/universal-governance-plugin';

export const MyCooperativePreset: OrganizationGovernanceConfig = {
  organizationId: "my-coop-01",
  organizationName: "Oslo Boligsamvirke",
  tagline: "Demokratisk Beboerstilling",
  coreValuesName: "Våre 4 Grunnverdier",
  coreValues: [
    "1. Trygghet og Bærekraft",
    "2. Åpent Regnskap",
    "3. Lik Stemmerett for Alle Beboere",
    "4. Godt Nabolag"
  ],
  branches: [
    "Drift & Vedlikehold",
    "Sosiale Tiltak",
    "Økonomi",
    "Styret"
  ],
  votingRule: "1 Beboer = 1 Stemme",
  localAiEngine: "qwen2.5:1.5b",
  allowPublicAudits: true,
  qualifiedMajorityPercentage: 66,
  memberRecallThresholdPercentage: 10,
};
```

---

## 📜 License

MIT License — Free and open for all organizations worldwide. Created by Seven Unity Network (SUN).
