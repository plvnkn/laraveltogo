import User from "@/modules/core/models/User";

export default {
    setSnack (state, snack): void {
        state.snack = snack
    },
    setUser (state, user): void {
        state.user = new User(user)
    },
    logoutUser (state, user): void {
        state.user = new User({})
    }
}
