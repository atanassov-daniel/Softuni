function solution(arg) {
    if (arg === "upvote") {
        this.upvotes++;
    } else if (arg === "downvote") {
        this.downvotes++;
    } else if (arg === "score") {
        let added = 0;
        if (this.upvotes + this.downvotes > 50) {
            if (this.upvotes > this.downvotes) {
                added = Math.ceil(0.25 * this.upvotes);
            } else if (this.downvotes > this.upvotes) {
                added = Math.ceil(0.25 * this.downvotes);
            } else {
                added = Math.ceil(0.25 * this.upvotes);
            }
        }


        let balance = this.upvotes - this.downvotes;

        let percentage = this.upvotes / (this.upvotes + this.downvotes) * 100;

        let rating;
        if (this.upvotes + this.downvotes < 10) {
            rating = "new";
        } else if (percentage > 66) {
            rating = "hot";
        } else if (balance >= 0 && (this.upvotes > 100 || this.downvotes > 100)) {
            rating = "controversial";
        } else if (balance < 0) {
            rating = "unpopular";
        } else { // if (rating === undefined)
            rating = "new";
        }

        return [this.upvotes + added, this.downvotes + added, balance, rating];
    }
}

// example from the document
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 1; i <= 50; i++) {
    solution.call(post, 'downvote'); // (executed 50 times)
}
score = solution.call(post, 'score'); // [139, 189, -50, 'unpopular']
console.log(score);

// zero test 3
let forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 200,
    downvotes: 200
};
score = solution.call(forumPost, 'score');
console.log(score); // [250, 250, 0, 'controversial']