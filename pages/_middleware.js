/*eslint-disable */
import { NextResponse } from 'next/server';

export function middleware(req) {
  if (req.nextUrl.pathname === '/delivery') {
    return NextResponse.redirect('https://www.goomer.app/burton-cervejas-artesanais-1');
  }
  return NextResponse.redirect('https://www.instagram.com/burtonsjc/');
}
