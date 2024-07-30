import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Esta es la página de precios de mi servicio',
 keywords: ['About Page', 'Marcelo', 'Información', '...']
};

export default function PricingPage(){

    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}