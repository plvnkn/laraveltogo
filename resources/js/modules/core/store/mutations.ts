import User from "@/modules/core/models/User";

export default {
    setSnack (state, snack): void {
        state.snack = snack
    },
    setUser (state, user: User): void {
        state.user = user
    },
    setLang (state, lang): void {
        state.lang = lang
    }
}
