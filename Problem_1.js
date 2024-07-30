
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    if(image[sr][sc] == color)
        return image; 
    let currColor = image[sr][sc];
    //Run DFS to update the color of the cell and it's neighboring cells if they match currColor
    const floodFillHelper = (image, sr, sc, newColor, currColor) => {
        //base case
        if(sr<0 || sr>=image.length || sc<0 || sc>=image[0].length || 
            image[sr][sc]!= currColor) 
            return; 

        //recursive logic 
        image[sr][sc] = newColor; 
        let dirs = [[0,1], [1,0], [-1,0], [0,-1]]; 
        for(let dir of dirs){ 
            let row = sr+dir[0]; 
            let col = sc+dir[1]; 
            floodFillHelper(image, row, col, newColor, currColor); 
        } 
    }

    floodFillHelper(image, sr, sc, color, currColor);
    return image;
};