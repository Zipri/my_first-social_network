export const updateObjectArray = (items, itemId, itemPropName, newObjProps) => {
    return items.map(item => {
        if (item[itemPropName] === itemId) {
            return {...item, ...newObjProps}
        }
        return item
    })
};