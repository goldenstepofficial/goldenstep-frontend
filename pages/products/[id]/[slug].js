import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import KitComponent from '../../../components/categories/KitComponent';
import AccessoriesComponent from '../../../components/categories/AccessoriesComponent';
import CratesComponents from '../../../components/categories/CratesComponents';
import Layout from '../../../components/Layout/Layout';
import MyHead from '../../../components/Head';

const Product = ({ products }) => {

    return (
        <>
            <Layout>
                <MyHead title={`${products.name} - Goldenstep`} description="This is the homepage" />
                {products.category == "Accessories" && (
                    <AccessoriesComponent props={products} />
                )}
                {products.category == "Kit" && (
                    <KitComponent props={products} />
                )}
                {products.category == "Crates" && (
                    <CratesComponents props={products} />
                )}
            </Layout>
        </>
    )
}

export default Product;

export const getServerSideProps = async (context) => {
    let products = null;

    async function getProducts() {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        await fetch(
            "http://backend.goldenstep.in/store/products/" + context.params.id,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                products = result;
            })
            .catch((error) => console.log("error", error));
    }
    await getProducts();
    return {
        props: {
            products,
        },
    };
}
