function solution() {
  class Post {
    constructor(title, content) {
      this.title = title || 'No title';
      this.content = content || 'No content';
    }
    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }
  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = Number.isInteger(likes) ? likes : 0;
      this.dislikes = Number.isInteger(dislikes) ? dislikes : 0;
      this.comments = [];
    }
    addComment(comment) {
      this.comments.push(comment);
    }
    toString() {
      const result = [
        super.toString(),
        `Rating: ${this.likes - this.dislikes}`,
      ];
      if (this.comments.length > 0) {
        result.push('Comments:');
        this.comments.forEach((c) => result.push(` * ${c}`));
      }

      return result.join('\n');
    }
  }
  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = Number.isInteger(views) ? views : 0;
    }
    view() {
      this.views++;
      return this;
    }
    toString() {
      return super.toString() + `\nViews: ${this.views}`;
    }
  }
  return { Post, SocialMediaPost, BlogPost };
}

const classes = solution();
let post = new classes.Post('Post', 'Content');

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost('TestTitle', 'TestContent', 25, 30);

scm.addComment('Good post');
scm.addComment('Very good post');
scm.addComment('Wow!');

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
