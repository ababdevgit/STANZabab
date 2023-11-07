import Image from "next/image";

const StanzababWithIndonesia = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto px-6 pt-[122px] pb-[183px] flex flex-col items-center justify-center">
      <Image
        src="/images/stanzabab-with-indonesia.png"
        alt="Logo"
        width={282}
        height={50}
        className="object-contain"
      />
      <h2 className="mt-[22px] text-[30px] font-bold">WITH INDONESIA</h2>
      <div className="mt-[121px] space-y-10">
        <p className="text-[20px] text-[#262424] font-medium leading-[175%] text-center">
          {`The MLM project is a continuously appealing project that emerges
          worldwide, including in Asia, Europe, and North America. Many MLM
          projects start with confidence, but none have shown sustainability and
          ultimately fade into obscurity.`}
        </p>
        <p className="text-[20px] text-[#262424] font-medium leading-[175%] text-center">
          {`The critical failure of these projects is one: blind fundraising
          without an established business model. MLM projects typically see the
          funds raised being inversely spent over time, yet no project considers
          financial factors as they proceed with a business without a clear
          business model (or on the premise of "what business will be conducted
          in the future").`}
        </p>
        <p className="text-[20px] text-[#262424] font-medium leading-[175%] text-center">
          {`As a result, fundraising without business readiness inevitably transforms into a form that will be depleted over time, leaving investors in a position where the return of their investment becomes impossible.`}
        </p>
        <p className="text-[20px] text-[#262424] font-medium leading-[175%] text-center">
          {`STANZabab aims to initiate an MLM business based on a clear business model. Starting with obtaining the necessary licenses to conduct our business, we have partially completed the development of various platforms, including exchanges, casinos, and NFTs, and the fundamental ecosystem of the project is already fully implemented.`}
        </p>
      </div>
    </section>
  );
};

export default StanzababWithIndonesia;
