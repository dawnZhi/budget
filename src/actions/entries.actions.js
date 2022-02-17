export const addEntryRedux = (payload) => {
  return { type: "ADD_ENTRIES", payload: payload_add };
};

export const removeEntryRedux = (id) => {
  return { type: "REMOVE_ENTRY", payload: { id } };
};
