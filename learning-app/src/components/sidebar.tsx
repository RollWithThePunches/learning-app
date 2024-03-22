import Link from "next/link";
import topics from "../api/topics";

export default function SideNav() {
    let start = 0;
    start++;

    return (     
        <>
        <aside>
            <ul>
            {Object.values(topics).map(topic => {
                return (
                    <li key={start}>
                        <Link key={start} href={`/${topic.id}`} className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                            <p className="hidden md:block">{topic.cta}</p>
                        </Link>
                    </li>
                )
            })} 
            </ul>
        </aside>
        </>
    );
}