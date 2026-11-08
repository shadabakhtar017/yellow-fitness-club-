import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Dumbbell } from "lucide-react";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#080809] text-white px-4 py-32 text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="w-16 h-16 bg-[#16161a] border border-[#27272a] flex items-center justify-center mx-auto text-[#FFE500]">
          <Dumbbell className="w-8 h-8" />
        </div>
        <span className="font-mono text-xs font-bold text-[#FFE500] uppercase tracking-widest">
          Error 404 • Page Not Found
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight text-white">
          Out Of Bounds
        </h1>
        <p className="text-sm sm:text-base text-zinc-400">
          The requested page does not exist or has been relocated. Return to the home floor to continue exploring Yellow Fitness Club.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Button to="/" variant="primary" showArrow>
            Return To Home
          </Button>
          <Button to="/contact" variant="secondary">
            Contact Club
          </Button>
        </div>
      </div>
    </div>
  );
}

