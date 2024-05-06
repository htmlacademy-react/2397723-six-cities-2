import React from 'react';
import { SortOption } from '../../const/const';

type Props = {
  activeOption: string;
  changeActiveOption: (option: string) => void;
  closeSortOptions: () => void;
}

export default function SortOptions({ activeOption, changeActiveOption, closeSortOptions }: Props): React.JSX.Element {

  const onChangeSortOptionHandler = (option: string) => {
    changeActiveOption(option);
    closeSortOptions();
  };

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {SortOption.map((option) => (
        <li
          key={option}
          className={`places__option ${option === activeOption ? 'places__option--active' : ''}`}
          tabIndex={0}
          onClick={() => onChangeSortOptionHandler(option)}
        >{option}
        </li>))}
    </ul>
  );
}
