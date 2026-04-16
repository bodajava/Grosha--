"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/amr/Navbar";
import { Footer } from "@/components/amr/Footer";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <section className="bg-background font-serif min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="w-full sm:w-10/12 md:w-8/12 text-center">
              <div
                className="bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] h-[250px] sm:h-[350px] md:h-[400px] bg-center bg-no-repeat bg-contain mix-blend-multiply opacity-80"
                aria-hidden="true"
              >
                <h1 className="text-center text-primary text-6xl sm:text-7xl md:text-9xl pt-6 sm:pt-8 font-black tracking-tighter">
                  404
                </h1>
              </div>

              <div className="mt-[-50px] space-y-6">
                <h3 className="text-3xl text-foreground sm:text-4xl font-black italic tracking-tight">
                  Look like you're lost
                </h3>
                <p className="text-lg text-foreground/60 max-w-md mx-auto font-light">
                  The page you are looking for has been frozen in time or moved to a different harvest.
                </p>

                <div className="pt-6">
                   <Button
                    variant="primaryGradient"
                    onClick={() => router.push("/")}
                    className="px-12 py-8 rounded-full text-lg shadow-xl"
                  >
                    Go Back Home
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
