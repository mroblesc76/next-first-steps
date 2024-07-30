import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'About Page',
 description: 'Esta es la página de Acerca de mi servicio',
 keywords: ['About Page', 'Marcelo', 'Información', '...']
};

export default function AboutPage(){


    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
} 