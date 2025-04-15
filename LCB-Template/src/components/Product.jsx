import React from "react";
import { motion } from "framer-motion";
import { MarqueeDisplay } from "../data/Marquee";

const Product = () => {
  const from = "0%";
  const to = "-100%";

  return (
    <div className="pt-10 bg-background">
      <div className="container">
        <div className="px-2 font-[titleFont] text-xl uppercase text-primary">
          <h2>Products</h2>

          <div className="overflow-hidden flex MyGradient">
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: from }}
                animate={{ x: to }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
              >
                {MarqueeDisplay.map((item, index) => (
                  <div
                    key={index}
                    className="h-55 w-56 pr-10 flex items-center"
                  >
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      whileHover={{ scale: 1.1 }}
                      className="w-35 h-auto object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
