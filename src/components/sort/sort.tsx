import React, { useState } from 'react';
import SortOptions from '../sort-options/sort-options';
import { SortOption } from '../../const/const';

export default function Sort(): React.JSX.Element {
  const [showSort, setShowSort] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<string>(SortOption[0]);

  const closeSortOptions = () => setShowSort(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setShowSort(!showSort)}>
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {showSort &&
        <SortOptions
          activeOption={activeOption}
          changeActiveOption={setActiveOption}
          closeSortOptions={closeSortOptions}
        />}
    </form>
  );
}
