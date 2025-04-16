import React from "react";
import { motion } from "framer-motion";
import { PartnerList } from "../../../data/Partnerlist";

const Partners = () => {
  return (
    <div className="pt-15 bg-background">
      <div className="container">
        <div className="mx-auto border-b border-green-900/30 py-6 px-2">
          <h1 className="text-primary pb-2 font-[titleFont] tracking-wide text-xl uppercase">
            Partners
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.5, 0.71, 0.2, 1.01],
            }}
            className="grid grid-cols-3 gap-10 md:grid-cols-4 md:gap-12 xl:grid-cols-8 lg:gap-8 w-full py-5"
          >
            {PartnerList.map((item) => (
              <div key={item.id} className="flex justify-center items-center">
                <motion.img
                  src={item.image}
                  alt="Partner Logo"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.6 }}
                  className="h-[25px] lg:h-[30px] xl:h-[50px] w-auto object-contain mx-auto"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
