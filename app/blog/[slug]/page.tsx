import React from 'react';

const BlogDetailPage = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}) => {
  return (
    <>
      <h1>BlogDetailPage</h1>
      <p>{params.slug}</p>
      <p>{searchParams.id}</p>
    </>
  );
};

export default BlogDetailPage;
