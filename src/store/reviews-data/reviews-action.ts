import { createAction } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const/const';

export const changeComment = createAction<string>(`${NameSpaces.Reviews}/changeComment`);
export const changeRating = createAction<number>(`${NameSpaces.Reviews}/changeRating`);
