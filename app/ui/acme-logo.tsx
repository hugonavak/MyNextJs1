import { GlobeAltIcon } from '@heroicons/react/24/outline';
//import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      // HNK commenting this out for now, haven't done fonts: className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
      className={`flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
