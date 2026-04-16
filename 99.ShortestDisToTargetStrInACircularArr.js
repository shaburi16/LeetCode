
var closestTarget = function(words, target, startIndex) {
    const n = words.length;
    let ans = Infinity;

    for (let i = 0; i < n; i++) {
        if (words[i] === target) {
            const diff = Math.abs(i - startIndex);

            const circularDist = n - diff;

            ans = Math.min(ans, Math.min(diff, circularDist));
        }
    }

    return ans === Infinity ? -1 : ans;
};