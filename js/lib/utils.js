export const props = (target) => {
    const _props = {}
    
    for(const key of target.getAttributeNames()) {
        _props[key] = target.getAttribute(key)
    }

    return _props
}