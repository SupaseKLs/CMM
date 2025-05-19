import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

interface Review {
  img: string;
}

const reviews: Review[] = [
  { img: "https://plus.unsplash.com/premium_photo-1664475717106-89e8e6ffb632?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { img: "https://plus.unsplash.com/premium_photo-1664476507843-9eff6feb6e04?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { img: "https://plus.unsplash.com/premium_photo-1664478111011-b3eb6e30deec?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { img: "https://plus.unsplash.com/premium_photo-1664475740896-49ba4cf85c1f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { img: "https://plus.unsplash.com/premium_photo-1664478057306-0523dbbde6ad?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { img: "https://plus.unsplash.com/premium_photo-1664476347408-36332a38c429?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { img: "https://plus.unsplash.com/premium_photo-1664475666724-8dff6a3cf38d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { img: "https://plus.unsplash.com/premium_photo-1664476856288-9648316b362f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { img: "https://plus.unsplash.com/premium_photo-1664475732539-b9853eefb330?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const ReviewCard: React.FC<Review> = ({ img }) => {
  return (
    <figure className={cn("relative w-[500px] h-full overflow-hidden")}>
      <div className="flex flex-row items-center">
        <img
          className="rounded-sm w-full h-full object-contain"
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
