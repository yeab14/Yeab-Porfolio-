import { certifications } from "@/utils/data/certifications";  
import CertificationCard from "./CertificationCard";

function Certifications() {
  return (
    <div
      id="certifications"
      className="relative z-50 my-12 lg:my-24 bg-gradient-to-r from-[#121212] to-[#090909] px-4"
    >
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center gap-4">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white p-2 px-5 text-2xl font-bold rounded-md shadow-md">
            CERTIFICATIONS
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-16 flex flex-col gap-12 w-full items-center">
        {certifications.map((certification) => (
          <CertificationCard key={certification.id} certification={certification} />
        ))}
      </div>
    </div>
  );
}

export default Certifications;
