let userB = await fs.readFile("history.json", "utf-8");
let userC = JSON.parse(userB);
console.log(userC);
