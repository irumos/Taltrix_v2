import { createFileRoute } from '@tanstack/react-router';
import { LoginPage } from '@/pages/LoginPage';

const TITLE = 'Sign In | TALTRIX Code Execution Visualizer';
const DESCRIPTION =
  'Sign in with your college email to access your code execution visualizer, saved programs, and learning progress.';

export const Route = createFileRoute('/login')({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: LoginPage,
});
