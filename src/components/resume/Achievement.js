import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Spellbee International"
            subTitle="2015"
            result="Got selected for competing in International level"
            des="Certificate awarded for meritorious performance in the exam."
          />
          <ResumeCard
            title="The Bharat Scouts And Guides"
            subTitle=  "(2015)"
            result="Rajya Puraskar, state level award, also known as the Governor's Award"
          />
          <ResumeCard
            title="National muay thai tournament"
            subTitle="Hosted by Indian muay thai organization(IMO)"
            result="Silver"
            // des="Passed with good marks in the exam and also received scholarship money till the completion of 10th std. Rank:- 33/1617 who got the scholarship (all passed students are not given scholarship)."
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Chennai district state level kickboxing championship"
            subTitle="Hosted by Chennai district kickboxing association"
            result="Gold"
            // des="Certificate awarded for meritorious performance in the exam."
          />
          {/* <ResumeCard
            title="The Bharat Scouts And Guides"
            subTitle=  "(2015)"
            result="Rajya Puraskar, known as the Governor's Award"
            // des="Awarded 'A' grade certificate for successfully completing the course exams."
          />
          <ResumeCard
            title="Scholarship Exam"
            subTitle="4th Std Scholarship Exam conducted by Government of Maharashtra (2012)"
            result="230/300"
            des="Passed with good marks in the exam but not received scholarship. (all passed students are not given scholarship)."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
