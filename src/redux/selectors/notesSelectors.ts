import { RootState } from "../store/store";

function getNotes(state: RootState) {
  return state.notes;
}

export default getNotes;
