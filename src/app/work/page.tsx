export default function Work() {
  return (
    <article className='prose prose-slate prose-h2:text-center'>
      <h1>Work</h1>
      <CategoryDiv>
        <CategoryTitle title='Services' />
      </CategoryDiv>
      <CategoryDiv>
        <CategoryTitle title='Illustration' />
      </CategoryDiv>
      <CategoryDiv>
        <CategoryTitle title='Design' />
      </CategoryDiv>
      <CategoryDiv>
        <CategoryTitle title='3DCG Models' />
      </CategoryDiv>
      <CategoryDiv>
        <CategoryTitle title='3DCG Animations' />
      </CategoryDiv>
      <CategoryDiv>
        <CategoryTitle title='Videos' />
      </CategoryDiv>
    </article>
  );
}

const CategoryTitle = ({ title }: { title: string }) => {
  return <h2 id={title}>{title}</h2>;
};

const CategoryDiv = ({ children }: { children: React.ReactNode }) => {
  return <div className='group'>{children}</div>;
};
