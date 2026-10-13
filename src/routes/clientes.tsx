import { createFileRoute } from '@tanstack/react-router';
import { Maintenance } from '@/components/salesia/operations';
export const Route = createFileRoute('/clientes')({
 head: () => ({meta: [{title:'Clientes | SalesIA'},{name:'description',content:'Clientes de SalesIA. Gestión comercial interna con datos de ejemplo.'},{property:'og:title',content:'Clientes | SalesIA'},{property:'og:description',content:'Clientes de SalesIA, el espacio de gestión de tu equipo.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() { return <Maintenance module="Clientes"/>; }
