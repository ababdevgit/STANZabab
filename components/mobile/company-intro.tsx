import Image from "next/image";

const intro = [
  {
    label: "Indonesian Company Registration",
    image: "indonesian-company-registration.png",
    width: 86,
    height: 134,
    maxWidth: 110,
  },
  {
    label: "Indonesian cryptocurrency exchange  license by Bappebti",
    image: "indonesian-cryptocurrency-exchange-license-by-bappebti.png",
    width: 171,
    height: 106.5,
    maxWidth: 189,
  },
  {
    label: "RNG Certificate to operate platform on EU",
    image: "rng-certificate-to-operate-platform-on-eu.png",
    width: 90,
    height: 134,
    maxWidth: 136,
  },
  {
    label: "Indonesian MLM license",
    image: "indonesian-mlm-license.png",
    width: 163,
    height: 107,
    maxWidth: 80,
  },
];

const MobileCompanyIntro = () => {
  return (
    <div className="px-6 py-8 block md:hidden" id="mobileCompanyIntro">
      <div className="mb-10">
        <h2 className="text-lg font-bold mb-3">
          Company Intro
          <br />
          <span className="inline-block text-brand-primary mt-3">
            PT DNA Metaverse Jaya
          </span>
        </h2>
        <p className="text-xs text-[#262424] font-normal">
          Founded in Indonesia in 2019, our company is composed of over 50
          professionals from various fields, standing at the forefront of
          business innovation.
          <br />
          We hold an RNG (Random Number Generator) license and have been
          authorized to conduct MLM business by the Indonesian organization
          AP2LI.
          <br />
          Moreover, we have successfully concluded a usage contract with BAYC
          NFT and established a strategic partnership with the Indonesian
          cryptocurrency exchange company Kriptosh. With these licenses,
          contracts, and local partnerships, DNA Metaverse Jaya has launched
          STANZabab.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 gap-y-6">
        {intro.map((item, index) => (
          <div
            key={`company-intro-${index + 1}`}
            className="flex flex-col items-center justify-end"
          >
            <Image
              src={`/images/${item.image}`}
              alt={item.label}
              width={item.width}
              height={item.height}
              className="object-contain"
            />
            <p
              className="text-center mt-4 text-[8px] text-[#262424] text-base font-medium leading-[175%]"
              style={{
                maxWidth: item.maxWidth,
              }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileCompanyIntro;
