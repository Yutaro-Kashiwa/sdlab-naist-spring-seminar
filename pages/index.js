import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SD Lab Spring Seminar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to SDLab!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
       <h3>Contributors:</h3>
       <table border="1">
         <tr>
           <th>名前aasa</th>
           <th>貢献日時</th>
         </tr>
         <tr>
           <td>柏 祐太郎</td>
           <td>2025/2/25</td>
         </tr>
       </table>      
</main>
      <Footer />
    </div>
  )
}
