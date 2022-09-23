// let array = [1, 2, 8, 6, 9, 15]



// let tong = 0;
// for (let i = 0; i < array.length; i++) {
//     let item = array[i]
//     if (item % 5 == 0)
//         tong += item
// }

// console.log(tong)


// Tìm xem array có phần tử nào là số 5 không
// function check5(mang) {
//     for (let i = 0; i < mang.length; i++) {
//         let item = mang[i]

//         if (item % 5 == 0) {
//             return 'có hần tử 5 trong mảng'
//         }
//     }
//     return false
// }

//đếm phần tử 8 trong mảng
// function count8(array) {
//     let dem = 0;
//     for (let i = 0; i < array.length; i++) {
//         let item = array[i];
//         if (item === 8) {
//             dem = dem + 1
//         }
//     }
//     return dem;
// }

// let ketqua = count8(array)

// console.log('có ' + ketqua + " phần tử 8 trong arr")


// let courses = [{
//         id: 1,
//         name: 'html',
//         coin: 400
//     },
//     {
//         id: 2,
//         name: 'js',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'java',
//         coin: 100
//     },
//     {
//         id: 4,
//         name: 'css',
//         coin: 100
//     },
//     {
//         id: 5,
//         name: 'c#',
//         coin: 200
//     }
// ]



// let totalcoin = courses.reduce(function(total, khoahoc) {
//     return total + khoahoc.coin
// }, 0)

// console.log(totalcoin)




//forEach dùng để duyệt từng phần tử trong mảng
// courses.forEach(function(couse, index) {
//     console.log(index, couse)
// })


//every dùng để kiểm tra điều kiện nào đó
// let newcourse = courses.every(function(couse, index) {
//     console.log(index)
//     return couse.coin === 0
// })


//some thỏa mãn 1 diều điều đúng thì là đúng
// let newcourse = courses.some(function(couse, index) {
//     // console.log(index)
//     return couse.coin === 0
// })


// let newcourse = courses.find(function(couse, index) {
//     console.log(index)
//     return couse.name === 'java'
// })

// let newcourse = courses.map(function(couse, index, tam) {
//     return `<h2>${couse.name }</h2>`
//couse.name { 

//     id: couse.id,
//     name: ` Khóa học : ${couse.name} `,
//     coin: couse.coin,
//     coinText: ` Giá: ${couse.coin} `,
//     index: index,
//     tam: courses
// }
// })

// console.log(newcourse.join(" "))
// let i = 0
// let newcourse = courses.reduce(function(total, couse) {
//     i++
//     console.log(i, total)
//     return total + couse.coin;
// }, 0)

// console.log(newcourse)

// let companies = [{ name: 'vinamilk', category: 'food', star: 1981, end: 2003 },
//     { name: 'viettel', category: 'Telecommunication', star: 1992, end: 2018 },
//     { name: 'Sabeco', category: 'food', star: 1999, end: 2007 },
//     { name: 'Vinahomes', category: 're astable', star: 1989, end: 2010 },
//     { name: 'Mobifone', category: 'Telecommunicatio', star: 2009, end: 2014 },
//     { name: 'Masan', category: 'food', star: 1987, end: 2010 },
//     { name: 'Vinaphone', category: 'Telecommunicatio', star: 1986, end: 1996 },
//     { name: 'Vietconbank', category: 'Banking', star: 2011, end: 2016 },
//     { name: 'fpt', category: 'Technolory', star: 1981, end: 2003 }
// ]

// let ages = [45, 62, 14, 16, 46, 26, 65, 33, 34, 13, 21, 17, 6, 55, 22]


//Dùng forEach

// Kiểu củ
// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i])
// }


// companies.forEach(function(company, index, companies) {
//     console.log(index)
//     console.log(company)
// })

//ES6
// companies.forEach((company, index) => {
//     // console.log(index)
//     console.log(company)
// })

//filter : lọc qua nhưng thành tố của arr
// let dibar = []
// for (let age of ages) {
//     if (age >= 18) dibar.push(age)
// }

// console.log(dibar.sort())

// let dibar = ages.filter(function(are) {
//     return are > 18
// })

// const dibar = ages.filter(age => {
//     return age > 18
// })
// console.log(dibar)

// let dibar = companies.filter(function(company) {
//     if (company.category == 'food') {
//         return true
//     }
// })

// let dibar = companies.filter(company => {
//     if (company.category == 'food') {
//         return true
//     }
// })

// let dibar = companies.filter(company => company.category === 'food')



// let dibar = companies.filter(company => company.star >= 1901 && company.end <= 2000)
// let dibar = companies.map(function(company) {
//     return company.name
// })
// console.log(dibar)

// let dibar = companies.map(company => company.name).sort()

// let dibar = companies.map(company => `${company.name} (${company.star} - ${company.star})`)

// let dibar = companies.sort(function(a, b) {
//     if (a.star > b.star)
//         return 1
//     else if (a.star < b.star)
//         return -1
//     else return 0
// })

// let dibar = companies.sort((a, b) => {
//     return a.star > b.star ? 1 : -1
// })

// let dibar = companies.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1)
// let dibar = companies.reduce(function(total, agec) {
//     return total + agec.end + agec.star
// }, 0)

// // let dibar = companies.reduce((total, agec) => total + agec.end, 0)






// let dibar = companies.reduce((total, agec) => total + (agec.end - agec.star), 0)

// filter : lọc qua nhưng thành tố của arr
// // let dibar = []
// // for (let age of ages) {
// //     if (age >= 18) dibar.push(age)
// // }


let mayinfor = {
    name: 'Lê Tâm',
    age: 21,
    address: 'VN'
}

console.log(Object.values(mayinfor))