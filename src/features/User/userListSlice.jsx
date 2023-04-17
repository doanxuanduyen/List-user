import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({ 
    //slice định nghĩa trạng thái ban đầu của ứng dụng và reducer để cập nhật trạng thái slice 
    name: 'users',
    initialState: {
        listUser: []
    },
    reducers: {
        setUsers: (state, action) => {
            state.listUser = action.payload;
            //ghi đè lên listUser cũ 
            // khi action setUsers được gọi, trạng thái của slice userSlice sẽ được cập nhật bằng cách gán action.payload cho thuộc tính listUser.
        }
    }
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;