import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
  return (
    <section id="about" className="dark-bg">
      <div className="flex">
        <div className="flex-full">
          <AboutCard
            title="Leading recruitments"
            icon="/icons/design.svg"
            description="Experienced in leading global recruitment processes and finding top talent."
          />
          <AboutCard
            title="Tech talent sourcing"
            icon="/icons/code.svg"
            description="Skilled at sourcing top candidates globally."
          />
          <AboutCard
            title="Stakeholder management"
            icon="/icons/phone.svg"
            description="Expert in managing the expectations and needs of multiple parties in the recruitment process."
          />
        </div>

        <div className="flex-full about-text">
          <h1 className="white">Hej, I&#39;m Pietro Mattei</h1>
          <h4 className="white">
            I match top tech talent with exciting career opportunities.
          </h4>
          <br />
          <p className="gray">
            As a professional with years of experience in full-cycle
            recruitment, sourcing, stakeholder management, and employer
            branding, I have a strong track record of helping companies build
            diverse and talented teams.
            <br />
            <br />
            In my free time, I enjoy exploring new places, staying active
            through workouts, and relaxing with a good cup of coffee (I'm a bit
            of a coffee addict) and some video games. I'm a social person who
            values connecting with others and sharing ideas.
            <br />
            <br />
            Don't hesitate to reach out and say hello! 👋
          </p>
        </div>
      </div>

      <div className="flex partners justify-space">
        <Image
          src="/images/partners/Neo4j.svg"
          height={45}
          width={180}
          alt="Neo4j"
        />
        <Image
          src="/images/partners/IKEA.svg"
          height={45}
          width={180}
          alt="IKEA"
        />

        <Image
          src="/images/partners/randstad.svg"
          height={45}
          width={180}
          alt="Randstad"
        />
      </div>
    </section>
  );
}

type Props = {
  title: string;
  icon: string | StaticImageData;
  description: string;
  projects: number;
};

function AboutCard({ title, icon, description }: Props) {
  return (
    <div className="light-bg about-card">
      <div className="flex justify-space">
        <h3 className="green">{title}</h3>
        <Image src={icon} width={28} height={28} alt={title} />
      </div>
      <p className="white">{description}</p>
    </div>
  );
}
