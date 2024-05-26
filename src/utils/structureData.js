// Convert the data into a hierarchical format
export const structureData = (data) => {
    const map = {};

    data.flat().forEach(item => {
        map[item.tagId] = { ...item, children: [] };
    });

    const root = [];
    Object.values(map).forEach(item => {
        if (item.parent === 0) {
            root.push(item);
        }
        else {
            map[item.parent].children.push(item);
        }
    });

    return root;
};