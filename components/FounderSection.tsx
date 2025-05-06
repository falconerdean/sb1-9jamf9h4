'use client';

import Image from 'next/image';

export function FounderSection() {
  return (
    <section className="bg-[#899B7A] py-16 relative">
      <div className="container-width px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl border-8 border-white">
            <Image
              src="https://try-insite.github.io/site-data/kevin/keyheadshot.jpeg"
              alt="Kevin Ford - Founder"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-white">
            <h2 className="text-4xl font-serif mb-6">The Founder</h2>
            <h3 className="text-2xl mb-4">Kevin Ford, LPC, LCADC</h3>
            <p className="mb-6 leading-relaxed text-lg">
              I'm <span className="text-[#FFC58E] font-bold">Kevin Ford</span>, a <span className="text-[#FFC58E] font-bold">Licensed Professional Counselor</span> and <span className="text-[#FFC58E] font-bold">Licensed Clinical Alcohol and Drug Counselor</span> with 17 years of experience, providing telehealth services to clients in the <span className="text-[#FFC58E] font-bold">New Jersey</span> area. I graduated from Georgian Court University and specialize in helping individuals manage anxiety, depression, and substance abuse.
            </p>
            <p className="mb-6 leading-relaxed text-lg">
              My approach is rooted in evidence-based practices, and I tailor each session to meet the unique needs of my clients. Through virtual therapy, I offer convenient and accessible care, allowing clients to receive support from the comfort of their own homes.
            </p>
            <p className="leading-relaxed text-lg">
              My goal is to create a compassionate and empowering space for <span className="text-[#FFC58E] font-bold">personal growth</span> and <span className="text-[#FFC58E] font-bold">lasting change</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}