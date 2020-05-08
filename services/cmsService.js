const axios = require('axios')
export const getPosts = async () => {
    let posts = await axios.get('http://localhost:1337/posts')
    return posts.data
}

export const getPost = async (id) => {
    let post = await axios.get('http://localhost:1337/posts/' + id)
    return post.data    
}

/*export const getPostsFromSubject = async (subject) => {
    let subject = await axios.get('http://localhost:1337/subjects/' + subject.id)
    return subject.data.posts    
}*/

export const getSubjects = async () => {
    let subjects = await axios.get('http://localhost:1337/subjects')
    return subjects.data
}

export const getSubject = async (id) => {
    let subject = await axios.get('http://localhost:1337/subjects/' + id)
    console.log(subject)
    return subject.data    
}

export const getBlogPosts = async () => {
    const context = await require.context('~/assets/content/blog/', false, /\.json$/);
    console.log(context)
    const searchposts = await context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }));

    return searchposts.reverse()
}