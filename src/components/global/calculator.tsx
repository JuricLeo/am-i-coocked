"use client";

import {
  MoveDownIcon,
  MoveDownLeftIcon,
  MoveDownRightIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Calculator = () => {
  const [weeks, setWeeks] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [resultImage, setResultImage] = useState<string>("");

  const [loadingMessages] = useState([
    "Calculating...",
    "Using AI to get better results...",
    "Asking smart people for help...",
    "Grabbing a coffee...",
    "Getting opinions from students...",
    "Almost there...",
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (isCalculating) {
      const interval = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex === loadingMessages.length) {
            setIsCalculating(false);
            setShowResult(true);
            clearInterval(interval);
          }
          return nextIndex % loadingMessages.length;
        });
      }, 2500);

      return () => clearInterval(interval);
    }
  }, [isCalculating, loadingMessages.length]);

  const handleCalculate = () => {
    const totalHours = Number(weeks) * 168 + Number(days) * 24 + Number(hours);

    if (totalHours <= 24) {
      setResultImage("/coocked.webp");
    } else {
      setResultImage("/not-coocked.webp");
    }
    console.log("Current resultImage:", resultImage);

    setIsFormVisible(false);
    setTimeout(() => {
      setIsCalculating(true);
    }, 300);
  };

  return (
    <div className="max-w-[1000px] mx-auto mt-16 backgrop-blur bg-radial from-secondary to-transparent rounded-lg p-20 mb-12">
      {showResult ? (
        <div className="animate-fade-in flex flex-col items-center">
          <p className="text-2xl text-center mb-12 font-bold text-muted-foreground flex items-baseline">
            You
            <span className="text-primary mx-2 whitespace-nowrap">
              {resultImage === "/coocked.webp" ? "ARE" : "ARE NOT"}
            </span>
            coocked!
            <span className="text-muted-foreground/80 ml-2 text-sm">
              {resultImage === "/not-coocked.webp" && "(yet...)"}
            </span>
          </p>
          <Image
            width={900}
            height={900}
            src={resultImage}
            alt="Calculation Result"
            className="w-[300px] h-[250px]"
          />
        </div>
      ) : !isCalculating ? (
        <div className={isFormVisible ? "animate-fade-in" : "animate-fade-out"}>
          <div className="flex items-center justify-between text-red-600">
            <MoveDownRightIcon className="w-32 h-32 animate-bounce" />
            <MoveDownIcon className="w-32 h-32 animate-bounce" />
            <MoveDownLeftIcon className="w-32 h-32 animate-bounce" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 w-full">
              <Label>Weeks</Label>
              <Input
                value={weeks}
                onChange={(e) => setWeeks(e.target.value)}
                type="number"
                className="py-6 text-center no-arrow-input"
                placeholder="Weeks left..."
              />
            </div>
            <div className="flex-1 w-full">
              <Label>Days</Label>
              <Input
                value={days}
                onChange={(e) => setDays(e.target.value)}
                type="number"
                className="py-6 text-center no-arrow-input"
                placeholder="Days left..."
              />
            </div>
            <div className="flex-1 w-full">
              <Label>Hours</Label>
              <Input
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                type="number"
                className="py-6 text-center no-arrow-input"
                placeholder="Hours left..."
              />
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <Button
              className={`w-40 py-6 ${
                (weeks || days || hours) &&
                "donda scale-125 transition-all duration-300"
              }`}
              onClick={handleCalculate}
              disabled={!weeks && !days && !hours}
            >
              Calculate
            </Button>
          </div>
        </div>
      ) : (
        <div className="h-[300px] flex flex-col items-center justify-center animate-fade-in">
          <div className="w-16 h-16 border-4 border-muted-foreground border-t-transparent rounded-full animate-spin" />
          <p className="mt-4 text-xl text-center text-muted-foreground">
            {loadingMessages[currentMessageIndex]}
          </p>
        </div>
      )}
    </div>
  );
};
