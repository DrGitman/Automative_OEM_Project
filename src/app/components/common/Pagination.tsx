import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    pageSize,
    onPageChange,
    onPageSizeChange,
}: PaginationProps) {
    const pages = [];

    // Logic to show 1 2 3 ... totalPages if needed
    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        pages.push(1);
        if (currentPage > 3) pages.push("...");

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
            if (!pages.includes(i)) pages.push(i);
        }

        if (currentPage < totalPages - 2) pages.push("...");
        if (!pages.includes(totalPages)) pages.push(totalPages);
    }

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 border-t border-[#EEEFF2] mt-6">
            {/* Left side: Page Size Selector */}
            <div className="flex items-center gap-3">
                <span className="text-[#A3A6B4] text-sm font-medium">Show result:</span>
                <div className="relative group">
                    <select
                        value={pageSize}
                        onChange={(e) => onPageSizeChange(Number(e.target.value))}
                        className="appearance-none bg-white border border-[#EEEFF2] rounded-xl px-5 py-2.5 pr-10 text-sm font-bold text-[#04091E] outline-none hover:border-[#D72322] transition-all cursor-pointer shadow-sm group-hover:shadow-md"
                    >
                        <option value={3}>3</option>
                        <option value={6}>6</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#A3A6B4]">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 1L5 5L9 1" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Right side: Page Controls */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2.5 rounded-xl border border-[#EEEFF2] text-[#A3A6B4] hover:text-[#D72322] hover:bg-gray-50 transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#A3A6B4] shadow-sm"
                >
                    <HiChevronLeft className="text-xl" />
                </button>

                <div className="flex items-center gap-1.5">
                    {pages.map((page, idx) => (
                        page === "..." ? (
                            <span key={`dots-${idx}`} className="px-3 text-[#A3A6B4] font-bold">...</span>
                        ) : (
                            <button
                                key={`page-${page}`}
                                onClick={() => onPageChange(page as number)}
                                className={`min-w-[40px] h-[40px] rounded-xl text-sm font-bold transition-all ${currentPage === page
                                        ? "bg-[#EC221F] text-white shadow-lg shadow-red-100 scale-105"
                                        : "bg-white text-[#A3A6B4] hover:text-[#04091E] hover:bg-gray-50 border border-[#EEEFF2] shadow-sm"
                                    }`}
                            >
                                {page}
                            </button>
                        )
                    ))}
                </div>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || totalPages === 0}
                    className="p-2.5 rounded-xl border border-[#EEEFF2] text-[#A3A6B4] hover:text-[#D72322] hover:bg-gray-50 transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#A3A6B4] shadow-sm"
                >
                    <HiChevronRight className="text-xl" />
                </button>
            </div>
        </div>
    );
}
