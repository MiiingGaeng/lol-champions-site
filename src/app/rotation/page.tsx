import RotationListForAll from "@/components/_rotation/RotationListForAll";
import RotationListForNew from "@/components/_rotation/RotationListForNew";

const rotationPage = () => {
  return (
    <div>
      <RotationListForAll />
      <hr className="mb-10 mt-10" />
      <RotationListForNew />
    </div>
  );
};

export default rotationPage;
