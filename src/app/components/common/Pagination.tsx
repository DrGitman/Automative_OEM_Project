import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
    itemsName?: string;
    onPageChange: (page: number) => void;
    onPageSizeChange?: (size: number) => void;
    hidePageSize?: boolean;
}

export default function Pagination({
    currentPage,
    totalPages,
    pageSize,
    totalItems,
    itemsName = "items",
    onPageChange,
    onPageSizeChange,
    hidePageSize = false,
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

    const startItem = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-5 border-t border-[#F4F4F5]">
            {/* Left side: Item Count */}
            <div className="flex items-center gap-1 text-[#71717A] text-xs font-medium">
                Showing <span className="text-[#09090B] font-semibold">{startItem}</span> to <span className="text-[#09090B] font-semibold">{endItem}</span> of <span className="text-[#09090B] font-semibold">{totalItems}</span> {itemsName}
            </div>

            {/* Right side: Page Controls */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-9 h-9 rounded-lg border border-[#E4E4E7] bg-white text-[#71717A] hover:text-[#D72322] hover:bg-gray-50 transition-all disabled:opacity-30 shadow-sm flex items-center justify-center"
                >
                    <HiChevronLeft className="text-xl" />
                </button>

                <div className="flex items-center gap-1.5">
                    {pages.map((page, idx) => (
                        page === "..." ? (
                            <span key={`dots-${idx}`} className="px-1 text-[#A1A1AA] text-xs">...</span>
                        ) : (
                            <button
                                key={`page-${page}`}
                                onClick={() => onPageChange(page as number)}
                                className={`min-w-[36px] h-9 rounded-lg text-xs font-semibold transition-all border ${currentPage === page
                                        ? "bg-[#D72322] text-white border-[#D72322] shadow-sm"
                                        : "bg-white text-[#71717A] hover:text-[#09090B] hover:bg-gray-50 border-[#E4E4E7] shadow-sm"
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
                    className="w-9 h-9 rounded-lg border border-[#E4E4E7] bg-white text-[#71717A] hover:text-[#D72322] hover:bg-gray-50 transition-all disabled:opacity-30 shadow-sm flex items-center justify-center"
                >
                    <HiChevronRight className="text-xl" />
                </button>
            </div>
        </div>
    );
}
