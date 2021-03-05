const level = {
    1: {
        userObject: {
            pos: [10, 265],
            vel: [ 5, 0],
        },
        walls: [{ pos: [0, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 }, 
        { pos: [60, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [120, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [180, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [240, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [300, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [360, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [420, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [480, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [540, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [600, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [660, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [720, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [780, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [840, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [900, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
        { pos: [960, 165], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [0, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [60, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [120, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [180, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [240, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [300, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [360, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [420, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [480, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [540, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [600, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [660, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [720, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [780, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [840, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [900, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
            { pos: [960, 375], vel: [0, 0], color: "#964B00", height: 60, width: 60 }],
        goal: { pos: [920, 265], vel: [0, 0], color:'#ff0000', height: 75, width: 39},
        coins: [{ pos: [500, 270], vel: [0, 0], color: '#FFFF00', height: 60, width: 60}],
        energyBalls: [],
        title: "Pretty Easy"
    },
    2: {
        userObject: {
            pos: [10, 520],
            vel: [5, 0],
        },
        walls: [{pos: [940, 540], vel: [0, 0], color: "#964B00", height: 60, width: 60 },
                { pos: [940, 480], vel: [0, 0], color: "#964B00", height: 60, width: 60 }],
        goal: { pos: [900, 10], vel: [0, 0], color: '#ff0000', height: 75, width: 39 },
        coins: [{ pos: [150, 155], vel: [0, 0], color: '#FFFF00', height: 60, width: 60 }],
        energyBalls: [],
        title: "Dont Touch the Edges"
    },

    3: {
        userObject: {
            pos: [940, 265],
            vel: [5, 0],
        },
        walls: [{pos: [940, 0], vel: [0, 0], height: 60, width: 60},
                {pos: [940, 540], vel: [0, 0], height: 60, width: 60 }],
        goal: { pos: [10, 265], vel: [0, 0], color: '#ff0000', height: 75, width: 39 },
        coins: [{ pos: [880, 0], vel: [0, 0], height: 60, width: 60 },
            { pos: [880, 540], vel: [0, 0], height: 60, width: 60 }],
        energyBalls: [{ pos: [200, 265], vel: [0, 0], height: 60, width: 60 },
                    { pos: [200, 235], vel: [0, 0], height: 60, width: 60 },
                    { pos: [200, 295], vel: [0, 0], height: 60, width: 60 },
                    { pos: [200, 325], vel: [0, 0], height: 60, width: 60 },
                    { pos: [200, 205], vel: [0, 0], height: 60, width: 60 }],
        title: "Avoid the Energy Spheres"
    },

    4: {
        userObject: {
            pos: [500, 10],
            vel: [5, 0]
        },
        walls: [{ pos: [500, 230], vel: [0, 0], height: 60, width: 60 },
                { pos: [500, 290], vel: [0, 0], height: 60, width: 60 },
                { pos: [0, 0], vel: [0, 0], height: 60, width: 60 },
                { pos: [0, 540], vel: [0, 0], height: 60, width: 60 }],
        coins: [{ pos: [850, 0], vel: [0, 0], height: 60, width: 60 },
                { pos: [930, 0], vel: [0, 0], height: 60, width: 60 },
                { pos: [850, 60], vel: [0, 0], height: 60, width: 60 },
                { pos: [930, 60], vel: [0, 0], height: 60, width: 60 },
                { pos: [850, 120], vel: [0, 0], height: 60, width: 60 },
                { pos: [930, 120], vel: [0, 0], height: 60, width: 60 },
                { pos: [850, 180], vel: [0, 0], height: 60, width: 60 },
                { pos: [930, 180], vel: [0, 0], height: 60, width: 60 },
                { pos: [850, 240], vel: [0, 0], height: 60, width: 60 },
                { pos: [930, 240], vel: [0, 0], height: 60, width: 60 },
                { pos: [850, 300], vel: [0, 0], height: 60, width: 60 },
                { pos: [930, 300], vel: [0, 0], height: 60, width: 60 },
                { pos: [850, 360], vel: [0, 0], height: 60, width: 60 },
                { pos: [930, 360], vel: [0, 0], height: 60, width: 60 },
                { pos: [850, 420], vel: [0, 0], height: 60, width: 60 },
                { pos: [930, 420], vel: [0, 0], height: 60, width: 60 },
                { pos: [850, 480], vel: [0, 0], height: 60, width: 60 },
                { pos: [930, 480], vel: [0, 0], height: 60, width: 60 },
                { pos: [850, 540], vel: [0, 0], height: 60, width: 60 },
                { pos: [930, 540], vel: [0, 0], height: 60, width: 60 }],
        energyBalls: [{ pos: [790, 0], vel: [0, 0], height: 60, width: 60},
                    { pos: [790, 30], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 60], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 90], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 120], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 150], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 180], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 300], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 330], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 360], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 390], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 420], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 450], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 480], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 520], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 550], vel: [0, 0], height: 60, width: 60 },
                    { pos: [790, 580], vel: [0, 0], height: 60, width: 60 },
                    { pos: [100, 170], vel: [0, 0], height: 60, width: 60 },
                    { pos: [100, 370], vel: [0, 0], height: 60, width: 60 },
                    { pos: [290, 170], vel: [0, 0], height: 60, width: 60 },
                    { pos: [290, 370], vel: [0, 0], height: 60, width: 60 }],
        goal: { pos: [200, 270], vel: [0, 0], height: 75, width: 39},
        title: "Risk It For the Biscuit"
    }

}

//energyBalls: [{ pos: [600, 30], vel: [0, 0], color: '#0000FF', height: 60, width: 60 }],





module.exports = level;