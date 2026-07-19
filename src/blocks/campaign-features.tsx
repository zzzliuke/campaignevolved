import { m } from '@/paraglide/messages.js';
import { CinematicFeature } from '@/components/campaign';

export function MissionPreparation() {
  return (
    <CinematicFeature
      image={{
        src: '/images/campaign/mission-archive-vault.webp',
        alt: '',
        width: 1600,
        height: 900,
        position: '35% center',
      }}
      eyebrow={m['campaign.home.prepare.eyebrow']()}
      title={m['campaign.home.prepare.title']()}
      body={m['campaign.home.prepare.body']()}
      bullets={[
        m['campaign.home.prepare.bullet1'](),
        m['campaign.home.prepare.bullet2'](),
        m['campaign.home.prepare.bullet3'](),
      ]}
      action={{
        href: '/missions',
        label: m['campaign.home.prepare.action'](),
      }}
      alignment="right"
      tone="cyan"
      className="-mt-3 md:-mt-5"
    />
  );
}

export function FieldManualFeature() {
  return (
    <CinematicFeature
      image={{
        src: '/images/campaign/field-manual-expedition.webp',
        alt: '',
        width: 1600,
        height: 900,
        position: 'center center',
      }}
      eyebrow={m['campaign.home.field.eyebrow']()}
      title={m['campaign.home.field.title']()}
      body={m['campaign.home.field.body']()}
      bullets={[
        m['campaign.home.field.bullet1'](),
        m['campaign.home.field.bullet2'](),
        m['campaign.home.field.bullet3'](),
      ]}
      action={{
        href: '/guides',
        label: m['campaign.home.field.action'](),
      }}
      alignment="left"
      tone="amber"
      className="-mt-3 md:-mt-5"
    />
  );
}
