/* eslint-disable import/prefer-default-export */
export const getDataList = (data = [], target = '') => {
    const list = [];
    if (data.length && target) {
        data.forEach((item) => {
            if (item[target] && !list.includes(item[target].toLowerCase())) {
                list.push(item[target].toLowerCase());
            }
        });

        return list;
    }

    return [];
};
