// import "./styles.css";
import react, { useEffect } from "react";
import Lesson from "../Lesson/Lesson";
import paginationStyles from './Pagination.module.css'

export default function Pagination() {
    const [array, setArray] = react.useState([]);
    const [currentPage, setCurrentPage] = react.useState(1);
    const [blocks, setBlocks] = react.useState([[{id: 1},{id: 1},{id: 1},{id: 1}]]);
    var totalItems = 0;
    useEffect(() => {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`
        )
            .then((response) => response.json())
            .then((result) => setArray(result));
    });
    function change() {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${currentPage}`
        )
            .then((response) => response.json())
            .then((result) => setArray(result));
    }
    function decrement() {
        setCurrentPage(currentPage - 1);
    }
    function increment() {
        setCurrentPage(currentPage + 1);
    }
    return (
        <div>
            <div className={paginationStyles.content_block}>
                {blocks.map((i) => i.map((item) => {
                    return <Lesson number={item.id} time={10}/>
                }))}
            </div>
            <div className={paginationStyles.arrows_cont}>
                <button  className={paginationStyles.arrow} disabled={currentPage === 1 ? true : false} onClick={decrement}>
                    &#8592;
                </button>
                <button  className={paginationStyles.arrow} disabled={currentPage === 10 ? true : false} onClick={increment}>
                    &#8594;
                </button>
            </div>
        </div>
    );
}