const level = {
    1: {
        userObject: {
            pos: [30, 30],
            vel: [ 1, 0],
            radius: 5,
            color: "#FFFFFF",
        },
        walls: [{ pos: [200, 200], vel: [0, 0], color: "#964B00", height: 60, width: 20}],
        goal: { pos: [970, 30], vel: [0, 0], color:'#ff0000', height: 30, width: 30},
        energyBalls: [{ pos: [600, 30], vel: [0, 0], color: '#0000FF', radius: 10}],
        coins: [{ pos: [500, 30], vel: [0, 0], color: '#FFFF00', height: 15, width: 15}]
    },
}





module.exports = level;