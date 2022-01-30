import User from '@/modules/core/models/User'

export default {
    user (state): User {
        return state.user
    },
    authenticated (state): boolean {
        return !!(state.user && state.user.id)
    }
}