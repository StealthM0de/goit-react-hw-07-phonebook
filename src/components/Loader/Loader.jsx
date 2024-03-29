import { ScaleLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <ScaleLoader
      color="#36d7b7"
      cssOverride={{}}
      loading
      margin={10}
      radius={5}
      speedMultiplier={2}
      width={20}
    />
  );
};
