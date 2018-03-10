import { createSelector } from 'reselect';

export default (state: {} = {}, action: {} = {}): {} => {
  switch (action.type) {
    default:
      return state;
  }
};

// SELECTORS
export const booksSelector = (state: {}): [] => state.books;

export const allBooksSelector = createSelector(
  booksSelector,
  (booksHash: {}): array => Object.values(booksHash)
);