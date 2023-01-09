////////////////////////
const  d1 = [33,'best', 66, 'best'];
let b = document.querySelector('.b-1');
let i = document.querySelector('.i-1');
let c = document.querySelector('.out');

b.onclick = () => {
    d1.push (i.value);
    console.log(d1);
    c.innerHTML = d1;
}

b.onclick = () => {
    d1.shift (i.value);
    console.log(d1);
    c.innerHTML = d1;
}

///////////////////// вауууууууууууу
function geo_mean(nums, arith_mean) {
  let sum = 0;
  let q = 1;
  for(let i = 0; i<nums.length; i++){
   sum += nums[i] 
    q *= nums[i]
  }
  let n = arith_mean*(nums.length + 1) - sum;
  let ar = Math.pow((q*n), 1/(nums.length + 1));
  return ar
}


///////////////////////
const rps = (p1, p2) => {
  if(p1 === "scissors" && p2 === "paper") return "Player 1 won!"
  if(p1 === "scissors" && p2 === "rock") return "Player 2 won!"
  if(p1 === "paper" && p2 === "rock") return "Player 1 won!"
  if(p1 === "paper" && p2 === "scissors") return "Player 2 won!"
  if(p1 === "rock" && p2 === "scissors") return "Player 1 won!"
  if(p1 === "rock" && p2 === "paper") return "Player 2 won!"
  if(p1 === p2)return "Draw!"
};
