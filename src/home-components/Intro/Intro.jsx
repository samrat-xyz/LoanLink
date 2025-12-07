import { FaAward } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

function Intro() {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <p className="text-primary font-medium flex items-center gap-2">
          Company Introductions
          <span className="w-10 h-[2px] bg-primary inline-block"></span>
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-base-content mt-3">
          Our Loans will Fill Your Dreams <br /> Come True
        </h2>
        {/* Description */}{" "}
        <p className="text-gray-600 mt-5 leading-relaxed max-w-3xl">
          {" "}
          There are many variations of passages of lorem ipsum available the
          majority have suffered alteration in some form by injected humour.
          Duis aute irure dolor ipsum is simply free text available in local
          markets in reprehenderit. Nam aliquam sem et tortor consequat mattis
          pellentesque semper tailored for specific uses and specific market
          segment.{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="flex items-start gap-4">
            <div className="text-primary text-4xl bg-primary/10 p-4 rounded-full">
              <FaAward />
            </div>
            <div>
              <h3 className="text-xl font-bold text-base-content">
                Award Winning
              </h3>
              <p className="">
                Finance categories winning more than 10 awards
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-primary text-4xl bg-primary/10 p-4 rounded-full">
              <MdVerified />
            </div>
            <div>
              <h3 className="text-xl font-bold text-base-content">
                Certified Company
              </h3>
              <p className="">
                Approved Finance company to provide loans
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Intro;
