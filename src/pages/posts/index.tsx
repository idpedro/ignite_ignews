import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.postList}>
          <a>
            <time>12 de Março de 2021</time>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>
              Adipisicing elit. Tenetur ipsam reiciendis recusandae laudantium
              laboriosam nesciunt quasi quae fugit nemo voluptatem, similique
              corporis rerum culpa incidunt quis harum. Nam, quam dicta!
            </p>
          </a>
          <a>
            <time>12 de Março de 2021</time>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>
              Adipisicing elit. Tenetur ipsam reiciendis recusandae laudantium
              laboriosam nesciunt quasi quae fugit nemo voluptatem, similique
              corporis rerum culpa incidunt quis harum. Nam, quam dicta!
            </p>
          </a>
          <a>
            <time>12 de Março de 2021</time>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>
              Adipisicing elit. Tenetur ipsam reiciendis recusandae laudantium
              laboriosam nesciunt quasi quae fugit nemo voluptatem, similique
              corporis rerum culpa incidunt quis harum. Nam, quam dicta!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
