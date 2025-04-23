import React, { useState } from "react";
import MyButton from "./MyButton";
import { reviews } from "./Questions/reviews";
import { rev } from "./Questions/reviews";
import { rev3 } from "./Questions/reviews";

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
    <section className="place-items-center py-20 ml-[-18rem] md:ml-0">
      <MyButton className="bg-[#44e5e7]/100 text-black border-none shadow-lg shadow-[#44e5e7] ml-[-20rem] md:ml-0">
        Testimonials
      </MyButton>
      <p className="font-medium md:text-5xl/15 text-2xl md:w-3xl w-sm pt-8 text-center md:place-self-center ml-[-30rem] md:ml-0 ">
        What Our AI-powered notetakers have to say
      </p>
      <p className="md:text-lg/10 text-sm text-[rgba(199,247,248,1)] font-200 md:px-74 py-6 text-center place-self-center md:w-full w-sm px-10 ml-[-30rem] md:ml-0">
        NoteFlow has helped 1000's supercharge their productivity with cutting
        edge AI note taking tools
      </p>
      <div className="flex p-5">
        <div className="block ">
          {reviews.slice(0, reviewslength).map((review) => (
            <div
              key={review.id}
              className="block  rounded-xl p-5 shadow my-5 shadow-black md:text-lg font-300 w-84 bg-[#0e2e2e] ml-[-25rem] md:ml-0"
            >
              <img src={review.rating} alt="rating" className="py-5 w-sm" />
              <p className="text-[rgba(236, 252, 253, 1)] p-3">{review.text}</p>
              <div className="flex gap-3 py-5">
                <img src={review.avatar} alt="avatar" className="size-10 " />
                <div>
                  <h3 className="text-xl font-700 p-1 text-[#44e5e7]/100">
                    {review.name}
                  </h3>
                  <p>{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:block hidden ">
          {rev3.slice(0, rev3length).map((review) => (
            <div
              key={review.id}
              className="block  rounded-xl p-5 m-5 shadow shadow-black text-lg font-300 w-84 bg-[#0e2e2e]"
            >
              <img src={review.rating} alt="rating" className="py-5 w-sm" />
              <p className="text-[rgba(236, 252, 253, 1)] p-3">{review.text}</p>
              <div className="flex gap-3 py-5">
                <img src={review.avatar} alt="avatar" className="size-10 " />
                <div>
                  <h3 className="text-xl font-700 p-1 text-[#44e5e7]/100">
                    {review.name}
                  </h3>
                  <p>{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="block ">
          {rev.slice(0, revlength).map((review) => (
            <div
              key={review.id}
              className="md:block hidden  rounded-xl p-5 my-5 shadow shadow-black text-lg font-300 w-84 bg-[#0e2e2e] "
            >
              <img src={review.rating} alt="rating" className="py-5 w-sm" />
              <p className="text-[rgba(236, 252, 253, 1)] p-3">{review.text}</p>
              <div className="flex gap-3 py-5">
                <img src={review.avatar} alt="avatar" className="size-10 " />
                <div>
                  <h3 className="text-xl font-700 p-1 text-[#44e5e7]/100">
                    {review.name}
                  </h3>
                  <p>{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MyButton
        onClick={() => handleShowMore()}
        className="ml-[-20rem] md:ml-0"
      >
        {showMore ? "Show Less" : " Show More"}
      </MyButton>
    </section>
  );
};

export default Reviews;
