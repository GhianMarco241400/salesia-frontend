import { createFileRoute } from '@tanstack/react-router';
import { Analytics } from '@/components/salesia/analysis';
export const Route = createFileRoute('/analytics')({
 head: () => ({meta: [{title:'Analytics | SalesIA'},{name:'description',content:'Analytics de SalesIA. Gestión comercial interna con datos de ejemplo.'},{property:'og:title',content:'Analytics | SalesIA'},{property:'og:description',content:'Analytics de SalesIA, el espacio de gestión de tu equipo.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() { return <Analytics/>; }
