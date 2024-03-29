import Forms from "@/components/contact/Forms";
const page = () => {
  return (
    <div className="px-28 py-16 bg-[#F9FBE7]">
      <div className="w-full border-b-[1px] border-slate-500 ">
        <h1 className="font-bold text-3xl py-4">Contact Us</h1>
      </div>
      <div className="flex gap-8">
        <div className="w-3/5">
          <p>
            Basecamptours.com offers online assistance to all visitor questions
            and queries. We can be approached 24X7, 365 days a year. For fast
            and helpful support please fill out the following form and we will
            respond within 24 hours.
          </p>
          <Forms />
        </div>
        <div className="w-2/5 gap-2 flex flex-col">
          <div className="gap-1">
            <h2 className="font-semibold text-[16px]">Talk to us</h2>
            <p>
              Shankar, Sandeep and Savita are waiting for your call. Let us know
              how we can help
            </p>
          </div>
          <div className="flex flex-col">
            <div className="gap-2">
              <span className="text-lg font-medium pr-1">Shankar Bhatta</span>
              <span className="text-sm">(Operations Head)</span>
            </div>
            <span>+977 985 103 3428</span>
            <span className="text-sm text-red-700">
              Mon-Sat, 9am to 7pm NPT
            </span>
          </div>
          <div className="flex flex-col">
            <div className="gap-2">
              <span className="text-lg font-medium pr-1">Shankar Bhatta</span>
              <span className="text-sm">(Operations Head)</span>
            </div>
            <span>+977 985 103 3428</span>
            <span className="text-sm text-red-700">
              Mon-Sat, 9am to 7pm NPT
            </span>
          </div>
          <div className="flex flex-col">
            <div className="gap-2">
              <span className="text-lg font-medium pr-1">Shankar Bhatta</span>
              <span className="text-sm">(Operations Head)</span>
            </div>
            <span>+977 985 103 3428</span>
            <span className="text-sm text-red-700">
              Mon-Sat, 9am to 7pm NPT
            </span>
          </div>
          <div className="flex flex-col">
            <div className="gap-2">
              <span className="text-lg font-medium pr-1">Shankar Bhatta</span>
              <span className="text-sm">(Operations Head)</span>
            </div>
            <span>+977 985 103 3428</span>
            <span className="text-sm text-red-700">
              Mon-Sat, 9am to 7pm NPT
            </span>
          </div>
          <div className="flex flex-col">
            <div className="gap-2">
              <span className="text-lg font-medium pr-1">Shankar Bhatta</span>
              <span className="text-sm">(Operations Head)</span>
            </div>
            <span>+977 985 103 3428</span>
            <span className="text-sm text-red-700">
              Mon-Sat, 9am to 7pm NPT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
