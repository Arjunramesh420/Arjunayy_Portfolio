import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech computer science engineering and artificial intelligence specialization "
            subTitle="SRM institute of science and technology (2019 - 2023)"
            result="7.76 CGPA"
            des="Studied IT related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc."
          />
          <ResumeCard
            title="Class 12"
            subTitle="SBOA Matriculation and higher secondary school (2019 passout)"
            result="66%"
            // des="Studied in this school from 11th to 12th std. HSC Subjects: PCM, English, Electrical Maintenance, Environment Education. "
          />
          <ResumeCard
            title="Class 10"
            subTitle="SBOA Matriculation and higher secondary school (2017)"
            result="91% "
            // des="Studied in this school from Nursery to 10th std. SSC Subjects: English, Hindi-French, Marathi, Maths, Science, Social Sciences."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="HTML Essential learning"
            subTitle="LinkedIN learning- (01/12/2021 - 10/12/2022) "
            result="Online"
            // des="Learnt MERN stack and made various project using the skills in this course. Check out my Github for project info !"
          />
          <ResumeCard
            title="CSS Essential learning"
            subTitle="LinkedIn learning - (20/12/2022 - 25/12/2022) "
            result="Online"
            // des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in USA isn't easy."
          />
          <ResumeCard
            title="Javascript Essential learning"
            subTitle="LinkedIn learning - (3/1/2023 - 29/1/2023)"
            result="Online"
            // des=" Learned basics of Neo4j - a database management system "
          />
       
        </div>
      </div>
    </motion.div>
  );
}

export default Education