import { tDynamic } from '@/core/i18n/dynamic';
import { m } from '@/paraglide/messages.js';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const CAMPAIGN_FAQ_KEYS = [
  'official',
  'release',
  'coop',
  'spoilers',
  'updates',
] as const;

export function FAQ() {
  return (
    <section
      id="faq"
      className="bg-[#0a1015] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"
    >
      <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <div>
          <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-amber-300 uppercase">
            {m['campaign.home.faq.eyebrow']()}
          </p>
          <h2 className="font-display mt-4 text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.98] font-black tracking-[-0.025em] uppercase">
            {m['campaign.home.faq.title']()}
          </h2>
          <p className="mt-5 text-base leading-7 text-white/58">
            {m['campaign.home.faq.description']()}
          </p>
        </div>
        <Accordion className="w-full border-t border-white/12">
          {CAMPAIGN_FAQ_KEYS.map((key) => (
            <AccordionItem key={key} value={key} className="border-white/12">
              <AccordionTrigger className="cursor-pointer py-6 text-left text-base font-semibold tracking-[0.02em] text-white hover:text-cyan-200 hover:no-underline">
                {tDynamic(`campaign.home.faq.${key}.question`)}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-7 text-white/58 sm:text-base">
                {tDynamic(`campaign.home.faq.${key}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
