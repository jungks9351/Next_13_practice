import Link from 'next/link';
import blogs from '../../data/blogs';

const BlogPage = () => {
  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.title}?id=${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogPage;
