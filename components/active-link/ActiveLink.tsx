'use client';

import Link from "next/link";
import style from "./ActiveLink.module.css"
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ( { path, text }: Props ) => {

    const pathName = usePathname();

  return (
    <Link className={ `${ style.link } ${ (pathName===path ) && style.activeLink}`} href={ path }>{ text }</Link>    
    // <Link className='mr-4' href={ path }>{ text }</Link>    
  )
}
