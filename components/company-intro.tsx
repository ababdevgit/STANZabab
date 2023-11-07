import Image from "next/image";

const intro = [
  {
    label: "Indonesian Company Registration",
    image: "indonesian-company-registration.png",
    width: 166,
    height: 264,
    maxWidth: 180,
  },
  {
    label: "Indonesian cryptocurrency exchange  license by Bappebti",
    image: "indonesian-cryptocurrency-exchange-license-by-bappebti.png",
    width: 333,
    height: 210,
    maxWidth: 380,
  },
  {
    label: "RNG Certificate to operate platform on EU",
    image: "rng-certificate-to-operate-platform-on-eu.png",
    width: 173,
    height: 264,
    maxWidth: 280,
  },
  {
    label: "Indonesian MLM license",
    image: "indonesian-mlm-license.png",
    width: 317,
    height: 210,
    maxWidth: 180,
  },
];

const CompanyIntro = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto px-6 py-[180px] flex items-center justify-center gap-[113px]">
      <div>
        <h2 className="text-[30px] font-bold mb-[102px]">
          Company Intro
          <br />
          <span className="inline-block text-brand-primary mt-4">
            PT DNA Metaverse Jaya
          </span>
        </h2>
        <p className="max-w-[626px] text-[20px] text-[#262424] font-normal">
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
      <div className="grid grid-cols-2 gap-y-10 gap-x-10">
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
              className="text-center mt-4 text-[#262424] text-base font-medium leading-[175%]"
              style={{
                maxWidth: item.maxWidth,
              }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyIntro;
