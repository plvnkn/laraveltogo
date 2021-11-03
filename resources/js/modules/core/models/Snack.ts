import get from 'lodash/get'

class Snack {
    public color: string
    public btnColor: string
    public text: string
    public timeout: string

    constructor (obj?: any) {
        this.color = get(obj, 'color', null)
        this.btnColor = get(obj, 'btnColor', 'error')
        this.text = get(obj, 'text', '')
        this.timeout = get(obj, 'timeout', 6000)
    }
}

export default Snack
