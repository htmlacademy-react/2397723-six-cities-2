import React, { useState } from 'react';
import SortOptions from '../sort-options/sort-options';
import { useAppSelector } from '../../hooks/redux-ts';
import { getActiveSort } from '../../store/app-data/app-data.selectors';

export default function Sort(): React.JSX.Element {
  const [showSort, setShowSort] = useState<boolean>(false);
  const closeSortOptions = () => setShowSort(false);
  const activeSort = useAppSelector(getActiveSort);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setShowSort(!showSort)}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {showSort &&
        <SortOptions
          activeOption={activeSort}
          closeSortOptions={closeSortOptions}
        />}
    </form>
  );
}
