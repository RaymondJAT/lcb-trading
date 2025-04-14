import React from "react";
import { motion } from "framer-motion";
import { PartnerList } from "../data/Partnerlist";

const Partners = () => {
  return (
    <div className="bg-background">
      <div className="pt-15 bg-background rounded-b-[50px] relative z-20">
        <div className="container">
          <div className="mx-auto max-w-4xl px-4 border-green-900/30">
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
              className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-6 w-full py-5"
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
      </div>
    </div>
  );
};

export default Partners;
