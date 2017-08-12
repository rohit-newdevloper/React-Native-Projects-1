export const selectLibrary = (libraryId) => {
  return {
    type: 'select_libary',
    payload: libraryId
  };
};
