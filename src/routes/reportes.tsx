import { createFileRoute } from '@tanstack/react-router';
import { Reportes } from '@/components/salesia/analysis';
export const Route = createFileRoute('/reportes')({
 head: () => ({meta: [{title:'Reportes | SalesIA'},{name:'description',content:'Reportes de SalesIA. Gestión comercial interna con datos de ejemplo.'},{property:'og:title',content:'Reportes | SalesIA'},{property:'og:description',content:'Reportes de SalesIA, el espacio de gestión de tu equipo.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() { return <Reportes/>; }
