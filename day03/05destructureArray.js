//destructure array
const programming = ["java","js","python","golang","sql","oracle","postgre"];

const[java,js,python,go,...db] = programming ;

// tidak menampilkan sisa array programming
// const[java,js,python,go,,,] = programming ;

console.log();