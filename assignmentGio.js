function papa2(name, num1) {
    const anbani = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let a = name[0]
    let b = anbani.indexOf(a)
    let c = b > 24 ? (b + num1) % anbani.length : b + num1;
    let d = c > 24 ? anbani[c % anbani.length] : anbani[c];

    let e = name[1]
    let f = anbani.indexOf(e)
    let g = f > 24 ? (f + num1) % anbani.length : f + num1;
    let h = g > 24 ? anbani[g % anbani.length] : anbani[h];

    let i = name[2]
    let j = anbani.indexOf(i)
    let k = j > 24 ? (j + num1) % anbani.length : j + num1;
    let l = k > 24 ? anbani[k % anbani.length] : anbani[k];


    let m = name[3]
    let n = anbani.indexOf(m)
    let o = n > 24 ? (n + num1) % anbani.length : n + num1;
    let p = o > 24 ? anbani[o % anbani.length] : anbani[p];


    return `${m}, ${n}, ${o}, ${p}, `


}

console.log(papa2("ZAZA", 10000))
