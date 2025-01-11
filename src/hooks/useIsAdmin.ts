import { isAdminCurrentUserSelector } from '@selectors/currentUserSelectors';
import { TRootState } from '@store';
import { useSelector } from 'react-redux';

const useIsAdmin = () => {
  const isAdmin = useSelector<TRootState, boolean>((state: TRootState) =>
    isAdminCurrentUserSelector(state)
  );

  return { isAdmin };
};

export default useIsAdmin;
