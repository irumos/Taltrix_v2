import { createFileRoute } from '@tanstack/react-router';
import { ProtectedRoute } from '@/components/common/ProtectedRoute';
import { StudentDashboardPage } from '@/pages/StudentDashboardPage';

const TITLE = 'Student Dashboard | TALTRIX';
const DESCRIPTION = 'TALTRIX Student Workspace & Academic Dashboard';

export const Route = createFileRoute('/dashboard')({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
    ],
  }),
  component: () => (
    <ProtectedRoute allowedRoles={['student', 'admin', 'guest']}>
      <StudentDashboardPage />
    </ProtectedRoute>
  ),
});
