import _get from 'lodash/get'

export default class User {
    public name: string
    public email: string

    constructor (obj: any) {
        this.name = this.init(obj, 'name', null)
        this.email = this.init(obj, 'email', null)
    }

    private init (obj: object, src: string, def: any): any {
        const res = _get(obj, src)
        if (res) {
            return res
        }
        return def
    }

}
