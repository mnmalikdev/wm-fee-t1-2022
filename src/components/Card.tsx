import { FC } from "react";
// USING RECOIL INSTEAD OF REDUX FOR STATEMANAEMENT.
import { atom, useRecoilState } from "recoil";
const countAtom = atom({
  key: "CounterValue",
  default: 1,
});

const Card: FC = () => {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <div className=" text-h4 md:text-h2 flex justify-center items-center font-sfPro "> Tap the card to increment the counter </div>
      <div
        className=" w-auto flex justify-center align-middle items-center "
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <div className=" w-2/3 md:w-1/2 bg-gradient-to-br from-gradientOne to-gradientTwo flex flex-col justify-center mx-11 mt-7 rounded-3xl h-auto ">
          <div className=" text-h3 mx-5 md:text-h1 font-sfPro text-white mt-8 mb-32 md:mx-10"> The Challenge is to write clean and concise CSS </div>
          <div className="text-h1 font-sfPro text-white text-center align-bottom my-auto mb-4">{count}</div>
          {/* create a white dot at the bottom right */}
          <div className="bg-white rounded-full h-1 w-1 mb-4 ml-4 mr-4 p-1 inline-flex self-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
