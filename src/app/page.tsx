
'use client';

import { RequestCard } from '@/components/request-card';
import { SocialFooter } from '@/components/social-footer';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function RequestComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const car = searchParams.get('car') || 'Toyota Camry V55';

  const requestData = {
    customerName: searchParams.get('customerName') || 'Jānis Bērziņš',
    cost: 50,
    status: 'Gaida apstiprinājumu',
    requestId: '78-12-GH',
    car: car,
    contactNumber: searchParams.get('contactNumber') || '+371 29 123 456',
  };

  const handleConfirm = () => {
    router.push('/confirmation');
  };

  return <RequestCard {...requestData} onConfirm={handleConfirm} />;
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh w-full items-center justify-between bg-background p-4 md:p-8 md:justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <RequestComponent />
      </Suspense>
      <SocialFooter />
    </main>
  );
}
