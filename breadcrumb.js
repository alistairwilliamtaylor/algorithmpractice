isUnique = (arr) => {
    const breadcrumbs = {};
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        if (breadcrumbs[arr[i]]) {
            result = false
        } else {
            breadcrumbs[arr[i]] = true;
        }
    }

    return result;

}

