import { createFileRoute } from '@tanstack/react-router';
import { Maintenance } from '@/components/salesia/operations';
export const Route = createFileRoute('/productos')({
 head: () => ({meta: [{title:'Productos | SalesIA'},{name:'description',content:'Productos de SalesIA. Gestión comercial interna con datos de ejemplo.'},{property:'og:title',content:'Productos | SalesIA'},{property:'og:description',content:'Productos de SalesIA, el espacio de gestión de tu equipo.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() { return <Maintenance module="Productos"/>; }
