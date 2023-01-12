import react, { useEffect } from "react";
import Lesson from "../Lesson/Lesson";
import paginationStyles from './Pagination.module.css'
import API from "../../utils/axiosConfigTOKEN";

export default function Pagination({lessons, setLessonId, id, onCLick, number_pag, num_words}) {
    const [array, setArray] = react.useState([]);
    const [currentPage, setCurrentPage] = react.useState(0);
    const [count, setCount] = react.useState(0);
    useEffect(() => {
        setArray(lessons)
    }, []);

    useEffect(() => {
        API.get('lessons/', { params: { limit: number_pag, offset: currentPage } })
            .then((result) => {
                setArray(result.data.results)
                setCount(result.data.count)
            });
    }, [currentPage]);

    function decrement() {
        setCurrentPage(currentPage - number_pag);
    }
    function increment() {
        setCurrentPage(currentPage + number_pag);
    }

    return (
        <div>
            <div className={paginationStyles.content_block}>
                {array?.map((item) => <Lesson num_words={num_words} key={item.id} id={id} onClick={() => onCLick(item.id)} lesson={item} time={10}/>)}
            </div>
            <div className={paginationStyles.arrows_cont}>
                <button style={currentPage ? {cursor: 'pointer'} : null} className={paginationStyles.arrow} disabled={currentPage === 0 ? true : false} onClick={decrement}>
                    &#8592;
                </button>
                <button style={currentPage !== count-number_pag ? {cursor: 'pointer'} : null} className={paginationStyles.arrow} disabled={currentPage === count-number_pag ? true : false} onClick={increment}>
                    &#8594;
                </button>
            </div>
        </div>
    );
}