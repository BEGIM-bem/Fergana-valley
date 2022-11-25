import react, { useEffect } from "react";
import Lesson from "../Lesson/Lesson";
import paginationStyles from './Pagination.module.css'
import API from "../../utils/axiosConfig";

export default function Pagination({lessons, setLessonId, id}) {
    const [array, setArray] = react.useState([]);
    const [currentPage, setCurrentPage] = react.useState(0);
    const [count, setCount] = react.useState(0);
    useEffect(() => {
        setArray(lessons)
    }, []);

    useEffect(() => {
        API.get('lessons/', { params: { limit: 4, offset: currentPage } })
            .then((result) => {
                setArray(result.data.results)
                setCount(result.data.count)
            });
    }, [currentPage]);

    function decrement() {
        setCurrentPage(currentPage - 1);
    }
    function increment() {
        setCurrentPage(currentPage + 1);
    }

    return (
        <div>
            <div className={paginationStyles.content_block}>
                {array?.map((item) => <Lesson key={item.id} id={id} onClick={() => setLessonId(item.id)} lesson={item} time={10}/>)}
            </div>
            <div className={paginationStyles.arrows_cont}>
                <button  className={paginationStyles.arrow} disabled={currentPage === 0 ? true : false} onClick={decrement}>
                    &#8592;
                </button>
                <button  className={paginationStyles.arrow} disabled={currentPage === count-4 ? true : false} onClick={increment}>
                    &#8594;
                </button>
            </div>
        </div>
    );
}