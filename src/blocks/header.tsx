import { m } from '@/paraglide/messages.js';
import { CampaignHeader } from '@/components/campaign';
import { ThemeToggle } from '@/components/theme-toggle';

function HeaderActions() {
  return (
    <div className="text-white/70">
      <ThemeToggle />
    </div>
  );
}

export function Header() {
  const navItems = [
    { href: '/gameplay', label: m['campaign.nav.gameplay']() },
    { href: '/missions', label: m['campaign.nav.missions']() },
    { href: '/arsenal', label: m['campaign.nav.arsenal']() },
    { href: '/guides', label: m['campaign.nav.guides']() },
    { href: '/videos', label: m['campaign.nav.videos']() },
    { href: '/news', label: m['campaign.nav.news']() },
  ];

  return (
    <CampaignHeader
      navLabel={m['campaign.header.nav_label']()}
      homeLabel={m['campaign.header.home_label']()}
      menuOpenLabel={m['campaign.header.open_menu']()}
      menuCloseLabel={m['campaign.header.close_menu']()}
      navItems={navItems}
      actions={<HeaderActions />}
    />
  );
}
