exports.generateOptions = function(typeRelated) {
    const titles = [
        'personal',
        'work',
    ];

    const options = titles.map((title) => ({
        title: `${title}`,
        value: title,
        selected: typeRelated == title,
    }));

    return options;
};