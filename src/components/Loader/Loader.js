import { Vortex } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div role="alert">
      <Vortex height="100" width="100" ariaLabel="vortex-loading" />
    </div>
  );
};
