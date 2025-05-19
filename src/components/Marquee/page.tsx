import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

interface Review {
  img: string;
}

const reviews: Review[] = [
  { img: "/images/image 144.png" },
  { img: "/images/image 144.png" },
  { img: "/images/image 144.png" },
  { img: "/images/image 144.png" },
  { img: "/images/image 144.png" },
  { img: "/images/image 144.png" },
  { img: "/images/image 144.png" },
  { img: "/images/image 144.png" },
  { img: "/images/image 144.png" },
];

const ReviewCard: React.FC<Review> = ({ img }) => {
  return (
    <figure className={cn("relative w-[500px] h-full overflow-hidden")}>
      <div className="flex flex-row items-center">
        <img
          className="rounded-sm w-full h-full"
          width="32"
          height="32"
          alt="img"
          src={img}
        />
      </div>
    </figure>
  );
};

const MarqueeDemo: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      {/* Marquee Section */}
      <Marquee>
        {reviews.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeDemo;
