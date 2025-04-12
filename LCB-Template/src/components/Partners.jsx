import React from "react";
import { motion } from "framer-motion";
import { PartnerList } from "../data/Partnerlist";

const Partners = () => {
  return (
    <div className="py-10 bg-gray-200">
      <div className="container mx-auto">
        <h1 className="font-[contentFont] tracking-wide">Partners</h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.5, 0.71, 0.2, 1.01],
          }}
          className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-6 w-full"
        >
          {PartnerList.map((item) => (
            <div key={item.id} className="flex justify-center items-center">
              <motion.img
                src={item.image}
                alt="Partner Logo"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.6 }}
                className="h-[30px] lg:h-[35px] xl:h-[50px] w-auto object-contain mx-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
