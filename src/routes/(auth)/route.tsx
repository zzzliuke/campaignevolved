import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)')({
  head: () => ({
    meta: [
      { name: 'robots', content: 'noindex, nofollow, noarchive' },
      { name: 'googlebot', content: 'noindex, nofollow, noarchive' },
    ],
  }),
  component: Outlet,
});
