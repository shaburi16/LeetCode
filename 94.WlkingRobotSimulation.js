
var robotSim = function(commands, obstacles) {
    const obstacleSet = new Set();

    for (const [x, y] of obstacles) {
        obstacleSet.add(`${x},${y}`);
    }

    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    let dir = 0;
    let x = 0, y = 0;
    let maxDistance = 0;

    for (const command of commands) {
        if (command === -1) {
            dir = (dir + 1) % 4;
        }
        else if (command === -2) {
            dir = (dir + 3) % 4;
        }
        else {
            for (let step = 0; step < command; step++) {
                const nextX = x + dx[dir];
                const nextY = y + dy[dir];

                const nextPos = `${nextX},${nextY}`;

                if (obstacleSet.has(nextPos)) {
                    break;
                }

                x = nextX;
                y = nextY;

                maxDistance = Math.max(maxDistance, x * x + y * y);
            }
        }
    }

    return maxDistance;
};