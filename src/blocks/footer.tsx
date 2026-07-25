import { m } from '@/paraglide/messages.js';
import {
  CampaignFooter,
  type CampaignFooterGroup,
} from '@/components/campaign';

export function Footer() {
  const groups: CampaignFooterGroup[] = [
    {
      title: m['campaign.footer.manual'](),
      links: [
        { label: m['campaign.footer.gameplay'](), href: '/gameplay' },
        { label: m['campaign.footer.missions'](), href: '/missions' },
        { label: m['campaign.footer.arsenal'](), href: '/arsenal' },
        { label: m['campaign.footer.enemies'](), href: '/enemies' },
        { label: m['campaign.footer.vehicles'](), href: '/vehicles' },
      ],
    },
    {
      title: m['campaign.footer.resources'](),
      links: [
        { label: m['campaign.footer.guides'](), href: '/guides' },
        { label: m['campaign.footer.videos'](), href: '/videos' },
        { label: m['campaign.footer.news'](), href: '/news' },
        { label: m['campaign.footer.about'](), href: '/about' },
      ],
    },
    {
      title: m['campaign.footer.legal'](),
      links: [
        {
          label: m['campaign.footer.disclaimer_link'](),
          href: '/disclaimer',
        },
        { label: m['campaign.footer.privacy'](), href: '/privacy-policy' },
        { label: m['campaign.footer.terms'](), href: '/terms-of-service' },
      ],
    },
  ];

  return (
    <CampaignFooter
      groups={groups}
      disclaimer={m['campaign.footer.disclaimer']()}
      copyright={m['campaign.footer.copyright']()}
    />
  );
}
