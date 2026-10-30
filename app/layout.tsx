import type { Metadata } from 'next';
export const metadata: Metadata = { title:'BambiBlush · YouTube personalizado', description:'Temas para personalizar YouTube, descargas gratuitas y novedades de BambiBlush.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es"><body>{children}</body></html>; }
