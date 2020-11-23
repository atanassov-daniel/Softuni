function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            let oldToString = super.toString;

            if (this.comments.length > 0) {
                let resArray = [];
                this.comments.forEach(comment => resArray.push(` * ${comment}`));

                return oldToString.call(this) + `\nRating: ${this.likes - this.dislikes}` + "\nComments:\n" + resArray.join("\n");
            }

            return oldToString.call(this) + `\nRating: ${this.likes - this.dislikes}`;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }
        view() {
            this.views++;
            return this;
        }
        toString() {
            let oldToString = super.toString;
            return oldToString.call(this) + `\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    };
}

let classes = solve();

let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);
console.log(test);
test.toString();
// "Post: TestTitle\n" + "Content: TestContent\n" + "Rating: -5"