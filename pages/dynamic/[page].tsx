import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({
    query,
}) => {
    const page = query.page as string;

    return { props: { page } };
};

const Page = ({ page }: { page: string }) => {
    return (
        <div>
            <h1>Page {page}</h1>
        </div>
    )
}

export default Page;

export const config = {
    runtime: 'experimental-edge',
};