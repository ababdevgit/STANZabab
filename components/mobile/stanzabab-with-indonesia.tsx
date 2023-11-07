import Image from "next/image";

const MobileStanzababWithIndonesia = () => {
  return (
    <section className="px-6 py-8 flex flex-col justify-center items-center">
      <Image
        src="/images/stanzabab-with-indonesia.png"
        alt="Logo"
        width={132}
        height={23}
        className="object-contain"
      />
      <h2 className="mt-3 text-xs font-bold">WITH INDONESIA</h2>
      <div className="mt-3 space-y-5">
        <p className="text-xs text-[#262424] font-medium leading-[175%] text-center">
          {`The MLM project is a continuously appealing project that emerges
          worldwide, including in Asia, Europe, and North America. Many MLM
          projects start with confidence, but none have shown sustainability and
          ultimately fade into obscurity.`}
        </p>
        <p className="text-xs text-[#262424] font-medium leading-[175%] text-center">
          {`The critical failure of these projects is one: blind fundraising
          without an established business model. MLM projects typically see the
          funds raised being inversely spent over time, yet no project considers
          financial factors as they proceed with a business without a clear
          business model (or on the premise of "what business will be conducted
          in the future").`}
        </p>
        <p className="text-xs text-[#262424] font-medium leading-[175%] text-center">
          {`As a result, fundraising without business readiness inevitably transforms into a form that will be depleted over time, leaving investors in a position where the return of their investment becomes impossible.`}
        </p>
        <p className="text-xs text-[#262424] font-medium leading-[175%] text-center">
          {`STANZabab aims to initiate an MLM business based on a clear business model. Starting with obtaining the necessary licenses to conduct our business, we have partially completed the development of various platforms, including exchanges, casinos, and NFTs, and the fundamental ecosystem of the project is already fully implemented.`}
        </p>
      </div>
    </section>
  );
};

export default MobileStanzababWithIndonesia;
