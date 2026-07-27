import { TriangleAlert, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#312E36] px-6">
      <div className="max-w-xl w-full text-center bg-[#3D3943] border border-[#56515D] rounded-3xl p-10 shadow-[0_0_40px_rgba(141,111,105,0.25)]">

        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-[#8D6F69]/20 flex items-center justify-center">
            <TriangleAlert size={50} className="text-[#8D6F69]" />
          </div>
        </div>

        <h1 className="mt-8 text-8xl font-extrabold text-[#F8FAFC]">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-[#F8FAFC]">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-[#BEBAC4] leading-7">
          Sorry, the page youre looking for doesnt exist,
          has been moved, or the URL may be incorrect.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 bg-[#8D6F69] hover:bg-[#A07B73] text-white px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(141,111,105,.45)]"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}