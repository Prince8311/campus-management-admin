import { PaginationWrapper } from "../Styles/ModalStyle";

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const lastPage = Math.ceil(totalItems / itemsPerPage);

    const pageNumbers = [];
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(currentPage + 2, lastPage);

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const goToPage = (pageNum) => {
        if (pageNum >= 1 && pageNum <= lastPage) {
            onPageChange(pageNum);
        }
    };

    return (
        <PaginationWrapper>
            <button className={`prev_btn ${currentPage === 1 ? 'disable' : ''}`} onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}><i className="fa-solid fa-angles-left"></i>Prev</button>

            <ul>
                {startPage > 1 && (
                    <>
                        <li onClick={() => goToPage(1)}>1</li>
                        {startPage > 2 && <span>...</span>}
                    </>
                )}

                {pageNumbers.map((num) => (
                    <li
                        key={num}
                        className={num === currentPage ? 'active' : ''}
                        onClick={() => goToPage(num)}
                    >
                        {num}
                    </li>
                ))}

                {endPage < lastPage && (
                    <>
                        {endPage < lastPage - 1 && <span>...</span>}
                        <li onClick={() => goToPage(lastPage)}>{lastPage}</li>
                    </>
                )}
            </ul>

            <button className={`next_btn ${currentPage === lastPage ? 'disable' : ''}`} onClick={() => goToPage(currentPage + 1)} disabled={currentPage === lastPage}>Next<i className="fa-solid fa-angles-right"></i></button>
        </PaginationWrapper>
    );
};

export default Pagination;