
const checkPermissions = (authority, currentAuthority) => {
    if (!authority) {
        return true
    } // 数组处理
    if (Array.isArray(authority)) {
        if (Array.isArray(currentAuthority)) {
            if (currentAuthority.some((item) => authority.includes(item))) {
                return true
            }
        } else if (authority.includes(currentAuthority)) {
            return true
        }
        return false
    }
    if (typeof authority === 'string') {
        if (Array.isArray(currentAuthority)) {
            if (currentAuthority.some((item) => authority === item)) {
                return true
            }
        } else if (authority === currentAuthority) {
            return true
        }

        return false
    }
}
export default checkPermissions

