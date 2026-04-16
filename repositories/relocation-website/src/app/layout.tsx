import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Paraguay Business Establishment',
  description:
    'Professional relocation and business establishment service for Europeans in Paraguay.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
