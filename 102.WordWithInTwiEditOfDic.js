var twoEditWords = function(queries, dictionary) {
    const result = [];

    for (const query of queries) {

        for (const word of dictionary) {
            let diff = 0;

            for (let i = 0; i < query.length; i++) {
                if (query[i] !== word[i]) {
                    diff++;
                }

                if (diff > 2) {
                    break;
                }
            }

            if (diff <= 2) {
                result.push(query);
                break;
            }
        }
    }

    return result;
};