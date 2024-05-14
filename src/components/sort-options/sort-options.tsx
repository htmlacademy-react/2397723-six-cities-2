import React from 'react';
import { SortOption } from '../../const/const';
import { useAppDispatch } from '../../hooks/redux-ts';
import { changeSortOption } from '../../redux/action';

type Props = {
  activeOption: string;
  closeSortOptions: () => void;
}

export default function SortOptions({ activeOption, closeSortOptions }: Props): React.JSX.Element {
  const dispatch = useAppDispatch();

  const onChangeSortOptionHandler = (option: string) => {
    dispatch(changeSortOption(option));
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
