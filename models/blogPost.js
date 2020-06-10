export class BlogPost {
  constructor(rawPost) {
    this.date = rawPost.date
    this.title = rawPost.title
    this.description = rawPost.description
    this.body = rawPost.body
    this.slug = rawPost.slug
  }

  get created() {
    const myDate = new Date(this.date)
    const day =
      myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()
    const month =
      myDate.getMonth() < 10 ? '0' + myDate.getMonth() : myDate.getMonth()
    return day + '/' + month + ' ' + myDate.getFullYear()
  }
}
