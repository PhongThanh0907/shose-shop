import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Sneaker } from "../../interfaces/sneakers";
import sneakerAPI from "../Sneaker/sneakerAPI";

interface SneakersState {
  data: Sneaker[];
  isLoading: boolean;
  error: string;
}

const initialState: SneakersState = {
  data: [],
  isLoading: false,
  error: "",
};

// createAsyncThunk sẽ tự động dispatch 3 action pending/fullfiled/rejected
// Ta sẽ bắt và xử lý các action này ở extraReducers bên trong hàm createSlice
export const getSneakerList = createAsyncThunk(
  "sneakers/getSneakerList",
  // Hàm này nhận vào 2 tham số:
  // - Tham số truyền vào khi dispatch action getMovieList: dispatch(getSneakerList(params))
  // - ThunkAPI: là một object chứa các hàm của redux thunk như dispatch, getState,...
  async () => {
    // tự động dispatch action sneaker/getSneakerList/pending
    try {
      const data = await sneakerAPI.getSneakerList();
      // call API thành công return về data
      // return data => tự động dispatch action sneaker/getSneakerList/fullfiled
      return data;
    } catch (error) {
      // throw error => tự động dispatch action sneaker/getSneakerList/rejected
      throw error;
    }
  }
);

const sneakersSlice = createSlice({
  name: "sneakers", // namespace để tạo ra các action types
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSneakerList.pending, (state) => {
      // request đang được thực thi => set isLoading thành true để show loading ra giao diện
      return { ...state, isLoading: true };
    });
    builder.addCase(getSneakerList.fulfilled, (state, { payload }) => {
      // payload được return từ hàm getSneakerList
      return { ...state, isLoading: false, data: payload };
    });
    builder.addCase(getSneakerList.rejected, (state, { error }) => {
      // error được throw từ hàm getSneakerList
      return { ...state, isLoading: false, error: error.message as string };
    });
  },
});

export default sneakersSlice.reducer;
