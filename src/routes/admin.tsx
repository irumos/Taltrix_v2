import { createFileRoute } from '@tanstack/react-router';
import { ProtectedRoute } from '@/components/common/ProtectedRoute';
import { AdminDashboardPage } from '@/pages/AdminDashboardPage';

const TITLE = 'Admin Portal | TALTRIX';
const DESCRIPTION = 'TALTRIX Platform Administration & Academic Telemetry';

export const Route = createFileRoute('/admin')({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
    ],
  }),
  component: () => (
    <ProtectedRoute allowedRoles={['admin']}>
      <AdminDashboardPage />
    </ProtectedRoute>
  ),
});
