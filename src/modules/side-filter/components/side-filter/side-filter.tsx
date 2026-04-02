import Filter from "../filter/filter.tsx";


function SideFilter() {

    return (
        <aside className="self-start flex flex-col items-center gap-2 w-fit ml-10 bg-gray-200 p-4 rounded-xl">
            <header className="text-center text-lg">
                Filter
            </header>
            <Filter />
        </aside>
    );
}

export default SideFilter;