import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { heroDetails } from "@/assets/data/heroData";
import { socialLinks } from "@/assets/data/socialLinks";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const [translateValue, setTranslateValue] = useState(20);
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  
  useEffect(() => {
    const updateTranslateValue = () => {
      const container = document.querySelector('.container');
      if (!container) return;
      
      // Calculate 5% of container width, but cap at 20px
      const newValue = Math.min(20, container.clientWidth * 0.05);
      setTranslateValue(newValue);
    };

    updateTranslateValue();
    window.addEventListener('resize', updateTranslateValue);
    return () => window.removeEventListener('resize', updateTranslateValue);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, translateValue]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -translateValue]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-300, 200]),
    springConfig
  );

  return (
    <section id="hero"
      ref={ref}
      className="relative min-h-[50vh] w-full overflow-hidden bg-background"
    >
      <div className="container py-20">
        {/* Header section */}
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground"
          >
            {heroDetails.name}
          </motion.h1>

          <TypewriterEffect
            words={heroDetails.typewriterText}
            className="text-lg md:text-3xl text-muted-foreground"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground px-4"
          >
            {heroDetails.introduction.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {heroDetails.ctas.map((cta) => {
              const Icon = cta.icon;
              return (
                <Button
                  key={cta.label}
                  variant={cta.variant}
                  asChild
                  className="group"
                >
                  <a href={cta.href} className="flex items-center gap-2">
                    <Icon className="mr-2 h-4 w-4" />
                    {cta.label}
                  </a>
                </Button>
              );
            })}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-4 mt-8"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Parallax Products Section */}
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="mt-12 max-w-[100%] mx-auto"
        >
          <motion.div className="flex flex-nowrap justify-center gap-2 md:gap-3 mb-6">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-nowrap justify-center gap-2 md:gap-3 mb-6">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-nowrap justify-center gap-2 md:gap-3">
            {thirdRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
      }}
      className="group/product h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center rounded-lg absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black rounded-lg pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-xs md:text-sm">
        {product.title}
      </h2>
    </motion.div>
  );
};