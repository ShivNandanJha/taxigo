import Cars from "./Cars";
import Cards from "./Cards";
import DistanceTime from "./DistanceTime";
import AutocompleteAddress from "./AutoCompleteAddress";

function BookingPage() {
  // const screenHight=window.innerHeight*0.72;

  return (
    <div className="p-5 ">
      <h2 className="text-[20px] font-semibold">BookingPage</h2>
      <div
        className="border-[1px] p-5 
        rounded-md"
      >
        <AutocompleteAddress />

        <Cars />
        <Cards />
        <button
          className="w-full
         bg-yellow-400
        p-1 rounded-md
        mt-4"
        >
          Book
        </button>
      </div>
    </div>
  );
}

export default BookingPage;
