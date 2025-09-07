console.log(JSON.stringify({A1:grid[0][0],A2:grid[1][0],A3:grid[2][0],A4:grid[3][0],A5:grid[4][0]}));
console.log(JSON.stringify(grid.map(row=>row[0]?row[0].value:"")));
