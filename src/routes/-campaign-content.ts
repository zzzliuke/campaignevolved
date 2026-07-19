import { m } from '@/paraglide/messages.js';

import type { CampaignLocale } from './-campaign-editorial';

export interface MissionEntry {
  slug: string;
  number: string;
  group: string;
  title: string;
  summary: string;
  overview: string;
  approach: string;
  objectives: string[];
  warning: string;
  checklist: string[];
  coop: string;
  provisional?: boolean;
}

export function getMissionEntries(locale: CampaignLocale): MissionEntry[] {
  const options = { locale };

  return [
    {
      slug: 'the-pillar-of-autumn',
      number: '01',
      group: m['campaign.missions.group.classic']({}, options),
      title: m['campaign.missions.pillar.title']({}, options),
      summary: m['campaign.missions.pillar.summary']({}, options),
      overview: m['campaign.missions.pillar.overview']({}, options),
      approach: m['campaign.missions.pillar.approach']({}, options),
      objectives: [
        m['campaign.missions.pillar.objective1']({}, options),
        m['campaign.missions.pillar.objective2']({}, options),
        m['campaign.missions.pillar.objective3']({}, options),
      ],
      warning: m['campaign.missions.pillar.warning']({}, options),
      checklist: [
        m['campaign.missions.pillar.check1']({}, options),
        m['campaign.missions.pillar.check2']({}, options),
        m['campaign.missions.pillar.check3']({}, options),
      ],
      coop: m['campaign.missions.pillar.coop']({}, options),
    },
    {
      slug: 'halo',
      number: '02',
      group: m['campaign.missions.group.classic']({}, options),
      title: m['campaign.missions.halo.title']({}, options),
      summary: m['campaign.missions.halo.summary']({}, options),
      overview: m['campaign.missions.halo.overview']({}, options),
      approach: m['campaign.missions.halo.approach']({}, options),
      objectives: [
        m['campaign.missions.halo.objective1']({}, options),
        m['campaign.missions.halo.objective2']({}, options),
        m['campaign.missions.halo.objective3']({}, options),
      ],
      warning: m['campaign.missions.halo.warning']({}, options),
      checklist: [
        m['campaign.missions.halo.check1']({}, options),
        m['campaign.missions.halo.check2']({}, options),
        m['campaign.missions.halo.check3']({}, options),
      ],
      coop: m['campaign.missions.halo.coop']({}, options),
    },
    {
      slug: 'truth-and-reconciliation',
      number: '03',
      group: m['campaign.missions.group.classic']({}, options),
      title: m['campaign.missions.truth.title']({}, options),
      summary: m['campaign.missions.truth.summary']({}, options),
      overview: m['campaign.missions.truth.overview']({}, options),
      approach: m['campaign.missions.truth.approach']({}, options),
      objectives: [
        m['campaign.missions.truth.objective1']({}, options),
        m['campaign.missions.truth.objective2']({}, options),
        m['campaign.missions.truth.objective3']({}, options),
      ],
      warning: m['campaign.missions.truth.warning']({}, options),
      checklist: [
        m['campaign.missions.truth.check1']({}, options),
        m['campaign.missions.truth.check2']({}, options),
        m['campaign.missions.truth.check3']({}, options),
      ],
      coop: m['campaign.missions.truth.coop']({}, options),
    },
    {
      slug: 'the-silent-cartographer',
      number: '04',
      group: m['campaign.missions.group.classic']({}, options),
      title: m['campaign.missions.cartographer.title']({}, options),
      summary: m['campaign.missions.cartographer.summary']({}, options),
      overview: m['campaign.missions.cartographer.overview']({}, options),
      approach: m['campaign.missions.cartographer.approach']({}, options),
      objectives: [
        m['campaign.missions.cartographer.objective1']({}, options),
        m['campaign.missions.cartographer.objective2']({}, options),
        m['campaign.missions.cartographer.objective3']({}, options),
      ],
      warning: m['campaign.missions.cartographer.warning']({}, options),
      checklist: [
        m['campaign.missions.cartographer.check1']({}, options),
        m['campaign.missions.cartographer.check2']({}, options),
        m['campaign.missions.cartographer.check3']({}, options),
      ],
      coop: m['campaign.missions.cartographer.coop']({}, options),
    },
    {
      slug: 'assault-on-the-control-room',
      number: '05',
      group: m['campaign.missions.group.classic']({}, options),
      title: m['campaign.missions.control.title']({}, options),
      summary: m['campaign.missions.control.summary']({}, options),
      overview: m['campaign.missions.control.overview']({}, options),
      approach: m['campaign.missions.control.approach']({}, options),
      objectives: [
        m['campaign.missions.control.objective1']({}, options),
        m['campaign.missions.control.objective2']({}, options),
        m['campaign.missions.control.objective3']({}, options),
      ],
      warning: m['campaign.missions.control.warning']({}, options),
      checklist: [
        m['campaign.missions.control.check1']({}, options),
        m['campaign.missions.control.check2']({}, options),
        m['campaign.missions.control.check3']({}, options),
      ],
      coop: m['campaign.missions.control.coop']({}, options),
    },
    {
      slug: '343-guilty-spark',
      number: '06',
      group: m['campaign.missions.group.classic']({}, options),
      title: m['campaign.missions.spark.title']({}, options),
      summary: m['campaign.missions.spark.summary']({}, options),
      overview: m['campaign.missions.spark.overview']({}, options),
      approach: m['campaign.missions.spark.approach']({}, options),
      objectives: [
        m['campaign.missions.spark.objective1']({}, options),
        m['campaign.missions.spark.objective2']({}, options),
        m['campaign.missions.spark.objective3']({}, options),
      ],
      warning: m['campaign.missions.spark.warning']({}, options),
      checklist: [
        m['campaign.missions.spark.check1']({}, options),
        m['campaign.missions.spark.check2']({}, options),
        m['campaign.missions.spark.check3']({}, options),
      ],
      coop: m['campaign.missions.spark.coop']({}, options),
    },
    {
      slug: 'the-library',
      number: '07',
      group: m['campaign.missions.group.classic']({}, options),
      title: m['campaign.missions.library.title']({}, options),
      summary: m['campaign.missions.library.summary']({}, options),
      overview: m['campaign.missions.library.overview']({}, options),
      approach: m['campaign.missions.library.approach']({}, options),
      objectives: [
        m['campaign.missions.library.objective1']({}, options),
        m['campaign.missions.library.objective2']({}, options),
        m['campaign.missions.library.objective3']({}, options),
      ],
      warning: m['campaign.missions.library.warning']({}, options),
      checklist: [
        m['campaign.missions.library.check1']({}, options),
        m['campaign.missions.library.check2']({}, options),
        m['campaign.missions.library.check3']({}, options),
      ],
      coop: m['campaign.missions.library.coop']({}, options),
    },
    {
      slug: 'two-betrayals',
      number: '08',
      group: m['campaign.missions.group.classic']({}, options),
      title: m['campaign.missions.betrayals.title']({}, options),
      summary: m['campaign.missions.betrayals.summary']({}, options),
      overview: m['campaign.missions.betrayals.overview']({}, options),
      approach: m['campaign.missions.betrayals.approach']({}, options),
      objectives: [
        m['campaign.missions.betrayals.objective1']({}, options),
        m['campaign.missions.betrayals.objective2']({}, options),
        m['campaign.missions.betrayals.objective3']({}, options),
      ],
      warning: m['campaign.missions.betrayals.warning']({}, options),
      checklist: [
        m['campaign.missions.betrayals.check1']({}, options),
        m['campaign.missions.betrayals.check2']({}, options),
        m['campaign.missions.betrayals.check3']({}, options),
      ],
      coop: m['campaign.missions.betrayals.coop']({}, options),
    },
    {
      slug: 'keyes',
      number: '09',
      group: m['campaign.missions.group.classic']({}, options),
      title: m['campaign.missions.keyes.title']({}, options),
      summary: m['campaign.missions.keyes.summary']({}, options),
      overview: m['campaign.missions.keyes.overview']({}, options),
      approach: m['campaign.missions.keyes.approach']({}, options),
      objectives: [
        m['campaign.missions.keyes.objective1']({}, options),
        m['campaign.missions.keyes.objective2']({}, options),
        m['campaign.missions.keyes.objective3']({}, options),
      ],
      warning: m['campaign.missions.keyes.warning']({}, options),
      checklist: [
        m['campaign.missions.keyes.check1']({}, options),
        m['campaign.missions.keyes.check2']({}, options),
        m['campaign.missions.keyes.check3']({}, options),
      ],
      coop: m['campaign.missions.keyes.coop']({}, options),
    },
    {
      slug: 'the-maw',
      number: '10',
      group: m['campaign.missions.group.classic']({}, options),
      title: m['campaign.missions.maw.title']({}, options),
      summary: m['campaign.missions.maw.summary']({}, options),
      overview: m['campaign.missions.maw.overview']({}, options),
      approach: m['campaign.missions.maw.approach']({}, options),
      objectives: [
        m['campaign.missions.maw.objective1']({}, options),
        m['campaign.missions.maw.objective2']({}, options),
        m['campaign.missions.maw.objective3']({}, options),
      ],
      warning: m['campaign.missions.maw.warning']({}, options),
      checklist: [
        m['campaign.missions.maw.check1']({}, options),
        m['campaign.missions.maw.check2']({}, options),
        m['campaign.missions.maw.check3']({}, options),
      ],
      coop: m['campaign.missions.maw.coop']({}, options),
    },
    {
      slug: 'meteor-incursion',
      number: 'M-01',
      group: m['campaign.missions.group.meteor']({}, options),
      title: m['campaign.missions.meteor1.title']({}, options),
      summary: m['campaign.missions.meteor1.summary']({}, options),
      overview: m['campaign.missions.meteor1.overview']({}, options),
      approach: m['campaign.missions.meteor1.approach']({}, options),
      objectives: [
        m['campaign.missions.meteor.shared.objective1']({}, options),
        m['campaign.missions.meteor.shared.objective2']({}, options),
        m['campaign.missions.meteor.shared.objective3']({}, options),
      ],
      warning: m['campaign.missions.meteor.shared.warning']({}, options),
      checklist: [
        m['campaign.missions.meteor.shared.check1']({}, options),
        m['campaign.missions.meteor.shared.check2']({}, options),
        m['campaign.missions.meteor.shared.check3']({}, options),
      ],
      coop: m['campaign.missions.meteor.shared.coop']({}, options),
      provisional: true,
    },
    {
      slug: 'meteor-breakpoint',
      number: 'M-02',
      group: m['campaign.missions.group.meteor']({}, options),
      title: m['campaign.missions.meteor2.title']({}, options),
      summary: m['campaign.missions.meteor2.summary']({}, options),
      overview: m['campaign.missions.meteor2.overview']({}, options),
      approach: m['campaign.missions.meteor2.approach']({}, options),
      objectives: [
        m['campaign.missions.meteor.shared.objective1']({}, options),
        m['campaign.missions.meteor.shared.objective2']({}, options),
        m['campaign.missions.meteor.shared.objective3']({}, options),
      ],
      warning: m['campaign.missions.meteor.shared.warning']({}, options),
      checklist: [
        m['campaign.missions.meteor.shared.check1']({}, options),
        m['campaign.missions.meteor.shared.check2']({}, options),
        m['campaign.missions.meteor.shared.check3']({}, options),
      ],
      coop: m['campaign.missions.meteor.shared.coop']({}, options),
      provisional: true,
    },
    {
      slug: 'meteor-extraction',
      number: 'M-03',
      group: m['campaign.missions.group.meteor']({}, options),
      title: m['campaign.missions.meteor3.title']({}, options),
      summary: m['campaign.missions.meteor3.summary']({}, options),
      overview: m['campaign.missions.meteor3.overview']({}, options),
      approach: m['campaign.missions.meteor3.approach']({}, options),
      objectives: [
        m['campaign.missions.meteor.shared.objective1']({}, options),
        m['campaign.missions.meteor.shared.objective2']({}, options),
        m['campaign.missions.meteor.shared.objective3']({}, options),
      ],
      warning: m['campaign.missions.meteor.shared.warning']({}, options),
      checklist: [
        m['campaign.missions.meteor.shared.check1']({}, options),
        m['campaign.missions.meteor.shared.check2']({}, options),
        m['campaign.missions.meteor.shared.check3']({}, options),
      ],
      coop: m['campaign.missions.meteor.shared.coop']({}, options),
      provisional: true,
    },
  ];
}
