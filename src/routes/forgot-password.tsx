import { createFileRoute } from '@tanstack/react-router';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage';

const TITLE = 'Forgot Password | TALTRIX';
const DESCRIPTION = 'Request a password reset link for your TALTRIX account.';

export const Route = createFileRoute('/forgot-password')({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { property: 'og:title', content: TITLE },
    ],
  }),
  component: ForgotPasswordPage,
});
