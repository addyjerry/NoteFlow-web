import React, { useState } from "react";
import MyButton from "./MyButton";
import { reviews } from "./Questions/reviews";
import { rev } from "./Questions/reviews";
import { rev3 } from "./Questions/reviews";
import { ChevronDown, ChevronUp } from "lucide-react";

const Reviews = () => {
  const [showMore, setShowMore] = useState(false);
  const [rev3length, setrev3Length] = useState(3);
  const [revlength, setrevLength] = useState(3);
  const [reviewslength, setreviewsLength] = useState(3);

  const handleShowMore = () => {
    setShowMore(!showMore);
    if (!showMore) {
      setrev3Length(rev3.length);
      setrevLength(rev.length);
      setreviewsLength(reviews.length);
    } else {
      setrev3Length(3);
      setrevLength(3);
      setreviewsLength(3);
    }
  };
  return (
    <section className="place-items-center py-20  ">
      <MyButton className="bg-[#44e5e7]/100 text-black border-none shadow">
        Testimonials
      </MyButton>
      <p className="font-medium lg:text-5xl/15 text-2xl lg:w-3xl w-sm pt-8 text-center dark:text-white lg:ml-0 lg:place-self-center ">
        What Our AI-powered notetakers have to say
      </p>
      <p className="md:text-lg/10 text-sm dark:text-[rgba(199,247,248,1)] font-200 md:px-20 py-6 text-center place-self-center md:w-full lg:w-3xl  w-sm px-15  ">
        NoteFlow has helped 1000's supercharge their productivity with cutting
        edge AI note taking tools
      </p>
      <div className="flex p-5 lg:flex-nowrap gap-5 justify-center">
        <div className="block mx-9 md:mx-0">
          {reviews.slice(0, reviewslength).map((review) => (
            <div
              key={review.id}
              className="block rounded-xl  lg:p-10 p-5 my-5 font-300 w-[100%] max-w-[24rem] dark:bg-[#0e2e2e] bg-[#44e5e7]/100 text-white "
            >
              <img
                src={review.rating}
                alt="rating"
                className="py-5 md:px-3  "
              />
              <p className="text-[rgba(236, 252, 253, 1)] md:p-3 text-sm  lg:text-lg">
                {review.text}
              </p>
              <div className="flex gap-3 py-5 md:px-3">
                <img
                  src={review.avatar}
                  alt="avatar"
                  className="lg:size-15 size-10 "
                />
                <div className="lg:text-xl text-sm">
                  <h3 className=" font-700 p-1 dark:text-[#44e5e7]/100 text-green-700 text-sm  ">
                    {review.name}
                  </h3>
                  <p>{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:block hidden mx-9 md:mx-0">
          {rev3.slice(0, rev3length).map((review) => (
            <div
              key={review.id}
              className="block  rounded-xl lg:p-10 p-5 my-5 text-lg font-300 w-[100%] max-w-[24rem] dark:bg-[#0e2e2e] bg-[#44e5e7]/100 text-white "
            >
              <img
                src={review.rating}
                alt="rating"
                className="py-5 w-sm px-3"
              />
              <p className="text-[rgba(236, 252, 253, 1)] p-3 text-sm  lg:text-lg">
                {review.text}
              </p>
              <div className="flex gap-3 py-5 px-3">
                <img
                  src={review.avatar}
                  alt="avatar"
                  className="lg:size-15 size-10 "
                />
                <div className="lg:text-xl text-sm">
                  <h3 className=" font-700 p-1 dark:text-[#44e5e7]/100 text-green-700">
                    {review.name}
                  </h3>
                  <p>{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:block hidden mx-9 md:mx-0">
          {rev.slice(0, revlength).map((review) => (
            <div
              key={review.id}
              className="md:block hidden  rounded-xl lg:p-10 p-5 my-5  text-lg font-300 w-[100%] max-w-[24rem]   dark:bg-[#0e2e2e] bg-[#44e5e7]/100 text-white "
            >
              <img
                src={review.rating}
                alt="rating"
                className="py-5 md:w-sm w-2xs px-3"
              />
              <p className="text-[rgba(236, 252, 253, 1)] md:p-3 text-sm  lg:text-lg">
                {review.text}
              </p>
              <div className="flex gap-3 py-5 px-3">
                <img
                  src={review.avatar}
                  alt="avatar"
                  className="lg:size-15 size-10 "
                />
                <div className="lg:text-xl text-sm">
                  <h3 className=" font-700 p-1 dark:text-[#44e5e7]/100 text-green-700">
                    {review.name}
                  </h3>
                  <p>{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MyButton onClick={() => handleShowMore()} className=" md:ml-5 lg:ml-0 ">
        {showMore ? "Show Less" : "Show More"}
      </MyButton>
    </section>
  );
};

export default Reviews;
