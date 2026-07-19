import { useSession } from '@/core/auth/client';
import { Link } from '@/core/i18n/navigation';
import { m } from '@/paraglide/messages.js';
import { CampaignHeader } from '@/components/campaign';
import { LocaleSelector } from '@/components/locale-selector';
import { SiteUserMenu } from '@/components/site-user-menu';
import { ThemeToggle } from '@/components/theme-toggle';

function HeaderActions() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
      <LocaleSelector className="text-white/70 hover:bg-white/10 hover:text-white" />
      <div className="text-white/70">
        <ThemeToggle />
      </div>
      {user ? (
        <SiteUserMenu
          name={user.name || 'User'}
          email={user.email}
          image={user.image}
        />
      ) : (
        <Link
          href="/sign-in"
          className="inline-flex min-h-10 items-center border border-cyan-300/45 px-4 text-[0.65rem] font-bold tracking-[0.16em] text-cyan-200 uppercase transition hover:bg-cyan-300 hover:text-[#061116] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
        >
          {m['common.sign.sign_in_title']()}
        </Link>
      )}
    </>
  );
}

export function Header() {
  const navItems = [
    { href: '/missions', label: m['campaign.nav.missions']() },
    { href: '/arsenal', label: m['campaign.nav.arsenal']() },
    { href: '/enemies', label: m['campaign.nav.enemies']() },
    { href: '/vehicles', label: m['campaign.nav.vehicles']() },
    { href: '/guides', label: m['campaign.nav.guides']() },
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
