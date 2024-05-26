"use client";

import { AuroraBackground } from "~/components/aceternity/aurora-background";
import { motion } from "framer-motion";
import GradualSpacing from "~/components/magicui/gradual-spacing";
import DotPattern from "~/components/magicui/dot-pattern";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <AuroraBackground>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
        )}
      />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center gap-4 px-4"
      >
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="Hamish Brindle"
          delayMultiple={0.08}
        />

        <p className="text-xl font-light text-black dark:text-white">
          Building your next <i>anything</i>.
        </p>
      </motion.div>
    </AuroraBackground>
  );
}
