import Image from "next/image";
import Person from "@/assets/person.svg";
import { Review } from "@/utils/constants";

const ReviewCard = ({ review }: { review: Review }) => {
  const { reviewerName, reviewerEmail, comment, rating, date } = review;
  return (
    <div className="flex items-start gap-4 p-3 bg-white shadow-card rounded-sm">
      <Image
        src={Person}
        alt="Reviewer profile"
        className="rounded-full"
        width={24}
        height={24}
      />

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-lg">{reviewerName}</h3>
          <span
            className={`font-bold ${
              rating < 3 ? "text-red-500" : "text-green-500"
            }`}
          >{`⭐ ${rating}`}</span>
        </div>

        {/* Review Comment */}
        <p className="mt-2 text-gray-700">{comment}</p>

        {/* Review Date */}
        <p className="mt-2 text-sm text-gray-500">
          {new Date(date).toLocaleDateString()} | {reviewerEmail}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
