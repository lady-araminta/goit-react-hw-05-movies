import { Vortex } from 'react-loader-spinner';
import { LoaderCont } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderCont role="alert">
      <Vortex height="100" width="100" ariaLabel="vortex-loading" />
    </LoaderCont>
  );
};
