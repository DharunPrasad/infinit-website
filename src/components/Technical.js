import Title from "./Title";

const Technical = () => {
  return (
    <div className="h-screen text-white">
      <Title title="Technical Events" />

      <div className="flex flex-col md:flex-wrap justify-between items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-6/12 h-2/5 mx-auto text-sm">
        <div className="text-center ">
          <div>Logo</div>
          <p className="bg-green-300 text-black "> Paper Presentation </p>
        </div>

        <div className="text-center">
          <div>Logo</div>
          <p className="bg-green-300 text-black">Debugging</p>
        </div>
        <div className="text-center ">
          <div>Logo</div>
          <p className="bg-green-300 text-black">Paper Presentation</p>
        </div>

        <div className="text-center">
          <div>Logo</div>
          <p className="bg-green-300 text-black">Debuggin</p>
        </div>
      </div>
    </div>
  );
};

export default Technical;
