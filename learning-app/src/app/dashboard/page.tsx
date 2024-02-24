import Card from "@/components/card";
import GridItem from "@/components/grid-item";
import JSONData from "../../data/data.json";

export default function Page() {
    const data = JSONData;

    return (
        <>
        <main>
            <h1>Dashboard page</h1>
            <Card kind="shallow" data={data.dashboard} />
            <GridItem />
        </main>
        </>
    );
}