import { createFileRoute } from '@tanstack/react-router';
import { Insights } from '@/components/salesia/analysis';
export const Route = createFileRoute('/insights')({
 head: () => ({meta: [{title:'Insights | SalesIA'},{name:'description',content:'Insights de SalesIA. Gestión comercial interna con datos de ejemplo.'},{property:'og:title',content:'Insights | SalesIA'},{property:'og:description',content:'Insights de SalesIA, el espacio de gestión de tu equipo.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() { return <Insights/>; }
