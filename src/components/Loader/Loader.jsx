import { ScaleLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <ScaleLoader
      color="#36d7b7"
      cssOverride={{}}
      loading
      speedMultiplier={4}
      width={20}
    />
  );
};
