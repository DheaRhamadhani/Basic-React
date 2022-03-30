import { useEffect, useState } from "react";
import BookList from "../components/BookList";

export default function Book(props) {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    /**inizialize state books */
    let arrBooks = [
      {
        isbn: 1,title: `Marvel Comic`,creator: `undertaker`,publisher: `Lancar Jaya`,income: 1000,rating: 3,
        progress: 40,
        cover: `http://asset-a.grid.id/crop/0x0:0x0/x/photo/2018/11/13/4155295260.jpg`,
      },
      {
        isbn: 2,title: `Doraemon`,creator: `Rhodey`,publisher: `Kencana `,income: 5000,rating: 4,
        progress: 80,
        cover: `https://cdn0-production-images-kly.akamaized.net/_-NVemb4i3PobzJaIgavABqS8dk=/469x625/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3228532/original/060938800_1599203552-118717559_401026047543471_1424088856767846866_n.jpg`,
      },
      {
        isbn: 3,title: `Spiderman Comic`,creator: `Jose Maurinho`,publisher: `FF Publisher`,income: 7000,rating: 5,
        progress: 50,
        cover: `https://cdn-asset.jawapos.com/wp-content/uploads/2020/09/images-21-1-560x314.jpeg`,
      },
    ];

    setBooks(arrBooks);
  },[])

  return (
    <div className="container-fluid">
        <h3>List Books</h3>
      {books.map((item) => (
        <BookList 
        key={`key-${item.isbn}`}
        isbn={item.isbn}
        title={item.title}
        creator={item.creator}
        publisher={item.publisher}
        rating={item.rating}
        cover={item.cover}
        progress={item.progress}>

        </BookList>
      ))}
    </div>
  );
}
