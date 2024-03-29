import GeneralForm from "./GeneralForm";
import BusinessForm from "./BusinessForm";
const Forms = () => {
  return (
    <div className="py-4 ">
      <h1 className="py-2">Go Ahead Ask Us</h1>
      <select className="border-[1px] border-slate-500 w-[70%] py-2">
        <option value="">General Enquiry</option>
        <option value="">Business Enquiry</option>
        <option value="">Booking Enquiry</option>
        <option value="">Feedback</option>
      </select>
      {/* <GeneralForm /> */}
      <BusinessForm />
    </div>
  );
};

export default Forms;
