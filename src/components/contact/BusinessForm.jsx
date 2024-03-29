const BusinessForm = () => {
  return (
    <div className="py-4">
      <div className="bg-white p-6 rounded-lg shadow-md ">
        <form className="flex flex-col gap-4">
          <div className="flex items-center">
            <label htmlFor="Name" className="mr-4">
              Name
            </label>
            <input type="text" className="border p-1 flex-1" required />
          </div>
          <div className="flex items-center">
            <label htmlFor="Email" className="mr-4">
              Email
            </label>
            <input type="email" className="border p-1 flex-1" required />
          </div>
          <div className="flex items-center">
            <label htmlFor="Phone" className="mr-4">
              Phone
            </label>
            <input type="tel" className="border p-1 flex-1" />
          </div>
          <div>
            <label htmlFor="message" className="mr-4 p-1">
              On a commercial note
            </label>
            <textarea
              rows="4"
              className="border p-1 w-full"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessForm;
