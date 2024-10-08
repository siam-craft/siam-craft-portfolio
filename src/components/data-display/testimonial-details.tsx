import Image from "next/image";

import Typography from "@/components/general/typography";
import Card from "@/components/layout/card";
import { TestimonialDetails as TestimonialDetailsProps } from "@/lib/types";

const TestimonialDetails = ({
  personName,
  personAvatar,
  testimonial,
  title,
}: TestimonialDetailsProps) => {
  return (
    <Card className="mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 md:p-12 lg:w-1/3">
      <Image
        height={80}
        width={80}
        src={personAvatar!}
        alt={`${personName} avatar`}
        className="rounded-full"
        style={{ objectFit: "cover" }}
      ></Image>
      <Typography>&quot;{testimonial}&quot;</Typography>
      <div className="flex w-full flex-col gap-1">
        <Typography
          variant="subtitle"
          className="w-full text-center font-semibold text-gray-900"
        >
          {personName}
        </Typography>
        <Typography variant="body3" className="w-full text-center">
          {title}
        </Typography>
      </div>
    </Card>
  );
};

export default TestimonialDetails;
