import React from "react";
import Members from "./Members";

const Aboutus: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>We will help you ship better apps, faster</strong> Our team of
          expert engineers has created the best user experiences in some of the
          most popular apps worldwide.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2> Our team</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-20">
          <Members
            id="marc"
            name="Marc"
            socialId="@mrousavy"
            link="https://github.com/mrousavy"
          />
          <Members
            id="allen"
            name="Allen"
            socialId="@Allenusail"
            link="https://github.com/mrousavy"
          />
          <Members
            id="helen"
            name="Helen"
            socialId="@HelenHs65"
            link="https://github.com/mrousavy"
          />
          <Members
            id="bob"
            name="Bob"
            socialId="@BobTHich"
            link="https://github.com/mrousavy"
          />

          <Members
            id="zeta"
            name="Zeta"
            socialId="@zeta465"
            link="https://github.com/mrousavy"
          />

          <Members
            id="ashely"
            name="Ashely"
            socialId="@asheleyDash"
            link="https://github.com/mrousavy"
          />
          <Members
            id="allen"
            name="Allen"
            socialId="@Allenusail"
            link="https://github.com/mrousavy"
          />
          <Members
            id="helen"
            name="Helen"
            socialId="@HelenHs65"
            link="https://github.com/mrousavy"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
