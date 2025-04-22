


 // import ArticleCard from '@/components/ArticleCard';
// import { Article } from '@/types';
import styles from '@/styles/ArticlesPage.module.css';


import Link from "next/link";

const ArticlesPage = () => {
  return <div className="flex flex-col gap-2">
  <h2>No articles yet. Soon to be added.</h2>

  <h3>Actively posting on X.</h3>

  <Link  href="https://x.com/shams_zero" target="_blank" rel="noopener noreferrer">
    <h4 className={styles.link}>Find me on X?</h4>
  </Link>
</div>
};

export default ArticlesPage;

// -------------------------------------sample writing for future articles

// interface ArticlesPageProps {
//   articles: Article[];
// }

// const ArticlesPage = ({ articles }: ArticlesPageProps) => {
//   return (
//     <div className={styles.layout}>
//       <h1 className={styles.pageTitle}>My Articles</h1>
//       {/* <p className={styles.pageSubtitle}>
//         Recent posts from{' '}
//         <a
//           href="https://dev.to/shams03"
//           target="_blank"
//           rel="noopener"
//           className={styles.underline}
//         >
//           dev.to
//         </a>{' '}
//         where I share insights and tutorials about web development.
//       </p>
//       <div className={styles.container}>
//         {articles.map((article) => (
//           <ArticleCard key={article.id} article={article} />
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const res = await fetch(
//     'https://dev.to/api/articles/me/published?per_page=6',
//     {
//       headers: {
//         'api-key': process.env.NEXT_DEV_TO_API_KEY!,
//       },
//     }
//   );

//   const data = await res.json();

//   return {
//     props: { title: 'Articles', articles: data },
//     revalidate: 60,
//   };
// }


// export default ArticlesPage;
