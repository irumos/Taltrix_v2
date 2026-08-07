import { createFileRoute } from '@tanstack/react-router';
import { SignupPage } from '@/pages/SignupPage';

const TITLE = 'Create Account | TALTRIX';
const DESCRIPTION =
  'Create your student account to visualize code execution, analyze memory call stacks, and save programs.';

export const Route = createFileRoute('/signup')({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: SignupPage,
});
