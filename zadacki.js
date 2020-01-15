function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b
}

function sum(arr) {
	return arr.reduce(total,current) => total+current , 0;
}



function multiply (arr) {
	return arr.reduce(acc,current) => total*current,0);
}

function power(a,b) {
	for(let i=0;i<b.length;i++){
	a=a*a;
	}
}



function factorial(n){
	let result=n;
	for(let i=n-1;i>0;i--){
		result=result*n;
	}
	return result;
}

function palindrome(str){

for(let i=0;i<str.length/2;i++){
	if(str[i]!=str[str.length-1-i]){
		return false;
	}
}
	return true;

}

//ceaser enkripcija

function ceaser(str,num){
    let newStr="";
	const alpha= [
  'a','b','c','d','e','f',
  'g','h','i','j','k','l',
  'm','n','o','p','q','r',
  's','t','u','v','w','x',
  'y','z'
];
	
	for(let i=0;i<str.length;i++){
	for(let j=0;j<alpha.length;j++){
		if(str[i]===alpha[j]){
			newStr=newStr+alpha[(j+num)%26];
		}
	}
		
	}
	return newStr;
}

//return the specific number in a fibonaci sequence


function fibonacci(num){
	let a=0;
	let b=1;
	for(let i=1;i<num;i++){
		const temp=b;
		b=a+b;
		a=temp;
	}
return b;
}

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]


const titles=books.map(function(book){
	return book.title;

})

const people = [
      {
        name: 'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
      },
    ]

    const oldest=people.sort(function(a,b){
	const lastGuy=a.yearOfDeath-a.yearOfBirth;
	const nextGuy=b.yearOfDeath-b.yearOfBirth;
		if(lastGuy>nextGuy){
			return -1;

		}else{
			return 1;
		}
    })

//naoganje na najstariot covek vo array;

    function oldest(arr){
    	let oldestPersonObj=arr[0];
    	let oldestPerson=arr[0].yearOfDeath-arr[0].yearOfBirth;
    	for(let i=1;i<arr.length;i++){
    		let newPerson=arr[i].yearOfDeath-arr[i].yearOfBirth;
    		if(newPerson>oldestPerson){
    			oldestPerson=newPerson;
    			oldestPersonObj=arr[i];
    		}

    }    	
    return oldestPersonObj;
}
