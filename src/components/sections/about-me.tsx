import Image from "next/image";

import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import SiamFullPose from "/public/images/siam-full-pose.jpg";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={SiamFullPose}
              alt="Fullpose of Siam"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I am a passionate, self-taught developer who specializes in
            React.js, Next.js, and HeadlessCMS. I am enthusiastic about bringing
            both the technical and visual aspects of digital products to life,
            prioritizing user experience, pixel-perfect development, and writing
            clear, readable, and highly performant code.
          </Typography>
          <Typography>
            My web development journey began in 2020, and since then, I have
            continuously grown and evolved as a developer, embracing new
            challenges and staying up-to-date with the latest technologies.
          </Typography>
          <Typography>
            Now, in my mid-twenties, three years after starting my web
            development journey, I am proficient in building cutting-edge web
            applications using modern technologies such as Next.js, TypeScript,
            Tailwind CSS, Prisma, and HeadlessCMS (like Strapi.io). As a
            progressive thinker, I thoroughly enjoy working on projects from
            ideation to development, taking complete ownership of the
            product&apos;s creation.
          </Typography>
          <Typography>
            Apart from being in full-on developer mode, I also have a keen
            interest in traveling, reading books, and researching fundamental
            truths about reality and the universe.
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Passionate React Developer</Typography>
              <Typography component="li">Specialized in Next.js</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Expertise in HeadlessCMS</Typography>
              <Typography component="li">Pixel Perfect Development</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
