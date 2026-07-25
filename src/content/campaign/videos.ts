export const VIDEO_SNAPSHOT_DATE = '2026-07-25';

export const videoCategories = [
  'Official',
  'Gameplay',
  'Reviews & Analysis',
  'Walkthroughs',
] as const;

export type CampaignVideoCategory = (typeof videoCategories)[number];

export interface CampaignVideo {
  rank: number;
  videoId: string;
  title: string;
  channel: string;
  publishedDate: string;
  viewCountSnapshot: number;
  viewCountLabel: string;
  category: CampaignVideoCategory;
  spoiler: boolean;
  thumbnail: string;
  watchUrl: string;
  embedUrl: string;
  duration: string;
  durationIso: string;
}

type CampaignVideoRecord = Omit<CampaignVideo, 'watchUrl' | 'embedUrl'>;

function withYouTubeUrls(video: CampaignVideoRecord): CampaignVideo {
  return {
    ...video,
    watchUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.videoId}`,
  };
}

/**
 * Public YouTube watch-page snapshot captured on July 25, 2026.
 *
 * This is a reproducible editorial sample, not a permanent global ranking.
 * View totals change continuously and YouTube search results can vary by
 * region, indexing state and personalization.
 */
const videoRecords: CampaignVideoRecord[] = [
  {
    rank: 1,
    videoId: 'hSjbIM0iegY',
    title:
      'Halo: Campaign Evolved | The Silent Cartographer – 13 Minute Gameplay Demo',
    channel: 'HALO',
    publishedDate: '2025-10-24',
    viewCountSnapshot: 2041159,
    viewCountLabel: '2,041,159',
    category: 'Gameplay',
    spoiler: false,
    thumbnail:
      '/images/campaign/videos/01-silent-cartographer-gameplay-demo.jpg',
    duration: '13:05',
    durationIso: 'PT13M5S',
  },
  {
    rank: 2,
    videoId: 'AMGJ7OMqyvI',
    title: 'Halo: Campaign Evolved - Official Reveal Trailer',
    channel: 'IGN',
    publishedDate: '2025-10-24',
    viewCountSnapshot: 1350257,
    viewCountLabel: '1,350,257',
    category: 'Official',
    spoiler: false,
    thumbnail: '/images/campaign/videos/02-official-reveal-trailer-ign.jpg',
    duration: '1:36',
    durationIso: 'PT1M36S',
  },
  {
    rank: 3,
    videoId: '175XWulP__Q',
    title:
      'Halo: Campaign Evolved - "The Silent Cartographer" Trailer | PS5 Games',
    channel: 'PlayStation',
    publishedDate: '2025-10-24',
    viewCountSnapshot: 1138367,
    viewCountLabel: '1,138,367',
    category: 'Official',
    spoiler: false,
    thumbnail: '/images/campaign/videos/03-silent-cartographer-ps5-trailer.jpg',
    duration: '1:38',
    durationIso: 'PT1M38S',
  },
  {
    rank: 4,
    videoId: '0MxBFXH2a_U',
    title: 'Halo: Campaign Evolved | Cinematic Story Trailer',
    channel: 'HALO',
    publishedDate: '2026-06-08',
    viewCountSnapshot: 1082404,
    viewCountLabel: '1,082,404',
    category: 'Official',
    spoiler: true,
    thumbnail: '/images/campaign/videos/04-cinematic-story-trailer-halo.jpg',
    duration: '3:16',
    durationIso: 'PT3M16S',
  },
  {
    rank: 5,
    videoId: 'C6JyOj-7tH8',
    title:
      'Halo: Campaign Evolved | 28 Minute Gameplay Demo - Assault on the Control Room',
    channel: 'HALO',
    publishedDate: '2026-06-10',
    viewCountSnapshot: 982834,
    viewCountLabel: '982,834',
    category: 'Gameplay',
    spoiler: true,
    thumbnail:
      '/images/campaign/videos/05-assault-control-room-gameplay-demo.jpg',
    duration: '28:13',
    durationIso: 'PT28M13S',
  },
  {
    rank: 6,
    videoId: 'Yauh8QU8IHE',
    title:
      'LIVE | Halo: Campaign Evolved | 24 Hour Stream | Legendary L.A.S.O - Part 1',
    channel: 'TheBurntPeanut',
    publishedDate: '2026-07-24',
    viewCountSnapshot: 968075,
    viewCountLabel: '968,075',
    category: 'Gameplay',
    spoiler: true,
    thumbnail: '/images/campaign/videos/06-legendary-laso-stream-part-1.jpg',
    duration: '11:54:58',
    durationIso: 'PT11H54M58S',
  },
  {
    rank: 7,
    videoId: 'Nkee7mEZ77Y',
    title:
      'Halo Remake Campaign Evolved First Gameplay Demo | Most Legendary FPS Comes to PS5 in 2026',
    channel: 'ENFANT TERRIBLE',
    publishedDate: '2025-10-24',
    viewCountSnapshot: 791062,
    viewCountLabel: '791,062',
    category: 'Gameplay',
    spoiler: false,
    thumbnail:
      '/images/campaign/videos/07-first-gameplay-demo-enfant-terrible.jpg',
    duration: '22:07',
    durationIso: 'PT22M7S',
  },
  {
    rank: 8,
    videoId: 'uPM_jD4gkWA',
    title: 'Halo Campaign Evolved',
    channel: 'Asmongold TV',
    publishedDate: '2025-10-24',
    viewCountSnapshot: 785238,
    viewCountLabel: '785,238',
    category: 'Reviews & Analysis',
    spoiler: false,
    thumbnail: '/images/campaign/videos/08-asmongold-reaction.jpg',
    duration: '24:33',
    durationIso: 'PT24M33S',
  },
  {
    rank: 9,
    videoId: 'G4sUx2nX5EQ',
    title:
      'Halo: Campaign Evolved | New Missions Trailer | Operation: Meteorite',
    channel: 'HALO',
    publishedDate: '2026-06-07',
    viewCountSnapshot: 781712,
    viewCountLabel: '781,712',
    category: 'Official',
    spoiler: true,
    thumbnail:
      '/images/campaign/videos/09-operation-meteorite-trailer-halo.jpg',
    duration: '2:29',
    durationIso: 'PT2M29S',
  },
  {
    rank: 10,
    videoId: 'efThjRym-ks',
    title: 'Halo: Campaign Evolved | The Silent Cartographer Trailer',
    channel: 'HALO',
    publishedDate: '2025-10-24',
    viewCountSnapshot: 734241,
    viewCountLabel: '734,241',
    category: 'Official',
    spoiler: false,
    thumbnail:
      '/images/campaign/videos/10-silent-cartographer-trailer-halo.jpg',
    duration: '1:36',
    durationIso: 'PT1M36S',
  },
  {
    rank: 11,
    videoId: 'Wn2m4Xhk2UE',
    title: 'Halo: Campaign Evolved - Cinematic Story Trailer | PS5 Games',
    channel: 'PlayStation',
    publishedDate: '2026-06-08',
    viewCountSnapshot: 610054,
    viewCountLabel: '610,054',
    category: 'Official',
    spoiler: true,
    thumbnail:
      '/images/campaign/videos/11-cinematic-story-trailer-playstation.jpg',
    duration: '3:19',
    durationIso: 'PT3M19S',
  },
  {
    rank: 12,
    videoId: 'T5l3c21WE0o',
    title: 'Halo: Campaign Evolved - Roundtable Reveal | PS5 Games',
    channel: 'PlayStation',
    publishedDate: '2025-10-24',
    viewCountSnapshot: 576719,
    viewCountLabel: '576,719',
    category: 'Official',
    spoiler: false,
    thumbnail: '/images/campaign/videos/12-roundtable-reveal-playstation.jpg',
    duration: '7:45',
    durationIso: 'PT7M45S',
  },
  {
    rank: 13,
    videoId: 'lLiHaCK8cyc',
    title:
      'LIVE | Halo: Campaign Evolved | 24 Hour Stream | Legendary L.A.S.O - Part 2',
    channel: 'TheBurntPeanut',
    publishedDate: '2026-07-24',
    viewCountSnapshot: 574837,
    viewCountLabel: '574,837',
    category: 'Gameplay',
    spoiler: true,
    thumbnail: '/images/campaign/videos/13-legendary-laso-stream-part-2.jpg',
    duration: '10:11:50',
    durationIso: 'PT10H11M50S',
  },
  {
    rank: 14,
    videoId: 'M60v2JaDDCQ',
    title: 'Halo Campaign Evolved is Not a Remake',
    channel: 'The Act Man',
    publishedDate: '2026-06-23',
    viewCountSnapshot: 545213,
    viewCountLabel: '545,213',
    category: 'Reviews & Analysis',
    spoiler: false,
    thumbnail: '/images/campaign/videos/14-not-a-remake-act-man.jpg',
    duration: '32:43',
    durationIso: 'PT32M43S',
  },
  {
    rank: 15,
    videoId: 'JtrC0G1eqfA',
    title: 'Halo: Campaign Evolved - Official Cinematic Story Trailer',
    channel: 'IGN',
    publishedDate: '2026-06-08',
    viewCountSnapshot: 532673,
    viewCountLabel: '532,673',
    category: 'Official',
    spoiler: true,
    thumbnail: '/images/campaign/videos/15-cinematic-story-trailer-ign.jpg',
    duration: '3:16',
    durationIso: 'PT3M16S',
  },
  {
    rank: 16,
    videoId: 'e-tXi1NC_aU',
    title: 'Halo: Campaign Evolved | Roundtable Reveal',
    channel: 'HALO',
    publishedDate: '2025-10-24',
    viewCountSnapshot: 509097,
    viewCountLabel: '509,097',
    category: 'Official',
    spoiler: false,
    thumbnail: '/images/campaign/videos/16-roundtable-reveal-halo.jpg',
    duration: '7:43',
    durationIso: 'PT7M43S',
  },
  {
    rank: 17,
    videoId: 'HhsxGagHirw',
    title:
      'Halo: Campaign Evolved - Official New Missions Gameplay Trailer | Xbox Games Showcase 2026',
    channel: 'IGN',
    publishedDate: '2026-06-07',
    viewCountSnapshot: 506633,
    viewCountLabel: '506,633',
    category: 'Official',
    spoiler: true,
    thumbnail:
      '/images/campaign/videos/17-new-missions-gameplay-trailer-ign.jpg',
    duration: '2:29',
    durationIso: 'PT2M29S',
  },
  {
    rank: 18,
    videoId: 'DPrm70EK2f0',
    title:
      'Halo: Campaign Evolved | New Missions Trailer | Xbox Games Showcase 2026',
    channel: 'XBOX',
    publishedDate: '2026-06-07',
    viewCountSnapshot: 470688,
    viewCountLabel: '470,688',
    category: 'Official',
    spoiler: true,
    thumbnail: '/images/campaign/videos/18-new-missions-trailer-xbox.jpg',
    duration: '2:29',
    durationIso: 'PT2M29S',
  },
  {
    rank: 19,
    videoId: 'WLeGiRgpFGk',
    title: 'Halo: Campaign Evolved - Before You Buy',
    channel: 'gameranx',
    publishedDate: '2026-07-23',
    viewCountSnapshot: 422730,
    viewCountLabel: '422,730',
    category: 'Reviews & Analysis',
    spoiler: true,
    thumbnail: '/images/campaign/videos/19-before-you-buy-gameranx.jpg',
    duration: '12:46',
    durationIso: 'PT12M46S',
  },
  {
    rank: 20,
    videoId: '6pQ0Ir5HmDw',
    title:
      'Halo Campaign Evolved Walkthrough Gameplay Part 1 - Intro (Full Game)',
    channel: 'theRadBrad',
    publishedDate: '2026-07-23',
    viewCountSnapshot: 293559,
    viewCountLabel: '293,559',
    category: 'Walkthroughs',
    spoiler: true,
    thumbnail: '/images/campaign/videos/20-walkthrough-part-1-radbrad.jpg',
    duration: '1:52:40',
    durationIso: 'PT1H52M40S',
  },
];

export const campaignVideos: CampaignVideo[] =
  videoRecords.map(withYouTubeUrls);
