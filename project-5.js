class queue {
    constructor() {
        this.s1 = []
        this.s2 = []
    }

    enqueue (val) {
        this.s1.push(val)
    }

    dequeue(){
        while(this.s1.length > 1){
            this.s2.push(this.s1.pop())
        }

        let dequeueEle = this.s1.pop()

        while(this.s2.length > 0){
            this.s1.push(this.s2.pop())
        }

        console.log("remove element in queue is:", dequeueEle)
    }

    peakEle(){
        while(this.s1.length > 1){
            this.s2.push(this.s1.pop())
        }

        let dequeuepeak = this.s1[0];

        while(this.s2.length > 0){
            this.s1.push(this.s2.pop())
        }

        console.log("queue peak element is:", dequeuepeak)
    }

    isEmpty() {
        if(this.s1.length == 0) {
            console.log("queue is Empty...")
        }
        else{
            console.log("queue is Not Empty")
        }
    }

    display(){
        console.log(this.s1)
    }
}

let q = new queue();

q.enqueue(11);
q.enqueue(12);
q.enqueue(13);
q.enqueue(14);
q.enqueue(15);
q.display()

q.dequeue()
q.dequeue()
q.display()

q.peakEle()
q.display()

q.isEmpty()
q.display()


// Output :-

// [ 11, 12, 13, 14, 15 ]
// queue remove element is: 11
// queue remove element is: 12
// [ 13, 14, 15 ]
// queue peak element is: 13
// [ 13, 14, 15 ]
// queue is Not Empty
// [ 13, 14, 15 ]


console.log("Question No. 03 write a program check first string swap can make strings equal. (leetcode question no 1790)")
let areAlmostEqual = function(s1, s2) {
    if (s1 === s2){
        return true;
    } 
   let result = [];

   for (let i = 0; i < s1.length; i++) {
       if (s1[i] !== s2[i]){
           result.push(i);
       } 
        
       if (result.length > 2){
           return false;
       } 
   }
   return result.length === 2 
};

let s1 = "bank";
let s2 = "kanb";

console.log(areAlmostEqual(s1, s2))

// output =  true
